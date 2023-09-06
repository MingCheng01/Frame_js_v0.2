//====================================================================================================
//伪造Geolocation
var Geolocation = function Geolocation() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Geolocation
Frame.safe(Geolocation);
//设置原型名
Frame.rename(Geolocation, 'Geolocation');
//////////////////////////////////////////////////////////////////////////////////////////////////////
Geolocation.prototype.clearWatch = function clearWatch() {
    debugger;
};
Frame.safe(Geolocation.prototype.clearWatch);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Geolocation.prototype.getCurrentPosition = function getCurrentPosition() {
    debugger;
};
Frame.safe(Geolocation.prototype.getCurrentPosition);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Geolocation.prototype.watchPosition = function watchPosition() {
    debugger;
};
Frame.safe(Geolocation.prototype.watchPosition);