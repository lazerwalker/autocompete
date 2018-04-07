// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.query');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('botnik.util');
goog.require('botnik.data');
goog.require('botnik.tree');
goog.require('botnik.iframe');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
(window["DEBUG"] = false);
if(typeof botnik.query.SOURCES !== 'undefined'){
} else {
botnik.query.SOURCES = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof botnik.query.TREES !== 'undefined'){
} else {
botnik.query.TREES = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof botnik.query.MARKOV_QMARK_ !== 'undefined'){
} else {
botnik.query.MARKOV_QMARK_ = cljs.core.atom.call(null,false);
}
botnik.query.get_pos = (function botnik$query$get_pos(col,f){
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([null,"",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),cljs.core.List.EMPTY], true).call(null,col))){
return f.call(null,({"POS": []}));
} else {
return get_json([cljs.core.str(API_SERVER),cljs.core.str("/nlp/pos?s="),cljs.core.str(escape(((typeof col === 'string')?col:clojure.string.join.call(null," ",col))))].join(''),(function (o){
return f.call(null,o);
}));
}
});
botnik.query.get_source = (function botnik$query$get_source(id,f){
return get_text([cljs.core.str(botnik.data.API_SERVER),cljs.core.str("/sources/get?id="),cljs.core.str(id),cljs.core.str(".POSOURCE")].join(''),f);
});
botnik.query.multi_get = (function botnik$query$multi_get(col,f){
var rs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var needed = cljs.core.set.call(null,cljs.core.keys.call(null,col));
return cljs.core.dorun.call(null,(function (){var iter__26756__auto__ = ((function (rs,needed){
return (function botnik$query$multi_get_$_iter__27348(s__27349){
return (new cljs.core.LazySeq(null,((function (rs,needed){
return (function (){
var s__27349__$1 = s__27349;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27349__$1);
if(temp__4657__auto__){
var s__27349__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27349__$2)){
var c__26754__auto__ = cljs.core.chunk_first.call(null,s__27349__$2);
var size__26755__auto__ = cljs.core.count.call(null,c__26754__auto__);
var b__27351 = cljs.core.chunk_buffer.call(null,size__26755__auto__);
if((function (){var i__27350 = (0);
while(true){
if((i__27350 < size__26755__auto__)){
var vec__27358 = cljs.core._nth.call(null,c__26754__auto__,i__27350);
var k = cljs.core.nth.call(null,vec__27358,(0),null);
var url = cljs.core.nth.call(null,vec__27358,(1),null);
cljs.core.chunk_append.call(null,b__27351,get_text(url,((function (i__27350,vec__27358,k,url,c__26754__auto__,size__26755__auto__,b__27351,s__27349__$2,temp__4657__auto__,rs,needed){
return (function (o){
cljs.core.swap_BANG_.call(null,rs,cljs.core.assoc,k,o);

if(cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rs))),needed)){
return f.call(null,cljs.core.deref.call(null,rs));
} else {
return null;
}
});})(i__27350,vec__27358,k,url,c__26754__auto__,size__26755__auto__,b__27351,s__27349__$2,temp__4657__auto__,rs,needed))
));

var G__27364 = (i__27350 + (1));
i__27350 = G__27364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27351),botnik$query$multi_get_$_iter__27348.call(null,cljs.core.chunk_rest.call(null,s__27349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27351),null);
}
} else {
var vec__27361 = cljs.core.first.call(null,s__27349__$2);
var k = cljs.core.nth.call(null,vec__27361,(0),null);
var url = cljs.core.nth.call(null,vec__27361,(1),null);
return cljs.core.cons.call(null,get_text(url,((function (vec__27361,k,url,s__27349__$2,temp__4657__auto__,rs,needed){
return (function (o){
cljs.core.swap_BANG_.call(null,rs,cljs.core.assoc,k,o);

if(cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rs))),needed)){
return f.call(null,cljs.core.deref.call(null,rs));
} else {
return null;
}
});})(vec__27361,k,url,s__27349__$2,temp__4657__auto__,rs,needed))
),botnik$query$multi_get_$_iter__27348.call(null,cljs.core.rest.call(null,s__27349__$2)));
}
} else {
return null;
}
break;
}
});})(rs,needed))
,null,null));
});})(rs,needed))
;
return iter__26756__auto__.call(null,col);
})());
});
botnik.query.multi_pass = (function botnik$query$multi_pass(tree_atom,id,f){
return botnik.query.multi_get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"meta","meta",1499536964),[cljs.core.str(botnik.data.API_SERVER),cljs.core.str("/sources/list?id="),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"posn4","posn4",-1062772108),[cljs.core.str(botnik.data.API_SERVER),cljs.core.str("/sources/get?id="),cljs.core.str(id),cljs.core.str(".POSN4")].join(''),new cljs.core.Keyword(null,"n4","n4",943049353),[cljs.core.str(botnik.data.API_SERVER),cljs.core.str("/sources/get?id="),cljs.core.str(id),cljs.core.str(".N4")].join('')], null),(function (m){
var cnt = new cljs.core.Keyword(null,"source-count","source-count",594558220).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.deref.call(null,tree_atom)));
var info = JSON.parse(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(m));
var source_name = (info["name"]);
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sources","by-id","sources/by-id",160449323),id,new cljs.core.Keyword(null,"name","name",1843675177)], null),source_name);

