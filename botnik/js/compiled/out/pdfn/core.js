// Compiled by ClojureScript 1.9.229 {}
goog.provide('pdfn.core');
goog.require('cljs.core');
goog.require('clojure.walk');
pdfn.core.DISPATCHMAP = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
pdfn.core.METAMAP = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
pdfn.core.argsyms = cljs.core.vec.call(null,cljs.core.take.call(null,(100),cljs.core.repeatedly.call(null,cljs.core.partial.call(null,cljs.core.gensym,new cljs.core.Symbol(null,"_","_",-1201019570,null)))));
pdfn.core.and_STAR_ = cljs.core.every_pred;
/**
 * @param {...*} var_args
 */
pdfn.core.not_STAR_ = (function() { 
var pdfn$core$not_STAR___delegate = function (args){
return cljs.core.complement.call(null,cljs.core.apply.call(null,pdfn.core.and_STAR_,args));
};
var pdfn$core$not_STAR_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35271__i = 0, G__35271__a = new Array(arguments.length -  0);
while (G__35271__i < G__35271__a.length) {G__35271__a[G__35271__i] = arguments[G__35271__i + 0]; ++G__35271__i;}
  args = new cljs.core.IndexedSeq(G__35271__a,0);
} 
return pdfn$core$not_STAR___delegate.call(this,args);};
pdfn$core$not_STAR_.cljs$lang$maxFixedArity = 0;
pdfn$core$not_STAR_.cljs$lang$applyTo = (function (arglist__35272){
var args = cljs.core.seq(arglist__35272);
return pdfn$core$not_STAR___delegate(args);
});
pdfn$core$not_STAR_.cljs$core$IFn$_invoke$arity$variadic = pdfn$core$not_STAR___delegate;
return pdfn$core$not_STAR_;
})()
;
/**
 * @param {...*} var_args
 */
pdfn.core.or_STAR_ = (function() { 
var pdfn$core$or_STAR___delegate = function (args){
return (function (v){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,(function (p1__35273_SHARP_){
return p1__35273_SHARP_.call(null,v);
}),args)));
});
};
var pdfn$core$or_STAR_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35274__i = 0, G__35274__a = new Array(arguments.length -  0);
while (G__35274__i < G__35274__a.length) {G__35274__a[G__35274__i] = arguments[G__35274__i + 0]; ++G__35274__i;}
  args = new cljs.core.IndexedSeq(G__35274__a,0);
} 
return pdfn$core$or_STAR___delegate.call(this,args);};
pdfn$core$or_STAR_.cljs$lang$maxFixedArity = 0;
pdfn$core$or_STAR_.cljs$lang$applyTo = (function (arglist__35275){
var args = cljs.core.seq(arglist__35275);
return pdfn$core$or_STAR___delegate(args);
});
pdfn$core$or_STAR_.cljs$core$IFn$_invoke$arity$variadic = pdfn$core$or_STAR___delegate;
return pdfn$core$or_STAR_;
})()
;
pdfn.core.is_STAR_ = (function pdfn$core$is_STAR_(v){
return (function (p1__35276_SHARP_){
return cljs.core._EQ_.call(null,v,p1__35276_SHARP_);
});
});
pdfn.core.opt = (function pdfn$core$opt(sym,kw){
return cljs.core.get.call(null,cljs.core.meta.call(null,sym),kw,cljs.core.get_in.call(null,cljs.core.deref.call(null,pdfn.core.METAMAP),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,kw], null)));
});
pdfn.core.HOST = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-def-sym","re-def-sym",271822191),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Keyword(null,"qualify-here","qualify-here",1615368416),(function (usym,env){
return cljs.core.symbol.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_.name()),cljs.core.str(new cljs.core.Symbol(null,"/","/",-1371932971,null)),cljs.core.str(usym)].join(''));
})], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-def-sym","re-def-sym",271822191),new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Keyword(null,"qualify-here","qualify-here",1615368416),(function (usym,env){
return cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))),cljs.core.str(new cljs.core.Symbol(null,"/","/",-1371932971,null)),cljs.core.str(usym)].join(''));
})], null)], null));
pdfn.core.hosted = (function pdfn$core$hosted(kw,env){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,pdfn.core.HOST),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)))?new cljs.core.Keyword(null,"cljs","cljs",1492417629):new cljs.core.Keyword(null,"clj","clj",-660495428)),kw], null));
});
pdfn.core.grid_get = (function pdfn$core$grid_get(var_args){
var args__27058__auto__ = [];
var len__27051__auto___35279 = arguments.length;
var i__27052__auto___35280 = (0);
while(true){
if((i__27052__auto___35280 < len__27051__auto___35279)){
args__27058__auto__.push((arguments[i__27052__auto___35280]));

var G__35281 = (i__27052__auto___35280 + (1));
i__27052__auto___35280 = G__35281;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((1) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((1)),(0),null)):null);
return pdfn.core.grid_get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27059__auto__);
});

