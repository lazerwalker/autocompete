// Compiled by ClojureScript 1.9.229 {}
goog.provide('hyper.tools');
goog.require('cljs.core');
cljs.core.list(new cljs.core.Symbol(null,"predicates","predicates",-2034033057,null));
hyper.tools._count = (function hyper$tools$_count(v){
if(cljs.core.array_QMARK_.call(null,v)){
return v.length;
} else {
try{return cljs.core.count.call(null,v);
}catch (e37096){if((e37096 instanceof Error)){
var e = e37096;
return (0);
} else {
throw e37096;

}
}}
});
hyper.tools.solo_QMARK_ = (function hyper$tools$solo_QMARK_(col){
return cljs.core._EQ_.call(null,(1),hyper.tools._count.call(null,col));
});
hyper.tools.duo_QMARK_ = (function hyper$tools$duo_QMARK_(col){
return cljs.core._EQ_.call(null,(2),hyper.tools._count.call(null,col));
});
hyper.tools.triplet_QMARK_ = (function hyper$tools$triplet_QMARK_(col){
return cljs.core._EQ_.call(null,(3),hyper.tools._count.call(null,col));
});
hyper.tools.quartet_QMARK_ = (function hyper$tools$quartet_QMARK_(col){
return cljs.core._EQ_.call(null,(4),hyper.tools._count.call(null,col));
});
hyper.tools.quintet_QMARK_ = (function hyper$tools$quintet_QMARK_(col){
return cljs.core._EQ_.call(null,(5),hyper.tools._count.call(null,col));
});
hyper.tools.multiple_QMARK_ = (function hyper$tools$multiple_QMARK_(col){
return ((1) < hyper.tools._count.call(null,col));
});
cljs.core.list(new cljs.core.Symbol(null,"composition","composition",-820237152,null));
hyper.tools._LT__STAR_ = cljs.core.comp;
hyper.tools.into_STAR_ = (function hyper$tools$into_STAR_(var_args){
var args__27058__auto__ = [];
var len__27051__auto___37099 = arguments.length;
var i__27052__auto___37100 = (0);
while(true){
if((i__27052__auto___37100 < len__27051__auto___37099)){
args__27058__auto__.push((arguments[i__27052__auto___37100]));

var G__37101 = (i__27052__auto___37100 + (1));
i__27052__auto___37100 = G__37101;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((1) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((1)),(0),null)):null);
return hyper.tools.into_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27059__auto__);
});

hyper.tools.into_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (col,more){
return cljs.core.into.call(null,col,cljs.core.apply.call(null,cljs.core.juxt,more));
});

hyper.tools.into_STAR_.cljs$lang$maxFixedArity = (1);

hyper.tools.into_STAR_.cljs$lang$applyTo = (function (seq37097){
var G__37098 = cljs.core.first.call(null,seq37097);
var seq37097__$1 = cljs.core.next.call(null,seq37097);
return hyper.tools.into_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__37098,seq37097__$1);
});

hyper.tools.and_STAR_ = cljs.core.every_pred;
/**
 * @param {...*} var_args
 */
hyper.tools.not_STAR_ = (function() { 
var hyper$tools$not_STAR___delegate = function (args){
return cljs.core.complement.call(null,cljs.core.apply.call(null,hyper.tools.and_STAR_,args));
};
var hyper$tools$not_STAR_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37102__i = 0, G__37102__a = new Array(arguments.length -  0);
while (G__37102__i < G__37102__a.length) {G__37102__a[G__37102__i] = arguments[G__37102__i + 0]; ++G__37102__i;}
  args = new cljs.core.IndexedSeq(G__37102__a,0);
} 
return hyper$tools$not_STAR___delegate.call(this,args);};
hyper$tools$not_STAR_.cljs$lang$maxFixedArity = 0;
hyper$tools$not_STAR_.cljs$lang$applyTo = (function (arglist__37103){
var args = cljs.core.seq(arglist__37103);
return hyper$tools$not_STAR___delegate(args);
});
hyper$tools$not_STAR_.cljs$core$IFn$_invoke$arity$variadic = hyper$tools$not_STAR___delegate;
return hyper$tools$not_STAR_;
})()
;
/**
 * @param {...*} var_args
 */
