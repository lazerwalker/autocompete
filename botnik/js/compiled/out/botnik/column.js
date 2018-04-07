// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.column');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('botnik.util');
goog.require('om.dom');
goog.require('comp.core');
goog.require('skin.data');
goog.require('skin.style');
goog.require('hyper.terse');
goog.require('botnik.data');
goog.require('hyper.tools');
goog.require('dollar.bill');
goog.require('clojure.string');
goog.require('om.next');
goog.require('skin.core');
skin.core.register.call(null,new cljs.core.Keyword(null,"column","column",2078222095),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"column",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),[cljs.core.str([cljs.core.str(skin.core.render_block.call(null,"#input",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"right","right",-452581833),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),botnik.util.px.call(null,((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window)) * 0.45) - cljs.core.deref.call(null,skin.data.saved_height))),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0px"], null))),cljs.core.str(skin.core.render_block.call(null,".desktop.shifted #input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),"400px"], null))),cljs.core.str(skin.core.render_block.call(null,".row-header",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,skin.data.dgray),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"300",new cljs.core.Keyword(null,"height","height",1025178622),botnik.util.px.call(null,cljs.core.deref.call(null,skin.data.row_header)),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),[cljs.core.str("1px"),cljs.core.str(" "),cljs.core.str("solid"),cljs.core.str(" "),cljs.core.str(cljs.core.deref.call(null,skin.data.lgray))].join(''),new cljs.core.Keyword(null,"padding","padding",1660304693),[cljs.core.str("0em"),cljs.core.str(" "),cljs.core.str(botnik.util.px.call(null,cljs.core.deref.call(null,skin.data.indent)))].join('')], null))),cljs.core.str(skin.core.render_block.call(null,".row-header img",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),botnik.util.px.call(null,(26)),new cljs.core.Keyword(null,"height","height",1025178622),botnik.util.px.call(null,(26)),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),botnik.util.px.call(null,(6)),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"2px"], null))),cljs.core.str(skin.core.render_block.call(null,".row-header > *",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null))),cljs.core.str(skin.core.render_block.call(null,".row-header .name",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),botnik.util.px.call(null,cljs.core.deref.call(null,skin.data.row_header)),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"40%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null))),cljs.core.str(skin.core.render_block.call(null,".row-header .button",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"line-height","line-height",1870784992),botnik.util.px.call(null,cljs.core.deref.call(null,skin.data.row_header)),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"28px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null))),cljs.core.str(skin.core.render_block.call(null,".row-header .button:hover, .row-header .name:hover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null))),cljs.core.str(skin.core.render_block.call(null,".column, #loader",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"height","height",1025178622),botnik.util.px.call(null,(((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window)) * 0.55) - cljs.core.deref.call(null,skin.data.row_header)) | (0))),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null))),cljs.core.str(skin.core.render_block.call(null,"#loader",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"99999999",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("opacity"),cljs.core.str(" "),cljs.core.str("0.6s")].join('')], null))),cljs.core.str(skin.core.render_block.call(null,".column.loading",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null))),cljs.core.str(skin.core.render_block.call(null,".column",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999999998"], null))),cljs.core.str(skin.core.render_block.call(null,".mobile .row-header .name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)))].join(''))].join('')], null)], null)], null);
}));
/**
 * @constructor
 */
botnik.column.Column = (function botnik$column$Column(){
var this__33128__auto__ = this;
React.Component.apply(this__33128__auto__,arguments);

if(!((this__33128__auto__.initLocalState == null))){
this__33128__auto__.state = this__33128__auto__.initLocalState();
} else {
this__33128__auto__.state = {};
}

return this__33128__auto__;
});

botnik.column.Column.prototype = goog.object.clone(React.Component.prototype);

