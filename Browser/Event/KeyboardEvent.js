//====================================================================================================
//伪造KeyboardEvent
KeyboardEvent = function KeyboardEvent(create_) {
    if (!create_) {
        throw new TypeError("Illegal constructor");
    }
};
//保护KeyboardEvent
Frame.safe(KeyboardEvent);
//原型链指向
Frame.inherits(KeyboardEvent, UIEvent);
//设置原型名
Frame.rename(KeyboardEvent, "KeyboardEvent");
//////////////////////////////////////////////////////////////////////////////////////////////////////
KeyboardEvent.prototype.initKeyboardEvent = function initKeyboardEvent(){debugger;}
Frame.safe(KeyboardEvent.prototype.initKeyboardEvent);
//////////////////////////////////////////////////////////////////////////////////////////////////////
KeyboardEvent.prototype.getModifierState = function getModifierState(){debugger;}
Frame.safe(KeyboardEvent.prototype.getModifierState);