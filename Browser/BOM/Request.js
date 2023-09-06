//====================================================================================================
//伪造Request
var Request = function Request() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Request
Frame.safe(Request);
//设置原型名
Frame.rename(Request,'Request');