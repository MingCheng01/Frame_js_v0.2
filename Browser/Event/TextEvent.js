//====================================================================================================
//伪造TextEvent
TextEvent = function TextEvent(create_) {
    if (!create_) {
        throw new TypeError("Illegal constructor");
    }
};
//保护TextEvent
Frame.safe(TextEvent);
//设置原型名
Frame.rename(TextEvent, "TextEvent");
//////////////////////////////////////////////////////////////////////////////////////////////////////
TextEvent.prototype.initTextEvent = function initTextEvent() { debugger };
Frame.safe(TextEvent.prototype.initTextEvent);