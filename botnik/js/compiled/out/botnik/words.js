// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.words');
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
skin.core.register.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"dynamic",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),[cljs.core.str([cljs.core.str(skin.core.render_block.call(null,".block",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(((100) / cljs.core.get.call(null,cljs.core.deref.call(null,skin.data.suggestions),(0)))),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"300",new cljs.core.Keyword(null,"color","color",1011675173),"rgb(180,180,180)",new cljs.core.Keyword(null,"height","height",1025178622),botnik.util.px.call(null,(((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window)) * 0.55) - cljs.core.deref.call(null,skin.data.row_header)) / cljs.core.get.call(null,cljs.core.deref.call(null,skin.data.suggestions),(1)))),new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null))),cljs.core.str(skin.core.render_block.call(null,"#saved .block .key, #dragged .block .key",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))),cljs.core.str(skin.core.render_block.call(null,"span.key",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"11px",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"padding","padding",1660304693),[cljs.core.str("4px"),cljs.core.str(" "),cljs.core.str("8px")].join(''),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-10px",new cljs.core.Keyword(null,"color","color",1011675173),"rgb(200,200,200)"], null))),cljs.core.str(skin.core.render_block.call(null,".block span:nth-child(2)",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"line-height","line-height",1870784992),botnik.util.px.call(null,(((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window)) * 0.55) - cljs.core.deref.call(null,skin.data.row_header)) / (12)))], null))),cljs.core.str(skin.core.render_block.call(null,".column .word, #dragged .word",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("color"),cljs.core.str(" "),cljs.core.str("0.1s")].join(''),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-right","border-right",-668932860),[cljs.core.str("1px"),cljs.core.str(" "),cljs.core.str("solid"),cljs.core.str(" "),cljs.core.str("rgb(200,200,200)")].join(''),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),[cljs.core.str("1px"),cljs.core.str(" "),cljs.core.str("solid"),cljs.core.str(" "),cljs.core.str("rgb(200,200,200)")].join('')], null))),cljs.core.str(skin.core.render_block.call(null,".column.loading .word",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"silver"], null))),cljs.core.str(skin.core.render_block.call(null,".dragging .column .word:active",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"white"], null))),cljs.core.str(skin.core.render_block.call(null,"#dragged .block",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"height","height",1025178622)],["6em",[cljs.core.str("0.2em"),cljs.core.str(" "),cljs.core.str("0.2em"),cljs.core.str(" "),cljs.core.str("0.5em"),cljs.core.str(" "),cljs.core.str("rgba(0,0,0,0.7)")].join(''),"1em","-400px","auto","9999999999","absolute",[cljs.core.str("0.2em"),cljs.core.str(" "),cljs.core.str("solid"),cljs.core.str(" "),cljs.core.str("black")].join(''),"none","3em"]))),cljs.core.str(skin.core.render_block.call(null,".arrow-input .word.selected",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ffffa1"], null))),cljs.core.str(skin.core.render_block.call(null,".word:hover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(242,184,121)"], null)))].join(''))].join('')], null)], null)], null);
}));
botnik.words.last_word = botnik.data.last_word;
/**
 * @constructor
 */
botnik.words.WordBlock = (function botnik$words$WordBlock(){
var this__33128__auto__ = this;
React.Component.apply(this__33128__auto__,arguments);

if(!((this__33128__auto__.initLocalState == null))){
this__33128__auto__.state = this__33128__auto__.initLocalState();
} else {
this__33128__auto__.state = {};
}

return this__33128__auto__;
});

botnik.words.WordBlock.prototype = goog.object.clone(React.Component.prototype);

var x37162_37172 = botnik.words.WordBlock.prototype;
x37162_37172.componentWillUpdate = ((function (x37162_37172){
return (function (next_props__33016__auto__,next_state__33017__auto__){
var this__33015__auto__ = this;
if(((!((this__33015__auto__ == null)))?(((false) || (this__33015__auto__.om$next$Ident$))?true:false):false)){
var ident__33019__auto___37173 = om.next.ident.call(null,this__33015__auto__,om.next.props.call(null,this__33015__auto__));
var next_ident__33020__auto___37174 = om.next.ident.call(null,this__33015__auto__,om.next._next_props.call(null,next_props__33016__auto__,this__33015__auto__));
if(cljs.core.not_EQ_.call(null,ident__33019__auto___37173,next_ident__33020__auto___37174)){
var idxr__33021__auto___37175 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__33021__auto___37175 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__33021__auto___37175),((function (idxr__33021__auto___37175,ident__33019__auto___37173,next_ident__33020__auto___37174,this__33015__auto__,x37162_37172){
return (function (indexes__33022__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__33022__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__33019__auto___37173], null),cljs.core.disj,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__33020__auto___37174], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__33015__auto__);
});})(idxr__33021__auto___37175,ident__33019__auto___37173,next_ident__33020__auto___37174,this__33015__auto__,x37162_37172))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__33015__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__33015__auto__);
});})(x37162_37172))
;

