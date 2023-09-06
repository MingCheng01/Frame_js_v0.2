//====================================================================================================
//伪造MutationEvent
MutationEvent = function MutationEvent(create_) {
    if (!create_) {
        throw new TypeError("Illegal constructor");
    }
};
//保护MutationEvent
Frame.safe(MutationEvent);
//原型链指向
Frame.inherits(MutationEvent, Event);
//设置原型名
Frame.rename(MutationEvent, "MutationEvent");
//////////////////////////////////////////////////////////////////////////////////////////////////////
MutationEvent.prototype.initMutationEvent = function initMutationEvent() {
    debugger;
};
Frame.safe(MutationEvent.prototype.initMutationEvent);