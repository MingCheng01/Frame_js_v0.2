//====================================================================================================
//伪造HTMLImageElement
HTMLImageElement = function HTMLImageElement() {
    //容易被检测到-堆栈
    throw TypeError("Illegal constructor")
};
//保护HTMLImageElement
Frame.safe(HTMLImageElement)
//原型链指向
Frame.inherits(HTMLImageElement, Element)
//设置原型名
Frame.rename(HTMLImageElement, 'HTMLImageElement');
//伪造Image
Image = function Image() {
    return Frame.memory.htmlelements["img"]
};
Frame.safe(Image)
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建img
Frame.memory.htmlelements["img"] = function () {
    var img = new (function () {
    });
    img=Frame.proxy_(img);
    //////////////////////////////////////////////////////////////////////////////////////////////////
    img.tagName = 'IMG';
    //////////////////////////////////////////////////////////////////////////////////////////////////
    img.__proto__ = HTMLImageElement.prototype;
    return img;
}
