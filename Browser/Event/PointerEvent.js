//====================================================================================================
//伪造PointerEvent
PointerEvent = function PointerEvent(create_) {
    if (!create_) {
        throw new TypeError("Illegal constructor");
    }
};
//保护PointerEvent
Frame.safe(PointerEvent);
//原型链指向
Frame.inherits(PointerEvent, MouseEvent);
//设置原型名
Frame.rename(PointerEvent, "PointerEvent");
//////////////////////////////////////////////////////////////////////////////////////////////////////
PointerEvent.prototype.getCoalescedEvents = function getCoalescedEvents() { debugger; };
Frame.safe(PointerEvent.prototype.getCoalescedEvents);
//////////////////////////////////////////////////////////////////////////////////////////////////////
PointerEvent.prototype.getPredictedEvents = function getPredictedEvents() { debugger; };
Frame.safe(PointerEvent.prototype.getPredictedEvents);