var x37213_37225 = botnik.column.Column.prototype;
x37213_37225.componentWillUpdate = ((function (x37213_37225){
return (function (next_props__33016__auto__,next_state__33017__auto__){
var this__33015__auto__ = this;
if(((!((this__33015__auto__ == null)))?(((false) || (this__33015__auto__.om$next$Ident$))?true:false):false)){
var ident__33019__auto___37226 = om.next.ident.call(null,this__33015__auto__,om.next.props.call(null,this__33015__auto__));
var next_ident__33020__auto___37227 = om.next.ident.call(null,this__33015__auto__,om.next._next_props.call(null,next_props__33016__auto__,this__33015__auto__));
if(cljs.core.not_EQ_.call(null,ident__33019__auto___37226,next_ident__33020__auto___37227)){
var idxr__33021__auto___37228 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__33021__auto___37228 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__33021__auto___37228),((function (idxr__33021__auto___37228,ident__33019__auto___37226,next_ident__33020__auto___37227,this__33015__auto__,x37213_37225){
return (function (indexes__33022__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__33022__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__33019__auto___37226], null),cljs.core.disj,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__33020__auto___37227], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__33015__auto__);
});})(idxr__33021__auto___37228,ident__33019__auto___37226,next_ident__33020__auto___37227,this__33015__auto__,x37213_37225))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__33015__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__33015__auto__);
});})(x37213_37225))
;

x37213_37225.shouldComponentUpdate = ((function (x37213_37225){
return (function (next_props__33016__auto__,next_state__33017__auto__){
var this__33015__auto__ = this;
var next_children__33018__auto__ = next_props__33016__auto__.children;
var next_props__33016__auto____$1 = goog.object.get(next_props__33016__auto__,"omcljs$value");
var next_props__33016__auto____$2 = (function (){var G__37215 = next_props__33016__auto____$1;
if((next_props__33016__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__37215);
} else {
return G__37215;
}
})();
var or__25976__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__33015__auto__),next_props__33016__auto____$2);
if(or__25976__auto__){
return or__25976__auto__;
} else {
var or__25976__auto____$1 = (function (){var and__25964__auto__ = this__33015__auto__.state;
if(cljs.core.truth_(and__25964__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__33015__auto__.state,"omcljs$state"),goog.object.get(next_state__33017__auto__,"omcljs$state"));
} else {
return and__25964__auto__;
}
})();
if(cljs.core.truth_(or__25976__auto____$1)){
return or__25976__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__33015__auto__.props.children,next_children__33018__auto__);
}
}
});})(x37213_37225))
;

x37213_37225.componentWillUnmount = ((function (x37213_37225){
return (function (){
var this__33015__auto__ = this;
var r__33026__auto__ = om.next.get_reconciler.call(null,this__33015__auto__);
var cfg__33027__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__33026__auto__);
var st__33028__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__33027__auto__);
var indexer__33025__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__33027__auto__);
if(cljs.core.truth_((function (){var and__25964__auto__ = !((st__33028__auto__ == null));
if(and__25964__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__33028__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__33015__auto__], null));
} else {
return and__25964__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__33028__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__33015__auto__);
} else {
}

if((indexer__33025__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__33025__auto__,this__33015__auto__);
}
});})(x37213_37225))
;

x37213_37225.componentDidUpdate = ((function (x37213_37225){
return (function (prev_props__33023__auto__,prev_state__33024__auto__){
var this__33015__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__33015__auto__);
});})(x37213_37225))
;

