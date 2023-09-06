//====================================================================================================
window = this;
self = window;
//伪造Window
var Window = function Window() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Window
Frame.safe(Window);
//原型链指向
Frame.inherits(Window, WindowProperties);
//设置原型名
Frame.rename(Window, 'Window');
Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;
//原型链指向
window.__proto__ = Window.prototype;
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造
window.setTimeout = function (x, y) {
    //x可能是方法也可能是文本
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    return null;
};
Frame.safe(window.setTimeout);
window.open = function open() {
    debugger;
};
Frame.safe(window.open);
window.chrome = Frame.proxy_(class chrome {

});
window.DeviceOrientationEvent = function DeviceOrientationEvent() {
    debugger;
};
Frame.safe(window.DeviceOrientationEvent);
window.DeviceMotionEvent = function DeviceMotionEvent() {
    debugger;
};
Frame.safe(window.DeviceMotionEvent);
window.openDatabase = function openDatabase() {
    debugger;
};
Frame.safe(window.openDatabase);
window.AudioContext = function AudioContext() {
    debugger;
};
Frame.safe(window.AudioContext);
window.setInterval = function setInterval() {
    debugger;
};
Frame.safe(window.setInterval);
window.moveBy = function () {
    debugger;
};
Frame.safe(window.moveBy);
window.moveTo = function () {
    debugger;
};
Frame.safe(window.moveTo);
window.dispatchEvent = function () {
    return true
};
Frame.safe(window.dispatchEvent);
window.devicePixelRatio = 1.75;
window['0'] = window;
window.top = window;
window.length = 1;
window.innerHeight = 751;
window.outerWidth = 1463;
window.innerWidth = 1463;
window.onmessage = null;
window.outerHeight = 823;