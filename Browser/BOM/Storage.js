//====================================================================================================
//伪造Storage
var Storage = function Storage() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Storage
Frame.safe(Storage);
//设置原型名
Frame.rename(Storage, 'Storage');
//////////////////////////////////////////////////////////////////////////////////////////////////////
function get_length() {
    return Object.keys(Frame.memory.storage).length;
}
Storage.prototype.length = get_length();
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造
Storage.prototype.key = function key(index) {
    return Object.keys(Frame.memory.storage)[index];
};
Frame.safe(Storage.prototype.key);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.getItem = function getItem(keyName) {
    var result = Frame.memory.storage[keyName];
    if (result) {
        return result;
    } else {
        return null;
    }
};
Frame.safe(Storage.prototype.getItem);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.setItem = function setItem(keyName, keyValue) {
    Frame.memory.storage[keyName] = keyValue;
};
Frame.safe(Storage.prototype.setItem);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.removeItem = function removeItem(keyName) {
    delete Frame.memory.storage[keyName];
};
Frame.safe(Storage.prototype.removeItem);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.clear = function clear() {
    Frame.memory.storage = {};
};
Frame.safe(Storage.prototype.clear);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建实例
localStorage = {};
//原型链指向
localStorage.__proto__ = Storage.prototype;