pdfn.core.grid_get.cljs$core$IFn$_invoke$arity$variadic = (function (col,more){
return cljs.core.get_in.call(null,col,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cols","cols",-1914801295),more)));
});

pdfn.core.grid_get.cljs$lang$maxFixedArity = (1);

pdfn.core.grid_get.cljs$lang$applyTo = (function (seq35277){
var G__35278 = cljs.core.first.call(null,seq35277);
var seq35277__$1 = cljs.core.next.call(null,seq35277);
return pdfn.core.grid_get.cljs$core$IFn$_invoke$arity$variadic(G__35278,seq35277__$1);
});

pdfn.core.make_grid = (function pdfn$core$make_grid(data){
var vec__35286 = cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals,cljs.core.comp.call(null,cljs.core.count,cljs.core.ffirst)).call(null,cljs.core.reverse.call(null,data));
var ks = cljs.core.nth.call(null,vec__35286,(0),null);
var vs = cljs.core.nth.call(null,vec__35286,(1),null);
var cnt = cljs.core.nth.call(null,vec__35286,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"leafs","leafs",-1793817466),cljs.core.vec.call(null,vs),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.take.call(null,cnt,pdfn.core.argsyms),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.mapv.call(null,((function (vec__35286,ks,vs,cnt){
return (function (p1__35282_SHARP_){
return cljs.core.conj.call(null,cljs.core.mapv.call(null,((function (vec__35286,ks,vs,cnt){
return (function (c){
return cljs.core.get.call(null,c,p1__35282_SHARP_);
});})(vec__35286,ks,vs,cnt))
,ks),cljs.core.get.call(null,pdfn.core.argsyms,p1__35282_SHARP_));
});})(vec__35286,ks,vs,cnt))
,cljs.core.range.call(null,cnt))], null);
});
pdfn.core.score = (function pdfn$core$score(col){
var head = cljs.core.first.call(null,col);
var colp = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.butlast.call(null,col));
if(cljs.core.not.call(null,head)){
return (0);
} else {
return (((10) * ((cljs.core.get.call(null,cljs.core.frequencies.call(null,colp),head) - (1)) - cljs.core.count.call(null,colp))) - cljs.core.count.call(null,cljs.core.take_while.call(null,pdfn.core.not_STAR_.call(null,cljs.core.nil_QMARK_),col)));
}
});
pdfn.core.sort_grid = (function pdfn$core$sort_grid(grid,f){
return cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.vec.call(null,cljs.core.sort_by.call(null,f,new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(grid))));
});
pdfn.core.update_idxs = (function pdfn$core$update_idxs(col,idxs,f){
return cljs.core.reduce.call(null,(function (p1__35289_SHARP_,p2__35290_SHARP_){
return cljs.core.update_in.call(null,p1__35289_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__35290_SHARP_], null),f);
}),col,idxs);
});
pdfn.core.duplicate_idxs = (function pdfn$core$duplicate_idxs(col){
var res = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,(function (p1__35292_SHARP_,p2__35291_SHARP_){
if(cljs.core._EQ_.call(null,p2__35291_SHARP_,cljs.core.first.call(null,col))){
return p1__35292_SHARP_;
} else {
return null;
}
}),col));
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
pdfn.core.drop_idxs = (function pdfn$core$drop_idxs(col,idxs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pdfn.core","drop","pdfn.core/drop",1373068254),null], null), null),cljs.core.map_indexed.call(null,(function (p1__35293_SHARP_,p2__35294_SHARP_){
if(cljs.core.truth_(cljs.core.set.call(null,idxs).call(null,p1__35293_SHARP_))){
return new cljs.core.Keyword("pdfn.core","drop","pdfn.core/drop",1373068254);
} else {
return p2__35294_SHARP_;
}
}),col)));
});
pdfn.core.grid_drop_idxs = (function pdfn$core$grid_drop_idxs(g,idxs){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,g,new cljs.core.Keyword(null,"leafs","leafs",-1793817466),pdfn.core.drop_idxs.call(null,new cljs.core.Keyword(null,"leafs","leafs",-1793817466).cljs$core$IFn$_invoke$arity$1(g),idxs)),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.mapv.call(null,(function (p1__35295_SHARP_){
return pdfn.core.drop_idxs.call(null,p1__35295_SHARP_,idxs);
}),new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(g)));
});
pdfn.core.grid__GT_ast = (function pdfn$core$grid__GT_ast(_g){
if(cljs.core.empty_QMARK_.call(null,cljs.core.butlast.call(null,pdfn.core.grid_get.call(null,_g,(0))))){
return new cljs.core.Keyword("pdfn.core","nf","pdfn.core/nf",-929237202);
} else {
var g = pdfn.core.sort_grid.call(null,_g,pdfn.core.score);
var _leaf = cljs.core.get.call(null,new cljs.core.Keyword(null,"leafs","leafs",-1793817466).cljs$core$IFn$_invoke$arity$1(g),(0));
var leaf = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pdfn.core","body","pdfn.core/body",971925996),null], null), null).call(null,cljs.core.first.call(null,_leaf)))?cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.last.call(null,_leaf),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(g))):((cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,_leaf)))?(function (){var x__26810__auto__ = cljs.core.first.call(null,_leaf);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})():cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),_leaf)));
var dups = pdfn.core.duplicate_idxs.call(null,pdfn.core.grid_get.call(null,g,(0)));
if((pdfn.core.grid_get.call(null,g,(0),(0)) == null)){
return leaf;
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,dups))){
var conds = cljs.core.take_while.call(null,((function (g,_leaf,leaf,dups){
return (function (p1__35296_SHARP_){
return !((cljs.core.first.call(null,p1__35296_SHARP_) == null));
});})(g,_leaf,leaf,dups))
,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last)),new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(g)));
var fconds = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,conds)))?cljs.core.first.call(null,conds):cljs.core.cons.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),conds));
if(cljs.core.empty_QMARK_.call(null,conds)){
return leaf;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",1181717262,null),fconds,leaf,pdfn$core$grid__GT_ast.call(null,pdfn.core.grid_drop_idxs.call(null,g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))], null);
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.list,cljs.core.first),cljs.core.last).call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(g))),pdfn$core$grid__GT_ast.call(null,cljs.core.update_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(0)], null),((function (g,_leaf,leaf,dups){
return (function (p1__35297_SHARP_){
return pdfn.core.update_idxs.call(null,p1__35297_SHARP_,dups,((function (g,_leaf,leaf,dups){
return (function (_){
return null;
});})(g,_leaf,leaf,dups))
);
});})(g,_leaf,leaf,dups))
)),pdfn$core$grid__GT_ast.call(null,pdfn.core.grid_drop_idxs.call(null,g,dups))], null);

}
}
}
});
pdfn.core.ast__GT_code = (function pdfn$core$ast__GT_code(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return cljs.core.seq.call(null,clojure.walk.walk.call(null,pdfn$core$ast__GT_code,cljs.core.identity,cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pdfn.core","nf","pdfn.core/nf",-929237202),null], null), null),form))));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,form))){
return cljs.core.first.call(null,form);
} else {
return form;
}
} else {
return form;

}
}
});
pdfn.core.datatype_QMARK_ = (function pdfn$core$datatype_QMARK_(v){
return (cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)) || (cljs.core.map_QMARK_.call(null,v));
});
pdfn.core.symbol_walk = (function pdfn$core$symbol_walk(form,xform){
if((form instanceof cljs.core.Symbol)){
return cljs.core.get.call(null,xform,form,form);
} else {
if(cljs.core.truth_(pdfn.core.datatype_QMARK_.call(null,form))){
return clojure.walk.walk.call(null,(function (p1__35298_SHARP_){
return pdfn$core$symbol_walk.call(null,p1__35298_SHARP_,xform);
}),cljs.core.identity,form);
} else {
return form;

}
}
});
pdfn.core.user_meta = (function pdfn$core$user_meta(v,env){
var or__25976__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
var res = cljs.core.apply.call(null,cljs.core.dissoc,v,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"source","source",-433931539)], null));
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentVector.EMPTY,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),cljs.core.ffirst.call(null,res)], true, false),cljs.core.mapv.call(null,cljs.core.last,res),res);
}
});
pdfn.core.before_last = (function pdfn$core$before_last(col,v){
if(cljs.core.truth_(cljs.core.first.call(null,cljs.core.rest.call(null,col)))){
return cljs.core.flatten.call(null,cljs.core.juxt.call(null,cljs.core.butlast,(function (_){
return v;
}),cljs.core.last).call(null,col));
} else {
return cljs.core.cons.call(null,v,col);
}
});
pdfn.core.pdfn_sort = (function pdfn$core$pdfn_sort(m){
return cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.meta,cljs.core.first),m);
});
pdfn.core.defpdfn = (function pdfn$core$defpdfn(var_args){
var args__27058__auto__ = [];
var len__27051__auto___35303 = arguments.length;
var i__27052__auto___35304 = (0);
while(true){
if((i__27052__auto___35304 < len__27051__auto___35303)){
args__27058__auto__.push((arguments[i__27052__auto___35304]));

var G__35305 = (i__27052__auto___35304 + (1));
i__27052__auto___35304 = G__35305;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((3) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((3)),(0),null)):null);
return pdfn.core.defpdfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27059__auto__);
});

