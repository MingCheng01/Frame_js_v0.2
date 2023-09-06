//====================================================================================================
//伪造HTMLbodyElement
HTMLBodyElement = function HTMLBodyElement(create_) {//构造函数
    if (!create_) {
        throw new TypeError("Illegal constructor");
    }
}; 
//保护HTMLbodyElement
Frame.safe(HTMLBodyElement);
//原型链指向
Frame.inherits(HTMLBodyElement, HTMLElement)
//设置原型名
Frame.rename(HTMLBodyElement, 'HTMLBodyElement');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建body
Frame.memory.htmlelements["body"] = function () {
    return Frame.proxy_(new HTMLBodyElement(true));
}
Frame.memory.htmlCollection[1] = new HTMLBodyElement(true);
