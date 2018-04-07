// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.strf.core');
goog.require('cljs.core');
goog.require('clojure.string');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__27058__auto__ = [];
var len__27051__auto___29990 = arguments.length;
var i__27052__auto___29991 = (0);
while(true){
if((i__27052__auto___29991 < len__27051__auto___29990)){
args__27058__auto__.push((arguments[i__27052__auto___29991]));

var G__29992 = (i__27052__auto___29991 + (1));
i__27052__auto___29991 = G__29992;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((2) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27059__auto__);
});

thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__29986){
var vec__29987 = p__29986;
var default$ = cljs.core.nth.call(null,vec__29987,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2);

thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq29983){
var G__29984 = cljs.core.first.call(null,seq29983);
var seq29983__$1 = cljs.core.next.call(null,seq29983);
var G__29985 = cljs.core.first.call(null,seq29983__$1);
var seq29983__$2 = cljs.core.next.call(null,seq29983__$1);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(G__29984,G__29985,seq29983__$2);
});

thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__27058__auto__ = [];
var len__27051__auto___30000 = arguments.length;
var i__27052__auto___30001 = (0);
while(true){
if((i__27052__auto___30001 < len__27051__auto___30000)){
args__27058__auto__.push((arguments[i__27052__auto___30001]));

var G__30002 = (i__27052__auto___30001 + (1));
i__27052__auto___30001 = G__30002;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((2) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27059__auto__);
});

thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__29996){
var vec__29997 = p__29996;
var default$ = cljs.core.nth.call(null,vec__29997,(0),null);
return thi.ng.strf.core.parse_int.call(null,x,radix,default$);
});

thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2);

thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq29993){
var G__29994 = cljs.core.first.call(null,seq29993);
var seq29993__$1 = cljs.core.next.call(null,seq29993);
var G__29995 = cljs.core.first.call(null,seq29993__$1);
var seq29993__$2 = cljs.core.next.call(null,seq29993__$1);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic(G__29994,G__29995,seq29993__$2);
});

thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__27058__auto__ = [];
var len__27051__auto___30009 = arguments.length;
var i__27052__auto___30010 = (0);
while(true){
if((i__27052__auto___30010 < len__27051__auto___30009)){
args__27058__auto__.push((arguments[i__27052__auto___30010]));

var G__30011 = (i__27052__auto___30010 + (1));
i__27052__auto___30010 = G__30011;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((1) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27059__auto__);
});

thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__30005){
var vec__30006 = p__30005;
var default$ = cljs.core.nth.call(null,vec__30006,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq30003){
var G__30004 = cljs.core.first.call(null,seq30003);
var seq30003__$1 = cljs.core.next.call(null,seq30003);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(G__30004,seq30003__$1);
});

thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__27058__auto__ = [];
var len__27051__auto___30018 = arguments.length;
var i__27052__auto___30019 = (0);
while(true){
if((i__27052__auto___30019 < len__27051__auto___30018)){
args__27058__auto__.push((arguments[i__27052__auto___30019]));

var G__30020 = (i__27052__auto___30019 + (1));
i__27052__auto___30019 = G__30020;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((1) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27059__auto__);
});

thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__30014){
var vec__30015 = p__30014;
var default$ = cljs.core.nth.call(null,vec__30015,(0),null);
return thi.ng.strf.core.parse_float.call(null,x,default$);
});

thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq30012){
var G__30013 = cljs.core.first.call(null,seq30012);
var seq30012__$1 = cljs.core.next.call(null,seq30012);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic(G__30013,seq30012__$1);
});

thi.ng.strf.core.parse_boolean = (function thi$ng$strf$core$parse_boolean(x){
return cljs.core._EQ_.call(null,"true",clojure.string.lower_case.call(null,x));
});
thi.ng.strf.core.int$ = cljs.core.int$;
thi.ng.strf.core.long$ = thi.ng.strf.core.int$;
thi.ng.strf.core.float$ = cljs.core.memoize.call(null,(function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.double$ = cljs.core.memoize.call(null,(function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.pad_left = cljs.core.memoize.call(null,(function (len,fill){
var fill__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l < len)){
return [cljs.core.str(cljs.core.subs.call(null,fill__$1,(0),(len - l))),cljs.core.str(x)].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.pad_right = cljs.core.memoize.call(null,(function (len,fill){
var fill__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l < len)){
return [cljs.core.str(x),cljs.core.str(cljs.core.subs.call(null,fill__$1,(0),(len - l)))].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.hex = cljs.core.memoize.call(null,(function (len){
var pad = thi.ng.strf.core.pad_left.call(null,len,"0");
return ((function (pad){
return (function (x){
return pad.call(null,(new Number(thi.ng.strf.core.int$.call(null,x))).toString((16)));
});
;})(pad))
}));
thi.ng.strf.core.trunc_left = (function thi$ng$strf$core$trunc_left(len){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.call(null,x,(0),len);
}
});
});
thi.ng.strf.core.trunc_right = (function thi$ng$strf$core$trunc_right(len){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.call(null,x,(l - len));
}
});
});
thi.ng.strf.core.format = (function thi$ng$strf$core$format(var_args){
var args__27058__auto__ = [];
var len__27051__auto___30023 = arguments.length;
var i__27052__auto___30024 = (0);
while(true){
if((i__27052__auto___30024 < len__27051__auto___30023)){
args__27058__auto__.push((arguments[i__27052__auto___30024]));

var G__30025 = (i__27052__auto___30024 + (1));
i__27052__auto___30024 = G__30025;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((1) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27059__auto__);
});

thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var s = cljs.core.PersistentVector.EMPTY;
var fmt__$1 = fmt;
var args__$1 = args;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,fmt__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
if(typeof f === 'string'){
var G__30026 = cljs.core.conj.call(null,s,f);
var G__30027 = cljs.core.next.call(null,fmt__$1);
var G__30028 = args__$1;
s = G__30026;
fmt__$1 = G__30027;
args__$1 = G__30028;
continue;
} else {
var G__30029 = cljs.core.conj.call(null,s,f.call(null,cljs.core.first.call(null,args__$1)));
var G__30030 = cljs.core.next.call(null,fmt__$1);
var G__30031 = cljs.core.next.call(null,args__$1);
s = G__30029;
fmt__$1 = G__30030;
args__$1 = G__30031;
continue;
}
} else {
return cljs.core.apply.call(null,cljs.core.str,s);
}
break;
}
});

