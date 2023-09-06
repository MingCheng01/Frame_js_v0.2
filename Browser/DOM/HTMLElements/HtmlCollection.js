//====================================================================================================
//伪造HTMLCollection
HTMLCollection = function HTMLCollection(create_) {//构造函数
    if (!create_) {
        throw new TypeError("Illegal constructor");
    };
};
Frame.safe(HTMLCollection);
//设置原型名
Object.defineProperties(HTMLCollection.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCollection",
        configurable: true
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
HTMLCollection.prototype = {
    item(index) {
        debugger;
        if (!HTMLCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        return this[index];
    },
    get length() {
        if (!HTMLCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        return Object.keys(this).length
    },
    namedItem(name) {
        debugger;
        if (!HTMLCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        return this[name];
    }
};
Frame.memory.htmlCollection = new HTMLCollection(true);