hyper.tools.or_STAR_ = (function() { 
var hyper$tools$or_STAR___delegate = function (args){
return (function (v){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,(function (p1__37104_SHARP_){
return p1__37104_SHARP_.call(null,v);
}),args)));
});
};
var hyper$tools$or_STAR_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37105__i = 0, G__37105__a = new Array(arguments.length -  0);
while (G__37105__i < G__37105__a.length) {G__37105__a[G__37105__i] = arguments[G__37105__i + 0]; ++G__37105__i;}
  args = new cljs.core.IndexedSeq(G__37105__a,0);
} 
return hyper$tools$or_STAR___delegate.call(this,args);};
hyper$tools$or_STAR_.cljs$lang$maxFixedArity = 0;
hyper$tools$or_STAR_.cljs$lang$applyTo = (function (arglist__37106){
var args = cljs.core.seq(arglist__37106);
return hyper$tools$or_STAR___delegate(args);
});
hyper$tools$or_STAR_.cljs$core$IFn$_invoke$arity$variadic = hyper$tools$or_STAR___delegate;
return hyper$tools$or_STAR_;
})()
;
hyper.tools.is_STAR_ = (function hyper$tools$is_STAR_(v){
return (function (p1__37107_SHARP_){
return cljs.core._EQ_.call(null,v,p1__37107_SHARP_);
});
});
cljs.core.list(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tricks","tricks",1037623216,null));
hyper.tools.combine = (function hyper$tools$combine(var_args){
var args__27058__auto__ = [];
var len__27051__auto___37109 = arguments.length;
var i__27052__auto___37110 = (0);
while(true){
if((i__27052__auto___37110 < len__27051__auto___37109)){
args__27058__auto__.push((arguments[i__27052__auto___37110]));

var G__37111 = (i__27052__auto___37110 + (1));
i__27052__auto___37110 = G__37111;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((0) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((0)),(0),null)):null);
return hyper.tools.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__27059__auto__);
});

hyper.tools.combine.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.apply.call(null,cljs.core.merge_with,hyper.tools.combine,maps);
});

hyper.tools.combine.cljs$lang$maxFixedArity = (0);

hyper.tools.combine.cljs$lang$applyTo = (function (seq37108){
return hyper.tools.combine.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37108));
});

hyper.tools.map_by = (function hyper$tools$map_by(k,col){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,k,cljs.core.identity),col));
});
hyper.tools.dissoc_in = (function hyper$tools$dissoc_in(m,p__37112){
var vec__37116 = p__37112;
var seq__37117 = cljs.core.seq.call(null,vec__37116);
var first__37118 = cljs.core.first.call(null,seq__37117);
var seq__37117__$1 = cljs.core.next.call(null,seq__37117);
var k = first__37118;
var ks = seq__37117__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__25964__auto__ = ks;
if(and__25964__auto__){
return hyper$tools$dissoc_in.call(null,m.call(null,k),ks);
} else {
return and__25964__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
hyper.tools.dissoc_all = (function hyper$tools$dissoc_all(d,col_ks){
return cljs.core.reduce.call(null,hyper.tools.dissoc_in,d,col_ks);
});
hyper.tools.dissoc_keys = (function hyper$tools$dissoc_keys(d,ks){
return cljs.core.reduce.call(null,cljs.core.dissoc,d,ks);
});
hyper.tools.insert = (function hyper$tools$insert(var_args){
var args__27058__auto__ = [];
var len__27051__auto___37122 = arguments.length;
var i__27052__auto___37123 = (0);
while(true){
if((i__27052__auto___37123 < len__27051__auto___37122)){
args__27058__auto__.push((arguments[i__27052__auto___37123]));

var G__37124 = (i__27052__auto___37123 + (1));
i__27052__auto___37123 = G__37124;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((2) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((2)),(0),null)):null);
return hyper.tools.insert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27059__auto__);
});

hyper.tools.insert.cljs$core$IFn$_invoke$arity$variadic = (function (vc,idx,more){
var p = cljs.core.subvec.call(null,vc,(0),idx);
var n = cljs.core.subvec.call(null,vc,idx,cljs.core.count.call(null,vc));
return cljs.core.vec.call(null,cljs.core.concat.call(null,p,more,n));
});

hyper.tools.insert.cljs$lang$maxFixedArity = (2);

hyper.tools.insert.cljs$lang$applyTo = (function (seq37119){
var G__37120 = cljs.core.first.call(null,seq37119);
var seq37119__$1 = cljs.core.next.call(null,seq37119);
var G__37121 = cljs.core.first.call(null,seq37119__$1);
var seq37119__$2 = cljs.core.next.call(null,seq37119__$1);
return hyper.tools.insert.cljs$core$IFn$_invoke$arity$variadic(G__37120,G__37121,seq37119__$2);
});

hyper.tools.slice = (function hyper$tools$slice(var_args){
var args37125 = [];
var len__27051__auto___37128 = arguments.length;
var i__27052__auto___37129 = (0);
while(true){
if((i__27052__auto___37129 < len__27051__auto___37128)){
args37125.push((arguments[i__27052__auto___37129]));

var G__37130 = (i__27052__auto___37129 + (1));
i__27052__auto___37129 = G__37130;
continue;
} else {
}
break;
}

var G__37127 = args37125.length;
switch (G__37127) {
case 2:
return hyper.tools.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyper.tools.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37125.length)].join('')));

}
});

hyper.tools.slice.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.subvec.call(null,a,(0),b);
});

hyper.tools.slice.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,a,(0),b),cljs.core.subvec.call(null,a,c,cljs.core.count.call(null,a))));
});

