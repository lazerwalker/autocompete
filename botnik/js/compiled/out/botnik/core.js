// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('botnik.util');
goog.require('om.dom');
goog.require('comp.core');
goog.require('botnik.read');
goog.require('botnik.data');
goog.require('skin.data');
goog.require('skin.style');
goog.require('hyper.terse');
goog.require('botnik.words');
goog.require('botnik.iframe');
goog.require('hyper.tools');
goog.require('dollar.bill');
goog.require('botnik.mutate');
goog.require('clojure.string');
goog.require('botnik.turbobar');
goog.require('om.next');
goog.require('botnik.column');
goog.require('botnik.slider');
goog.require('botnik.story');
goog.require('skin.core');
goog.require('botnik.query');


cljs.core.enable_console_print_BANG_.call(null);
botnik.core.app_state = botnik.data.app_state;
botnik.core.query_text = (function botnik$core$query_text(col){
return clojure.string.lower_case.call(null,col);
});
botnik.core.LAST_QUERY = cljs.core.atom.call(null,"???");
botnik.core.weight_mult = (function botnik$core$weight_mult(col,n){
return cljs.core.map.call(null,(function (v){
return cljs.core.update.call(null,v,(1),(function (p1__30213_SHARP_){
return (p1__30213_SHARP_ * n);
}));
}),col);
});
botnik.core.query = (function botnik$core$query(sources,f){
var vec__30217 = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state));
var start = cljs.core.nth.call(null,vec__30217,(0),null);
var end = cljs.core.nth.call(null,vec__30217,(1),null);
var story = cljs.core.subs.call(null,new cljs.core.Keyword(null,"story","story",-1000647533).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)),(0),start);
var preceding_space_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["-",null," ",null,"\n",null], null), null).call(null,cljs.core.last.call(null,story));
var story__$1 = botnik.core.query_text.call(null,story);
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))) && ((cljs.core._EQ_.call(null,cljs.core.deref.call(null,botnik.core.LAST_QUERY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,botnik.query.MARKOV_QMARK_),story__$1], null))) || (cljs.core.not.call(null,preceding_space_QMARK_)))){
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);

if(cljs.core.not.call(null,preceding_space_QMARK_)){
cljs.core.reset_BANG_.call(null,botnik.core.LAST_QUERY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,botnik.query.MARKOV_QMARK_),story__$1], null));

return botnik.core.auto_complete_BANG_.call(null,story__$1);
} else {
return null;
}
} else {
cljs.core.reset_BANG_.call(null,botnik.core.LAST_QUERY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,botnik.query.MARKOV_QMARK_),story__$1], null));

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"scored-words","scored-words",2116028256)], null),cljs.core.PersistentVector.EMPTY);

return cljs.core.mapv.call(null,((function (vec__30217,start,end,story,preceding_space_QMARK_,story__$1){
return (function (id){
return botnik.query.suggest.call(null,id,story__$1,f);
});})(vec__30217,start,end,story,preceding_space_QMARK_,story__$1))
,sources);
}
});
botnik.core.query_col = (function botnik$core$query_col(k){
var col = cljs.core.get_in.call(null,cljs.core.deref.call(null,botnik.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),k], null));
var sources = cljs.core.map.call(null,cljs.core.last,cljs.core.get.call(null,cljs.core.deref.call(null,botnik.core.app_state),new cljs.core.Keyword(null,"sources","sources",-321166424)));
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),k,new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),k,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),(0));

return botnik.core.query.call(null,sources,((function (col,sources){
return (function (o){
var singles = cljs.core.map.call(null,cljs.core.first,o);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,o));
var weight = cljs.core.get_in.call(null,cljs.core.deref.call(null,botnik.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sources","by-id","sources/by-id",160449323),id,new cljs.core.Keyword(null,"weight","weight",-1262796205)], null));
var word_list = botnik.core.weight_mult.call(null,cljs.core.take.call(null,(28),o),weight);
botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),k,new cljs.core.Keyword(null,"scored-words","scored-words",2116028256)], null),((function (singles,id,weight,word_list,col,sources){
return (function (p1__30220_SHARP_){
return cljs.core.into.call(null,p1__30220_SHARP_,word_list);
});})(singles,id,weight,word_list,col,sources))
);

botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),k,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sources),cljs.core.get_in.call(null,cljs.core.deref.call(null,botnik.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),k,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null)))){
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),k,new cljs.core.Keyword(null,"words","words",1924933001)], null),cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.last,cljs.core.get_in.call(null,cljs.core.deref.call(null,botnik.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),k,new cljs.core.Keyword(null,"scored-words","scored-words",2116028256)], null)))))));

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),k,new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);