pdfn.core.defpdfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,more){
cljs.core.swap_BANG_.call(null,pdfn.core.DISPATCHMAP,cljs.core.dissoc,cljs.core.symbol.call(null,sym));

cljs.core.swap_BANG_.call(null,pdfn.core.METAMAP,cljs.core.assoc,cljs.core.symbol.call(null,sym),cljs.core.meta.call(null,sym));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__26810__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

pdfn.core.defpdfn.cljs$lang$maxFixedArity = (3);

pdfn.core.defpdfn.cljs$lang$applyTo = (function (seq35299){
var G__35300 = cljs.core.first.call(null,seq35299);
var seq35299__$1 = cljs.core.next.call(null,seq35299);
var G__35301 = cljs.core.first.call(null,seq35299__$1);
var seq35299__$2 = cljs.core.next.call(null,seq35299__$1);
var G__35302 = cljs.core.first.call(null,seq35299__$2);
var seq35299__$3 = cljs.core.next.call(null,seq35299__$2);
return pdfn.core.defpdfn.cljs$core$IFn$_invoke$arity$variadic(G__35300,G__35301,G__35302,seq35299__$3);
});


pdfn.core.defpdfn.cljs$lang$macro = true;
pdfn.core.pdfn = (function pdfn$core$pdfn(var_args){
var args__27058__auto__ = [];
var len__27051__auto___35326 = arguments.length;
var i__27052__auto___35327 = (0);
while(true){
if((i__27052__auto___35327 < len__27051__auto___35326)){
args__27058__auto__.push((arguments[i__27052__auto___35327]));

var G__35328 = (i__27052__auto___35327 + (1));
i__27052__auto___35327 = G__35328;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((3) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((3)),(0),null)):null);
return pdfn.core.pdfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27059__auto__);
});

