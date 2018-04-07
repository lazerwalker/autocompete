// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.turbobar');
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
skin.core.register.call(null,new cljs.core.Keyword(null,"turbo","turbo",846610757),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"turbo",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),[cljs.core.str([cljs.core.str(skin.core.render_block.call(null,".turbo-bar",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),botnik.util.px.call(null,cljs.core.deref.call(null,skin.data.turbo_height)),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"-1","-1",1292149670).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.colors))], null))),cljs.core.str(skin.core.render_block.call(null,".turbo-bar .label",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622)],["border-box","white","center","1.1em","80px",new cljs.core.Keyword(null,"3","3",2097825370).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.colors)),"pointer",[cljs.core.str("9px"),cljs.core.str(" "),cljs.core.str("0.3em")].join(''),"absolute",botnik.util.px.call(null,cljs.core.deref.call(null,skin.data.turbo_height))]))),cljs.core.str(skin.core.render_block.call(null,".turbo-bar .slider",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"left","left",-399115937),"80px",new cljs.core.Keyword(null,"right","right",-452581833),"0em",new cljs.core.Keyword(null,"height","height",1025178622),botnik.util.px.call(null,cljs.core.deref.call(null,skin.data.turbo_height)),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null))),cljs.core.str(skin.core.render_block.call(null,".turbo-bar.off .slider",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.4"], null))),cljs.core.str(skin.core.render_block.call(null,".turbo-bar .numbers",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438)],["white","0.9em","13px","12px","space-between","flex",[cljs.core.str("1px"),cljs.core.str(" "),cljs.core.str("solid"),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"3","3",2097825370).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.colors)))].join(''),"courier, monospace","row"]))),cljs.core.str(skin.core.render_block.call(null,".turbo-bar .knob",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"5px",new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border","border",1444987323),[cljs.core.str("1px"),cljs.core.str(" "),cljs.core.str("solid"),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"-3","-3",-1480022845).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.colors)))].join('')], null)))].join(''))].join('')], null)], null)], null);
}));
if(typeof botnik.turbobar.AUTO !== 'undefined'){
} else {
botnik.turbobar.AUTO = cljs.core.atom.call(null,true);
}
botnik.turbobar.auto_word_BANG_ = (function botnik$turbobar$auto_word_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"turbo","turbo",846610757).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.data.app_state))))){
var words_37182 = cljs.core.vec.call(null,dollar.bill.$.call(null,".column .word.block"));
if(!(cljs.core.empty_QMARK_.call(null,words_37182))){
var word_37183 = cljs.core.rand_nth.call(null,words_37182);
word_37183.click();
} else {
}
} else {
}

var speed = (cljs.core.deref.call(null,botnik.data.TURBOSPEED) + (1));
var timer = ((2500) / (speed * speed));
return setTimeout(botnik$turbobar$auto_word_BANG_,timer);
});
if(typeof botnik.turbobar._auto !== 'undefined'){
} else {
botnik.turbobar._auto = botnik.turbobar.auto_word_BANG_.call(null);
}
/**
 * @constructor
 */
botnik.turbobar.TurboBar = (function botnik$turbobar$TurboBar(){
var this__33128__auto__ = this;
React.Component.apply(this__33128__auto__,arguments);

if(!((this__33128__auto__.initLocalState == null))){
this__33128__auto__.state = this__33128__auto__.initLocalState();
} else {
this__33128__auto__.state = {};
}

return this__33128__auto__;
});

botnik.turbobar.TurboBar.prototype = goog.object.clone(React.Component.prototype);

