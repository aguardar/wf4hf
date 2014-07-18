/*
* 不关心的非必须参数传递null,（右侧可不传）
*/
var com={
    init:function(){}, 

    test:function(count,retstr){
        var params = {};
        if(count!=undefined&&count!=null){
            params.count = count;
        }
        if(retstr!=undefined&&retstr!=null){
            params.retstr = retstr;
        }
        return _$call('test',params);
    }

};
com.init();
