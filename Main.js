var fs = require('fs');
const { VM, VMScript } = require('vm2');
//====================================================================================================
//初始化代码块
code = '';
mode = '1';
open_proxy='true'
//====================================================================================================
if (mode === '1') {
    //读取Tools文件夹
    code += fs.readFileSync(`${__dirname}/Tools/Memory.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Tools/Proxy.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Tools/Safe.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Tools/Console_log.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Tools/Inherits.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Tools/Rename.js`) + '\r\n';
    //====================================================================================================
    //是否开启代理
    code += 'Frame.memory.config.proxy='+open_proxy+';\r\n'
    //====================================================================================================
    //读取Browser文件夹
    //加载BOM环境（优于DOM加载）
    code += fs.readFileSync(`${__dirname}/Browser/BOM/EventTarget.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Node.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/WindowProperties.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Window.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Location.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/External.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Scheduling.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/UserActivation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Geolocation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/NetworkInformation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Navigator.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/History.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Screen.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Storage.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Plugin/MimeType.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Plugin/Plugin.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Plugin/PluginArray.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Plugin/MimeTypeArray.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/ScreenOrientation.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/SourceBuffer.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/XMLHttpRequest.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/SpeechSynthesisUtterance.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/OfflineAudioContext.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Performance.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Event.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/MediaEncryptedEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Path2D.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Text.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/CDATASection.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Request.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/Headers.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/LocalStorage.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/BOM/SessionStorage.js`) + '\r\n';
    //加载HTML节点
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/Element.js`) + '\r\n';
    
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLCollection.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/CanvasRenderingContext2D.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLCanvasElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLDivElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLImageElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLFrameSetElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLSpanElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLheadElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLBodyElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLScriptElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/HTMLElements/HTMLDocument.js`) + '\r\n';
    //加载DOM环境
    code += fs.readFileSync(`${__dirname}/Browser/DOM/DOMParser.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/DOM/Document.js`) + '\r\n';
    //加载Event
    code += fs.readFileSync(`${__dirname}/Browser/Event/UIEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/Event/MouseEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/Event/CustomEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/Event/KeyboardEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/Event/MutationEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/Event/PointerEvent.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Browser/Event/TextEvent.js`) + '\r\n';
    //加载加密方法
    code += fs.readFileSync(`${__dirname}/Browser/Crypto/Base64.js`) + '\r\n';
    //加载代理配置
    code += fs.readFileSync(`${__dirname}/Setting/Proxy_setting.js`) + '\r\n';
    //加载参数设置
    code += fs.readFileSync(`${__dirname}/Setting/Param_setting.js`) + '\r\n';

}
//====================================================================================================
else {
    //读取Test文件夹(少量环境验证时使用)
    code += fs.readFileSync(`${__dirname}/Test/test_1.js`) + '\r\n';
}
//====================================================================================================
//添加debugger
code += 'debugger;\r\n\r\n'
//====================================================================================================
//读取调试代码
code += fs.readFileSync(`${__dirname}/code.js`) + '\r\n';
//====================================================================================================
//添加debugger
code += 'debugger;\r\n\r\n'
//====================================================================================================
//开启调试
const script = new VMScript(code, `${__dirname}/调试ing.js`);
const vm = new VM();
vm.run(script);