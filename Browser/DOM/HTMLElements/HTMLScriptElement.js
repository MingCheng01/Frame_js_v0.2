//====================================================================================================
//伪造HTMLScriptElement
var HTMLScriptElement = function HTMLScriptElement() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护HTMLScriptElement
Frame.safe(HTMLScriptElement);
//原型链指向
Frame.inherits(HTMLScriptElement, HTMLElement)
//设置原型名
Frame.rename(HTMLScriptElement, 'HTMLScriptElement');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建script
Frame.memory.htmlelements["script"] = function () {
    var script = new (function () {
    });
    script=Frame.proxy_(script);
    //////////////////////////////////////////////////////////////////////////////////////////////////
    script.tagName = 'SCRIPT';
    script.align = "";
    script.appendChild = function (arg) {
        if (arg.tagName === 'SCRIPT') {
            throw new Error("Uncaught")
        }
    };
    script.style = {};
    script.offsetHeight = 0;
    //////////////////////////////////////////////////////////////////////////////////////////////////
    script.__proto__ = HTMLScriptElement.prototype;
    return script;
}