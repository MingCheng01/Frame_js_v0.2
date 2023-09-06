//====================================================================================================
//伪造DOMParser
var DOMParser = function DOMParser() {
};
//保护DOMParser
Frame.safe(DOMParser);
//设置原型名
Frame.rename(DOMParser, 'DOMParser');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造
DOMParser.prototype.parseFromString = function parseFromString() {
    debugger
};
Frame.safe(DOMParser.prototype.parseFromString);