//====================================================================================================
//伪造XMLHttpRequest
var XMLHttpRequest = function XMLHttpRequest() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护XMLHttpRequest
Frame.safe(XMLHttpRequest);
//原型链指向
Frame.inherits(XMLHttpRequest, EventTarget)
//设置原型名
Frame.rename(XMLHttpRequest, 'XMLHttpRequest');