// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.read');
goog.require('cljs.core');
goog.require('om.next');
goog.require('pdfn.core');
goog.require('cljs.pprint');
botnik.read.read = null;

new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586))], null);

botnik.read.read3_551323789 = (function (env,k,params){
var map__35615 = env;
var map__35615__$1 = ((((!((map__35615 == null)))?((((map__35615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35615):map__35615);
var query = cljs.core.get.call(null,map__35615__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__35615__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state = cljs.core.get.call(null,map__35615__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.deref.call(null,state),cljs.core.deref.call(null,state))], null);
});

botnik.read.read = (function (_35377,_35378,_35379){
return botnik.read.read3_551323789.call(null,_35377,_35378,_35379);
});

new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586))], null);

botnik.read.read3__1389631702 = (function (env,k,params){
var map__35617 = env;
var map__35617__$1 = ((((!((map__35617 == null)))?((((map__35617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35617):map__35617);
var query = cljs.core.get.call(null,map__35617__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__35617__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state = cljs.core.get.call(null,map__35617__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query_root = cljs.core.get.call(null,map__35617__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var res = om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)),cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),res], null);
});

botnik.read.read = (function (_35377,_35378,_35379){
if(cljs.core.truth_(pdfn.core.and_STAR_.call(null,cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword("om.next","root","om.next/root",-1714259778)),new cljs.core.Keyword(null,"query-root","query-root",359781888)),cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword(null,"join","join",-758861890)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ast","ast",-860334068))).call(null,_35377))){
return botnik.read.read3__1389631702.call(null,_35377,_35378,_35379);
} else {
return botnik.read.read3_551323789.call(null,_35377,_35378,_35379);
}
});

new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586))], null);

botnik.read.read3__163932497 = (function (env,k,params){
var map__35619 = env;
var map__35619__$1 = ((((!((map__35619 == null)))?((((map__35619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35619):map__35619);
var state = cljs.core.get.call(null,map__35619__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query_root = cljs.core.get.call(null,map__35619__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var query = cljs.core.get.call(null,map__35619__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),query_root),cljs.core.deref.call(null,state))], null);
});

botnik.read.read = (function (_35377,_35378,_35379){
if(cljs.core.truth_(pdfn.core.and_STAR_.call(null,cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword(null,"join","join",-758861890)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ast","ast",-860334068)),cljs.core.comp.call(null,cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"query-root","query-root",359781888))).call(null,_35377))){
return botnik.read.read3__163932497.call(null,_35377,_35378,_35379);
} else {
if(cljs.core.truth_(pdfn.core.and_STAR_.call(null,cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword("om.next","root","om.next/root",-1714259778)),new cljs.core.Keyword(null,"query-root","query-root",359781888)),cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword(null,"join","join",-758861890)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ast","ast",-860334068))).call(null,_35377))){
return botnik.read.read3__1389631702.call(null,_35377,_35378,_35379);
} else {
return botnik.read.read3_551323789.call(null,_35377,_35378,_35379);
}
}
});

new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586))], null);

botnik.read.read3__183919829 = (function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),k)], null);
});

botnik.read.read = (function (_35377,_35378,_35379){
if(cljs.core.truth_(cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword(null,"prop","prop",-515168332)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ast","ast",-860334068)).call(null,_35377))){
return botnik.read.read3__183919829.call(null,_35377,_35378,_35379);
} else {
if(cljs.core.truth_(pdfn.core.and_STAR_.call(null,cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword(null,"join","join",-758861890)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ast","ast",-860334068)),cljs.core.comp.call(null,cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"query-root","query-root",359781888))).call(null,_35377))){
return botnik.read.read3__163932497.call(null,_35377,_35378,_35379);
} else {
if(cljs.core.truth_(pdfn.core.and_STAR_.call(null,cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword("om.next","root","om.next/root",-1714259778)),new cljs.core.Keyword(null,"query-root","query-root",359781888)),cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword(null,"join","join",-758861890)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ast","ast",-860334068))).call(null,_35377))){
return botnik.read.read3__1389631702.call(null,_35377,_35378,_35379);
} else {
return botnik.read.read3_551323789.call(null,_35377,_35378,_35379);
}
}
}
});

new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586))], null);

botnik.read.read3_561423210 = (function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(env),cljs.core.PersistentArrayMap.EMPTY)], null);
});

botnik.read.read = (function (_35377,_35378,_35379){
if(cljs.core.truth_(pdfn.core.and_STAR_.call(null,cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword(null,"prop","prop",-515168332)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ast","ast",-860334068)),cljs.core.comp.call(null,cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"query-root","query-root",359781888))).call(null,_35377))){
return botnik.read.read3_561423210.call(null,_35377,_35378,_35379);
} else {
if(cljs.core.truth_(cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword(null,"prop","prop",-515168332)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ast","ast",-860334068)).call(null,_35377))){
return botnik.read.read3__183919829.call(null,_35377,_35378,_35379);
} else {
if(cljs.core.truth_(pdfn.core.and_STAR_.call(null,cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword(null,"join","join",-758861890)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ast","ast",-860334068)),cljs.core.comp.call(null,cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"query-root","query-root",359781888))).call(null,_35377))){
return botnik.read.read3__163932497.call(null,_35377,_35378,_35379);
} else {
if(cljs.core.truth_(pdfn.core.and_STAR_.call(null,cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword("om.next","root","om.next/root",-1714259778)),new cljs.core.Keyword(null,"query-root","query-root",359781888)),cljs.core.comp.call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Keyword(null,"join","join",-758861890)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ast","ast",-860334068))).call(null,_35377))){
return botnik.read.read3__1389631702.call(null,_35377,_35378,_35379);
} else {
return botnik.read.read3_551323789.call(null,_35377,_35378,_35379);
}
}
}
}
});

//# sourceMappingURL=read.js.map?rel=1518788552473