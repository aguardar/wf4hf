# 解析api请求
import traceback
from wf4hf import settings
#from libhackrf import *

_funclist = {}

def reg_func(func,param_types,param_defaults):
    ret = False
    try:
        _funclist[func.__name__]=(func,param_types,param_defaults)
        ret = True
    except:
        traceback.print_exc()
    return ret

def get_func(name):
    if name in _funclist:
        return _funclist[name]
    else:
        return None
        
def call_func(name,params):
    ret = None
    try:
        ret = _funclist[name][0](params)
    except:
        traceback.print_exc()
    return ret

### api - program
# params:page as int ,count as int
# ret:total_page as int,total as int,programs as array

def test(params):
    ret=dict()
    ret['count']=100
    ret['retstr']="hello word"
    return ret
    

reg_func(test,{},{})

    

