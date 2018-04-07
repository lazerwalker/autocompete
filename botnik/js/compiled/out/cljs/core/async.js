// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args38475 = [];
var len__27051__auto___38481 = arguments.length;
var i__27052__auto___38482 = (0);
while(true){
if((i__27052__auto___38482 < len__27051__auto___38481)){
args38475.push((arguments[i__27052__auto___38482]));

var G__38483 = (i__27052__auto___38482 + (1));
i__27052__auto___38482 = G__38483;
continue;
} else {
}
break;
}

var G__38477 = args38475.length;
switch (G__38477) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38475.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38478 = (function (f,blockable,meta38479){
this.f = f;
this.blockable = blockable;
this.meta38479 = meta38479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async38478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38480,meta38479__$1){
var self__ = this;
var _38480__$1 = this;
return (new cljs.core.async.t_cljs$core$async38478(self__.f,self__.blockable,meta38479__$1));
});


cljs.core.async.t_cljs$core$async38478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38480){
var self__ = this;
var _38480__$1 = this;
return self__.meta38479;
});


cljs.core.async.t_cljs$core$async38478.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async38478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async38478.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async38478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38479","meta38479",1578789183,null)], null);
});

cljs.core.async.t_cljs$core$async38478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38478";

cljs.core.async.t_cljs$core$async38478.cljs$lang$ctorPrWriter = (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"cljs.core.async/t_cljs$core$async38478");
});

cljs.core.async.__GT_t_cljs$core$async38478 = (function cljs$core$async$__GT_t_cljs$core$async38478(f__$1,blockable__$1,meta38479){
return (new cljs.core.async.t_cljs$core$async38478(f__$1,blockable__$1,meta38479));
});

}

return (new cljs.core.async.t_cljs$core$async38478(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args38487 = [];
var len__27051__auto___38490 = arguments.length;
var i__27052__auto___38491 = (0);
while(true){
if((i__27052__auto___38491 < len__27051__auto___38490)){
args38487.push((arguments[i__27052__auto___38491]));

var G__38492 = (i__27052__auto___38491 + (1));
i__27052__auto___38491 = G__38492;
continue;
} else {
}
break;
}

var G__38489 = args38487.length;
switch (G__38489) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38487.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args38494 = [];
var len__27051__auto___38497 = arguments.length;
var i__27052__auto___38498 = (0);
while(true){
if((i__27052__auto___38498 < len__27051__auto___38497)){
args38494.push((arguments[i__27052__auto___38498]));

var G__38499 = (i__27052__auto___38498 + (1));
i__27052__auto___38498 = G__38499;
continue;
} else {
}
break;
}

var G__38496 = args38494.length;
switch (G__38496) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38494.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args38501 = [];
var len__27051__auto___38504 = arguments.length;
var i__27052__auto___38505 = (0);
while(true){
if((i__27052__auto___38505 < len__27051__auto___38504)){
args38501.push((arguments[i__27052__auto___38505]));

var G__38506 = (i__27052__auto___38505 + (1));
i__27052__auto___38505 = G__38506;
continue;
} else {
}
break;
}

var G__38503 = args38501.length;
switch (G__38503) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38501.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38508 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38508);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38508,ret){
return (function (){
return fn1.call(null,val_38508);
});})(val_38508,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args38509 = [];
var len__27051__auto___38512 = arguments.length;
var i__27052__auto___38513 = (0);
while(true){
if((i__27052__auto___38513 < len__27051__auto___38512)){
args38509.push((arguments[i__27052__auto___38513]));

var G__38514 = (i__27052__auto___38513 + (1));
i__27052__auto___38513 = G__38514;
continue;
} else {
}
break;
}

var G__38511 = args38509.length;
switch (G__38511) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38509.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26891__auto___38516 = n;
var x_38517 = (0);
while(true){
if((x_38517 < n__26891__auto___38516)){
(a[x_38517] = (0));

var G__38518 = (x_38517 + (1));
x_38517 = G__38518;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__38519 = (i + (1));
i = G__38519;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38523 = (function (alt_flag,flag,meta38524){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta38524 = meta38524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async38523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38525,meta38524__$1){
var self__ = this;
var _38525__$1 = this;
return (new cljs.core.async.t_cljs$core$async38523(self__.alt_flag,self__.flag,meta38524__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async38523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38525){
var self__ = this;
var _38525__$1 = this;
return self__.meta38524;
});})(flag))
;


cljs.core.async.t_cljs$core$async38523.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async38523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async38523.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async38523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38523.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38524","meta38524",410922991,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38523";

cljs.core.async.t_cljs$core$async38523.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"cljs.core.async/t_cljs$core$async38523");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38523 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38523(alt_flag__$1,flag__$1,meta38524){
return (new cljs.core.async.t_cljs$core$async38523(alt_flag__$1,flag__$1,meta38524));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38523(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38529 = (function (alt_handler,flag,cb,meta38530){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta38530 = meta38530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async38529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38531,meta38530__$1){
var self__ = this;
var _38531__$1 = this;
return (new cljs.core.async.t_cljs$core$async38529(self__.alt_handler,self__.flag,self__.cb,meta38530__$1));
});


cljs.core.async.t_cljs$core$async38529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38531){
var self__ = this;
var _38531__$1 = this;
return self__.meta38530;
});


cljs.core.async.t_cljs$core$async38529.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async38529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async38529.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async38529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38530","meta38530",1970775641,null)], null);
});

cljs.core.async.t_cljs$core$async38529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38529";

cljs.core.async.t_cljs$core$async38529.cljs$lang$ctorPrWriter = (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"cljs.core.async/t_cljs$core$async38529");
});

cljs.core.async.__GT_t_cljs$core$async38529 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38529(alt_handler__$1,flag__$1,cb__$1,meta38530){
return (new cljs.core.async.t_cljs$core$async38529(alt_handler__$1,flag__$1,cb__$1,meta38530));
});

}