x37162_37172.shouldComponentUpdate = ((function (x37162_37172){
return (function (next_props__33016__auto__,next_state__33017__auto__){
var this__33015__auto__ = this;
var next_children__33018__auto__ = next_props__33016__auto__.children;
var next_props__33016__auto____$1 = goog.object.get(next_props__33016__auto__,"omcljs$value");
var next_props__33016__auto____$2 = (function (){var G__37164 = next_props__33016__auto____$1;
if((next_props__33016__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__37164);
} else {
return G__37164;
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
});})(x37162_37172))
;

x37162_37172.componentWillUnmount = ((function (x37162_37172){
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
});})(x37162_37172))
;

x37162_37172.componentDidUpdate = ((function (x37162_37172){
return (function (prev_props__33023__auto__,prev_state__33024__auto__){
var this__33015__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__33015__auto__);
});})(x37162_37172))
;

x37162_37172.isMounted = ((function (x37162_37172){
return (function (){
var this__33015__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__33015__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37162_37172))
;

x37162_37172.componentWillMount = ((function (x37162_37172){
return (function (){
var this__33015__auto__ = this;
var indexer__33025__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__33025__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__33025__auto__,this__33015__auto__);
}
});})(x37162_37172))
;

x37162_37172.componentDidMount = ((function (x37162_37172){
return (function (){
var this$ = this;
var ham = botnik.util.draggable.call(null,om.dom.node.call(null,this$,"word"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"panstart","panstart",1108124795),((function (this$,x37162_37172){
return (function (e){
if(cljs.core.truth_((function (){var and__25964__auto__ = cljs.core._EQ_.call(null,(2),e.eventType);
if(and__25964__auto__){
return new cljs.core.Keyword(null,"save-bar","save-bar",-706472269).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.data.app_state));
} else {
return and__25964__auto__;
}
})())){
var props = om.next.props.call(null,this$);
var el = om.dom.node.call(null,this$,"word");
var clone = cljs.core.first.call(null,dollar.bill.$.call(null,(el["outerHTML"])));
var holder = cljs.core.first.call(null,dollar.bill.$.call(null,"#dragged"));
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dragging","dragging",1185097613)], null),cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),clone,new cljs.core.Keyword(null,"saved","saved",288760660),true], null)));

(holder["innerHTML"] = "");

holder.appendChild(clone);

return botnik.util.log.call(null,e);
} else {
return null;
}
});})(this$,x37162_37172))
,new cljs.core.Keyword(null,"pan","pan",-307712792),((function (this$,x37162_37172){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.data.app_state)))){
var props = om.next.props.call(null,this$);
var el = new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.data.app_state)));
var center = (e["center"]);
var rect = el.getBoundingClientRect();
var x = (center["x"]);
var y = (center["y"]);
if(cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))){
botnik.util.style_BANG_.call(null,el,new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str((x - ((rect["width"]) * 0.5))),cljs.core.str("px")].join(''));

return botnik.util.style_BANG_.call(null,el,new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str((y - ((rect["height"]) * 0.5))),cljs.core.str("px")].join(''));
} else {
return null;
}
} else {
return null;
}
});})(this$,x37162_37172))
,new cljs.core.Keyword(null,"panend","panend",-1535438998),((function (this$,x37162_37172){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.data.app_state)))){
var props = om.next.props.call(null,this$);
var holder = cljs.core.first.call(null,dollar.bill.$.call(null,"#dragged"));
var y = ((e["center"])["y"]);
var drop_bottom = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window));
botnik.util.log.call(null,e);

if((((drop_bottom - (60)) < y)) && ((y < drop_bottom))){
botnik.util.log.call(null,"drop!");

botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-words","saved-words",-866322621)], null),((function (props,holder,y,drop_bottom,this$,x37162_37172){
return (function (p1__37156_SHARP_){
return cljs.core.conj.call(null,p1__37156_SHARP_,new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.data.app_state)));
});})(props,holder,y,drop_bottom,this$,x37162_37172))
);
} else {
}

(holder["innerHTML"] = "");

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dragging","dragging",1185097613)], null),false);

return setTimeout(((function (props,holder,y,drop_bottom,this$,x37162_37172){
return (function (){
return cljs.core.first.call(null,dollar.bill.$.call(null,"#story.editor")).focus();
});})(props,holder,y,drop_bottom,this$,x37162_37172))
,(150));
} else {
return null;
}
});})(this$,x37162_37172))
], null),({"touchAction": "compute", "recognizers": [[Hammer.Pan,({"direction": Hammer.DIRECTION_VERTICAL, "threshold": (20)})]]}));
return null;
});})(x37162_37172))
;