return cljs.core.reset_BANG_.call(null,botnik.data.STALE,false);
} else {
return null;
}
});})(col,sources))
);
});
botnik.core.refresh_words_BANG_ = (function botnik$core$refresh_words_BANG_(){
return cljs.core.dorun.call(null,cljs.core.map.call(null,botnik.core.query_col,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)));
});
cljs.core.swap_BANG_.call(null,botnik.data.FN,cljs.core.assoc,new cljs.core.Keyword(null,"refresh-words!","refresh-words!",-807710723),botnik.core.refresh_words_BANG_);
botnik.core.random_words_BANG_ = (function botnik$core$random_words_BANG_(){
var words = cljs.core.apply.call(null,cljs.core.concat,cljs.core.mapv.call(null,(function (id){
return botnik.query.rand_words.call(null,cljs.core.first.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,botnik.query.TREES))),(28));
}),cljs.core.map.call(null,cljs.core.last,cljs.core.get.call(null,cljs.core.deref.call(null,botnik.core.app_state),new cljs.core.Keyword(null,"sources","sources",-321166424)))));
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"words","words",1924933001)], null),cljs.core.shuffle.call(null,cljs.core.distinct.call(null,words)));

botnik.util.action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"random-words","random-words",-891171167)], null));

return cljs.core.reset_BANG_.call(null,botnik.data.STALE,false);
});
cljs.core.swap_BANG_.call(null,botnik.data.FN,cljs.core.assoc,new cljs.core.Keyword(null,"random-words!","random-words!",-515926889),botnik.core.random_words_BANG_);
botnik.core.auto_complete_BANG_ = (function botnik$core$auto_complete_BANG_(s){
var ids = cljs.core.map.call(null,cljs.core.last,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)));
var word = cljs.core.last.call(null,clojure.string.split.call(null,s,/\s+/));
var all_words = cljs.core.mapcat.call(null,((function (ids,word){
return (function (id){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"markov","markov",-185451008).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,botnik.query.TREES),id))));
});})(ids,word))
,ids);
var f = ((function (ids,word,all_words){
return (function (p1__30221_SHARP_){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(word)].join('')),p1__30221_SHARP_);
});})(ids,word,all_words))
;
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"words","words",1924933001)], null),cljs.core.take.call(null,(18),cljs.core.distinct.call(null,cljs.core.filter.call(null,f,all_words))));
});
botnik.core.split_at_last_word = (function botnik$core$split_at_last_word(s){
var res = cljs.core.first.call(null,cljs.core.re_seq.call(null,/(.*[ ])?([^\s]+[\s]*$)/,s));
var or__25976__auto__ = res;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,s,""], null);
}
});
botnik.core.whitespace_QMARK_ = (function botnik$core$whitespace_QMARK_(s){
return cljs.core.re_find.call(null,/[\s]/,(function (){var or__25976__auto__ = s;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return " ";
}
})());
});
botnik.core.punctuation_QMARK_ = (function botnik$core$punctuation_QMARK_(s){
return cljs.core.re_find.call(null,/^[\s]*[\,\.\!\?\:]/,(function (){var or__25976__auto__ = s;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return "";
}
})());
});
botnik.core.sentance_end_QMARK_ = (function botnik$core$sentance_end_QMARK_(s){
var s__$1 = (function (){var or__25976__auto__ = s;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return "";
}
})();
var or__25976__auto__ = cljs.core.re_find.call(null,/^\s*$/,s__$1);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return cljs.core.re_find.call(null,/[\.\!\?][\s]*$/,s__$1);
}
});
botnik.core.contraction_QMARK_ = (function botnik$core$contraction_QMARK_(s){
return cljs.core.re_find.call(null,/^([ ]?|n)['’]\w/,(function (){var or__25976__auto__ = s;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return "";
}
})());
});
botnik.core.selection_BANG_ = (function botnik$core$selection_BANG_(start,end){
var target = cljs.core.first.call(null,dollar.bill.$.call(null,"#story.editor"));
if(cljs.core.truth_(botnik.util.mobile_QMARK_.call(null))){
} else {
(target["selectionStart"] = start);

(target["selectionEnd"] = end);
}

return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null));
});
botnik.core.insert_word = (function botnik$core$insert_word(s){
cljs.core.first.call(null,dollar.bill.$.call(null,"#story.editor")).blur();

var story = new cljs.core.Keyword(null,"story","story",-1000647533).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state));
var vec__30225 = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state));
var sel_start = cljs.core.nth.call(null,vec__30225,(0),null);
var sel_end = cljs.core.nth.call(null,vec__30225,(1),null);
var before = cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,sel_start,story));
var preceding_space_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["-",null," ",null,"\n",null], null), null).call(null,cljs.core.last.call(null,before));
var after = cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,sel_end,story));
var punct_QMARK_ = (function (){var or__25976__auto__ = botnik.core.punctuation_QMARK_.call(null,s);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return botnik.core.contraction_QMARK_.call(null,s);
}
})();
var s__$1 = (cljs.core.truth_(botnik.core.sentance_end_QMARK_.call(null,before))?clojure.string.capitalize.call(null,s):s);
var word = [cljs.core.str((cljs.core.truth_(botnik.core.whitespace_QMARK_.call(null,cljs.core.last.call(null,before)))?"":(cljs.core.truth_(punct_QMARK_)?"":" "))),cljs.core.str(s__$1),cljs.core.str((cljs.core.truth_(botnik.core.whitespace_QMARK_.call(null,cljs.core.first.call(null,after)))?(((cljs.core.first.call(null,after) == null))?" ":" "):(cljs.core.truth_(botnik.core.punctuation_QMARK_.call(null,cljs.core.first.call(null,after)))?"":" ")))].join('');
var after__$1 = (cljs.core.truth_(botnik.core.whitespace_QMARK_.call(null,cljs.core.first.call(null,after)))?cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,after)):after);
var before__$1 = (cljs.core.truth_((function (){var and__25964__auto__ = punct_QMARK_;
if(cljs.core.truth_(and__25964__auto__)){
return botnik.core.whitespace_QMARK_.call(null,cljs.core.last.call(null,before));
} else {
return and__25964__auto__;
}
})())?cljs.core.apply.call(null,cljs.core.str,cljs.core.butlast.call(null,before)):before);
var before__$2 = (cljs.core.truth_((function (){var or__25976__auto__ = preceding_space_QMARK_;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
var or__25976__auto____$1 = botnik.core.punctuation_QMARK_.call(null,word);
if(cljs.core.truth_(or__25976__auto____$1)){
return or__25976__auto____$1;
} else {
return cljs.core.re_find.call(null,/\-/,word);
}
}
})())?before__$1:clojure.string.join.call(null," ",cljs.core.butlast.call(null,clojure.string.split.call(null,before__$1," "))));
var text = [cljs.core.str(before__$2),cljs.core.str(word),cljs.core.str(after__$1)].join('');
var end = (cljs.core.count.call(null,before__$2) + cljs.core.count.call(null,word));
botnik.util.action.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"word","word",-420123725),s__$1,new cljs.core.Keyword(null,"before","before",-1633692388),before__$2,new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state))))], null));

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"story","story",-1000647533)], null),text);