pdfn.core.pdfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,more){
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.mapcat.call(null,(function (p__35315){
var vec__35316 = p__35315;
var seq__35317 = cljs.core.seq.call(null,vec__35316);
var first__35318 = cljs.core.first.call(null,seq__35317);
var seq__35317__$1 = cljs.core.next.call(null,seq__35317);
var args = first__35318;
var more__$1 = seq__35317__$1;
var vec__35319 = cljs.core.mapv.call(null,cljs.core.vec,cljs.core.juxt.call(null,cljs.core.remove,cljs.core.filter).call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Symbol(null,"&","&",-2144855648,null)),args));
var args__$1 = cljs.core.nth.call(null,vec__35319,(0),null);
var variadic = cljs.core.nth.call(null,vec__35319,(1),null);
var inline = pdfn.core.opt.call(null,sym,new cljs.core.Keyword(null,"inline","inline",1399884222));
var build_code = (cljs.core.truth_(pdfn.core.opt.call(null,sym,new cljs.core.Keyword(null,"defer-compile","defer-compile",862529118)))?true:cljs.core._conj.call(null,(function (){var x__26810__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),new cljs.core.Symbol("pdfn.core","compile!","pdfn.core/compile!",571095998,null)));
var vec__35322 = (((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,more__$1))) && (!(cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,more__$1)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,more__$1),cljs.core.rest.call(null,more__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,more__$1], null));
var spec = cljs.core.nth.call(null,vec__35322,(0),null);
var code = cljs.core.nth.call(null,vec__35322,(1),null);
var _preds = cljs.core.mapv.call(null,((function (vec__35319,args__$1,variadic,inline,build_code,vec__35322,spec,code,vec__35316,seq__35317,first__35318,seq__35317__$1,args,more__$1){
return (function (p1__35306_SHARP_){
return pdfn.core.user_meta.call(null,cljs.core.meta.call(null,p1__35306_SHARP_),_AMPERSAND_env);
});})(vec__35319,args__$1,variadic,inline,build_code,vec__35322,spec,code,vec__35316,seq__35317,first__35318,seq__35317__$1,args,more__$1))
,args__$1);
var unmeta_args = cljs.core.mapv.call(null,((function (vec__35319,args__$1,variadic,inline,build_code,vec__35322,spec,code,_preds,vec__35316,seq__35317,first__35318,seq__35317__$1,args,more__$1){
return (function (p1__35307_SHARP_){
return cljs.core.with_meta.call(null,p1__35307_SHARP_,null);
});})(vec__35319,args__$1,variadic,inline,build_code,vec__35322,spec,code,_preds,vec__35316,seq__35317,first__35318,seq__35317__$1,args,more__$1))
,args__$1);
var preds = cljs.core.mapv.call(null,((function (vec__35319,args__$1,variadic,inline,build_code,vec__35322,spec,code,_preds,unmeta_args,vec__35316,seq__35317,first__35318,seq__35317__$1,args,more__$1){
return (function (p1__35308_SHARP_,p2__35309_SHARP_){
var or__25976__auto__ = p1__35308_SHARP_;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return p2__35309_SHARP_;
}
});})(vec__35319,args__$1,variadic,inline,build_code,vec__35322,spec,code,_preds,unmeta_args,vec__35316,seq__35317,first__35318,seq__35317__$1,args,more__$1))
,cljs.core.map.call(null,((function (vec__35319,args__$1,variadic,inline,build_code,vec__35322,spec,code,_preds,unmeta_args,vec__35316,seq__35317,first__35318,seq__35317__$1,args,more__$1){
return (function (p1__35310_SHARP_){
return cljs.core.get.call(null,spec,p1__35310_SHARP_,null);
});})(vec__35319,args__$1,variadic,inline,build_code,vec__35322,spec,code,_preds,unmeta_args,vec__35316,seq__35317,first__35318,seq__35317__$1,args,more__$1))
,args__$1),_preds);
var usym = cljs.core.symbol.call(null,[cljs.core.str(sym),cljs.core.str(cljs.core.count.call(null,args__$1)),cljs.core.str(new cljs.core.Symbol(null,"_","_",-1201019570,null)),cljs.core.str(cljs.core.hash.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__26810__auto__ = preds;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())))))].join(''));
var stack = (function (){var or__25976__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,pdfn.core.DISPATCHMAP),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.count.call(null,args__$1)], null));
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var method_idx = (function (){var G__35325 = cljs.core.count.call(null,stack);
if(cljs.core.contains_QMARK_.call(null,stack,preds)){
return (G__35325 + (1));
} else {
return G__35325;
}
})();
cljs.core.swap_BANG_.call(null,pdfn.core.DISPATCHMAP,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.count.call(null,args__$1)], null),cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta.call(null,preds,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),method_idx,new cljs.core.Keyword(null,"variadic","variadic",882626057),cljs.core.first.call(null,variadic)], null)),((cljs.core.not.call(null,inline))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdfn.core","body","pdfn.core/body",971925996),usym], null):pdfn.core.symbol_walk.call(null,code,cljs.core.zipmap.call(null,unmeta_args,pdfn.core.argsyms)))], true, false));

if(cljs.core.truth_(inline)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__26810__auto__ = build_code;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__26810__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"declare","declare",654042991,null)),(function (){var x__26810__auto__ = usym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),(function (){var x__26810__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__26810__auto__ = pdfn.core.before_last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.Keyword(null,"&","&",509580121));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),(function (){var x__26810__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__26810__auto__ = pdfn.core.hosted.call(null,new cljs.core.Keyword(null,"re-def-sym","re-def-sym",271822191),_AMPERSAND_env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),(function (){var x__26810__auto__ = usym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),(function (){var x__26810__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn","fn",465265323,null)),(function (){var x__26810__auto__ = unmeta_args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),code)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),(function (){var x__26810__auto__ = build_code;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
}
}),((cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,more)))?more:(function (){var x__26810__auto__ = more;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
});

pdfn.core.pdfn.cljs$lang$maxFixedArity = (3);

pdfn.core.pdfn.cljs$lang$applyTo = (function (seq35311){
var G__35312 = cljs.core.first.call(null,seq35311);
var seq35311__$1 = cljs.core.next.call(null,seq35311);
var G__35313 = cljs.core.first.call(null,seq35311__$1);
var seq35311__$2 = cljs.core.next.call(null,seq35311__$1);
var G__35314 = cljs.core.first.call(null,seq35311__$2);
var seq35311__$3 = cljs.core.next.call(null,seq35311__$2);
return pdfn.core.pdfn.cljs$core$IFn$_invoke$arity$variadic(G__35312,G__35313,G__35314,seq35311__$3);
});


pdfn.core.pdfn.cljs$lang$macro = true;
pdfn.core.compile_BANG_ = (function pdfn$core$compile_BANG_(_AMPERSAND_form,_AMPERSAND_env,sym){
var variants = cljs.core.get.call(null,cljs.core.deref.call(null,pdfn.core.DISPATCHMAP),sym);
var stub_arity = (cljs.core.truth_(pdfn.core.opt.call(null,sym,new cljs.core.Keyword(null,"stub-arity","stub-arity",-1053044116)))?(cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,variants)) + (1)):(0));
var variants__$1 = cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.zipmap.call(null,cljs.core.range.call(null,stub_arity),cljs.core.repeat.call(null,new cljs.core.Keyword("pdfn.core","stub","pdfn.core/stub",333737406))),variants));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__26810__auto__ = pdfn.core.hosted.call(null,new cljs.core.Keyword(null,"re-def-sym","re-def-sym",271822191),_AMPERSAND_env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),(function (){var x__26810__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),(function (){var x__26810__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.map_indexed.call(null,((function (variants,stub_arity,variants__$1){
return (function (idx,p__35344){
var vec__35345 = p__35344;
var cnt = cljs.core.nth.call(null,vec__35345,(0),null);
var data = cljs.core.nth.call(null,vec__35345,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,(function (){var G__35348 = cljs.core.take.call(null,cnt,pdfn.core.argsyms);
if(cljs.core.truth_((function (){var or__25976__auto__ = cljs.core._EQ_.call(null,(idx + (1)),stub_arity);
if(or__25976__auto__){
return or__25976__auto__;
} else {
var and__25964__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword("pdfn.core","stub","pdfn.core/stub",333737406),data);
if(and__25964__auto__){
return cljs.core.comp.call(null,new cljs.core.Keyword(null,"variadic","variadic",882626057),cljs.core.meta,cljs.core.ffirst).call(null,data);
} else {
return and__25964__auto__;
}
}
})())){
return pdfn.core.before_last.call(null,G__35348,new cljs.core.Symbol(null,"&","&",-2144855648,null));
} else {
return G__35348;
}
})())], null),((!(cljs.core._EQ_.call(null,new cljs.core.Keyword("pdfn.core","stub","pdfn.core/stub",333737406),data)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdfn.core.ast__GT_code.call(null,pdfn.core.grid__GT_ast.call(null,pdfn.core.make_grid.call(null,pdfn.core.pdfn_sort.call(null,data))))], null):null));
});})(variants,stub_arity,variants__$1))
,variants__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
});

