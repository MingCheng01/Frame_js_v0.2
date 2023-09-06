//====================================================================================================
//伪造CanvasRenderingContext2D
CanvasRenderingContext2D = function CanvasRenderingContext2D() {
    //容易被检测到-堆栈
    throw TypeError("Illegal constructor")
}
//保护CanvasRenderingContext2D
Frame.safe(CanvasRenderingContext2D)
//设置原型名
Frame.rename(CanvasRenderingContext2D, 'CanvasRenderingContext2D');
//////////////////////////////////////////////////////////////////////////////////////////////////////
CanvasRenderingContext2D.fillRect = function fillRect() {
    debugger;
};
Frame.safe(CanvasRenderingContext2D.fillRect)
//////////////////////////////////////////////////////////////////////////////////////////////////////
CanvasRenderingContext2D.fillText = function fillText() {
    debugger;
};
Frame.safe(CanvasRenderingContext2D.fillText)