cljs.core.swap_BANG_.call(null,botnik.data.SOURCENAME,((function (cnt,info,source_name){
return (function (p1__27365_SHARP_){
return [cljs.core.str(p1__27365_SHARP_),cljs.core.str(" "),cljs.core.str(source_name)].join('');
});})(cnt,info,source_name))
);

document.title = [cljs.core.str("Botnik - "),cljs.core.str(cljs.core.deref.call(null,botnik.data.SOURCENAME))].join('');

var tree = botnik.tree.posn_collate.call(null,cljs.core.deref.call(null,tree_atom),new cljs.core.Keyword(null,"posn4","posn4",-1062772108).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"n4","n4",943049353).cljs$core$IFn$_invoke$arity$1(m));
var tree__$1 = cljs.core.with_meta.call(null,tree,cljs.core.assoc.call(null,cljs.core.meta.call(null,tree),new cljs.core.Keyword(null,"source-count","source-count",594558220),(cnt + (1))));
return f.call(null,tree__$1);
}));
});
botnik.query.rand_words = (function botnik$query$rand_words(var_args){
var args27366 = [];
var len__27051__auto___27369 = arguments.length;
var i__27052__auto___27370 = (0);
while(true){
if((i__27052__auto___27370 < len__27051__auto___27369)){
args27366.push((arguments[i__27052__auto___27370]));

var G__27371 = (i__27052__auto___27370 + (1));
i__27052__auto___27370 = G__27371;
continue;
} else {
}
break;
}

var G__27368 = args27366.length;
switch (G__27368) {
case 2:
return botnik.query.rand_words.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return botnik.query.rand_words.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27366.length)].join('')));

}
});

botnik.query.rand_words.cljs$core$IFn$_invoke$arity$2 = (function (tree,n){
return cljs.core.take.call(null,n,cljs.core.shuffle.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"markov","markov",-185451008).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tree)))));
});

botnik.query.rand_words.cljs$core$IFn$_invoke$arity$3 = (function (tree,n,token){
return cljs.core.take.call(null,n,cljs.core.shuffle.call(null,cljs.core.map.call(null,cljs.core.first,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.get.call(null,tree,token))))));
});

botnik.query.rand_words.cljs$lang$maxFixedArity = 3;

