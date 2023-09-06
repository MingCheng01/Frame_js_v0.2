//====================================================================================================
//伪造HTMLDivElement
var HTMLDivElement = function HTMLDivElement() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护HTMLDivElement
Frame.safe(HTMLDivElement);
//原型链指向
Frame.inherits(HTMLDivElement, HTMLElement)
//设置原型名
Frame.rename(HTMLDivElement, 'HTMLDivElement');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建div
Frame.memory.htmlelements["div"] = function () {
    var div = new (function () {
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////
    div.tagName = 'DIV';
    div.align = "";
    div.appendChild = function (arg) {
        if (arg.tagName === 'DIV') {
            throw new Error("Uncaught")
        }
    };
    div.style = {};
    div.offsetHeight = 0;
    //////////////////////////////////////////////////////////////////////////////////////////////////
    div.__proto__ = HTMLDivElement.prototype;
    div=Frame.proxy_(div);
    return div;
}