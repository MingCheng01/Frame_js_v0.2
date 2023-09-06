//====================================================================================================
//设置原型名(封装方法实现设置原型名)
Frame.rename = function (obj, name) {
    Object.defineProperties(obj.prototype, {
        [Symbol.toStringTag]: {
            value: name,
            writable: false,
            enumerable: false,
            configurable: true
        }
    });
}