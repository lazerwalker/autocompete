// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.slider');
goog.require('cljs.core');
goog.require('botnik.util');
goog.require('om.dom');
goog.require('comp.core');
goog.require('skin.data');
goog.require('skin.style');
goog.require('hyper.terse');
goog.require('botnik.data');
goog.require('hyper.tools');
goog.require('dollar.bill');
goog.require('om.next');
goog.require('skin.core');
skin.core.register.call(null,new cljs.core.Keyword(null,"slider","slider",-472668865),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"slider",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),[cljs.core.str([cljs.core.str(skin.core.render_block.call(null,"#sidebar label.slider",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null))),cljs.core.str(skin.core.render_block.call(null,"#sidebar label.slider:hover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null))),cljs.core.str(skin.core.render_block.call(null,".slider input",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null))),cljs.core.str(skin.core.render_block.call(null,".slider span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-0.3em"], null))),cljs.core.str(skin.core.render_block.call(null,".slider .left",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null))),cljs.core.str(skin.core.render_block.call(null,".slider .right",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)))].join(''))].join('')], null)], null)], null);
}));
/**
 * @constructor
 */
botnik.slider.Slider = (function botnik$slider$Slider(){
var this__33128__auto__ = this;
React.Component.apply(this__33128__auto__,arguments);

if(!((this__33128__auto__.initLocalState == null))){
this__33128__auto__.state = this__33128__auto__.initLocalState();
} else {
this__33128__auto__.state = {};
}

return this__33128__auto__;
});

botnik.slider.Slider.prototype = goog.object.clone(React.Component.prototype);

var x37237_37247 = botnik.slider.Slider.prototype;
x37237_37247.componentWillUpdate = ((function (x37237_37247){
return (function (next_props__33016__auto__,next_state__33017__auto__){
var this__33015__auto__ = this;
if(((!((this__33015__auto__ == null)))?(((false) || (this__33015__auto__.om$next$Ident$))?true:false):false)){
var ident__33019__auto___37248 = om.next.ident.call(null,this__33015__auto__,om.next.props.call(null,this__33015__auto__));
var next_ident__33020__auto___37249 = om.next.ident.call(null,this__33015__auto__,om.next._next_props.call(null,next_props__33016__auto__,this__33015__auto__));
if(cljs.core.not_EQ_.call(null,ident__33019__auto___37248,next_ident__33020__auto___37249)){
var idxr__33021__auto___37250 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__33021__auto___37250 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__33021__auto___37250),((function (idxr__33021__auto___37250,ident__33019__auto___37248,next_ident__33020__auto___37249,this__33015__auto__,x37237_37247){
return (function (indexes__33022__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__33022__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__33019__auto___37248], null),cljs.core.disj,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__33020__auto___37249], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__33015__auto__);
});})(idxr__33021__auto___37250,ident__33019__auto___37248,next_ident__33020__auto___37249,this__33015__auto__,x37237_37247))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__33015__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__33015__auto__);
});})(x37237_37247))
;

x37237_37247.shouldComponentUpdate = ((function (x37237_37247){
return (function (next_props__33016__auto__,next_state__33017__auto__){
var this__33015__auto__ = this;
var next_children__33018__auto__ = next_props__33016__auto__.children;
var next_props__33016__auto____$1 = goog.object.get(next_props__33016__auto__,"omcljs$value");
var next_props__33016__auto____$2 = (function (){var G__37239 = next_props__33016__auto____$1;
if((next_props__33016__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__37239);
} else {
return G__37239;
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
});})(x37237_37247))
;

x37237_37247.componentWillUnmount = ((function (x37237_37247){
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
});})(x37237_37247))
;

x37237_37247.componentDidUpdate = ((function (x37237_37247){
return (function (prev_props__33023__auto__,prev_state__33024__auto__){
var this__33015__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__33015__auto__);
});})(x37237_37247))
;

