//====================================================================================================
//伪造UIEvent
UIEvent = function UIEvent(create_) {
    if (!create_) {
        throw new TypeError("Illegal constructor");
    }
};
//保护UIEvent
Frame.safe(UIEvent);
//原型链指向
Frame.inherits(UIEvent, Event);
//设置原型名
Frame.rename(UIEvent, "UIEvent");
//////////////////////////////////////////////////////////////////////////////////////////////////////
UIEvent.prototype.initUIEvent = function initUIEvent() { debugger; }
Frame.safe(UIEvent.prototype.initUIEvent);