localStorage.setItem("story",new cljs.core.Keyword(null,"story","story",-1000647533).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)));

botnik.core.selection_BANG_.call(null,end,end);

if(cljs.core.truth_(botnik.util.mobile_QMARK_.call(null))){
} else {
botnik.story.sync_native_select.call(null);
}

return botnik.core.refresh_words_BANG_.call(null);
});
cljs.core.swap_BANG_.call(null,botnik.data.FN,cljs.core.assoc,new cljs.core.Keyword(null,"insert-word","insert-word",1259807519),botnik.core.insert_word);
botnik.core.delete_word = (function botnik$core$delete_word(){
var story = new cljs.core.Keyword(null,"story","story",-1000647533).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state));
var vec__30234 = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state));
var sel_start = cljs.core.nth.call(null,vec__30234,(0),null);
var sel_end = cljs.core.nth.call(null,vec__30234,(1),null);
var before = cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,sel_start,story));
var after = cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,sel_end,story));
var vec__30237 = botnik.core.split_at_last_word.call(null,before);
var original = cljs.core.nth.call(null,vec__30237,(0),null);
var kept = cljs.core.nth.call(null,vec__30237,(1),null);
var deleted = cljs.core.nth.call(null,vec__30237,(2),null);
var kept__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,cljs.core.count.call(null,deleted),before));
var text = [cljs.core.str(kept__$1),cljs.core.str(after)].join('');
var end = cljs.core.count.call(null,kept__$1);
var target = cljs.core.first.call(null,dollar.bill.$.call(null,"#story.editor"));
target.value = text;

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"story","story",-1000647533)], null),text);

botnik.core.selection_BANG_.call(null,end,end);

botnik.story.sync_native_select.call(null);

botnik.core.refresh_words_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,botnik.data.last_word,cljs.core.gensym.call(null));
});
botnik.core.navigate_horizontal_word = (function botnik$core$navigate_horizontal_word(n){
var vec__30243 = cljs.core.deref.call(null,skin.data.suggestions);
var columns = cljs.core.nth.call(null,vec__30243,(0),null);
var rows = cljs.core.nth.call(null,vec__30243,(1),null);
var selected = new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state));
var m = cljs.core.mod.call(null,selected,columns);
var v = (((n < (0)))?((cljs.core._EQ_.call(null,(0),m))?(columns - (1)):(-1)):((cljs.core._EQ_.call(null,(columns - (1)),m))?(- (columns - (1))):(1)));
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),(selected + v));
});
botnik.core.navigate_vertical_word = (function botnik$core$navigate_vertical_word(n){
var vec__30249 = cljs.core.deref.call(null,skin.data.suggestions);
var columns = cljs.core.nth.call(null,vec__30249,(0),null);
var rows = cljs.core.nth.call(null,vec__30249,(1),null);
var selected = new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state));
var m = cljs.core.mod.call(null,selected,(rows * columns));
var v = (((n < (0)))?(((selected < columns))?((rows * columns) - columns):(- columns)):(((selected > (((rows * columns) - columns) - (1))))?(- ((rows * columns) - columns)):columns));
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),(selected + v));
});
botnik.core.load_source = (function botnik$core$load_source(source){
return location.href = [cljs.core.str("http://"),cljs.core.str(location.host),cljs.core.str(location.pathname),cljs.core.str("?source="),cljs.core.str(source)].join('');
});
/**
 * @constructor
 */
