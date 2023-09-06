//====================================================================================================
// 代理挂载(给需要代理的对挂上代理)
//////////////////////////////////////////////////////////////////////////////////////////////////////
//BOM
//////////////////////////////////////////////////////////////////////////////////////////////////////
//CDATASection
CDATASection = Frame.proxy_(CDATASection);
//Event
Event = Frame.proxy_(Event);
//EventTarget
EventTarget = Frame.proxy_(EventTarget);
EventTarget.prototype = Frame.proxy_(EventTarget.prototype);
//External
External = Frame.proxy_(External);
//Geolocation
Geolocation = Frame.proxy_(Geolocation);
//Headers
Headers = Frame.proxy_(Headers);
//History
history = Frame.proxy_(history);
//localStorage
localStorage = Frame.proxy_(localStorage);
//Location
location = Frame.proxy_(location);
//MediaEncryptedEvent
MediaEncryptedEvent = Frame.proxy_(MediaEncryptedEvent);
//MimeType
MimeType = Frame.proxy_(MimeType);
//MimeTypeArray
navigator.mimeTypes = Frame.proxy_(navigator.mimeTypes)
//Navigator
navigator = Frame.proxy_(navigator);
//navigator.userActivation
navigator.userActivation = Frame.proxy_(navigator.userActivation);
//navigator.scheduling
navigator.scheduling = Frame.proxy_(navigator.scheduling);
//navigator.geolocation
navigator.geolocation = Frame.proxy_(navigator.geolocation);
//navigator.connection
navigator.connection = Frame.proxy_(navigator.connection);
//NetworkInformation
NetworkInformation = Frame.proxy_(NetworkInformation);
//Node
Node = Frame.proxy_(Node);
//OfflineAudioContext
OfflineAudioContext = Frame.proxy_(OfflineAudioContext);
//Path2D
Path2D = Frame.proxy_(Path2D);
//Performance
performance = Frame.proxy_(performance);
//Request
Request = Frame.proxy_(Request);
//Plugin
Plugin = Frame.proxy_(Plugin);
//Plugins
navigator.plugins = Frame.proxy_(navigator.plugins);
//Scheduling
Scheduling = Frame.proxy_(Scheduling);
//Screen
Screen = Frame.proxy_(Screen);
//ScreenOrientation
ScreenOrientation = Frame.proxy_(ScreenOrientation);
//sessionStorage
sessionStorage = Frame.proxy_(sessionStorage);
//SourceBuffer
SourceBuffer = Frame.proxy_(SourceBuffer);
//SpeechSynthesisUtterance
SpeechSynthesisUtterance = Frame.proxy_(SpeechSynthesisUtterance);
//localStorage
localStorage = Frame.proxy_(localStorage);
//Storage
Storage = Frame.proxy_(Storage);
//Text
Text = Frame.proxy_(Text);
//UserActivation
UserActivation = Frame.proxy_(UserActivation);
//Window
window = Frame.proxy_(window);
Window = Frame.proxy_(Window);
//WindowProperties
WindowProperties = Frame.proxy_(WindowProperties);
//XMLHttpRequest
XMLHttpRequest = Frame.proxy_(XMLHttpRequest);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//DOM
//////////////////////////////////////////////////////////////////////////////////////////////////////
//CanvasRenderingContext2D
CanvasRenderingContext2D = Frame.proxy_(CanvasRenderingContext2D);
//Element
Element = Frame.proxy_(Element);
//HTMLBodyElement
HTMLBodyElement = Frame.proxy_(HTMLBodyElement);
//HTMLCanvasElement
HTMLCanvasElement = Frame.proxy_(HTMLCanvasElement);
//HTMLCollection
HTMLCollection = Frame.proxy_(HTMLCollection);
//HTMLDivElement
HTMLDivElement = Frame.proxy_(HTMLDivElement);
//HTMLElement
HTMLElement = Frame.proxy_(HTMLElement);
//HTMLHeadElement
HTMLHeadElement = Frame.proxy_(HTMLHeadElement);
//HTMLImageElement
HTMLImageElement = Frame.proxy_(HTMLImageElement);
//HTMLScriptElement
HTMLScriptElement = Frame.proxy_(HTMLScriptElement);
//HTMLSpanElement
HTMLSpanElement = Frame.proxy_(HTMLSpanElement);
//Document
document = Frame.proxy_(document);
//DOMParser
DOMParser = Frame.proxy_(DOMParser);
//CustomEvent
CustomEvent = Frame.proxy_(CustomEvent);
//KeyboardEvent
KeyboardEvent = Frame.proxy_(KeyboardEvent);
//MouseEvent
MouseEvent = Frame.proxy_(MouseEvent);
//MutationEvent
MutationEvent = Frame.proxy_(MutationEvent);
//PointerEvent
PointerEvent = Frame.proxy_(PointerEvent);
//TextEvent
TextEvent = Frame.proxy_(TextEvent);
//UIEvent
UIEvent = Frame.proxy_(UIEvent);