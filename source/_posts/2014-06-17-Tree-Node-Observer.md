title: 'Tree Node Observer'
date: 2014-06-17 10:17:21
tags:
---
## Demo code ##
```
class Test :  public ICfmObserver , public IBootContext {
private:
	IContext* mContext;
	ICfm* mCfm;
public:
	Test(IContext* ctx):ICfmObserver() {
		mContext = ctx;
		if(mContext){
			mCfm = mContext->cfmFactory();
		}
	}
	~Test() {
	}
	status update(int id, string full_name, int opt_flag, string value){
		mContext->systemCall("echo \"%s--%s\" > /tmp/111",string2char(full_name),string2char(value));
		return s_ok;
	}

	status onStart() {
		mCfm->registObserver(UID_IGD_P_I_R_Role,this);
		return s_ok;
	}

	status onStop() {
		mCfm->unregistObserver(UID_IGD_P_I_R_Role,this);
		return s_ok;
	}
	status onLoad() {
		return s_ok;
	}
	status onRun() {
		return s_ok;
	}
}

int main(int argc, char* argv[]) {
	IContext *context = getContext();
	if(context){
		context->init(argc,argv);
		ILoop *loop = context->loopFactory();
		Test* cb = new Test(context);

		if(cb && loop && context){
			context->registBootContext(cb);
			context->load();
			loop->run();
		}
		releaseContext(context);
	}
	return 0;
}
```