var x37188_37201 = botnik.turbobar.TurboBar.prototype;
x37188_37201.componentWillUpdate = ((function (x37188_37201){
return (function (next_props__33016__auto__,next_state__33017__auto__){
var this__33015__auto__ = this;
if(((!((this__33015__auto__ == null)))?(((false) || (this__33015__auto__.om$next$Ident$))?true:false):false)){
var ident__33019__auto___37202 = om.next.ident.call(null,this__33015__auto__,om.next.props.call(null,this__33015__auto__));
var next_ident__33020__auto___37203 = om.next.ident.call(null,this__33015__auto__,om.next._next_props.call(null,next_props__33016__auto__,this__33015__auto__));
if(cljs.core.not_EQ_.call(null,ident__33019__auto___37202,next_ident__33020__auto___37203)){
var idxr__33021__auto___37204 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__33021__auto___37204 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__33021__auto___37204),((function (idxr__33021__auto___37204,ident__33019__auto___37202,next_ident__33020__auto___37203,this__33015__auto__,x37188_37201){
return (function (indexes__33022__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__33022__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__33019__auto___37202], null),cljs.core.disj,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__33020__auto___37203], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__33015__auto__);
});})(idxr__33021__auto___37204,ident__33019__auto___37202,next_ident__33020__auto___37203,this__33015__auto__,x37188_37201))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__33015__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__33015__auto__);
});})(x37188_37201))
;

x37188_37201.shouldComponentUpdate = ((function (x37188_37201){
return (function (next_props__33016__auto__,next_state__33017__auto__){
var this__33015__auto__ = this;
var next_children__33018__auto__ = next_props__33016__auto__.children;
var next_props__33016__auto____$1 = goog.object.get(next_props__33016__auto__,"omcljs$value");
var next_props__33016__auto____$2 = (function (){var G__37190 = next_props__33016__auto____$1;
if((next_props__33016__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__37190);
} else {
return G__37190;
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
});})(x37188_37201))
;

x37188_37201.componentWillUnmount = ((function (x37188_37201){
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
});})(x37188_37201))
;

x37188_37201.componentDidUpdate = ((function (x37188_37201){
return (function (prev_props__33023__auto__,prev_state__33024__auto__){
var this__33015__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__33015__auto__);
});})(x37188_37201))
;

x37188_37201.isMounted = ((function (x37188_37201){
return (function (){
var this__33015__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__33015__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37188_37201))
;

x37188_37201.componentWillMount = ((function (x37188_37201){
return (function (){
var this__33015__auto__ = this;
var indexer__33025__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__33025__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__33025__auto__,this__33015__auto__);
}
});})(x37188_37201))
;

x37188_37201.componentDidMount = ((function (x37188_37201){
return (function (){
var this$ = this;
var set_slider = ((function (this$,x37188_37201){
return (function (e){
var increments = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var ham = om.dom.node.call(null,this$,"slider");
var knob = om.dom.node.call(null,this$,"knob");
var slider_rect = ham.getBoundingClientRect();
var center = e.center;
var vec__37191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center.x,center.y], null);
var x = cljs.core.nth.call(null,vec__37191,(0),null);
var y = cljs.core.nth.call(null,vec__37191,(1),null);
var working_width = slider_rect.width;
var knob_x = (function (){var x__26307__auto__ = (10);
var y__26308__auto__ = (function (){var x__26314__auto__ = (x - slider_rect.left);
var y__26315__auto__ = (slider_rect.width - (15));
return ((x__26314__auto__ < y__26315__auto__) ? x__26314__auto__ : y__26315__auto__);
})();
return ((x__26307__auto__ > y__26308__auto__) ? x__26307__auto__ : y__26308__auto__);
})();
var ratio = (knob_x / working_width);
var step = (((ratio * increments) + 0.5) | (0));
var step_x = ((10) + (step * (working_width / (increments + 0.35))));
cljs.core.reset_BANG_.call(null,botnik.data.TURBOSPEED,step);

return botnik.util.style_BANG_.call(null,knob,new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str(knob_x),cljs.core.str("px")].join(''));
});})(this$,x37188_37201))
;
var ham = botnik.util.draggable.call(null,om.dom.node.call(null,this$,"slider"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"panstart","panstart",1108124795),((function (set_slider,this$,x37188_37201){
return (function (e){
return botnik.util.log.call(null,e);
});})(set_slider,this$,x37188_37201))
,new cljs.core.Keyword(null,"tap","tap",-1086702463),set_slider,new cljs.core.Keyword(null,"pan","pan",-307712792),set_slider,new cljs.core.Keyword(null,"panend","panend",-1535438998),((function (set_slider,this$,x37188_37201){
return (function (e){
return null;
});})(set_slider,this$,x37188_37201))
], null),({"touchAction": "compute", "recognizers": [[Hammer.Pan,({})],[Hammer.Tap,({})]]}));
return null;
});})(x37188_37201))
;

