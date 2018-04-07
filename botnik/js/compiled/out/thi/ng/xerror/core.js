// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.xerror.core');
goog.require('cljs.core');
thi.ng.xerror.core.throw_BANG_ = (function thi$ng$xerror$core$throw_BANG_(msg){
throw (new Error(msg));
});
thi.ng.xerror.core.key_error_BANG_ = (function thi$ng$xerror$core$key_error_BANG_(k){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Illegal lookup key: "),cljs.core.str(k)].join(''));
});
thi.ng.xerror.core.type_error_BANG_ = (function thi$ng$xerror$core$type_error_BANG_(t,x){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Can't cast to "),cljs.core.str(t),cljs.core.str(" from "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''));
});
thi.ng.xerror.core.arity_error_BANG_ = (function thi$ng$xerror$core$arity_error_BANG_(n){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Wrong number of args: "),cljs.core.str(n)].join(''));
});
thi.ng.xerror.core.illegal_arg_BANG_ = (function thi$ng$xerror$core$illegal_arg_BANG_(var_args){
var args29701 = [];
var len__27051__auto___29704 = arguments.length;
var i__27052__auto___29705 = (0);
while(true){
if((i__27052__auto___29705 < len__27051__auto___29704)){
args29701.push((arguments[i__27052__auto___29705]));

var G__29706 = (i__27052__auto___29705 + (1));
i__27052__auto___29705 = G__29706;
continue;
} else {
}
break;
}

var G__29703 = args29701.length;
switch (G__29703) {
case 1:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29701.length)].join('')));

}
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,"Illegal argument",x);
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (msg,x){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str(msg),cljs.core.str(": "),cljs.core.str(x)].join(''));
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$lang$maxFixedArity = 2;

thi.ng.xerror.core.unsupported_BANG_ = (function thi$ng$xerror$core$unsupported_BANG_(var_args){
var args29708 = [];
var len__27051__auto___29711 = arguments.length;
var i__27052__auto___29712 = (0);
while(true){
if((i__27052__auto___29712 < len__27051__auto___29711)){
args29708.push((arguments[i__27052__auto___29712]));

var G__29713 = (i__27052__auto___29712 + (1));
i__27052__auto___29712 = G__29713;
continue;
} else {
}
break;
}

var G__29710 = args29708.length;
switch (G__29710) {
case 0:
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29708.length)].join('')));

}
});

thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.xerror.core.unsupported_BANG_.call(null,"Unsupported operation");
});

thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (msg){
throw (new Error(msg));
});

thi.ng.xerror.core.unsupported_BANG_.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=core.js.map?rel=1518788516302