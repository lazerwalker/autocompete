// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25976__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_35625 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_35625){
return (function (){
var _STAR_always_update_STAR_35626 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_35626;
}});})(_STAR_always_update_STAR_35625))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_35625;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args35627 = [];
var len__27051__auto___35630 = arguments.length;
var i__27052__auto___35631 = (0);
while(true){
if((i__27052__auto___35631 < len__27051__auto___35630)){
args35627.push((arguments[i__27052__auto___35631]));

var G__35632 = (i__27052__auto___35631 + (1));
i__27052__auto___35631 = G__35632;
continue;
} else {
}
break;
}

var G__35629 = args35627.length;
switch (G__35629) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35627.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__35638_35642 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__35639_35643 = null;
var count__35640_35644 = (0);
var i__35641_35645 = (0);
while(true){
if((i__35641_35645 < count__35640_35644)){
var v_35646 = cljs.core._nth.call(null,chunk__35639_35643,i__35641_35645);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_35646);

var G__35647 = seq__35638_35642;
var G__35648 = chunk__35639_35643;
var G__35649 = count__35640_35644;
var G__35650 = (i__35641_35645 + (1));
seq__35638_35642 = G__35647;
chunk__35639_35643 = G__35648;
count__35640_35644 = G__35649;
i__35641_35645 = G__35650;
continue;
} else {
var temp__4657__auto___35651 = cljs.core.seq.call(null,seq__35638_35642);
if(temp__4657__auto___35651){
var seq__35638_35652__$1 = temp__4657__auto___35651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35638_35652__$1)){
var c__26787__auto___35653 = cljs.core.chunk_first.call(null,seq__35638_35652__$1);
var G__35654 = cljs.core.chunk_rest.call(null,seq__35638_35652__$1);
var G__35655 = c__26787__auto___35653;
var G__35656 = cljs.core.count.call(null,c__26787__auto___35653);
var G__35657 = (0);
seq__35638_35642 = G__35654;
chunk__35639_35643 = G__35655;
count__35640_35644 = G__35656;
i__35641_35645 = G__35657;
continue;
} else {
var v_35658 = cljs.core.first.call(null,seq__35638_35652__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_35658);

var G__35659 = cljs.core.next.call(null,seq__35638_35652__$1);
var G__35660 = null;
var G__35661 = (0);
var G__35662 = (0);
seq__35638_35642 = G__35659;
chunk__35639_35643 = G__35660;
count__35640_35644 = G__35661;
i__35641_35645 = G__35662;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1518788552541