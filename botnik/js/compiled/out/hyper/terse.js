// Compiled by ClojureScript 1.9.229 {}
goog.provide('hyper.terse');
goog.require('cljs.core');
hyper.terse.PRIVATE = (new Object());
hyper.terse.owner_key = (function hyper$terse$owner_key(owner){
return cljs.core.hash.call(null,owner);
});
hyper.terse.private_BANG_ = (function hyper$terse$private_BANG_(owner,korks,f){
var func = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,(function (){
return cljs.core.List.EMPTY;
})),cljs.core.type.call(null,f)))?f:(function (v){
return f;
}));
var k = hyper.terse.owner_key.call(null,owner);
var kcol = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var store = cljs.core.update_in.call(null,(function (){var or__25976__auto__ = (hyper.terse.PRIVATE[k]);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),kcol,func);
return (hyper.terse.PRIVATE[k] = store);
});
hyper.terse.private$ = (function hyper$terse$private(var_args){
var args35915 = [];
var len__27051__auto___35918 = arguments.length;
var i__27052__auto___35919 = (0);
while(true){
if((i__27052__auto___35919 < len__27051__auto___35918)){
args35915.push((arguments[i__27052__auto___35919]));

var G__35920 = (i__27052__auto___35919 + (1));
i__27052__auto___35919 = G__35920;
continue;
} else {
}
break;
}

var G__35917 = args35915.length;
switch (G__35917) {
case 1:
return hyper.terse.private$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyper.terse.private$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35915.length)].join('')));

}
});

hyper.terse.private$.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return hyper.terse.private$.call(null,owner,cljs.core.PersistentVector.EMPTY);
});

hyper.terse.private$.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
var kcol = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return cljs.core.get_in.call(null,(hyper.terse.PRIVATE[hyper.terse.owner_key.call(null,owner)]),kcol);
});

hyper.terse.private$.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=terse.js.map?rel=1518788553518