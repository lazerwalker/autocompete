// Compiled by ClojureScript 1.9.229 {}
goog.provide('om.next.cache');
goog.require('cljs.core');

/**
* @constructor
 * @implements {om.next.cache.Object}
*/
om.next.cache.Cache = (function (arr,index,size){
this.arr = arr;
this.index = index;
this.size = size;
})
om.next.cache.Cache.prototype.add = (function (id,x){
var self__ = this;
var this$ = this;
var x_SINGLEQUOTE__27874 = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"client-time","client-time",-1212214195),(new Date()));
if((self__.size <= self__.arr.length)){
var id_SINGLEQUOTE__27875 = self__.arr.shift();
cljs.core.swap_BANG_.call(null,self__.index,((function (id_SINGLEQUOTE__27875,x_SINGLEQUOTE__27874,this$){
return (function (p1__27873_SHARP_){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p1__27873_SHARP_,id_SINGLEQUOTE__27875),id,x_SINGLEQUOTE__27874);
});})(id_SINGLEQUOTE__27875,x_SINGLEQUOTE__27874,this$))
);
} else {
cljs.core.swap_BANG_.call(null,self__.index,cljs.core.assoc,id,x_SINGLEQUOTE__27874);
}

return self__.arr.push(id);
});

om.next.cache.Cache.prototype.get = (function (id){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,cljs.core.deref.call(null,self__.index),id);
});

om.next.cache.Cache.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

om.next.cache.Cache.cljs$lang$type = true;

om.next.cache.Cache.cljs$lang$ctorStr = "om.next.cache/Cache";

om.next.cache.Cache.cljs$lang$ctorPrWriter = (function (this__26582__auto__,writer__26583__auto__,opt__26584__auto__){
return cljs.core._write.call(null,writer__26583__auto__,"om.next.cache/Cache");
});

om.next.cache.__GT_Cache = (function om$next$cache$__GT_Cache(arr,index,size){
return (new om.next.cache.Cache(arr,index,size));
});

om.next.cache.cache = (function om$next$cache$cache(size){
return (new om.next.cache.Cache([],cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),size));
});

//# sourceMappingURL=cache.js.map?rel=1518788504212