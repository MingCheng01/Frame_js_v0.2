//====================================================================================================
//伪造sessionStorage
var sessionStorage = function sessionStorage() {
};
//保护sessionStorage
Frame.safe(sessionStorage);
//原型链指向
Frame.inherits(sessionStorage, Storage)
//设置原型名
Frame.rename(sessionStorage, 'sessionStorage');