// Compiled by ClojureScript 1.9.229 {}
goog.provide('comp.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('hyper.terse');
goog.require('om.next');
cljs.pprint._STAR_print_right_margin_STAR_ = (60);
if(typeof comp.core.published !== 'undefined'){
} else {
comp.core.published = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof comp.core.Camels !== 'undefined'){
} else {
comp.core.Camels = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
comp.core.register = (function comp$core$register(var_args){
var args37147 = [];
var len__27051__auto___37150 = arguments.length;
var i__27052__auto___37151 = (0);
while(true){
if((i__27052__auto___37151 < len__27051__auto___37150)){
args37147.push((arguments[i__27052__auto___37151]));

var G__37152 = (i__27052__auto___37151 + (1));
i__27052__auto___37151 = G__37152;
continue;
} else {
}
break;
}

var G__37149 = args37147.length;
switch (G__37149) {
case 2:
return comp.core.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return comp.core.register.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37147.length)].join('')));

}
});

comp.core.register.cljs$core$IFn$_invoke$arity$2 = (function (k,c){
return comp.core.register.call(null,k,c,cljs.core.PersistentArrayMap.EMPTY);
});

comp.core.register.cljs$core$IFn$_invoke$arity$3 = (function (k,c,m){
if(cljs.core.truth_(cljs.core.keyword.call(null,k))){
} else {
throw (new Error("Assert failed: (keyword k)"));
}

cljs.core.swap_BANG_.call(null,comp.core.published,cljs.core.assoc,k,om.next.factory.call(null,c,m));

return cljs.core.swap_BANG_.call(null,comp.core.Camels,cljs.core.assoc,k,c);
});

comp.core.register.cljs$lang$maxFixedArity = 3;

comp.core.onent = (function comp$core$onent(k){
return cljs.core.get.call(null,cljs.core.deref.call(null,comp.core.published),k,(function (_){
return "";
}));
});
comp.core.camels = (function comp$core$camels(k){
return cljs.core.get.call(null,cljs.core.deref.call(null,comp.core.Camels),k);
});

//# sourceMappingURL=core.js.map?rel=1518788556208