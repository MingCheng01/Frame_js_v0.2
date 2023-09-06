//====================================================================================================
//测试文件(环境验证不严格时可以使用)
//====================================================================================================
tool_ = {}
tool_.proxy_ = function (obj) {
    //Proxy 可以多层代理,后代理的检测不到先代理的
    return new Proxy(obj, {
        set(target, property, value) {
            if (property != 'Math' && property != 'isNaN') {
                console.table([{ '类型': 'set', '调用对象': target, '调用属性': property, '设置值': value }]);
                //console.log('set =>',target+'',property+'',value);
            }
            return Reflect.set(...arguments);
        },
        get(target, property, receiver) {
            if (property != 'Math' && property != 'isNaN') {
                console.table([{ '类型': 'get', '调用对象': target, '调用属性': property, '获取值': target[property] }]);
                //console.log('get =>',target+'',property+'',target[property]);
            }
            return target[property];
        }
    });
}
tool_.rename = function (obj, name) {
    Object.defineProperties(obj.prototype, {
        [Symbol.toStringTag]: {
            value: name,
            writable: false,
            enumerable: false,
            configurable: true
        }
    });
}
//====================================================================================================
//window
window = global;
Window = function Window() { };
window.__proto__ = Window.prototype;
window.DeviceOrientationEvent = function DeviceOrientationEvent() { };
window.DeviceMotionEvent = function DeviceMotionEvent() { };
//====================================================================================================
//navigator
Navigator = function Navigator() { };
window.navigator = {

};
window.navigator.__proto__ = Navigator.prototype;
//====================================================================================================
//location
Location = function Location() { };
window.location = {

};
window.location.__proto__ = Location.prototype;
//====================================================================================================
//history
History = function History() { };
window.history = {

};
window.history.__proto__ = History.prototype;
//====================================================================================================
//screen
Screen = function Screen() { };
window.screen = {

};
window.screen.__proto__ = Screen.prototype;
//====================================================================================================
//document
Document = function () { };
window.document = {

};
window.document.__proto__ = Document.prototype;
//====================================================================================================
window.setTimeout = function (x, y) {
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    return '';
};
//====================================================================================================
//重命名
tool_.rename(Window, 'Window');
tool_.rename(Navigator, 'Navigator');
tool_.rename(Location, 'Location');
tool_.rename(History, 'History');
tool_.rename(Screen, 'Screen');
tool_.rename(Document, 'Document');
//====================================================================================================
//挂载代理
window = tool_.proxy_(window);
window.navigator = tool_.proxy_(window.navigator);
window.location = tool_.proxy_(window.location);
window.history = tool_.proxy_(window.history);
window.screen = tool_.proxy_(window.screen);
window.document = tool_.proxy_(window.document);
