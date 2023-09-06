//====================================================================================================
//伪造Navigator
var Navigator = function Navigator() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Navigator
Frame.safe(Navigator);
//设置原型名
Frame.rename(Navigator, 'Navigator');
//创建实例
navigator = {};
navigator.userActivation = {
    hasBeenActive: true,
    isActive: true
};
navigator.scheduling = {};
navigator.geolocation = {};
navigator.connection = {
    downlink: 10,
    effectiveType: "4g",
    onchange: null,
    rtt: 250,
    saveData: false,
}
//原型链指向
navigator.userActivation.__proto__ = UserActivation.prototype;
navigator.scheduling.__proto__ = Scheduling.prototype;
navigator.geolocation.__proto__ = Geolocation.prototype;
navigator.connection.__proto__ = NetworkInformation.prototype;
navigator.__proto__ = Navigator.prototype;
//////////////////////////////////////////////////////////////////////////////////////////////////////
Navigator.prototype.plugins = [];
Navigator.prototype.appCodeName = 'Mozilla';
Navigator.prototype.appName = 'Netscape';
Navigator.prototype.appVersion = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188';
Navigator.prototype.product = 'Gecko';
Navigator.prototype.language = 'zh-CN';
Navigator.prototype.languages = ["zh-CN", "zh"];
Navigator.prototype.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36';
Navigator.prototype.platform = 'Win32';
Navigator.prototype.vendorSub = '';//属性的值在任何浏览器中始终为空字符串
Navigator.prototype.productSub = '20030107'//只读属性返回当前浏览器的编译版本号
Navigator.prototype.vendor = 'Google Inc.'//属性值总是“Google Inc.”、“Apple Computer, Inc.”或（在 Firefox 中）空字符串。
Navigator.prototype.maxTouchPoints = 0;//返回当前设备能够支持的最大同时触摸的点数。
Navigator.prototype.hardwareConcurrency = 16;
Navigator.prototype.cookieEnabled = true;
Navigator.prototype.pdfViewerEnabled = true;
Navigator.prototype.onLine = true;
Navigator.prototype.webdriver = false;
Navigator.prototype.doNotTrack = null;
Navigator.prototype.mimeTypes = [{
    suffixes: '',
    type: ''
}];
Navigator.prototype.plugins = [{
    "0": {},
    "1": {}
}];
//////////////////////////////////////////////////////////////////////////////////////////////////////
//navigator会把属性继续定义到静态属性中
for (var _prototype in Navigator.prototype) {
    //将原型上的方法复制一遍给实例
    navigator[_prototype] = Navigator.prototype[_prototype];
    if (typeof (Navigator.prototype[_prototype]) != "function") {
        //相当于Object.defineProperty的get方法，Proxy的get方法，hook原型上的所有方法属性
        Navigator.prototype.__defineGetter__(_prototype, function () {
            debugger;
            var e = new Error();
            e.name = "TypeError";
            e.message = "Illegal constructor";
            e.stack = "VM988:1 Uncaught TypeError: Illegal invocation \r\n " +
                "at <anonymous>:1:21";
            throw e;
        });
    }
}