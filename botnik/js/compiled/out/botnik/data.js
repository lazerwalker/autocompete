// Compiled by ClojureScript 1.9.229 {}
goog.provide('botnik.data');
goog.require('cljs.core');
botnik.data.FN = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
botnik.data.API_SERVER = API_SERVER;
botnik.data.session_id = cljs.core.rand_int.call(null,(1000000000));
if(typeof botnik.data.TURBOSPEED !== 'undefined'){
} else {
botnik.data.TURBOSPEED = cljs.core.atom.call(null,(0));
}
if(typeof botnik.data.SOURCENAME !== 'undefined'){
} else {
botnik.data.SOURCENAME = cljs.core.atom.call(null,null);
}
if(typeof botnik.data.RECONCILER !== 'undefined'){
} else {
botnik.data.RECONCILER = cljs.core.atom.call(null,null);
}
if(typeof botnik.data.word_cooldown !== 'undefined'){
} else {
botnik.data.word_cooldown = cljs.core.atom.call(null,false);
}
if(typeof botnik.data.STALE !== 'undefined'){
} else {
botnik.data.STALE = cljs.core.atom.call(null,true);
}
botnik.data.last_word = cljs.core.atom.call(null,null);
if(typeof botnik.data.app_state !== 'undefined'){
} else {
botnik.data.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"editing?","editing?",1646440800),new cljs.core.Keyword(null,"saved-words","saved-words",-866322621),new cljs.core.Keyword(null,"turbo","turbo",846610757),new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Keyword(null,"suggestion-options","suggestion-options",-398137336),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword("sources","by-id","sources/by-id",160449323),new cljs.core.Keyword(null,"edit-text","edit-text",-616821813),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"voice","voice",185716428),new cljs.core.Keyword(null,"dragging","dragging",1185097613),new cljs.core.Keyword(null,"sharing?","sharing?",1213989518),new cljs.core.Keyword(null,"story","story",-1000647533),new cljs.core.Keyword(null,"arrow-input","arrow-input",-1485137677),new cljs.core.Keyword(null,"save-bar","save-bar",-706472269),new cljs.core.Keyword(null,"source-listing","source-listing",1381720692),new cljs.core.Keyword(null,"menu?","menu?",847361238),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"root-refresh","root-refresh",-637514951),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"upload","upload",-255769218)],[true,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on","on",173873944),false,new cljs.core.Keyword(null,"max","max",61366548),(7)], null),(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(6),(7)], null)], null),false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"loading","loading",-737050189),true,new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"left?","left?",1009526930),false,new cljs.core.Keyword(null,"right?","right?",380310444),true,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("columns","by-id","columns/by-id",-662747544),new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"",(0),null,false,false,"",false,false,cljs.core.PersistentArrayMap.EMPTY,false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"uploading?","uploading?",316182892),false,new cljs.core.Keyword(null,"result","result",1415092211),null], null)]));
}

//# sourceMappingURL=data.js.map?rel=1518788505232