thi.ng.strf.core.format.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq30021){
var G__30022 = cljs.core.first.call(null,seq30021);
var seq30021__$1 = cljs.core.next.call(null,seq30021);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(G__30022,seq30021__$1);
});

thi.ng.strf.core.date_fields = (function thi$ng$strf$core$date_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate()], null)], null);
});
thi.ng.strf.core.time_fields = (function thi$ng$strf$core$time_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.datetime_fields = (function thi$ng$strf$core$datetime_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.date_formatters = (function (){var d2 = cljs.core.comp.call(null,thi.ng.strf.core.pad_left.call(null,(2),"0"),cljs.core.str);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"yyyy-mm-dd","yyyy-mm-dd",1870000488),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2], null),thi.ng.strf.core.date_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2," ",d2,":",d2,":",d2], null),thi.ng.strf.core.datetime_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"yyyymmdd-hhmmss","yyyymmdd-hhmmss",1691759860),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,d2,d2,"-",d2,d2,d2], null),thi.ng.strf.core.datetime_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"dd-mm-yyyy","dd-mm-yyyy",-705729643),((function (d2){
return (function (d){
var vec__30033 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__30033,(0),null);
var m = cljs.core.nth.call(null,vec__30033,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__30033,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),d__$1,m,y);
});})(d2))
,new cljs.core.Keyword(null,"mm-dd-yyyy","mm-dd-yyyy",-911118576),((function (d2){
return (function (d){
var vec__30036 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__30036,(0),null);
var m = cljs.core.nth.call(null,vec__30036,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__30036,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),m,d__$1,y);
});})(d2))
,new cljs.core.Keyword(null,"dd-mm-yy","dd-mm-yy",-664945286),((function (d2){
return (function (d){
var vec__30039 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__30039,(0),null);
var m = cljs.core.nth.call(null,vec__30039,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__30039,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.call(null,d2,((function (vec__30039,y,m,d__$1,d2){
return (function (p1__30032_SHARP_){
return cljs.core.mod.call(null,p1__30032_SHARP_,(100));
});})(vec__30039,y,m,d__$1,d2))
)], null),d__$1,m,y);
});})(d2))
,new cljs.core.Keyword(null,"hh-mm-ss","hh-mm-ss",1000840174),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields.call(null,d));
});})(d2))
], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var args30042 = [];
var len__27051__auto___30045 = arguments.length;
var i__27052__auto___30046 = (0);
while(true){
if((i__27052__auto___30046 < len__27051__auto___30045)){
args30042.push((arguments[i__27052__auto___30046]));

var G__30047 = (i__27052__auto___30046 + (1));
i__27052__auto___30046 = G__30047;
continue;
} else {
}
break;
}

var G__30044 = args30042.length;
switch (G__30044) {
case 1:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30042.length)].join('')));

}
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
return thi.ng.strf.core.date_formatters.call(null,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629)).call(null,d);
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,d){
if(cljs.core.fn_QMARK_.call(null,fmt)){
return fmt.call(null,d);
} else {
return thi.ng.strf.core.date_formatters.call(null,fmt).call(null,d);
}
});

thi.ng.strf.core.format_date.cljs$lang$maxFixedArity = 2;

thi.ng.strf.core.now = (function thi$ng$strf$core$now(){
return (new Date());
});
thi.ng.strf.core.timestamp = (function thi$ng$strf$core$timestamp(){
return (new Date()).getTime();
});
thi.ng.strf.core.format_16bit_hex = thi.ng.strf.core.pad_left.call(null,(4),"0");
thi.ng.strf.core.rand_bits = (function thi$ng$strf$core$rand_bits(bits){
return thi.ng.strf.core.int$.call(null,(cljs.core.rand.call(null) * ((1) << bits)));
});
thi.ng.strf.core.rand_bits_hex = (function thi$ng$strf$core$rand_bits_hex(bits){
return thi.ng.strf.core.pad_left.call(null,Math.ceil((bits / (4))),"0").call(null,thi.ng.strf.core.rand_bits.call(null,bits).toString((16)));
});
thi.ng.strf.core.rand_16bits_hex = (function thi$ng$strf$core$rand_16bits_hex(){
return thi.ng.strf.core.format_16bit_hex.call(null,cljs.core.rand_int.call(null,(65536)).toString((16)));
});
thi.ng.strf.core.new_uuid = (function thi$ng$strf$core$new_uuid(){
return [cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.format_16bit_hex.call(null,((thi.ng.strf.core.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16)))),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.format_16bit_hex.call(null,((thi.ng.strf.core.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16)))),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null))].join('');
});
thi.ng.strf.core.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.strf.core.as_str = (function thi$ng$strf$core$as_str(x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
});
thi.ng.strf.core.escape_html = (function thi$ng$strf$core$escape_html(x){
return clojure.string.escape.call(null,thi.ng.strf.core.as_str.call(null,x),thi.ng.strf.core.html_entities);
});

//# sourceMappingURL=core.js.map?rel=1518788517446