botnik.core.Main = (function botnik$core$Main(){
var this__28320__auto__ = this;
React.Component.apply(this__28320__auto__,arguments);

if(!((this__28320__auto__.initLocalState == null))){
this__28320__auto__.state = this__28320__auto__.initLocalState();
} else {
this__28320__auto__.state = {};
}

return this__28320__auto__;
});

botnik.core.Main.prototype = goog.object.clone(React.Component.prototype);

var x30258_30268 = botnik.core.Main.prototype;
x30258_30268.componentWillUpdate = ((function (x30258_30268){
return (function (next_props__28208__auto__,next_state__28209__auto__){
var this__28207__auto__ = this;
if(((!((this__28207__auto__ == null)))?(((false) || (this__28207__auto__.om$next$Ident$))?true:false):false)){
var ident__28211__auto___30269 = om.next.ident.call(null,this__28207__auto__,om.next.props.call(null,this__28207__auto__));
var next_ident__28212__auto___30270 = om.next.ident.call(null,this__28207__auto__,om.next._next_props.call(null,next_props__28208__auto__,this__28207__auto__));
if(cljs.core.not_EQ_.call(null,ident__28211__auto___30269,next_ident__28212__auto___30270)){
var idxr__28213__auto___30271 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28207__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28213__auto___30271 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28213__auto___30271),((function (idxr__28213__auto___30271,ident__28211__auto___30269,next_ident__28212__auto___30270,this__28207__auto__,x30258_30268){
return (function (indexes__28214__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28214__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28211__auto___30269], null),cljs.core.disj,this__28207__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28212__auto___30270], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28207__auto__);
});})(idxr__28213__auto___30271,ident__28211__auto___30269,next_ident__28212__auto___30270,this__28207__auto__,x30258_30268))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28207__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28207__auto__);
});})(x30258_30268))
;

x30258_30268.shouldComponentUpdate = ((function (x30258_30268){
return (function (next_props__28208__auto__,next_state__28209__auto__){
var this__28207__auto__ = this;
var next_children__28210__auto__ = next_props__28208__auto__.children;
var next_props__28208__auto____$1 = goog.object.get(next_props__28208__auto__,"omcljs$value");
var next_props__28208__auto____$2 = (function (){var G__30260 = next_props__28208__auto____$1;
if((next_props__28208__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__30260);
} else {
return G__30260;
}
})();
var or__25976__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__28207__auto__),next_props__28208__auto____$2);
if(or__25976__auto__){
return or__25976__auto__;
} else {
var or__25976__auto____$1 = (function (){var and__25964__auto__ = this__28207__auto__.state;
if(cljs.core.truth_(and__25964__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__28207__auto__.state,"omcljs$state"),goog.object.get(next_state__28209__auto__,"omcljs$state"));
} else {
return and__25964__auto__;
}
})();
if(cljs.core.truth_(or__25976__auto____$1)){
return or__25976__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__28207__auto__.props.children,next_children__28210__auto__);
}
}
});})(x30258_30268))
;

x30258_30268.componentWillUnmount = ((function (x30258_30268){
return (function (){
var this__28207__auto__ = this;
var r__28218__auto__ = om.next.get_reconciler.call(null,this__28207__auto__);
var cfg__28219__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__28218__auto__);
var st__28220__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28219__auto__);
var indexer__28217__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28219__auto__);
if(cljs.core.truth_((function (){var and__25964__auto__ = !((st__28220__auto__ == null));
if(and__25964__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__28220__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__28207__auto__], null));
} else {
return and__25964__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__28220__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__28207__auto__);
} else {
}

if((indexer__28217__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__28217__auto__,this__28207__auto__);
}
});})(x30258_30268))
;

x30258_30268.componentDidUpdate = ((function (x30258_30268){
return (function (prev_props__28215__auto__,prev_state__28216__auto__){
var this__28207__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28207__auto__);
});})(x30258_30268))
;

