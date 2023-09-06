//====================================================================================================
//伪造ScreenOrientation
var ScreenOrientation = function ScreenOrientation() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护ScreenOrientation
Frame.safe(ScreenOrientation);
//原型链指向
Frame.inherits(ScreenOrientation, EventTarget)
//设置原型名
Frame.rename(ScreenOrientation, 'ScreenOrientation');