pdfn.core.compile_BANG_.cljs$lang$macro = true;
pdfn.core.benchmark = (function pdfn$core$benchmark(var_args){
var args__27058__auto__ = [];
var len__27051__auto___35354 = arguments.length;
var i__27052__auto___35355 = (0);
while(true){
if((i__27052__auto___35355 < len__27051__auto___35354)){
args__27058__auto__.push((arguments[i__27052__auto___35355]));

var G__35356 = (i__27052__auto___35355 + (1));
i__27052__auto___35355 = G__35356;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((3) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((3)),(0),null)):null);
return pdfn.core.benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27059__auto__);
});

pdfn.core.benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,code){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","time","cljs.core/time",-333131220,null)),(function (){var x__26810__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dotimes","cljs.core/dotimes",-1326291458,null)),(function (){var x__26810__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__35349__auto__","i__35349__auto__",-440958978,null)),(function (){var x__26810__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),code)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
});

pdfn.core.benchmark.cljs$lang$maxFixedArity = (3);

pdfn.core.benchmark.cljs$lang$applyTo = (function (seq35350){
var G__35351 = cljs.core.first.call(null,seq35350);
var seq35350__$1 = cljs.core.next.call(null,seq35350);
var G__35352 = cljs.core.first.call(null,seq35350__$1);
var seq35350__$2 = cljs.core.next.call(null,seq35350__$1);
var G__35353 = cljs.core.first.call(null,seq35350__$2);
var seq35350__$3 = cljs.core.next.call(null,seq35350__$2);
return pdfn.core.benchmark.cljs$core$IFn$_invoke$arity$variadic(G__35351,G__35352,G__35353,seq35350__$3);
});


