//====================================================================================================
//伪造History
var History = function History() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Navigator
Frame.safe(History);
//设置原型名
Frame.rename(History, 'History');
//////////////////////////////////////////////////////////////////////////////////////////////////////
History.prototype.back = function back() {
    debugger;
};
Frame.safe(History.prototype.back);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建实例
history = {
    length: 1,
};
//原型链指向
history.__proto__ = History.prototype;