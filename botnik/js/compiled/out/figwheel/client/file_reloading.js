// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25976__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25976__auto__){
return or__25976__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25976__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41327_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41327_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41332 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41333 = null;
var count__41334 = (0);
var i__41335 = (0);
while(true){
if((i__41335 < count__41334)){
var n = cljs.core._nth.call(null,chunk__41333,i__41335);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41336 = seq__41332;
var G__41337 = chunk__41333;
var G__41338 = count__41334;
var G__41339 = (i__41335 + (1));
seq__41332 = G__41336;
chunk__41333 = G__41337;
count__41334 = G__41338;
i__41335 = G__41339;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41332);
if(temp__4657__auto__){
var seq__41332__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41332__$1)){
var c__26787__auto__ = cljs.core.chunk_first.call(null,seq__41332__$1);
var G__41340 = cljs.core.chunk_rest.call(null,seq__41332__$1);
var G__41341 = c__26787__auto__;
var G__41342 = cljs.core.count.call(null,c__26787__auto__);
var G__41343 = (0);
seq__41332 = G__41340;
chunk__41333 = G__41341;
count__41334 = G__41342;
i__41335 = G__41343;
continue;
} else {
var n = cljs.core.first.call(null,seq__41332__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41344 = cljs.core.next.call(null,seq__41332__$1);
var G__41345 = null;
var G__41346 = (0);
var G__41347 = (0);
seq__41332 = G__41344;
chunk__41333 = G__41345;
count__41334 = G__41346;
i__41335 = G__41347;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41398_41409 = cljs.core.seq.call(null,deps);
var chunk__41399_41410 = null;
var count__41400_41411 = (0);
var i__41401_41412 = (0);
while(true){
if((i__41401_41412 < count__41400_41411)){
var dep_41413 = cljs.core._nth.call(null,chunk__41399_41410,i__41401_41412);
topo_sort_helper_STAR_.call(null,dep_41413,(depth + (1)),state);

var G__41414 = seq__41398_41409;
var G__41415 = chunk__41399_41410;
var G__41416 = count__41400_41411;
var G__41417 = (i__41401_41412 + (1));
seq__41398_41409 = G__41414;
chunk__41399_41410 = G__41415;
count__41400_41411 = G__41416;
i__41401_41412 = G__41417;
continue;
} else {
var temp__4657__auto___41418 = cljs.core.seq.call(null,seq__41398_41409);
if(temp__4657__auto___41418){
var seq__41398_41419__$1 = temp__4657__auto___41418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41398_41419__$1)){
var c__26787__auto___41420 = cljs.core.chunk_first.call(null,seq__41398_41419__$1);
var G__41421 = cljs.core.chunk_rest.call(null,seq__41398_41419__$1);
var G__41422 = c__26787__auto___41420;
var G__41423 = cljs.core.count.call(null,c__26787__auto___41420);
var G__41424 = (0);
seq__41398_41409 = G__41421;
chunk__41399_41410 = G__41422;
count__41400_41411 = G__41423;
i__41401_41412 = G__41424;
continue;
} else {
var dep_41425 = cljs.core.first.call(null,seq__41398_41419__$1);
topo_sort_helper_STAR_.call(null,dep_41425,(depth + (1)),state);

var G__41426 = cljs.core.next.call(null,seq__41398_41419__$1);
var G__41427 = null;
var G__41428 = (0);
var G__41429 = (0);
seq__41398_41409 = G__41426;
chunk__41399_41410 = G__41427;
count__41400_41411 = G__41428;
i__41401_41412 = G__41429;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41402){
var vec__41406 = p__41402;
var seq__41407 = cljs.core.seq.call(null,vec__41406);
var first__41408 = cljs.core.first.call(null,seq__41407);
var seq__41407__$1 = cljs.core.next.call(null,seq__41407);
var x = first__41408;
var xs = seq__41407__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41406,seq__41407,first__41408,seq__41407__$1,x,xs,get_deps__$1){
return (function (p1__41348_SHARP_){
return clojure.set.difference.call(null,p1__41348_SHARP_,x);
});})(vec__41406,seq__41407,first__41408,seq__41407__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41442 = cljs.core.seq.call(null,provides);
var chunk__41443 = null;
var count__41444 = (0);
var i__41445 = (0);
while(true){
if((i__41445 < count__41444)){
var prov = cljs.core._nth.call(null,chunk__41443,i__41445);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41446_41454 = cljs.core.seq.call(null,requires);
var chunk__41447_41455 = null;
var count__41448_41456 = (0);
var i__41449_41457 = (0);
while(true){
if((i__41449_41457 < count__41448_41456)){
var req_41458 = cljs.core._nth.call(null,chunk__41447_41455,i__41449_41457);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41458,prov);

var G__41459 = seq__41446_41454;
var G__41460 = chunk__41447_41455;
var G__41461 = count__41448_41456;
var G__41462 = (i__41449_41457 + (1));
seq__41446_41454 = G__41459;
chunk__41447_41455 = G__41460;
count__41448_41456 = G__41461;
i__41449_41457 = G__41462;
continue;
} else {
var temp__4657__auto___41463 = cljs.core.seq.call(null,seq__41446_41454);
if(temp__4657__auto___41463){
var seq__41446_41464__$1 = temp__4657__auto___41463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41446_41464__$1)){
var c__26787__auto___41465 = cljs.core.chunk_first.call(null,seq__41446_41464__$1);
var G__41466 = cljs.core.chunk_rest.call(null,seq__41446_41464__$1);
var G__41467 = c__26787__auto___41465;
var G__41468 = cljs.core.count.call(null,c__26787__auto___41465);
var G__41469 = (0);
seq__41446_41454 = G__41466;
chunk__41447_41455 = G__41467;
count__41448_41456 = G__41468;
i__41449_41457 = G__41469;
continue;
} else {
var req_41470 = cljs.core.first.call(null,seq__41446_41464__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41470,prov);

var G__41471 = cljs.core.next.call(null,seq__41446_41464__$1);
var G__41472 = null;
var G__41473 = (0);
var G__41474 = (0);
seq__41446_41454 = G__41471;
chunk__41447_41455 = G__41472;
count__41448_41456 = G__41473;
i__41449_41457 = G__41474;
continue;
}
} else {
}
}
break;
}

var G__41475 = seq__41442;
var G__41476 = chunk__41443;
var G__41477 = count__41444;
var G__41478 = (i__41445 + (1));
seq__41442 = G__41475;
chunk__41443 = G__41476;
count__41444 = G__41477;
i__41445 = G__41478;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41442);
if(temp__4657__auto__){
var seq__41442__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41442__$1)){
var c__26787__auto__ = cljs.core.chunk_first.call(null,seq__41442__$1);
var G__41479 = cljs.core.chunk_rest.call(null,seq__41442__$1);
var G__41480 = c__26787__auto__;
var G__41481 = cljs.core.count.call(null,c__26787__auto__);
var G__41482 = (0);
seq__41442 = G__41479;
chunk__41443 = G__41480;
count__41444 = G__41481;
i__41445 = G__41482;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41442__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41450_41483 = cljs.core.seq.call(null,requires);
var chunk__41451_41484 = null;
var count__41452_41485 = (0);
var i__41453_41486 = (0);
while(true){
if((i__41453_41486 < count__41452_41485)){
var req_41487 = cljs.core._nth.call(null,chunk__41451_41484,i__41453_41486);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41487,prov);

var G__41488 = seq__41450_41483;
var G__41489 = chunk__41451_41484;
var G__41490 = count__41452_41485;
var G__41491 = (i__41453_41486 + (1));
seq__41450_41483 = G__41488;
chunk__41451_41484 = G__41489;
count__41452_41485 = G__41490;
i__41453_41486 = G__41491;
continue;
} else {
var temp__4657__auto___41492__$1 = cljs.core.seq.call(null,seq__41450_41483);
if(temp__4657__auto___41492__$1){
var seq__41450_41493__$1 = temp__4657__auto___41492__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41450_41493__$1)){
var c__26787__auto___41494 = cljs.core.chunk_first.call(null,seq__41450_41493__$1);
var G__41495 = cljs.core.chunk_rest.call(null,seq__41450_41493__$1);
var G__41496 = c__26787__auto___41494;
var G__41497 = cljs.core.count.call(null,c__26787__auto___41494);
var G__41498 = (0);
seq__41450_41483 = G__41495;
chunk__41451_41484 = G__41496;
count__41452_41485 = G__41497;
i__41453_41486 = G__41498;
continue;
} else {
var req_41499 = cljs.core.first.call(null,seq__41450_41493__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41499,prov);

var G__41500 = cljs.core.next.call(null,seq__41450_41493__$1);
var G__41501 = null;
var G__41502 = (0);
var G__41503 = (0);
seq__41450_41483 = G__41500;
chunk__41451_41484 = G__41501;
count__41452_41485 = G__41502;
i__41453_41486 = G__41503;
continue;
}
} else {
}
}
break;
}

