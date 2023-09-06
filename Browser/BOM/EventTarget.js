//====================================================================================================
//伪造EventTarget
var EventTarget = function EventTarget() {

};
//保护EventTarget
Frame.safe(EventTarget);
//设置原型名
Frame.rename(EventTarget, 'EventTarget');
//////////////////////////////////////////////////////////////////////////////////////////////////////
EventTarget.prototype.addEventListener = function addEventListener(type, callback) {
    debugger;
    if (!(type in Frame.memory.listeners)) {
        Frame.memory.listeners[type] = [];
    }
    Frame.memory.listeners[type].push(callback);
};
Frame.safe(EventTarget.prototype.addEventListener);
//////////////////////////////////////////////////////////////////////////////////////////////////////
EventTarget.prototype.dispatchEvent = function dispatchEvent() {
    debugger;
};
Frame.safe(EventTarget.prototype.dispatchEvent);
//////////////////////////////////////////////////////////////////////////////////////////////////////
EventTarget.prototype.removeEventListener = function removeEventListener() {
    debugger;
};
Frame.safe(EventTarget.prototype.removeEventListener);