x37213_37225.isMounted = ((function (x37213_37225){
return (function (){
var this__33015__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__33015__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37213_37225))
;

x37213_37225.componentWillMount = ((function (x37213_37225){
return (function (){
var this__33015__auto__ = this;
var indexer__33025__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__33025__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__33025__auto__,this__33015__auto__);
}
});})(x37213_37225))
;

x37213_37225.render = ((function (x37213_37225){
return (function (){
var this__33014__auto__ = this;
var this$ = this__33014__auto__;
var _STAR_reconciler_STAR_37216 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37217 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37218 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37219 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37220 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__33014__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__33014__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__33014__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__33014__auto__);

om.next._STAR_parent_STAR_ = this__33014__auto__;

try{var props = om.next.props.call(null,this$);
return om.dom.div.call(null,{},om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row-header"], null))))], null)),om.dom.span.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props,_STAR_reconciler_STAR_37216,_STAR_depth_STAR_37217,_STAR_shared_STAR_37218,_STAR_instrument_STAR_37219,_STAR_parent_STAR_37220,this$,this__33014__auto__,x37213_37225){
return (function (e){
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu?","menu?",847361238)], null),true);
});})(props,_STAR_reconciler_STAR_37216,_STAR_depth_STAR_37217,_STAR_shared_STAR_37218,_STAR_instrument_STAR_37219,_STAR_parent_STAR_37220,this$,this__33014__auto__,x37213_37225))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name"], null))))], null)),"Source:",botnik.util.capitalize_words.call(null,clojure.string.replace.call(null,(function (){var or__25976__auto__ = cljs.core.deref.call(null,botnik.data.SOURCENAME);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return "";
}
})(),/[\_\-]/," "))),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props,_STAR_reconciler_STAR_37216,_STAR_depth_STAR_37217,_STAR_shared_STAR_37218,_STAR_instrument_STAR_37219,_STAR_parent_STAR_37220,this$,this__33014__auto__,x37213_37225){
return (function (e){
return new cljs.core.Keyword(null,"random-words!","random-words!",-515926889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.data.FN)).call(null);
});})(props,_STAR_reconciler_STAR_37216,_STAR_depth_STAR_37217,_STAR_shared_STAR_37218,_STAR_instrument_STAR_37219,_STAR_parent_STAR_37220,this$,this__33014__auto__,x37213_37225))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button"], null))))], null)),"Shuffle",om.dom.img.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"svg/shuffle.svg"], null))))),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"loader",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(props))?(1):(0))], null)], null)),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loader"], null))))], null)))),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["column",[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(props))?"loading":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677).cljs$core$IFn$_invoke$arity$1(props))?"arrow-input":null))].join('')], null))))], null)),cljs.core.map_indexed.call(null,((function (props,_STAR_reconciler_STAR_37216,_STAR_depth_STAR_37217,_STAR_shared_STAR_37218,_STAR_instrument_STAR_37219,_STAR_parent_STAR_37220,this$,this__33014__auto__,x37213_37225){
return (function (i,o){
return comp.core.onent.call(null,new cljs.core.Keyword(null,"word-block","word-block",876283534)).call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"word","word",-420123725),o], null));
});})(props,_STAR_reconciler_STAR_37216,_STAR_depth_STAR_37217,_STAR_shared_STAR_37218,_STAR_instrument_STAR_37219,_STAR_parent_STAR_37220,this$,this__33014__auto__,x37213_37225))
,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(props)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37220;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37219;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37218;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37217;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37216;
}});})(x37213_37225))
;


botnik.column.Column.prototype.constructor = botnik.column.Column;

botnik.column.Column.prototype.constructor.displayName = "botnik.column/Column";

botnik.column.Column.prototype.om$isComponent = true;

var x37223_37229 = botnik.column.Column;
/** @nocollapse */
x37223_37229.om$next$IQuery$ = true;

/** @nocollapse */
x37223_37229.om$next$IQuery$query$arity$1 = ((function (x37223_37229){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"corpus","corpus",-2028151250),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color","color",1011675173)], null)], null)], null);
});})(x37223_37229))
;


var x37224_37230 = botnik.column.Column.prototype;

x37224_37230.om$next$IQuery$ = true;


x37224_37230.om$next$IQuery$query$arity$1 = ((function (x37224_37230){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"corpus","corpus",-2028151250),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color","color",1011675173)], null)], null)], null);
});})(x37224_37230))
;


botnik.column.Column.cljs$lang$type = true;

botnik.column.Column.cljs$lang$ctorStr = "botnik.column/Column";

botnik.column.Column.cljs$lang$ctorPrWriter = (function (this__33131__auto__,writer__33132__auto__,opt__33133__auto__){
return cljs.core._write.call(null,writer__33132__auto__,"botnik.column/Column");
});
comp.core.register.call(null,new cljs.core.Keyword(null,"column","column",2078222095),botnik.column.Column,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=column.js.map?rel=1518788557061