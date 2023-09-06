//====================================================================================================
//伪造Scheduling
var Scheduling = function Scheduling() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Scheduling
Frame.safe(Scheduling);
//设置原型名
Frame.rename(Scheduling, 'Scheduling');
//////////////////////////////////////////////////////////////////////////////////////////////////////
Scheduling.prototype.isInputPending = function isInputPending() {
    debugger;
};
Frame.safe(Scheduling.prototype.isInputPending);