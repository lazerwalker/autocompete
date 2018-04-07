// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.util');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('botnik.data');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * @param {...*} var_args
 */
botnik.util.log = (function() { 
var botnik$util$log__delegate = function (args){
return console.log(cljs.core.into_array.call(null,args));
};
var botnik$util$log = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29543__i = 0, G__29543__a = new Array(arguments.length -  0);
while (G__29543__i < G__29543__a.length) {G__29543__a[G__29543__i] = arguments[G__29543__i + 0]; ++G__29543__i;}
  args = new cljs.core.IndexedSeq(G__29543__a,0);
} 
return botnik$util$log__delegate.call(this,args);};
botnik$util$log.cljs$lang$maxFixedArity = 0;
botnik$util$log.cljs$lang$applyTo = (function (arglist__29544){
var args = cljs.core.seq(arglist__29544);
return botnik$util$log__delegate(args);
});
botnik$util$log.cljs$core$IFn$_invoke$arity$variadic = botnik$util$log__delegate;
return botnik$util$log;
})()
;
botnik.util.mobile_QMARK_ = (function botnik$util$mobile_QMARK_(){
return cljs.core.not_EQ_.call(null,window.orientation,null);
});
botnik.util.mutate_in_BANG_ = (function botnik$util$mutate_in_BANG_(var_args){
var args__27058__auto__ = [];
var len__27051__auto___29548 = arguments.length;
var i__27052__auto___29549 = (0);
while(true){
if((i__27052__auto___29549 < len__27051__auto___29548)){
args__27058__auto__.push((arguments[i__27052__auto___29549]));

var G__29550 = (i__27052__auto___29549 + (1));
i__27052__auto___29549 = G__29550;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((2) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((2)),(0),null)):null);
return botnik.util.mutate_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27059__auto__);
});

botnik.util.mutate_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,f,shards){
return om.next.transact_BANG_.call(null,cljs.core.deref.call(null,botnik.data.RECONCILER),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__26810__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("std","update-in","std/update-in",-1445631082,null)),(function (){var x__26810__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"fn","fn",-1175266204),f], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),shards)))));
});

botnik.util.mutate_in_BANG_.cljs$lang$maxFixedArity = (2);

botnik.util.mutate_in_BANG_.cljs$lang$applyTo = (function (seq29545){
var G__29546 = cljs.core.first.call(null,seq29545);
var seq29545__$1 = cljs.core.next.call(null,seq29545);
var G__29547 = cljs.core.first.call(null,seq29545__$1);
var seq29545__$2 = cljs.core.next.call(null,seq29545__$1);
return botnik.util.mutate_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29546,G__29547,seq29545__$2);
});

botnik.util.mutate_val_BANG_ = (function botnik$util$mutate_val_BANG_(var_args){
var args__27058__auto__ = [];
var len__27051__auto___29554 = arguments.length;
var i__27052__auto___29555 = (0);
while(true){
if((i__27052__auto___29555 < len__27051__auto___29554)){
args__27058__auto__.push((arguments[i__27052__auto___29555]));

var G__29556 = (i__27052__auto___29555 + (1));
i__27052__auto___29555 = G__29556;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((2) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((2)),(0),null)):null);
return botnik.util.mutate_val_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27059__auto__);
});

botnik.util.mutate_val_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,f,shards){
return om.next.transact_BANG_.call(null,cljs.core.deref.call(null,botnik.data.RECONCILER),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__26810__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("std","update-in","std/update-in",-1445631082,null)),(function (){var x__26810__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return cljs.core.identity.call(null,f);
})], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),shards)))));
});

botnik.util.mutate_val_BANG_.cljs$lang$maxFixedArity = (2);

botnik.util.mutate_val_BANG_.cljs$lang$applyTo = (function (seq29551){
var G__29552 = cljs.core.first.call(null,seq29551);
var seq29551__$1 = cljs.core.next.call(null,seq29551);
var G__29553 = cljs.core.first.call(null,seq29551__$1);
var seq29551__$2 = cljs.core.next.call(null,seq29551__$1);
return botnik.util.mutate_val_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29552,G__29553,seq29551__$2);
});

