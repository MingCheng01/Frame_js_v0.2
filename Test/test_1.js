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
//====================================================================================================
//伪造btoa,atob
const base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
btoa = function btoa(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}
atob = function atob(str) {
    var c1, c2, c3, c4;
    var i, len, out;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        /* c1 */
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1)
            break;

        /* c2 */
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        /* c3 */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return out;
            c3 = base64DecodeChars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        /* c4 */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61)
                return out;
            c4 = base64DecodeChars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}
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
