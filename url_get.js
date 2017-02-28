/*to get url parameter*/
/*获取url参数*/
/*
for example
举个栗子
//http://www.xxxx.com?p=1
alert(GetUrlParameter("p")) //output: 1
*/
function GetUrlParameter(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
