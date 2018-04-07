// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43644){
var map__43669 = p__43644;
var map__43669__$1 = ((((!((map__43669 == null)))?((((map__43669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43669):map__43669);
var m = map__43669__$1;
var n = cljs.core.get.call(null,map__43669__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43669__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43671_43693 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43672_43694 = null;
var count__43673_43695 = (0);
var i__43674_43696 = (0);
while(true){
if((i__43674_43696 < count__43673_43695)){
var f_43697 = cljs.core._nth.call(null,chunk__43672_43694,i__43674_43696);
cljs.core.println.call(null,"  ",f_43697);

var G__43698 = seq__43671_43693;
var G__43699 = chunk__43672_43694;
var G__43700 = count__43673_43695;
var G__43701 = (i__43674_43696 + (1));
seq__43671_43693 = G__43698;
chunk__43672_43694 = G__43699;
count__43673_43695 = G__43700;
i__43674_43696 = G__43701;
continue;
} else {
var temp__4657__auto___43702 = cljs.core.seq.call(null,seq__43671_43693);
if(temp__4657__auto___43702){
var seq__43671_43703__$1 = temp__4657__auto___43702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43671_43703__$1)){
var c__26787__auto___43704 = cljs.core.chunk_first.call(null,seq__43671_43703__$1);
var G__43705 = cljs.core.chunk_rest.call(null,seq__43671_43703__$1);
var G__43706 = c__26787__auto___43704;
var G__43707 = cljs.core.count.call(null,c__26787__auto___43704);
var G__43708 = (0);
seq__43671_43693 = G__43705;
chunk__43672_43694 = G__43706;
count__43673_43695 = G__43707;
i__43674_43696 = G__43708;
continue;
} else {
var f_43709 = cljs.core.first.call(null,seq__43671_43703__$1);
cljs.core.println.call(null,"  ",f_43709);

var G__43710 = cljs.core.next.call(null,seq__43671_43703__$1);
var G__43711 = null;
var G__43712 = (0);
var G__43713 = (0);
seq__43671_43693 = G__43710;
chunk__43672_43694 = G__43711;
count__43673_43695 = G__43712;
i__43674_43696 = G__43713;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43714 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25976__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43714);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43714)))?cljs.core.second.call(null,arglists_43714):arglists_43714));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43675_43715 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43676_43716 = null;
var count__43677_43717 = (0);
var i__43678_43718 = (0);
while(true){
if((i__43678_43718 < count__43677_43717)){
var vec__43679_43719 = cljs.core._nth.call(null,chunk__43676_43716,i__43678_43718);
var name_43720 = cljs.core.nth.call(null,vec__43679_43719,(0),null);
var map__43682_43721 = cljs.core.nth.call(null,vec__43679_43719,(1),null);
var map__43682_43722__$1 = ((((!((map__43682_43721 == null)))?((((map__43682_43721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43682_43721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43682_43721):map__43682_43721);
var doc_43723 = cljs.core.get.call(null,map__43682_43722__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43724 = cljs.core.get.call(null,map__43682_43722__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43720);

cljs.core.println.call(null," ",arglists_43724);

if(cljs.core.truth_(doc_43723)){
cljs.core.println.call(null," ",doc_43723);
} else {
}

var G__43725 = seq__43675_43715;
var G__43726 = chunk__43676_43716;
var G__43727 = count__43677_43717;
var G__43728 = (i__43678_43718 + (1));
seq__43675_43715 = G__43725;
chunk__43676_43716 = G__43726;
count__43677_43717 = G__43727;
i__43678_43718 = G__43728;
continue;
} else {
var temp__4657__auto___43729 = cljs.core.seq.call(null,seq__43675_43715);
if(temp__4657__auto___43729){
var seq__43675_43730__$1 = temp__4657__auto___43729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43675_43730__$1)){
var c__26787__auto___43731 = cljs.core.chunk_first.call(null,seq__43675_43730__$1);
var G__43732 = cljs.core.chunk_rest.call(null,seq__43675_43730__$1);
var G__43733 = c__26787__auto___43731;
var G__43734 = cljs.core.count.call(null,c__26787__auto___43731);
var G__43735 = (0);
seq__43675_43715 = G__43732;
chunk__43676_43716 = G__43733;
count__43677_43717 = G__43734;
i__43678_43718 = G__43735;
continue;
} else {
var vec__43684_43736 = cljs.core.first.call(null,seq__43675_43730__$1);
var name_43737 = cljs.core.nth.call(null,vec__43684_43736,(0),null);
var map__43687_43738 = cljs.core.nth.call(null,vec__43684_43736,(1),null);
var map__43687_43739__$1 = ((((!((map__43687_43738 == null)))?((((map__43687_43738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43687_43738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43687_43738):map__43687_43738);
var doc_43740 = cljs.core.get.call(null,map__43687_43739__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43741 = cljs.core.get.call(null,map__43687_43739__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43737);

cljs.core.println.call(null," ",arglists_43741);

if(cljs.core.truth_(doc_43740)){
cljs.core.println.call(null," ",doc_43740);
} else {
}

var G__43742 = cljs.core.next.call(null,seq__43675_43730__$1);
var G__43743 = null;
var G__43744 = (0);
var G__43745 = (0);
seq__43675_43715 = G__43742;
chunk__43676_43716 = G__43743;
count__43677_43717 = G__43744;
i__43678_43718 = G__43745;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__43689 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43690 = null;
var count__43691 = (0);
var i__43692 = (0);
while(true){
if((i__43692 < count__43691)){
var role = cljs.core._nth.call(null,chunk__43690,i__43692);
var temp__4657__auto___43746__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___43746__$1)){
var spec_43747 = temp__4657__auto___43746__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_43747));
} else {
}

var G__43748 = seq__43689;
var G__43749 = chunk__43690;
var G__43750 = count__43691;
var G__43751 = (i__43692 + (1));
seq__43689 = G__43748;
chunk__43690 = G__43749;
count__43691 = G__43750;
i__43692 = G__43751;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__43689);
if(temp__4657__auto____$1){
var seq__43689__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43689__$1)){
var c__26787__auto__ = cljs.core.chunk_first.call(null,seq__43689__$1);
var G__43752 = cljs.core.chunk_rest.call(null,seq__43689__$1);
var G__43753 = c__26787__auto__;
var G__43754 = cljs.core.count.call(null,c__26787__auto__);
var G__43755 = (0);
seq__43689 = G__43752;
chunk__43690 = G__43753;
count__43691 = G__43754;
i__43692 = G__43755;
continue;
} else {
var role = cljs.core.first.call(null,seq__43689__$1);
var temp__4657__auto___43756__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___43756__$2)){
var spec_43757 = temp__4657__auto___43756__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_43757));
} else {
}

var G__43758 = cljs.core.next.call(null,seq__43689__$1);
var G__43759 = null;
var G__43760 = (0);
var G__43761 = (0);
seq__43689 = G__43758;
chunk__43690 = G__43759;
count__43691 = G__43760;
i__43692 = G__43761;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1518788580015