//====================================================================================================
//伪造HTMLDocument
var HTMLDocument = function HTMLDocument() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护HTMLDocument
Frame.safe(HTMLDocument);
//设置原型名
Frame.rename(HTMLDocument, 'HTMLDocument');