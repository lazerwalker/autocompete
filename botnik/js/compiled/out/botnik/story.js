// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.story');
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
skin.core.register.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"mobile",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),[cljs.core.str([cljs.core.str(skin.core.render_block.call(null,"div.edit-mode.mobile #input, div.edit-mode.mobile #saved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))),cljs.core.str(skin.core.render_block.call(null,"div.edit-mode.mobile #story, div.edit-mode.mobile #story.editor",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),botnik.util.px.call(null,((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window)) * (1)) - cljs.core.deref.call(null,skin.data.turbo_height)))], null))),cljs.core.str(skin.core.render_block.call(null,"div.edit-mode #story",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0"], null))),cljs.core.str(skin.core.render_block.call(null,"div.edit-mode #story.editor",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)))].join(''))].join('')], null)], null)], null);
}));
skin.core.register.call(null,new cljs.core.Keyword(null,"story-comp","story-comp",-1619592886),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"story-comp",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),[cljs.core.str([cljs.core.str(skin.core.render_block.call(null,".story-holder",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"right","right",-452581833),"0px"], null))),cljs.core.str(skin.core.render_block.call(null,".desktop.shifted .story-holder",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),"400px"], null))),cljs.core.str(skin.core.render_block.call(null,"#story",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],["border-box","pre-wrap","1em",[cljs.core.str("bottom"),cljs.core.str(" "),cljs.core.str("0.2s")].join(''),botnik.util.px.call(null,cljs.core.deref.call(null,skin.data.turbo_height)),"100","100%","#1e1e1e","0",botnik.util.px.call(null,cljs.core.deref.call(null,skin.data.indent)),"absolute","'Roboto Mono', monospace",botnik.util.px.call(null,(((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window)) * 0.45) - cljs.core.deref.call(null,skin.data.turbo_height)) - cljs.core.deref.call(null,skin.data.saved_height)))]))),cljs.core.str(skin.core.render_block.call(null,"#story.editor",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["white",(cljs.core.truth_(botnik.util.mobile_QMARK_.call(null))?new cljs.core.Keyword(null,"-1px","-1px",-986884050):new cljs.core.Keyword(null,"0px","0px",-576744978)),"none","none","1","rgb(242,184,121)",[cljs.core.str("0px"),cljs.core.str(" "),cljs.core.str("solid"),cljs.core.str(" "),cljs.core.str("transparent")].join(''),"0px",botnik.util.px.call(null,(((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window)) * 0.45) - cljs.core.deref.call(null,skin.data.turbo_height)) - cljs.core.deref.call(null,skin.data.saved_height)))]))),cljs.core.str(skin.core.render_block.call(null,".drag #story",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null))),cljs.core.str(skin.core.render_block.call(null,".drag #story.editor",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))),cljs.core.str(skin.core.render_block.call(null,"#story.saved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),botnik.util.px.call(null,(cljs.core.deref.call(null,skin.data.story_height) + cljs.core.deref.call(null,skin.data.saved_height)))], null)))].join(''))].join('')], null)], null)], null);
}));
botnik.story.sync_scroll = (function botnik$story$sync_scroll(){
var editor = cljs.core.first.call(null,dollar.bill.$.call(null,"#story.editor"));
var story = cljs.core.first.call(null,dollar.bill.$.call(null,"#story.display"));
return editor.scrollTop = story.scrollTop;
});
botnik.story.scroll_down_BANG_ = (function botnik$story$scroll_down_BANG_(id){
var el = botnik.util.by_id.call(null,id);
var cursor = cljs.core.first.call(null,dollar.bill.$.call(null,".cursor"));
try{return cursor.scrollIntoViewIfNeeded();
}catch (e37256){if((e37256 instanceof Error)){
var e = e37256;
return cursor.scrollIntoView();
} else {
throw e37256;

}
}});
botnik.story.selection_change = (function botnik$story$selection_change(target){
var start = target.selectionStart;
var end = target.selectionEnd;
if(cljs.core.truth_(cljs.core.deref.call(null,botnik.data.word_cooldown))){
return null;
} else {
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"story","story",-1000647533)], null),target.value);

botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null));

