
    var f=function(){
    var _ = NEJ.P,
        _e = _('nej.e'),
        _v = _('nej.v'),
        _j = _('nej.j'),
        _u = _('nej.u'),
        _p = _('nej.ut');
    //获取节点
    var _parent=_e._$get('trainrun');
    //滚动效果
    var _roll=function(_target,_index){
        if(!_target.style.left) _target.style.left=(_index*3)+"px";
        else _target.style.left=(parseInt(_target.style.left)>(600-_index*3))?
                                    "0px":parseInt(_target.style.left)+3*_index+"px";
    };
    //车速数组
    var _carSpeed=[0,0,0,0];
    //item节点点击事件
    var _onItemClick=function(_event,_index){
        var _target=_v._$getElement(_event);
        _carSpeed[_index-1]+=1;
        _target.innerHTML=_target.innerHTML.substring(0,2)+"x"+_carSpeed[_index-1];
        setInterval(_roll._$bind(this,_target,_index),1000);
    }
    //item回调函数
    var _cbWithItem=function(_item,_index,_list){
        if(_index%2==0)_item.style.backgroundColor="#B4EEB4";
        _v._$addEvent(_item,"click",_onItemClick._$bind2(this,_index+1));
    }
    //获取Item节点
    var _xItems=_e._$getByClassName(_e._$getChildren(_parent)[1],"x-item");
    //给Item节点添加事件
    _u._$forEach(_xItems,_cbWithItem,this);
};
define(['{lib}base/event.js'],f);