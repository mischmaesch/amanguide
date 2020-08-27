goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__64361){
var map__64362 = p__64361;
var map__64362__$1 = (((((!((map__64362 == null))))?(((((map__64362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64362):map__64362);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__64364_64393 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__64365_64394 = null;
var count__64366_64395 = (0);
var i__64367_64396 = (0);
while(true){
if((i__64367_64396 < count__64366_64395)){
var vec__64380_64397 = chunk__64365_64394.cljs$core$IIndexed$_nth$arity$2(null,i__64367_64396);
var k_64398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64380_64397,(0),null);
var cb_64399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64380_64397,(1),null);
try{var G__64384_64400 = cljs.core.deref(re_frame.trace.traces);
(cb_64399.cljs$core$IFn$_invoke$arity$1 ? cb_64399.cljs$core$IFn$_invoke$arity$1(G__64384_64400) : cb_64399.call(null,G__64384_64400));
}catch (e64383){var e_64401 = e64383;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64398,"while storing",cljs.core.deref(re_frame.trace.traces),e_64401], 0));
}

var G__64402 = seq__64364_64393;
var G__64403 = chunk__64365_64394;
var G__64404 = count__64366_64395;
var G__64405 = (i__64367_64396 + (1));
seq__64364_64393 = G__64402;
chunk__64365_64394 = G__64403;
count__64366_64395 = G__64404;
i__64367_64396 = G__64405;
continue;
} else {
var temp__5735__auto___64406 = cljs.core.seq(seq__64364_64393);
if(temp__5735__auto___64406){
var seq__64364_64407__$1 = temp__5735__auto___64406;
if(cljs.core.chunked_seq_QMARK_(seq__64364_64407__$1)){
var c__4556__auto___64408 = cljs.core.chunk_first(seq__64364_64407__$1);
var G__64409 = cljs.core.chunk_rest(seq__64364_64407__$1);
var G__64410 = c__4556__auto___64408;
var G__64411 = cljs.core.count(c__4556__auto___64408);
var G__64412 = (0);
seq__64364_64393 = G__64409;
chunk__64365_64394 = G__64410;
count__64366_64395 = G__64411;
i__64367_64396 = G__64412;
continue;
} else {
var vec__64385_64413 = cljs.core.first(seq__64364_64407__$1);
var k_64414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64385_64413,(0),null);
var cb_64415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64385_64413,(1),null);
try{var G__64389_64416 = cljs.core.deref(re_frame.trace.traces);
(cb_64415.cljs$core$IFn$_invoke$arity$1 ? cb_64415.cljs$core$IFn$_invoke$arity$1(G__64389_64416) : cb_64415.call(null,G__64389_64416));
}catch (e64388){var e_64417 = e64388;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64414,"while storing",cljs.core.deref(re_frame.trace.traces),e_64417], 0));
}

var G__64418 = cljs.core.next(seq__64364_64407__$1);
var G__64419 = null;
var G__64420 = (0);
var G__64421 = (0);
seq__64364_64393 = G__64418;
chunk__64365_64394 = G__64419;
count__64366_64395 = G__64420;
i__64367_64396 = G__64421;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
