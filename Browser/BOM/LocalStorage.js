//====================================================================================================
//伪造localStorage
var localStorage = function localStorage() {
};
//保护localStorage
Frame.safe(localStorage);
//原型链指向
Frame.inherits(localStorage, Storage)
//设置原型名
Frame.rename(localStorage, 'localStorage');