pdfn.core.benchmark.cljs$lang$macro = true;
pdfn.core.ppexpand = (function pdfn$core$ppexpand(_AMPERSAND_form,_AMPERSAND_env,code){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pprint","write","pprint/write",-1987279760,null)),(function (){var x__26810__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","macroexpand-1","cljs.core/macroexpand-1",1326097868,null)),(function (){var x__26810__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__26810__auto__ = code;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pprint","code-dispatch","pprint/code-dispatch",-1442345029,null)))));
});

pdfn.core.ppexpand.cljs$lang$macro = true;
pdfn.core.inspect = (function pdfn$core$inspect(var_args){
var args__27058__auto__ = [];
var len__27051__auto___35363 = arguments.length;
var i__27052__auto___35364 = (0);
while(true){
if((i__27052__auto___35364 < len__27051__auto___35363)){
args__27058__auto__.push((arguments[i__27052__auto___35364]));

var G__35365 = (i__27052__auto___35364 + (1));
i__27052__auto___35364 = G__35365;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((3) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((3)),(0),null)):null);
return pdfn.core.inspect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27059__auto__);
});

pdfn.core.inspect.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,k){
var G__35362 = (((cljs.core.first.call(null,k) instanceof cljs.core.Keyword))?cljs.core.first.call(null,k).fqn:null);
switch (G__35362) {
case "methods":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pdfn.core","ppexpand","pdfn.core/ppexpand",1556119939,null)),(function (){var x__26810__auto__ = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__35362){
return (function (v){
return cljs.core.update_in.call(null,v,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),((function (G__35362){
return (function (p1__35357_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,pdfn.core.pdfn_sort.call(null,p1__35357_SHARP_));
});})(G__35362))
);
});})(G__35362))
),cljs.core.get.call(null,cljs.core.deref.call(null,pdfn.core.DISPATCHMAP),sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));

