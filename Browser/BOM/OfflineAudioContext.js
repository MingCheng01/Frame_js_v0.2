//====================================================================================================
//伪造OfflineAudioContext
var OfflineAudioContext = function OfflineAudioContext() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护OfflineAudioContext
Frame.safe(OfflineAudioContext);
//设置原型名
Frame.rename(OfflineAudioContext, 'OfflineAudioContext');
//////////////////////////////////////////////////////////////////////////////////////////////////////
OfflineAudioContext.prototype.createOscillator = function createOscillator() {
    return {
        frequency: {
            setValueAtTime: function () {
            }
        },
        connect: function () {
        },
        start: function () {
        },
    }
};
Frame.safe(OfflineAudioContext.prototype.createOscillator);
//////////////////////////////////////////////////////////////////////////////////////////////////////
OfflineAudioContext.prototype.createDynamicsCompressor = function createDynamicsCompressor() {
    return {
        threshold: {
            setValueAtTime: function setValueAtTime() {
            },
        },
        setValueAtTime: function setValueAtTime() {
        },
        knee: {
            setValueAtTime: function setValueAtTime() {
            },
        },
        ratio: {
            setValueAtTime: function setValueAtTime() {
            },
        },
        reduction: {
            setValueAtTime: function setValueAtTime() {
            },
        },
        attack: {
            setValueAtTime: function setValueAtTime() {
            },
        },
        release: {
            setValueAtTime: function setValueAtTime() {
            },
        },
        connect: function connect() {
        },
    }
};
Frame.safe(OfflineAudioContext.prototype.createDynamicsCompressor);
//////////////////////////////////////////////////////////////////////////////////////////////////////
OfflineAudioContext.prototype.startRendering = function startRendering() {
};
Frame.safe(OfflineAudioContext.prototype.startRendering);