//====================================================================================================
//伪造HTMLSpanElement
var HTMLSpanElement = function HTMLSpanElement() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护HTMLSpanElement
Frame.safe(HTMLSpanElement);
//原型链指向
Frame.inherits(HTMLSpanElement, HTMLElement)
//设置原型名
Frame.rename(HTMLSpanElement, 'HTMLSpanElement');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建span
Frame.memory.htmlelements["span"] = function () {
    var span = new (function () {
    });
    span = Frame.proxy_(span);
    //////////////////////////////////////////////////////////////////////////////////////////////////
    span.tagName = 'SPAN';
    span.align = "";
    span.appendChild = function (arg) {
        if (arg.tagName === 'SPAN') {
            throw new Error("Uncaught")
        }
    };
    span.style = {};
    span.offsetHeight = 0;
    //////////////////////////////////////////////////////////////////////////////////////////////////
    span.__proto__ = HTMLSpanElement.prototype;
    return span;
}