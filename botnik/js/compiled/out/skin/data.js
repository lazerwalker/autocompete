// Compiled by ClojureScript 1.9.229 {}
goog.provide('skin.data');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('skin.core');
goog.require('thi.ng.color.core');
if(typeof skin.data.window !== 'undefined'){
} else {
skin.data.window = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
}
if(typeof skin.data.gutters !== 'undefined'){
} else {
skin.data.gutters = reagent.core.atom.call(null,(20));
}
if(typeof skin.data.app !== 'undefined'){
} else {
skin.data.app = reagent.core.atom.call(null,skin.core.virtual_css.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em"], null)));
}
if(typeof skin.data.suggestions !== 'undefined'){
} else {
skin.data.suggestions = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6)], null));
}
if(typeof skin.data.indent !== 'undefined'){
} else {
skin.data.indent = reagent.core.atom.call(null,(45));
}
skin.data.lgray = reagent.core.atom.call(null,"#c4c4c4");
skin.data.mgray = reagent.core.atom.call(null,"#5d5d5d");
skin.data.dgray = reagent.core.atom.call(null,"#1e1e1e");
skin.data.hlight = reagent.core.atom.call(null,"#ce812e");
if(typeof skin.data.bottom_bar !== 'undefined'){
} else {
skin.data.bottom_bar = reagent.core.atom.call(null,(50));
}
if(typeof skin.data.story_perc !== 'undefined'){
} else {
skin.data.story_perc = reagent.core.atom.call(null,0.5);
}
if(typeof skin.data.story_height !== 'undefined'){
} else {
skin.data.story_height = reagent.ratom.make_reaction.call(null,(function (){
return (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,skin.data.window)) * cljs.core.deref.call(null,skin.data.story_perc));
}));
}
if(typeof skin.data.turbo_height !== 'undefined'){
} else {
skin.data.turbo_height = reagent.core.atom.call(null,(45));
}
if(typeof skin.data.row_header !== 'undefined'){
} else {
skin.data.row_header = reagent.core.atom.call(null,(40));
}
if(typeof skin.data.saved_height !== 'undefined'){
} else {
skin.data.saved_height = reagent.core.atom.call(null,(45));
}
skin.data.variants = (function skin$data$variants(s,c){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.str),cljs.core.range.call(null,(-10),(11))),cljs.core.mapv.call(null,(function (p1__35819_SHARP_){
return cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,thi.ng.color.core.analog.call(null,thi.ng.color.core.css.call(null,s),(0),(0),p1__35819_SHARP_)));
}),cljs.core.map.call(null,(function (p1__35820_SHARP_){
return ((p1__35820_SHARP_ * 0.1) * c);
}),cljs.core.range.call(null,(-10),(11)))));
});
if(typeof skin.data.color_scheme !== 'undefined'){
} else {
skin.data.color_scheme = reagent.core.atom.call(null,"#a92525");
}
if(typeof skin.data.colors !== 'undefined'){
} else {
skin.data.colors = reagent.ratom.make_reaction.call(null,(function (){
return skin.data.variants.call(null,cljs.core.deref.call(null,skin.data.color_scheme),0.8);
}));
}
cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"color-scheme","color-scheme",736689232,null),"#2e8496");

//# sourceMappingURL=data.js.map?rel=1518788553044