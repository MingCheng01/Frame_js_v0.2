//====================================================================================================
//伪造HTMLFrameSetElement
var HTMLFrameSetElement = function HTMLFrameSetElement() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护HTMLFrameSetElement
Frame.safe(HTMLFrameSetElement);
//原型链指向
Frame.inherits(HTMLFrameSetElement, HTMLElement)
//设置原型名
Frame.rename(HTMLFrameSetElement, 'HTMLFrameSetElement');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建frameset
Frame.memory.htmlelements["frameset"] = function () {
    var frameset = new (function () {
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////
    frameset.tagName = 'FRAMESET';
    frameset.align = "";
    frameset.appendChild = function (arg) {
        if (arg.tagName === 'FRAMESET') {
            throw new Error("Uncaught")
        }
    };
    frameset.style = {};
    frameset.offsetHeight = 0;
    //////////////////////////////////////////////////////////////////////////////////////////////////
    frameset.__proto__ = HTMLFrameSetElement.prototype;
    frameset=Frame.proxy_(frameset);
    return frameset;
}