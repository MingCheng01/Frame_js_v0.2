//====================================================================================================
//伪造CDATASection
var CDATASection = function CDATASection() {
};
//保护CDATASection
Frame.safe(CDATASection);
//原型链指向
Frame.inherits(CDATASection, Text);
//设置原型名
Frame.rename(CDATASection, 'CDATASection');