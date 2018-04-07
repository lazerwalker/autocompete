// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.iframe');
goog.require('cljs.core');
goog.require('dollar.bill');
window.addEventListener("message",(function (msg){
botnik.iframe.parent = msg.source;
}));
botnik.iframe.sendLatest = (function botnik$iframe$sendLatest(){
return parent.postMessage(cljs.core.first.call(null,dollar.bill.$.call(null,"#story.editor")).value,"*");
});

//# sourceMappingURL=iframe.js.map?rel=1519138423238