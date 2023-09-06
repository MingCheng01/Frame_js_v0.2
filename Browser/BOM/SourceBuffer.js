//====================================================================================================
//伪造SourceBuffer
var SourceBuffer = function SourceBuffer() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护SourceBuffer
Frame.safe(SourceBuffer);
//原型链指向
Frame.inherits(SourceBuffer, EventTarget)
//设置原型名
Frame.rename(SourceBuffer, 'SourceBuffer');