var G__41504 = cljs.core.next.call(null,seq__41442__$1);
var G__41505 = null;
var G__41506 = (0);
var G__41507 = (0);
seq__41442 = G__41504;
chunk__41443 = G__41505;
count__41444 = G__41506;
i__41445 = G__41507;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41512_41516 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41513_41517 = null;
var count__41514_41518 = (0);
var i__41515_41519 = (0);
while(true){
if((i__41515_41519 < count__41514_41518)){
var ns_41520 = cljs.core._nth.call(null,chunk__41513_41517,i__41515_41519);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41520);

var G__41521 = seq__41512_41516;
var G__41522 = chunk__41513_41517;
var G__41523 = count__41514_41518;
var G__41524 = (i__41515_41519 + (1));
seq__41512_41516 = G__41521;
chunk__41513_41517 = G__41522;
count__41514_41518 = G__41523;
i__41515_41519 = G__41524;
continue;
} else {
var temp__4657__auto___41525 = cljs.core.seq.call(null,seq__41512_41516);
if(temp__4657__auto___41525){
var seq__41512_41526__$1 = temp__4657__auto___41525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41512_41526__$1)){
var c__26787__auto___41527 = cljs.core.chunk_first.call(null,seq__41512_41526__$1);
var G__41528 = cljs.core.chunk_rest.call(null,seq__41512_41526__$1);
var G__41529 = c__26787__auto___41527;
var G__41530 = cljs.core.count.call(null,c__26787__auto___41527);
var G__41531 = (0);
seq__41512_41516 = G__41528;
chunk__41513_41517 = G__41529;
count__41514_41518 = G__41530;
i__41515_41519 = G__41531;
continue;
} else {
var ns_41532 = cljs.core.first.call(null,seq__41512_41526__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41532);

var G__41533 = cljs.core.next.call(null,seq__41512_41526__$1);
var G__41534 = null;
var G__41535 = (0);
var G__41536 = (0);
seq__41512_41516 = G__41533;
chunk__41513_41517 = G__41534;
count__41514_41518 = G__41535;
i__41515_41519 = G__41536;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25976__auto__ = goog.require__;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__41537__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41538__i = 0, G__41538__a = new Array(arguments.length -  0);
while (G__41538__i < G__41538__a.length) {G__41538__a[G__41538__i] = arguments[G__41538__i + 0]; ++G__41538__i;}
  args = new cljs.core.IndexedSeq(G__41538__a,0);
} 
return G__41537__delegate.call(this,args);};
G__41537.cljs$lang$maxFixedArity = 0;
G__41537.cljs$lang$applyTo = (function (arglist__41539){
var args = cljs.core.seq(arglist__41539);
return G__41537__delegate(args);
});
G__41537.cljs$core$IFn$_invoke$arity$variadic = G__41537__delegate;
return G__41537;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41540 = cljs.core._EQ_;
var expr__41541 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41540.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41541))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__41540,expr__41541){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__41540,expr__41541))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__41540,expr__41541){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41543){if((e41543 instanceof Error)){
var e = e41543;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41543;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__41540,expr__41541))
} else {
if(cljs.core.truth_(pred__41540.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41541))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__41540.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__41541))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__41540.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__41541))){
return ((function (pred__41540,expr__41541){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41544){if((e41544 instanceof Error)){
var e = e41544;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41544;

}
}})());
});
;})(pred__41540,expr__41541))
} else {
return ((function (pred__41540,expr__41541){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41540,expr__41541))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41545,callback){
var map__41548 = p__41545;
var map__41548__$1 = ((((!((map__41548 == null)))?((((map__41548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41548):map__41548);
var file_msg = map__41548__$1;
var request_url = cljs.core.get.call(null,map__41548__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41548,map__41548__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41548,map__41548__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__){
return (function (state_41572){
var state_val_41573 = (state_41572[(1)]);
if((state_val_41573 === (7))){
var inst_41568 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
var statearr_41574_41594 = state_41572__$1;
(statearr_41574_41594[(2)] = inst_41568);

(statearr_41574_41594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41573 === (1))){
var state_41572__$1 = state_41572;
var statearr_41575_41595 = state_41572__$1;
(statearr_41575_41595[(2)] = null);

(statearr_41575_41595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41573 === (4))){
var inst_41552 = (state_41572[(7)]);
var inst_41552__$1 = (state_41572[(2)]);
var state_41572__$1 = (function (){var statearr_41576 = state_41572;
(statearr_41576[(7)] = inst_41552__$1);

return statearr_41576;
})();
if(cljs.core.truth_(inst_41552__$1)){
var statearr_41577_41596 = state_41572__$1;
(statearr_41577_41596[(1)] = (5));

} else {
var statearr_41578_41597 = state_41572__$1;
(statearr_41578_41597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41573 === (6))){
var state_41572__$1 = state_41572;
var statearr_41579_41598 = state_41572__$1;
(statearr_41579_41598[(2)] = null);

(statearr_41579_41598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41573 === (3))){
var inst_41570 = (state_41572[(2)]);
var state_41572__$1 = state_41572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41572__$1,inst_41570);
} else {
if((state_val_41573 === (2))){
var state_41572__$1 = state_41572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41572__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41573 === (11))){
var inst_41564 = (state_41572[(2)]);
var state_41572__$1 = (function (){var statearr_41580 = state_41572;
(statearr_41580[(8)] = inst_41564);

return statearr_41580;
})();
var statearr_41581_41599 = state_41572__$1;
(statearr_41581_41599[(2)] = null);

(statearr_41581_41599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41573 === (9))){
var inst_41556 = (state_41572[(9)]);
var inst_41558 = (state_41572[(10)]);
var inst_41560 = inst_41558.call(null,inst_41556);
var state_41572__$1 = state_41572;
var statearr_41582_41600 = state_41572__$1;
(statearr_41582_41600[(2)] = inst_41560);

(statearr_41582_41600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41573 === (5))){
var inst_41552 = (state_41572[(7)]);
var inst_41554 = figwheel.client.file_reloading.blocking_load.call(null,inst_41552);
var state_41572__$1 = state_41572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41572__$1,(8),inst_41554);
} else {
if((state_val_41573 === (10))){
var inst_41556 = (state_41572[(9)]);
var inst_41562 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41556);
var state_41572__$1 = state_41572;
var statearr_41583_41601 = state_41572__$1;
(statearr_41583_41601[(2)] = inst_41562);

(statearr_41583_41601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41573 === (8))){
var inst_41558 = (state_41572[(10)]);
var inst_41552 = (state_41572[(7)]);
var inst_41556 = (state_41572[(2)]);
var inst_41557 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41558__$1 = cljs.core.get.call(null,inst_41557,inst_41552);
var state_41572__$1 = (function (){var statearr_41584 = state_41572;
(statearr_41584[(9)] = inst_41556);

(statearr_41584[(10)] = inst_41558__$1);

return statearr_41584;
})();
if(cljs.core.truth_(inst_41558__$1)){
var statearr_41585_41602 = state_41572__$1;
(statearr_41585_41602[(1)] = (9));

} else {
var statearr_41586_41603 = state_41572__$1;
(statearr_41586_41603[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto__))
;
return ((function (switch__38318__auto__,c__38430__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38319__auto__ = null;
var figwheel$client$file_reloading$state_machine__38319__auto____0 = (function (){
var statearr_41590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41590[(0)] = figwheel$client$file_reloading$state_machine__38319__auto__);

(statearr_41590[(1)] = (1));

return statearr_41590;
});
var figwheel$client$file_reloading$state_machine__38319__auto____1 = (function (state_41572){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_41572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e41591){if((e41591 instanceof Object)){
var ex__38322__auto__ = e41591;
var statearr_41592_41604 = state_41572;
(statearr_41592_41604[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41605 = state_41572;
state_41572 = G__41605;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38319__auto__ = function(state_41572){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38319__auto____1.call(this,state_41572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38319__auto____0;
figwheel$client$file_reloading$state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38319__auto____1;
return figwheel$client$file_reloading$state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__))
})();
var state__38432__auto__ = (function (){var statearr_41593 = f__38431__auto__.call(null);
(statearr_41593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_41593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__))
);

return c__38430__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41606,callback){
var map__41609 = p__41606;
var map__41609__$1 = ((((!((map__41609 == null)))?((((map__41609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41609):map__41609);
var file_msg = map__41609__$1;
var namespace = cljs.core.get.call(null,map__41609__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41609,map__41609__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41609,map__41609__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41611){
var map__41614 = p__41611;
var map__41614__$1 = ((((!((map__41614 == null)))?((((map__41614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41614):map__41614);
var file_msg = map__41614__$1;
var namespace = cljs.core.get.call(null,map__41614__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41616){
var map__41619 = p__41616;
var map__41619__$1 = ((((!((map__41619 == null)))?((((map__41619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41619):map__41619);
var file_msg = map__41619__$1;
var namespace = cljs.core.get.call(null,map__41619__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25964__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25964__auto__){
var or__25976__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
var or__25976__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25976__auto____$1)){
return or__25976__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25964__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41621,callback){
var map__41624 = p__41621;
var map__41624__$1 = ((((!((map__41624 == null)))?((((map__41624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41624):map__41624);
var file_msg = map__41624__$1;
var request_url = cljs.core.get.call(null,map__41624__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41624__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__38430__auto___41728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___41728,out){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___41728,out){
return (function (state_41710){
var state_val_41711 = (state_41710[(1)]);
if((state_val_41711 === (1))){
var inst_41684 = cljs.core.seq.call(null,files);
var inst_41685 = cljs.core.first.call(null,inst_41684);
var inst_41686 = cljs.core.next.call(null,inst_41684);
var inst_41687 = files;
var state_41710__$1 = (function (){var statearr_41712 = state_41710;
(statearr_41712[(7)] = inst_41687);

(statearr_41712[(8)] = inst_41685);

(statearr_41712[(9)] = inst_41686);

return statearr_41712;
})();
var statearr_41713_41729 = state_41710__$1;
(statearr_41713_41729[(2)] = null);

(statearr_41713_41729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (2))){
var inst_41693 = (state_41710[(10)]);
var inst_41687 = (state_41710[(7)]);
var inst_41692 = cljs.core.seq.call(null,inst_41687);
var inst_41693__$1 = cljs.core.first.call(null,inst_41692);
var inst_41694 = cljs.core.next.call(null,inst_41692);
var inst_41695 = (inst_41693__$1 == null);
var inst_41696 = cljs.core.not.call(null,inst_41695);
var state_41710__$1 = (function (){var statearr_41714 = state_41710;
(statearr_41714[(11)] = inst_41694);

(statearr_41714[(10)] = inst_41693__$1);

return statearr_41714;
})();
if(inst_41696){
var statearr_41715_41730 = state_41710__$1;
(statearr_41715_41730[(1)] = (4));

} else {
var statearr_41716_41731 = state_41710__$1;
(statearr_41716_41731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (3))){
var inst_41708 = (state_41710[(2)]);
var state_41710__$1 = state_41710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41710__$1,inst_41708);
} else {
if((state_val_41711 === (4))){
var inst_41693 = (state_41710[(10)]);
var inst_41698 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41693);
var state_41710__$1 = state_41710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41710__$1,(7),inst_41698);
} else {
if((state_val_41711 === (5))){
var inst_41704 = cljs.core.async.close_BANG_.call(null,out);
var state_41710__$1 = state_41710;
var statearr_41717_41732 = state_41710__$1;
(statearr_41717_41732[(2)] = inst_41704);

(statearr_41717_41732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (6))){
var inst_41706 = (state_41710[(2)]);
var state_41710__$1 = state_41710;
var statearr_41718_41733 = state_41710__$1;
(statearr_41718_41733[(2)] = inst_41706);

(statearr_41718_41733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (7))){
var inst_41694 = (state_41710[(11)]);
var inst_41700 = (state_41710[(2)]);
var inst_41701 = cljs.core.async.put_BANG_.call(null,out,inst_41700);
var inst_41687 = inst_41694;
var state_41710__$1 = (function (){var statearr_41719 = state_41710;
(statearr_41719[(12)] = inst_41701);

(statearr_41719[(7)] = inst_41687);

return statearr_41719;
})();
var statearr_41720_41734 = state_41710__$1;
(statearr_41720_41734[(2)] = null);

(statearr_41720_41734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__38430__auto___41728,out))
;
return ((function (switch__38318__auto__,c__38430__auto___41728,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto____0 = (function (){
var statearr_41724 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41724[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto__);

(statearr_41724[(1)] = (1));

return statearr_41724;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto____1 = (function (state_41710){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_41710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e41725){if((e41725 instanceof Object)){
var ex__38322__auto__ = e41725;
var statearr_41726_41735 = state_41710;
(statearr_41726_41735[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41736 = state_41710;
state_41710 = G__41736;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto__ = function(state_41710){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto____1.call(this,state_41710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___41728,out))
})();
var state__38432__auto__ = (function (){var statearr_41727 = f__38431__auto__.call(null);
(statearr_41727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___41728);

return statearr_41727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___41728,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41737,opts){
var map__41741 = p__41737;
var map__41741__$1 = ((((!((map__41741 == null)))?((((map__41741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41741):map__41741);
var eval_body__$1 = cljs.core.get.call(null,map__41741__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41741__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25964__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25964__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25964__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41743){var e = e41743;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41744_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41744_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41753){
var vec__41754 = p__41753;
var k = cljs.core.nth.call(null,vec__41754,(0),null);
var v = cljs.core.nth.call(null,vec__41754,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41757){
var vec__41758 = p__41757;
var k = cljs.core.nth.call(null,vec__41758,(0),null);
var v = cljs.core.nth.call(null,vec__41758,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41764,p__41765){
var map__42012 = p__41764;
var map__42012__$1 = ((((!((map__42012 == null)))?((((map__42012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42012):map__42012);
var opts = map__42012__$1;
var before_jsload = cljs.core.get.call(null,map__42012__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42012__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42012__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42013 = p__41765;
var map__42013__$1 = ((((!((map__42013 == null)))?((((map__42013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42013):map__42013);
var msg = map__42013__$1;
var files = cljs.core.get.call(null,map__42013__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42013__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42013__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42166){
var state_val_42167 = (state_42166[(1)]);
if((state_val_42167 === (7))){
var inst_42029 = (state_42166[(7)]);
var inst_42028 = (state_42166[(8)]);
var inst_42030 = (state_42166[(9)]);
var inst_42027 = (state_42166[(10)]);
var inst_42035 = cljs.core._nth.call(null,inst_42028,inst_42030);
var inst_42036 = figwheel.client.file_reloading.eval_body.call(null,inst_42035,opts);
var inst_42037 = (inst_42030 + (1));
var tmp42168 = inst_42029;
var tmp42169 = inst_42028;
var tmp42170 = inst_42027;
var inst_42027__$1 = tmp42170;
var inst_42028__$1 = tmp42169;
var inst_42029__$1 = tmp42168;
var inst_42030__$1 = inst_42037;
var state_42166__$1 = (function (){var statearr_42171 = state_42166;
(statearr_42171[(7)] = inst_42029__$1);

(statearr_42171[(8)] = inst_42028__$1);

(statearr_42171[(9)] = inst_42030__$1);

(statearr_42171[(11)] = inst_42036);

(statearr_42171[(10)] = inst_42027__$1);

return statearr_42171;
})();
var statearr_42172_42258 = state_42166__$1;
(statearr_42172_42258[(2)] = null);

(statearr_42172_42258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (20))){
var inst_42070 = (state_42166[(12)]);
var inst_42078 = figwheel.client.file_reloading.sort_files.call(null,inst_42070);
var state_42166__$1 = state_42166;
var statearr_42173_42259 = state_42166__$1;
(statearr_42173_42259[(2)] = inst_42078);

(statearr_42173_42259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (27))){
var state_42166__$1 = state_42166;
var statearr_42174_42260 = state_42166__$1;
(statearr_42174_42260[(2)] = null);

(statearr_42174_42260[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (1))){
var inst_42019 = (state_42166[(13)]);
var inst_42016 = before_jsload.call(null,files);
var inst_42017 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42018 = (function (){return ((function (inst_42019,inst_42016,inst_42017,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41761_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41761_SHARP_);
});
;})(inst_42019,inst_42016,inst_42017,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42019__$1 = cljs.core.filter.call(null,inst_42018,files);
var inst_42020 = cljs.core.not_empty.call(null,inst_42019__$1);
var state_42166__$1 = (function (){var statearr_42175 = state_42166;
(statearr_42175[(13)] = inst_42019__$1);

(statearr_42175[(14)] = inst_42016);

(statearr_42175[(15)] = inst_42017);

return statearr_42175;
})();
if(cljs.core.truth_(inst_42020)){
var statearr_42176_42261 = state_42166__$1;
(statearr_42176_42261[(1)] = (2));

} else {
var statearr_42177_42262 = state_42166__$1;
(statearr_42177_42262[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (24))){
var state_42166__$1 = state_42166;
var statearr_42178_42263 = state_42166__$1;
(statearr_42178_42263[(2)] = null);

(statearr_42178_42263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (39))){
var inst_42120 = (state_42166[(16)]);
var state_42166__$1 = state_42166;
var statearr_42179_42264 = state_42166__$1;
(statearr_42179_42264[(2)] = inst_42120);

(statearr_42179_42264[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (46))){
var inst_42161 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42180_42265 = state_42166__$1;
(statearr_42180_42265[(2)] = inst_42161);

(statearr_42180_42265[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (4))){
var inst_42064 = (state_42166[(2)]);
var inst_42065 = cljs.core.List.EMPTY;
var inst_42066 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42065);
var inst_42067 = (function (){return ((function (inst_42064,inst_42065,inst_42066,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41762_SHARP_){
var and__25964__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41762_SHARP_);
if(cljs.core.truth_(and__25964__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41762_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41762_SHARP_)));
} else {
return and__25964__auto__;
}
});
;})(inst_42064,inst_42065,inst_42066,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42068 = cljs.core.filter.call(null,inst_42067,files);
var inst_42069 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42070 = cljs.core.concat.call(null,inst_42068,inst_42069);
var state_42166__$1 = (function (){var statearr_42181 = state_42166;
(statearr_42181[(12)] = inst_42070);

(statearr_42181[(17)] = inst_42064);

(statearr_42181[(18)] = inst_42066);

return statearr_42181;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42182_42266 = state_42166__$1;
(statearr_42182_42266[(1)] = (16));

} else {
var statearr_42183_42267 = state_42166__$1;
(statearr_42183_42267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (15))){
var inst_42054 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42184_42268 = state_42166__$1;
(statearr_42184_42268[(2)] = inst_42054);

(statearr_42184_42268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (21))){
var inst_42080 = (state_42166[(19)]);
var inst_42080__$1 = (state_42166[(2)]);
var inst_42081 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42080__$1);
var state_42166__$1 = (function (){var statearr_42185 = state_42166;
(statearr_42185[(19)] = inst_42080__$1);

return statearr_42185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42166__$1,(22),inst_42081);
} else {
if((state_val_42167 === (31))){
var inst_42164 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42166__$1,inst_42164);
} else {
if((state_val_42167 === (32))){
var inst_42120 = (state_42166[(16)]);
var inst_42125 = inst_42120.cljs$lang$protocol_mask$partition0$;
var inst_42126 = (inst_42125 & (64));
var inst_42127 = inst_42120.cljs$core$ISeq$;
var inst_42128 = (inst_42126) || (inst_42127);
var state_42166__$1 = state_42166;
if(cljs.core.truth_(inst_42128)){
var statearr_42186_42269 = state_42166__$1;
(statearr_42186_42269[(1)] = (35));

} else {
var statearr_42187_42270 = state_42166__$1;
(statearr_42187_42270[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (40))){
var inst_42141 = (state_42166[(20)]);
var inst_42140 = (state_42166[(2)]);
var inst_42141__$1 = cljs.core.get.call(null,inst_42140,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42142 = cljs.core.get.call(null,inst_42140,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42143 = cljs.core.not_empty.call(null,inst_42141__$1);
var state_42166__$1 = (function (){var statearr_42188 = state_42166;
(statearr_42188[(21)] = inst_42142);

(statearr_42188[(20)] = inst_42141__$1);

return statearr_42188;
})();
if(cljs.core.truth_(inst_42143)){
var statearr_42189_42271 = state_42166__$1;
(statearr_42189_42271[(1)] = (41));

} else {
var statearr_42190_42272 = state_42166__$1;
(statearr_42190_42272[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (33))){
var state_42166__$1 = state_42166;
var statearr_42191_42273 = state_42166__$1;
(statearr_42191_42273[(2)] = false);

(statearr_42191_42273[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (13))){
var inst_42040 = (state_42166[(22)]);
var inst_42044 = cljs.core.chunk_first.call(null,inst_42040);
var inst_42045 = cljs.core.chunk_rest.call(null,inst_42040);
var inst_42046 = cljs.core.count.call(null,inst_42044);
var inst_42027 = inst_42045;
var inst_42028 = inst_42044;
var inst_42029 = inst_42046;
var inst_42030 = (0);
var state_42166__$1 = (function (){var statearr_42192 = state_42166;
(statearr_42192[(7)] = inst_42029);

(statearr_42192[(8)] = inst_42028);

(statearr_42192[(9)] = inst_42030);

(statearr_42192[(10)] = inst_42027);

return statearr_42192;
})();
var statearr_42193_42274 = state_42166__$1;
(statearr_42193_42274[(2)] = null);

(statearr_42193_42274[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (22))){
var inst_42080 = (state_42166[(19)]);
var inst_42083 = (state_42166[(23)]);
var inst_42088 = (state_42166[(24)]);
var inst_42084 = (state_42166[(25)]);
var inst_42083__$1 = (state_42166[(2)]);
var inst_42084__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42083__$1);
var inst_42085 = (function (){var all_files = inst_42080;
var res_SINGLEQUOTE_ = inst_42083__$1;
var res = inst_42084__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42080,inst_42083,inst_42088,inst_42084,inst_42083__$1,inst_42084__$1,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41763_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41763_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42080,inst_42083,inst_42088,inst_42084,inst_42083__$1,inst_42084__$1,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42086 = cljs.core.filter.call(null,inst_42085,inst_42083__$1);
var inst_42087 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42088__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42087);
var inst_42089 = cljs.core.not_empty.call(null,inst_42088__$1);
var state_42166__$1 = (function (){var statearr_42194 = state_42166;
(statearr_42194[(26)] = inst_42086);

(statearr_42194[(23)] = inst_42083__$1);

(statearr_42194[(24)] = inst_42088__$1);

(statearr_42194[(25)] = inst_42084__$1);

return statearr_42194;
})();
if(cljs.core.truth_(inst_42089)){
var statearr_42195_42275 = state_42166__$1;
(statearr_42195_42275[(1)] = (23));

} else {
var statearr_42196_42276 = state_42166__$1;
(statearr_42196_42276[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (36))){
var state_42166__$1 = state_42166;
var statearr_42197_42277 = state_42166__$1;
(statearr_42197_42277[(2)] = false);

(statearr_42197_42277[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (41))){
var inst_42141 = (state_42166[(20)]);
var inst_42145 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42146 = cljs.core.map.call(null,inst_42145,inst_42141);
var inst_42147 = cljs.core.pr_str.call(null,inst_42146);
var inst_42148 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42147)].join('');
var inst_42149 = figwheel.client.utils.log.call(null,inst_42148);
var state_42166__$1 = state_42166;
var statearr_42198_42278 = state_42166__$1;
(statearr_42198_42278[(2)] = inst_42149);

(statearr_42198_42278[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (43))){
var inst_42142 = (state_42166[(21)]);
var inst_42152 = (state_42166[(2)]);
var inst_42153 = cljs.core.not_empty.call(null,inst_42142);
var state_42166__$1 = (function (){var statearr_42199 = state_42166;
(statearr_42199[(27)] = inst_42152);

return statearr_42199;
})();
if(cljs.core.truth_(inst_42153)){
var statearr_42200_42279 = state_42166__$1;
(statearr_42200_42279[(1)] = (44));

} else {
var statearr_42201_42280 = state_42166__$1;
(statearr_42201_42280[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (29))){
var inst_42080 = (state_42166[(19)]);
var inst_42086 = (state_42166[(26)]);
var inst_42083 = (state_42166[(23)]);
var inst_42120 = (state_42166[(16)]);
var inst_42088 = (state_42166[(24)]);
var inst_42084 = (state_42166[(25)]);
var inst_42116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42119 = (function (){var all_files = inst_42080;
var res_SINGLEQUOTE_ = inst_42083;
var res = inst_42084;
var files_not_loaded = inst_42086;
var dependencies_that_loaded = inst_42088;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42080,inst_42086,inst_42083,inst_42120,inst_42088,inst_42084,inst_42116,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42118){
var map__42202 = p__42118;
var map__42202__$1 = ((((!((map__42202 == null)))?((((map__42202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42202):map__42202);
var namespace = cljs.core.get.call(null,map__42202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42080,inst_42086,inst_42083,inst_42120,inst_42088,inst_42084,inst_42116,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42120__$1 = cljs.core.group_by.call(null,inst_42119,inst_42086);
var inst_42122 = (inst_42120__$1 == null);
var inst_42123 = cljs.core.not.call(null,inst_42122);
var state_42166__$1 = (function (){var statearr_42204 = state_42166;
(statearr_42204[(28)] = inst_42116);

(statearr_42204[(16)] = inst_42120__$1);

return statearr_42204;
})();
if(inst_42123){
var statearr_42205_42281 = state_42166__$1;
(statearr_42205_42281[(1)] = (32));

} else {
var statearr_42206_42282 = state_42166__$1;
(statearr_42206_42282[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (44))){
var inst_42142 = (state_42166[(21)]);
var inst_42155 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42142);
var inst_42156 = cljs.core.pr_str.call(null,inst_42155);
var inst_42157 = [cljs.core.str("not required: "),cljs.core.str(inst_42156)].join('');
var inst_42158 = figwheel.client.utils.log.call(null,inst_42157);
var state_42166__$1 = state_42166;
var statearr_42207_42283 = state_42166__$1;
(statearr_42207_42283[(2)] = inst_42158);

(statearr_42207_42283[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (6))){
var inst_42061 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42208_42284 = state_42166__$1;
(statearr_42208_42284[(2)] = inst_42061);

(statearr_42208_42284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (28))){
var inst_42086 = (state_42166[(26)]);
var inst_42113 = (state_42166[(2)]);
var inst_42114 = cljs.core.not_empty.call(null,inst_42086);
var state_42166__$1 = (function (){var statearr_42209 = state_42166;
(statearr_42209[(29)] = inst_42113);

return statearr_42209;
})();
if(cljs.core.truth_(inst_42114)){
var statearr_42210_42285 = state_42166__$1;
(statearr_42210_42285[(1)] = (29));

} else {
var statearr_42211_42286 = state_42166__$1;
(statearr_42211_42286[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (25))){
var inst_42084 = (state_42166[(25)]);
var inst_42100 = (state_42166[(2)]);
var inst_42101 = cljs.core.not_empty.call(null,inst_42084);
var state_42166__$1 = (function (){var statearr_42212 = state_42166;
(statearr_42212[(30)] = inst_42100);

return statearr_42212;
})();
if(cljs.core.truth_(inst_42101)){
var statearr_42213_42287 = state_42166__$1;
(statearr_42213_42287[(1)] = (26));

} else {
var statearr_42214_42288 = state_42166__$1;
(statearr_42214_42288[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (34))){
var inst_42135 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
if(cljs.core.truth_(inst_42135)){
var statearr_42215_42289 = state_42166__$1;
(statearr_42215_42289[(1)] = (38));

} else {
var statearr_42216_42290 = state_42166__$1;
(statearr_42216_42290[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (17))){
var state_42166__$1 = state_42166;
var statearr_42217_42291 = state_42166__$1;
(statearr_42217_42291[(2)] = recompile_dependents);

(statearr_42217_42291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (3))){
var state_42166__$1 = state_42166;
var statearr_42218_42292 = state_42166__$1;
(statearr_42218_42292[(2)] = null);

(statearr_42218_42292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (12))){
var inst_42057 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42219_42293 = state_42166__$1;
(statearr_42219_42293[(2)] = inst_42057);

(statearr_42219_42293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (2))){
var inst_42019 = (state_42166[(13)]);
var inst_42026 = cljs.core.seq.call(null,inst_42019);
var inst_42027 = inst_42026;
var inst_42028 = null;
var inst_42029 = (0);
var inst_42030 = (0);
var state_42166__$1 = (function (){var statearr_42220 = state_42166;
(statearr_42220[(7)] = inst_42029);

(statearr_42220[(8)] = inst_42028);

(statearr_42220[(9)] = inst_42030);

(statearr_42220[(10)] = inst_42027);

return statearr_42220;
})();
var statearr_42221_42294 = state_42166__$1;
(statearr_42221_42294[(2)] = null);

(statearr_42221_42294[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (23))){
var inst_42080 = (state_42166[(19)]);
var inst_42086 = (state_42166[(26)]);
var inst_42083 = (state_42166[(23)]);
var inst_42088 = (state_42166[(24)]);
var inst_42084 = (state_42166[(25)]);
var inst_42091 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42093 = (function (){var all_files = inst_42080;
var res_SINGLEQUOTE_ = inst_42083;
var res = inst_42084;
var files_not_loaded = inst_42086;
var dependencies_that_loaded = inst_42088;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42080,inst_42086,inst_42083,inst_42088,inst_42084,inst_42091,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42092){
var map__42222 = p__42092;
var map__42222__$1 = ((((!((map__42222 == null)))?((((map__42222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42222):map__42222);
var request_url = cljs.core.get.call(null,map__42222__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42080,inst_42086,inst_42083,inst_42088,inst_42084,inst_42091,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42094 = cljs.core.reverse.call(null,inst_42088);
var inst_42095 = cljs.core.map.call(null,inst_42093,inst_42094);
var inst_42096 = cljs.core.pr_str.call(null,inst_42095);
var inst_42097 = figwheel.client.utils.log.call(null,inst_42096);
var state_42166__$1 = (function (){var statearr_42224 = state_42166;
(statearr_42224[(31)] = inst_42091);

return statearr_42224;
})();
var statearr_42225_42295 = state_42166__$1;
(statearr_42225_42295[(2)] = inst_42097);

(statearr_42225_42295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (35))){
var state_42166__$1 = state_42166;
var statearr_42226_42296 = state_42166__$1;
(statearr_42226_42296[(2)] = true);

(statearr_42226_42296[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (19))){
var inst_42070 = (state_42166[(12)]);
var inst_42076 = figwheel.client.file_reloading.expand_files.call(null,inst_42070);
var state_42166__$1 = state_42166;
var statearr_42227_42297 = state_42166__$1;
(statearr_42227_42297[(2)] = inst_42076);

(statearr_42227_42297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (11))){
var state_42166__$1 = state_42166;
var statearr_42228_42298 = state_42166__$1;
(statearr_42228_42298[(2)] = null);

(statearr_42228_42298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (9))){
var inst_42059 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42229_42299 = state_42166__$1;
(statearr_42229_42299[(2)] = inst_42059);

(statearr_42229_42299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (5))){
var inst_42029 = (state_42166[(7)]);
var inst_42030 = (state_42166[(9)]);
var inst_42032 = (inst_42030 < inst_42029);
var inst_42033 = inst_42032;
var state_42166__$1 = state_42166;
if(cljs.core.truth_(inst_42033)){
var statearr_42230_42300 = state_42166__$1;
(statearr_42230_42300[(1)] = (7));

} else {
var statearr_42231_42301 = state_42166__$1;
(statearr_42231_42301[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (14))){
var inst_42040 = (state_42166[(22)]);
var inst_42049 = cljs.core.first.call(null,inst_42040);
var inst_42050 = figwheel.client.file_reloading.eval_body.call(null,inst_42049,opts);
var inst_42051 = cljs.core.next.call(null,inst_42040);
var inst_42027 = inst_42051;
var inst_42028 = null;
var inst_42029 = (0);
var inst_42030 = (0);
var state_42166__$1 = (function (){var statearr_42232 = state_42166;
(statearr_42232[(7)] = inst_42029);

(statearr_42232[(8)] = inst_42028);

(statearr_42232[(9)] = inst_42030);

(statearr_42232[(32)] = inst_42050);

(statearr_42232[(10)] = inst_42027);

return statearr_42232;
})();
var statearr_42233_42302 = state_42166__$1;
(statearr_42233_42302[(2)] = null);

(statearr_42233_42302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (45))){
var state_42166__$1 = state_42166;
var statearr_42234_42303 = state_42166__$1;
(statearr_42234_42303[(2)] = null);

(statearr_42234_42303[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (26))){
var inst_42080 = (state_42166[(19)]);
var inst_42086 = (state_42166[(26)]);
var inst_42083 = (state_42166[(23)]);
var inst_42088 = (state_42166[(24)]);
var inst_42084 = (state_42166[(25)]);
var inst_42103 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42105 = (function (){var all_files = inst_42080;
var res_SINGLEQUOTE_ = inst_42083;
var res = inst_42084;
var files_not_loaded = inst_42086;
var dependencies_that_loaded = inst_42088;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42080,inst_42086,inst_42083,inst_42088,inst_42084,inst_42103,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42104){
var map__42235 = p__42104;
var map__42235__$1 = ((((!((map__42235 == null)))?((((map__42235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42235):map__42235);
var namespace = cljs.core.get.call(null,map__42235__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42235__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42080,inst_42086,inst_42083,inst_42088,inst_42084,inst_42103,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42106 = cljs.core.map.call(null,inst_42105,inst_42084);
var inst_42107 = cljs.core.pr_str.call(null,inst_42106);
var inst_42108 = figwheel.client.utils.log.call(null,inst_42107);
var inst_42109 = (function (){var all_files = inst_42080;
var res_SINGLEQUOTE_ = inst_42083;
var res = inst_42084;
var files_not_loaded = inst_42086;
var dependencies_that_loaded = inst_42088;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42080,inst_42086,inst_42083,inst_42088,inst_42084,inst_42103,inst_42105,inst_42106,inst_42107,inst_42108,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42080,inst_42086,inst_42083,inst_42088,inst_42084,inst_42103,inst_42105,inst_42106,inst_42107,inst_42108,state_val_42167,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42110 = setTimeout(inst_42109,(10));
var state_42166__$1 = (function (){var statearr_42237 = state_42166;
(statearr_42237[(33)] = inst_42103);

(statearr_42237[(34)] = inst_42108);

return statearr_42237;
})();
var statearr_42238_42304 = state_42166__$1;
(statearr_42238_42304[(2)] = inst_42110);

(statearr_42238_42304[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (16))){
var state_42166__$1 = state_42166;
var statearr_42239_42305 = state_42166__$1;
(statearr_42239_42305[(2)] = reload_dependents);

(statearr_42239_42305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (38))){
var inst_42120 = (state_42166[(16)]);
var inst_42137 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42120);
var state_42166__$1 = state_42166;
var statearr_42240_42306 = state_42166__$1;
(statearr_42240_42306[(2)] = inst_42137);

(statearr_42240_42306[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (30))){
var state_42166__$1 = state_42166;
var statearr_42241_42307 = state_42166__$1;
(statearr_42241_42307[(2)] = null);

(statearr_42241_42307[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (10))){
var inst_42040 = (state_42166[(22)]);
var inst_42042 = cljs.core.chunked_seq_QMARK_.call(null,inst_42040);
var state_42166__$1 = state_42166;
if(inst_42042){
var statearr_42242_42308 = state_42166__$1;
(statearr_42242_42308[(1)] = (13));

} else {
var statearr_42243_42309 = state_42166__$1;
(statearr_42243_42309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (18))){
var inst_42074 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
if(cljs.core.truth_(inst_42074)){
var statearr_42244_42310 = state_42166__$1;
(statearr_42244_42310[(1)] = (19));

} else {
var statearr_42245_42311 = state_42166__$1;
(statearr_42245_42311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (42))){
var state_42166__$1 = state_42166;
var statearr_42246_42312 = state_42166__$1;
(statearr_42246_42312[(2)] = null);

(statearr_42246_42312[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (37))){
var inst_42132 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42247_42313 = state_42166__$1;
(statearr_42247_42313[(2)] = inst_42132);

(statearr_42247_42313[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (8))){
var inst_42027 = (state_42166[(10)]);
var inst_42040 = (state_42166[(22)]);
var inst_42040__$1 = cljs.core.seq.call(null,inst_42027);
var state_42166__$1 = (function (){var statearr_42248 = state_42166;
(statearr_42248[(22)] = inst_42040__$1);

return statearr_42248;
})();
if(inst_42040__$1){
var statearr_42249_42314 = state_42166__$1;
(statearr_42249_42314[(1)] = (10));

} else {
var statearr_42250_42315 = state_42166__$1;
(statearr_42250_42315[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38318__auto__,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto____0 = (function (){
var statearr_42254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42254[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto__);

(statearr_42254[(1)] = (1));

return statearr_42254;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto____1 = (function (state_42166){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_42166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e42255){if((e42255 instanceof Object)){
var ex__38322__auto__ = e42255;
var statearr_42256_42316 = state_42166;
(statearr_42256_42316[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42317 = state_42166;
state_42166 = G__42317;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto__ = function(state_42166){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto____1.call(this,state_42166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38432__auto__ = (function (){var statearr_42257 = f__38431__auto__.call(null);
(statearr_42257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_42257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__,map__42012,map__42012__$1,opts,before_jsload,on_jsload,reload_dependents,map__42013,map__42013__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38430__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42320,link){
var map__42323 = p__42320;
var map__42323__$1 = ((((!((map__42323 == null)))?((((map__42323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42323):map__42323);
var file = cljs.core.get.call(null,map__42323__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__42323,map__42323__$1,file){
return (function (p1__42318_SHARP_,p2__42319_SHARP_){
if(cljs.core._EQ_.call(null,p1__42318_SHARP_,p2__42319_SHARP_)){
return p1__42318_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__42323,map__42323__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42329){
var map__42330 = p__42329;
var map__42330__$1 = ((((!((map__42330 == null)))?((((map__42330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42330):map__42330);
var match_length = cljs.core.get.call(null,map__42330__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42330__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42325_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42325_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42332_SHARP_,p2__42333_SHARP_){
return cljs.core.assoc.call(null,p1__42332_SHARP_,cljs.core.get.call(null,p2__42333_SHARP_,key),p2__42333_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_42334 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42334);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42334);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42335,p__42336){
var map__42341 = p__42335;
var map__42341__$1 = ((((!((map__42341 == null)))?((((map__42341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42341):map__42341);
var on_cssload = cljs.core.get.call(null,map__42341__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42342 = p__42336;
var map__42342__$1 = ((((!((map__42342 == null)))?((((map__42342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42342):map__42342);
var files_msg = map__42342__$1;
var files = cljs.core.get.call(null,map__42342__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1518788570244