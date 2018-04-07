// Compiled by ClojureScript 1.9.229 {}
goog.provide('skin.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('dollar.bill');
if(typeof skin.core.sheet_map !== 'undefined'){
} else {
skin.core.sheet_map = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
skin.core.vectorize = (function skin$core$vectorize(v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
});
skin.core.vec_wrap = (function skin$core$vec_wrap(v){
var v__$1 = skin.core.vectorize.call(null,v);
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,v__$1))){
return v__$1;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1], null);
}
});
skin.core.register = (function skin$core$register(var_args){
var args35792 = [];
var len__27051__auto___35795 = arguments.length;
var i__27052__auto___35796 = (0);
while(true){
if((i__27052__auto___35796 < len__27051__auto___35795)){
args35792.push((arguments[i__27052__auto___35796]));

var G__35797 = (i__27052__auto___35796 + (1));
i__27052__auto___35796 = G__35797;
continue;
} else {
}
break;
}

var G__35794 = args35792.length;
switch (G__35794) {
case 1:
return skin.core.register.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return skin.core.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35792.length)].join('')));

}
});

skin.core.register.cljs$core$IFn$_invoke$arity$1 = (function (c){
cljs.core.swap_BANG_.call(null,skin.core.sheet_map,cljs.core.assoc,c,skin.core.vec_wrap.call(null,c));

return true;
});

skin.core.register.cljs$core$IFn$_invoke$arity$2 = (function (k,c){
cljs.core.swap_BANG_.call(null,skin.core.sheet_map,cljs.core.assoc,k,skin.core.vec_wrap.call(null,c));

return true;
});

skin.core.register.cljs$lang$maxFixedArity = 2;

skin.core.unregister = (function skin$core$unregister(var_args){
var args35799 = [];
var len__27051__auto___35802 = arguments.length;
var i__27052__auto___35803 = (0);
while(true){
if((i__27052__auto___35803 < len__27051__auto___35802)){
args35799.push((arguments[i__27052__auto___35803]));

var G__35804 = (i__27052__auto___35803 + (1));
i__27052__auto___35803 = G__35804;
continue;
} else {
}
break;
}

var G__35801 = args35799.length;
switch (G__35801) {
case 1:
return skin.core.unregister.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return skin.core.unregister.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35799.length)].join('')));

}
});

skin.core.unregister.cljs$core$IFn$_invoke$arity$1 = (function (c){
cljs.core.swap_BANG_.call(null,skin.core.sheet_map,cljs.core.dissoc,c,skin.core.vec_wrap.call(null,c));

return true;
});

skin.core.unregister.cljs$core$IFn$_invoke$arity$2 = (function (k,c){
cljs.core.swap_BANG_.call(null,skin.core.sheet_map,cljs.core.dissoc,k,skin.core.vec_wrap.call(null,c));

return true;
});

skin.core.unregister.cljs$lang$maxFixedArity = 2;

skin.core.preparse = (function skin$core$preparse(v){
if(cljs.core.integer_QMARK_.call(null,v)){
return [cljs.core.str(v),cljs.core.str("px")].join('');
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.clj__GT_js.call(null,v);
} else {
if(typeof v === 'number'){
return [cljs.core.str(v)].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.mapv.call(null,skin$core$preparse,v);
} else {
return v;

}
}
}
}
});
skin.core.parse = (function skin$core$parse(v){
var res = ((typeof v === 'string')?v:((cljs.core.vector_QMARK_.call(null,v))?cljs.core.mapv.call(null,skin$core$parse,v):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)
));
if((cljs.core.sequential_QMARK_.call(null,res)) || (cljs.core.array_QMARK_.call(null,res))){
var G__35807 = cljs.core.count.call(null,res);
switch (G__35807) {
case (0):
return null;

break;
case (1):
return cljs.core.first.call(null,res);

break;
default:
return cljs.core.vec.call(null,res);

}
} else {
return res;
}
});
skin.core.virtual_css = (function skin$core$virtual_css(data){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,data),cljs.core.map.call(null,cljs.core.comp.call(null,skin.core.parse,skin.core.preparse),cljs.core.vals.call(null,data)));
});
skin.core.render_value = (function skin$core$render_value(v){
if(cljs.core.integer_QMARK_.call(null,v)){
return [cljs.core.str(v),cljs.core.str("px")].join('');
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.clj__GT_js.call(null,v);
} else {
if(typeof v === 'number'){
return [cljs.core.str(v),cljs.core.str("px")].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.apply.call(null,cljs.core.str,v);
} else {
return [cljs.core.str(v)].join('');

}
}
}
}
});
skin.core.render_block = (function skin$core$render_block(rule,m){
return [cljs.core.str("\n"),cljs.core.str(rule),cljs.core.str(" {"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__35813){
var vec__35814 = p__35813;
var k = cljs.core.nth.call(null,vec__35814,(0),null);
var v = cljs.core.nth.call(null,vec__35814,(1),null);
return cljs.core.interleave.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.clj__GT_js.call(null,k),skin.core.render_value.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n  ",":",";"], null));
}),m))),cljs.core.str("}")].join('');
});
skin.core.css = skin.core.virtual_css;
skin.core.block = skin.core.render_block;
skin.core.inspect = (function skin$core$inspect(k){
var temp__4657__auto__ = k.call(null,cljs.core.deref.call(null,skin.core.sheet_map));
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
cljs.core.println.call(null,[cljs.core.str("\""),cljs.core.str(cljs.core.get_in.call(null,f.call(null,(0)).call(null,(0)).call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.Keyword(null,"__html","__html",674048345)], null))),cljs.core.str("\"")].join(''));

return new cljs.core.Symbol(null,"*","*",345799209,null);
} else {
return null;
}
});
if(typeof skin.core._virtual_el !== 'undefined'){
} else {
skin.core._virtual_el = dollar.bill.append.call(null,cljs.core.first.call(null,dollar.bill.$.call(null,"head")),dollar.bill.$.call(null,"<div id='skin'></div>"));
}
skin.core.main = (function skin$core$main(){
return cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.deref.call(null,skin.core.sheet_map)))));
});
skin.core.mount = (function skin$core$mount(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [skin.core.main], null),cljs.core.first.call(null,dollar.bill.$.call(null,"#skin")));
});

//# sourceMappingURL=core.js.map?rel=1518788552990