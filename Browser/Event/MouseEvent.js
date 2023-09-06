//====================================================================================================
//伪造MouseEvent
MouseEvent = function MouseEvent(create_) {
    if (!create_) {
        throw new TypeError("Illegal constructor");
    }
};
//保护MouseEvent
Frame.safe(MouseEvent);
//原型链指向
Frame.inherits(MouseEvent, UIEvent);
//设置原型名
Frame.rename(MouseEvent, "MouseEvent");
//////////////////////////////////////////////////////////////////////////////////////////////////////
MouseEvent.prototype.getModifierState = function getModifierState() { debugger };
Frame.safe(MouseEvent.prototype.getModifierState);
//////////////////////////////////////////////////////////////////////////////////////////////////////
MouseEvent.prototype.initMouseEvent = function initMouseEvent() { debugger };
Frame.safe(MouseEvent.prototype.initMouseEvent);





