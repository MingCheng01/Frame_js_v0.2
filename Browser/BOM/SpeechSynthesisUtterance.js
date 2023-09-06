//====================================================================================================
//伪造SpeechSynthesisUtterance
var SpeechSynthesisUtterance = function SpeechSynthesisUtterance() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护SpeechSynthesisUtterance
Frame.safe(SpeechSynthesisUtterance);
//原型链指向
Frame.inherits(SpeechSynthesisUtterance, EventTarget)
//设置原型名
Frame.rename(SpeechSynthesisUtterance, 'SpeechSynthesisUtterance');