x37237_37247.isMounted = ((function (x37237_37247){
return (function (){
var this__33015__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__33015__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37237_37247))
;

x37237_37247.componentWillMount = ((function (x37237_37247){
return (function (){
var this__33015__auto__ = this;
var indexer__33025__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__33025__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__33025__auto__,this__33015__auto__);
}
});})(x37237_37247))
;

x37237_37247.render = ((function (x37237_37247){
return (function (){
var this__33014__auto__ = this;
var this$ = this__33014__auto__;
var _STAR_reconciler_STAR_37240 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37241 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37242 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37243 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37244 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__33014__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__33014__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__33014__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__33014__auto__);

om.next._STAR_parent_STAR_ = this__33014__auto__;

try{var props = om.next.props.call(null,this$);
return om.dom.label.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["slider","clearfix"], null))))], null)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(props),om.dom.input.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props) * (100)))].join(''),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (props,_STAR_reconciler_STAR_37240,_STAR_depth_STAR_37241,_STAR_shared_STAR_37242,_STAR_instrument_STAR_37243,_STAR_parent_STAR_37244,this$,this__33014__auto__,x37237_37247){
return (function (e){
var v = (0.01 * parseInt(e.nativeEvent.target.value));
return (function (){var or__25976__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return ((function (or__25976__auto__,v,props,_STAR_reconciler_STAR_37240,_STAR_depth_STAR_37241,_STAR_shared_STAR_37242,_STAR_instrument_STAR_37243,_STAR_parent_STAR_37244,this$,this__33014__auto__,x37237_37247){
return (function (_){
return null;
});
;})(or__25976__auto__,v,props,_STAR_reconciler_STAR_37240,_STAR_depth_STAR_37241,_STAR_shared_STAR_37242,_STAR_instrument_STAR_37243,_STAR_parent_STAR_37244,this$,this__33014__auto__,x37237_37247))
}
})().call(null,v);
});})(props,_STAR_reconciler_STAR_37240,_STAR_depth_STAR_37241,_STAR_shared_STAR_37242,_STAR_instrument_STAR_37243,_STAR_parent_STAR_37244,this$,this__33014__auto__,x37237_37247))
,new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),((function (props,_STAR_reconciler_STAR_37240,_STAR_depth_STAR_37241,_STAR_shared_STAR_37242,_STAR_instrument_STAR_37243,_STAR_parent_STAR_37244,this$,this__33014__auto__,x37237_37247){
return (function (e){
return (function (){var or__25976__auto__ = new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return ((function (or__25976__auto__,props,_STAR_reconciler_STAR_37240,_STAR_depth_STAR_37241,_STAR_shared_STAR_37242,_STAR_instrument_STAR_37243,_STAR_parent_STAR_37244,this$,this__33014__auto__,x37237_37247){
return (function (){
return null;
});
;})(or__25976__auto__,props,_STAR_reconciler_STAR_37240,_STAR_depth_STAR_37241,_STAR_shared_STAR_37242,_STAR_instrument_STAR_37243,_STAR_parent_STAR_37244,this$,this__33014__auto__,x37237_37247))
}
})().call(null);
});})(props,_STAR_reconciler_STAR_37240,_STAR_depth_STAR_37241,_STAR_shared_STAR_37242,_STAR_instrument_STAR_37243,_STAR_parent_STAR_37244,this$,this__33014__auto__,x37237_37247))
], null))),om.dom.span.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left"], null))))], null)),"0"),om.dom.span.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right"], null))))], null)),"1"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37244;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37243;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37242;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37241;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37240;
}});})(x37237_37247))
;


botnik.slider.Slider.prototype.constructor = botnik.slider.Slider;

botnik.slider.Slider.prototype.constructor.displayName = "botnik.slider/Slider";

botnik.slider.Slider.prototype.om$isComponent = true;

var x37245_37251 = botnik.slider.Slider;


var x37246_37252 = botnik.slider.Slider.prototype;


botnik.slider.Slider.cljs$lang$type = true;

botnik.slider.Slider.cljs$lang$ctorStr = "botnik.slider/Slider";

botnik.slider.Slider.cljs$lang$ctorPrWriter = (function (this__33131__auto__,writer__33132__auto__,opt__33133__auto__){
return cljs.core._write.call(null,writer__33132__auto__,"botnik.slider/Slider");
});
comp.core.register.call(null,new cljs.core.Keyword(null,"slider","slider",-472668865),botnik.slider.Slider);

//# sourceMappingURL=slider.js.map?rel=1518788557230