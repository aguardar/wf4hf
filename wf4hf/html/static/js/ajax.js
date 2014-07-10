// function _$call(method,params){
   // params.method = method;
   // console.debug(params);
   // var ret;
   // $.ajax({
        // type    : "GET",
        // url     : "/y/do",
        // async   : false,
        // data    : params,
        // success : function(data){
            // data = eval('('+data+')');
            // ret = data;
   // },
   // error        : function(xmlHttp,textStatus){
        // alert('error');
   // }
  // });
  // console.debug(ret);
  // return ret;
// }

function _$call(method,params){
    var ret;
    for(key in params){
        params[key] = JSON.stringify(params[key])
    }
    params.method = method;
    var ret;
    $.ajax({
        type    : "GET",
        url     : "/do",
        async   : false,
        data    : params,
        success : function(data){
            data = eval('('+data+')');
            ret = data;
        },
        error   : function(xmlHttp,textStatus){
            alert('hehe error');
        }
    });
  return ret;
}