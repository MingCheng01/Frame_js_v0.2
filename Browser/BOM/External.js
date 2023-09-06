//====================================================================================================
//伪造External
var External = function External() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护External
Frame.safe(External);
//设置原型名
Frame.rename(External, 'External');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造参数
External.prototype.TEMPORARY = 0;
External.prototype.PERSISTENT = 1;
//////////////////////////////////////////////////////////////////////////////////////////////////////
External.prototype.addEventListener = function addEventListener() {
    debugger;
};
Frame.safe(External.prototype.addEventListener);
//////////////////////////////////////////////////////////////////////////////////////////////////////
External.prototype.dispatchEvent = function dispatchEvent() {
    debugger;
};
Frame.safe(External.prototype.dispatchEvent);
//////////////////////////////////////////////////////////////////////////////////////////////////////
External.prototype.removeEventListener = function removeEventListener() {
    debugger;
};
Frame.safe(External.prototype.removeEventListener);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建实例
external = {};
//原型链指向
external.__proto__ = External.prototype;