hyper.tools.slice.cljs$lang$maxFixedArity = 3;

hyper.tools.vec_dissoc = (function hyper$tools$vec_dissoc(var_args){
var args__27058__auto__ = [];
var len__27051__auto___37138 = arguments.length;
var i__27052__auto___37139 = (0);
while(true){
if((i__27052__auto___37139 < len__27051__auto___37138)){
args__27058__auto__.push((arguments[i__27052__auto___37139]));

var G__37140 = (i__27052__auto___37139 + (1));
i__27052__auto___37139 = G__37140;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((1) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((1)),(0),null)):null);
return hyper.tools.vec_dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27059__auto__);
});

hyper.tools.vec_dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (col,idxs){
return cljs.core.vec.call(null,(function (){var iter__26756__auto__ = (function hyper$tools$iter__37134(s__37135){
return (new cljs.core.LazySeq(null,(function (){
var s__37135__$1 = s__37135;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37135__$1);
if(temp__4657__auto__){
var s__37135__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37135__$2)){
var c__26754__auto__ = cljs.core.chunk_first.call(null,s__37135__$2);
var size__26755__auto__ = cljs.core.count.call(null,c__26754__auto__);
var b__37137 = cljs.core.chunk_buffer.call(null,size__26755__auto__);
if((function (){var i__37136 = (0);
while(true){
if((i__37136 < size__26755__auto__)){
var i = cljs.core._nth.call(null,c__26754__auto__,i__37136);
if(cljs.core.not.call(null,cljs.core.set.call(null,idxs).call(null,i))){
cljs.core.chunk_append.call(null,b__37137,cljs.core.get.call(null,col,i));

var G__37141 = (i__37136 + (1));
i__37136 = G__37141;
continue;
} else {
var G__37142 = (i__37136 + (1));
i__37136 = G__37142;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37137),hyper$tools$iter__37134.call(null,cljs.core.chunk_rest.call(null,s__37135__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37137),null);
}
} else {
var i = cljs.core.first.call(null,s__37135__$2);
if(cljs.core.not.call(null,cljs.core.set.call(null,idxs).call(null,i))){
return cljs.core.cons.call(null,cljs.core.get.call(null,col,i),hyper$tools$iter__37134.call(null,cljs.core.rest.call(null,s__37135__$2)));
} else {
var G__37143 = cljs.core.rest.call(null,s__37135__$2);
s__37135__$1 = G__37143;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26756__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,col)));
})());
});

hyper.tools.vec_dissoc.cljs$lang$maxFixedArity = (1);

hyper.tools.vec_dissoc.cljs$lang$applyTo = (function (seq37132){
var G__37133 = cljs.core.first.call(null,seq37132);
var seq37132__$1 = cljs.core.next.call(null,seq37132);
return hyper.tools.vec_dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37133,seq37132__$1);
});

hyper.tools.valid_idx = (function hyper$tools$valid_idx(col,n){
var x__26314__auto__ = (function (){var x__26307__auto__ = (0);
var y__26308__auto__ = n;
return ((x__26307__auto__ > y__26308__auto__) ? x__26307__auto__ : y__26308__auto__);
})();
var y__26315__auto__ = (cljs.core.count.call(null,col) - (1));
return ((x__26314__auto__ < y__26315__auto__) ? x__26314__auto__ : y__26315__auto__);
});
hyper.tools.vec_move = (function hyper$tools$vec_move(col,idx,offset){
var res = hyper.tools.vec_dissoc.call(null,col,idx);
var target = hyper.tools.valid_idx.call(null,col,(idx + offset));
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,res,(0),target),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,col,idx)], null),cljs.core.subvec.call(null,res,target,cljs.core.count.call(null,res))));
});
cljs.core.list(new cljs.core.Symbol(null,"iteration","iteration",551579478,null));
hyper.tools.indexed_iterate = (function hyper$tools$indexed_iterate(col,f){
var c = cljs.core.count.call(null,col);
var i = (0);
while(true){
if((i < c)){
f.call(null,i,(col[i]));

var G__37144 = (i + (1));
i = G__37144;
continue;
} else {
return null;
}
break;
}
});
cljs.core.list(new cljs.core.Symbol(null,"fancy","fancy",-1964044147,null));
hyper.tools.format_bytes = (function hyper$tools$format_bytes(n){
var ns = [cljs.core.str(n)].join('');
var ord = Math.ceil((cljs.core.count.call(null,ns) / (3)));
var res = (n * cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 5, [(1),(1),(2),.001,(3),.000001,(4),.000000001,(5),.000000000001], null),ord));
var suff = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 5, [(1),"b",(2),"Kb",(3),"Mb",(4),"gb",(5),"tb"], null),ord);
return [cljs.core.str((((res * (10)) | (0)) / (10))),cljs.core.str(""),cljs.core.str(suff)].join('');
});

//# sourceMappingURL=tools.js.map?rel=1518788556139