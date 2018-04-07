// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('botnik.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31557__delegate = function (x){
if(cljs.core.truth_(botnik.core.on_js_reload)){
return cljs.core.apply.call(null,botnik.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'botnik.core/on-js-reload' is missing");
}
};
var G__31557 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31558__i = 0, G__31558__a = new Array(arguments.length -  0);
while (G__31558__i < G__31558__a.length) {G__31558__a[G__31558__i] = arguments[G__31558__i + 0]; ++G__31558__i;}
  x = new cljs.core.IndexedSeq(G__31558__a,0);
} 
return G__31557__delegate.call(this,x);};
G__31557.cljs$lang$maxFixedArity = 0;
G__31557.cljs$lang$applyTo = (function (arglist__31559){
var x = cljs.core.seq(arglist__31559);
return G__31557__delegate(x);
});
G__31557.cljs$core$IFn$_invoke$arity$variadic = G__31557__delegate;
return G__31557;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1519138434640