x30258_30268.isMounted = ((function (x30258_30268){
return (function (){
var this__28207__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28207__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x30258_30268))
;

x30258_30268.componentWillMount = ((function (x30258_30268){
return (function (){
var this__28207__auto__ = this;
var indexer__28217__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28207__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28217__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28217__auto__,this__28207__auto__);
}
});})(x30258_30268))
;

x30258_30268.render = ((function (x30258_30268){
return (function (){
var this__28206__auto__ = this;
var this$ = this__28206__auto__;
var _STAR_reconciler_STAR_30261 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30262 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_30263 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_30264 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_30265 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28206__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28206__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28206__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28206__auto__);

om.next._STAR_parent_STAR_ = this__28206__auto__;

try{var props = om.next.props.call(null,this$);
var menu_QMARK_ = new cljs.core.Keyword(null,"menu?","menu?",847361238).cljs$core$IFn$_invoke$arity$1(props);
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(props);
var no_words_QMARK_ = cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"saved-words","saved-words",-866322621).cljs$core$IFn$_invoke$arity$1(props));
var saved_QMARK_ = (function (){var or__25976__auto__ = new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return !(no_words_QMARK_);
}
})();
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(props))?"edit-mode ":null)),cljs.core.str((cljs.core.truth_(botnik.util.mobile_QMARK_.call(null))?"mobile ":"desktop ")),cljs.core.str((cljs.core.truth_(menu_QMARK_)?"shifted ":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(props))?"drag":null))].join('')], null))))], null)),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"menu"], null)),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu?","menu?",847361238)], null),true);
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button","hamburger"], null))))], null)),om.dom.img.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"svg/hamburger.svg"], null)))),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null))))], null)),"Predictive Writer")),comp.core.onent.call(null,new cljs.core.Keyword(null,"story","story",-1000647533)).call(null,new cljs.core.Keyword(null,"story","story",-1000647533).cljs$core$IFn$_invoke$arity$1(props)),(cljs.core.truth_(new cljs.core.Keyword(null,"save-bar","save-bar",-706472269).cljs$core$IFn$_invoke$arity$1(props))?om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"saved"], null)),((no_words_QMARK_)?om.dom.h1.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"Drop words here to save them"):cljs.core.map_indexed.call(null,((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (i,o){
return comp.core.onent.call(null,new cljs.core.Keyword(null,"word-block","word-block",876283534)).call(null,cljs.core.assoc.call(null,o,new cljs.core.Keyword(null,"id","id",-1388402092),i));
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"saved-words","saved-words",-866322621).cljs$core$IFn$_invoke$arity$1(props)))):null),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"input",new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(props))?"dragging":null)], null))))], null)),cljs.core.map.call(null,comp.core.onent.call(null,new cljs.core.Keyword(null,"column","column",2078222095)),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(props))),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar",new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__25976__auto__ = menu_QMARK_;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return error_QMARK_;
}
})())?"open":"closed")], null))))], null)),(cljs.core.truth_(error_QMARK_)?om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["content"], null))))], null)),om.dom.h3.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"Error:"),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),null);
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cancel"], null))))], null)),om.dom.img.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"svg/menuBack.svg"], null)))),om.dom.p.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(props))):null),(cljs.core.truth_(menu_QMARK_)?om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["content"], null))))], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"uploading?","uploading?",316182892).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upload","upload",-255769218).cljs$core$IFn$_invoke$arity$1(props)))?om.dom.h3.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"uploading..."):om.dom.div.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu?","menu?",847361238)], null),false);

return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upload","upload",-255769218)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"uploading?","uploading?",316182892),false,new cljs.core.Keyword(null,"result","result",1415092211),null], null));
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cancel"], null))))], null)),om.dom.img.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"svg/menuBack.svg"], null)))),om.dom.h3.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"custom voice"),om.dom.input.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"ref","ref",1289896967),"file-upload",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upload","upload",-255769218),new cljs.core.Keyword(null,"file","file",-1269645878)], null),(e.nativeEvent.target.files[(0)]));
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
], null))),(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upload","upload",-255769218).cljs$core$IFn$_invoke$arity$1(props)))?om.dom.button.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upload","upload",-255769218),new cljs.core.Keyword(null,"uploading?","uploading?",316182892)], null),true);

return post_file([cljs.core.str(botnik.data.API_SERVER),cljs.core.str("/register")].join(''),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upload","upload",-255769218).cljs$core$IFn$_invoke$arity$1(props)),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (res){
var o = JSON.parse(res);
var id = (o["id"]);
if(cljs.core.truth_(id)){
return botnik.core.load_source.call(null,id);
} else {
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upload","upload",-255769218),new cljs.core.Keyword(null,"uploading?","uploading?",316182892)], null),false);

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upload","upload",-255769218),new cljs.core.Keyword(null,"file","file",-1269645878)], null),null);

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu?","menu?",847361238)], null),false);

var temp__4655__auto__ = (o["error"]);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),error);
} else {
return null;
}
}
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
);
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
], null)),"upload"):null),om.dom.h3.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"options"),om.dom.label.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"show saved word bar",om.dom.input.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"save-bar","save-bar",-706472269).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-bar","save-bar",-706472269)], null),cljs.core.not);

