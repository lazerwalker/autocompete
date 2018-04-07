// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.tree');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
botnik.tree.tally = (function botnik$tree$tally(x){
if((x == null)){
return (1);
} else {
return (x + (1));
}
});
botnik.tree.word_frequence = (function botnik$tree$word_frequence(m,n){
var col = cljs.core.seq.call(null,m);
var total = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.last,col));
return cljs.core.map.call(null,((function (col,total){
return (function (v){
return cljs.core.update.call(null,v,(1),((function (col,total){
return (function (p1__35857_SHARP_){
return ((p1__35857_SHARP_ / total) * n);
});})(col,total))
);
});})(col,total))
,col);
});
botnik.tree.score_pos_words = (function botnik$tree$score_pos_words(col){
return cljs.core.update.call(null,col,new cljs.core.Keyword(null,"words","words",1924933001),(function (p1__35858_SHARP_){
return botnik.tree.word_frequence.call(null,p1__35858_SHARP_,new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(col));
}));
});
botnik.tree.frequence = (function botnik$tree$frequence(col){
var total = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,(function (p1__35859_SHARP_){
return new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__35859_SHARP_));
}),cljs.core.vals.call(null,col)));
return cljs.core.with_meta.call(null,cljs.core.reduce.call(null,((function (total){
return (function (m,p__35864){
var vec__35865 = p__35864;
var k = cljs.core.nth.call(null,vec__35865,(0),null);
var v = cljs.core.nth.call(null,vec__35865,(1),null);
if(!(cljs.core.map_QMARK_.call(null,v))){
return m;
} else {
return cljs.core.assoc.call(null,m,k,(function (){var fv = botnik$tree$frequence.call(null,v);
return cljs.core.with_meta.call(null,fv,botnik.tree.score_pos_words.call(null,cljs.core.assoc.call(null,cljs.core.meta.call(null,fv),new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)) / total))));
})());
}
});})(total))
,cljs.core.PersistentArrayMap.EMPTY,col),cljs.core.meta.call(null,col));
});
botnik.tree.insert = (function botnik$tree$insert(col,words){
var cnt = new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,words));
var tally = (cljs.core.truth_(cnt)?((function (cnt){
return (function (p1__35868_SHARP_){
return ((function (){var or__25976__auto__ = p1__35868_SHARP_;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return (0);
}
})() + cnt);
});})(cnt))
:botnik.tree.tally);
return cljs.core.reduce.call(null,((function (cnt,tally){
return (function (acc,v){
return cljs.core.update_in.call(null,acc,cljs.core.vec.call(null,v),((function (cnt,tally){
return (function (p1__35869_SHARP_){
return cljs.core.with_meta.call(null,(function (){var or__25976__auto__ = p1__35869_SHARP_;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.update.call(null,cljs.core.meta.call(null,p1__35869_SHARP_),new cljs.core.Keyword(null,"c","c",-1763192079),tally));
});})(cnt,tally))
);
});})(cnt,tally))
,col,(function (){var iter__26756__auto__ = ((function (cnt,tally){
return (function botnik$tree$insert_$_iter__35874(s__35875){
return (new cljs.core.LazySeq(null,((function (cnt,tally){
return (function (){
var s__35875__$1 = s__35875;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35875__$1);
if(temp__4657__auto__){
var s__35875__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35875__$2)){
var c__26754__auto__ = cljs.core.chunk_first.call(null,s__35875__$2);
var size__26755__auto__ = cljs.core.count.call(null,c__26754__auto__);
var b__35877 = cljs.core.chunk_buffer.call(null,size__26755__auto__);
if((function (){var i__35876 = (0);
while(true){
if((i__35876 < size__26755__auto__)){
var i = cljs.core._nth.call(null,c__26754__auto__,i__35876);
cljs.core.chunk_append.call(null,b__35877,cljs.core.take.call(null,i,words));

var G__35878 = (i__35876 + (1));
i__35876 = G__35878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35877),botnik$tree$insert_$_iter__35874.call(null,cljs.core.chunk_rest.call(null,s__35875__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35877),null);
}
} else {
var i = cljs.core.first.call(null,s__35875__$2);
return cljs.core.cons.call(null,cljs.core.take.call(null,i,words),botnik$tree$insert_$_iter__35874.call(null,cljs.core.rest.call(null,s__35875__$2)));
}
} else {
return null;
}
break;
}
});})(cnt,tally))
,null,null));
});})(cnt,tally))
;
return iter__26756__auto__.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,(1),(cljs.core.count.call(null,words) + (1)))));
})());
});
botnik.tree.collate = (function botnik$tree$collate(tokens,n){
return botnik.tree.frequence.call(null,cljs.core.reduce.call(null,botnik.tree.insert,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,n,(1),tokens)));
});
botnik.tree.pos_insert = (function botnik$tree$pos_insert(col,p__35881){
var vec__35893 = p__35881;
var words = cljs.core.nth.call(null,vec__35893,(0),null);
var parts = cljs.core.nth.call(null,vec__35893,(1),null);
var cnt = new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,words));
var tally = (cljs.core.truth_(cnt)?((function (cnt,vec__35893,words,parts){
return (function (p1__35879_SHARP_){
return ((function (){var or__25976__auto__ = p1__35879_SHARP_;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return (0);
}
})() + cnt);
});})(cnt,vec__35893,words,parts))
:botnik.tree.tally);
return cljs.core.reduce.call(null,((function (cnt,tally,vec__35893,words,parts){
return (function (acc,p__35896){
var vec__35897 = p__35896;
var ps = cljs.core.nth.call(null,vec__35897,(0),null);
var ws = cljs.core.nth.call(null,vec__35897,(1),null);
return cljs.core.update_in.call(null,acc,cljs.core.vec.call(null,ps),((function (vec__35897,ps,ws,cnt,tally,vec__35893,words,parts){
return (function (p1__35880_SHARP_){
return cljs.core.with_meta.call(null,(function (){var or__25976__auto__ = p1__35880_SHARP_;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.update_in.call(null,cljs.core.update.call(null,cljs.core.meta.call(null,p1__35880_SHARP_),new cljs.core.Keyword(null,"c","c",-1763192079),tally),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.last.call(null,ws)], null),tally));
});})(vec__35897,ps,ws,cnt,tally,vec__35893,words,parts))
);
});})(cnt,tally,vec__35893,words,parts))
,col,(function (){var iter__26756__auto__ = ((function (cnt,tally,vec__35893,words,parts){
return (function botnik$tree$pos_insert_$_iter__35900(s__35901){
return (new cljs.core.LazySeq(null,((function (cnt,tally,vec__35893,words,parts){
return (function (){
var s__35901__$1 = s__35901;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35901__$1);
if(temp__4657__auto__){
var s__35901__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35901__$2)){
var c__26754__auto__ = cljs.core.chunk_first.call(null,s__35901__$2);
var size__26755__auto__ = cljs.core.count.call(null,c__26754__auto__);
var b__35903 = cljs.core.chunk_buffer.call(null,size__26755__auto__);
if((function (){var i__35902 = (0);
while(true){
if((i__35902 < size__26755__auto__)){
var i = cljs.core._nth.call(null,c__26754__auto__,i__35902);
cljs.core.chunk_append.call(null,b__35903,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,i,parts),cljs.core.take.call(null,i,words)], null));

var G__35904 = (i__35902 + (1));
i__35902 = G__35904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35903),botnik$tree$pos_insert_$_iter__35900.call(null,cljs.core.chunk_rest.call(null,s__35901__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35903),null);
}
} else {
var i = cljs.core.first.call(null,s__35901__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,i,parts),cljs.core.take.call(null,i,words)], null),botnik$tree$pos_insert_$_iter__35900.call(null,cljs.core.rest.call(null,s__35901__$2)));
}
} else {
return null;
}
break;
}
});})(cnt,tally,vec__35893,words,parts))
,null,null));
});})(cnt,tally,vec__35893,words,parts))
;
return iter__26756__auto__.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,(1),(cljs.core.count.call(null,words) + (1)))));
})());
});
botnik.tree.score_keys = (function botnik$tree$score_keys(col){
return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.last,cljs.core.map.call(null,(function (p1__35905_SHARP_){
return cljs.core.update.call(null,p1__35905_SHARP_,(1),cljs.core.comp.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.meta));
}),col)));
});
botnik.tree.pos_collate = (function botnik$tree$pos_collate(s,p,n){
return botnik.tree.frequence.call(null,cljs.core.with_meta.call(null,cljs.core.reduce.call(null,botnik.tree.pos_insert,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,cljs.core.partition.call(null,n,(1),s),cljs.core.partition.call(null,n,(1),p))),(function (){var markov = botnik.tree.collate.call(null,s,n);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markov","markov",-185451008),markov,new cljs.core.Keyword(null,"baseline","baseline",1151033280),cljs.core.mapv.call(null,((function (markov){
return (function (p1__35906_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,p1__35906_SHARP_),(0)],null));
});})(markov))
,botnik.tree.score_keys.call(null,markov)),new cljs.core.Keyword(null,"N","N",-640629860),n], null);
})()));
});
botnik.tree.uncontract = (function botnik$tree$uncontract(col){
return cljs.core.reduce.call(null,(function (xs,w){
var temp__4655__auto__ = cljs.core.last.call(null,xs);
if(cljs.core.truth_(temp__4655__auto__)){
var prev = temp__4655__auto__;
if(cljs.core.truth_(cljs.core.re_find.call(null,/\w*[\'\’]\w+/,w))){
return cljs.core.update.call(null,xs,(cljs.core.count.call(null,xs) - (1)),((function (prev,temp__4655__auto__){
return (function (p1__35907_SHARP_){
return [cljs.core.str(p1__35907_SHARP_),cljs.core.str(w)].join('');
});})(prev,temp__4655__auto__))
);
} else {
return cljs.core.conj.call(null,xs,w);
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/\w*[\'\’]\w+/,w))){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [w], null);
}
}
}),cljs.core.PersistentVector.EMPTY,col);
});
botnik.tree.N_prep = (function botnik$tree$N_prep(s){
var res = cljs.core.mapv.call(null,(function (p1__35908_SHARP_){
return clojure.string.split.call(null,p1__35908_SHARP_,/[ \t]+/);
}),clojure.string.split.call(null,s,"\n"));
var N = cljs.core.count.call(null,cljs.core.first.call(null,res));
return cljs.core.mapv.call(null,((function (res,N){
return (function (col){
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,col)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cnt","cnt",283978798),parseInt(cljs.core.last.call(null,col))], null));
});})(res,N))
,res);
});
botnik.tree.N_prep2 = (function botnik$tree$N_prep2(s){
var res = cljs.core.mapv.call(null,(function (p1__35909_SHARP_){
return clojure.string.split.call(null,p1__35909_SHARP_,/[ \t]+/);
}),clojure.string.split.call(null,s,"\n"));
var N = cljs.core.count.call(null,cljs.core.first.call(null,res));
return cljs.core.mapv.call(null,((function (res,N){
return (function (col){
return cljs.core.with_meta.call(null,botnik.tree.uncontract.call(null,cljs.core.butlast.call(null,col)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cnt","cnt",283978798),parseInt(cljs.core.last.call(null,col))], null));
});})(res,N))
,res);
});
botnik.tree.n_collate = (function botnik$tree$n_collate(tree,tokens,n){
return cljs.core.reduce.call(null,botnik.tree.insert,tree,tokens);
});
botnik.tree.posn_collate = (function botnik$tree$posn_collate(tree,p,_s){
var p__$1 = botnik.tree.N_prep.call(null,p);
var s = botnik.tree.N_prep.call(null,_s);
var s2 = botnik.tree.N_prep2.call(null,_s);
var n = cljs.core.count.call(null,cljs.core.first.call(null,s));
return cljs.core.with_meta.call(null,cljs.core.reduce.call(null,botnik.tree.pos_insert,tree,cljs.core.map.call(null,cljs.core.vector,s,p__$1)),(function (){var markov = botnik.tree.n_collate.call(null,(function (){var or__25976__auto__ = new cljs.core.Keyword(null,"markov","markov",-185451008).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tree));
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),s2,n);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markov","markov",-185451008),markov,new cljs.core.Keyword(null,"baseline","baseline",1151033280),cljs.core.mapv.call(null,((function (markov,p__$1,s,s2,n){
return (function (p1__35910_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,p1__35910_SHARP_),(0)],null));
});})(markov,p__$1,s,s2,n))
,botnik.tree.score_keys.call(null,markov)),new cljs.core.Keyword(null,"N","N",-640629860),n], null);
})());
});
botnik.tree.score = (function botnik$tree$score(tree){
return cljs.core.with_meta.call(null,botnik.tree.frequence.call(null,tree),(function (){var markov = botnik.tree.frequence.call(null,new cljs.core.Keyword(null,"markov","markov",-185451008).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tree)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markov","markov",-185451008),markov,new cljs.core.Keyword(null,"baseline","baseline",1151033280),cljs.core.mapv.call(null,((function (markov){
return (function (p1__35911_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,p1__35911_SHARP_),(cljs.core.last.call(null,p1__35911_SHARP_) * 1.0E-5)],null));
});})(markov))
,botnik.tree.score_keys.call(null,markov))], null);
})());
});
botnik.tree.pos_words = (function botnik$tree$pos_words(col){
return cljs.core.mapcat.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.meta,cljs.core.last),col);
});
botnik.tree.sort_pos_words = (function botnik$tree$sort_pos_words(col){
return cljs.core.take.call(null,(15),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.last,col)));
});
botnik.tree.sort_words = (function botnik$tree$sort_words(col){
return cljs.core.take.call(null,(15),botnik.tree.score_keys.call(null,col));
});
botnik.tree.pos_query = (function botnik$tree$pos_query(tree,N,input){
var input__$1 = ((typeof input === 'string')?clojure.string.split.call(null,clojure.string.trim.call(null,input),/ /):input);
var input__$2 = cljs.core.take_last.call(null,(N - (1)),input__$1);
if((cljs.core.count.call(null,input__$2) < (N - (1)))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.remove.call(null,((function (input__$1,input__$2){
return (function (p1__35912_SHARP_){
return cljs.core.re_find.call(null,/\w*[\'\’]\w+/,cljs.core.first.call(null,p1__35912_SHARP_));
});})(input__$1,input__$2))
,botnik.tree.sort_pos_words.call(null,botnik.tree.pos_words.call(null,cljs.core.get_in.call(null,tree,cljs.core.vec.call(null,input__$2)))));
}
});
botnik.tree.query = (function botnik$tree$query(tree,N,input){
var input__$1 = ((typeof input === 'string')?clojure.string.split.call(null,clojure.string.trim.call(null,input),/ /):input);
var input__$2 = cljs.core.take_last.call(null,(N - (1)),input__$1);
if((cljs.core.count.call(null,input__$2) < (N - (1)))){
return cljs.core.List.EMPTY;
} else {
return botnik.tree.sort_words.call(null,cljs.core.get_in.call(null,tree,cljs.core.vec.call(null,input__$2)));
}
});
cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"test-tree","test-tree",1069299966,null),cljs.core.list(new cljs.core.Symbol(null,"pos-collate","pos-collate",-1453287476,null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["the","quick","red","fox","jumped","the","lazy","red","dog"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DT","JJ","JJ","NN","VBD","DT","JJ","JJ","NN"], null),(4)));
cljs.core.list(new cljs.core.Symbol(null,"pos-query","pos-query",-66054898,null),new cljs.core.Symbol(null,"test-tree","test-tree",1069299966,null),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DT"], null));
cljs.core.list(new cljs.core.Symbol(null,"sort-pos-words","sort-pos-words",843969142,null),cljs.core.list(new cljs.core.Symbol(null,"pos-words","pos-words",621831270,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"test-tree","test-tree",1069299966,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DT","JJ"], null))));

//# sourceMappingURL=tree.js.map?rel=1518788553450