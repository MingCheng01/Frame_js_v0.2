//====================================================================================================
//伪造MediaEncryptedEvent
var MediaEncryptedEvent = function MediaEncryptedEvent() {
};
//保护MediaEncryptedEvent
Frame.safe(MediaEncryptedEvent);
//原型链指向
Frame.inherits(MediaEncryptedEvent, Event)
//设置原型名
Frame.rename(MediaEncryptedEvent, 'MediaEncryptedEvent');
//////////////////////////////////////////////////////////////////////////////////////////////////////
MediaEncryptedEvent.prototype.initData = function initData() {
    debugger
};
Frame.safe(MediaEncryptedEvent.prototype.initData);
//////////////////////////////////////////////////////////////////////////////////////////////////////
MediaEncryptedEvent.prototype.initDataType = function initDataType() {
    debugger
};
Frame.safe(MediaEncryptedEvent.prototype.initDataType);