var save_QMARK_ = new cljs.core.Keyword(null,"save-bar","save-bar",-706472269).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state));
cljs.core.reset_BANG_.call(null,skin.data.saved_height,(cljs.core.truth_(new cljs.core.Keyword(null,"save-bar","save-bar",-706472269).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)))?(45):(0)));

return localStorage.setItem("save-bar",save_QMARK_);
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
], null)))),om.dom.label.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"arrow key & tab input",om.dom.input.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677)], null),cljs.core.not);

return localStorage.setItem("arrow-input",new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)));
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
], null)))),om.dom.p.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),om.dom.b.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"suggestions")),om.dom.label.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"columns",om.dom.select.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),(0)], null)))].join(''),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),(0)], null),parseInt(e.nativeEvent.target.value));

cljs.core.reset_BANG_.call(null,skin.data.suggestions,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)));

return localStorage.setItem("suggestions",new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)));
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
], null)),cljs.core.map.call(null,((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (p1__30252_SHARP_){
return om.dom.option.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),p1__30252_SHARP_);
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"suggestion-options","suggestion-options",-398137336).cljs$core$IFn$_invoke$arity$1(props))))),om.dom.label.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"rows",om.dom.select.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),(1)], null)))].join(''),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),(1)], null),parseInt(e.nativeEvent.target.value));

cljs.core.reset_BANG_.call(null,skin.data.suggestions,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)));

return localStorage.setItem("suggestions",new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)));
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
], null)),cljs.core.map.call(null,((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (p1__30253_SHARP_){
return om.dom.option.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),p1__30253_SHARP_);
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"suggestion-options","suggestion-options",-398137336).cljs$core$IFn$_invoke$arity$1(props))))),(((cljs.core.count.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(props)) > (1)))?om.dom.div.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),om.dom.h3.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"voice volume"),cljs.core.map.call(null,((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (source){
return comp.core.onent.call(null,new cljs.core.Keyword(null,"slider","slider",-472668865)).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (v){
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sources","by-id","sources/by-id",160449323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword(null,"weight","weight",-1262796205)], null),v);
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"done","done",-889844188),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (){
cljs.core.reset_BANG_.call(null,botnik.core.LAST_QUERY,cljs.core.rand.call(null));

return botnik.core.refresh_words_BANG_.call(null);
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
], null));
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(props))):null),om.dom.h3.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),"voices"),cljs.core.map_indexed.call(null,((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (idx,catagory){
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
return botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-listing","source-listing",1381720692),idx,new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),cljs.core.not);
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["source-catagory"], null))))], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(catagory))?"\u25BC ":"\u25B6 "),om.dom.b.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.get.call(null,catagory,"name")),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(catagory))?cljs.core.map.call(null,((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (source){
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268){
return (function (e){
return botnik.core.load_source.call(null,cljs.core.get.call(null,source,"id"));
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["source"], null))))], null)),cljs.core.get.call(null,source,"name"));
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,cljs.core.get.call(null,catagory,"sources")):null));
});})(props,menu_QMARK_,error_QMARK_,no_words_QMARK_,saved_QMARK_,_STAR_reconciler_STAR_30261,_STAR_depth_STAR_30262,_STAR_shared_STAR_30263,_STAR_instrument_STAR_30264,_STAR_parent_STAR_30265,this$,this__28206__auto__,x30258_30268))
,new cljs.core.Keyword(null,"source-listing","source-listing",1381720692).cljs$core$IFn$_invoke$arity$1(props))))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_30265;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_30264;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_30263;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_30262;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30261;
}});})(x30258_30268))
;


botnik.core.Main.prototype.constructor = botnik.core.Main;

botnik.core.Main.prototype.constructor.displayName = "botnik.core/Main";

botnik.core.Main.prototype.om$isComponent = true;

var x30266_30272 = botnik.core.Main;
/** @nocollapse */
x30266_30272.om$next$IQuery$ = true;

/** @nocollapse */
x30266_30272.om$next$IQuery$query$arity$1 = ((function (x30266_30272){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"editing?","editing?",1646440800)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"menu?","menu?",847361238)),(function (){var x__26810__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"story","story",-1000647533)),(function (){var x__26810__auto__ = om.next.get_query.call(null,comp.core.camels.call(null,new cljs.core.Keyword(null,"story","story",-1000647533)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),(function (){var x__26810__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"columns","columns",1998437288)),(function (){var x__26810__auto__ = om.next.get_query.call(null,comp.core.camels.call(null,new cljs.core.Keyword(null,"column","column",2078222095)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"voice","voice",185716428)),(function (){var x__26810__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"sources","sources",-321166424)),(function (){var x__26810__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"weight","weight",-1262796205)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"dragging","dragging",1185097613)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"saved-words","saved-words",-866322621)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"root-refresh","root-refresh",-637514951)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"upload","upload",-255769218)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"save-bar","save-bar",-706472269)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"suggestion-options","suggestion-options",-398137336)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"source-listing","source-listing",1381720692))))));
});})(x30266_30272))
;


