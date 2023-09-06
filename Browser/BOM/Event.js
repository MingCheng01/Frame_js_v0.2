//====================================================================================================
//伪造Event
var Event = function Event() {
};
//保护Event
Frame.safe(Event);
//设置原型名
Frame.rename(Event, 'Event');
//伪造参数
Event.prototype.AT_TARGET = 2;
Event.prototype.BUBBLING_PHASE = 3;
Event.prototype.CAPTURING_PHASE = 1;
Event.prototype.NONE = 0;