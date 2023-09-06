//伪造CustomEvent
CustomEvent = function CustomEvent(create_) {
    if (!create_) {
        throw new TypeError("Illegal constructor");
    }
};
//保护CustomEvent
Frame.safe(CustomEvent);
//原型链指向
Frame.inherits(CustomEvent, Event);
//设置原型名
Frame.rename(CustomEvent, "CustomEvent");
//////////////////////////////////////////////////////////////////////////////////////////////////////
CustomEvent.prototype.initCustomEvent = function initCustomEvent() {
    debugger;
}
Frame.safe(CustomEvent.prototype.initCustomEvent);