botnik.util.pretty = (function botnik$util$pretty(o){
var sb__26962__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29559_29561 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29560_29562 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29559_29561,_STAR_print_fn_STAR_29560_29562,sb__26962__auto__){
return (function (x__26963__auto__){
return sb__26962__auto__.append(x__26963__auto__);
});})(_STAR_print_newline_STAR_29559_29561,_STAR_print_fn_STAR_29560_29562,sb__26962__auto__))
;

try{cljs.pprint.pprint.call(null,o);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29560_29562;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29559_29561;
}
return [cljs.core.str(sb__26962__auto__)].join('');
});
botnik.util.px = (function botnik$util$px(s){
return [cljs.core.str(s),cljs.core.str("px")].join('');
});
botnik.util.by_id = (function botnik$util$by_id(s){
return document.getElementById(s);
});
botnik.util.keymap = (function botnik$util$keymap(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29567){
var vec__29568 = p__29567;
var k = cljs.core.nth.call(null,vec__29568,(0),null);
var v = cljs.core.nth.call(null,vec__29568,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),m));
});
botnik.util.in_QMARK_ = (function botnik$util$in_QMARK_(col,v){
return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__29571_SHARP_){
return cljs.core._EQ_.call(null,p1__29571_SHARP_,v);
}),col));
});
botnik.util.vec_remove = (function botnik$util$vec_remove(coll,pos){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),pos),cljs.core.subvec.call(null,coll,(pos + (1)))));
});
botnik.util.style_BANG_ = (function botnik$util$style_BANG_(el,k,v){
return ((el["style"])[cljs.core.name.call(null,k)] = v);
});
botnik.util.draggable = (function botnik$util$draggable(var_args){
var args29572 = [];
var len__27051__auto___29579 = arguments.length;
var i__27052__auto___29580 = (0);
while(true){
if((i__27052__auto___29580 < len__27051__auto___29579)){
args29572.push((arguments[i__27052__auto___29580]));

var G__29581 = (i__27052__auto___29580 + (1));
i__27052__auto___29580 = G__29581;
continue;
} else {
}
break;
}

var G__29574 = args29572.length;
switch (G__29574) {
case 2:
return botnik.util.draggable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return botnik.util.draggable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29572.length)].join('')));

}
});

botnik.util.draggable.cljs$core$IFn$_invoke$arity$2 = (function (el,fs){
return botnik.util.draggable.call(null,el,fs,({}));
});

botnik.util.draggable.cljs$core$IFn$_invoke$arity$3 = (function (el,fs,opts){
var ham = (new Hammer(el,opts));
cljs.core.dorun.call(null,cljs.core.map.call(null,((function (ham){
return (function (p__29575){
var vec__29576 = p__29575;
var k = cljs.core.nth.call(null,vec__29576,(0),null);
var v = cljs.core.nth.call(null,vec__29576,(1),null);
return ham.on(cljs.core.name.call(null,k),v);
});})(ham))
,fs));

return ham;
});

botnik.util.draggable.cljs$lang$maxFixedArity = 3;

botnik.util.capitalize_words = (function botnik$util$capitalize_words(s){
return clojure.string.join.call(null,cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/\b/)));
});
botnik.util.single_word_QMARK_ = (function botnik$util$single_word_QMARK_(s){
return cljs.core._EQ_.call(null,(1),s.split(" ").length);
});
botnik.util.word_split = (function botnik$util$word_split(s){
return cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["",null], null), null),clojure.string.split.call(null,s,/[ ]+/));
});
botnik.util.vec_insert = (function botnik$util$vec_insert(col,idx,v){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,idx,col),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),cljs.core.drop.call(null,idx,col)));
});
botnik.util.url_params = (function botnik$util$url_params(){
return cljs.core.js__GT_clj.call(null,parse_query_string(location.search.substr((1))));
});
botnik.util.action = (function botnik$util$action(o){
return post_json([cljs.core.str(API_SERVER),cljs.core.str("/action")].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"session","session",1008279103),botnik.data.session_id,new cljs.core.Keyword(null,"agent","agent",-766455027),navigator.userAgent,new cljs.core.Keyword(null,"sources","sources",-321166424),clojure.string.split.call(null,cljs.core.get.call(null,botnik.util.url_params.call(null),"source"),","),new cljs.core.Keyword(null,"data","data",-232669377),o], null)),(function (e){
return null;
}),(function (e){
return null;
}));
});

//# sourceMappingURL=util.js.map?rel=1518788515978