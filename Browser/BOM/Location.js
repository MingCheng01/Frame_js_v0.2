//====================================================================================================
//伪造Location
var Location = function Location() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Location
Frame.safe(Location);
//设置原型名
Frame.rename(Location, 'Location');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建实例
location = {};
//原型链指向
location.__proto__ = Location.prototype;
//参数
location.href = "https://www.baidu.com";
location.port = "";
location.protocol = 'https:';
location.host = 'www.baidu.com';
location.hostname = "";
location.origin = "";
location.pathname = "";