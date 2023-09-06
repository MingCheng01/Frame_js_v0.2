//====================================================================================================
//伪造HTMLHeadElement
HTMLHeadElement = function HTMLHeadElement(create_) {//构造函数
    if (!create_) {
        throw new TypeError("Illegal constructor");
    }
}; 
//保护HTMLHeadElement
Frame.safe(HTMLHeadElement);
//原型链指向
Frame.inherits(HTMLHeadElement, HTMLElement)
//设置原型名
Frame.rename(HTMLHeadElement, 'HTMLHeadElement');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建head
Frame.memory.htmlelements["head"] = function () {
    return new HTMLHeadElement(true);
}
Frame.memory.htmlCollection[0] = new HTMLHeadElement(true);