return (new cljs.core.async.t_cljs$core$async38529(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38532_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38532_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38533_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38533_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25976__auto__ = wport;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38534 = (i + (1));
i = G__38534;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25976__auto__ = ret;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25964__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25964__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25964__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27058__auto__ = [];
var len__27051__auto___38540 = arguments.length;
var i__27052__auto___38541 = (0);
while(true){
if((i__27052__auto___38541 < len__27051__auto___38540)){
args__27058__auto__.push((arguments[i__27052__auto___38541]));

var G__38542 = (i__27052__auto___38541 + (1));
i__27052__auto___38541 = G__38542;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((1) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27059__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38537){
var map__38538 = p__38537;
var map__38538__$1 = ((((!((map__38538 == null)))?((((map__38538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38538):map__38538);
var opts = map__38538__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38535){
var G__38536 = cljs.core.first.call(null,seq38535);
var seq38535__$1 = cljs.core.next.call(null,seq38535);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38536,seq38535__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args38543 = [];
var len__27051__auto___38593 = arguments.length;
var i__27052__auto___38594 = (0);
while(true){
if((i__27052__auto___38594 < len__27051__auto___38593)){
args38543.push((arguments[i__27052__auto___38594]));

var G__38595 = (i__27052__auto___38594 + (1));
i__27052__auto___38594 = G__38595;
continue;
} else {
}
break;
}

var G__38545 = args38543.length;
switch (G__38545) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38543.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38430__auto___38597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___38597){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___38597){
return (function (state_38569){
var state_val_38570 = (state_38569[(1)]);
if((state_val_38570 === (7))){
var inst_38565 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38571_38598 = state_38569__$1;
(statearr_38571_38598[(2)] = inst_38565);

(statearr_38571_38598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (1))){
var state_38569__$1 = state_38569;
var statearr_38572_38599 = state_38569__$1;
(statearr_38572_38599[(2)] = null);

(statearr_38572_38599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (4))){
var inst_38548 = (state_38569[(7)]);
var inst_38548__$1 = (state_38569[(2)]);
var inst_38549 = (inst_38548__$1 == null);
var state_38569__$1 = (function (){var statearr_38573 = state_38569;
(statearr_38573[(7)] = inst_38548__$1);

return statearr_38573;
})();
if(cljs.core.truth_(inst_38549)){
var statearr_38574_38600 = state_38569__$1;
(statearr_38574_38600[(1)] = (5));

} else {
var statearr_38575_38601 = state_38569__$1;
(statearr_38575_38601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (13))){
var state_38569__$1 = state_38569;
var statearr_38576_38602 = state_38569__$1;
(statearr_38576_38602[(2)] = null);

(statearr_38576_38602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (6))){
var inst_38548 = (state_38569[(7)]);
var state_38569__$1 = state_38569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38569__$1,(11),to,inst_38548);
} else {
if((state_val_38570 === (3))){
var inst_38567 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38569__$1,inst_38567);
} else {
if((state_val_38570 === (12))){
var state_38569__$1 = state_38569;
var statearr_38577_38603 = state_38569__$1;
(statearr_38577_38603[(2)] = null);

(statearr_38577_38603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (2))){
var state_38569__$1 = state_38569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38569__$1,(4),from);
} else {
if((state_val_38570 === (11))){
var inst_38558 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
if(cljs.core.truth_(inst_38558)){
var statearr_38578_38604 = state_38569__$1;
(statearr_38578_38604[(1)] = (12));

} else {
var statearr_38579_38605 = state_38569__$1;
(statearr_38579_38605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (9))){
var state_38569__$1 = state_38569;
var statearr_38580_38606 = state_38569__$1;
(statearr_38580_38606[(2)] = null);

(statearr_38580_38606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (5))){
var state_38569__$1 = state_38569;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38581_38607 = state_38569__$1;
(statearr_38581_38607[(1)] = (8));

} else {
var statearr_38582_38608 = state_38569__$1;
(statearr_38582_38608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (14))){
var inst_38563 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38583_38609 = state_38569__$1;
(statearr_38583_38609[(2)] = inst_38563);

(statearr_38583_38609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (10))){
var inst_38555 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38584_38610 = state_38569__$1;
(statearr_38584_38610[(2)] = inst_38555);

(statearr_38584_38610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (8))){
var inst_38552 = cljs.core.async.close_BANG_.call(null,to);
var state_38569__$1 = state_38569;
var statearr_38585_38611 = state_38569__$1;
(statearr_38585_38611[(2)] = inst_38552);

(statearr_38585_38611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___38597))
;
return ((function (switch__38318__auto__,c__38430__auto___38597){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_38589 = [null,null,null,null,null,null,null,null];
(statearr_38589[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_38589[(1)] = (1));

return statearr_38589;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_38569){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_38569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e38590){if((e38590 instanceof Object)){
var ex__38322__auto__ = e38590;
var statearr_38591_38612 = state_38569;
(statearr_38591_38612[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38613 = state_38569;
state_38569 = G__38613;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_38569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_38569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___38597))
})();
var state__38432__auto__ = (function (){var statearr_38592 = f__38431__auto__.call(null);
(statearr_38592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___38597);

return statearr_38592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___38597))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38801){
var vec__38802 = p__38801;
var v = cljs.core.nth.call(null,vec__38802,(0),null);
var p = cljs.core.nth.call(null,vec__38802,(1),null);
var job = vec__38802;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38430__auto___38988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___38988,res,vec__38802,v,p,job,jobs,results){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___38988,res,vec__38802,v,p,job,jobs,results){
return (function (state_38809){
var state_val_38810 = (state_38809[(1)]);
if((state_val_38810 === (1))){
var state_38809__$1 = state_38809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38809__$1,(2),res,v);
} else {
if((state_val_38810 === (2))){
var inst_38806 = (state_38809[(2)]);
var inst_38807 = cljs.core.async.close_BANG_.call(null,res);
var state_38809__$1 = (function (){var statearr_38811 = state_38809;
(statearr_38811[(7)] = inst_38806);

return statearr_38811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38809__$1,inst_38807);
} else {
return null;
}
}
});})(c__38430__auto___38988,res,vec__38802,v,p,job,jobs,results))
;
return ((function (switch__38318__auto__,c__38430__auto___38988,res,vec__38802,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0 = (function (){
var statearr_38815 = [null,null,null,null,null,null,null,null];
(statearr_38815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__);

(statearr_38815[(1)] = (1));

return statearr_38815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1 = (function (state_38809){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_38809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e38816){if((e38816 instanceof Object)){
var ex__38322__auto__ = e38816;
var statearr_38817_38989 = state_38809;
(statearr_38817_38989[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38990 = state_38809;
state_38809 = G__38990;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__ = function(state_38809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1.call(this,state_38809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___38988,res,vec__38802,v,p,job,jobs,results))
})();
var state__38432__auto__ = (function (){var statearr_38818 = f__38431__auto__.call(null);
(statearr_38818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___38988);

return statearr_38818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___38988,res,vec__38802,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38819){
var vec__38820 = p__38819;
var v = cljs.core.nth.call(null,vec__38820,(0),null);
var p = cljs.core.nth.call(null,vec__38820,(1),null);
var job = vec__38820;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26891__auto___38991 = n;
var __38992 = (0);
while(true){
if((__38992 < n__26891__auto___38991)){
var G__38823_38993 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38823_38993) {
case "compute":
var c__38430__auto___38995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38992,c__38430__auto___38995,G__38823_38993,n__26891__auto___38991,jobs,results,process,async){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (__38992,c__38430__auto___38995,G__38823_38993,n__26891__auto___38991,jobs,results,process,async){
return (function (state_38836){
var state_val_38837 = (state_38836[(1)]);
if((state_val_38837 === (1))){
var state_38836__$1 = state_38836;
var statearr_38838_38996 = state_38836__$1;
(statearr_38838_38996[(2)] = null);

(statearr_38838_38996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38837 === (2))){
var state_38836__$1 = state_38836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38836__$1,(4),jobs);
} else {
if((state_val_38837 === (3))){
var inst_38834 = (state_38836[(2)]);
var state_38836__$1 = state_38836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38836__$1,inst_38834);
} else {
if((state_val_38837 === (4))){
var inst_38826 = (state_38836[(2)]);
var inst_38827 = process.call(null,inst_38826);
var state_38836__$1 = state_38836;
if(cljs.core.truth_(inst_38827)){
var statearr_38839_38997 = state_38836__$1;
(statearr_38839_38997[(1)] = (5));

} else {
var statearr_38840_38998 = state_38836__$1;
(statearr_38840_38998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38837 === (5))){
var state_38836__$1 = state_38836;
var statearr_38841_38999 = state_38836__$1;
(statearr_38841_38999[(2)] = null);

(statearr_38841_38999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38837 === (6))){
var state_38836__$1 = state_38836;
var statearr_38842_39000 = state_38836__$1;
(statearr_38842_39000[(2)] = null);

(statearr_38842_39000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38837 === (7))){
var inst_38832 = (state_38836[(2)]);
var state_38836__$1 = state_38836;
var statearr_38843_39001 = state_38836__$1;
(statearr_38843_39001[(2)] = inst_38832);

(statearr_38843_39001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38992,c__38430__auto___38995,G__38823_38993,n__26891__auto___38991,jobs,results,process,async))
;
return ((function (__38992,switch__38318__auto__,c__38430__auto___38995,G__38823_38993,n__26891__auto___38991,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0 = (function (){
var statearr_38847 = [null,null,null,null,null,null,null];
(statearr_38847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__);

(statearr_38847[(1)] = (1));

return statearr_38847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1 = (function (state_38836){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_38836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e38848){if((e38848 instanceof Object)){
var ex__38322__auto__ = e38848;
var statearr_38849_39002 = state_38836;
(statearr_38849_39002[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39003 = state_38836;
state_38836 = G__39003;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__ = function(state_38836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1.call(this,state_38836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__;
})()
;})(__38992,switch__38318__auto__,c__38430__auto___38995,G__38823_38993,n__26891__auto___38991,jobs,results,process,async))
})();
var state__38432__auto__ = (function (){var statearr_38850 = f__38431__auto__.call(null);
(statearr_38850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___38995);

return statearr_38850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(__38992,c__38430__auto___38995,G__38823_38993,n__26891__auto___38991,jobs,results,process,async))
);


break;
case "async":
var c__38430__auto___39004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38992,c__38430__auto___39004,G__38823_38993,n__26891__auto___38991,jobs,results,process,async){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (__38992,c__38430__auto___39004,G__38823_38993,n__26891__auto___38991,jobs,results,process,async){
return (function (state_38863){
var state_val_38864 = (state_38863[(1)]);
if((state_val_38864 === (1))){
var state_38863__$1 = state_38863;
var statearr_38865_39005 = state_38863__$1;
(statearr_38865_39005[(2)] = null);

(statearr_38865_39005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (2))){
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38863__$1,(4),jobs);
} else {
if((state_val_38864 === (3))){
var inst_38861 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38863__$1,inst_38861);
} else {
if((state_val_38864 === (4))){
var inst_38853 = (state_38863[(2)]);
var inst_38854 = async.call(null,inst_38853);
var state_38863__$1 = state_38863;
if(cljs.core.truth_(inst_38854)){
var statearr_38866_39006 = state_38863__$1;
(statearr_38866_39006[(1)] = (5));

} else {
var statearr_38867_39007 = state_38863__$1;
(statearr_38867_39007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (5))){
var state_38863__$1 = state_38863;
var statearr_38868_39008 = state_38863__$1;
(statearr_38868_39008[(2)] = null);

(statearr_38868_39008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (6))){
var state_38863__$1 = state_38863;
var statearr_38869_39009 = state_38863__$1;
(statearr_38869_39009[(2)] = null);

(statearr_38869_39009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (7))){
var inst_38859 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38870_39010 = state_38863__$1;
(statearr_38870_39010[(2)] = inst_38859);

(statearr_38870_39010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38992,c__38430__auto___39004,G__38823_38993,n__26891__auto___38991,jobs,results,process,async))
;
return ((function (__38992,switch__38318__auto__,c__38430__auto___39004,G__38823_38993,n__26891__auto___38991,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0 = (function (){
var statearr_38874 = [null,null,null,null,null,null,null];
(statearr_38874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__);

(statearr_38874[(1)] = (1));

return statearr_38874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1 = (function (state_38863){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_38863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e38875){if((e38875 instanceof Object)){
var ex__38322__auto__ = e38875;
var statearr_38876_39011 = state_38863;
(statearr_38876_39011[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39012 = state_38863;
state_38863 = G__39012;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__ = function(state_38863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1.call(this,state_38863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__;
})()
;})(__38992,switch__38318__auto__,c__38430__auto___39004,G__38823_38993,n__26891__auto___38991,jobs,results,process,async))
})();
var state__38432__auto__ = (function (){var statearr_38877 = f__38431__auto__.call(null);
(statearr_38877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___39004);

return statearr_38877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(__38992,c__38430__auto___39004,G__38823_38993,n__26891__auto___38991,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__39013 = (__38992 + (1));
__38992 = G__39013;
continue;
} else {
}
break;
}

var c__38430__auto___39014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___39014,jobs,results,process,async){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___39014,jobs,results,process,async){
return (function (state_38899){
var state_val_38900 = (state_38899[(1)]);
if((state_val_38900 === (1))){
var state_38899__$1 = state_38899;
var statearr_38901_39015 = state_38899__$1;
(statearr_38901_39015[(2)] = null);

(statearr_38901_39015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (2))){
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(4),from);
} else {
if((state_val_38900 === (3))){
var inst_38897 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38899__$1,inst_38897);
} else {
if((state_val_38900 === (4))){
var inst_38880 = (state_38899[(7)]);
var inst_38880__$1 = (state_38899[(2)]);
var inst_38881 = (inst_38880__$1 == null);
var state_38899__$1 = (function (){var statearr_38902 = state_38899;
(statearr_38902[(7)] = inst_38880__$1);

return statearr_38902;
})();
if(cljs.core.truth_(inst_38881)){
var statearr_38903_39016 = state_38899__$1;
(statearr_38903_39016[(1)] = (5));

} else {
var statearr_38904_39017 = state_38899__$1;
(statearr_38904_39017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (5))){
var inst_38883 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38899__$1 = state_38899;
var statearr_38905_39018 = state_38899__$1;
(statearr_38905_39018[(2)] = inst_38883);

(statearr_38905_39018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (6))){
var inst_38880 = (state_38899[(7)]);
var inst_38885 = (state_38899[(8)]);
var inst_38885__$1 = cljs.core.async.chan.call(null,(1));
var inst_38886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38887 = [inst_38880,inst_38885__$1];
var inst_38888 = (new cljs.core.PersistentVector(null,2,(5),inst_38886,inst_38887,null));
var state_38899__$1 = (function (){var statearr_38906 = state_38899;
(statearr_38906[(8)] = inst_38885__$1);

return statearr_38906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38899__$1,(8),jobs,inst_38888);
} else {
if((state_val_38900 === (7))){
var inst_38895 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38907_39019 = state_38899__$1;
(statearr_38907_39019[(2)] = inst_38895);

(statearr_38907_39019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (8))){
var inst_38885 = (state_38899[(8)]);
var inst_38890 = (state_38899[(2)]);
var state_38899__$1 = (function (){var statearr_38908 = state_38899;
(statearr_38908[(9)] = inst_38890);

return statearr_38908;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38899__$1,(9),results,inst_38885);
} else {
if((state_val_38900 === (9))){
var inst_38892 = (state_38899[(2)]);
var state_38899__$1 = (function (){var statearr_38909 = state_38899;
(statearr_38909[(10)] = inst_38892);

return statearr_38909;
})();
var statearr_38910_39020 = state_38899__$1;
(statearr_38910_39020[(2)] = null);

(statearr_38910_39020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___39014,jobs,results,process,async))
;
return ((function (switch__38318__auto__,c__38430__auto___39014,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0 = (function (){
var statearr_38914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__);

(statearr_38914[(1)] = (1));

return statearr_38914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1 = (function (state_38899){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_38899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e38915){if((e38915 instanceof Object)){
var ex__38322__auto__ = e38915;
var statearr_38916_39021 = state_38899;
(statearr_38916_39021[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39022 = state_38899;
state_38899 = G__39022;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__ = function(state_38899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1.call(this,state_38899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___39014,jobs,results,process,async))
})();
var state__38432__auto__ = (function (){var statearr_38917 = f__38431__auto__.call(null);
(statearr_38917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___39014);

return statearr_38917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___39014,jobs,results,process,async))
);


var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__,jobs,results,process,async){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__,jobs,results,process,async){
return (function (state_38955){
var state_val_38956 = (state_38955[(1)]);
if((state_val_38956 === (7))){
var inst_38951 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38957_39023 = state_38955__$1;
(statearr_38957_39023[(2)] = inst_38951);

(statearr_38957_39023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (20))){
var state_38955__$1 = state_38955;
var statearr_38958_39024 = state_38955__$1;
(statearr_38958_39024[(2)] = null);

(statearr_38958_39024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (1))){
var state_38955__$1 = state_38955;
var statearr_38959_39025 = state_38955__$1;
(statearr_38959_39025[(2)] = null);

(statearr_38959_39025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (4))){
var inst_38920 = (state_38955[(7)]);
var inst_38920__$1 = (state_38955[(2)]);
var inst_38921 = (inst_38920__$1 == null);
var state_38955__$1 = (function (){var statearr_38960 = state_38955;
(statearr_38960[(7)] = inst_38920__$1);

return statearr_38960;
})();
if(cljs.core.truth_(inst_38921)){
var statearr_38961_39026 = state_38955__$1;
(statearr_38961_39026[(1)] = (5));

} else {
var statearr_38962_39027 = state_38955__$1;
(statearr_38962_39027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (15))){
var inst_38933 = (state_38955[(8)]);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38955__$1,(18),to,inst_38933);
} else {
if((state_val_38956 === (21))){
var inst_38946 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38963_39028 = state_38955__$1;
(statearr_38963_39028[(2)] = inst_38946);

(statearr_38963_39028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (13))){
var inst_38948 = (state_38955[(2)]);
var state_38955__$1 = (function (){var statearr_38964 = state_38955;
(statearr_38964[(9)] = inst_38948);

return statearr_38964;
})();
var statearr_38965_39029 = state_38955__$1;
(statearr_38965_39029[(2)] = null);

(statearr_38965_39029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (6))){
var inst_38920 = (state_38955[(7)]);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38955__$1,(11),inst_38920);
} else {
if((state_val_38956 === (17))){
var inst_38941 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
if(cljs.core.truth_(inst_38941)){
var statearr_38966_39030 = state_38955__$1;
(statearr_38966_39030[(1)] = (19));

} else {
var statearr_38967_39031 = state_38955__$1;
(statearr_38967_39031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (3))){
var inst_38953 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38955__$1,inst_38953);
} else {
if((state_val_38956 === (12))){
var inst_38930 = (state_38955[(10)]);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38955__$1,(14),inst_38930);
} else {
if((state_val_38956 === (2))){
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38955__$1,(4),results);
} else {
if((state_val_38956 === (19))){
var state_38955__$1 = state_38955;
var statearr_38968_39032 = state_38955__$1;
(statearr_38968_39032[(2)] = null);

(statearr_38968_39032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (11))){
var inst_38930 = (state_38955[(2)]);
var state_38955__$1 = (function (){var statearr_38969 = state_38955;
(statearr_38969[(10)] = inst_38930);

return statearr_38969;
})();
var statearr_38970_39033 = state_38955__$1;
(statearr_38970_39033[(2)] = null);

(statearr_38970_39033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (9))){
var state_38955__$1 = state_38955;
var statearr_38971_39034 = state_38955__$1;
(statearr_38971_39034[(2)] = null);

(statearr_38971_39034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (5))){
var state_38955__$1 = state_38955;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38972_39035 = state_38955__$1;
(statearr_38972_39035[(1)] = (8));

} else {
var statearr_38973_39036 = state_38955__$1;
(statearr_38973_39036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (14))){
var inst_38935 = (state_38955[(11)]);
var inst_38933 = (state_38955[(8)]);
var inst_38933__$1 = (state_38955[(2)]);
var inst_38934 = (inst_38933__$1 == null);
var inst_38935__$1 = cljs.core.not.call(null,inst_38934);
var state_38955__$1 = (function (){var statearr_38974 = state_38955;
(statearr_38974[(11)] = inst_38935__$1);

(statearr_38974[(8)] = inst_38933__$1);

return statearr_38974;
})();
if(inst_38935__$1){
var statearr_38975_39037 = state_38955__$1;
(statearr_38975_39037[(1)] = (15));

} else {
var statearr_38976_39038 = state_38955__$1;
(statearr_38976_39038[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (16))){
var inst_38935 = (state_38955[(11)]);
var state_38955__$1 = state_38955;
var statearr_38977_39039 = state_38955__$1;
(statearr_38977_39039[(2)] = inst_38935);

(statearr_38977_39039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (10))){
var inst_38927 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38978_39040 = state_38955__$1;
(statearr_38978_39040[(2)] = inst_38927);

(statearr_38978_39040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (18))){
var inst_38938 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38979_39041 = state_38955__$1;
(statearr_38979_39041[(2)] = inst_38938);

(statearr_38979_39041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (8))){
var inst_38924 = cljs.core.async.close_BANG_.call(null,to);
var state_38955__$1 = state_38955;
var statearr_38980_39042 = state_38955__$1;
(statearr_38980_39042[(2)] = inst_38924);

(statearr_38980_39042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto__,jobs,results,process,async))
;
return ((function (switch__38318__auto__,c__38430__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0 = (function (){
var statearr_38984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__);

(statearr_38984[(1)] = (1));

return statearr_38984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1 = (function (state_38955){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_38955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e38985){if((e38985 instanceof Object)){
var ex__38322__auto__ = e38985;
var statearr_38986_39043 = state_38955;
(statearr_38986_39043[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39044 = state_38955;
state_38955 = G__39044;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__ = function(state_38955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1.call(this,state_38955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__,jobs,results,process,async))
})();
var state__38432__auto__ = (function (){var statearr_38987 = f__38431__auto__.call(null);
(statearr_38987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_38987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__,jobs,results,process,async))
);

return c__38430__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args39045 = [];
var len__27051__auto___39048 = arguments.length;
var i__27052__auto___39049 = (0);
while(true){
if((i__27052__auto___39049 < len__27051__auto___39048)){
args39045.push((arguments[i__27052__auto___39049]));

var G__39050 = (i__27052__auto___39049 + (1));
i__27052__auto___39049 = G__39050;
continue;
} else {
}
break;
}

var G__39047 = args39045.length;
switch (G__39047) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39045.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args39052 = [];
var len__27051__auto___39055 = arguments.length;
var i__27052__auto___39056 = (0);
while(true){
if((i__27052__auto___39056 < len__27051__auto___39055)){
args39052.push((arguments[i__27052__auto___39056]));

var G__39057 = (i__27052__auto___39056 + (1));
i__27052__auto___39056 = G__39057;
continue;
} else {
}
break;
}

var G__39054 = args39052.length;
switch (G__39054) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39052.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args39059 = [];
var len__27051__auto___39112 = arguments.length;
var i__27052__auto___39113 = (0);
while(true){
if((i__27052__auto___39113 < len__27051__auto___39112)){
args39059.push((arguments[i__27052__auto___39113]));

var G__39114 = (i__27052__auto___39113 + (1));
i__27052__auto___39113 = G__39114;
continue;
} else {
}
break;
}

var G__39061 = args39059.length;
switch (G__39061) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39059.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38430__auto___39116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___39116,tc,fc){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___39116,tc,fc){
return (function (state_39087){
var state_val_39088 = (state_39087[(1)]);
if((state_val_39088 === (7))){
var inst_39083 = (state_39087[(2)]);
var state_39087__$1 = state_39087;
var statearr_39089_39117 = state_39087__$1;
(statearr_39089_39117[(2)] = inst_39083);

(statearr_39089_39117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39088 === (1))){
var state_39087__$1 = state_39087;
var statearr_39090_39118 = state_39087__$1;
(statearr_39090_39118[(2)] = null);

(statearr_39090_39118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39088 === (4))){
var inst_39064 = (state_39087[(7)]);
var inst_39064__$1 = (state_39087[(2)]);
var inst_39065 = (inst_39064__$1 == null);
var state_39087__$1 = (function (){var statearr_39091 = state_39087;
(statearr_39091[(7)] = inst_39064__$1);

return statearr_39091;
})();
if(cljs.core.truth_(inst_39065)){
var statearr_39092_39119 = state_39087__$1;
(statearr_39092_39119[(1)] = (5));

} else {
var statearr_39093_39120 = state_39087__$1;
(statearr_39093_39120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39088 === (13))){
var state_39087__$1 = state_39087;
var statearr_39094_39121 = state_39087__$1;
(statearr_39094_39121[(2)] = null);

(statearr_39094_39121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39088 === (6))){
var inst_39064 = (state_39087[(7)]);
var inst_39070 = p.call(null,inst_39064);
var state_39087__$1 = state_39087;
if(cljs.core.truth_(inst_39070)){
var statearr_39095_39122 = state_39087__$1;
(statearr_39095_39122[(1)] = (9));

} else {
var statearr_39096_39123 = state_39087__$1;
(statearr_39096_39123[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39088 === (3))){
var inst_39085 = (state_39087[(2)]);
var state_39087__$1 = state_39087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39087__$1,inst_39085);
} else {
if((state_val_39088 === (12))){
var state_39087__$1 = state_39087;
var statearr_39097_39124 = state_39087__$1;
(statearr_39097_39124[(2)] = null);

(statearr_39097_39124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39088 === (2))){
var state_39087__$1 = state_39087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39087__$1,(4),ch);
} else {
if((state_val_39088 === (11))){
var inst_39064 = (state_39087[(7)]);
var inst_39074 = (state_39087[(2)]);
var state_39087__$1 = state_39087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39087__$1,(8),inst_39074,inst_39064);
} else {
if((state_val_39088 === (9))){
var state_39087__$1 = state_39087;
var statearr_39098_39125 = state_39087__$1;
(statearr_39098_39125[(2)] = tc);

(statearr_39098_39125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39088 === (5))){
var inst_39067 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39068 = cljs.core.async.close_BANG_.call(null,fc);
var state_39087__$1 = (function (){var statearr_39099 = state_39087;
(statearr_39099[(8)] = inst_39067);

return statearr_39099;
})();
var statearr_39100_39126 = state_39087__$1;
(statearr_39100_39126[(2)] = inst_39068);

(statearr_39100_39126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39088 === (14))){
var inst_39081 = (state_39087[(2)]);
var state_39087__$1 = state_39087;
var statearr_39101_39127 = state_39087__$1;
(statearr_39101_39127[(2)] = inst_39081);

(statearr_39101_39127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39088 === (10))){
var state_39087__$1 = state_39087;
var statearr_39102_39128 = state_39087__$1;
(statearr_39102_39128[(2)] = fc);

(statearr_39102_39128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39088 === (8))){
var inst_39076 = (state_39087[(2)]);
var state_39087__$1 = state_39087;
if(cljs.core.truth_(inst_39076)){
var statearr_39103_39129 = state_39087__$1;
(statearr_39103_39129[(1)] = (12));

} else {
var statearr_39104_39130 = state_39087__$1;
(statearr_39104_39130[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___39116,tc,fc))
;
return ((function (switch__38318__auto__,c__38430__auto___39116,tc,fc){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_39108 = [null,null,null,null,null,null,null,null,null];
(statearr_39108[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_39108[(1)] = (1));

return statearr_39108;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_39087){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_39087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e39109){if((e39109 instanceof Object)){
var ex__38322__auto__ = e39109;
var statearr_39110_39131 = state_39087;
(statearr_39110_39131[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39132 = state_39087;
state_39087 = G__39132;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_39087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_39087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___39116,tc,fc))
})();
var state__38432__auto__ = (function (){var statearr_39111 = f__38431__auto__.call(null);
(statearr_39111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___39116);

return statearr_39111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___39116,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__){
return (function (state_39196){
var state_val_39197 = (state_39196[(1)]);
if((state_val_39197 === (7))){
var inst_39192 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
var statearr_39198_39219 = state_39196__$1;
(statearr_39198_39219[(2)] = inst_39192);

(statearr_39198_39219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (1))){
var inst_39176 = init;
var state_39196__$1 = (function (){var statearr_39199 = state_39196;
(statearr_39199[(7)] = inst_39176);

return statearr_39199;
})();
var statearr_39200_39220 = state_39196__$1;
(statearr_39200_39220[(2)] = null);

(statearr_39200_39220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (4))){
var inst_39179 = (state_39196[(8)]);
var inst_39179__$1 = (state_39196[(2)]);
var inst_39180 = (inst_39179__$1 == null);
var state_39196__$1 = (function (){var statearr_39201 = state_39196;
(statearr_39201[(8)] = inst_39179__$1);

return statearr_39201;
})();
if(cljs.core.truth_(inst_39180)){
var statearr_39202_39221 = state_39196__$1;
(statearr_39202_39221[(1)] = (5));

} else {
var statearr_39203_39222 = state_39196__$1;
(statearr_39203_39222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (6))){
var inst_39183 = (state_39196[(9)]);
var inst_39179 = (state_39196[(8)]);
var inst_39176 = (state_39196[(7)]);
var inst_39183__$1 = f.call(null,inst_39176,inst_39179);
var inst_39184 = cljs.core.reduced_QMARK_.call(null,inst_39183__$1);
var state_39196__$1 = (function (){var statearr_39204 = state_39196;
(statearr_39204[(9)] = inst_39183__$1);

return statearr_39204;
})();
if(inst_39184){
var statearr_39205_39223 = state_39196__$1;
(statearr_39205_39223[(1)] = (8));

} else {
var statearr_39206_39224 = state_39196__$1;
(statearr_39206_39224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (3))){
var inst_39194 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39196__$1,inst_39194);
} else {
if((state_val_39197 === (2))){
var state_39196__$1 = state_39196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39196__$1,(4),ch);
} else {
if((state_val_39197 === (9))){
var inst_39183 = (state_39196[(9)]);
var inst_39176 = inst_39183;
var state_39196__$1 = (function (){var statearr_39207 = state_39196;
(statearr_39207[(7)] = inst_39176);

return statearr_39207;
})();
var statearr_39208_39225 = state_39196__$1;
(statearr_39208_39225[(2)] = null);

(statearr_39208_39225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (5))){
var inst_39176 = (state_39196[(7)]);
var state_39196__$1 = state_39196;
var statearr_39209_39226 = state_39196__$1;
(statearr_39209_39226[(2)] = inst_39176);

(statearr_39209_39226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (10))){
var inst_39190 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
var statearr_39210_39227 = state_39196__$1;
(statearr_39210_39227[(2)] = inst_39190);

(statearr_39210_39227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (8))){
var inst_39183 = (state_39196[(9)]);
var inst_39186 = cljs.core.deref.call(null,inst_39183);
var state_39196__$1 = state_39196;
var statearr_39211_39228 = state_39196__$1;
(statearr_39211_39228[(2)] = inst_39186);

(statearr_39211_39228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto__))
;
return ((function (switch__38318__auto__,c__38430__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38319__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38319__auto____0 = (function (){
var statearr_39215 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39215[(0)] = cljs$core$async$reduce_$_state_machine__38319__auto__);

(statearr_39215[(1)] = (1));

return statearr_39215;
});
var cljs$core$async$reduce_$_state_machine__38319__auto____1 = (function (state_39196){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_39196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e39216){if((e39216 instanceof Object)){
var ex__38322__auto__ = e39216;
var statearr_39217_39229 = state_39196;
(statearr_39217_39229[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39230 = state_39196;
state_39196 = G__39230;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38319__auto__ = function(state_39196){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38319__auto____1.call(this,state_39196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38319__auto____0;
cljs$core$async$reduce_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38319__auto____1;
return cljs$core$async$reduce_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__))
})();
var state__38432__auto__ = (function (){var statearr_39218 = f__38431__auto__.call(null);
(statearr_39218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_39218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__))
);

return c__38430__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__,f__$1){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__,f__$1){
return (function (state_39250){
var state_val_39251 = (state_39250[(1)]);
if((state_val_39251 === (1))){
var inst_39245 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(2),inst_39245);
} else {
if((state_val_39251 === (2))){
var inst_39247 = (state_39250[(2)]);
var inst_39248 = f__$1.call(null,inst_39247);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39250__$1,inst_39248);
} else {
return null;
}
}
});})(c__38430__auto__,f__$1))
;
return ((function (switch__38318__auto__,c__38430__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38319__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38319__auto____0 = (function (){
var statearr_39255 = [null,null,null,null,null,null,null];
(statearr_39255[(0)] = cljs$core$async$transduce_$_state_machine__38319__auto__);

(statearr_39255[(1)] = (1));

return statearr_39255;
});
var cljs$core$async$transduce_$_state_machine__38319__auto____1 = (function (state_39250){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_39250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e39256){if((e39256 instanceof Object)){
var ex__38322__auto__ = e39256;
var statearr_39257_39259 = state_39250;
(statearr_39257_39259[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39260 = state_39250;
state_39250 = G__39260;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38319__auto__ = function(state_39250){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38319__auto____1.call(this,state_39250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38319__auto____0;
cljs$core$async$transduce_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38319__auto____1;
return cljs$core$async$transduce_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__,f__$1))
})();
var state__38432__auto__ = (function (){var statearr_39258 = f__38431__auto__.call(null);
(statearr_39258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_39258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__,f__$1))
);

return c__38430__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args39261 = [];
var len__27051__auto___39313 = arguments.length;
var i__27052__auto___39314 = (0);
while(true){
if((i__27052__auto___39314 < len__27051__auto___39313)){
args39261.push((arguments[i__27052__auto___39314]));

var G__39315 = (i__27052__auto___39314 + (1));
i__27052__auto___39314 = G__39315;
continue;
} else {
}
break;
}

var G__39263 = args39261.length;
switch (G__39263) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39261.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__){
return (function (state_39288){
var state_val_39289 = (state_39288[(1)]);
if((state_val_39289 === (7))){
var inst_39270 = (state_39288[(2)]);
var state_39288__$1 = state_39288;
var statearr_39290_39317 = state_39288__$1;
(statearr_39290_39317[(2)] = inst_39270);

(statearr_39290_39317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (1))){
var inst_39264 = cljs.core.seq.call(null,coll);
var inst_39265 = inst_39264;
var state_39288__$1 = (function (){var statearr_39291 = state_39288;
(statearr_39291[(7)] = inst_39265);

return statearr_39291;
})();
var statearr_39292_39318 = state_39288__$1;
(statearr_39292_39318[(2)] = null);

(statearr_39292_39318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (4))){
var inst_39265 = (state_39288[(7)]);
var inst_39268 = cljs.core.first.call(null,inst_39265);
var state_39288__$1 = state_39288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39288__$1,(7),ch,inst_39268);
} else {
if((state_val_39289 === (13))){
var inst_39282 = (state_39288[(2)]);
var state_39288__$1 = state_39288;
var statearr_39293_39319 = state_39288__$1;
(statearr_39293_39319[(2)] = inst_39282);

(statearr_39293_39319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (6))){
var inst_39273 = (state_39288[(2)]);
var state_39288__$1 = state_39288;
if(cljs.core.truth_(inst_39273)){
var statearr_39294_39320 = state_39288__$1;
(statearr_39294_39320[(1)] = (8));

} else {
var statearr_39295_39321 = state_39288__$1;
(statearr_39295_39321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (3))){
var inst_39286 = (state_39288[(2)]);
var state_39288__$1 = state_39288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39288__$1,inst_39286);
} else {
if((state_val_39289 === (12))){
var state_39288__$1 = state_39288;
var statearr_39296_39322 = state_39288__$1;
(statearr_39296_39322[(2)] = null);

(statearr_39296_39322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (2))){
var inst_39265 = (state_39288[(7)]);
var state_39288__$1 = state_39288;
if(cljs.core.truth_(inst_39265)){
var statearr_39297_39323 = state_39288__$1;
(statearr_39297_39323[(1)] = (4));

} else {
var statearr_39298_39324 = state_39288__$1;
(statearr_39298_39324[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (11))){
var inst_39279 = cljs.core.async.close_BANG_.call(null,ch);
var state_39288__$1 = state_39288;
var statearr_39299_39325 = state_39288__$1;
(statearr_39299_39325[(2)] = inst_39279);

(statearr_39299_39325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (9))){
var state_39288__$1 = state_39288;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39300_39326 = state_39288__$1;
(statearr_39300_39326[(1)] = (11));

} else {
var statearr_39301_39327 = state_39288__$1;
(statearr_39301_39327[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (5))){
var inst_39265 = (state_39288[(7)]);
var state_39288__$1 = state_39288;
var statearr_39302_39328 = state_39288__$1;
(statearr_39302_39328[(2)] = inst_39265);

(statearr_39302_39328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (10))){
var inst_39284 = (state_39288[(2)]);
var state_39288__$1 = state_39288;
var statearr_39303_39329 = state_39288__$1;
(statearr_39303_39329[(2)] = inst_39284);

(statearr_39303_39329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (8))){
var inst_39265 = (state_39288[(7)]);
var inst_39275 = cljs.core.next.call(null,inst_39265);
var inst_39265__$1 = inst_39275;
var state_39288__$1 = (function (){var statearr_39304 = state_39288;
(statearr_39304[(7)] = inst_39265__$1);

return statearr_39304;
})();
var statearr_39305_39330 = state_39288__$1;
(statearr_39305_39330[(2)] = null);

(statearr_39305_39330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto__))
;
return ((function (switch__38318__auto__,c__38430__auto__){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_39309 = [null,null,null,null,null,null,null,null];
(statearr_39309[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_39309[(1)] = (1));

return statearr_39309;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_39288){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_39288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e39310){if((e39310 instanceof Object)){
var ex__38322__auto__ = e39310;
var statearr_39311_39331 = state_39288;
(statearr_39311_39331[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39332 = state_39288;
state_39288 = G__39332;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_39288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_39288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__))
})();
var state__38432__auto__ = (function (){var statearr_39312 = f__38431__auto__.call(null);
(statearr_39312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_39312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__))
);

return c__38430__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26639__auto__ = (((_ == null))?null:_);
var m__26640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,_);
} else {
var m__26640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26639__auto__ = (((m == null))?null:m);
var m__26640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26639__auto__ = (((m == null))?null:m);
var m__26640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,m,ch);
} else {
var m__26640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26639__auto__ = (((m == null))?null:m);
var m__26640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,m);
} else {
var m__26640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39558 = (function (mult,ch,cs,meta39559){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta39559 = meta39559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async39558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39560,meta39559__$1){
var self__ = this;
var _39560__$1 = this;
return (new cljs.core.async.t_cljs$core$async39558(self__.mult,self__.ch,self__.cs,meta39559__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async39558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39560){
var self__ = this;
var _39560__$1 = this;
return self__.meta39559;
});})(cs))
;


cljs.core.async.t_cljs$core$async39558.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async39558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async39558.prototype.cljs$core$async$Mult$ = true;


cljs.core.async.t_cljs$core$async39558.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async39558.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async39558.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39558.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39559","meta39559",1043705742,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39558";

cljs.core.async.t_cljs$core$async39558.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"cljs.core.async/t_cljs$core$async39558");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39558 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39558(mult__$1,ch__$1,cs__$1,meta39559){
return (new cljs.core.async.t_cljs$core$async39558(mult__$1,ch__$1,cs__$1,meta39559));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39558(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38430__auto___39783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___39783,cs,m,dchan,dctr,done){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___39783,cs,m,dchan,dctr,done){
return (function (state_39695){
var state_val_39696 = (state_39695[(1)]);
if((state_val_39696 === (7))){
var inst_39691 = (state_39695[(2)]);
var state_39695__$1 = state_39695;
var statearr_39697_39784 = state_39695__$1;
(statearr_39697_39784[(2)] = inst_39691);

(statearr_39697_39784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (20))){
var inst_39594 = (state_39695[(7)]);
var inst_39606 = cljs.core.first.call(null,inst_39594);
var inst_39607 = cljs.core.nth.call(null,inst_39606,(0),null);
var inst_39608 = cljs.core.nth.call(null,inst_39606,(1),null);
var state_39695__$1 = (function (){var statearr_39698 = state_39695;
(statearr_39698[(8)] = inst_39607);

return statearr_39698;
})();
if(cljs.core.truth_(inst_39608)){
var statearr_39699_39785 = state_39695__$1;
(statearr_39699_39785[(1)] = (22));

} else {
var statearr_39700_39786 = state_39695__$1;
(statearr_39700_39786[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (27))){
var inst_39643 = (state_39695[(9)]);
var inst_39563 = (state_39695[(10)]);
var inst_39638 = (state_39695[(11)]);
var inst_39636 = (state_39695[(12)]);
var inst_39643__$1 = cljs.core._nth.call(null,inst_39636,inst_39638);
var inst_39644 = cljs.core.async.put_BANG_.call(null,inst_39643__$1,inst_39563,done);
var state_39695__$1 = (function (){var statearr_39701 = state_39695;
(statearr_39701[(9)] = inst_39643__$1);

return statearr_39701;
})();
if(cljs.core.truth_(inst_39644)){
var statearr_39702_39787 = state_39695__$1;
(statearr_39702_39787[(1)] = (30));

} else {
var statearr_39703_39788 = state_39695__$1;
(statearr_39703_39788[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (1))){
var state_39695__$1 = state_39695;
var statearr_39704_39789 = state_39695__$1;
(statearr_39704_39789[(2)] = null);

(statearr_39704_39789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (24))){
var inst_39594 = (state_39695[(7)]);
var inst_39613 = (state_39695[(2)]);
var inst_39614 = cljs.core.next.call(null,inst_39594);
var inst_39572 = inst_39614;
var inst_39573 = null;
var inst_39574 = (0);
var inst_39575 = (0);
var state_39695__$1 = (function (){var statearr_39705 = state_39695;
(statearr_39705[(13)] = inst_39572);

(statearr_39705[(14)] = inst_39573);

(statearr_39705[(15)] = inst_39575);

(statearr_39705[(16)] = inst_39574);

(statearr_39705[(17)] = inst_39613);

return statearr_39705;
})();
var statearr_39706_39790 = state_39695__$1;
(statearr_39706_39790[(2)] = null);

(statearr_39706_39790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (39))){
var state_39695__$1 = state_39695;
var statearr_39710_39791 = state_39695__$1;
(statearr_39710_39791[(2)] = null);

(statearr_39710_39791[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (4))){
var inst_39563 = (state_39695[(10)]);
var inst_39563__$1 = (state_39695[(2)]);
var inst_39564 = (inst_39563__$1 == null);
var state_39695__$1 = (function (){var statearr_39711 = state_39695;
(statearr_39711[(10)] = inst_39563__$1);

return statearr_39711;
})();
if(cljs.core.truth_(inst_39564)){
var statearr_39712_39792 = state_39695__$1;
(statearr_39712_39792[(1)] = (5));

} else {
var statearr_39713_39793 = state_39695__$1;
(statearr_39713_39793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (15))){
var inst_39572 = (state_39695[(13)]);
var inst_39573 = (state_39695[(14)]);
var inst_39575 = (state_39695[(15)]);
var inst_39574 = (state_39695[(16)]);
var inst_39590 = (state_39695[(2)]);
var inst_39591 = (inst_39575 + (1));
var tmp39707 = inst_39572;
var tmp39708 = inst_39573;
var tmp39709 = inst_39574;
var inst_39572__$1 = tmp39707;
var inst_39573__$1 = tmp39708;
var inst_39574__$1 = tmp39709;
var inst_39575__$1 = inst_39591;
var state_39695__$1 = (function (){var statearr_39714 = state_39695;
(statearr_39714[(13)] = inst_39572__$1);

(statearr_39714[(14)] = inst_39573__$1);

(statearr_39714[(15)] = inst_39575__$1);

(statearr_39714[(16)] = inst_39574__$1);

(statearr_39714[(18)] = inst_39590);

return statearr_39714;
})();
var statearr_39715_39794 = state_39695__$1;
(statearr_39715_39794[(2)] = null);

(statearr_39715_39794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (21))){
var inst_39617 = (state_39695[(2)]);
var state_39695__$1 = state_39695;
var statearr_39719_39795 = state_39695__$1;
(statearr_39719_39795[(2)] = inst_39617);

(statearr_39719_39795[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (31))){
var inst_39643 = (state_39695[(9)]);
var inst_39647 = done.call(null,null);
var inst_39648 = cljs.core.async.untap_STAR_.call(null,m,inst_39643);
var state_39695__$1 = (function (){var statearr_39720 = state_39695;
(statearr_39720[(19)] = inst_39647);

return statearr_39720;
})();
var statearr_39721_39796 = state_39695__$1;
(statearr_39721_39796[(2)] = inst_39648);

(statearr_39721_39796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (32))){
var inst_39637 = (state_39695[(20)]);
var inst_39638 = (state_39695[(11)]);
var inst_39636 = (state_39695[(12)]);
var inst_39635 = (state_39695[(21)]);
var inst_39650 = (state_39695[(2)]);
var inst_39651 = (inst_39638 + (1));
var tmp39716 = inst_39637;
var tmp39717 = inst_39636;
var tmp39718 = inst_39635;
var inst_39635__$1 = tmp39718;
var inst_39636__$1 = tmp39717;
var inst_39637__$1 = tmp39716;
var inst_39638__$1 = inst_39651;
var state_39695__$1 = (function (){var statearr_39722 = state_39695;
(statearr_39722[(20)] = inst_39637__$1);

(statearr_39722[(22)] = inst_39650);

(statearr_39722[(11)] = inst_39638__$1);

(statearr_39722[(12)] = inst_39636__$1);

(statearr_39722[(21)] = inst_39635__$1);

return statearr_39722;
})();
var statearr_39723_39797 = state_39695__$1;
(statearr_39723_39797[(2)] = null);

(statearr_39723_39797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (40))){
var inst_39663 = (state_39695[(23)]);
var inst_39667 = done.call(null,null);
var inst_39668 = cljs.core.async.untap_STAR_.call(null,m,inst_39663);
var state_39695__$1 = (function (){var statearr_39724 = state_39695;
(statearr_39724[(24)] = inst_39667);

return statearr_39724;
})();
var statearr_39725_39798 = state_39695__$1;
(statearr_39725_39798[(2)] = inst_39668);

(statearr_39725_39798[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (33))){
var inst_39654 = (state_39695[(25)]);
var inst_39656 = cljs.core.chunked_seq_QMARK_.call(null,inst_39654);
var state_39695__$1 = state_39695;
if(inst_39656){
var statearr_39726_39799 = state_39695__$1;
(statearr_39726_39799[(1)] = (36));

} else {
var statearr_39727_39800 = state_39695__$1;
(statearr_39727_39800[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (13))){
var inst_39584 = (state_39695[(26)]);
var inst_39587 = cljs.core.async.close_BANG_.call(null,inst_39584);
var state_39695__$1 = state_39695;
var statearr_39728_39801 = state_39695__$1;
(statearr_39728_39801[(2)] = inst_39587);

(statearr_39728_39801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (22))){
var inst_39607 = (state_39695[(8)]);
var inst_39610 = cljs.core.async.close_BANG_.call(null,inst_39607);
var state_39695__$1 = state_39695;
var statearr_39729_39802 = state_39695__$1;
(statearr_39729_39802[(2)] = inst_39610);

(statearr_39729_39802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (36))){
var inst_39654 = (state_39695[(25)]);
var inst_39658 = cljs.core.chunk_first.call(null,inst_39654);
var inst_39659 = cljs.core.chunk_rest.call(null,inst_39654);
var inst_39660 = cljs.core.count.call(null,inst_39658);
var inst_39635 = inst_39659;
var inst_39636 = inst_39658;
var inst_39637 = inst_39660;
var inst_39638 = (0);
var state_39695__$1 = (function (){var statearr_39730 = state_39695;
(statearr_39730[(20)] = inst_39637);

(statearr_39730[(11)] = inst_39638);

(statearr_39730[(12)] = inst_39636);

(statearr_39730[(21)] = inst_39635);

return statearr_39730;
})();
var statearr_39731_39803 = state_39695__$1;
(statearr_39731_39803[(2)] = null);

(statearr_39731_39803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (41))){
var inst_39654 = (state_39695[(25)]);
var inst_39670 = (state_39695[(2)]);
var inst_39671 = cljs.core.next.call(null,inst_39654);
var inst_39635 = inst_39671;
var inst_39636 = null;
var inst_39637 = (0);
var inst_39638 = (0);
var state_39695__$1 = (function (){var statearr_39732 = state_39695;
(statearr_39732[(20)] = inst_39637);

(statearr_39732[(27)] = inst_39670);

(statearr_39732[(11)] = inst_39638);

(statearr_39732[(12)] = inst_39636);

(statearr_39732[(21)] = inst_39635);

return statearr_39732;
})();
var statearr_39733_39804 = state_39695__$1;
(statearr_39733_39804[(2)] = null);

(statearr_39733_39804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (43))){
var state_39695__$1 = state_39695;
var statearr_39734_39805 = state_39695__$1;
(statearr_39734_39805[(2)] = null);

(statearr_39734_39805[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (29))){
var inst_39679 = (state_39695[(2)]);
var state_39695__$1 = state_39695;
var statearr_39735_39806 = state_39695__$1;
(statearr_39735_39806[(2)] = inst_39679);

(statearr_39735_39806[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (44))){
var inst_39688 = (state_39695[(2)]);
var state_39695__$1 = (function (){var statearr_39736 = state_39695;
(statearr_39736[(28)] = inst_39688);

return statearr_39736;
})();
var statearr_39737_39807 = state_39695__$1;
(statearr_39737_39807[(2)] = null);

(statearr_39737_39807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (6))){
var inst_39627 = (state_39695[(29)]);
var inst_39626 = cljs.core.deref.call(null,cs);
var inst_39627__$1 = cljs.core.keys.call(null,inst_39626);
var inst_39628 = cljs.core.count.call(null,inst_39627__$1);
var inst_39629 = cljs.core.reset_BANG_.call(null,dctr,inst_39628);
var inst_39634 = cljs.core.seq.call(null,inst_39627__$1);
var inst_39635 = inst_39634;
var inst_39636 = null;
var inst_39637 = (0);
var inst_39638 = (0);
var state_39695__$1 = (function (){var statearr_39738 = state_39695;
(statearr_39738[(20)] = inst_39637);

(statearr_39738[(29)] = inst_39627__$1);

(statearr_39738[(11)] = inst_39638);

(statearr_39738[(12)] = inst_39636);

(statearr_39738[(30)] = inst_39629);

(statearr_39738[(21)] = inst_39635);

return statearr_39738;
})();
var statearr_39739_39808 = state_39695__$1;
(statearr_39739_39808[(2)] = null);

(statearr_39739_39808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (28))){
var inst_39654 = (state_39695[(25)]);
var inst_39635 = (state_39695[(21)]);
var inst_39654__$1 = cljs.core.seq.call(null,inst_39635);
var state_39695__$1 = (function (){var statearr_39740 = state_39695;
(statearr_39740[(25)] = inst_39654__$1);

return statearr_39740;
})();
if(inst_39654__$1){
var statearr_39741_39809 = state_39695__$1;
(statearr_39741_39809[(1)] = (33));

} else {
var statearr_39742_39810 = state_39695__$1;
(statearr_39742_39810[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (25))){
var inst_39637 = (state_39695[(20)]);
var inst_39638 = (state_39695[(11)]);
var inst_39640 = (inst_39638 < inst_39637);
var inst_39641 = inst_39640;
var state_39695__$1 = state_39695;
if(cljs.core.truth_(inst_39641)){
var statearr_39743_39811 = state_39695__$1;
(statearr_39743_39811[(1)] = (27));

} else {
var statearr_39744_39812 = state_39695__$1;
(statearr_39744_39812[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (34))){
var state_39695__$1 = state_39695;
var statearr_39745_39813 = state_39695__$1;
(statearr_39745_39813[(2)] = null);

(statearr_39745_39813[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (17))){
var state_39695__$1 = state_39695;
var statearr_39746_39814 = state_39695__$1;
(statearr_39746_39814[(2)] = null);

(statearr_39746_39814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (3))){
var inst_39693 = (state_39695[(2)]);
var state_39695__$1 = state_39695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39695__$1,inst_39693);
} else {
if((state_val_39696 === (12))){
var inst_39622 = (state_39695[(2)]);
var state_39695__$1 = state_39695;
var statearr_39747_39815 = state_39695__$1;
(statearr_39747_39815[(2)] = inst_39622);

(statearr_39747_39815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (2))){
var state_39695__$1 = state_39695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39695__$1,(4),ch);
} else {
if((state_val_39696 === (23))){
var state_39695__$1 = state_39695;
var statearr_39748_39816 = state_39695__$1;
(statearr_39748_39816[(2)] = null);

(statearr_39748_39816[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (35))){
var inst_39677 = (state_39695[(2)]);
var state_39695__$1 = state_39695;
var statearr_39749_39817 = state_39695__$1;
(statearr_39749_39817[(2)] = inst_39677);

(statearr_39749_39817[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (19))){
var inst_39594 = (state_39695[(7)]);
var inst_39598 = cljs.core.chunk_first.call(null,inst_39594);
var inst_39599 = cljs.core.chunk_rest.call(null,inst_39594);
var inst_39600 = cljs.core.count.call(null,inst_39598);
var inst_39572 = inst_39599;
var inst_39573 = inst_39598;
var inst_39574 = inst_39600;
var inst_39575 = (0);
var state_39695__$1 = (function (){var statearr_39750 = state_39695;
(statearr_39750[(13)] = inst_39572);

(statearr_39750[(14)] = inst_39573);

(statearr_39750[(15)] = inst_39575);

(statearr_39750[(16)] = inst_39574);

return statearr_39750;
})();
var statearr_39751_39818 = state_39695__$1;
(statearr_39751_39818[(2)] = null);

(statearr_39751_39818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (11))){
var inst_39572 = (state_39695[(13)]);
var inst_39594 = (state_39695[(7)]);
var inst_39594__$1 = cljs.core.seq.call(null,inst_39572);
var state_39695__$1 = (function (){var statearr_39752 = state_39695;
(statearr_39752[(7)] = inst_39594__$1);

return statearr_39752;
})();
if(inst_39594__$1){
var statearr_39753_39819 = state_39695__$1;
(statearr_39753_39819[(1)] = (16));

} else {
var statearr_39754_39820 = state_39695__$1;
(statearr_39754_39820[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (9))){
var inst_39624 = (state_39695[(2)]);
var state_39695__$1 = state_39695;
var statearr_39755_39821 = state_39695__$1;
(statearr_39755_39821[(2)] = inst_39624);

(statearr_39755_39821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (5))){
var inst_39570 = cljs.core.deref.call(null,cs);
var inst_39571 = cljs.core.seq.call(null,inst_39570);
var inst_39572 = inst_39571;
var inst_39573 = null;
var inst_39574 = (0);
var inst_39575 = (0);
var state_39695__$1 = (function (){var statearr_39756 = state_39695;
(statearr_39756[(13)] = inst_39572);

(statearr_39756[(14)] = inst_39573);

(statearr_39756[(15)] = inst_39575);

(statearr_39756[(16)] = inst_39574);

return statearr_39756;
})();
var statearr_39757_39822 = state_39695__$1;
(statearr_39757_39822[(2)] = null);

(statearr_39757_39822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (14))){
var state_39695__$1 = state_39695;
var statearr_39758_39823 = state_39695__$1;
(statearr_39758_39823[(2)] = null);

(statearr_39758_39823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (45))){
var inst_39685 = (state_39695[(2)]);
var state_39695__$1 = state_39695;
var statearr_39759_39824 = state_39695__$1;
(statearr_39759_39824[(2)] = inst_39685);

(statearr_39759_39824[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (26))){
var inst_39627 = (state_39695[(29)]);
var inst_39681 = (state_39695[(2)]);
var inst_39682 = cljs.core.seq.call(null,inst_39627);
var state_39695__$1 = (function (){var statearr_39760 = state_39695;
(statearr_39760[(31)] = inst_39681);

return statearr_39760;
})();
if(inst_39682){
var statearr_39761_39825 = state_39695__$1;
(statearr_39761_39825[(1)] = (42));

} else {
var statearr_39762_39826 = state_39695__$1;
(statearr_39762_39826[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (16))){
var inst_39594 = (state_39695[(7)]);
var inst_39596 = cljs.core.chunked_seq_QMARK_.call(null,inst_39594);
var state_39695__$1 = state_39695;
if(inst_39596){
var statearr_39763_39827 = state_39695__$1;
(statearr_39763_39827[(1)] = (19));

} else {
var statearr_39764_39828 = state_39695__$1;
(statearr_39764_39828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (38))){
var inst_39674 = (state_39695[(2)]);
var state_39695__$1 = state_39695;
var statearr_39765_39829 = state_39695__$1;
(statearr_39765_39829[(2)] = inst_39674);

(statearr_39765_39829[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (30))){
var state_39695__$1 = state_39695;
var statearr_39766_39830 = state_39695__$1;
(statearr_39766_39830[(2)] = null);

(statearr_39766_39830[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (10))){
var inst_39573 = (state_39695[(14)]);
var inst_39575 = (state_39695[(15)]);
var inst_39583 = cljs.core._nth.call(null,inst_39573,inst_39575);
var inst_39584 = cljs.core.nth.call(null,inst_39583,(0),null);
var inst_39585 = cljs.core.nth.call(null,inst_39583,(1),null);
var state_39695__$1 = (function (){var statearr_39767 = state_39695;
(statearr_39767[(26)] = inst_39584);

return statearr_39767;
})();
if(cljs.core.truth_(inst_39585)){
var statearr_39768_39831 = state_39695__$1;
(statearr_39768_39831[(1)] = (13));

} else {
var statearr_39769_39832 = state_39695__$1;
(statearr_39769_39832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (18))){
var inst_39620 = (state_39695[(2)]);
var state_39695__$1 = state_39695;
var statearr_39770_39833 = state_39695__$1;
(statearr_39770_39833[(2)] = inst_39620);

(statearr_39770_39833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (42))){
var state_39695__$1 = state_39695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39695__$1,(45),dchan);
} else {
if((state_val_39696 === (37))){
var inst_39563 = (state_39695[(10)]);
var inst_39654 = (state_39695[(25)]);
var inst_39663 = (state_39695[(23)]);
var inst_39663__$1 = cljs.core.first.call(null,inst_39654);
var inst_39664 = cljs.core.async.put_BANG_.call(null,inst_39663__$1,inst_39563,done);
var state_39695__$1 = (function (){var statearr_39771 = state_39695;
(statearr_39771[(23)] = inst_39663__$1);

return statearr_39771;
})();
if(cljs.core.truth_(inst_39664)){
var statearr_39772_39834 = state_39695__$1;
(statearr_39772_39834[(1)] = (39));

} else {
var statearr_39773_39835 = state_39695__$1;
(statearr_39773_39835[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (8))){
var inst_39575 = (state_39695[(15)]);
var inst_39574 = (state_39695[(16)]);
var inst_39577 = (inst_39575 < inst_39574);
var inst_39578 = inst_39577;
var state_39695__$1 = state_39695;
if(cljs.core.truth_(inst_39578)){
var statearr_39774_39836 = state_39695__$1;
(statearr_39774_39836[(1)] = (10));

} else {
var statearr_39775_39837 = state_39695__$1;
(statearr_39775_39837[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___39783,cs,m,dchan,dctr,done))
;
return ((function (switch__38318__auto__,c__38430__auto___39783,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38319__auto__ = null;
var cljs$core$async$mult_$_state_machine__38319__auto____0 = (function (){
var statearr_39779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39779[(0)] = cljs$core$async$mult_$_state_machine__38319__auto__);

(statearr_39779[(1)] = (1));

return statearr_39779;
});
var cljs$core$async$mult_$_state_machine__38319__auto____1 = (function (state_39695){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_39695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e39780){if((e39780 instanceof Object)){
var ex__38322__auto__ = e39780;
var statearr_39781_39838 = state_39695;
(statearr_39781_39838[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39839 = state_39695;
state_39695 = G__39839;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38319__auto__ = function(state_39695){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38319__auto____1.call(this,state_39695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38319__auto____0;
cljs$core$async$mult_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38319__auto____1;
return cljs$core$async$mult_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___39783,cs,m,dchan,dctr,done))
})();
var state__38432__auto__ = (function (){var statearr_39782 = f__38431__auto__.call(null);
(statearr_39782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___39783);

return statearr_39782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___39783,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args39840 = [];
var len__27051__auto___39843 = arguments.length;
var i__27052__auto___39844 = (0);
while(true){
if((i__27052__auto___39844 < len__27051__auto___39843)){
args39840.push((arguments[i__27052__auto___39844]));

var G__39845 = (i__27052__auto___39844 + (1));
i__27052__auto___39844 = G__39845;
continue;
} else {
}
break;
}

var G__39842 = args39840.length;
switch (G__39842) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39840.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26639__auto__ = (((m == null))?null:m);
var m__26640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,m,ch);
} else {
var m__26640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26639__auto__ = (((m == null))?null:m);
var m__26640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,m,ch);
} else {
var m__26640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26639__auto__ = (((m == null))?null:m);
var m__26640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,m);
} else {
var m__26640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26639__auto__ = (((m == null))?null:m);
var m__26640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,m,state_map);
} else {
var m__26640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26639__auto__ = (((m == null))?null:m);
var m__26640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,m,mode);
} else {
var m__26640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27058__auto__ = [];
var len__27051__auto___39857 = arguments.length;
var i__27052__auto___39858 = (0);
while(true){
if((i__27052__auto___39858 < len__27051__auto___39857)){
args__27058__auto__.push((arguments[i__27052__auto___39858]));

var G__39859 = (i__27052__auto___39858 + (1));
i__27052__auto___39858 = G__39859;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((3) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27059__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39851){
var map__39852 = p__39851;
var map__39852__$1 = ((((!((map__39852 == null)))?((((map__39852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39852):map__39852);
var opts = map__39852__$1;
var statearr_39854_39860 = state;
(statearr_39854_39860[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__39852,map__39852__$1,opts){
return (function (val){
var statearr_39855_39861 = state;
(statearr_39855_39861[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39852,map__39852__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_39856_39862 = state;
(statearr_39856_39862[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39847){
var G__39848 = cljs.core.first.call(null,seq39847);
var seq39847__$1 = cljs.core.next.call(null,seq39847);
var G__39849 = cljs.core.first.call(null,seq39847__$1);
var seq39847__$2 = cljs.core.next.call(null,seq39847__$1);
var G__39850 = cljs.core.first.call(null,seq39847__$2);
var seq39847__$3 = cljs.core.next.call(null,seq39847__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39848,G__39849,G__39850,seq39847__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40028 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40029){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40029 = meta40029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40030,meta40029__$1){
var self__ = this;
var _40030__$1 = this;
return (new cljs.core.async.t_cljs$core$async40028(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40029__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40030){
var self__ = this;
var _40030__$1 = this;
return self__.meta40029;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$Mix$ = true;


cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async40028.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40028.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40029","meta40029",-379468861,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40028";

cljs.core.async.t_cljs$core$async40028.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"cljs.core.async/t_cljs$core$async40028");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40028 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40028(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40029){
return (new cljs.core.async.t_cljs$core$async40028(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40029));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40028(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38430__auto___40193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___40193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___40193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40130){
var state_val_40131 = (state_40130[(1)]);
if((state_val_40131 === (7))){
var inst_40046 = (state_40130[(2)]);
var state_40130__$1 = state_40130;
var statearr_40132_40194 = state_40130__$1;
(statearr_40132_40194[(2)] = inst_40046);

(statearr_40132_40194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (20))){
var inst_40058 = (state_40130[(7)]);
var state_40130__$1 = state_40130;
var statearr_40133_40195 = state_40130__$1;
(statearr_40133_40195[(2)] = inst_40058);

(statearr_40133_40195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (27))){
var state_40130__$1 = state_40130;
var statearr_40134_40196 = state_40130__$1;
(statearr_40134_40196[(2)] = null);

(statearr_40134_40196[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (1))){
var inst_40034 = (state_40130[(8)]);
var inst_40034__$1 = calc_state.call(null);
var inst_40036 = (inst_40034__$1 == null);
var inst_40037 = cljs.core.not.call(null,inst_40036);
var state_40130__$1 = (function (){var statearr_40135 = state_40130;
(statearr_40135[(8)] = inst_40034__$1);

return statearr_40135;
})();
if(inst_40037){
var statearr_40136_40197 = state_40130__$1;
(statearr_40136_40197[(1)] = (2));

} else {
var statearr_40137_40198 = state_40130__$1;
(statearr_40137_40198[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (24))){
var inst_40090 = (state_40130[(9)]);
var inst_40104 = (state_40130[(10)]);
var inst_40081 = (state_40130[(11)]);
var inst_40104__$1 = inst_40081.call(null,inst_40090);
var state_40130__$1 = (function (){var statearr_40138 = state_40130;
(statearr_40138[(10)] = inst_40104__$1);

return statearr_40138;
})();
if(cljs.core.truth_(inst_40104__$1)){
var statearr_40139_40199 = state_40130__$1;
(statearr_40139_40199[(1)] = (29));

} else {
var statearr_40140_40200 = state_40130__$1;
(statearr_40140_40200[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (4))){
var inst_40049 = (state_40130[(2)]);
var state_40130__$1 = state_40130;
if(cljs.core.truth_(inst_40049)){
var statearr_40141_40201 = state_40130__$1;
(statearr_40141_40201[(1)] = (8));

} else {
var statearr_40142_40202 = state_40130__$1;
(statearr_40142_40202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (15))){
var inst_40075 = (state_40130[(2)]);
var state_40130__$1 = state_40130;
if(cljs.core.truth_(inst_40075)){
var statearr_40143_40203 = state_40130__$1;
(statearr_40143_40203[(1)] = (19));

} else {
var statearr_40144_40204 = state_40130__$1;
(statearr_40144_40204[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (21))){
var inst_40080 = (state_40130[(12)]);
var inst_40080__$1 = (state_40130[(2)]);
var inst_40081 = cljs.core.get.call(null,inst_40080__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40082 = cljs.core.get.call(null,inst_40080__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40083 = cljs.core.get.call(null,inst_40080__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40130__$1 = (function (){var statearr_40145 = state_40130;
(statearr_40145[(11)] = inst_40081);

(statearr_40145[(13)] = inst_40082);

(statearr_40145[(12)] = inst_40080__$1);

return statearr_40145;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40130__$1,(22),inst_40083);
} else {
if((state_val_40131 === (31))){
var inst_40112 = (state_40130[(2)]);
var state_40130__$1 = state_40130;
if(cljs.core.truth_(inst_40112)){
var statearr_40146_40205 = state_40130__$1;
(statearr_40146_40205[(1)] = (32));

} else {
var statearr_40147_40206 = state_40130__$1;
(statearr_40147_40206[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (32))){
var inst_40089 = (state_40130[(14)]);
var state_40130__$1 = state_40130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40130__$1,(35),out,inst_40089);
} else {
if((state_val_40131 === (33))){
var inst_40080 = (state_40130[(12)]);
var inst_40058 = inst_40080;
var state_40130__$1 = (function (){var statearr_40148 = state_40130;
(statearr_40148[(7)] = inst_40058);

return statearr_40148;
})();
var statearr_40149_40207 = state_40130__$1;
(statearr_40149_40207[(2)] = null);

(statearr_40149_40207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (13))){
var inst_40058 = (state_40130[(7)]);
var inst_40065 = inst_40058.cljs$lang$protocol_mask$partition0$;
var inst_40066 = (inst_40065 & (64));
var inst_40067 = inst_40058.cljs$core$ISeq$;
var inst_40068 = (inst_40066) || (inst_40067);
var state_40130__$1 = state_40130;
if(cljs.core.truth_(inst_40068)){
var statearr_40150_40208 = state_40130__$1;
(statearr_40150_40208[(1)] = (16));

} else {
var statearr_40151_40209 = state_40130__$1;
(statearr_40151_40209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (22))){
var inst_40090 = (state_40130[(9)]);
var inst_40089 = (state_40130[(14)]);
var inst_40088 = (state_40130[(2)]);
var inst_40089__$1 = cljs.core.nth.call(null,inst_40088,(0),null);
var inst_40090__$1 = cljs.core.nth.call(null,inst_40088,(1),null);
var inst_40091 = (inst_40089__$1 == null);
var inst_40092 = cljs.core._EQ_.call(null,inst_40090__$1,change);
var inst_40093 = (inst_40091) || (inst_40092);
var state_40130__$1 = (function (){var statearr_40152 = state_40130;
(statearr_40152[(9)] = inst_40090__$1);

(statearr_40152[(14)] = inst_40089__$1);

return statearr_40152;
})();
if(cljs.core.truth_(inst_40093)){
var statearr_40153_40210 = state_40130__$1;
(statearr_40153_40210[(1)] = (23));

} else {
var statearr_40154_40211 = state_40130__$1;
(statearr_40154_40211[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (36))){
var inst_40080 = (state_40130[(12)]);
var inst_40058 = inst_40080;
var state_40130__$1 = (function (){var statearr_40155 = state_40130;
(statearr_40155[(7)] = inst_40058);

return statearr_40155;
})();
var statearr_40156_40212 = state_40130__$1;
(statearr_40156_40212[(2)] = null);

(statearr_40156_40212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (29))){
var inst_40104 = (state_40130[(10)]);
var state_40130__$1 = state_40130;
var statearr_40157_40213 = state_40130__$1;
(statearr_40157_40213[(2)] = inst_40104);

(statearr_40157_40213[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (6))){
var state_40130__$1 = state_40130;
var statearr_40158_40214 = state_40130__$1;
(statearr_40158_40214[(2)] = false);

(statearr_40158_40214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (28))){
var inst_40100 = (state_40130[(2)]);
var inst_40101 = calc_state.call(null);
var inst_40058 = inst_40101;
var state_40130__$1 = (function (){var statearr_40159 = state_40130;
(statearr_40159[(15)] = inst_40100);

(statearr_40159[(7)] = inst_40058);

return statearr_40159;
})();
var statearr_40160_40215 = state_40130__$1;
(statearr_40160_40215[(2)] = null);

(statearr_40160_40215[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (25))){
var inst_40126 = (state_40130[(2)]);
var state_40130__$1 = state_40130;
var statearr_40161_40216 = state_40130__$1;
(statearr_40161_40216[(2)] = inst_40126);

(statearr_40161_40216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (34))){
var inst_40124 = (state_40130[(2)]);
var state_40130__$1 = state_40130;
var statearr_40162_40217 = state_40130__$1;
(statearr_40162_40217[(2)] = inst_40124);

(statearr_40162_40217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (17))){
var state_40130__$1 = state_40130;
var statearr_40163_40218 = state_40130__$1;
(statearr_40163_40218[(2)] = false);

(statearr_40163_40218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (3))){
var state_40130__$1 = state_40130;
var statearr_40164_40219 = state_40130__$1;
(statearr_40164_40219[(2)] = false);

(statearr_40164_40219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (12))){
var inst_40128 = (state_40130[(2)]);
var state_40130__$1 = state_40130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40130__$1,inst_40128);
} else {
if((state_val_40131 === (2))){
var inst_40034 = (state_40130[(8)]);
var inst_40039 = inst_40034.cljs$lang$protocol_mask$partition0$;
var inst_40040 = (inst_40039 & (64));
var inst_40041 = inst_40034.cljs$core$ISeq$;
var inst_40042 = (inst_40040) || (inst_40041);
var state_40130__$1 = state_40130;
if(cljs.core.truth_(inst_40042)){
var statearr_40165_40220 = state_40130__$1;
(statearr_40165_40220[(1)] = (5));

} else {
var statearr_40166_40221 = state_40130__$1;
(statearr_40166_40221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (23))){
var inst_40089 = (state_40130[(14)]);
var inst_40095 = (inst_40089 == null);
var state_40130__$1 = state_40130;
if(cljs.core.truth_(inst_40095)){
var statearr_40167_40222 = state_40130__$1;
(statearr_40167_40222[(1)] = (26));

} else {
var statearr_40168_40223 = state_40130__$1;
(statearr_40168_40223[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (35))){
var inst_40115 = (state_40130[(2)]);
var state_40130__$1 = state_40130;
if(cljs.core.truth_(inst_40115)){
var statearr_40169_40224 = state_40130__$1;
(statearr_40169_40224[(1)] = (36));

} else {
var statearr_40170_40225 = state_40130__$1;
(statearr_40170_40225[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (19))){
var inst_40058 = (state_40130[(7)]);
var inst_40077 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40058);
var state_40130__$1 = state_40130;
var statearr_40171_40226 = state_40130__$1;
(statearr_40171_40226[(2)] = inst_40077);

(statearr_40171_40226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (11))){
var inst_40058 = (state_40130[(7)]);
var inst_40062 = (inst_40058 == null);
var inst_40063 = cljs.core.not.call(null,inst_40062);
var state_40130__$1 = state_40130;
if(inst_40063){
var statearr_40172_40227 = state_40130__$1;
(statearr_40172_40227[(1)] = (13));

} else {
var statearr_40173_40228 = state_40130__$1;
(statearr_40173_40228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (9))){
var inst_40034 = (state_40130[(8)]);
var state_40130__$1 = state_40130;
var statearr_40174_40229 = state_40130__$1;
(statearr_40174_40229[(2)] = inst_40034);

(statearr_40174_40229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (5))){
var state_40130__$1 = state_40130;
var statearr_40175_40230 = state_40130__$1;
(statearr_40175_40230[(2)] = true);

(statearr_40175_40230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (14))){
var state_40130__$1 = state_40130;
var statearr_40176_40231 = state_40130__$1;
(statearr_40176_40231[(2)] = false);

(statearr_40176_40231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (26))){
var inst_40090 = (state_40130[(9)]);
var inst_40097 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40090);
var state_40130__$1 = state_40130;
var statearr_40177_40232 = state_40130__$1;
(statearr_40177_40232[(2)] = inst_40097);

(statearr_40177_40232[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (16))){
var state_40130__$1 = state_40130;
var statearr_40178_40233 = state_40130__$1;
(statearr_40178_40233[(2)] = true);

(statearr_40178_40233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (38))){
var inst_40120 = (state_40130[(2)]);
var state_40130__$1 = state_40130;
var statearr_40179_40234 = state_40130__$1;
(statearr_40179_40234[(2)] = inst_40120);

(statearr_40179_40234[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (30))){
var inst_40090 = (state_40130[(9)]);
var inst_40081 = (state_40130[(11)]);
var inst_40082 = (state_40130[(13)]);
var inst_40107 = cljs.core.empty_QMARK_.call(null,inst_40081);
var inst_40108 = inst_40082.call(null,inst_40090);
var inst_40109 = cljs.core.not.call(null,inst_40108);
var inst_40110 = (inst_40107) && (inst_40109);
var state_40130__$1 = state_40130;
var statearr_40180_40235 = state_40130__$1;
(statearr_40180_40235[(2)] = inst_40110);

(statearr_40180_40235[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (10))){
var inst_40034 = (state_40130[(8)]);
var inst_40054 = (state_40130[(2)]);
var inst_40055 = cljs.core.get.call(null,inst_40054,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40056 = cljs.core.get.call(null,inst_40054,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40057 = cljs.core.get.call(null,inst_40054,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40058 = inst_40034;
var state_40130__$1 = (function (){var statearr_40181 = state_40130;
(statearr_40181[(7)] = inst_40058);

(statearr_40181[(16)] = inst_40055);

(statearr_40181[(17)] = inst_40056);

(statearr_40181[(18)] = inst_40057);

return statearr_40181;
})();
var statearr_40182_40236 = state_40130__$1;
(statearr_40182_40236[(2)] = null);

(statearr_40182_40236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (18))){
var inst_40072 = (state_40130[(2)]);
var state_40130__$1 = state_40130;
var statearr_40183_40237 = state_40130__$1;
(statearr_40183_40237[(2)] = inst_40072);

(statearr_40183_40237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (37))){
var state_40130__$1 = state_40130;
var statearr_40184_40238 = state_40130__$1;
(statearr_40184_40238[(2)] = null);

(statearr_40184_40238[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40131 === (8))){
var inst_40034 = (state_40130[(8)]);
var inst_40051 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40034);
var state_40130__$1 = state_40130;
var statearr_40185_40239 = state_40130__$1;
(statearr_40185_40239[(2)] = inst_40051);

(statearr_40185_40239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___40193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38318__auto__,c__38430__auto___40193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38319__auto__ = null;
var cljs$core$async$mix_$_state_machine__38319__auto____0 = (function (){
var statearr_40189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40189[(0)] = cljs$core$async$mix_$_state_machine__38319__auto__);

(statearr_40189[(1)] = (1));

return statearr_40189;
});
var cljs$core$async$mix_$_state_machine__38319__auto____1 = (function (state_40130){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_40130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e40190){if((e40190 instanceof Object)){
var ex__38322__auto__ = e40190;
var statearr_40191_40240 = state_40130;
(statearr_40191_40240[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40241 = state_40130;
state_40130 = G__40241;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38319__auto__ = function(state_40130){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38319__auto____1.call(this,state_40130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38319__auto____0;
cljs$core$async$mix_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38319__auto____1;
return cljs$core$async$mix_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___40193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38432__auto__ = (function (){var statearr_40192 = f__38431__auto__.call(null);
(statearr_40192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___40193);

return statearr_40192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___40193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26639__auto__ = (((p == null))?null:p);
var m__26640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26639__auto__ = (((p == null))?null:p);
var m__26640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,p,v,ch);
} else {
var m__26640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args40242 = [];
var len__27051__auto___40245 = arguments.length;
var i__27052__auto___40246 = (0);
while(true){
if((i__27052__auto___40246 < len__27051__auto___40245)){
args40242.push((arguments[i__27052__auto___40246]));

var G__40247 = (i__27052__auto___40246 + (1));
i__27052__auto___40246 = G__40247;
continue;
} else {
}
break;
}

var G__40244 = args40242.length;
switch (G__40244) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40242.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26639__auto__ = (((p == null))?null:p);
var m__26640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,p);
} else {
var m__26640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26639__auto__ = (((p == null))?null:p);
var m__26640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26639__auto__)]);
if(!((m__26640__auto__ == null))){
return m__26640__auto__.call(null,p,v);
} else {
var m__26640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26640__auto____$1 == null))){
return m__26640__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args40250 = [];
var len__27051__auto___40375 = arguments.length;
var i__27052__auto___40376 = (0);
while(true){
if((i__27052__auto___40376 < len__27051__auto___40375)){
args40250.push((arguments[i__27052__auto___40376]));

var G__40377 = (i__27052__auto___40376 + (1));
i__27052__auto___40376 = G__40377;
continue;
} else {
}
break;
}

var G__40252 = args40250.length;
switch (G__40252) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40250.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25976__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25976__auto__,mults){
return (function (p1__40249_SHARP_){
if(cljs.core.truth_(p1__40249_SHARP_.call(null,topic))){
return p1__40249_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40249_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25976__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40253 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40254){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40254 = meta40254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async40253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40255,meta40254__$1){
var self__ = this;
var _40255__$1 = this;
return (new cljs.core.async.t_cljs$core$async40253(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40254__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async40253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40255){
var self__ = this;
var _40255__$1 = this;
return self__.meta40254;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async40253.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async40253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async40253.prototype.cljs$core$async$Pub$ = true;


cljs.core.async.t_cljs$core$async40253.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async40253.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async40253.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async40253.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40253.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40254","meta40254",1823103512,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40253";

cljs.core.async.t_cljs$core$async40253.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"cljs.core.async/t_cljs$core$async40253");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40253 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40253(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40254){
return (new cljs.core.async.t_cljs$core$async40253(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40254));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40253(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38430__auto___40379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___40379,mults,ensure_mult,p){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___40379,mults,ensure_mult,p){
return (function (state_40327){
var state_val_40328 = (state_40327[(1)]);
if((state_val_40328 === (7))){
var inst_40323 = (state_40327[(2)]);
var state_40327__$1 = state_40327;
var statearr_40329_40380 = state_40327__$1;
(statearr_40329_40380[(2)] = inst_40323);

(statearr_40329_40380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (20))){
var state_40327__$1 = state_40327;
var statearr_40330_40381 = state_40327__$1;
(statearr_40330_40381[(2)] = null);

(statearr_40330_40381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (1))){
var state_40327__$1 = state_40327;
var statearr_40331_40382 = state_40327__$1;
(statearr_40331_40382[(2)] = null);

(statearr_40331_40382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (24))){
var inst_40306 = (state_40327[(7)]);
var inst_40315 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40306);
var state_40327__$1 = state_40327;
var statearr_40332_40383 = state_40327__$1;
(statearr_40332_40383[(2)] = inst_40315);

(statearr_40332_40383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (4))){
var inst_40258 = (state_40327[(8)]);
var inst_40258__$1 = (state_40327[(2)]);
var inst_40259 = (inst_40258__$1 == null);
var state_40327__$1 = (function (){var statearr_40333 = state_40327;
(statearr_40333[(8)] = inst_40258__$1);

return statearr_40333;
})();
if(cljs.core.truth_(inst_40259)){
var statearr_40334_40384 = state_40327__$1;
(statearr_40334_40384[(1)] = (5));

} else {
var statearr_40335_40385 = state_40327__$1;
(statearr_40335_40385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (15))){
var inst_40300 = (state_40327[(2)]);
var state_40327__$1 = state_40327;
var statearr_40336_40386 = state_40327__$1;
(statearr_40336_40386[(2)] = inst_40300);

(statearr_40336_40386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (21))){
var inst_40320 = (state_40327[(2)]);
var state_40327__$1 = (function (){var statearr_40337 = state_40327;
(statearr_40337[(9)] = inst_40320);

return statearr_40337;
})();
var statearr_40338_40387 = state_40327__$1;
(statearr_40338_40387[(2)] = null);

(statearr_40338_40387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (13))){
var inst_40282 = (state_40327[(10)]);
var inst_40284 = cljs.core.chunked_seq_QMARK_.call(null,inst_40282);
var state_40327__$1 = state_40327;
if(inst_40284){
var statearr_40339_40388 = state_40327__$1;
(statearr_40339_40388[(1)] = (16));

} else {
var statearr_40340_40389 = state_40327__$1;
(statearr_40340_40389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (22))){
var inst_40312 = (state_40327[(2)]);
var state_40327__$1 = state_40327;
if(cljs.core.truth_(inst_40312)){
var statearr_40341_40390 = state_40327__$1;
(statearr_40341_40390[(1)] = (23));

} else {
var statearr_40342_40391 = state_40327__$1;
(statearr_40342_40391[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (6))){
var inst_40258 = (state_40327[(8)]);
var inst_40308 = (state_40327[(11)]);
var inst_40306 = (state_40327[(7)]);
var inst_40306__$1 = topic_fn.call(null,inst_40258);
var inst_40307 = cljs.core.deref.call(null,mults);
var inst_40308__$1 = cljs.core.get.call(null,inst_40307,inst_40306__$1);
var state_40327__$1 = (function (){var statearr_40343 = state_40327;
(statearr_40343[(11)] = inst_40308__$1);

(statearr_40343[(7)] = inst_40306__$1);

return statearr_40343;
})();
if(cljs.core.truth_(inst_40308__$1)){
var statearr_40344_40392 = state_40327__$1;
(statearr_40344_40392[(1)] = (19));

} else {
var statearr_40345_40393 = state_40327__$1;
(statearr_40345_40393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (25))){
var inst_40317 = (state_40327[(2)]);
var state_40327__$1 = state_40327;
var statearr_40346_40394 = state_40327__$1;
(statearr_40346_40394[(2)] = inst_40317);

(statearr_40346_40394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (17))){
var inst_40282 = (state_40327[(10)]);
var inst_40291 = cljs.core.first.call(null,inst_40282);
var inst_40292 = cljs.core.async.muxch_STAR_.call(null,inst_40291);
var inst_40293 = cljs.core.async.close_BANG_.call(null,inst_40292);
var inst_40294 = cljs.core.next.call(null,inst_40282);
var inst_40268 = inst_40294;
var inst_40269 = null;
var inst_40270 = (0);
var inst_40271 = (0);
var state_40327__$1 = (function (){var statearr_40347 = state_40327;
(statearr_40347[(12)] = inst_40268);

(statearr_40347[(13)] = inst_40269);

(statearr_40347[(14)] = inst_40270);

(statearr_40347[(15)] = inst_40271);

(statearr_40347[(16)] = inst_40293);

return statearr_40347;
})();
var statearr_40348_40395 = state_40327__$1;
(statearr_40348_40395[(2)] = null);

(statearr_40348_40395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (3))){
var inst_40325 = (state_40327[(2)]);
var state_40327__$1 = state_40327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40327__$1,inst_40325);
} else {
if((state_val_40328 === (12))){
var inst_40302 = (state_40327[(2)]);
var state_40327__$1 = state_40327;
var statearr_40349_40396 = state_40327__$1;
(statearr_40349_40396[(2)] = inst_40302);

(statearr_40349_40396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (2))){
var state_40327__$1 = state_40327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40327__$1,(4),ch);
} else {
if((state_val_40328 === (23))){
var state_40327__$1 = state_40327;
var statearr_40350_40397 = state_40327__$1;
(statearr_40350_40397[(2)] = null);

(statearr_40350_40397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (19))){
var inst_40258 = (state_40327[(8)]);
var inst_40308 = (state_40327[(11)]);
var inst_40310 = cljs.core.async.muxch_STAR_.call(null,inst_40308);
var state_40327__$1 = state_40327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40327__$1,(22),inst_40310,inst_40258);
} else {
if((state_val_40328 === (11))){
var inst_40282 = (state_40327[(10)]);
var inst_40268 = (state_40327[(12)]);
var inst_40282__$1 = cljs.core.seq.call(null,inst_40268);
var state_40327__$1 = (function (){var statearr_40351 = state_40327;
(statearr_40351[(10)] = inst_40282__$1);

return statearr_40351;
})();
if(inst_40282__$1){
var statearr_40352_40398 = state_40327__$1;
(statearr_40352_40398[(1)] = (13));

} else {
var statearr_40353_40399 = state_40327__$1;
(statearr_40353_40399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (9))){
var inst_40304 = (state_40327[(2)]);
var state_40327__$1 = state_40327;
var statearr_40354_40400 = state_40327__$1;
(statearr_40354_40400[(2)] = inst_40304);

(statearr_40354_40400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (5))){
var inst_40265 = cljs.core.deref.call(null,mults);
var inst_40266 = cljs.core.vals.call(null,inst_40265);
var inst_40267 = cljs.core.seq.call(null,inst_40266);
var inst_40268 = inst_40267;
var inst_40269 = null;
var inst_40270 = (0);
var inst_40271 = (0);
var state_40327__$1 = (function (){var statearr_40355 = state_40327;
(statearr_40355[(12)] = inst_40268);

(statearr_40355[(13)] = inst_40269);

(statearr_40355[(14)] = inst_40270);

(statearr_40355[(15)] = inst_40271);

return statearr_40355;
})();
var statearr_40356_40401 = state_40327__$1;
(statearr_40356_40401[(2)] = null);

(statearr_40356_40401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (14))){
var state_40327__$1 = state_40327;
var statearr_40360_40402 = state_40327__$1;
(statearr_40360_40402[(2)] = null);

(statearr_40360_40402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (16))){
var inst_40282 = (state_40327[(10)]);
var inst_40286 = cljs.core.chunk_first.call(null,inst_40282);
var inst_40287 = cljs.core.chunk_rest.call(null,inst_40282);
var inst_40288 = cljs.core.count.call(null,inst_40286);
var inst_40268 = inst_40287;
var inst_40269 = inst_40286;
var inst_40270 = inst_40288;
var inst_40271 = (0);
var state_40327__$1 = (function (){var statearr_40361 = state_40327;
(statearr_40361[(12)] = inst_40268);

(statearr_40361[(13)] = inst_40269);

(statearr_40361[(14)] = inst_40270);

(statearr_40361[(15)] = inst_40271);

return statearr_40361;
})();
var statearr_40362_40403 = state_40327__$1;
(statearr_40362_40403[(2)] = null);

(statearr_40362_40403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (10))){
var inst_40268 = (state_40327[(12)]);
var inst_40269 = (state_40327[(13)]);
var inst_40270 = (state_40327[(14)]);
var inst_40271 = (state_40327[(15)]);
var inst_40276 = cljs.core._nth.call(null,inst_40269,inst_40271);
var inst_40277 = cljs.core.async.muxch_STAR_.call(null,inst_40276);
var inst_40278 = cljs.core.async.close_BANG_.call(null,inst_40277);
var inst_40279 = (inst_40271 + (1));
var tmp40357 = inst_40268;
var tmp40358 = inst_40269;
var tmp40359 = inst_40270;
var inst_40268__$1 = tmp40357;
var inst_40269__$1 = tmp40358;
var inst_40270__$1 = tmp40359;
var inst_40271__$1 = inst_40279;
var state_40327__$1 = (function (){var statearr_40363 = state_40327;
(statearr_40363[(12)] = inst_40268__$1);

(statearr_40363[(17)] = inst_40278);

(statearr_40363[(13)] = inst_40269__$1);

(statearr_40363[(14)] = inst_40270__$1);

(statearr_40363[(15)] = inst_40271__$1);

return statearr_40363;
})();
var statearr_40364_40404 = state_40327__$1;
(statearr_40364_40404[(2)] = null);

(statearr_40364_40404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (18))){
var inst_40297 = (state_40327[(2)]);
var state_40327__$1 = state_40327;
var statearr_40365_40405 = state_40327__$1;
(statearr_40365_40405[(2)] = inst_40297);

(statearr_40365_40405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40328 === (8))){
var inst_40270 = (state_40327[(14)]);
var inst_40271 = (state_40327[(15)]);
var inst_40273 = (inst_40271 < inst_40270);
var inst_40274 = inst_40273;
var state_40327__$1 = state_40327;
if(cljs.core.truth_(inst_40274)){
var statearr_40366_40406 = state_40327__$1;
(statearr_40366_40406[(1)] = (10));

} else {
var statearr_40367_40407 = state_40327__$1;
(statearr_40367_40407[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___40379,mults,ensure_mult,p))
;
return ((function (switch__38318__auto__,c__38430__auto___40379,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_40371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40371[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_40371[(1)] = (1));

return statearr_40371;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_40327){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_40327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e40372){if((e40372 instanceof Object)){
var ex__38322__auto__ = e40372;
var statearr_40373_40408 = state_40327;
(statearr_40373_40408[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40409 = state_40327;
state_40327 = G__40409;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_40327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_40327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___40379,mults,ensure_mult,p))
})();
var state__38432__auto__ = (function (){var statearr_40374 = f__38431__auto__.call(null);
(statearr_40374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___40379);

return statearr_40374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___40379,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args40410 = [];
var len__27051__auto___40413 = arguments.length;
var i__27052__auto___40414 = (0);
while(true){
if((i__27052__auto___40414 < len__27051__auto___40413)){
args40410.push((arguments[i__27052__auto___40414]));

var G__40415 = (i__27052__auto___40414 + (1));
i__27052__auto___40414 = G__40415;
continue;
} else {
}
break;
}

var G__40412 = args40410.length;
switch (G__40412) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40410.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args40417 = [];
var len__27051__auto___40420 = arguments.length;
var i__27052__auto___40421 = (0);
while(true){
if((i__27052__auto___40421 < len__27051__auto___40420)){
args40417.push((arguments[i__27052__auto___40421]));

var G__40422 = (i__27052__auto___40421 + (1));
i__27052__auto___40421 = G__40422;
continue;
} else {
}
break;
}

var G__40419 = args40417.length;
switch (G__40419) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40417.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args40424 = [];
var len__27051__auto___40495 = arguments.length;
var i__27052__auto___40496 = (0);
while(true){
if((i__27052__auto___40496 < len__27051__auto___40495)){
args40424.push((arguments[i__27052__auto___40496]));

var G__40497 = (i__27052__auto___40496 + (1));
i__27052__auto___40496 = G__40497;
continue;
} else {
}
break;
}

var G__40426 = args40424.length;
switch (G__40426) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40424.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38430__auto___40499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___40499,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___40499,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40465){
var state_val_40466 = (state_40465[(1)]);
if((state_val_40466 === (7))){
var state_40465__$1 = state_40465;
var statearr_40467_40500 = state_40465__$1;
(statearr_40467_40500[(2)] = null);

(statearr_40467_40500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (1))){
var state_40465__$1 = state_40465;
var statearr_40468_40501 = state_40465__$1;
(statearr_40468_40501[(2)] = null);

(statearr_40468_40501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (4))){
var inst_40429 = (state_40465[(7)]);
var inst_40431 = (inst_40429 < cnt);
var state_40465__$1 = state_40465;
if(cljs.core.truth_(inst_40431)){
var statearr_40469_40502 = state_40465__$1;
(statearr_40469_40502[(1)] = (6));

} else {
var statearr_40470_40503 = state_40465__$1;
(statearr_40470_40503[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (15))){
var inst_40461 = (state_40465[(2)]);
var state_40465__$1 = state_40465;
var statearr_40471_40504 = state_40465__$1;
(statearr_40471_40504[(2)] = inst_40461);

(statearr_40471_40504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (13))){
var inst_40454 = cljs.core.async.close_BANG_.call(null,out);
var state_40465__$1 = state_40465;
var statearr_40472_40505 = state_40465__$1;
(statearr_40472_40505[(2)] = inst_40454);

(statearr_40472_40505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (6))){
var state_40465__$1 = state_40465;
var statearr_40473_40506 = state_40465__$1;
(statearr_40473_40506[(2)] = null);

(statearr_40473_40506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (3))){
var inst_40463 = (state_40465[(2)]);
var state_40465__$1 = state_40465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40465__$1,inst_40463);
} else {
if((state_val_40466 === (12))){
var inst_40451 = (state_40465[(8)]);
var inst_40451__$1 = (state_40465[(2)]);
var inst_40452 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40451__$1);
var state_40465__$1 = (function (){var statearr_40474 = state_40465;
(statearr_40474[(8)] = inst_40451__$1);

return statearr_40474;
})();
if(cljs.core.truth_(inst_40452)){
var statearr_40475_40507 = state_40465__$1;
(statearr_40475_40507[(1)] = (13));

} else {
var statearr_40476_40508 = state_40465__$1;
(statearr_40476_40508[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (2))){
var inst_40428 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40429 = (0);
var state_40465__$1 = (function (){var statearr_40477 = state_40465;
(statearr_40477[(9)] = inst_40428);

(statearr_40477[(7)] = inst_40429);

return statearr_40477;
})();
var statearr_40478_40509 = state_40465__$1;
(statearr_40478_40509[(2)] = null);

(statearr_40478_40509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (11))){
var inst_40429 = (state_40465[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40465,(10),Object,null,(9));
var inst_40438 = chs__$1.call(null,inst_40429);
var inst_40439 = done.call(null,inst_40429);
var inst_40440 = cljs.core.async.take_BANG_.call(null,inst_40438,inst_40439);
var state_40465__$1 = state_40465;
var statearr_40479_40510 = state_40465__$1;
(statearr_40479_40510[(2)] = inst_40440);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40465__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (9))){
var inst_40429 = (state_40465[(7)]);
var inst_40442 = (state_40465[(2)]);
var inst_40443 = (inst_40429 + (1));
var inst_40429__$1 = inst_40443;
var state_40465__$1 = (function (){var statearr_40480 = state_40465;
(statearr_40480[(7)] = inst_40429__$1);

(statearr_40480[(10)] = inst_40442);

return statearr_40480;
})();
var statearr_40481_40511 = state_40465__$1;
(statearr_40481_40511[(2)] = null);

(statearr_40481_40511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (5))){
var inst_40449 = (state_40465[(2)]);
var state_40465__$1 = (function (){var statearr_40482 = state_40465;
(statearr_40482[(11)] = inst_40449);

return statearr_40482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40465__$1,(12),dchan);
} else {
if((state_val_40466 === (14))){
var inst_40451 = (state_40465[(8)]);
var inst_40456 = cljs.core.apply.call(null,f,inst_40451);
var state_40465__$1 = state_40465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40465__$1,(16),out,inst_40456);
} else {
if((state_val_40466 === (16))){
var inst_40458 = (state_40465[(2)]);
var state_40465__$1 = (function (){var statearr_40483 = state_40465;
(statearr_40483[(12)] = inst_40458);

return statearr_40483;
})();
var statearr_40484_40512 = state_40465__$1;
(statearr_40484_40512[(2)] = null);

(statearr_40484_40512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (10))){
var inst_40433 = (state_40465[(2)]);
var inst_40434 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40465__$1 = (function (){var statearr_40485 = state_40465;
(statearr_40485[(13)] = inst_40433);

return statearr_40485;
})();
var statearr_40486_40513 = state_40465__$1;
(statearr_40486_40513[(2)] = inst_40434);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40465__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40466 === (8))){
var inst_40447 = (state_40465[(2)]);
var state_40465__$1 = state_40465;
var statearr_40487_40514 = state_40465__$1;
(statearr_40487_40514[(2)] = inst_40447);

(statearr_40487_40514[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___40499,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38318__auto__,c__38430__auto___40499,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_40491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40491[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_40491[(1)] = (1));

return statearr_40491;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_40465){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_40465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e40492){if((e40492 instanceof Object)){
var ex__38322__auto__ = e40492;
var statearr_40493_40515 = state_40465;
(statearr_40493_40515[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40516 = state_40465;
state_40465 = G__40516;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_40465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_40465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___40499,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38432__auto__ = (function (){var statearr_40494 = f__38431__auto__.call(null);
(statearr_40494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___40499);

return statearr_40494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___40499,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args40518 = [];
var len__27051__auto___40576 = arguments.length;
var i__27052__auto___40577 = (0);
while(true){
if((i__27052__auto___40577 < len__27051__auto___40576)){
args40518.push((arguments[i__27052__auto___40577]));

var G__40578 = (i__27052__auto___40577 + (1));
i__27052__auto___40577 = G__40578;
continue;
} else {
}
break;
}

var G__40520 = args40518.length;
switch (G__40520) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40518.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38430__auto___40580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___40580,out){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___40580,out){
return (function (state_40552){
var state_val_40553 = (state_40552[(1)]);
if((state_val_40553 === (7))){
var inst_40532 = (state_40552[(7)]);
var inst_40531 = (state_40552[(8)]);
var inst_40531__$1 = (state_40552[(2)]);
var inst_40532__$1 = cljs.core.nth.call(null,inst_40531__$1,(0),null);
var inst_40533 = cljs.core.nth.call(null,inst_40531__$1,(1),null);
var inst_40534 = (inst_40532__$1 == null);
var state_40552__$1 = (function (){var statearr_40554 = state_40552;
(statearr_40554[(9)] = inst_40533);

(statearr_40554[(7)] = inst_40532__$1);

(statearr_40554[(8)] = inst_40531__$1);

return statearr_40554;
})();
if(cljs.core.truth_(inst_40534)){
var statearr_40555_40581 = state_40552__$1;
(statearr_40555_40581[(1)] = (8));

} else {
var statearr_40556_40582 = state_40552__$1;
(statearr_40556_40582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40553 === (1))){
var inst_40521 = cljs.core.vec.call(null,chs);
var inst_40522 = inst_40521;
var state_40552__$1 = (function (){var statearr_40557 = state_40552;
(statearr_40557[(10)] = inst_40522);

return statearr_40557;
})();
var statearr_40558_40583 = state_40552__$1;
(statearr_40558_40583[(2)] = null);

(statearr_40558_40583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40553 === (4))){
var inst_40522 = (state_40552[(10)]);
var state_40552__$1 = state_40552;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40552__$1,(7),inst_40522);
} else {
if((state_val_40553 === (6))){
var inst_40548 = (state_40552[(2)]);
var state_40552__$1 = state_40552;
var statearr_40559_40584 = state_40552__$1;
(statearr_40559_40584[(2)] = inst_40548);

(statearr_40559_40584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40553 === (3))){
var inst_40550 = (state_40552[(2)]);
var state_40552__$1 = state_40552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40552__$1,inst_40550);
} else {
if((state_val_40553 === (2))){
var inst_40522 = (state_40552[(10)]);
var inst_40524 = cljs.core.count.call(null,inst_40522);
var inst_40525 = (inst_40524 > (0));
var state_40552__$1 = state_40552;
if(cljs.core.truth_(inst_40525)){
var statearr_40561_40585 = state_40552__$1;
(statearr_40561_40585[(1)] = (4));

} else {
var statearr_40562_40586 = state_40552__$1;
(statearr_40562_40586[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40553 === (11))){
var inst_40522 = (state_40552[(10)]);
var inst_40541 = (state_40552[(2)]);
var tmp40560 = inst_40522;
var inst_40522__$1 = tmp40560;
var state_40552__$1 = (function (){var statearr_40563 = state_40552;
(statearr_40563[(10)] = inst_40522__$1);

(statearr_40563[(11)] = inst_40541);

return statearr_40563;
})();
var statearr_40564_40587 = state_40552__$1;
(statearr_40564_40587[(2)] = null);

(statearr_40564_40587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40553 === (9))){
var inst_40532 = (state_40552[(7)]);
var state_40552__$1 = state_40552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40552__$1,(11),out,inst_40532);
} else {
if((state_val_40553 === (5))){
var inst_40546 = cljs.core.async.close_BANG_.call(null,out);
var state_40552__$1 = state_40552;
var statearr_40565_40588 = state_40552__$1;
(statearr_40565_40588[(2)] = inst_40546);

(statearr_40565_40588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40553 === (10))){
var inst_40544 = (state_40552[(2)]);
var state_40552__$1 = state_40552;
var statearr_40566_40589 = state_40552__$1;
(statearr_40566_40589[(2)] = inst_40544);

(statearr_40566_40589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40553 === (8))){
var inst_40533 = (state_40552[(9)]);
var inst_40532 = (state_40552[(7)]);
var inst_40531 = (state_40552[(8)]);
var inst_40522 = (state_40552[(10)]);
var inst_40536 = (function (){var cs = inst_40522;
var vec__40527 = inst_40531;
var v = inst_40532;
var c = inst_40533;
return ((function (cs,vec__40527,v,c,inst_40533,inst_40532,inst_40531,inst_40522,state_val_40553,c__38430__auto___40580,out){
return (function (p1__40517_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40517_SHARP_);
});
;})(cs,vec__40527,v,c,inst_40533,inst_40532,inst_40531,inst_40522,state_val_40553,c__38430__auto___40580,out))
})();
var inst_40537 = cljs.core.filterv.call(null,inst_40536,inst_40522);
var inst_40522__$1 = inst_40537;
var state_40552__$1 = (function (){var statearr_40567 = state_40552;
(statearr_40567[(10)] = inst_40522__$1);

return statearr_40567;
})();
var statearr_40568_40590 = state_40552__$1;
(statearr_40568_40590[(2)] = null);

(statearr_40568_40590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___40580,out))
;
return ((function (switch__38318__auto__,c__38430__auto___40580,out){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_40572 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40572[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_40572[(1)] = (1));

return statearr_40572;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_40552){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_40552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e40573){if((e40573 instanceof Object)){
var ex__38322__auto__ = e40573;
var statearr_40574_40591 = state_40552;
(statearr_40574_40591[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40592 = state_40552;
state_40552 = G__40592;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_40552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_40552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___40580,out))
})();
var state__38432__auto__ = (function (){var statearr_40575 = f__38431__auto__.call(null);
(statearr_40575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___40580);

return statearr_40575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___40580,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args40593 = [];
var len__27051__auto___40642 = arguments.length;
var i__27052__auto___40643 = (0);
while(true){
if((i__27052__auto___40643 < len__27051__auto___40642)){
args40593.push((arguments[i__27052__auto___40643]));

var G__40644 = (i__27052__auto___40643 + (1));
i__27052__auto___40643 = G__40644;
continue;
} else {
}
break;
}

var G__40595 = args40593.length;
switch (G__40595) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40593.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38430__auto___40646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___40646,out){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___40646,out){
return (function (state_40619){
var state_val_40620 = (state_40619[(1)]);
if((state_val_40620 === (7))){
var inst_40601 = (state_40619[(7)]);
var inst_40601__$1 = (state_40619[(2)]);
var inst_40602 = (inst_40601__$1 == null);
var inst_40603 = cljs.core.not.call(null,inst_40602);
var state_40619__$1 = (function (){var statearr_40621 = state_40619;
(statearr_40621[(7)] = inst_40601__$1);

return statearr_40621;
})();
if(inst_40603){
var statearr_40622_40647 = state_40619__$1;
(statearr_40622_40647[(1)] = (8));

} else {
var statearr_40623_40648 = state_40619__$1;
(statearr_40623_40648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40620 === (1))){
var inst_40596 = (0);
var state_40619__$1 = (function (){var statearr_40624 = state_40619;
(statearr_40624[(8)] = inst_40596);

return statearr_40624;
})();
var statearr_40625_40649 = state_40619__$1;
(statearr_40625_40649[(2)] = null);

(statearr_40625_40649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40620 === (4))){
var state_40619__$1 = state_40619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40619__$1,(7),ch);
} else {
if((state_val_40620 === (6))){
var inst_40614 = (state_40619[(2)]);
var state_40619__$1 = state_40619;
var statearr_40626_40650 = state_40619__$1;
(statearr_40626_40650[(2)] = inst_40614);

(statearr_40626_40650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40620 === (3))){
var inst_40616 = (state_40619[(2)]);
var inst_40617 = cljs.core.async.close_BANG_.call(null,out);
var state_40619__$1 = (function (){var statearr_40627 = state_40619;
(statearr_40627[(9)] = inst_40616);

return statearr_40627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40619__$1,inst_40617);
} else {
if((state_val_40620 === (2))){
var inst_40596 = (state_40619[(8)]);
var inst_40598 = (inst_40596 < n);
var state_40619__$1 = state_40619;
if(cljs.core.truth_(inst_40598)){
var statearr_40628_40651 = state_40619__$1;
(statearr_40628_40651[(1)] = (4));

} else {
var statearr_40629_40652 = state_40619__$1;
(statearr_40629_40652[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40620 === (11))){
var inst_40596 = (state_40619[(8)]);
var inst_40606 = (state_40619[(2)]);
var inst_40607 = (inst_40596 + (1));
var inst_40596__$1 = inst_40607;
var state_40619__$1 = (function (){var statearr_40630 = state_40619;
(statearr_40630[(8)] = inst_40596__$1);

(statearr_40630[(10)] = inst_40606);

return statearr_40630;
})();
var statearr_40631_40653 = state_40619__$1;
(statearr_40631_40653[(2)] = null);

(statearr_40631_40653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40620 === (9))){
var state_40619__$1 = state_40619;
var statearr_40632_40654 = state_40619__$1;
(statearr_40632_40654[(2)] = null);

(statearr_40632_40654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40620 === (5))){
var state_40619__$1 = state_40619;
var statearr_40633_40655 = state_40619__$1;
(statearr_40633_40655[(2)] = null);

(statearr_40633_40655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40620 === (10))){
var inst_40611 = (state_40619[(2)]);
var state_40619__$1 = state_40619;
var statearr_40634_40656 = state_40619__$1;
(statearr_40634_40656[(2)] = inst_40611);

(statearr_40634_40656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40620 === (8))){
var inst_40601 = (state_40619[(7)]);
var state_40619__$1 = state_40619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40619__$1,(11),out,inst_40601);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___40646,out))
;
return ((function (switch__38318__auto__,c__38430__auto___40646,out){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_40638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40638[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_40638[(1)] = (1));

return statearr_40638;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_40619){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_40619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e40639){if((e40639 instanceof Object)){
var ex__38322__auto__ = e40639;
var statearr_40640_40657 = state_40619;
(statearr_40640_40657[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40658 = state_40619;
state_40619 = G__40658;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_40619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_40619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___40646,out))
})();
var state__38432__auto__ = (function (){var statearr_40641 = f__38431__auto__.call(null);
(statearr_40641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___40646);

return statearr_40641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___40646,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40666 = (function (map_LT_,f,ch,meta40667){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40667 = meta40667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async40666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40668,meta40667__$1){
var self__ = this;
var _40668__$1 = this;
return (new cljs.core.async.t_cljs$core$async40666(self__.map_LT_,self__.f,self__.ch,meta40667__$1));
});


cljs.core.async.t_cljs$core$async40666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40668){
var self__ = this;
var _40668__$1 = this;
return self__.meta40667;
});


cljs.core.async.t_cljs$core$async40666.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async40666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async40666.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async40666.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async40666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40669 = (function (map_LT_,f,ch,meta40667,_,fn1,meta40670){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40667 = meta40667;
this._ = _;
this.fn1 = fn1;
this.meta40670 = meta40670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40671,meta40670__$1){
var self__ = this;
var _40671__$1 = this;
return (new cljs.core.async.t_cljs$core$async40669(self__.map_LT_,self__.f,self__.ch,self__.meta40667,self__._,self__.fn1,meta40670__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40671){
var self__ = this;
var _40671__$1 = this;
return self__.meta40670;
});})(___$1))
;


cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40659_SHARP_){
return f1.call(null,(((p1__40659_SHARP_ == null))?null:self__.f.call(null,p1__40659_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40669.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40667","meta40667",-966615312,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40666","cljs.core.async/t_cljs$core$async40666",606327327,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40670","meta40670",1512178128,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40669.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40669";

cljs.core.async.t_cljs$core$async40669.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"cljs.core.async/t_cljs$core$async40669");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40669 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40669(map_LT___$1,f__$1,ch__$1,meta40667__$1,___$2,fn1__$1,meta40670){
return (new cljs.core.async.t_cljs$core$async40669(map_LT___$1,f__$1,ch__$1,meta40667__$1,___$2,fn1__$1,meta40670));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40669(self__.map_LT_,self__.f,self__.ch,self__.meta40667,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25964__auto__ = ret;
if(cljs.core.truth_(and__25964__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25964__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async40666.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async40666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40667","meta40667",-966615312,null)], null);
});

cljs.core.async.t_cljs$core$async40666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40666";

cljs.core.async.t_cljs$core$async40666.cljs$lang$ctorPrWriter = (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"cljs.core.async/t_cljs$core$async40666");
});

cljs.core.async.__GT_t_cljs$core$async40666 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40666(map_LT___$1,f__$1,ch__$1,meta40667){
return (new cljs.core.async.t_cljs$core$async40666(map_LT___$1,f__$1,ch__$1,meta40667));
});

}

return (new cljs.core.async.t_cljs$core$async40666(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40675 = (function (map_GT_,f,ch,meta40676){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta40676 = meta40676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40677,meta40676__$1){
var self__ = this;
var _40677__$1 = this;
return (new cljs.core.async.t_cljs$core$async40675(self__.map_GT_,self__.f,self__.ch,meta40676__$1));
});


cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40677){
var self__ = this;
var _40677__$1 = this;
return self__.meta40676;
});


cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40676","meta40676",-403861139,null)], null);
});

cljs.core.async.t_cljs$core$async40675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40675";

cljs.core.async.t_cljs$core$async40675.cljs$lang$ctorPrWriter = (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"cljs.core.async/t_cljs$core$async40675");
});

cljs.core.async.__GT_t_cljs$core$async40675 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40675(map_GT___$1,f__$1,ch__$1,meta40676){
return (new cljs.core.async.t_cljs$core$async40675(map_GT___$1,f__$1,ch__$1,meta40676));
});

}

return (new cljs.core.async.t_cljs$core$async40675(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40681 = (function (filter_GT_,p,ch,meta40682){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta40682 = meta40682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40683,meta40682__$1){
var self__ = this;
var _40683__$1 = this;
return (new cljs.core.async.t_cljs$core$async40681(self__.filter_GT_,self__.p,self__.ch,meta40682__$1));
});


cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40683){
var self__ = this;
var _40683__$1 = this;
return self__.meta40682;
});


cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40682","meta40682",-2053066306,null)], null);
});

cljs.core.async.t_cljs$core$async40681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40681";

cljs.core.async.t_cljs$core$async40681.cljs$lang$ctorPrWriter = (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"cljs.core.async/t_cljs$core$async40681");
});

cljs.core.async.__GT_t_cljs$core$async40681 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40681(filter_GT___$1,p__$1,ch__$1,meta40682){
return (new cljs.core.async.t_cljs$core$async40681(filter_GT___$1,p__$1,ch__$1,meta40682));
});

}

return (new cljs.core.async.t_cljs$core$async40681(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args40684 = [];
var len__27051__auto___40728 = arguments.length;
var i__27052__auto___40729 = (0);
while(true){
if((i__27052__auto___40729 < len__27051__auto___40728)){
args40684.push((arguments[i__27052__auto___40729]));

var G__40730 = (i__27052__auto___40729 + (1));
i__27052__auto___40729 = G__40730;
continue;
} else {
}
break;
}

var G__40686 = args40684.length;
switch (G__40686) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40684.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38430__auto___40732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___40732,out){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___40732,out){
return (function (state_40707){
var state_val_40708 = (state_40707[(1)]);
if((state_val_40708 === (7))){
var inst_40703 = (state_40707[(2)]);
var state_40707__$1 = state_40707;
var statearr_40709_40733 = state_40707__$1;
(statearr_40709_40733[(2)] = inst_40703);

(statearr_40709_40733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (1))){
var state_40707__$1 = state_40707;
var statearr_40710_40734 = state_40707__$1;
(statearr_40710_40734[(2)] = null);

(statearr_40710_40734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (4))){
var inst_40689 = (state_40707[(7)]);
var inst_40689__$1 = (state_40707[(2)]);
var inst_40690 = (inst_40689__$1 == null);
var state_40707__$1 = (function (){var statearr_40711 = state_40707;
(statearr_40711[(7)] = inst_40689__$1);

return statearr_40711;
})();
if(cljs.core.truth_(inst_40690)){
var statearr_40712_40735 = state_40707__$1;
(statearr_40712_40735[(1)] = (5));

} else {
var statearr_40713_40736 = state_40707__$1;
(statearr_40713_40736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (6))){
var inst_40689 = (state_40707[(7)]);
var inst_40694 = p.call(null,inst_40689);
var state_40707__$1 = state_40707;
if(cljs.core.truth_(inst_40694)){
var statearr_40714_40737 = state_40707__$1;
(statearr_40714_40737[(1)] = (8));

} else {
var statearr_40715_40738 = state_40707__$1;
(statearr_40715_40738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (3))){
var inst_40705 = (state_40707[(2)]);
var state_40707__$1 = state_40707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40707__$1,inst_40705);
} else {
if((state_val_40708 === (2))){
var state_40707__$1 = state_40707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40707__$1,(4),ch);
} else {
if((state_val_40708 === (11))){
var inst_40697 = (state_40707[(2)]);
var state_40707__$1 = state_40707;
var statearr_40716_40739 = state_40707__$1;
(statearr_40716_40739[(2)] = inst_40697);

(statearr_40716_40739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (9))){
var state_40707__$1 = state_40707;
var statearr_40717_40740 = state_40707__$1;
(statearr_40717_40740[(2)] = null);

(statearr_40717_40740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (5))){
var inst_40692 = cljs.core.async.close_BANG_.call(null,out);
var state_40707__$1 = state_40707;
var statearr_40718_40741 = state_40707__$1;
(statearr_40718_40741[(2)] = inst_40692);

(statearr_40718_40741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (10))){
var inst_40700 = (state_40707[(2)]);
var state_40707__$1 = (function (){var statearr_40719 = state_40707;
(statearr_40719[(8)] = inst_40700);

return statearr_40719;
})();
var statearr_40720_40742 = state_40707__$1;
(statearr_40720_40742[(2)] = null);

(statearr_40720_40742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (8))){
var inst_40689 = (state_40707[(7)]);
var state_40707__$1 = state_40707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40707__$1,(11),out,inst_40689);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___40732,out))
;
return ((function (switch__38318__auto__,c__38430__auto___40732,out){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_40724 = [null,null,null,null,null,null,null,null,null];
(statearr_40724[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_40724[(1)] = (1));

return statearr_40724;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_40707){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_40707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e40725){if((e40725 instanceof Object)){
var ex__38322__auto__ = e40725;
var statearr_40726_40743 = state_40707;
(statearr_40726_40743[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40744 = state_40707;
state_40707 = G__40744;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_40707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_40707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___40732,out))
})();
var state__38432__auto__ = (function (){var statearr_40727 = f__38431__auto__.call(null);
(statearr_40727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___40732);

return statearr_40727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___40732,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args40745 = [];
var len__27051__auto___40748 = arguments.length;
var i__27052__auto___40749 = (0);
while(true){
if((i__27052__auto___40749 < len__27051__auto___40748)){
args40745.push((arguments[i__27052__auto___40749]));

var G__40750 = (i__27052__auto___40749 + (1));
i__27052__auto___40749 = G__40750;
continue;
} else {
}
break;
}

var G__40747 = args40745.length;
switch (G__40747) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40745.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__){
return (function (state_40917){
var state_val_40918 = (state_40917[(1)]);
if((state_val_40918 === (7))){
var inst_40913 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
var statearr_40919_40960 = state_40917__$1;
(statearr_40919_40960[(2)] = inst_40913);

(statearr_40919_40960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (20))){
var inst_40883 = (state_40917[(7)]);
var inst_40894 = (state_40917[(2)]);
var inst_40895 = cljs.core.next.call(null,inst_40883);
var inst_40869 = inst_40895;
var inst_40870 = null;
var inst_40871 = (0);
var inst_40872 = (0);
var state_40917__$1 = (function (){var statearr_40920 = state_40917;
(statearr_40920[(8)] = inst_40870);

(statearr_40920[(9)] = inst_40872);

(statearr_40920[(10)] = inst_40871);

(statearr_40920[(11)] = inst_40894);

(statearr_40920[(12)] = inst_40869);

return statearr_40920;
})();
var statearr_40921_40961 = state_40917__$1;
(statearr_40921_40961[(2)] = null);

(statearr_40921_40961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (1))){
var state_40917__$1 = state_40917;
var statearr_40922_40962 = state_40917__$1;
(statearr_40922_40962[(2)] = null);

(statearr_40922_40962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (4))){
var inst_40858 = (state_40917[(13)]);
var inst_40858__$1 = (state_40917[(2)]);
var inst_40859 = (inst_40858__$1 == null);
var state_40917__$1 = (function (){var statearr_40923 = state_40917;
(statearr_40923[(13)] = inst_40858__$1);

return statearr_40923;
})();
if(cljs.core.truth_(inst_40859)){
var statearr_40924_40963 = state_40917__$1;
(statearr_40924_40963[(1)] = (5));

} else {
var statearr_40925_40964 = state_40917__$1;
(statearr_40925_40964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (15))){
var state_40917__$1 = state_40917;
var statearr_40929_40965 = state_40917__$1;
(statearr_40929_40965[(2)] = null);

(statearr_40929_40965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (21))){
var state_40917__$1 = state_40917;
var statearr_40930_40966 = state_40917__$1;
(statearr_40930_40966[(2)] = null);

(statearr_40930_40966[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (13))){
var inst_40870 = (state_40917[(8)]);
var inst_40872 = (state_40917[(9)]);
var inst_40871 = (state_40917[(10)]);
var inst_40869 = (state_40917[(12)]);
var inst_40879 = (state_40917[(2)]);
var inst_40880 = (inst_40872 + (1));
var tmp40926 = inst_40870;
var tmp40927 = inst_40871;
var tmp40928 = inst_40869;
var inst_40869__$1 = tmp40928;
var inst_40870__$1 = tmp40926;
var inst_40871__$1 = tmp40927;
var inst_40872__$1 = inst_40880;
var state_40917__$1 = (function (){var statearr_40931 = state_40917;
(statearr_40931[(8)] = inst_40870__$1);

(statearr_40931[(9)] = inst_40872__$1);

(statearr_40931[(10)] = inst_40871__$1);

(statearr_40931[(14)] = inst_40879);

(statearr_40931[(12)] = inst_40869__$1);

return statearr_40931;
})();
var statearr_40932_40967 = state_40917__$1;
(statearr_40932_40967[(2)] = null);

(statearr_40932_40967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (22))){
var state_40917__$1 = state_40917;
var statearr_40933_40968 = state_40917__$1;
(statearr_40933_40968[(2)] = null);

(statearr_40933_40968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (6))){
var inst_40858 = (state_40917[(13)]);
var inst_40867 = f.call(null,inst_40858);
var inst_40868 = cljs.core.seq.call(null,inst_40867);
var inst_40869 = inst_40868;
var inst_40870 = null;
var inst_40871 = (0);
var inst_40872 = (0);
var state_40917__$1 = (function (){var statearr_40934 = state_40917;
(statearr_40934[(8)] = inst_40870);

(statearr_40934[(9)] = inst_40872);

(statearr_40934[(10)] = inst_40871);

(statearr_40934[(12)] = inst_40869);

return statearr_40934;
})();
var statearr_40935_40969 = state_40917__$1;
(statearr_40935_40969[(2)] = null);

(statearr_40935_40969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (17))){
var inst_40883 = (state_40917[(7)]);
var inst_40887 = cljs.core.chunk_first.call(null,inst_40883);
var inst_40888 = cljs.core.chunk_rest.call(null,inst_40883);
var inst_40889 = cljs.core.count.call(null,inst_40887);
var inst_40869 = inst_40888;
var inst_40870 = inst_40887;
var inst_40871 = inst_40889;
var inst_40872 = (0);
var state_40917__$1 = (function (){var statearr_40936 = state_40917;
(statearr_40936[(8)] = inst_40870);

(statearr_40936[(9)] = inst_40872);

(statearr_40936[(10)] = inst_40871);

(statearr_40936[(12)] = inst_40869);

return statearr_40936;
})();
var statearr_40937_40970 = state_40917__$1;
(statearr_40937_40970[(2)] = null);

(statearr_40937_40970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (3))){
var inst_40915 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40917__$1,inst_40915);
} else {
if((state_val_40918 === (12))){
var inst_40903 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
var statearr_40938_40971 = state_40917__$1;
(statearr_40938_40971[(2)] = inst_40903);

(statearr_40938_40971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (2))){
var state_40917__$1 = state_40917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40917__$1,(4),in$);
} else {
if((state_val_40918 === (23))){
var inst_40911 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
var statearr_40939_40972 = state_40917__$1;
(statearr_40939_40972[(2)] = inst_40911);

(statearr_40939_40972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (19))){
var inst_40898 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
var statearr_40940_40973 = state_40917__$1;
(statearr_40940_40973[(2)] = inst_40898);

(statearr_40940_40973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (11))){
var inst_40883 = (state_40917[(7)]);
var inst_40869 = (state_40917[(12)]);
var inst_40883__$1 = cljs.core.seq.call(null,inst_40869);
var state_40917__$1 = (function (){var statearr_40941 = state_40917;
(statearr_40941[(7)] = inst_40883__$1);

return statearr_40941;
})();
if(inst_40883__$1){
var statearr_40942_40974 = state_40917__$1;
(statearr_40942_40974[(1)] = (14));

} else {
var statearr_40943_40975 = state_40917__$1;
(statearr_40943_40975[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (9))){
var inst_40905 = (state_40917[(2)]);
var inst_40906 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40917__$1 = (function (){var statearr_40944 = state_40917;
(statearr_40944[(15)] = inst_40905);

return statearr_40944;
})();
if(cljs.core.truth_(inst_40906)){
var statearr_40945_40976 = state_40917__$1;
(statearr_40945_40976[(1)] = (21));

} else {
var statearr_40946_40977 = state_40917__$1;
(statearr_40946_40977[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (5))){
var inst_40861 = cljs.core.async.close_BANG_.call(null,out);
var state_40917__$1 = state_40917;
var statearr_40947_40978 = state_40917__$1;
(statearr_40947_40978[(2)] = inst_40861);

(statearr_40947_40978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (14))){
var inst_40883 = (state_40917[(7)]);
var inst_40885 = cljs.core.chunked_seq_QMARK_.call(null,inst_40883);
var state_40917__$1 = state_40917;
if(inst_40885){
var statearr_40948_40979 = state_40917__$1;
(statearr_40948_40979[(1)] = (17));

} else {
var statearr_40949_40980 = state_40917__$1;
(statearr_40949_40980[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (16))){
var inst_40901 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
var statearr_40950_40981 = state_40917__$1;
(statearr_40950_40981[(2)] = inst_40901);

(statearr_40950_40981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (10))){
var inst_40870 = (state_40917[(8)]);
var inst_40872 = (state_40917[(9)]);
var inst_40877 = cljs.core._nth.call(null,inst_40870,inst_40872);
var state_40917__$1 = state_40917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40917__$1,(13),out,inst_40877);
} else {
if((state_val_40918 === (18))){
var inst_40883 = (state_40917[(7)]);
var inst_40892 = cljs.core.first.call(null,inst_40883);
var state_40917__$1 = state_40917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40917__$1,(20),out,inst_40892);
} else {
if((state_val_40918 === (8))){
var inst_40872 = (state_40917[(9)]);
var inst_40871 = (state_40917[(10)]);
var inst_40874 = (inst_40872 < inst_40871);
var inst_40875 = inst_40874;
var state_40917__$1 = state_40917;
if(cljs.core.truth_(inst_40875)){
var statearr_40951_40982 = state_40917__$1;
(statearr_40951_40982[(1)] = (10));

} else {
var statearr_40952_40983 = state_40917__$1;
(statearr_40952_40983[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto__))
;
return ((function (switch__38318__auto__,c__38430__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38319__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38319__auto____0 = (function (){
var statearr_40956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40956[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38319__auto__);

(statearr_40956[(1)] = (1));

return statearr_40956;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38319__auto____1 = (function (state_40917){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_40917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e40957){if((e40957 instanceof Object)){
var ex__38322__auto__ = e40957;
var statearr_40958_40984 = state_40917;
(statearr_40958_40984[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40985 = state_40917;
state_40917 = G__40985;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38319__auto__ = function(state_40917){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38319__auto____1.call(this,state_40917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38319__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38319__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__))
})();
var state__38432__auto__ = (function (){var statearr_40959 = f__38431__auto__.call(null);
(statearr_40959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_40959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__))
);

return c__38430__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args40986 = [];
var len__27051__auto___40989 = arguments.length;
var i__27052__auto___40990 = (0);
while(true){
if((i__27052__auto___40990 < len__27051__auto___40989)){
args40986.push((arguments[i__27052__auto___40990]));

var G__40991 = (i__27052__auto___40990 + (1));
i__27052__auto___40990 = G__40991;
continue;
} else {
}
break;
}

var G__40988 = args40986.length;
switch (G__40988) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40986.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args40993 = [];
var len__27051__auto___40996 = arguments.length;
var i__27052__auto___40997 = (0);
while(true){
if((i__27052__auto___40997 < len__27051__auto___40996)){
args40993.push((arguments[i__27052__auto___40997]));

var G__40998 = (i__27052__auto___40997 + (1));
i__27052__auto___40997 = G__40998;
continue;
} else {
}
break;
}

var G__40995 = args40993.length;
switch (G__40995) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40993.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args41000 = [];
var len__27051__auto___41051 = arguments.length;
var i__27052__auto___41052 = (0);
while(true){
if((i__27052__auto___41052 < len__27051__auto___41051)){
args41000.push((arguments[i__27052__auto___41052]));

var G__41053 = (i__27052__auto___41052 + (1));
i__27052__auto___41052 = G__41053;
continue;
} else {
}
break;
}

var G__41002 = args41000.length;
switch (G__41002) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41000.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38430__auto___41055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___41055,out){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___41055,out){
return (function (state_41026){
var state_val_41027 = (state_41026[(1)]);
if((state_val_41027 === (7))){
var inst_41021 = (state_41026[(2)]);
var state_41026__$1 = state_41026;
var statearr_41028_41056 = state_41026__$1;
(statearr_41028_41056[(2)] = inst_41021);

(statearr_41028_41056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (1))){
var inst_41003 = null;
var state_41026__$1 = (function (){var statearr_41029 = state_41026;
(statearr_41029[(7)] = inst_41003);

return statearr_41029;
})();
var statearr_41030_41057 = state_41026__$1;
(statearr_41030_41057[(2)] = null);

(statearr_41030_41057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (4))){
var inst_41006 = (state_41026[(8)]);
var inst_41006__$1 = (state_41026[(2)]);
var inst_41007 = (inst_41006__$1 == null);
var inst_41008 = cljs.core.not.call(null,inst_41007);
var state_41026__$1 = (function (){var statearr_41031 = state_41026;
(statearr_41031[(8)] = inst_41006__$1);

return statearr_41031;
})();
if(inst_41008){
var statearr_41032_41058 = state_41026__$1;
(statearr_41032_41058[(1)] = (5));

} else {
var statearr_41033_41059 = state_41026__$1;
(statearr_41033_41059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (6))){
var state_41026__$1 = state_41026;
var statearr_41034_41060 = state_41026__$1;
(statearr_41034_41060[(2)] = null);

(statearr_41034_41060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (3))){
var inst_41023 = (state_41026[(2)]);
var inst_41024 = cljs.core.async.close_BANG_.call(null,out);
var state_41026__$1 = (function (){var statearr_41035 = state_41026;
(statearr_41035[(9)] = inst_41023);

return statearr_41035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41026__$1,inst_41024);
} else {
if((state_val_41027 === (2))){
var state_41026__$1 = state_41026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41026__$1,(4),ch);
} else {
if((state_val_41027 === (11))){
var inst_41006 = (state_41026[(8)]);
var inst_41015 = (state_41026[(2)]);
var inst_41003 = inst_41006;
var state_41026__$1 = (function (){var statearr_41036 = state_41026;
(statearr_41036[(10)] = inst_41015);

(statearr_41036[(7)] = inst_41003);

return statearr_41036;
})();
var statearr_41037_41061 = state_41026__$1;
(statearr_41037_41061[(2)] = null);

(statearr_41037_41061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (9))){
var inst_41006 = (state_41026[(8)]);
var state_41026__$1 = state_41026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41026__$1,(11),out,inst_41006);
} else {
if((state_val_41027 === (5))){
var inst_41006 = (state_41026[(8)]);
var inst_41003 = (state_41026[(7)]);
var inst_41010 = cljs.core._EQ_.call(null,inst_41006,inst_41003);
var state_41026__$1 = state_41026;
if(inst_41010){
var statearr_41039_41062 = state_41026__$1;
(statearr_41039_41062[(1)] = (8));

} else {
var statearr_41040_41063 = state_41026__$1;
(statearr_41040_41063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (10))){
var inst_41018 = (state_41026[(2)]);
var state_41026__$1 = state_41026;
var statearr_41041_41064 = state_41026__$1;
(statearr_41041_41064[(2)] = inst_41018);

(statearr_41041_41064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (8))){
var inst_41003 = (state_41026[(7)]);
var tmp41038 = inst_41003;
var inst_41003__$1 = tmp41038;
var state_41026__$1 = (function (){var statearr_41042 = state_41026;
(statearr_41042[(7)] = inst_41003__$1);

return statearr_41042;
})();
var statearr_41043_41065 = state_41026__$1;
(statearr_41043_41065[(2)] = null);

(statearr_41043_41065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___41055,out))
;
return ((function (switch__38318__auto__,c__38430__auto___41055,out){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_41047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41047[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_41047[(1)] = (1));

return statearr_41047;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_41026){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_41026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e41048){if((e41048 instanceof Object)){
var ex__38322__auto__ = e41048;
var statearr_41049_41066 = state_41026;
(statearr_41049_41066[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41067 = state_41026;
state_41026 = G__41067;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_41026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_41026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___41055,out))
})();
var state__38432__auto__ = (function (){var statearr_41050 = f__38431__auto__.call(null);
(statearr_41050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___41055);

return statearr_41050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___41055,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args41068 = [];
var len__27051__auto___41138 = arguments.length;
var i__27052__auto___41139 = (0);
while(true){
if((i__27052__auto___41139 < len__27051__auto___41138)){
args41068.push((arguments[i__27052__auto___41139]));

var G__41140 = (i__27052__auto___41139 + (1));
i__27052__auto___41139 = G__41140;
continue;
} else {
}
break;
}

var G__41070 = args41068.length;
switch (G__41070) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41068.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38430__auto___41142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___41142,out){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___41142,out){
return (function (state_41108){
var state_val_41109 = (state_41108[(1)]);
if((state_val_41109 === (7))){
var inst_41104 = (state_41108[(2)]);
var state_41108__$1 = state_41108;
var statearr_41110_41143 = state_41108__$1;
(statearr_41110_41143[(2)] = inst_41104);

(statearr_41110_41143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41109 === (1))){
var inst_41071 = (new Array(n));
var inst_41072 = inst_41071;
var inst_41073 = (0);
var state_41108__$1 = (function (){var statearr_41111 = state_41108;
(statearr_41111[(7)] = inst_41072);

(statearr_41111[(8)] = inst_41073);

return statearr_41111;
})();
var statearr_41112_41144 = state_41108__$1;
(statearr_41112_41144[(2)] = null);

(statearr_41112_41144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41109 === (4))){
var inst_41076 = (state_41108[(9)]);
var inst_41076__$1 = (state_41108[(2)]);
var inst_41077 = (inst_41076__$1 == null);
var inst_41078 = cljs.core.not.call(null,inst_41077);
var state_41108__$1 = (function (){var statearr_41113 = state_41108;
(statearr_41113[(9)] = inst_41076__$1);

return statearr_41113;
})();
if(inst_41078){
var statearr_41114_41145 = state_41108__$1;
(statearr_41114_41145[(1)] = (5));

} else {
var statearr_41115_41146 = state_41108__$1;
(statearr_41115_41146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41109 === (15))){
var inst_41098 = (state_41108[(2)]);
var state_41108__$1 = state_41108;
var statearr_41116_41147 = state_41108__$1;
(statearr_41116_41147[(2)] = inst_41098);

(statearr_41116_41147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41109 === (13))){
var state_41108__$1 = state_41108;
var statearr_41117_41148 = state_41108__$1;
(statearr_41117_41148[(2)] = null);

(statearr_41117_41148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41109 === (6))){
var inst_41073 = (state_41108[(8)]);
var inst_41094 = (inst_41073 > (0));
var state_41108__$1 = state_41108;
if(cljs.core.truth_(inst_41094)){
var statearr_41118_41149 = state_41108__$1;
(statearr_41118_41149[(1)] = (12));

} else {
var statearr_41119_41150 = state_41108__$1;
(statearr_41119_41150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41109 === (3))){
var inst_41106 = (state_41108[(2)]);
var state_41108__$1 = state_41108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41108__$1,inst_41106);
} else {
if((state_val_41109 === (12))){
var inst_41072 = (state_41108[(7)]);
var inst_41096 = cljs.core.vec.call(null,inst_41072);
var state_41108__$1 = state_41108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41108__$1,(15),out,inst_41096);
} else {
if((state_val_41109 === (2))){
var state_41108__$1 = state_41108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41108__$1,(4),ch);
} else {
if((state_val_41109 === (11))){
var inst_41088 = (state_41108[(2)]);
var inst_41089 = (new Array(n));
var inst_41072 = inst_41089;
var inst_41073 = (0);
var state_41108__$1 = (function (){var statearr_41120 = state_41108;
(statearr_41120[(10)] = inst_41088);

(statearr_41120[(7)] = inst_41072);

(statearr_41120[(8)] = inst_41073);

return statearr_41120;
})();
var statearr_41121_41151 = state_41108__$1;
(statearr_41121_41151[(2)] = null);

(statearr_41121_41151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41109 === (9))){
var inst_41072 = (state_41108[(7)]);
var inst_41086 = cljs.core.vec.call(null,inst_41072);
var state_41108__$1 = state_41108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41108__$1,(11),out,inst_41086);
} else {
if((state_val_41109 === (5))){
var inst_41076 = (state_41108[(9)]);
var inst_41081 = (state_41108[(11)]);
var inst_41072 = (state_41108[(7)]);
var inst_41073 = (state_41108[(8)]);
var inst_41080 = (inst_41072[inst_41073] = inst_41076);
var inst_41081__$1 = (inst_41073 + (1));
var inst_41082 = (inst_41081__$1 < n);
var state_41108__$1 = (function (){var statearr_41122 = state_41108;
(statearr_41122[(11)] = inst_41081__$1);

(statearr_41122[(12)] = inst_41080);

return statearr_41122;
})();
if(cljs.core.truth_(inst_41082)){
var statearr_41123_41152 = state_41108__$1;
(statearr_41123_41152[(1)] = (8));

} else {
var statearr_41124_41153 = state_41108__$1;
(statearr_41124_41153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41109 === (14))){
var inst_41101 = (state_41108[(2)]);
var inst_41102 = cljs.core.async.close_BANG_.call(null,out);
var state_41108__$1 = (function (){var statearr_41126 = state_41108;
(statearr_41126[(13)] = inst_41101);

return statearr_41126;
})();
var statearr_41127_41154 = state_41108__$1;
(statearr_41127_41154[(2)] = inst_41102);

(statearr_41127_41154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41109 === (10))){
var inst_41092 = (state_41108[(2)]);
var state_41108__$1 = state_41108;
var statearr_41128_41155 = state_41108__$1;
(statearr_41128_41155[(2)] = inst_41092);

(statearr_41128_41155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41109 === (8))){
var inst_41081 = (state_41108[(11)]);
var inst_41072 = (state_41108[(7)]);
var tmp41125 = inst_41072;
var inst_41072__$1 = tmp41125;
var inst_41073 = inst_41081;
var state_41108__$1 = (function (){var statearr_41129 = state_41108;
(statearr_41129[(7)] = inst_41072__$1);

(statearr_41129[(8)] = inst_41073);

return statearr_41129;
})();
var statearr_41130_41156 = state_41108__$1;
(statearr_41130_41156[(2)] = null);

(statearr_41130_41156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___41142,out))
;
return ((function (switch__38318__auto__,c__38430__auto___41142,out){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_41134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41134[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_41134[(1)] = (1));

return statearr_41134;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_41108){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_41108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e41135){if((e41135 instanceof Object)){
var ex__38322__auto__ = e41135;
var statearr_41136_41157 = state_41108;
(statearr_41136_41157[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41158 = state_41108;
state_41108 = G__41158;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_41108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_41108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___41142,out))
})();
var state__38432__auto__ = (function (){var statearr_41137 = f__38431__auto__.call(null);
(statearr_41137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___41142);

return statearr_41137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___41142,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args41159 = [];
var len__27051__auto___41233 = arguments.length;
var i__27052__auto___41234 = (0);
while(true){
if((i__27052__auto___41234 < len__27051__auto___41233)){
args41159.push((arguments[i__27052__auto___41234]));

var G__41235 = (i__27052__auto___41234 + (1));
i__27052__auto___41234 = G__41235;
continue;
} else {
}
break;
}

var G__41161 = args41159.length;
switch (G__41161) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41159.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38430__auto___41237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___41237,out){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___41237,out){
return (function (state_41203){
var state_val_41204 = (state_41203[(1)]);
if((state_val_41204 === (7))){
var inst_41199 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
var statearr_41205_41238 = state_41203__$1;
(statearr_41205_41238[(2)] = inst_41199);

(statearr_41205_41238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (1))){
var inst_41162 = [];
var inst_41163 = inst_41162;
var inst_41164 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41203__$1 = (function (){var statearr_41206 = state_41203;
(statearr_41206[(7)] = inst_41163);

(statearr_41206[(8)] = inst_41164);

return statearr_41206;
})();
var statearr_41207_41239 = state_41203__$1;
(statearr_41207_41239[(2)] = null);

(statearr_41207_41239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (4))){
var inst_41167 = (state_41203[(9)]);
var inst_41167__$1 = (state_41203[(2)]);
var inst_41168 = (inst_41167__$1 == null);
var inst_41169 = cljs.core.not.call(null,inst_41168);
var state_41203__$1 = (function (){var statearr_41208 = state_41203;
(statearr_41208[(9)] = inst_41167__$1);

return statearr_41208;
})();
if(inst_41169){
var statearr_41209_41240 = state_41203__$1;
(statearr_41209_41240[(1)] = (5));

} else {
var statearr_41210_41241 = state_41203__$1;
(statearr_41210_41241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (15))){
var inst_41193 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
var statearr_41211_41242 = state_41203__$1;
(statearr_41211_41242[(2)] = inst_41193);

(statearr_41211_41242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (13))){
var state_41203__$1 = state_41203;
var statearr_41212_41243 = state_41203__$1;
(statearr_41212_41243[(2)] = null);

(statearr_41212_41243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (6))){
var inst_41163 = (state_41203[(7)]);
var inst_41188 = inst_41163.length;
var inst_41189 = (inst_41188 > (0));
var state_41203__$1 = state_41203;
if(cljs.core.truth_(inst_41189)){
var statearr_41213_41244 = state_41203__$1;
(statearr_41213_41244[(1)] = (12));

} else {
var statearr_41214_41245 = state_41203__$1;
(statearr_41214_41245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (3))){
var inst_41201 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41203__$1,inst_41201);
} else {
if((state_val_41204 === (12))){
var inst_41163 = (state_41203[(7)]);
var inst_41191 = cljs.core.vec.call(null,inst_41163);
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41203__$1,(15),out,inst_41191);
} else {
if((state_val_41204 === (2))){
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41203__$1,(4),ch);
} else {
if((state_val_41204 === (11))){
var inst_41171 = (state_41203[(10)]);
var inst_41167 = (state_41203[(9)]);
var inst_41181 = (state_41203[(2)]);
var inst_41182 = [];
var inst_41183 = inst_41182.push(inst_41167);
var inst_41163 = inst_41182;
var inst_41164 = inst_41171;
var state_41203__$1 = (function (){var statearr_41215 = state_41203;
(statearr_41215[(11)] = inst_41181);

(statearr_41215[(12)] = inst_41183);

(statearr_41215[(7)] = inst_41163);

(statearr_41215[(8)] = inst_41164);

return statearr_41215;
})();
var statearr_41216_41246 = state_41203__$1;
(statearr_41216_41246[(2)] = null);

(statearr_41216_41246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (9))){
var inst_41163 = (state_41203[(7)]);
var inst_41179 = cljs.core.vec.call(null,inst_41163);
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41203__$1,(11),out,inst_41179);
} else {
if((state_val_41204 === (5))){
var inst_41171 = (state_41203[(10)]);
var inst_41167 = (state_41203[(9)]);
var inst_41164 = (state_41203[(8)]);
var inst_41171__$1 = f.call(null,inst_41167);
var inst_41172 = cljs.core._EQ_.call(null,inst_41171__$1,inst_41164);
var inst_41173 = cljs.core.keyword_identical_QMARK_.call(null,inst_41164,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41174 = (inst_41172) || (inst_41173);
var state_41203__$1 = (function (){var statearr_41217 = state_41203;
(statearr_41217[(10)] = inst_41171__$1);

return statearr_41217;
})();
if(cljs.core.truth_(inst_41174)){
var statearr_41218_41247 = state_41203__$1;
(statearr_41218_41247[(1)] = (8));

} else {
var statearr_41219_41248 = state_41203__$1;
(statearr_41219_41248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (14))){
var inst_41196 = (state_41203[(2)]);
var inst_41197 = cljs.core.async.close_BANG_.call(null,out);
var state_41203__$1 = (function (){var statearr_41221 = state_41203;
(statearr_41221[(13)] = inst_41196);

return statearr_41221;
})();
var statearr_41222_41249 = state_41203__$1;
(statearr_41222_41249[(2)] = inst_41197);

(statearr_41222_41249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (10))){
var inst_41186 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
var statearr_41223_41250 = state_41203__$1;
(statearr_41223_41250[(2)] = inst_41186);

(statearr_41223_41250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (8))){
var inst_41171 = (state_41203[(10)]);
var inst_41167 = (state_41203[(9)]);
var inst_41163 = (state_41203[(7)]);
var inst_41176 = inst_41163.push(inst_41167);
var tmp41220 = inst_41163;
var inst_41163__$1 = tmp41220;
var inst_41164 = inst_41171;
var state_41203__$1 = (function (){var statearr_41224 = state_41203;
(statearr_41224[(14)] = inst_41176);

(statearr_41224[(7)] = inst_41163__$1);

(statearr_41224[(8)] = inst_41164);

return statearr_41224;
})();
var statearr_41225_41251 = state_41203__$1;
(statearr_41225_41251[(2)] = null);

(statearr_41225_41251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto___41237,out))
;
return ((function (switch__38318__auto__,c__38430__auto___41237,out){
return (function() {
var cljs$core$async$state_machine__38319__auto__ = null;
var cljs$core$async$state_machine__38319__auto____0 = (function (){
var statearr_41229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41229[(0)] = cljs$core$async$state_machine__38319__auto__);

(statearr_41229[(1)] = (1));

return statearr_41229;
});
var cljs$core$async$state_machine__38319__auto____1 = (function (state_41203){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_41203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e41230){if((e41230 instanceof Object)){
var ex__38322__auto__ = e41230;
var statearr_41231_41252 = state_41203;
(statearr_41231_41252[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41253 = state_41203;
state_41203 = G__41253;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
cljs$core$async$state_machine__38319__auto__ = function(state_41203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38319__auto____1.call(this,state_41203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38319__auto____0;
cljs$core$async$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38319__auto____1;
return cljs$core$async$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___41237,out))
})();
var state__38432__auto__ = (function (){var statearr_41232 = f__38431__auto__.call(null);
(statearr_41232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___41237);

return statearr_41232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___41237,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518788565632