botnik.query.add_teir = (function botnik$query$add_teir(col,n){
return cljs.core.map.call(null,(function (v){
return cljs.core.update.call(null,v,(1),(function (p1__27373_SHARP_){
return (p1__27373_SHARP_ + n);
}));
}),col);
});
botnik.query.weight_mult = (function botnik$query$weight_mult(col,n){
return cljs.core.map.call(null,(function (v){
return cljs.core.update.call(null,v,(1),(function (p1__27374_SHARP_){
return (p1__27374_SHARP_ * n);
}));
}),col);
});
botnik.query.query = (function botnik$query$query(f,s,id,limit){
return botnik.query.get_pos.call(null,cljs.core.take_last.call(null,(7),clojure.string.split.call(null,s," ")),(function (o){
var tree = cljs.core.get.call(null,cljs.core.deref.call(null,botnik.query.TREES),id);
var POS = (o["POS"]);
var WORDS = (o["words"]);
var results = (function (){var iter__26756__auto__ = ((function (tree,POS,WORDS){
return (function botnik$query$query_$_iter__27385(s__27386){
return (new cljs.core.LazySeq(null,((function (tree,POS,WORDS){
return (function (){
var s__27386__$1 = s__27386;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27386__$1);
if(temp__4657__auto__){
var s__27386__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27386__$2)){
var c__26754__auto__ = cljs.core.chunk_first.call(null,s__27386__$2);
var size__26755__auto__ = cljs.core.count.call(null,c__26754__auto__);
var b__27388 = cljs.core.chunk_buffer.call(null,size__26755__auto__);
if((function (){var i__27387 = (0);
while(true){
if((i__27387 < size__26755__auto__)){
var N = cljs.core._nth.call(null,c__26754__auto__,i__27387);
cljs.core.chunk_append.call(null,b__27388,botnik.tree.pos_query.call(null,tree,N,POS));

var G__27393 = (i__27387 + (1));
i__27387 = G__27393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27388),botnik$query$query_$_iter__27385.call(null,cljs.core.chunk_rest.call(null,s__27386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27388),null);
}
} else {
var N = cljs.core.first.call(null,s__27386__$2);
return cljs.core.cons.call(null,botnik.tree.pos_query.call(null,tree,N,POS),botnik$query$query_$_iter__27385.call(null,cljs.core.rest.call(null,s__27386__$2)));
}
} else {
return null;
}
break;
}
});})(tree,POS,WORDS))
,null,null));
});})(tree,POS,WORDS))
;
return iter__26756__auto__.call(null,cljs.core.range.call(null,(3),(5)));
})();
var markov_results = (function (){var iter__26756__auto__ = ((function (tree,POS,WORDS,results){
return (function botnik$query$query_$_iter__27389(s__27390){
return (new cljs.core.LazySeq(null,((function (tree,POS,WORDS,results){
return (function (){
var s__27390__$1 = s__27390;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27390__$1);
if(temp__4657__auto__){
var s__27390__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27390__$2)){
var c__26754__auto__ = cljs.core.chunk_first.call(null,s__27390__$2);
var size__26755__auto__ = cljs.core.count.call(null,c__26754__auto__);
var b__27392 = cljs.core.chunk_buffer.call(null,size__26755__auto__);
if((function (){var i__27391 = (0);
while(true){
if((i__27391 < size__26755__auto__)){
var N = cljs.core._nth.call(null,c__26754__auto__,i__27391);
cljs.core.chunk_append.call(null,b__27392,botnik.tree.query.call(null,new cljs.core.Keyword(null,"markov","markov",-185451008).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tree)),N,WORDS));

var G__27394 = (i__27391 + (1));
i__27391 = G__27394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27392),botnik$query$query_$_iter__27389.call(null,cljs.core.chunk_rest.call(null,s__27390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27392),null);
}
} else {
var N = cljs.core.first.call(null,s__27390__$2);
return cljs.core.cons.call(null,botnik.tree.query.call(null,new cljs.core.Keyword(null,"markov","markov",-185451008).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tree)),N,WORDS),botnik$query$query_$_iter__27389.call(null,cljs.core.rest.call(null,s__27390__$2)));
}
} else {
return null;
}
break;
}
});})(tree,POS,WORDS,results))
,null,null));
});})(tree,POS,WORDS,results))
;
return iter__26756__auto__.call(null,cljs.core.range.call(null,(2),(5)));
})();
var arranged = cljs.core.concat.call(null,(new cljs.core.LazySeq(null,((function (tree,POS,WORDS,results,markov_results){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [botnik.query.weight_mult.call(null,cljs.core.take.call(null,(35),new cljs.core.Keyword(null,"baseline","baseline",1151033280).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tree))),(1))], null);
});})(tree,POS,WORDS,results,markov_results))
,null,null)),(new cljs.core.LazySeq(null,((function (tree,POS,WORDS,results,markov_results){
return (function (){
return cljs.core.map.call(null,botnik.query.add_teir,results,cljs.core.range.call(null,(1),(3)));
});})(tree,POS,WORDS,results,markov_results))
,null,null)),(new cljs.core.LazySeq(null,((function (tree,POS,WORDS,results,markov_results){
return (function (){
return cljs.core.map.call(null,botnik.query.add_teir,markov_results,cljs.core.range.call(null,(4),(7)));
});})(tree,POS,WORDS,results,markov_results))
,null,null)));
var weighted = arranged;
var combined = cljs.core.reverse.call(null,cljs.core.remove.call(null,((function (tree,POS,WORDS,results,markov_results,arranged,weighted){
return (function (p1__27375_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["",null,"!",null,"-",null,"?",null,".",null,";",null,",",null], null), null).call(null,cljs.core.first.call(null,p1__27375_SHARP_));
});})(tree,POS,WORDS,results,markov_results,arranged,weighted))
,cljs.core.sort_by.call(null,cljs.core.last,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY).call(null,weighted))));
console.log(o);

botnik.iframe.sendLatest.call(null);

console.log(cljs.core.clj__GT_js.call(null,weighted));

if(cljs.core.truth_(DEBUG)){
cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.prn,((function (tree,POS,WORDS,results,markov_results,arranged,weighted,combined){
return (function (p1__27376_SHARP_){
return cljs.core.map.call(null,cljs.core.first,p1__27376_SHARP_);
});})(tree,POS,WORDS,results,markov_results,arranged,weighted,combined))
),weighted);
} else {
}

return f.call(null,cljs.core.with_meta.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,limit,combined)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)));
}));
});
botnik.query.suggest = (function botnik$query$suggest(id,s,f){
var temp__4655__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,botnik.query.TREES),id);
if(cljs.core.truth_(temp__4655__auto__)){
var tree = temp__4655__auto__;
return botnik.query.query.call(null,f,s,id,(30));
} else {
var new_tree = cljs.core.atom.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-count","source-count",594558220),(0)], null)));
cljs.core.prn.call(null,new cljs.core.Symbol(null,"loading","loading",903481338,null),id);

return botnik.query.multi_pass.call(null,new_tree,id,((function (new_tree,temp__4655__auto__){
return (function (tree){
cljs.core.reset_BANG_.call(null,new_tree,tree);

cljs.core.swap_BANG_.call(null,botnik.query.TREES,cljs.core.assoc,id,botnik.tree.score.call(null,tree));

return botnik.query.query.call(null,f,s,id,(30));
});})(new_tree,temp__4655__auto__))
);
}
});

//# sourceMappingURL=query.js.map?rel=1519138424352