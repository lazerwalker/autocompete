// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args44083 = [];
var len__27051__auto___44086 = arguments.length;
var i__27052__auto___44087 = (0);
while(true){
if((i__27052__auto___44087 < len__27051__auto___44086)){
args44083.push((arguments[i__27052__auto___44087]));

var G__44088 = (i__27052__auto___44087 + (1));
i__27052__auto___44087 = G__44088;
continue;
} else {
}
break;
}

var G__44085 = args44083.length;
switch (G__44085) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44083.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27058__auto__ = [];
var len__27051__auto___44091 = arguments.length;
var i__27052__auto___44092 = (0);
while(true){
if((i__27052__auto___44092 < len__27051__auto___44091)){
args__27058__auto__.push((arguments[i__27052__auto___44092]));

var G__44093 = (i__27052__auto___44092 + (1));
i__27052__auto___44092 = G__44093;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((0) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27059__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq44090){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44090));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27058__auto__ = [];
var len__27051__auto___44095 = arguments.length;
var i__27052__auto___44096 = (0);
while(true){
if((i__27052__auto___44096 < len__27051__auto___44095)){
args__27058__auto__.push((arguments[i__27052__auto___44096]));

var G__44097 = (i__27052__auto___44096 + (1));
i__27052__auto___44096 = G__44097;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((0) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27059__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq44094){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44094));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44098){
var map__44101 = p__44098;
var map__44101__$1 = ((((!((map__44101 == null)))?((((map__44101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44101):map__44101);
var message = cljs.core.get.call(null,map__44101__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44101__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25976__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25964__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25964__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25964__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__38430__auto___44263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___44263,ch){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___44263,ch){
return (function (state_44232){
var state_val_44233 = (state_44232[(1)]);
if((state_val_44233 === (7))){
var inst_44228 = (state_44232[(2)]);
var state_44232__$1 = state_44232;
var statearr_44234_44264 = state_44232__$1;
(statearr_44234_44264[(2)] = inst_44228);

(statearr_44234_44264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (1))){
var state_44232__$1 = state_44232;
var statearr_44235_44265 = state_44232__$1;
(statearr_44235_44265[(2)] = null);

(statearr_44235_44265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (4))){
var inst_44185 = (state_44232[(7)]);
var inst_44185__$1 = (state_44232[(2)]);
var state_44232__$1 = (function (){var statearr_44236 = state_44232;
(statearr_44236[(7)] = inst_44185__$1);

return statearr_44236;
})();
if(cljs.core.truth_(inst_44185__$1)){
var statearr_44237_44266 = state_44232__$1;
(statearr_44237_44266[(1)] = (5));

} else {
var statearr_44238_44267 = state_44232__$1;
(statearr_44238_44267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (15))){
var inst_44192 = (state_44232[(8)]);
var inst_44207 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44192);
var inst_44208 = cljs.core.first.call(null,inst_44207);
var inst_44209 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44208);
var inst_44210 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_44209)].join('');
var inst_44211 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44210);
var state_44232__$1 = state_44232;
var statearr_44239_44268 = state_44232__$1;
(statearr_44239_44268[(2)] = inst_44211);

(statearr_44239_44268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (13))){
var inst_44216 = (state_44232[(2)]);
var state_44232__$1 = state_44232;
var statearr_44240_44269 = state_44232__$1;
(statearr_44240_44269[(2)] = inst_44216);

(statearr_44240_44269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (6))){
var state_44232__$1 = state_44232;
var statearr_44241_44270 = state_44232__$1;
(statearr_44241_44270[(2)] = null);

(statearr_44241_44270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (17))){
var inst_44214 = (state_44232[(2)]);
var state_44232__$1 = state_44232;
var statearr_44242_44271 = state_44232__$1;
(statearr_44242_44271[(2)] = inst_44214);

(statearr_44242_44271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (3))){
var inst_44230 = (state_44232[(2)]);
var state_44232__$1 = state_44232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44232__$1,inst_44230);
} else {
if((state_val_44233 === (12))){
var inst_44191 = (state_44232[(9)]);
var inst_44205 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44191,opts);
var state_44232__$1 = state_44232;
if(cljs.core.truth_(inst_44205)){
var statearr_44243_44272 = state_44232__$1;
(statearr_44243_44272[(1)] = (15));

} else {
var statearr_44244_44273 = state_44232__$1;
(statearr_44244_44273[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (2))){
var state_44232__$1 = state_44232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44232__$1,(4),ch);
} else {
if((state_val_44233 === (11))){
var inst_44192 = (state_44232[(8)]);
var inst_44197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44198 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44192);
var inst_44199 = cljs.core.async.timeout.call(null,(1000));
var inst_44200 = [inst_44198,inst_44199];
var inst_44201 = (new cljs.core.PersistentVector(null,2,(5),inst_44197,inst_44200,null));
var state_44232__$1 = state_44232;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44232__$1,(14),inst_44201);
} else {
if((state_val_44233 === (9))){
var inst_44192 = (state_44232[(8)]);
var inst_44218 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44219 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44192);
var inst_44220 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44219);
var inst_44221 = [cljs.core.str("Not loading: "),cljs.core.str(inst_44220)].join('');
var inst_44222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44221);
var state_44232__$1 = (function (){var statearr_44245 = state_44232;
(statearr_44245[(10)] = inst_44218);

return statearr_44245;
})();
var statearr_44246_44274 = state_44232__$1;
(statearr_44246_44274[(2)] = inst_44222);

(statearr_44246_44274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (5))){
var inst_44185 = (state_44232[(7)]);
var inst_44187 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44188 = (new cljs.core.PersistentArrayMap(null,2,inst_44187,null));
var inst_44189 = (new cljs.core.PersistentHashSet(null,inst_44188,null));
var inst_44190 = figwheel.client.focus_msgs.call(null,inst_44189,inst_44185);
var inst_44191 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44190);
var inst_44192 = cljs.core.first.call(null,inst_44190);
var inst_44193 = figwheel.client.autoload_QMARK_.call(null);
var state_44232__$1 = (function (){var statearr_44247 = state_44232;
(statearr_44247[(9)] = inst_44191);

(statearr_44247[(8)] = inst_44192);

return statearr_44247;
})();
if(cljs.core.truth_(inst_44193)){
var statearr_44248_44275 = state_44232__$1;
(statearr_44248_44275[(1)] = (8));

} else {
var statearr_44249_44276 = state_44232__$1;
(statearr_44249_44276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (14))){
var inst_44203 = (state_44232[(2)]);
var state_44232__$1 = state_44232;
var statearr_44250_44277 = state_44232__$1;
(statearr_44250_44277[(2)] = inst_44203);

(statearr_44250_44277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (16))){
var state_44232__$1 = state_44232;
var statearr_44251_44278 = state_44232__$1;
(statearr_44251_44278[(2)] = null);

(statearr_44251_44278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (10))){
var inst_44224 = (state_44232[(2)]);
var state_44232__$1 = (function (){var statearr_44252 = state_44232;
(statearr_44252[(11)] = inst_44224);

return statearr_44252;
})();
var statearr_44253_44279 = state_44232__$1;
(statearr_44253_44279[(2)] = null);

(statearr_44253_44279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (8))){
var inst_44191 = (state_44232[(9)]);
var inst_44195 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44191,opts);
var state_44232__$1 = state_44232;
if(cljs.core.truth_(inst_44195)){
var statearr_44254_44280 = state_44232__$1;
(statearr_44254_44280[(1)] = (11));

} else {
var statearr_44255_44281 = state_44232__$1;
(statearr_44255_44281[(1)] = (12));

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
});})(c__38430__auto___44263,ch))
;
return ((function (switch__38318__auto__,c__38430__auto___44263,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38319__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38319__auto____0 = (function (){
var statearr_44259 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44259[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38319__auto__);

(statearr_44259[(1)] = (1));

return statearr_44259;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38319__auto____1 = (function (state_44232){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_44232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e44260){if((e44260 instanceof Object)){
var ex__38322__auto__ = e44260;
var statearr_44261_44282 = state_44232;
(statearr_44261_44282[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44283 = state_44232;
state_44232 = G__44283;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38319__auto__ = function(state_44232){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38319__auto____1.call(this,state_44232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38319__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38319__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___44263,ch))
})();
var state__38432__auto__ = (function (){var statearr_44262 = f__38431__auto__.call(null);
(statearr_44262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___44263);

return statearr_44262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___44263,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44284_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44284_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_44287 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44287){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e44286){if((e44286 instanceof Error)){
var e = e44286;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44287], null));
} else {
var e = e44286;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_44287))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44288){
var map__44297 = p__44288;
var map__44297__$1 = ((((!((map__44297 == null)))?((((map__44297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44297):map__44297);
var opts = map__44297__$1;
var build_id = cljs.core.get.call(null,map__44297__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44297,map__44297__$1,opts,build_id){
return (function (p__44299){
var vec__44300 = p__44299;
var seq__44301 = cljs.core.seq.call(null,vec__44300);
var first__44302 = cljs.core.first.call(null,seq__44301);
var seq__44301__$1 = cljs.core.next.call(null,seq__44301);
var map__44303 = first__44302;
var map__44303__$1 = ((((!((map__44303 == null)))?((((map__44303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44303):map__44303);
var msg = map__44303__$1;
var msg_name = cljs.core.get.call(null,map__44303__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44301__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44300,seq__44301,first__44302,seq__44301__$1,map__44303,map__44303__$1,msg,msg_name,_,map__44297,map__44297__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44300,seq__44301,first__44302,seq__44301__$1,map__44303,map__44303__$1,msg,msg_name,_,map__44297,map__44297__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44297,map__44297__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44311){
var vec__44312 = p__44311;
var seq__44313 = cljs.core.seq.call(null,vec__44312);
var first__44314 = cljs.core.first.call(null,seq__44313);
var seq__44313__$1 = cljs.core.next.call(null,seq__44313);
var map__44315 = first__44314;
var map__44315__$1 = ((((!((map__44315 == null)))?((((map__44315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44315):map__44315);
var msg = map__44315__$1;
var msg_name = cljs.core.get.call(null,map__44315__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44313__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44317){
var map__44329 = p__44317;
var map__44329__$1 = ((((!((map__44329 == null)))?((((map__44329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44329):map__44329);
var on_compile_warning = cljs.core.get.call(null,map__44329__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44329__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44329,map__44329__$1,on_compile_warning,on_compile_fail){
return (function (p__44331){
var vec__44332 = p__44331;
var seq__44333 = cljs.core.seq.call(null,vec__44332);
var first__44334 = cljs.core.first.call(null,seq__44333);
var seq__44333__$1 = cljs.core.next.call(null,seq__44333);
var map__44335 = first__44334;
var map__44335__$1 = ((((!((map__44335 == null)))?((((map__44335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44335):map__44335);
var msg = map__44335__$1;
var msg_name = cljs.core.get.call(null,map__44335__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44333__$1;
var pred__44337 = cljs.core._EQ_;
var expr__44338 = msg_name;
if(cljs.core.truth_(pred__44337.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44338))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44337.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44338))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44329,map__44329__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__,msg_hist,msg_names,msg){
return (function (state_44566){
var state_val_44567 = (state_44566[(1)]);
if((state_val_44567 === (7))){
var inst_44486 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
if(cljs.core.truth_(inst_44486)){
var statearr_44568_44618 = state_44566__$1;
(statearr_44568_44618[(1)] = (8));

} else {
var statearr_44569_44619 = state_44566__$1;
(statearr_44569_44619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (20))){
var inst_44560 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44570_44620 = state_44566__$1;
(statearr_44570_44620[(2)] = inst_44560);

(statearr_44570_44620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (27))){
var inst_44556 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44571_44621 = state_44566__$1;
(statearr_44571_44621[(2)] = inst_44556);

(statearr_44571_44621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (1))){
var inst_44479 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44566__$1 = state_44566;
if(cljs.core.truth_(inst_44479)){
var statearr_44572_44622 = state_44566__$1;
(statearr_44572_44622[(1)] = (2));

} else {
var statearr_44573_44623 = state_44566__$1;
(statearr_44573_44623[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (24))){
var inst_44558 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44574_44624 = state_44566__$1;
(statearr_44574_44624[(2)] = inst_44558);

(statearr_44574_44624[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (4))){
var inst_44564 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44566__$1,inst_44564);
} else {
if((state_val_44567 === (15))){
var inst_44562 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44575_44625 = state_44566__$1;
(statearr_44575_44625[(2)] = inst_44562);

(statearr_44575_44625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (21))){
var inst_44515 = (state_44566[(2)]);
var inst_44516 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44517 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44516);
var state_44566__$1 = (function (){var statearr_44576 = state_44566;
(statearr_44576[(7)] = inst_44515);

return statearr_44576;
})();
var statearr_44577_44626 = state_44566__$1;
(statearr_44577_44626[(2)] = inst_44517);

(statearr_44577_44626[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (31))){
var inst_44545 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44566__$1 = state_44566;
if(cljs.core.truth_(inst_44545)){
var statearr_44578_44627 = state_44566__$1;
(statearr_44578_44627[(1)] = (34));

} else {
var statearr_44579_44628 = state_44566__$1;
(statearr_44579_44628[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (32))){
var inst_44554 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44580_44629 = state_44566__$1;
(statearr_44580_44629[(2)] = inst_44554);

(statearr_44580_44629[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (33))){
var inst_44541 = (state_44566[(2)]);
var inst_44542 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44543 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44542);
var state_44566__$1 = (function (){var statearr_44581 = state_44566;
(statearr_44581[(8)] = inst_44541);

return statearr_44581;
})();
var statearr_44582_44630 = state_44566__$1;
(statearr_44582_44630[(2)] = inst_44543);

(statearr_44582_44630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (13))){
var inst_44500 = figwheel.client.heads_up.clear.call(null);
var state_44566__$1 = state_44566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44566__$1,(16),inst_44500);
} else {
if((state_val_44567 === (22))){
var inst_44521 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44522 = figwheel.client.heads_up.append_warning_message.call(null,inst_44521);
var state_44566__$1 = state_44566;
var statearr_44583_44631 = state_44566__$1;
(statearr_44583_44631[(2)] = inst_44522);

(statearr_44583_44631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (36))){
var inst_44552 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44584_44632 = state_44566__$1;
(statearr_44584_44632[(2)] = inst_44552);

(statearr_44584_44632[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (29))){
var inst_44532 = (state_44566[(2)]);
var inst_44533 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44534 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44533);
var state_44566__$1 = (function (){var statearr_44585 = state_44566;
(statearr_44585[(9)] = inst_44532);

return statearr_44585;
})();
var statearr_44586_44633 = state_44566__$1;
(statearr_44586_44633[(2)] = inst_44534);

(statearr_44586_44633[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (6))){
var inst_44481 = (state_44566[(10)]);
var state_44566__$1 = state_44566;
var statearr_44587_44634 = state_44566__$1;
(statearr_44587_44634[(2)] = inst_44481);

(statearr_44587_44634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (28))){
var inst_44528 = (state_44566[(2)]);
var inst_44529 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44530 = figwheel.client.heads_up.display_warning.call(null,inst_44529);
var state_44566__$1 = (function (){var statearr_44588 = state_44566;
(statearr_44588[(11)] = inst_44528);

return statearr_44588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44566__$1,(29),inst_44530);
} else {
if((state_val_44567 === (25))){
var inst_44526 = figwheel.client.heads_up.clear.call(null);
var state_44566__$1 = state_44566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44566__$1,(28),inst_44526);
} else {
if((state_val_44567 === (34))){
var inst_44547 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44566__$1 = state_44566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44566__$1,(37),inst_44547);
} else {
if((state_val_44567 === (17))){
var inst_44506 = (state_44566[(2)]);
var inst_44507 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44508 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44507);
var state_44566__$1 = (function (){var statearr_44589 = state_44566;
(statearr_44589[(12)] = inst_44506);

return statearr_44589;
})();
var statearr_44590_44635 = state_44566__$1;
(statearr_44590_44635[(2)] = inst_44508);

(statearr_44590_44635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (3))){
var inst_44498 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44566__$1 = state_44566;
if(cljs.core.truth_(inst_44498)){
var statearr_44591_44636 = state_44566__$1;
(statearr_44591_44636[(1)] = (13));

} else {
var statearr_44592_44637 = state_44566__$1;
(statearr_44592_44637[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (12))){
var inst_44494 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44593_44638 = state_44566__$1;
(statearr_44593_44638[(2)] = inst_44494);

(statearr_44593_44638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (2))){
var inst_44481 = (state_44566[(10)]);
var inst_44481__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44566__$1 = (function (){var statearr_44594 = state_44566;
(statearr_44594[(10)] = inst_44481__$1);

return statearr_44594;
})();
if(cljs.core.truth_(inst_44481__$1)){
var statearr_44595_44639 = state_44566__$1;
(statearr_44595_44639[(1)] = (5));

} else {
var statearr_44596_44640 = state_44566__$1;
(statearr_44596_44640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (23))){
var inst_44524 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44566__$1 = state_44566;
if(cljs.core.truth_(inst_44524)){
var statearr_44597_44641 = state_44566__$1;
(statearr_44597_44641[(1)] = (25));

} else {
var statearr_44598_44642 = state_44566__$1;
(statearr_44598_44642[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (35))){
var state_44566__$1 = state_44566;
var statearr_44599_44643 = state_44566__$1;
(statearr_44599_44643[(2)] = null);

(statearr_44599_44643[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (19))){
var inst_44519 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44566__$1 = state_44566;
if(cljs.core.truth_(inst_44519)){
var statearr_44600_44644 = state_44566__$1;
(statearr_44600_44644[(1)] = (22));

} else {
var statearr_44601_44645 = state_44566__$1;
(statearr_44601_44645[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (11))){
var inst_44490 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44602_44646 = state_44566__$1;
(statearr_44602_44646[(2)] = inst_44490);

(statearr_44602_44646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (9))){
var inst_44492 = figwheel.client.heads_up.clear.call(null);
var state_44566__$1 = state_44566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44566__$1,(12),inst_44492);
} else {
if((state_val_44567 === (5))){
var inst_44483 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44566__$1 = state_44566;
var statearr_44603_44647 = state_44566__$1;
(statearr_44603_44647[(2)] = inst_44483);

(statearr_44603_44647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (14))){
var inst_44510 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44566__$1 = state_44566;
if(cljs.core.truth_(inst_44510)){
var statearr_44604_44648 = state_44566__$1;
(statearr_44604_44648[(1)] = (18));

} else {
var statearr_44605_44649 = state_44566__$1;
(statearr_44605_44649[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (26))){
var inst_44536 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44566__$1 = state_44566;
if(cljs.core.truth_(inst_44536)){
var statearr_44606_44650 = state_44566__$1;
(statearr_44606_44650[(1)] = (30));

} else {
var statearr_44607_44651 = state_44566__$1;
(statearr_44607_44651[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (16))){
var inst_44502 = (state_44566[(2)]);
var inst_44503 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44504 = figwheel.client.heads_up.display_exception.call(null,inst_44503);
var state_44566__$1 = (function (){var statearr_44608 = state_44566;
(statearr_44608[(13)] = inst_44502);

return statearr_44608;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44566__$1,(17),inst_44504);
} else {
if((state_val_44567 === (30))){
var inst_44538 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44539 = figwheel.client.heads_up.display_warning.call(null,inst_44538);
var state_44566__$1 = state_44566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44566__$1,(33),inst_44539);
} else {
if((state_val_44567 === (10))){
var inst_44496 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44609_44652 = state_44566__$1;
(statearr_44609_44652[(2)] = inst_44496);

(statearr_44609_44652[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (18))){
var inst_44512 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44513 = figwheel.client.heads_up.display_exception.call(null,inst_44512);
var state_44566__$1 = state_44566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44566__$1,(21),inst_44513);
} else {
if((state_val_44567 === (37))){
var inst_44549 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44610_44653 = state_44566__$1;
(statearr_44610_44653[(2)] = inst_44549);

(statearr_44610_44653[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (8))){
var inst_44488 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44566__$1 = state_44566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44566__$1,(11),inst_44488);
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
});})(c__38430__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38318__auto__,c__38430__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto____0 = (function (){
var statearr_44614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44614[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto__);

(statearr_44614[(1)] = (1));

return statearr_44614;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto____1 = (function (state_44566){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_44566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e44615){if((e44615 instanceof Object)){
var ex__38322__auto__ = e44615;
var statearr_44616_44654 = state_44566;
(statearr_44616_44654[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44655 = state_44566;
state_44566 = G__44655;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto__ = function(state_44566){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto____1.call(this,state_44566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__,msg_hist,msg_names,msg))
})();
var state__38432__auto__ = (function (){var statearr_44617 = f__38431__auto__.call(null);
(statearr_44617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_44617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__,msg_hist,msg_names,msg))
);

return c__38430__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38430__auto___44718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto___44718,ch){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto___44718,ch){
return (function (state_44701){
var state_val_44702 = (state_44701[(1)]);
if((state_val_44702 === (1))){
var state_44701__$1 = state_44701;
var statearr_44703_44719 = state_44701__$1;
(statearr_44703_44719[(2)] = null);

(statearr_44703_44719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (2))){
var state_44701__$1 = state_44701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44701__$1,(4),ch);
} else {
if((state_val_44702 === (3))){
var inst_44699 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44701__$1,inst_44699);
} else {
if((state_val_44702 === (4))){
var inst_44689 = (state_44701[(7)]);
var inst_44689__$1 = (state_44701[(2)]);
var state_44701__$1 = (function (){var statearr_44704 = state_44701;
(statearr_44704[(7)] = inst_44689__$1);

return statearr_44704;
})();
if(cljs.core.truth_(inst_44689__$1)){
var statearr_44705_44720 = state_44701__$1;
(statearr_44705_44720[(1)] = (5));

} else {
var statearr_44706_44721 = state_44701__$1;
(statearr_44706_44721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (5))){
var inst_44689 = (state_44701[(7)]);
var inst_44691 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44689);
var state_44701__$1 = state_44701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44701__$1,(8),inst_44691);
} else {
if((state_val_44702 === (6))){
var state_44701__$1 = state_44701;
var statearr_44707_44722 = state_44701__$1;
(statearr_44707_44722[(2)] = null);

(statearr_44707_44722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (7))){
var inst_44697 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
var statearr_44708_44723 = state_44701__$1;
(statearr_44708_44723[(2)] = inst_44697);

(statearr_44708_44723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (8))){
var inst_44693 = (state_44701[(2)]);
var state_44701__$1 = (function (){var statearr_44709 = state_44701;
(statearr_44709[(8)] = inst_44693);

return statearr_44709;
})();
var statearr_44710_44724 = state_44701__$1;
(statearr_44710_44724[(2)] = null);

(statearr_44710_44724[(1)] = (2));


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
});})(c__38430__auto___44718,ch))
;
return ((function (switch__38318__auto__,c__38430__auto___44718,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38319__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38319__auto____0 = (function (){
var statearr_44714 = [null,null,null,null,null,null,null,null,null];
(statearr_44714[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38319__auto__);

(statearr_44714[(1)] = (1));

return statearr_44714;
});
var figwheel$client$heads_up_plugin_$_state_machine__38319__auto____1 = (function (state_44701){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_44701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e44715){if((e44715 instanceof Object)){
var ex__38322__auto__ = e44715;
var statearr_44716_44725 = state_44701;
(statearr_44716_44725[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44726 = state_44701;
state_44701 = G__44726;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38319__auto__ = function(state_44701){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38319__auto____1.call(this,state_44701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38319__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38319__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto___44718,ch))
})();
var state__38432__auto__ = (function (){var statearr_44717 = f__38431__auto__.call(null);
(statearr_44717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto___44718);

return statearr_44717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto___44718,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__){
return (function (state_44747){
var state_val_44748 = (state_44747[(1)]);
if((state_val_44748 === (1))){
var inst_44742 = cljs.core.async.timeout.call(null,(3000));
var state_44747__$1 = state_44747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44747__$1,(2),inst_44742);
} else {
if((state_val_44748 === (2))){
var inst_44744 = (state_44747[(2)]);
var inst_44745 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44747__$1 = (function (){var statearr_44749 = state_44747;
(statearr_44749[(7)] = inst_44744);

return statearr_44749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44747__$1,inst_44745);
} else {
return null;
}
}
});})(c__38430__auto__))
;
return ((function (switch__38318__auto__,c__38430__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38319__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38319__auto____0 = (function (){
var statearr_44753 = [null,null,null,null,null,null,null,null];
(statearr_44753[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38319__auto__);

(statearr_44753[(1)] = (1));

return statearr_44753;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38319__auto____1 = (function (state_44747){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_44747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e44754){if((e44754 instanceof Object)){
var ex__38322__auto__ = e44754;
var statearr_44755_44757 = state_44747;
(statearr_44755_44757[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44758 = state_44747;
state_44747 = G__44758;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38319__auto__ = function(state_44747){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38319__auto____1.call(this,state_44747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38319__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38319__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__))
})();
var state__38432__auto__ = (function (){var statearr_44756 = f__38431__auto__.call(null);
(statearr_44756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_44756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__))
);

return c__38430__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38430__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38430__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__38431__auto__ = (function (){var switch__38318__auto__ = ((function (c__38430__auto__,figwheel_version,temp__4657__auto__){
return (function (state_44781){
var state_val_44782 = (state_44781[(1)]);
if((state_val_44782 === (1))){
var inst_44775 = cljs.core.async.timeout.call(null,(2000));
var state_44781__$1 = state_44781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44781__$1,(2),inst_44775);
} else {
if((state_val_44782 === (2))){
var inst_44777 = (state_44781[(2)]);
var inst_44778 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_44779 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44778);
var state_44781__$1 = (function (){var statearr_44783 = state_44781;
(statearr_44783[(7)] = inst_44777);

return statearr_44783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44781__$1,inst_44779);
} else {
return null;
}
}
});})(c__38430__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__38318__auto__,c__38430__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto____0 = (function (){
var statearr_44787 = [null,null,null,null,null,null,null,null];
(statearr_44787[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto__);

(statearr_44787[(1)] = (1));

return statearr_44787;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto____1 = (function (state_44781){
while(true){
var ret_value__38320__auto__ = (function (){try{while(true){
var result__38321__auto__ = switch__38318__auto__.call(null,state_44781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38321__auto__;
}
break;
}
}catch (e44788){if((e44788 instanceof Object)){
var ex__38322__auto__ = e44788;
var statearr_44789_44791 = state_44781;
(statearr_44789_44791[(5)] = ex__38322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44792 = state_44781;
state_44781 = G__44792;
continue;
} else {
return ret_value__38320__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto__ = function(state_44781){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto____1.call(this,state_44781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38319__auto__;
})()
;})(switch__38318__auto__,c__38430__auto__,figwheel_version,temp__4657__auto__))
})();
var state__38432__auto__ = (function (){var statearr_44790 = f__38431__auto__.call(null);
(statearr_44790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38430__auto__);

return statearr_44790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38432__auto__);
});})(c__38430__auto__,figwheel_version,temp__4657__auto__))
);

return c__38430__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44793){
var map__44797 = p__44793;
var map__44797__$1 = ((((!((map__44797 == null)))?((((map__44797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44797):map__44797);
var file = cljs.core.get.call(null,map__44797__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44797__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44797__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44799 = "";
var G__44799__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__44799),cljs.core.str("file "),cljs.core.str(file)].join(''):G__44799);
var G__44799__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__44799__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__44799__$1);
if(cljs.core.truth_((function (){var and__25964__auto__ = line;
if(cljs.core.truth_(and__25964__auto__)){
return column;
} else {
return and__25964__auto__;
}
})())){
return [cljs.core.str(G__44799__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__44799__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44800){
var map__44807 = p__44800;
var map__44807__$1 = ((((!((map__44807 == null)))?((((map__44807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44807):map__44807);
var ed = map__44807__$1;
var formatted_exception = cljs.core.get.call(null,map__44807__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44807__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44807__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44809_44813 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44810_44814 = null;
var count__44811_44815 = (0);
var i__44812_44816 = (0);
while(true){
if((i__44812_44816 < count__44811_44815)){
var msg_44817 = cljs.core._nth.call(null,chunk__44810_44814,i__44812_44816);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44817);

var G__44818 = seq__44809_44813;
var G__44819 = chunk__44810_44814;
var G__44820 = count__44811_44815;
var G__44821 = (i__44812_44816 + (1));
seq__44809_44813 = G__44818;
chunk__44810_44814 = G__44819;
count__44811_44815 = G__44820;
i__44812_44816 = G__44821;
continue;
} else {
var temp__4657__auto___44822 = cljs.core.seq.call(null,seq__44809_44813);
if(temp__4657__auto___44822){
var seq__44809_44823__$1 = temp__4657__auto___44822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44809_44823__$1)){
var c__26787__auto___44824 = cljs.core.chunk_first.call(null,seq__44809_44823__$1);
var G__44825 = cljs.core.chunk_rest.call(null,seq__44809_44823__$1);
var G__44826 = c__26787__auto___44824;
var G__44827 = cljs.core.count.call(null,c__26787__auto___44824);
var G__44828 = (0);
seq__44809_44813 = G__44825;
chunk__44810_44814 = G__44826;
count__44811_44815 = G__44827;
i__44812_44816 = G__44828;
continue;
} else {
var msg_44829 = cljs.core.first.call(null,seq__44809_44823__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44829);

var G__44830 = cljs.core.next.call(null,seq__44809_44823__$1);
var G__44831 = null;
var G__44832 = (0);
var G__44833 = (0);
seq__44809_44813 = G__44830;
chunk__44810_44814 = G__44831;
count__44811_44815 = G__44832;
i__44812_44816 = G__44833;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44834){
var map__44837 = p__44834;
var map__44837__$1 = ((((!((map__44837 == null)))?((((map__44837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44837):map__44837);
var w = map__44837__$1;
var message = cljs.core.get.call(null,map__44837__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/voicebox/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/voicebox/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25964__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25964__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25964__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44849 = cljs.core.seq.call(null,plugins);
var chunk__44850 = null;
var count__44851 = (0);
var i__44852 = (0);
while(true){
if((i__44852 < count__44851)){
var vec__44853 = cljs.core._nth.call(null,chunk__44850,i__44852);
var k = cljs.core.nth.call(null,vec__44853,(0),null);
var plugin = cljs.core.nth.call(null,vec__44853,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44859 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44849,chunk__44850,count__44851,i__44852,pl_44859,vec__44853,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44859.call(null,msg_hist);
});})(seq__44849,chunk__44850,count__44851,i__44852,pl_44859,vec__44853,k,plugin))
);
} else {
}

var G__44860 = seq__44849;
var G__44861 = chunk__44850;
var G__44862 = count__44851;
var G__44863 = (i__44852 + (1));
seq__44849 = G__44860;
chunk__44850 = G__44861;
count__44851 = G__44862;
i__44852 = G__44863;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44849);
if(temp__4657__auto__){
var seq__44849__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44849__$1)){
var c__26787__auto__ = cljs.core.chunk_first.call(null,seq__44849__$1);
var G__44864 = cljs.core.chunk_rest.call(null,seq__44849__$1);
var G__44865 = c__26787__auto__;
var G__44866 = cljs.core.count.call(null,c__26787__auto__);
var G__44867 = (0);
seq__44849 = G__44864;
chunk__44850 = G__44865;
count__44851 = G__44866;
i__44852 = G__44867;
continue;
} else {
var vec__44856 = cljs.core.first.call(null,seq__44849__$1);
var k = cljs.core.nth.call(null,vec__44856,(0),null);
var plugin = cljs.core.nth.call(null,vec__44856,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44868 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44849,chunk__44850,count__44851,i__44852,pl_44868,vec__44856,k,plugin,seq__44849__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44868.call(null,msg_hist);
});})(seq__44849,chunk__44850,count__44851,i__44852,pl_44868,vec__44856,k,plugin,seq__44849__$1,temp__4657__auto__))
);
} else {
}

var G__44869 = cljs.core.next.call(null,seq__44849__$1);
var G__44870 = null;
var G__44871 = (0);
var G__44872 = (0);
seq__44849 = G__44869;
chunk__44850 = G__44870;
count__44851 = G__44871;
i__44852 = G__44872;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args44873 = [];
var len__27051__auto___44880 = arguments.length;
var i__27052__auto___44881 = (0);
while(true){
if((i__27052__auto___44881 < len__27051__auto___44880)){
args44873.push((arguments[i__27052__auto___44881]));

var G__44882 = (i__27052__auto___44881 + (1));
i__27052__auto___44881 = G__44882;
continue;
} else {
}
break;
}

var G__44875 = args44873.length;
switch (G__44875) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44873.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44876_44884 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44877_44885 = null;
var count__44878_44886 = (0);
var i__44879_44887 = (0);
while(true){
if((i__44879_44887 < count__44878_44886)){
var msg_44888 = cljs.core._nth.call(null,chunk__44877_44885,i__44879_44887);
figwheel.client.socket.handle_incoming_message.call(null,msg_44888);

var G__44889 = seq__44876_44884;
var G__44890 = chunk__44877_44885;
var G__44891 = count__44878_44886;
var G__44892 = (i__44879_44887 + (1));
seq__44876_44884 = G__44889;
chunk__44877_44885 = G__44890;
count__44878_44886 = G__44891;
i__44879_44887 = G__44892;
continue;
} else {
var temp__4657__auto___44893 = cljs.core.seq.call(null,seq__44876_44884);
if(temp__4657__auto___44893){
var seq__44876_44894__$1 = temp__4657__auto___44893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44876_44894__$1)){
var c__26787__auto___44895 = cljs.core.chunk_first.call(null,seq__44876_44894__$1);
var G__44896 = cljs.core.chunk_rest.call(null,seq__44876_44894__$1);
var G__44897 = c__26787__auto___44895;
var G__44898 = cljs.core.count.call(null,c__26787__auto___44895);
var G__44899 = (0);
seq__44876_44884 = G__44896;
chunk__44877_44885 = G__44897;
count__44878_44886 = G__44898;
i__44879_44887 = G__44899;
continue;
} else {
var msg_44900 = cljs.core.first.call(null,seq__44876_44894__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44900);

var G__44901 = cljs.core.next.call(null,seq__44876_44894__$1);
var G__44902 = null;
var G__44903 = (0);
var G__44904 = (0);
seq__44876_44884 = G__44901;
chunk__44877_44885 = G__44902;
count__44878_44886 = G__44903;
i__44879_44887 = G__44904;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27058__auto__ = [];
var len__27051__auto___44909 = arguments.length;
var i__27052__auto___44910 = (0);
while(true){
if((i__27052__auto___44910 < len__27051__auto___44909)){
args__27058__auto__.push((arguments[i__27052__auto___44910]));

var G__44911 = (i__27052__auto___44910 + (1));
i__27052__auto___44910 = G__44911;
continue;
} else {
}
break;
}

var argseq__27059__auto__ = ((((0) < args__27058__auto__.length))?(new cljs.core.IndexedSeq(args__27058__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27059__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44906){
var map__44907 = p__44906;
var map__44907__$1 = ((((!((map__44907 == null)))?((((map__44907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44907):map__44907);
var opts = map__44907__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44905){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44905));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44913){if((e44913 instanceof Error)){
var e = e44913;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44913;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44917){
var map__44918 = p__44917;
var map__44918__$1 = ((((!((map__44918 == null)))?((((map__44918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44918):map__44918);
var msg_name = cljs.core.get.call(null,map__44918__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518788583026