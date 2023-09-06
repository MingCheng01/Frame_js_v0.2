//====================================================================================================
//伪造UserActivation
var UserActivation = function UserActivation() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护UserActivation
Frame.safe(UserActivation);
//设置原型名
Frame.rename(UserActivation, 'UserActivation');
//////////////////////////////////////////////////////////////////////////////////////////////////////
UserActivation.prototype.hasBeenActive = function hasBeenActive() {
    debugger;
};
Frame.safe(UserActivation.prototype.hasBeenActive);

UserActivation.prototype.isActive = function isActive() {
    debugger;
};
Frame.safe(UserActivation.prototype.isActive);