x37162_37172.render = ((function (x37162_37172){
return (function (){
var this__33014__auto__ = this;
var this$ = this__33014__auto__;
var _STAR_reconciler_STAR_37165 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37166 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37167 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37168 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37169 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__33014__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__33014__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__33014__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__33014__auto__);

om.next._STAR_parent_STAR_ = this__33014__auto__;

try{var props = om.next.props.call(null,this$);
var word = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(props);
var len = cljs.core.count.call(null,word);
var bw = (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window)) / (3));
var size = (((len < (6)))?(24):(((len < (10)))?(20):(((len < (12)))?(18):(12)
)));
var line = (size * 1.2);
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),[cljs.core.str(size),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),[cljs.core.str(line),cljs.core.str("px")].join('')], null),new cljs.core.Keyword(null,"ref","ref",1289896967),"word",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (props,word,len,bw,size,line,_STAR_reconciler_STAR_37165,_STAR_depth_STAR_37166,_STAR_shared_STAR_37167,_STAR_instrument_STAR_37168,_STAR_parent_STAR_37169,this$,this__33014__auto__,x37162_37172){
return (function (e){
var word__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"saved","saved",288760660).cljs$core$IFn$_invoke$arity$1(props))?word:cljs.core.get.call(null,cljs.core.vec.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,botnik.data.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"words","words",1924933001)], null))),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)));
if(cljs.core.truth_((function (){var or__25976__auto__ = cljs.core._EQ_.call(null,word__$1,cljs.core.deref.call(null,botnik.words.last_word));
if(or__25976__auto__){
return or__25976__auto__;
} else {
var or__25976__auto____$1 = cljs.core.deref.call(null,botnik.data.word_cooldown);
if(cljs.core.truth_(or__25976__auto____$1)){
return or__25976__auto____$1;
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,botnik.data.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"loading","loading",-737050189)], null));
}
}
})())){
} else {
new cljs.core.Keyword(null,"insert-word","insert-word",1259807519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.data.FN)).call(null,word__$1);

cljs.core.reset_BANG_.call(null,botnik.data.word_cooldown,true);

setTimeout(((function (word__$1,props,word,len,bw,size,line,_STAR_reconciler_STAR_37165,_STAR_depth_STAR_37166,_STAR_shared_STAR_37167,_STAR_instrument_STAR_37168,_STAR_parent_STAR_37169,this$,this__33014__auto__,x37162_37172){
return (function (){
return cljs.core.reset_BANG_.call(null,botnik.data.word_cooldown,false);
});})(word__$1,props,word,len,bw,size,line,_STAR_reconciler_STAR_37165,_STAR_depth_STAR_37166,_STAR_shared_STAR_37167,_STAR_instrument_STAR_37168,_STAR_parent_STAR_37169,this$,this__33014__auto__,x37162_37172))
,(50));

if(cljs.core.truth_(new cljs.core.Keyword(null,"saved","saved",288760660).cljs$core$IFn$_invoke$arity$1(props))){
botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-words","saved-words",-866322621)], null),((function (word__$1,props,word,len,bw,size,line,_STAR_reconciler_STAR_37165,_STAR_depth_STAR_37166,_STAR_shared_STAR_37167,_STAR_instrument_STAR_37168,_STAR_parent_STAR_37169,this$,this__33014__auto__,x37162_37172){
return (function (p1__37157_SHARP_){
return botnik.util.vec_remove.call(null,p1__37157_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props));
});})(word__$1,props,word,len,bw,size,line,_STAR_reconciler_STAR_37165,_STAR_depth_STAR_37166,_STAR_shared_STAR_37167,_STAR_instrument_STAR_37168,_STAR_parent_STAR_37169,this$,this__33014__auto__,x37162_37172))
);
} else {
}
}

return cljs.core.reset_BANG_.call(null,botnik.words.last_word,word__$1);
});})(props,word,len,bw,size,line,_STAR_reconciler_STAR_37165,_STAR_depth_STAR_37166,_STAR_shared_STAR_37167,_STAR_instrument_STAR_37168,_STAR_parent_STAR_37169,this$,this__33014__auto__,x37162_37172))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["word","block",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)))?"selected":"")], null))))], null)),(cljs.core.truth_(botnik.util.mobile_QMARK_.call(null))?null:om.dom.span.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key"], null))))], null)),((((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) + (1)) < (10)))?(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) + (1)):((((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) + (1)) < (20)))?[cljs.core.str("ALT-"),cljs.core.str(((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) + (1)) - (10)))].join(''):null)))),om.dom.span.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),word));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37169;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37168;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37167;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37166;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37165;
}});})(x37162_37172))
;


botnik.words.WordBlock.prototype.constructor = botnik.words.WordBlock;

botnik.words.WordBlock.prototype.constructor.displayName = "botnik.words/WordBlock";

botnik.words.WordBlock.prototype.om$isComponent = true;

var x37170_37176 = botnik.words.WordBlock;


var x37171_37177 = botnik.words.WordBlock.prototype;


botnik.words.WordBlock.cljs$lang$type = true;

botnik.words.WordBlock.cljs$lang$ctorStr = "botnik.words/WordBlock";

botnik.words.WordBlock.cljs$lang$ctorPrWriter = (function (this__33131__auto__,writer__33132__auto__,opt__33133__auto__){
return cljs.core._write.call(null,writer__33132__auto__,"botnik.words/WordBlock");
});
comp.core.register.call(null,new cljs.core.Keyword(null,"word-block","word-block",876283534),botnik.words.WordBlock,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=words.js.map?rel=1518788556480