return new cljs.core.Keyword(null,"refresh-words!","refresh-words!",-807710723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.data.FN)).call(null);
}
});
botnik.story.sync_native_select = (function botnik$story$sync_native_select(){
var vec__37260 = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,botnik.data.app_state));
var start = cljs.core.nth.call(null,vec__37260,(0),null);
var end = cljs.core.nth.call(null,vec__37260,(1),null);
var target = cljs.core.first.call(null,dollar.bill.$.call(null,"#story.editor"));
target.selectionStart = start;

return target.selectionEnd = end;
});
/**
 * @constructor
 */
botnik.story.Story = (function botnik$story$Story(){
var this__33128__auto__ = this;
React.Component.apply(this__33128__auto__,arguments);

if(!((this__33128__auto__.initLocalState == null))){
this__33128__auto__.state = this__33128__auto__.initLocalState();
} else {
this__33128__auto__.state = {};
}

return this__33128__auto__;
});

botnik.story.Story.prototype = goog.object.clone(React.Component.prototype);

var x37267_37280 = botnik.story.Story.prototype;
x37267_37280.componentWillUpdate = ((function (x37267_37280){
return (function (next_props__33016__auto__,next_state__33017__auto__){
var this__33015__auto__ = this;
if(((!((this__33015__auto__ == null)))?(((false) || (this__33015__auto__.om$next$Ident$))?true:false):false)){
var ident__33019__auto___37281 = om.next.ident.call(null,this__33015__auto__,om.next.props.call(null,this__33015__auto__));
var next_ident__33020__auto___37282 = om.next.ident.call(null,this__33015__auto__,om.next._next_props.call(null,next_props__33016__auto__,this__33015__auto__));
if(cljs.core.not_EQ_.call(null,ident__33019__auto___37281,next_ident__33020__auto___37282)){
var idxr__33021__auto___37283 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__33021__auto___37283 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__33021__auto___37283),((function (idxr__33021__auto___37283,ident__33019__auto___37281,next_ident__33020__auto___37282,this__33015__auto__,x37267_37280){
return (function (indexes__33022__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__33022__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__33019__auto___37281], null),cljs.core.disj,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__33020__auto___37282], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__33015__auto__);
});})(idxr__33021__auto___37283,ident__33019__auto___37281,next_ident__33020__auto___37282,this__33015__auto__,x37267_37280))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__33015__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__33015__auto__);
});})(x37267_37280))
;

