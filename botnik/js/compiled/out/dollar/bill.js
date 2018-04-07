// Compiled by ClojureScript 1.9.229 {}
goog.provide('dollar.bill');
goog.require('cljs.core');
dollar.bill.el_QMARK_ = (function dollar$bill$el_QMARK_(o){
return (o instanceof Element);
});
dollar.bill.doc_QMARK_ = (function dollar$bill$doc_QMARK_(o){
return o.querySelectorAll;
});
dollar.bill.ar_QMARK_ = (function dollar$bill$ar_QMARK_(o){
return (o instanceof Array);
});
dollar.bill.aseq = (function dollar$bill$aseq(b){
if(cljs.core.truth_((function (){var or__25976__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(or__25976__auto__){
return or__25976__auto__;
} else {
return dollar.bill.ar_QMARK_.call(null,b);
}
})())){
return b;
} else {
var x__26810__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26810__auto__);
}
});
dollar.bill.as_array = (function dollar$bill$as_array(a){
return Array.prototype.slice.call(a);
});
dollar.bill._GT_dom = (function dollar$bill$_GT_dom(s){
var d = document.createElement("div");
d.innerHTML = s;

return dollar.bill.as_array.call(null,d.children);
});
dollar.bill.$ = (function dollar$bill$$(q){
if(cljs.core.truth_(cljs.core.re_find.call(null,/^\W*</,q))){
return dollar.bill._GT_dom.call(null,q);
} else {
return dollar.bill.as_array.call(null,document.querySelectorAll(q));
}
});
dollar.bill.op = (function dollar$bill$op(var_args){
var args35756 = [];
var len__27051__auto___35759 = arguments.length;
var i__27052__auto___35760 = (0);
while(true){
if((i__27052__auto___35760 < len__27051__auto___35759)){
args35756.push((arguments[i__27052__auto___35760]));

var G__35761 = (i__27052__auto___35760 + (1));
i__27052__auto___35760 = G__35761;
continue;
} else {
}
break;
}

var G__35758 = args35756.length;
switch (G__35758) {
case 3:
return dollar.bill.op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dollar.bill.op.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35756.length)].join('')));

}
});

dollar.bill.op.cljs$core$IFn$_invoke$arity$3 = (function (f,f2,a){
if(cljs.core.truth_(dollar.bill.el_QMARK_.call(null,a))){
return f2.call(null,a);
} else {
if(cljs.core.seq_QMARK_.call(null,a)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__35747_SHARP_){
return f.call(null,p1__35747_SHARP_);
}),a));
} else {
if(cljs.core.vector_QMARK_.call(null,a)){
return cljs.core.vec.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__35748_SHARP_){
return f.call(null,p1__35748_SHARP_);
}),a)));
} else {
if(cljs.core.truth_(dollar.bill.ar_QMARK_.call(null,a))){
return a.map((function (p1__35749_SHARP_){
return f.call(null,p1__35749_SHARP_);
}));
} else {
return null;
}
}
}
}
});

dollar.bill.op.cljs$core$IFn$_invoke$arity$4 = (function (f,f2,a,b){
if(cljs.core.truth_(dollar.bill.el_QMARK_.call(null,a))){
if(cljs.core.seq_QMARK_.call(null,b)){
return cljs.core.map.call(null,(function (p1__35750_SHARP_){
return f2.call(null,a,p1__35750_SHARP_);
}),b);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return cljs.core.mapv.call(null,(function (p1__35751_SHARP_){
return f2.call(null,a,p1__35751_SHARP_);
}),b);
} else {
if(cljs.core.truth_(dollar.bill.ar_QMARK_.call(null,b))){
return [].concat.apply([],b.map((function (p1__35752_SHARP_){
return f2.call(null,a,p1__35752_SHARP_);
})));
} else {
return f2.call(null,a,b);

}
}
}
} else {
if(cljs.core.seq_QMARK_.call(null,a)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__35753_SHARP_){
return f.call(null,p1__35753_SHARP_,b);
}),a));
} else {
if(cljs.core.vector_QMARK_.call(null,a)){
return cljs.core.mapv.call(null,cljs.core.flatten.call(null,(function (p1__35754_SHARP_){
return f.call(null,p1__35754_SHARP_,b);
})),a);
} else {
if(cljs.core.truth_(dollar.bill.ar_QMARK_.call(null,a))){
return [].concat.apply([],a.map((function (p1__35755_SHARP_){
return f2.call(null,p1__35755_SHARP_,b);
})));
} else {
return null;
}
}
}
}
});

dollar.bill.op.cljs$lang$maxFixedArity = 4;

dollar.bill.html = (function dollar$bill$html(var_args){
var args35766 = [];
var len__27051__auto___35769 = arguments.length;
var i__27052__auto___35770 = (0);
while(true){
if((i__27052__auto___35770 < len__27051__auto___35769)){
args35766.push((arguments[i__27052__auto___35770]));

var G__35771 = (i__27052__auto___35770 + (1));
i__27052__auto___35770 = G__35771;
continue;
} else {
}
break;
}

var G__35768 = args35766.length;
switch (G__35768) {
case 1:
return dollar.bill.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dollar.bill.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35766.length)].join('')));

}
});

