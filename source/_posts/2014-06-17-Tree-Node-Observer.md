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
	string new_fun1;
	string old_fun1;
	string new_fun3;
	string old_fun3;
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

	status cfgChanged() {
		//for example:iptables -D / iptables -A
		old_fun1 = new_fun1;
		old_fun3 = new_fun3;
		mChanged = false;
	}
	
	status update(string event_owner, string event, string data) {
		if(event == E_CFG_APPLY){
			if(mChanged){
				cfgChanged();
			}
		}
	}

	status update(int id, string full_name, int opt_flag, string value) {
		if(id == UID_IGD_DI_XQCALIMIT_FUN1_FUN1) {
			if(new_fun1 != value) {
				mChanged = true;
			}
		}
		if(id == UID_IGD_DI_XQCALIMIT_FUN3_FUN3) {
			if(new_fun3 != value) {
				mChanged = true;
			}
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
