//====================================================================================================
//伪造NetworkInformation
var NetworkInformation = function NetworkInformation() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护NetworkInformation
Frame.safe(NetworkInformation);
//原型链指向
Frame.inherits(NetworkInformation, EventTarget)
//设置原型名
Frame.rename(NetworkInformation, 'NetworkInformation');
//////////////////////////////////////////////////////////////////////////////////////////////////////
NetworkInformation.prototype.downlink = function downlink() {
    debugger;
};
Frame.safe(NetworkInformation.prototype.downlink);
//////////////////////////////////////////////////////////////////////////////////////////////////////
NetworkInformation.prototype.effectiveType = function effectiveType() {
    debugger;
};
Frame.safe(NetworkInformation.prototype.effectiveType);
//////////////////////////////////////////////////////////////////////////////////////////////////////
NetworkInformation.prototype.onchange = function onchange() {
    debugger;
};
Frame.safe(NetworkInformation.prototype.onchange);
//////////////////////////////////////////////////////////////////////////////////////////////////////
NetworkInformation.prototype.rtt = function rtt() {
    debugger;
};
Frame.safe(NetworkInformation.prototype.rtt);
//////////////////////////////////////////////////////////////////////////////////////////////////////
NetworkInformation.prototype.saveData = function saveData() {
    debugger;
};
Frame.safe(NetworkInformation.prototype.saveData);