dollar.bill.html.cljs$core$IFn$_invoke$arity$1 = (function (a){
return dollar.bill.op.call(null,dollar.bill.html,(function (p1__35763_SHARP_){
return p1__35763_SHARP_.innerHTML;
}),a);
});

dollar.bill.html.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return dollar.bill.op.call(null,dollar.bill.html,(function (p1__35764_SHARP_,p2__35765_SHARP_){
if(cljs.core.truth_(dollar.bill.el_QMARK_.call(null,p1__35764_SHARP_))){
return p1__35764_SHARP_.innerHTML = p2__35765_SHARP_;
} else {
return null;
}
}),a,b);
});

dollar.bill.html.cljs$lang$maxFixedArity = 2;

dollar.bill.contents = (function dollar$bill$contents(a){
return dollar.bill.op.call(null,dollar$bill$contents,(function (p1__35773_SHARP_){
return p1__35773_SHARP_.contentDocument;
}),a);
});
dollar.bill.find = (function dollar$bill$find(a,b){
return dollar.bill.op.call(null,dollar.bill.contents,(function (p1__35774_SHARP_,p2__35775_SHARP_){
if(cljs.core.truth_(p1__35774_SHARP_.querySelectorAll)){
return dollar.bill.as_array.call(null,p1__35774_SHARP_.querySelectorAll([cljs.core.str(p2__35775_SHARP_)].join('')));
} else {
return null;
}
}),(cljs.core.truth_(dollar.bill.doc_QMARK_.call(null,a))?[a]:a),b);
});
dollar.bill.copy = (function dollar$bill$copy(a){
return cljs.core.first.call(null,dollar.bill.op.call(null,dollar$bill$copy,(function (){
return dollar.bill.$.call(null,a.outerHTML);
}),a));
});
dollar.bill.parent = (function dollar$bill$parent(a){
return dollar.bill.op.call(null,dollar$bill$parent,(function (p1__35776_SHARP_){
return p1__35776_SHARP_.parentElement;
}),a);
});
dollar.bill.append = (function dollar$bill$append(a,b){
return dollar.bill.op.call(null,dollar$bill$append,(function (p1__35777_SHARP_,p2__35778_SHARP_){
return p1__35777_SHARP_.appendChild(dollar.bill.copy.call(null,p2__35778_SHARP_));
}),a,b);
});
dollar.bill.before = (function dollar$bill$before(a,b){
return dollar.bill.op.call(null,dollar$bill$before,(function (p1__35779_SHARP_,p2__35780_SHARP_){
return dollar.bill.parent.call(null,p1__35779_SHARP_).insertBefore(dollar.bill.copy.call(null,p2__35780_SHARP_),p1__35779_SHARP_);
}),a,b);
});
dollar.bill.nxt = (function dollar$bill$nxt(a){
return dollar.bill.op.call(null,dollar$bill$nxt,(function (p1__35781_SHARP_){
return p1__35781_SHARP_.nextSibling;
}),a);
});
dollar.bill.prv = (function dollar$bill$prv(a){
return dollar.bill.op.call(null,dollar$bill$prv,(function (p1__35782_SHARP_){
return p1__35782_SHARP_.previousSibling;
}),a);
});
dollar.bill.after = (function dollar$bill$after(a,b){
return dollar.bill.op.call(null,dollar$bill$after,(function (p1__35783_SHARP_,p2__35784_SHARP_){
var temp__4655__auto__ = dollar.bill.nxt.call(null,p1__35783_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return dollar.bill.before.call(null,n,p2__35784_SHARP_);
} else {
return dollar.bill.append.call(null,dollar.bill.parent.call(null,p1__35783_SHARP_),p2__35784_SHARP_);
}
}),a,b);
});
dollar.bill.prepend = (function dollar$bill$prepend(a,b){
return dollar.bill.op.call(null,dollar$bill$prepend,(function (p1__35785_SHARP_,p2__35786_SHARP_){
return p1__35785_SHARP_.insertBefore(dollar.bill.copy.call(null,p2__35786_SHARP_),p1__35785_SHARP_.firstChild);
}),a,b);
});
dollar.bill.detach = (function dollar$bill$detach(a){
return dollar.bill.op.call(null,dollar$bill$detach,(function (p1__35787_SHARP_){
return dollar.bill.parent.call(null,p1__35787_SHARP_).removeChild(p1__35787_SHARP_);
}),a);
});
dollar.bill.wrap = (function dollar$bill$wrap(a,b){
return dollar.bill.op.call(null,dollar$bill$wrap,(function (p1__35788_SHARP_,p2__35789_SHARP_){
return dollar.bill.parent.call(null,p1__35788_SHARP_).replaceChild(dollar.bill.parent.call(null,dollar.bill.append.call(null,dollar.bill.copy.call(null,p2__35789_SHARP_),p1__35788_SHARP_)),p1__35788_SHARP_);
}),a,b);
});

//# sourceMappingURL=bill.js.map?rel=1518788552899