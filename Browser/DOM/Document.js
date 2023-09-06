//====================================================================================================
//伪造Document
var Document = function Document() {
};
//保护Document
Frame.safe(Document);
//原型链指向
Frame.inherits(Document, Node)
//设置原型名
Frame.rename(Document, 'Document');
//创建实例
document = {
    body: {}
};
//原型链指向
Document.__proto__=Node.prototype;
HTMLDocument.prototype=Document.prototype;
document.body.__proto__ = HTMLBodyElement.prototype;
document.__proto__ = HTMLDocument.prototype;
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.cookie = '';
document.referrer = location.href || '';
document.documentElement = '<!DOCTYPE html><html lang="zh"><body></body></html>'
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById = function getElementById(id) {
    debugger;
    //用id匹配当前环境内存中已有的Element，没找到则返回null
    return null;
};
Frame.safe(document.getElementById);
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.removeChild = function removeChild(child) {
    debugger;
    //用id匹配当前环境内存中已有的Element，没找到则返回null
    return null;
};
Frame.safe(document.removeChild);
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementsByTagName = function getElementsByTagName(tagName) {
    debugger;
    if (!Document.prototype.isPrototypeOf(this)) {
        throw new TypeError("Illegal constructor");
    }
    if (tagName === "*") {
        return Frame.memory.htmlCollection;
    }
    tagName = tagName.toLowerCase();
    let collection = new HTMLCollection(true);
    let collection_index = 0;
    for (let i = 0; i < Frame.memory.htmlCollection.length; i++) {
        let node_ = Frame.memory.htmlCollection[i];
        if (node_.localName && node_.localName === tagName) {
            collection[collection_index] = node_;
            collection_index++;
        }
    }
    return collection
};
Frame.safe(document.getElementsByTagName);
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener = function addEventListener(type, listener, options, useCapture) {
    debugger;
};
Frame.safe(document.addEventListener);
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.createElement = function createElement(tagName) {
    tagName = tagName.toLowerCase();
    if (Frame.memory.htmlelements[tagName] === undefined) {
        debugger;
    } else {
        var tagElement = Frame.memory.htmlelements[tagName]();
        Frame.memory.create_element[tagName]=tagElement;
        return Frame.proxy_(tagElement);
    }
};
Frame.safe(document.createElement);
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.createEvent = function createEvent(type) {
    if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    let element_;
    switch (type.toLowerCase()) {
        case 'event':
            element_ = Frame.proxy_(new Event(true));
            break;
        case 'events':
            element_ = Frame.proxy_(new Event(true));
            break;
        case 'uievent':
            element_ = Frame.proxy_(new UIEvent(true));
            break;
        case 'uievents':
            element_ = Frame.proxy_(new UIEvent(true));
            break;
        case 'mouseevent':
            element_ = Frame.proxy_(new MouseEvent(true));
            break;
        case 'mouseevents':
            element_ = Frame.proxy_(new MouseEvent(true));
            break;
        case 'mutationevent':
            element_ = Frame.proxy_(new MutationEvent(true));
            break;
        case 'mutationevents':
            element_ = Frame.proxy_(new MutationEvent(true));
            break;
        case 'textevent':
            element_ = Frame.proxy_(new TextEvent(true));
            break;
        case 'textevents':
            element_ = Frame.proxy_(new TextEvent(true));
            break;
        case 'keyboardevent':
            element_ = Frame.proxy_(new KeyboardEvent(true));
            break;
        case 'customevent':
            element_ = Frame.proxy_(new CustomEvent(true));
            break;

        default:
            debugger;
            throw new DOMException(`Failed to execute 'createEvent' on 'Document': The provided event type ('${type}') is invalid.`)
    }
    element_.isTrusted = false;
    return element_;
}
Frame.safe(document.createElement);