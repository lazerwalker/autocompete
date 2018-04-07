// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__27058__auto__ = [];
var len__27051__auto___43784 = arguments.length;
var i__27052__auto___43785 = (0);
while(true){
if((i__27052__auto___43785 < len__27051__auto___43784)){
args__27058__auto__.push((arguments[i__27052__auto___43785]));

var G__43786 = (i__27052__auto___43785 + (1));
i__27052__auto___43785 = G__43786;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((2) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27059__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__43776_43787 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__43777_43788 = null;
var count__43778_43789 = (0);
var i__43779_43790 = (0);
while(true){
if((i__43779_43790 < count__43778_43789)){
var k_43791 = cljs.core._nth.call(null,chunk__43777_43788,i__43779_43790);
e.setAttribute(cljs.core.name.call(null,k_43791),cljs.core.get.call(null,attrs,k_43791));

var G__43792 = seq__43776_43787;
var G__43793 = chunk__43777_43788;
var G__43794 = count__43778_43789;
var G__43795 = (i__43779_43790 + (1));
seq__43776_43787 = G__43792;
chunk__43777_43788 = G__43793;
count__43778_43789 = G__43794;
i__43779_43790 = G__43795;
continue;
} else {
var temp__4657__auto___43796 = cljs.core.seq.call(null,seq__43776_43787);
if(temp__4657__auto___43796){
var seq__43776_43797__$1 = temp__4657__auto___43796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43776_43797__$1)){
var c__26787__auto___43798 = cljs.core.chunk_first.call(null,seq__43776_43797__$1);
var G__43799 = cljs.core.chunk_rest.call(null,seq__43776_43797__$1);
var G__43800 = c__26787__auto___43798;
var G__43801 = cljs.core.count.call(null,c__26787__auto___43798);
var G__43802 = (0);
seq__43776_43787 = G__43799;
chunk__43777_43788 = G__43800;
count__43778_43789 = G__43801;
i__43779_43790 = G__43802;
continue;
} else {
var k_43803 = cljs.core.first.call(null,seq__43776_43797__$1);
e.setAttribute(cljs.core.name.call(null,k_43803),cljs.core.get.call(null,attrs,k_43803));

var G__43804 = cljs.core.next.call(null,seq__43776_43797__$1);
var G__43805 = null;
var G__43806 = (0);
var G__43807 = (0);
seq__43776_43787 = G__43804;
chunk__43777_43788 = G__43805;
count__43778_43789 = G__43806;
i__43779_43790 = G__43807;
continue;
}
} else {
}
}
break;
}

var seq__43780_43808 = cljs.core.seq.call(null,children);
var chunk__43781_43809 = null;
var count__43782_43810 = (0);
var i__43783_43811 = (0);
while(true){
if((i__43783_43811 < count__43782_43810)){
var ch_43812 = cljs.core._nth.call(null,chunk__43781_43809,i__43783_43811);
e.appendChild(ch_43812);

var G__43813 = seq__43780_43808;
var G__43814 = chunk__43781_43809;
var G__43815 = count__43782_43810;
var G__43816 = (i__43783_43811 + (1));
seq__43780_43808 = G__43813;
chunk__43781_43809 = G__43814;
count__43782_43810 = G__43815;
i__43783_43811 = G__43816;
continue;
} else {
var temp__4657__auto___43817 = cljs.core.seq.call(null,seq__43780_43808);
if(temp__4657__auto___43817){
var seq__43780_43818__$1 = temp__4657__auto___43817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43780_43818__$1)){
var c__26787__auto___43819 = cljs.core.chunk_first.call(null,seq__43780_43818__$1);
var G__43820 = cljs.core.chunk_rest.call(null,seq__43780_43818__$1);
var G__43821 = c__26787__auto___43819;
var G__43822 = cljs.core.count.call(null,c__26787__auto___43819);
var G__43823 = (0);
seq__43780_43808 = G__43820;
chunk__43781_43809 = G__43821;
count__43782_43810 = G__43822;
i__43783_43811 = G__43823;
continue;
} else {
var ch_43824 = cljs.core.first.call(null,seq__43780_43818__$1);
e.appendChild(ch_43824);

var G__43825 = cljs.core.next.call(null,seq__43780_43818__$1);
var G__43826 = null;
var G__43827 = (0);
var G__43828 = (0);
seq__43780_43808 = G__43825;
chunk__43781_43809 = G__43826;
count__43782_43810 = G__43827;
i__43783_43811 = G__43828;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq43773){
var G__43774 = cljs.core.first.call(null,seq43773);
var seq43773__$1 = cljs.core.next.call(null,seq43773);
var G__43775 = cljs.core.first.call(null,seq43773__$1);
var seq43773__$2 = cljs.core.next.call(null,seq43773__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__43774,G__43775,seq43773__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__26901__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26902__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26905__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__26901__auto__,prefer_table__26902__auto__,method_cache__26903__auto__,cached_hierarchy__26904__auto__,hierarchy__26905__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__26901__auto__,prefer_table__26902__auto__,method_cache__26903__auto__,cached_hierarchy__26904__auto__,hierarchy__26905__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26905__auto__,method_table__26901__auto__,prefer_table__26902__auto__,method_cache__26903__auto__,cached_hierarchy__26904__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_43829 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;"),cljs.core.str("text-align: left;")].join('')], null));
el_43829.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_43829.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_43829.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_43829);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__43830,st_map){
var map__43837 = p__43830;
var map__43837__$1 = ((((!((map__43837 == null)))?((((map__43837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43837):map__43837);
var container_el = cljs.core.get.call(null,map__43837__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__43837,map__43837__$1,container_el){
return (function (p__43839){
var vec__43840 = p__43839;
var k = cljs.core.nth.call(null,vec__43840,(0),null);
var v = cljs.core.nth.call(null,vec__43840,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__43837,map__43837__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__43843,dom_str){
var map__43846 = p__43843;
var map__43846__$1 = ((((!((map__43846 == null)))?((((map__43846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43846):map__43846);
var c = map__43846__$1;
var content_area_el = cljs.core.get.call(null,map__43846__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__43848){
var map__43851 = p__43848;
var map__43851__$1 = ((((!((map__43851 == null)))?((((map__43851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43851):map__43851);
var content_area_el = cljs.core.get.call(null,map__43851__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__){
return (function (state_43894){
var state_val_43895 = (state_43894[(1)]);
if((state_val_43895 === (1))){
var inst_43879 = (state_43894[(7)]);
var inst_43879__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_43880 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_43881 = ["10px","10px","100%","68px","1.0"];
var inst_43882 = cljs.core.PersistentHashMap.fromArrays(inst_43880,inst_43881);
var inst_43883 = cljs.core.merge.call(null,inst_43882,style);
var inst_43884 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_43879__$1,inst_43883);
var inst_43885 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_43879__$1,msg);
var inst_43886 = cljs.core.async.timeout.call(null,(300));
var state_43894__$1 = (function (){var statearr_43896 = state_43894;
(statearr_43896[(8)] = inst_43884);

(statearr_43896[(7)] = inst_43879__$1);

(statearr_43896[(9)] = inst_43885);

return statearr_43896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43894__$1,(2),inst_43886);
} else {
if((state_val_43895 === (2))){
var inst_43879 = (state_43894[(7)]);
var inst_43888 = (state_43894[(2)]);
var inst_43889 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_43890 = ["auto"];
var inst_43891 = cljs.core.PersistentHashMap.fromArrays(inst_43889,inst_43890);
var inst_43892 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_43879,inst_43891);
var state_43894__$1 = (function (){var statearr_43897 = state_43894;
(statearr_43897[(10)] = inst_43888);

return statearr_43897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43894__$1,inst_43892);
} else {
return null;
}
}
});})(c__38430__auto__))
;
return ((function (switch__38318__auto__,c__38430__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto____0 = (function (){
var statearr_43901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43901[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto__);

(statearr_43901[(1)] = (1));

return statearr_43901;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto____1 = (function (state_43894){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_43894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e43902){if((e43902 instanceof Object)){
var ex__38322__auto__ = e43902;
var statearr_43903_43905 = state_43894;
(statearr_43903_43905[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43906 = state_43894;
state_43894 = G__43906;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto__ = function(state_43894){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto____1.call(this,state_43894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__))
})();
var state__38432__auto__ = (function (){var statearr_43904 = f__38431__auto__.call(null);
(statearr_43904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_43904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__))
);

return c__38430__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args43907 = [];
var len__27051__auto___43910 = arguments.length;
var i__27052__auto___43911 = (0);
while(true){
if((i__27052__auto___43911 < len__27051__auto___43910)){
args43907.push((arguments[i__27052__auto___43911]));

var G__43912 = (i__27052__auto___43911 + (1));
i__27052__auto___43911 = G__43912;
continue;
} else {
}
break;
}

var G__43909 = args43907.length;
switch (G__43909) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43907.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\" data-file-column=\""),cljs.core.str(column_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__43914){
var map__43917 = p__43914;
var map__43917__$1 = ((((!((map__43917 == null)))?((((map__43917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43917):map__43917);
var file = cljs.core.get.call(null,map__43917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43917__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43917__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__25976__auto__ = file;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str("<span style='"),cljs.core.str(style),cljs.core.str("'>"),cljs.core.str("<span style='color: #757575;'>"),cljs.core.str(line_number),cljs.core.str("  </span>"),cljs.core.str(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__43919){
var vec__43926 = p__43919;
var typ = cljs.core.nth.call(null,vec__43926,(0),null);
var line_number = cljs.core.nth.call(null,vec__43926,(1),null);
var line = cljs.core.nth.call(null,vec__43926,(2),null);
var pred__43929 = cljs.core._EQ_;
var expr__43930 = typ;
if(cljs.core.truth_(pred__43929.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__43930))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__43929.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__43930))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__43929.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__43930))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__43932_SHARP_){
return cljs.core.update_in.call(null,p1__43932_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str(clojure.string.join.call(null,"\n",lines)),cljs.core.str("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__43933_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__43933_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__43936){
var map__43939 = p__43936;
var map__43939__$1 = ((((!((map__43939 == null)))?((((map__43939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43939):map__43939);
var exception = map__43939__$1;
var message = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__43939__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__25964__auto__ = file;
if(cljs.core.truth_(and__25964__auto__)){
return line;
} else {
return and__25964__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__43939,map__43939__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__43934_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__43934_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__43939,map__43939__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str("<pre>"),cljs.core.str(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__43939,map__43939__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__43935_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__43935_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__43935_SHARP_)))].join('');
});})(last_message,map__43939,map__43939__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__43941){
var map__43944 = p__43941;
var map__43944__$1 = ((((!((map__43944 == null)))?((((map__43944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43944):map__43944);
var file = cljs.core.get.call(null,map__43944__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43944__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43944__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__43949 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__43949__$1 = ((((!((map__43949 == null)))?((((map__43949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43949):map__43949);
var head = cljs.core.get.call(null,map__43949__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__43949__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__43949__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__43949__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__43949__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43949__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43949__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__43952){
var map__43955 = p__43952;
var map__43955__$1 = ((((!((map__43955 == null)))?((((map__43955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43955):map__43955);
var warning_data = map__43955__$1;
var file = cljs.core.get.call(null,map__43955__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43955__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43955__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__43955__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__43955__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__25964__auto__ = file;
if(cljs.core.truth_(and__25964__auto__)){
return line;
} else {
return and__25964__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__43955,map__43955__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__43951_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__43951_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__43955,map__43955__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__43959 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__43959__$1 = ((((!((map__43959 == null)))?((((map__43959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43959):map__43959);
var head = cljs.core.get.call(null,map__43959__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__43959__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__43959__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__43959__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__43959__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43959__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43959__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__43961){
var map__43965 = p__43961;
var map__43965__$1 = ((((!((map__43965 == null)))?((((map__43965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43965):map__43965);
var warning_data = map__43965__$1;
var message = cljs.core.get.call(null,map__43965__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__43965__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43965__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43965__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43967 = message;
var G__43967__$1 = (cljs.core.truth_(line)?[cljs.core.str(G__43967),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__43967);
var G__43967__$2 = (cljs.core.truth_((function (){var and__25964__auto__ = line;
if(cljs.core.truth_(and__25964__auto__)){
return column;
} else {
return and__25964__auto__;
}
})())?[cljs.core.str(G__43967__$1),cljs.core.str(", column "),cljs.core.str(column)].join(''):G__43967__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str(G__43967__$2),cljs.core.str(" in file "),cljs.core.str(file)].join('');
} else {
return G__43967__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__43968){
var map__43973 = p__43968;
var map__43973__$1 = ((((!((map__43973 == null)))?((((map__43973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43973):map__43973);
var warning_data = map__43973__$1;
var message = cljs.core.get.call(null,map__43973__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__43973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43973__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43973__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__43975 = figwheel.client.heads_up.ensure_container.call(null);
var map__43975__$1 = ((((!((map__43975 == null)))?((((map__43975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43975):map__43975);
var content_area_el = cljs.core.get.call(null,map__43975__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str(message_count__$1),cljs.core.str(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__){
return (function (state_44023){
var state_val_44024 = (state_44023[(1)]);
if((state_val_44024 === (1))){
var inst_44006 = (state_44023[(7)]);
var inst_44006__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_44007 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_44008 = ["0.0"];
var inst_44009 = cljs.core.PersistentHashMap.fromArrays(inst_44007,inst_44008);
var inst_44010 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44006__$1,inst_44009);
var inst_44011 = cljs.core.async.timeout.call(null,(300));
var state_44023__$1 = (function (){var statearr_44025 = state_44023;
(statearr_44025[(8)] = inst_44010);

(statearr_44025[(7)] = inst_44006__$1);

return statearr_44025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44023__$1,(2),inst_44011);
} else {
if((state_val_44024 === (2))){
var inst_44006 = (state_44023[(7)]);
var inst_44013 = (state_44023[(2)]);
var inst_44014 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_44015 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_44016 = cljs.core.PersistentHashMap.fromArrays(inst_44014,inst_44015);
var inst_44017 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44006,inst_44016);
var inst_44018 = cljs.core.async.timeout.call(null,(200));
var state_44023__$1 = (function (){var statearr_44026 = state_44023;
(statearr_44026[(9)] = inst_44017);

(statearr_44026[(10)] = inst_44013);

return statearr_44026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44023__$1,(3),inst_44018);
} else {
if((state_val_44024 === (3))){
var inst_44006 = (state_44023[(7)]);
var inst_44020 = (state_44023[(2)]);
var inst_44021 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_44006,"");
var state_44023__$1 = (function (){var statearr_44027 = state_44023;
(statearr_44027[(11)] = inst_44020);

return statearr_44027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44023__$1,inst_44021);
} else {
return null;
}
}
}
});})(c__38430__auto__))
;
return ((function (switch__38318__auto__,c__38430__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__38319__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__38319__auto____0 = (function (){
var statearr_44031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44031[(0)] = figwheel$client$heads_up$clear_$_state_machine__38319__auto__);

(statearr_44031[(1)] = (1));

return statearr_44031;
});
var figwheel$client$heads_up$clear_$_state_machine__38319__auto____1 = (function (state_44023){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_44023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e44032){if((e44032 instanceof Object)){
var ex__38322__auto__ = e44032;
var statearr_44033_44035 = state_44023;
(statearr_44033_44035[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44036 = state_44023;
state_44023 = G__44036;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__38319__auto__ = function(state_44023){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__38319__auto____1.call(this,state_44023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__38319__auto____0;
figwheel$client$heads_up$clear_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__38319__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__))
})();
var state__38432__auto__ = (function (){var statearr_44034 = f__38431__auto__.call(null);
(statearr_44034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_44034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__))
);

return c__38430__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__){
return (function (state_44068){
var state_val_44069 = (state_44068[(1)]);
if((state_val_44069 === (1))){
var inst_44058 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_44068__$1 = state_44068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44068__$1,(2),inst_44058);
} else {
if((state_val_44069 === (2))){
var inst_44060 = (state_44068[(2)]);
var inst_44061 = cljs.core.async.timeout.call(null,(400));
var state_44068__$1 = (function (){var statearr_44070 = state_44068;
(statearr_44070[(7)] = inst_44060);

return statearr_44070;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44068__$1,(3),inst_44061);
} else {
if((state_val_44069 === (3))){
var inst_44063 = (state_44068[(2)]);
var inst_44064 = figwheel.client.heads_up.clear.call(null);
var state_44068__$1 = (function (){var statearr_44071 = state_44068;
(statearr_44071[(8)] = inst_44063);

return statearr_44071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44068__$1,(4),inst_44064);
} else {
if((state_val_44069 === (4))){
var inst_44066 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44068__$1,inst_44066);
} else {
return null;
}
}
}
}
});})(c__38430__auto__))
;
return ((function (switch__38318__auto__,c__38430__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto____0 = (function (){
var statearr_44075 = [null,null,null,null,null,null,null,null,null];
(statearr_44075[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto__);

(statearr_44075[(1)] = (1));

return statearr_44075;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto____1 = (function (state_44068){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_44068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e44076){if((e44076 instanceof Object)){
var ex__38322__auto__ = e44076;
var statearr_44077_44079 = state_44068;
(statearr_44077_44079[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44080 = state_44068;
state_44068 = G__44080;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto__ = function(state_44068){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto____1.call(this,state_44068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__))
})();
var state__38432__auto__ = (function (){var statearr_44078 = f__38431__auto__.call(null);
(statearr_44078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_44078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__))
);

return c__38430__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str("position: absolute;"),cljs.core.str("z-index: 9000;"),cljs.core.str("width: 100vw;"),cljs.core.str("height: 100vh;"),cljs.core.str("top: 0px; left: 0px;"),cljs.core.str("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str("color: #FFF5DB;"),cljs.core.str("width: 100vw;"),cljs.core.str("margin: auto;"),cljs.core.str("margin-top: 10px;"),cljs.core.str("text-align: center; "),cljs.core.str("padding: 2px 0px;"),cljs.core.str("font-size: 13px;"),cljs.core.str("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1518788581611