x37188_37201.render = ((function (x37188_37201){
return (function (){
var this__33014__auto__ = this;
var this$ = this__33014__auto__;
var _STAR_reconciler_STAR_37194 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37195 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37196 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37197 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37198 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__33014__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__33014__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__33014__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__33014__auto__);

om.next._STAR_parent_STAR_ = this__33014__auto__;

try{var props = om.next.props.call(null,this$);
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["turbo-bar",(cljs.core.truth_(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(props))?"on":"off")], null))))], null)),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props,_STAR_reconciler_STAR_37194,_STAR_depth_STAR_37195,_STAR_shared_STAR_37196,_STAR_instrument_STAR_37197,_STAR_parent_STAR_37198,this$,this__33014__auto__,x37188_37201){
return (function (e){
return botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turbo","turbo",846610757),new cljs.core.Keyword(null,"on","on",173873944)], null),cljs.core.not);
});})(props,_STAR_reconciler_STAR_37194,_STAR_depth_STAR_37195,_STAR_shared_STAR_37196,_STAR_instrument_STAR_37197,_STAR_parent_STAR_37198,this$,this__33014__auto__,x37188_37201))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label"], null))))], null)),"TURBO TEXT"),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"slider",new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["slider"], null))))], null)),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"knob",new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["knob"], null))))], null))),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["numbers"], null))))], null)),cljs.core.map.call(null,((function (props,_STAR_reconciler_STAR_37194,_STAR_depth_STAR_37195,_STAR_shared_STAR_37196,_STAR_instrument_STAR_37197,_STAR_parent_STAR_37198,this$,this__33014__auto__,x37188_37201){
return (function (n){
return om.dom.span.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),n,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["setting"], null))))], null)),(n + (1)));
});})(props,_STAR_reconciler_STAR_37194,_STAR_depth_STAR_37195,_STAR_shared_STAR_37196,_STAR_instrument_STAR_37197,_STAR_parent_STAR_37198,this$,this__33014__auto__,x37188_37201))
,cljs.core.range.call(null,(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(props) + (1)))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37198;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37197;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37196;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37195;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37194;
}});})(x37188_37201))
;


botnik.turbobar.TurboBar.prototype.constructor = botnik.turbobar.TurboBar;

botnik.turbobar.TurboBar.prototype.constructor.displayName = "botnik.turbobar/TurboBar";

botnik.turbobar.TurboBar.prototype.om$isComponent = true;

var x37199_37205 = botnik.turbobar.TurboBar;


var x37200_37206 = botnik.turbobar.TurboBar.prototype;


botnik.turbobar.TurboBar.cljs$lang$type = true;

botnik.turbobar.TurboBar.cljs$lang$ctorStr = "botnik.turbobar/TurboBar";

botnik.turbobar.TurboBar.cljs$lang$ctorPrWriter = (function (this__33131__auto__,writer__33132__auto__,opt__33133__auto__){
return cljs.core._write.call(null,writer__33132__auto__,"botnik.turbobar/TurboBar");
});
comp.core.register.call(null,new cljs.core.Keyword(null,"turbo-bar","turbo-bar",2001220018),botnik.turbobar.TurboBar);

//# sourceMappingURL=turbobar.js.map?rel=1518788556814