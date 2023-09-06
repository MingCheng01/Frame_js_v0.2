//====================================================================================================
// 伪造Screen
var Screen = function Screen() {
    throw new TypeError("Illegal constructor");
};
//保护Screen
Frame.safe(Screen);
// 设置原型名
Frame.rename(Screen, 'Screen');
//////////////////////////////////////////////////////////////////////////////////////////////////////
Screen.prototype.width = 1494;
Screen.prototype.height = 934;
Screen.prototype.availWidth = 1494;
Screen.prototype.availHeight = 934;
Screen.prototype.colorDepth = 24;
Screen.prototype.pixelDepth = 24;
//////////////////////////////////////////////////////////////////////////////////////////////////////
// 创建实例
screen = {};
// 原型链指向
screen.__proto__ = Screen.prototype;