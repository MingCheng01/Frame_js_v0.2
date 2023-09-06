//====================================================================================================
//伪造WindowProperties
var WindowProperties = function WindowProperties() {

};
//保护WindowProperties
Frame.safe(WindowProperties);
//原型链指向
Frame.inherits(WindowProperties, EventTarget)
//设置原型名
Frame.rename(WindowProperties, 'WindowProperties');