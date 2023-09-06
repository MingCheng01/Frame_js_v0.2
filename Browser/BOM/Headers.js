//====================================================================================================
//伪造Headers
var Headers = function Headers() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Headers
Frame.safe(Headers);
//设置原型名
Frame.rename(Headers, 'Headers');