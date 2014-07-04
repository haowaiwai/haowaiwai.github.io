title: 'Tree Node Observer'
date: 2014-06-17 10:17:21
tags:
---
## Demo code ##
```
class Test :  public ICfmObserver , public IBootContext , public IEventObserver{
private:
	IContext* mContext;
	ICfm* mCfm;
	IEvent* mEvent;
	boolean mChanged;
public:
	Test(IContext* ctx):ICfmObserver():IBootContext():IEventObserver() {
		mContext = ctx;
		mChanged = true;
		if(mContext){
			mCfm = mContext->cfmFactory();
			mEvent = mContext->eventFactory();
		}
	}
	~Test() {
	}

	status update(string event_owner, string event, string data) {
		if(event == E_CFG_APPLY){
			if(mChanged){
			}
		}
	}

	status update(int id, string full_name, int opt_flag, string value){
		if(id == UID_IGD_DI_XQCALIMIT_FUN1_FUN1){
			mChanged = true;
		}
		if(id == UID_IGD_DI_XQCALIMIT_FUN3_FUN3){
			mChanged = true;
		}
		return s_ok;
	}

	status onStart() {
		mCfm->registObserver(UID_IGD_DI_XQCALIMIT_FUN1_FUN1,this);
		mCfm->registObserver(UID_IGD_DI_XQCALIMIT_FUN3_FUN3,this);
		return s_ok;
	}

	status onStop() {
		mCfm->unregistObserver(UID_IGD_DI_XQCALIMIT_FUN1_FUN1,this);
		mCfm->unregistObserver(UID_IGD_DI_XQCALIMIT_FUN3_FUN3,this);
		return s_ok;
	}
	status onLoad() {
		mEvent->registObserver(E_CFG_APPLY,this);
		return s_ok;
	}

	status onUnload() {
		mEvent->unregistObserver(E_CFG_APPLY,this);
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
