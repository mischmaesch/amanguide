goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_60960 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_60960(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_60961 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_60961(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__60396 = coll;
var G__60397 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__60396,G__60397) : shadow.dom.lazy_native_coll_seq.call(null,G__60396,G__60397));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__60404 = arguments.length;
switch (G__60404) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__60411 = arguments.length;
switch (G__60411) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__60417 = arguments.length;
switch (G__60417) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__60423 = arguments.length;
switch (G__60423) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__60433 = arguments.length;
switch (G__60433) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__60444 = arguments.length;
switch (G__60444) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e60452){if((e60452 instanceof Object)){
var e = e60452;
return console.log("didnt support attachEvent",el,e);
} else {
throw e60452;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__60461 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__60462 = null;
var count__60463 = (0);
var i__60464 = (0);
while(true){
if((i__60464 < count__60463)){
var el = chunk__60462.cljs$core$IIndexed$_nth$arity$2(null,i__60464);
var handler_60968__$1 = ((function (seq__60461,chunk__60462,count__60463,i__60464,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60461,chunk__60462,count__60463,i__60464,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60968__$1);


var G__60969 = seq__60461;
var G__60970 = chunk__60462;
var G__60971 = count__60463;
var G__60972 = (i__60464 + (1));
seq__60461 = G__60969;
chunk__60462 = G__60970;
count__60463 = G__60971;
i__60464 = G__60972;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60461);
if(temp__5735__auto__){
var seq__60461__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60461__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60461__$1);
var G__60973 = cljs.core.chunk_rest(seq__60461__$1);
var G__60974 = c__4556__auto__;
var G__60975 = cljs.core.count(c__4556__auto__);
var G__60976 = (0);
seq__60461 = G__60973;
chunk__60462 = G__60974;
count__60463 = G__60975;
i__60464 = G__60976;
continue;
} else {
var el = cljs.core.first(seq__60461__$1);
var handler_60977__$1 = ((function (seq__60461,chunk__60462,count__60463,i__60464,el,seq__60461__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60461,chunk__60462,count__60463,i__60464,el,seq__60461__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60977__$1);


var G__60978 = cljs.core.next(seq__60461__$1);
var G__60979 = null;
var G__60980 = (0);
var G__60981 = (0);
seq__60461 = G__60978;
chunk__60462 = G__60979;
count__60463 = G__60980;
i__60464 = G__60981;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__60478 = arguments.length;
switch (G__60478) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__60482 = cljs.core.seq(events);
var chunk__60483 = null;
var count__60484 = (0);
var i__60485 = (0);
while(true){
if((i__60485 < count__60484)){
var vec__60494 = chunk__60483.cljs$core$IIndexed$_nth$arity$2(null,i__60485);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60494,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60983 = seq__60482;
var G__60984 = chunk__60483;
var G__60985 = count__60484;
var G__60986 = (i__60485 + (1));
seq__60482 = G__60983;
chunk__60483 = G__60984;
count__60484 = G__60985;
i__60485 = G__60986;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60482);
if(temp__5735__auto__){
var seq__60482__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60482__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60482__$1);
var G__60987 = cljs.core.chunk_rest(seq__60482__$1);
var G__60988 = c__4556__auto__;
var G__60989 = cljs.core.count(c__4556__auto__);
var G__60990 = (0);
seq__60482 = G__60987;
chunk__60483 = G__60988;
count__60484 = G__60989;
i__60485 = G__60990;
continue;
} else {
var vec__60500 = cljs.core.first(seq__60482__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60500,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60991 = cljs.core.next(seq__60482__$1);
var G__60992 = null;
var G__60993 = (0);
var G__60994 = (0);
seq__60482 = G__60991;
chunk__60483 = G__60992;
count__60484 = G__60993;
i__60485 = G__60994;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__60506 = cljs.core.seq(styles);
var chunk__60507 = null;
var count__60508 = (0);
var i__60509 = (0);
while(true){
if((i__60509 < count__60508)){
var vec__60516 = chunk__60507.cljs$core$IIndexed$_nth$arity$2(null,i__60509);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60516,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60995 = seq__60506;
var G__60996 = chunk__60507;
var G__60997 = count__60508;
var G__60998 = (i__60509 + (1));
seq__60506 = G__60995;
chunk__60507 = G__60996;
count__60508 = G__60997;
i__60509 = G__60998;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60506);
if(temp__5735__auto__){
var seq__60506__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60506__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60506__$1);
var G__60999 = cljs.core.chunk_rest(seq__60506__$1);
var G__61000 = c__4556__auto__;
var G__61001 = cljs.core.count(c__4556__auto__);
var G__61002 = (0);
seq__60506 = G__60999;
chunk__60507 = G__61000;
count__60508 = G__61001;
i__60509 = G__61002;
continue;
} else {
var vec__60519 = cljs.core.first(seq__60506__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60519,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60519,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61003 = cljs.core.next(seq__60506__$1);
var G__61004 = null;
var G__61005 = (0);
var G__61006 = (0);
seq__60506 = G__61003;
chunk__60507 = G__61004;
count__60508 = G__61005;
i__60509 = G__61006;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__60522_61007 = key;
var G__60522_61008__$1 = (((G__60522_61007 instanceof cljs.core.Keyword))?G__60522_61007.fqn:null);
switch (G__60522_61008__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_61010 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_61010,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_61010,"aria-");
}
})())){
el.setAttribute(ks_61010,value);
} else {
(el[ks_61010] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__60543){
var map__60544 = p__60543;
var map__60544__$1 = (((((!((map__60544 == null))))?(((((map__60544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60544):map__60544);
var props = map__60544__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60544__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__60549 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60549,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60549,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60549,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__60553 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__60553,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__60553;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__60558 = arguments.length;
switch (G__60558) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__60568){
var vec__60569 = p__60568;
var seq__60570 = cljs.core.seq(vec__60569);
var first__60571 = cljs.core.first(seq__60570);
var seq__60570__$1 = cljs.core.next(seq__60570);
var nn = first__60571;
var first__60571__$1 = cljs.core.first(seq__60570__$1);
var seq__60570__$2 = cljs.core.next(seq__60570__$1);
var np = first__60571__$1;
var nc = seq__60570__$2;
var node = vec__60569;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60575 = nn;
var G__60576 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60575,G__60576) : create_fn.call(null,G__60575,G__60576));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60578 = nn;
var G__60579 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60578,G__60579) : create_fn.call(null,G__60578,G__60579));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__60583 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60583,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60583,(1),null);
var seq__60586_61020 = cljs.core.seq(node_children);
var chunk__60587_61021 = null;
var count__60588_61022 = (0);
var i__60589_61023 = (0);
while(true){
if((i__60589_61023 < count__60588_61022)){
var child_struct_61024 = chunk__60587_61021.cljs$core$IIndexed$_nth$arity$2(null,i__60589_61023);
var children_61025 = shadow.dom.dom_node(child_struct_61024);
if(cljs.core.seq_QMARK_(children_61025)){
var seq__60615_61026 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61025));
var chunk__60617_61027 = null;
var count__60618_61028 = (0);
var i__60619_61029 = (0);
while(true){
if((i__60619_61029 < count__60618_61028)){
var child_61032 = chunk__60617_61027.cljs$core$IIndexed$_nth$arity$2(null,i__60619_61029);
if(cljs.core.truth_(child_61032)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61032);


var G__61033 = seq__60615_61026;
var G__61034 = chunk__60617_61027;
var G__61035 = count__60618_61028;
var G__61036 = (i__60619_61029 + (1));
seq__60615_61026 = G__61033;
chunk__60617_61027 = G__61034;
count__60618_61028 = G__61035;
i__60619_61029 = G__61036;
continue;
} else {
var G__61037 = seq__60615_61026;
var G__61038 = chunk__60617_61027;
var G__61039 = count__60618_61028;
var G__61040 = (i__60619_61029 + (1));
seq__60615_61026 = G__61037;
chunk__60617_61027 = G__61038;
count__60618_61028 = G__61039;
i__60619_61029 = G__61040;
continue;
}
} else {
var temp__5735__auto___61041 = cljs.core.seq(seq__60615_61026);
if(temp__5735__auto___61041){
var seq__60615_61042__$1 = temp__5735__auto___61041;
if(cljs.core.chunked_seq_QMARK_(seq__60615_61042__$1)){
var c__4556__auto___61043 = cljs.core.chunk_first(seq__60615_61042__$1);
var G__61044 = cljs.core.chunk_rest(seq__60615_61042__$1);
var G__61045 = c__4556__auto___61043;
var G__61046 = cljs.core.count(c__4556__auto___61043);
var G__61047 = (0);
seq__60615_61026 = G__61044;
chunk__60617_61027 = G__61045;
count__60618_61028 = G__61046;
i__60619_61029 = G__61047;
continue;
} else {
var child_61049 = cljs.core.first(seq__60615_61042__$1);
if(cljs.core.truth_(child_61049)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61049);


var G__61051 = cljs.core.next(seq__60615_61042__$1);
var G__61052 = null;
var G__61053 = (0);
var G__61054 = (0);
seq__60615_61026 = G__61051;
chunk__60617_61027 = G__61052;
count__60618_61028 = G__61053;
i__60619_61029 = G__61054;
continue;
} else {
var G__61056 = cljs.core.next(seq__60615_61042__$1);
var G__61057 = null;
var G__61058 = (0);
var G__61059 = (0);
seq__60615_61026 = G__61056;
chunk__60617_61027 = G__61057;
count__60618_61028 = G__61058;
i__60619_61029 = G__61059;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61025);
}


var G__61061 = seq__60586_61020;
var G__61062 = chunk__60587_61021;
var G__61063 = count__60588_61022;
var G__61064 = (i__60589_61023 + (1));
seq__60586_61020 = G__61061;
chunk__60587_61021 = G__61062;
count__60588_61022 = G__61063;
i__60589_61023 = G__61064;
continue;
} else {
var temp__5735__auto___61065 = cljs.core.seq(seq__60586_61020);
if(temp__5735__auto___61065){
var seq__60586_61066__$1 = temp__5735__auto___61065;
if(cljs.core.chunked_seq_QMARK_(seq__60586_61066__$1)){
var c__4556__auto___61067 = cljs.core.chunk_first(seq__60586_61066__$1);
var G__61068 = cljs.core.chunk_rest(seq__60586_61066__$1);
var G__61069 = c__4556__auto___61067;
var G__61070 = cljs.core.count(c__4556__auto___61067);
var G__61071 = (0);
seq__60586_61020 = G__61068;
chunk__60587_61021 = G__61069;
count__60588_61022 = G__61070;
i__60589_61023 = G__61071;
continue;
} else {
var child_struct_61080 = cljs.core.first(seq__60586_61066__$1);
var children_61081 = shadow.dom.dom_node(child_struct_61080);
if(cljs.core.seq_QMARK_(children_61081)){
var seq__60621_61084 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61081));
var chunk__60623_61085 = null;
var count__60624_61086 = (0);
var i__60625_61087 = (0);
while(true){
if((i__60625_61087 < count__60624_61086)){
var child_61090 = chunk__60623_61085.cljs$core$IIndexed$_nth$arity$2(null,i__60625_61087);
if(cljs.core.truth_(child_61090)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61090);


var G__61091 = seq__60621_61084;
var G__61092 = chunk__60623_61085;
var G__61093 = count__60624_61086;
var G__61094 = (i__60625_61087 + (1));
seq__60621_61084 = G__61091;
chunk__60623_61085 = G__61092;
count__60624_61086 = G__61093;
i__60625_61087 = G__61094;
continue;
} else {
var G__61096 = seq__60621_61084;
var G__61097 = chunk__60623_61085;
var G__61098 = count__60624_61086;
var G__61099 = (i__60625_61087 + (1));
seq__60621_61084 = G__61096;
chunk__60623_61085 = G__61097;
count__60624_61086 = G__61098;
i__60625_61087 = G__61099;
continue;
}
} else {
var temp__5735__auto___61100__$1 = cljs.core.seq(seq__60621_61084);
if(temp__5735__auto___61100__$1){
var seq__60621_61101__$1 = temp__5735__auto___61100__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60621_61101__$1)){
var c__4556__auto___61103 = cljs.core.chunk_first(seq__60621_61101__$1);
var G__61104 = cljs.core.chunk_rest(seq__60621_61101__$1);
var G__61105 = c__4556__auto___61103;
var G__61106 = cljs.core.count(c__4556__auto___61103);
var G__61107 = (0);
seq__60621_61084 = G__61104;
chunk__60623_61085 = G__61105;
count__60624_61086 = G__61106;
i__60625_61087 = G__61107;
continue;
} else {
var child_61111 = cljs.core.first(seq__60621_61101__$1);
if(cljs.core.truth_(child_61111)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61111);


var G__61115 = cljs.core.next(seq__60621_61101__$1);
var G__61116 = null;
var G__61117 = (0);
var G__61118 = (0);
seq__60621_61084 = G__61115;
chunk__60623_61085 = G__61116;
count__60624_61086 = G__61117;
i__60625_61087 = G__61118;
continue;
} else {
var G__61122 = cljs.core.next(seq__60621_61101__$1);
var G__61123 = null;
var G__61124 = (0);
var G__61125 = (0);
seq__60621_61084 = G__61122;
chunk__60623_61085 = G__61123;
count__60624_61086 = G__61124;
i__60625_61087 = G__61125;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61081);
}


var G__61126 = cljs.core.next(seq__60586_61066__$1);
var G__61127 = null;
var G__61128 = (0);
var G__61129 = (0);
seq__60586_61020 = G__61126;
chunk__60587_61021 = G__61127;
count__60588_61022 = G__61128;
i__60589_61023 = G__61129;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__60650 = cljs.core.seq(node);
var chunk__60651 = null;
var count__60652 = (0);
var i__60653 = (0);
while(true){
if((i__60653 < count__60652)){
var n = chunk__60651.cljs$core$IIndexed$_nth$arity$2(null,i__60653);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61137 = seq__60650;
var G__61138 = chunk__60651;
var G__61139 = count__60652;
var G__61140 = (i__60653 + (1));
seq__60650 = G__61137;
chunk__60651 = G__61138;
count__60652 = G__61139;
i__60653 = G__61140;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60650);
if(temp__5735__auto__){
var seq__60650__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60650__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60650__$1);
var G__61143 = cljs.core.chunk_rest(seq__60650__$1);
var G__61144 = c__4556__auto__;
var G__61145 = cljs.core.count(c__4556__auto__);
var G__61146 = (0);
seq__60650 = G__61143;
chunk__60651 = G__61144;
count__60652 = G__61145;
i__60653 = G__61146;
continue;
} else {
var n = cljs.core.first(seq__60650__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61147 = cljs.core.next(seq__60650__$1);
var G__61148 = null;
var G__61149 = (0);
var G__61150 = (0);
seq__60650 = G__61147;
chunk__60651 = G__61148;
count__60652 = G__61149;
i__60653 = G__61150;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__60662 = arguments.length;
switch (G__60662) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__60668 = arguments.length;
switch (G__60668) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__60677 = arguments.length;
switch (G__60677) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61164 = arguments.length;
var i__4737__auto___61165 = (0);
while(true){
if((i__4737__auto___61165 < len__4736__auto___61164)){
args__4742__auto__.push((arguments[i__4737__auto___61165]));

var G__61166 = (i__4737__auto___61165 + (1));
i__4737__auto___61165 = G__61166;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__60696_61169 = cljs.core.seq(nodes);
var chunk__60697_61170 = null;
var count__60698_61171 = (0);
var i__60699_61172 = (0);
while(true){
if((i__60699_61172 < count__60698_61171)){
var node_61173 = chunk__60697_61170.cljs$core$IIndexed$_nth$arity$2(null,i__60699_61172);
fragment.appendChild(shadow.dom._to_dom(node_61173));


var G__61176 = seq__60696_61169;
var G__61177 = chunk__60697_61170;
var G__61178 = count__60698_61171;
var G__61179 = (i__60699_61172 + (1));
seq__60696_61169 = G__61176;
chunk__60697_61170 = G__61177;
count__60698_61171 = G__61178;
i__60699_61172 = G__61179;
continue;
} else {
var temp__5735__auto___61180 = cljs.core.seq(seq__60696_61169);
if(temp__5735__auto___61180){
var seq__60696_61181__$1 = temp__5735__auto___61180;
if(cljs.core.chunked_seq_QMARK_(seq__60696_61181__$1)){
var c__4556__auto___61182 = cljs.core.chunk_first(seq__60696_61181__$1);
var G__61184 = cljs.core.chunk_rest(seq__60696_61181__$1);
var G__61185 = c__4556__auto___61182;
var G__61186 = cljs.core.count(c__4556__auto___61182);
var G__61187 = (0);
seq__60696_61169 = G__61184;
chunk__60697_61170 = G__61185;
count__60698_61171 = G__61186;
i__60699_61172 = G__61187;
continue;
} else {
var node_61188 = cljs.core.first(seq__60696_61181__$1);
fragment.appendChild(shadow.dom._to_dom(node_61188));


var G__61191 = cljs.core.next(seq__60696_61181__$1);
var G__61192 = null;
var G__61193 = (0);
var G__61194 = (0);
seq__60696_61169 = G__61191;
chunk__60697_61170 = G__61192;
count__60698_61171 = G__61193;
i__60699_61172 = G__61194;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq60691){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60691));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__60709_61198 = cljs.core.seq(scripts);
var chunk__60710_61199 = null;
var count__60711_61200 = (0);
var i__60712_61201 = (0);
while(true){
if((i__60712_61201 < count__60711_61200)){
var vec__60724_61202 = chunk__60710_61199.cljs$core$IIndexed$_nth$arity$2(null,i__60712_61201);
var script_tag_61203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60724_61202,(0),null);
var script_body_61204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60724_61202,(1),null);
eval(script_body_61204);


var G__61205 = seq__60709_61198;
var G__61206 = chunk__60710_61199;
var G__61207 = count__60711_61200;
var G__61208 = (i__60712_61201 + (1));
seq__60709_61198 = G__61205;
chunk__60710_61199 = G__61206;
count__60711_61200 = G__61207;
i__60712_61201 = G__61208;
continue;
} else {
var temp__5735__auto___61209 = cljs.core.seq(seq__60709_61198);
if(temp__5735__auto___61209){
var seq__60709_61210__$1 = temp__5735__auto___61209;
if(cljs.core.chunked_seq_QMARK_(seq__60709_61210__$1)){
var c__4556__auto___61211 = cljs.core.chunk_first(seq__60709_61210__$1);
var G__61212 = cljs.core.chunk_rest(seq__60709_61210__$1);
var G__61213 = c__4556__auto___61211;
var G__61214 = cljs.core.count(c__4556__auto___61211);
var G__61215 = (0);
seq__60709_61198 = G__61212;
chunk__60710_61199 = G__61213;
count__60711_61200 = G__61214;
i__60712_61201 = G__61215;
continue;
} else {
var vec__60728_61216 = cljs.core.first(seq__60709_61210__$1);
var script_tag_61217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60728_61216,(0),null);
var script_body_61218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60728_61216,(1),null);
eval(script_body_61218);


var G__61220 = cljs.core.next(seq__60709_61210__$1);
var G__61221 = null;
var G__61222 = (0);
var G__61223 = (0);
seq__60709_61198 = G__61220;
chunk__60710_61199 = G__61221;
count__60711_61200 = G__61222;
i__60712_61201 = G__61223;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__60732){
var vec__60733 = p__60732;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60733,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60733,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__60746 = arguments.length;
switch (G__60746) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__60751 = cljs.core.seq(style_keys);
var chunk__60752 = null;
var count__60753 = (0);
var i__60754 = (0);
while(true){
if((i__60754 < count__60753)){
var it = chunk__60752.cljs$core$IIndexed$_nth$arity$2(null,i__60754);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61240 = seq__60751;
var G__61241 = chunk__60752;
var G__61242 = count__60753;
var G__61243 = (i__60754 + (1));
seq__60751 = G__61240;
chunk__60752 = G__61241;
count__60753 = G__61242;
i__60754 = G__61243;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60751);
if(temp__5735__auto__){
var seq__60751__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60751__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60751__$1);
var G__61245 = cljs.core.chunk_rest(seq__60751__$1);
var G__61246 = c__4556__auto__;
var G__61247 = cljs.core.count(c__4556__auto__);
var G__61248 = (0);
seq__60751 = G__61245;
chunk__60752 = G__61246;
count__60753 = G__61247;
i__60754 = G__61248;
continue;
} else {
var it = cljs.core.first(seq__60751__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61252 = cljs.core.next(seq__60751__$1);
var G__61253 = null;
var G__61254 = (0);
var G__61255 = (0);
seq__60751 = G__61252;
chunk__60752 = G__61253;
count__60753 = G__61254;
i__60754 = G__61255;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60756,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60760 = k60756;
var G__60760__$1 = (((G__60760 instanceof cljs.core.Keyword))?G__60760.fqn:null);
switch (G__60760__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60756,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60761){
var vec__60762 = p__60761;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60762,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60762,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60755){
var self__ = this;
var G__60755__$1 = this;
return (new cljs.core.RecordIter((0),G__60755__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60757,other60758){
var self__ = this;
var this60757__$1 = this;
return (((!((other60758 == null)))) && ((this60757__$1.constructor === other60758.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60757__$1.x,other60758.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60757__$1.y,other60758.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60757__$1.__extmap,other60758.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60755){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60781 = cljs.core.keyword_identical_QMARK_;
var expr__60782 = k__4388__auto__;
if(cljs.core.truth_((pred__60781.cljs$core$IFn$_invoke$arity$2 ? pred__60781.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__60782) : pred__60781.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__60782)))){
return (new shadow.dom.Coordinate(G__60755,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60781.cljs$core$IFn$_invoke$arity$2 ? pred__60781.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__60782) : pred__60781.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__60782)))){
return (new shadow.dom.Coordinate(self__.x,G__60755,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60755),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60755){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__60755,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__60759){
var extmap__4419__auto__ = (function (){var G__60791 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60759,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__60759)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60791);
} else {
return G__60791;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__60759),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__60759),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60800,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60812 = k60800;
var G__60812__$1 = (((G__60812 instanceof cljs.core.Keyword))?G__60812.fqn:null);
switch (G__60812__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60800,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60815){
var vec__60816 = p__60815;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60816,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60816,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60799){
var self__ = this;
var G__60799__$1 = this;
return (new cljs.core.RecordIter((0),G__60799__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60801,other60802){
var self__ = this;
var this60801__$1 = this;
return (((!((other60802 == null)))) && ((this60801__$1.constructor === other60802.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60801__$1.w,other60802.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60801__$1.h,other60802.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60801__$1.__extmap,other60802.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60799){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60832 = cljs.core.keyword_identical_QMARK_;
var expr__60833 = k__4388__auto__;
if(cljs.core.truth_((pred__60832.cljs$core$IFn$_invoke$arity$2 ? pred__60832.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__60833) : pred__60832.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__60833)))){
return (new shadow.dom.Size(G__60799,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60832.cljs$core$IFn$_invoke$arity$2 ? pred__60832.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60833) : pred__60832.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60833)))){
return (new shadow.dom.Size(self__.w,G__60799,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60799),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60799){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__60799,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__60805){
var extmap__4419__auto__ = (function (){var G__60845 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60805,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__60805)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60845);
} else {
return G__60845;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__60805),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__60805),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__61310 = (i + (1));
var G__61311 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__61310;
ret = G__61311;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60867){
var vec__60869 = p__60867;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60869,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60869,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__60876 = arguments.length;
switch (G__60876) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__61315 = ps;
var G__61316 = (i + (1));
el__$1 = G__61315;
i = G__61316;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__60891 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60891,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60891,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60891,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__60894_61325 = cljs.core.seq(props);
var chunk__60895_61326 = null;
var count__60896_61327 = (0);
var i__60897_61328 = (0);
while(true){
if((i__60897_61328 < count__60896_61327)){
var vec__60904_61330 = chunk__60895_61326.cljs$core$IIndexed$_nth$arity$2(null,i__60897_61328);
var k_61331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60904_61330,(0),null);
var v_61332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60904_61330,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_61331);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61331),v_61332);


var G__61334 = seq__60894_61325;
var G__61335 = chunk__60895_61326;
var G__61336 = count__60896_61327;
var G__61337 = (i__60897_61328 + (1));
seq__60894_61325 = G__61334;
chunk__60895_61326 = G__61335;
count__60896_61327 = G__61336;
i__60897_61328 = G__61337;
continue;
} else {
var temp__5735__auto___61338 = cljs.core.seq(seq__60894_61325);
if(temp__5735__auto___61338){
var seq__60894_61345__$1 = temp__5735__auto___61338;
if(cljs.core.chunked_seq_QMARK_(seq__60894_61345__$1)){
var c__4556__auto___61346 = cljs.core.chunk_first(seq__60894_61345__$1);
var G__61347 = cljs.core.chunk_rest(seq__60894_61345__$1);
var G__61348 = c__4556__auto___61346;
var G__61349 = cljs.core.count(c__4556__auto___61346);
var G__61350 = (0);
seq__60894_61325 = G__61347;
chunk__60895_61326 = G__61348;
count__60896_61327 = G__61349;
i__60897_61328 = G__61350;
continue;
} else {
var vec__60907_61351 = cljs.core.first(seq__60894_61345__$1);
var k_61352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60907_61351,(0),null);
var v_61353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60907_61351,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_61352);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61352),v_61353);


var G__61355 = cljs.core.next(seq__60894_61345__$1);
var G__61356 = null;
var G__61357 = (0);
var G__61358 = (0);
seq__60894_61325 = G__61355;
chunk__60895_61326 = G__61356;
count__60896_61327 = G__61357;
i__60897_61328 = G__61358;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__60911 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60911,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60911,(1),null);
var seq__60914_61360 = cljs.core.seq(node_children);
var chunk__60916_61361 = null;
var count__60917_61362 = (0);
var i__60918_61363 = (0);
while(true){
if((i__60918_61363 < count__60917_61362)){
var child_struct_61364 = chunk__60916_61361.cljs$core$IIndexed$_nth$arity$2(null,i__60918_61363);
if((!((child_struct_61364 == null)))){
if(typeof child_struct_61364 === 'string'){
var text_61368 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61368),child_struct_61364].join(''));
} else {
var children_61369 = shadow.dom.svg_node(child_struct_61364);
if(cljs.core.seq_QMARK_(children_61369)){
var seq__60932_61371 = cljs.core.seq(children_61369);
var chunk__60934_61372 = null;
var count__60935_61373 = (0);
var i__60936_61374 = (0);
while(true){
if((i__60936_61374 < count__60935_61373)){
var child_61382 = chunk__60934_61372.cljs$core$IIndexed$_nth$arity$2(null,i__60936_61374);
if(cljs.core.truth_(child_61382)){
node.appendChild(child_61382);


var G__61383 = seq__60932_61371;
var G__61384 = chunk__60934_61372;
var G__61385 = count__60935_61373;
var G__61386 = (i__60936_61374 + (1));
seq__60932_61371 = G__61383;
chunk__60934_61372 = G__61384;
count__60935_61373 = G__61385;
i__60936_61374 = G__61386;
continue;
} else {
var G__61387 = seq__60932_61371;
var G__61388 = chunk__60934_61372;
var G__61389 = count__60935_61373;
var G__61390 = (i__60936_61374 + (1));
seq__60932_61371 = G__61387;
chunk__60934_61372 = G__61388;
count__60935_61373 = G__61389;
i__60936_61374 = G__61390;
continue;
}
} else {
var temp__5735__auto___61391 = cljs.core.seq(seq__60932_61371);
if(temp__5735__auto___61391){
var seq__60932_61392__$1 = temp__5735__auto___61391;
if(cljs.core.chunked_seq_QMARK_(seq__60932_61392__$1)){
var c__4556__auto___61393 = cljs.core.chunk_first(seq__60932_61392__$1);
var G__61394 = cljs.core.chunk_rest(seq__60932_61392__$1);
var G__61395 = c__4556__auto___61393;
var G__61396 = cljs.core.count(c__4556__auto___61393);
var G__61397 = (0);
seq__60932_61371 = G__61394;
chunk__60934_61372 = G__61395;
count__60935_61373 = G__61396;
i__60936_61374 = G__61397;
continue;
} else {
var child_61398 = cljs.core.first(seq__60932_61392__$1);
if(cljs.core.truth_(child_61398)){
node.appendChild(child_61398);


var G__61399 = cljs.core.next(seq__60932_61392__$1);
var G__61400 = null;
var G__61401 = (0);
var G__61402 = (0);
seq__60932_61371 = G__61399;
chunk__60934_61372 = G__61400;
count__60935_61373 = G__61401;
i__60936_61374 = G__61402;
continue;
} else {
var G__61403 = cljs.core.next(seq__60932_61392__$1);
var G__61404 = null;
var G__61405 = (0);
var G__61406 = (0);
seq__60932_61371 = G__61403;
chunk__60934_61372 = G__61404;
count__60935_61373 = G__61405;
i__60936_61374 = G__61406;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61369);
}
}


var G__61407 = seq__60914_61360;
var G__61408 = chunk__60916_61361;
var G__61409 = count__60917_61362;
var G__61410 = (i__60918_61363 + (1));
seq__60914_61360 = G__61407;
chunk__60916_61361 = G__61408;
count__60917_61362 = G__61409;
i__60918_61363 = G__61410;
continue;
} else {
var G__61411 = seq__60914_61360;
var G__61412 = chunk__60916_61361;
var G__61413 = count__60917_61362;
var G__61414 = (i__60918_61363 + (1));
seq__60914_61360 = G__61411;
chunk__60916_61361 = G__61412;
count__60917_61362 = G__61413;
i__60918_61363 = G__61414;
continue;
}
} else {
var temp__5735__auto___61415 = cljs.core.seq(seq__60914_61360);
if(temp__5735__auto___61415){
var seq__60914_61416__$1 = temp__5735__auto___61415;
if(cljs.core.chunked_seq_QMARK_(seq__60914_61416__$1)){
var c__4556__auto___61417 = cljs.core.chunk_first(seq__60914_61416__$1);
var G__61418 = cljs.core.chunk_rest(seq__60914_61416__$1);
var G__61419 = c__4556__auto___61417;
var G__61420 = cljs.core.count(c__4556__auto___61417);
var G__61421 = (0);
seq__60914_61360 = G__61418;
chunk__60916_61361 = G__61419;
count__60917_61362 = G__61420;
i__60918_61363 = G__61421;
continue;
} else {
var child_struct_61422 = cljs.core.first(seq__60914_61416__$1);
if((!((child_struct_61422 == null)))){
if(typeof child_struct_61422 === 'string'){
var text_61423 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61423),child_struct_61422].join(''));
} else {
var children_61424 = shadow.dom.svg_node(child_struct_61422);
if(cljs.core.seq_QMARK_(children_61424)){
var seq__60938_61425 = cljs.core.seq(children_61424);
var chunk__60940_61426 = null;
var count__60941_61427 = (0);
var i__60942_61428 = (0);
while(true){
if((i__60942_61428 < count__60941_61427)){
var child_61429 = chunk__60940_61426.cljs$core$IIndexed$_nth$arity$2(null,i__60942_61428);
if(cljs.core.truth_(child_61429)){
node.appendChild(child_61429);


var G__61430 = seq__60938_61425;
var G__61431 = chunk__60940_61426;
var G__61432 = count__60941_61427;
var G__61433 = (i__60942_61428 + (1));
seq__60938_61425 = G__61430;
chunk__60940_61426 = G__61431;
count__60941_61427 = G__61432;
i__60942_61428 = G__61433;
continue;
} else {
var G__61434 = seq__60938_61425;
var G__61435 = chunk__60940_61426;
var G__61436 = count__60941_61427;
var G__61437 = (i__60942_61428 + (1));
seq__60938_61425 = G__61434;
chunk__60940_61426 = G__61435;
count__60941_61427 = G__61436;
i__60942_61428 = G__61437;
continue;
}
} else {
var temp__5735__auto___61438__$1 = cljs.core.seq(seq__60938_61425);
if(temp__5735__auto___61438__$1){
var seq__60938_61439__$1 = temp__5735__auto___61438__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60938_61439__$1)){
var c__4556__auto___61440 = cljs.core.chunk_first(seq__60938_61439__$1);
var G__61441 = cljs.core.chunk_rest(seq__60938_61439__$1);
var G__61442 = c__4556__auto___61440;
var G__61443 = cljs.core.count(c__4556__auto___61440);
var G__61444 = (0);
seq__60938_61425 = G__61441;
chunk__60940_61426 = G__61442;
count__60941_61427 = G__61443;
i__60942_61428 = G__61444;
continue;
} else {
var child_61447 = cljs.core.first(seq__60938_61439__$1);
if(cljs.core.truth_(child_61447)){
node.appendChild(child_61447);


var G__61448 = cljs.core.next(seq__60938_61439__$1);
var G__61449 = null;
var G__61450 = (0);
var G__61451 = (0);
seq__60938_61425 = G__61448;
chunk__60940_61426 = G__61449;
count__60941_61427 = G__61450;
i__60942_61428 = G__61451;
continue;
} else {
var G__61452 = cljs.core.next(seq__60938_61439__$1);
var G__61453 = null;
var G__61454 = (0);
var G__61455 = (0);
seq__60938_61425 = G__61452;
chunk__60940_61426 = G__61453;
count__60941_61427 = G__61454;
i__60942_61428 = G__61455;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61424);
}
}


var G__61456 = cljs.core.next(seq__60914_61416__$1);
var G__61457 = null;
var G__61458 = (0);
var G__61459 = (0);
seq__60914_61360 = G__61456;
chunk__60916_61361 = G__61457;
count__60917_61362 = G__61458;
i__60918_61363 = G__61459;
continue;
} else {
var G__61460 = cljs.core.next(seq__60914_61416__$1);
var G__61461 = null;
var G__61462 = (0);
var G__61463 = (0);
seq__60914_61360 = G__61460;
chunk__60916_61361 = G__61461;
count__60917_61362 = G__61462;
i__60918_61363 = G__61463;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61472 = arguments.length;
var i__4737__auto___61473 = (0);
while(true){
if((i__4737__auto___61473 < len__4736__auto___61472)){
args__4742__auto__.push((arguments[i__4737__auto___61473]));

var G__61474 = (i__4737__auto___61473 + (1));
i__4737__auto___61473 = G__61474;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq60944){
var G__60945 = cljs.core.first(seq60944);
var seq60944__$1 = cljs.core.next(seq60944);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60945,seq60944__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__60947 = arguments.length;
switch (G__60947) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__58489__auto___61484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_60952){
var state_val_60953 = (state_60952[(1)]);
if((state_val_60953 === (1))){
var state_60952__$1 = state_60952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60952__$1,(2),once_or_cleanup);
} else {
if((state_val_60953 === (2))){
var inst_60949 = (state_60952[(2)]);
var inst_60950 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_60952__$1 = (function (){var statearr_60954 = state_60952;
(statearr_60954[(7)] = inst_60949);

return statearr_60954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60952__$1,inst_60950);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__58393__auto__ = null;
var shadow$dom$state_machine__58393__auto____0 = (function (){
var statearr_60955 = [null,null,null,null,null,null,null,null];
(statearr_60955[(0)] = shadow$dom$state_machine__58393__auto__);

(statearr_60955[(1)] = (1));

return statearr_60955;
});
var shadow$dom$state_machine__58393__auto____1 = (function (state_60952){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_60952);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e60956){var ex__58396__auto__ = e60956;
var statearr_60957_61488 = state_60952;
(statearr_60957_61488[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_60952[(4)]))){
var statearr_60958_61489 = state_60952;
(statearr_60958_61489[(1)] = cljs.core.first((state_60952[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61493 = state_60952;
state_60952 = G__61493;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
shadow$dom$state_machine__58393__auto__ = function(state_60952){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__58393__auto____0.call(this);
case 1:
return shadow$dom$state_machine__58393__auto____1.call(this,state_60952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__58393__auto____0;
shadow$dom$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__58393__auto____1;
return shadow$dom$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_60959 = f__58490__auto__();
(statearr_60959[(6)] = c__58489__auto___61484);

return statearr_60959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