x37267_37280.shouldComponentUpdate = ((function (x37267_37280){
return (function (next_props__33016__auto__,next_state__33017__auto__){
var this__33015__auto__ = this;
var next_children__33018__auto__ = next_props__33016__auto__.children;
var next_props__33016__auto____$1 = goog.object.get(next_props__33016__auto__,"omcljs$value");
var next_props__33016__auto____$2 = (function (){var G__37269 = next_props__33016__auto____$1;
if((next_props__33016__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__37269);
} else {
return G__37269;
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
});})(x37267_37280))
;

x37267_37280.componentWillUnmount = ((function (x37267_37280){
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
});})(x37267_37280))
;

x37267_37280.isMounted = ((function (x37267_37280){
return (function (){
var this__33015__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__33015__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37267_37280))
;

x37267_37280.componentWillMount = ((function (x37267_37280){
return (function (){
var this__33015__auto__ = this;
var indexer__33025__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33015__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__33025__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__33025__auto__,this__33015__auto__);
}
});})(x37267_37280))
;

x37267_37280.componentDidUpdate = ((function (x37267_37280){
return (function (prev_props__33005__auto__,prev_state__33006__auto__){
var this__33004__auto__ = this;
var this$ = this__33004__auto__;
var props = om.next._prev_props.call(null,prev_props__33005__auto__,this__33004__auto__);
var state = goog.object.get(prev_state__33006__auto__,"omcljs$previousState");
var target_37284 = om.dom.node.call(null,this$,"editor");
var story_37285 = om.dom.node.call(null,this$,"story");
botnik.story.scroll_down_BANG_.call(null,"story");

target_37284.scrollTop = story_37285.scrollTop;

return om.next.clear_prev_props_BANG_.call(null,this__33004__auto__);
});})(x37267_37280))
;

x37267_37280.componentDidMount = ((function (x37267_37280){
return (function (p,n){
var this$ = this;
return cljs.core.first.call(null,dollar.bill.$.call(null,"#story.editor")).focus();
});})(x37267_37280))
;

x37267_37280.render = ((function (x37267_37280){
return (function (){
var this__33014__auto__ = this;
var this$ = this__33014__auto__;
var _STAR_reconciler_STAR_37270 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37271 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37272 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37273 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37274 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__33014__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__33014__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__33014__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__33014__auto__);

om.next._STAR_parent_STAR_ = this__33014__auto__;

try{var props = om.next.props.call(null,this$);
var words = (function (){var or__25976__auto__ = new cljs.core.Keyword(null,"story","story",-1000647533).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return "";
}
})();
var vec__37275 = (function (){var or__25976__auto__ = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
})();
var sel_start = cljs.core.nth.call(null,vec__37275,(0),null);
var sel_end = cljs.core.nth.call(null,vec__37275,(1),null);
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["story-holder"], null))))], null)),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"story",new cljs.core.Keyword(null,"ref","ref",1289896967),"story",new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["display"], null))))], null)),cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,sel_start,words)),om.dom.span.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor"], null))))], null)),cljs.core.apply.call(null,cljs.core.str,cljs.core.subvec.call(null,cljs.core.vec.call(null,words),sel_start,sel_end))),cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,sel_end,words))),om.dom.textarea.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onSelect","onSelect",251862405),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"onBlur","onBlur",229342509),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"onKeyUp","onKeyUp",1550785041),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"onScroll","onScroll",-1660866632),new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.Keyword(null,"onClick","onClick",-1991238530)],[((function (props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280){
return (function (e){
return botnik.story.selection_change.call(null,om.dom.node.call(null,this$,"editor"));
});})(props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280))
,"editor",words,((function (props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280){
return (function (e){
if(cljs.core.not.call(null,(function (){var or__25976__auto__ = botnik.util.mobile_QMARK_.call(null);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return new cljs.core.Keyword(null,"menu?","menu?",847361238).cljs$core$IFn$_invoke$arity$1(props);
}
})())){
var target = e.nativeEvent.target;
return setTimeout(((function (target,props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280){
return (function (){
target.focus();

return botnik.story.sync_native_select.call(null);
});})(target,props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280))
,(100));
} else {
return botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),false);
}
});})(props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280))
,cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["editor"], null)))),((function (props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280){
return (function (e){
return null;
});})(props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280))
,"story",((function (props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280){
return (function (e){
var target = e.nativeEvent.target;
var story = om.dom.node.call(null,this$,"story");
return story.scrollTop = target.scrollTop;
});})(props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280))
,((function (props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280){
return (function (e){
return null;
});})(props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280))
,((function (props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280){
return (function (e){
botnik.util.mutate_val_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),true);

return botnik.util.mutate_in_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root-refresh","root-refresh",-637514951),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.inc);
});})(props,words,vec__37275,sel_start,sel_end,_STAR_reconciler_STAR_37270,_STAR_depth_STAR_37271,_STAR_shared_STAR_37272,_STAR_instrument_STAR_37273,_STAR_parent_STAR_37274,this$,this__33014__auto__,x37267_37280))
]))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37274;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37273;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37272;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37271;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37270;
}});})(x37267_37280))
;


botnik.story.Story.prototype.constructor = botnik.story.Story;

botnik.story.Story.prototype.constructor.displayName = "botnik.story/Story";

botnik.story.Story.prototype.om$isComponent = true;

var x37278_37286 = botnik.story.Story;
/** @nocollapse */
x37278_37286.om$next$IQuery$ = true;

/** @nocollapse */
x37278_37286.om$next$IQuery$query$arity$1 = ((function (x37278_37286){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"story","story",-1000647533),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu?","menu?",847361238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x37278_37286))
;


var x37279_37287 = botnik.story.Story.prototype;

x37279_37287.om$next$IQuery$ = true;


x37279_37287.om$next$IQuery$query$arity$1 = ((function (x37279_37287){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"story","story",-1000647533),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu?","menu?",847361238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x37279_37287))
;


botnik.story.Story.cljs$lang$type = true;

botnik.story.Story.cljs$lang$ctorStr = "botnik.story/Story";

botnik.story.Story.cljs$lang$ctorPrWriter = (function (this__33131__auto__,writer__33132__auto__,opt__33133__auto__){
return cljs.core._write.call(null,writer__33132__auto__,"botnik.story/Story");
});
comp.core.register.call(null,new cljs.core.Keyword(null,"story","story",-1000647533),botnik.story.Story);

//# sourceMappingURL=story.js.map?rel=1518788557451