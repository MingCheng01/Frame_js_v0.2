//====================================================================================================
//伪造Performance
var Performance = function Performance() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Performance
Frame.safe(Performance);
//原型链指向
Frame.inherits(Performance, EventTarget)
//设置原型名
Frame.rename(Performance, 'Performance');
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.timeOrigin = 1692057559513.8
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.onresourcetimingbufferfull = class onresourcetimingbufferfull {
};
Performance.prototype.timing = class timing {
};
Performance.prototype.navigation = class navigation {
};
Performance.prototype.memory = class memory {
};
Performance.prototype.eventCounts = class eventCounts {
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.clearMarks = function clearMarks() {
    debugger;
};
Frame.safe(Performance.prototype.clearMarks);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.clearMeasures = function clearMeasures() {
    debugger;
};
Frame.safe(Performance.prototype.clearMeasures);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.clearResourceTimings = function clearResourceTimings() {
    debugger;
};
Frame.safe(Performance.prototype.clearResourceTimings);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.getEntries = function getEntries() {
    debugger;
};
Frame.safe(Performance.prototype.getEntries);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.getEntriesByName = function getEntriesByName() {
    debugger;
};
Frame.safe(Performance.prototype.getEntriesByName);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.getEntriesByType = function getEntriesByType() {
    debugger;
};
Frame.safe(Performance.prototype.getEntriesByType);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.mark = function mark() {
    debugger;
};
Frame.safe(Performance.prototype.mark);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.measure = function measure() {
    debugger;
};
Frame.safe(Performance.prototype.measure);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.now = function now() {
    debugger;
};
Frame.safe(Performance.prototype.now);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.setResourceTimingBufferSize = function setResourceTimingBufferSize() {
    debugger;
};
Frame.safe(Performance.prototype.setResourceTimingBufferSize);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.toJSON = function toJSON() {
    debugger;
};
Frame.safe(Performance.prototype.toJSON);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.addEventListener = function addEventListener() {
    debugger;
};
Frame.safe(Performance.prototype.addEventListener);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.dispatchEvent = function dispatchEvent() {
    debugger;
};
Frame.safe(Performance.prototype.dispatchEvent);
//////////////////////////////////////////////////////////////////////////////////////////////////////
Performance.prototype.removeEventListener = function removeEventListener() {
    debugger;
};
Frame.safe(Performance.prototype.removeEventListener);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建实例
performance = {
    "timeOrigin": 1693799107065.9,
    "timing": {
        "connectStart": 1693799107100,
        "navigationStart": 1693799107065,
        "secureConnectionStart": 1693799107123,
        "fetchStart": 1693799107075,
        "domContentLoadedEventStart": 1693799111881,
        "responseStart": 1693799107248,
        "domInteractive": 1693799111881,
        "domainLookupEnd": 1693799107100,
        "responseEnd": 1693799107257,
        "redirectStart": 0,
        "requestStart": 1693799107159,
        "unloadEventEnd": 0,
        "unloadEventStart": 0,
        "domLoading": 1693799107260,
        "domComplete": 1693799111934,
        "domainLookupStart": 1693799107087,
        "loadEventStart": 0,
        "domContentLoadedEventEnd": 1693799111881,
        "loadEventEnd": 0,
        "redirectEnd": 0,
        "connectEnd": 1693799107159
    },
    "navigation": {
        "type": 0,
        "redirectCount": 0
    }
};
//原型链指向
performance.__proto__ = Performance.prototype;