var x30267_30273 = botnik.core.Main.prototype;

x30267_30273.om$next$IQuery$ = true;


x30267_30273.om$next$IQuery$query$arity$1 = ((function (x30267_30273){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"editing?","editing?",1646440800)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"menu?","menu?",847361238)),(function (){var x__26810__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"story","story",-1000647533)),(function (){var x__26810__auto__ = om.next.get_query.call(null,comp.core.camels.call(null,new cljs.core.Keyword(null,"story","story",-1000647533)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),(function (){var x__26810__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"columns","columns",1998437288)),(function (){var x__26810__auto__ = om.next.get_query.call(null,comp.core.camels.call(null,new cljs.core.Keyword(null,"column","column",2078222095)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"voice","voice",185716428)),(function (){var x__26810__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"sources","sources",-321166424)),(function (){var x__26810__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"weight","weight",-1262796205)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"dragging","dragging",1185097613)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"saved-words","saved-words",-866322621)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"root-refresh","root-refresh",-637514951)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"upload","upload",-255769218)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"save-bar","save-bar",-706472269)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"suggestion-options","suggestion-options",-398137336)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"source-listing","source-listing",1381720692))))));
});})(x30267_30273))
;


botnik.core.Main.cljs$lang$type = true;

botnik.core.Main.cljs$lang$ctorStr = "botnik.core/Main";

botnik.core.Main.cljs$lang$ctorPrWriter = (function (this__28323__auto__,writer__28324__auto__,opt__28325__auto__){
return cljs.core._write.call(null,writer__28324__auto__,"botnik.core/Main");
});
if(typeof botnik.core.reconciler !== 'undefined'){
} else {
botnik.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),botnik.core.app_state,new cljs.core.Keyword(null,"logger","logger",-220675947),null,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),botnik.read.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),botnik.mutate.mutate], null))], null));
}
cljs.core.reset_BANG_.call(null,botnik.data.RECONCILER,botnik.core.reconciler);
botnik.core.resize = (function botnik$core$resize(e){
var ww = window.innerWidth;
var wh = window.innerHeight;
var temp__4655__auto___30274 = document.activeElement;
if(cljs.core.truth_(temp__4655__auto___30274)){
var el_30275 = temp__4655__auto___30274;
if((wh > new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window)))){
el_30275.blur();
} else {
}
} else {
}

return cljs.core.swap_BANG_.call(null,skin.data.window,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"h","h",1109658740),wh], null));
});
botnik.core.keypress = (function botnik$core$keypress(e){
var temp__4655__auto___30276 = cljs.core.last.call(null,cljs.core.re_find.call(null,/(Numpad|Digit)(\d)/,(function (){var or__25976__auto__ = e.code;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return "";
}
})()));
if(cljs.core.truth_(temp__4655__auto___30276)){
var pad_30277 = temp__4655__auto___30276;
var pad_30278__$1 = (pad_30277 | (0));
var pad_30279__$2 = (cljs.core.truth_(e.altKey)?(pad_30278__$1 + (10)):pad_30278__$1);
var el_30280 = cljs.core.get.call(null,cljs.core.vec.call(null,dollar.bill.$.call(null,".column .word.block")),(pad_30279__$2 - (1)));
(e["caught"] = true);

if(cljs.core.truth_(e.shiftKey)){
} else {
if(cljs.core.truth_(el_30280)){
el_30280.click();
} else {
}

e.preventDefault();
}
} else {
}

if(cljs.core.truth_((function (){var and__25964__auto__ = cljs.core._EQ_.call(null,e.code,"Enter");
if(and__25964__auto__){
return e.altKey;
} else {
return and__25964__auto__;
}
})())){
botnik.core.random_words_BANG_.call(null);

e.preventDefault();
} else {
if(cljs.core.truth_((function (){var or__25976__auto__ = cljs.core._EQ_.call(null,e.code,"Delete");
if(or__25976__auto__){
return or__25976__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(46),null,(8),null], null), null).call(null,e.keyCode);
}
})())){
botnik.util.log.call(null,"Delete");

(e["caught"] = true);

botnik.core.delete_word.call(null);

botnik.util.action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null));

