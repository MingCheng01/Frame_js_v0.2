//====================================================================================================
//伪造Text
var Text = function Text() {
};
//保护Text
Frame.safe(Text);
//原型链指向
Frame.inherits(Text, Node)
//设置原型名
Frame.rename(Text, 'Text');
//////////////////////////////////////////////////////////////////////////////////////////////////////
Text.prototype.assignedSlot = function assignedSlot() {
    debugger;
};
Frame.safe(Text.prototype.assignedSlot);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Text.prototype.splitText = function splitText() {
    debugger;
};
Frame.safe(Text.prototype.splitText);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Text.prototype.wholeText = function wholeText() {
    debugger;
};
Frame.safe(Text.prototype.wholeText);