break;
case "ast":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pdfn.core","ppexpand","pdfn.core/ppexpand",1556119939,null)),(function (){var x__26810__auto__ = cljs.core.map.call(null,cljs.core.comp.call(null,pdfn.core.grid__GT_ast,pdfn.core.make_grid),cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,pdfn.core.DISPATCHMAP),sym)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));

break;
default:
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pdfn.core","ppexpand","pdfn.core/ppexpand",1556119939,null)),(function (){var x__26810__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pdfn.core","compile!","pdfn.core/compile!",571095998,null)),(function (){var x__26810__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})())));

}
});

pdfn.core.inspect.cljs$lang$maxFixedArity = (3);

pdfn.core.inspect.cljs$lang$applyTo = (function (seq35358){
var G__35359 = cljs.core.first.call(null,seq35358);
var seq35358__$1 = cljs.core.next.call(null,seq35358);
var G__35360 = cljs.core.first.call(null,seq35358__$1);
var seq35358__$2 = cljs.core.next.call(null,seq35358__$1);
var G__35361 = cljs.core.first.call(null,seq35358__$2);
var seq35358__$3 = cljs.core.next.call(null,seq35358__$2);
return pdfn.core.inspect.cljs$core$IFn$_invoke$arity$variadic(G__35359,G__35360,G__35361,seq35358__$3);
});


pdfn.core.inspect.cljs$lang$macro = true;

//# sourceMappingURL=core.js.map?rel=1518788552270