e.preventDefault();
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["!",null,"-",null,"?",null,":",null,".",null,";",null,",",null], null), null).call(null,e.key))){
(e["caught"] = true);

botnik.core.insert_word.call(null,e.key);

e.preventDefault();
} else {
}
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)))){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["ArrowRight",null], null), null).call(null,e.key))){
(e["caught"] = true);

botnik.core.navigate_horizontal_word.call(null,(1));

return e.preventDefault();
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["ArrowLeft",null], null), null).call(null,e.key))){
(e["caught"] = true);

botnik.core.navigate_horizontal_word.call(null,(-1));

return e.preventDefault();
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["ArrowUp",null], null), null).call(null,e.key))){
(e["caught"] = true);

botnik.core.navigate_vertical_word.call(null,(-1));

return e.preventDefault();
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["ArrowDown",null], null), null).call(null,e.key))){
(e["caught"] = true);

botnik.core.navigate_vertical_word.call(null,(1));

return e.preventDefault();
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Tab",null], null), null).call(null,e.key))){
(e["caught"] = true);

var cursor_30281 = new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state));
var words_30282 = cljs.core.vec.call(null,dollar.bill.$.call(null,"#input .word.block"));
var el_30283 = cljs.core.get.call(null,words_30282,cursor_30281);
if(cljs.core.truth_(el_30283)){
el_30283.click();
} else {
}

return e.preventDefault();
} else {
return null;
}
}
}
}
}
} else {
return null;
}
});
botnik.core.on_js_reload = (function botnik$core$on_js_reload(){
return null;
});
if(typeof botnik.core.setup_QMARK_ !== 'undefined'){
} else {
botnik.core.setup_QMARK_ = cljs.core.atom.call(null,null);
}
botnik.core._setup = (cljs.core.truth_(cljs.core.deref.call(null,botnik.core.setup_QMARK_))?null:(function (){
cljs.core.swap_BANG_.call(null,botnik.core.setup_QMARK_,cljs.core.not);

window.addEventListener("resize",botnik.core.resize);

document.addEventListener("keydown",(function (e){
return botnik.core.keypress.call(null,e);
}));

var source_30285 = cljs.core.get.call(null,botnik.util.url_params.call(null),"source","589b43f09f1100d6a871cb9c3dda71a6");
var sources_30286 = clojure.string.split.call(null,source_30285,",");
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"corpus","corpus",-2028151250)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sources","by-id","sources/by-id",160449323),source_30285], null));

cljs.core.dorun.call(null,cljs.core.map.call(null,((function (sources_30286,source_30285){
return (function (s){
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sources","by-id","sources/by-id",160449323),s], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),s,new cljs.core.Keyword(null,"weight","weight",-1262796205),1.0], null));

return botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424)], null),((function (sources_30286,source_30285){
return (function (p1__30284_SHARP_){
return cljs.core.conj.call(null,p1__30284_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sources","by-id","sources/by-id",160449323),s], null));
});})(sources_30286,source_30285))
);
});})(sources_30286,source_30285))
,sources_30286));

skin.core.mount.call(null);

setTimeout((function (){
if((cljs.core.count.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,botnik.query.TREES))) < (1))){
console.log("kicking tires..");

botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root-refresh","root-refresh",-637514951)], null),cljs.core.inc);

return botnik.core.refresh_words_BANG_.call(null);
} else {
return null;
}
}),(3000));

var save_QMARK__30287 = cljs.core._EQ_.call(null,"true",localStorage.getItem("save-bar"));
var arrow_QMARK__30288 = cljs.core._EQ_.call(null,"true",localStorage.getItem("arrow-input"));
var suggestions_30289 = cljs.reader.read_string.call(null,[cljs.core.str(localStorage.getItem("suggestions"))].join(''));
var suggestions_30290__$1 = (function (){var or__25976__auto__ = suggestions_30289;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
if(cljs.core.truth_(botnik.util.mobile_QMARK_.call(null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6)], null);
}
}
})();
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-bar","save-bar",-706472269)], null),((save_QMARK__30287)?true:false));

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677)], null),((arrow_QMARK__30288)?true:false));

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestions","suggestions",-859472618)], null),suggestions_30290__$1);

cljs.core.reset_BANG_.call(null,skin.data.suggestions,suggestions_30290__$1);

cljs.core.reset_BANG_.call(null,skin.data.saved_height,(cljs.core.truth_(new cljs.core.Keyword(null,"save-bar","save-bar",-706472269).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.core.app_state)))?(45):(0)));

get_json("sources.json",(function (o){
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-listing","source-listing",1381720692)], null),cljs.core.js__GT_clj.call(null,o));
}));

return botnik.util.action.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"load","load",-1318641184)], null));
})()
);
var n__26891__auto___30291 = (10);
var i_30292 = (0);
while(true){
if((i_30292 < n__26891__auto___30291)){
history.pushState(({}),"");

var G__30293 = (i_30292 + (1));
i_30292 = G__30293;
continue;
} else {
}
break;
}
om.next.add_root_BANG_.call(null,botnik.core.reconciler,botnik.core.Main,botnik.util.by_id.call(null,"main"));
botnik.core.resize.call(null,null);

//# sourceMappingURL=core.js.map?rel=1519138431288