// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__27340__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27341__i = 0, G__27341__a = new Array(arguments.length -  0);
while (G__27341__i < G__27341__a.length) {G__27341__a[G__27341__i] = arguments[G__27341__i + 0]; ++G__27341__i;}
  args = new cljs.core.IndexedSeq(G__27341__a,0);
} 
return G__27340__delegate.call(this,args);};
G__27340.cljs$lang$maxFixedArity = 0;
G__27340.cljs$lang$applyTo = (function (arglist__27342){
var args = cljs.core.seq(arglist__27342);
return G__27340__delegate(args);
});
G__27340.cljs$core$IFn$_invoke$arity$variadic = G__27340__delegate;
return G__27340;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27343__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27344__i = 0, G__27344__a = new Array(arguments.length -  0);
while (G__27344__i < G__27344__a.length) {G__27344__a[G__27344__i] = arguments[G__27344__i + 0]; ++G__27344__i;}
  args = new cljs.core.IndexedSeq(G__27344__a,0);
} 
return G__27343__delegate.call(this,args);};
G__27343.cljs$lang$maxFixedArity = 0;
G__27343.cljs$lang$applyTo = (function (arglist__27345){
var args = cljs.core.seq(arglist__27345);
return G__27343__delegate(args);
});
G__27343.cljs$core$IFn$_invoke$arity$variadic = G__27343__delegate;
return G__27343;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1518788500366