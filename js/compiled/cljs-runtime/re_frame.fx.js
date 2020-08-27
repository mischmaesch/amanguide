goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__64680 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__64681 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__64681);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___64750 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___64750)){
var new_db_64751 = temp__5735__auto___64750;
var fexpr__64685_64752 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__64685_64752.cljs$core$IFn$_invoke$arity$1 ? fexpr__64685_64752.cljs$core$IFn$_invoke$arity$1(new_db_64751) : fexpr__64685_64752.call(null,new_db_64751));
} else {
}

var seq__64686 = cljs.core.seq(effects_without_db);
var chunk__64687 = null;
var count__64688 = (0);
var i__64689 = (0);
while(true){
if((i__64689 < count__64688)){
var vec__64696 = chunk__64687.cljs$core$IIndexed$_nth$arity$2(null,i__64689);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64696,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64696,(1),null);
var temp__5733__auto___64753 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___64753)){
var effect_fn_64754 = temp__5733__auto___64753;
(effect_fn_64754.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64754.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64754.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__64755 = seq__64686;
var G__64756 = chunk__64687;
var G__64757 = count__64688;
var G__64758 = (i__64689 + (1));
seq__64686 = G__64755;
chunk__64687 = G__64756;
count__64688 = G__64757;
i__64689 = G__64758;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64686);
if(temp__5735__auto__){
var seq__64686__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64686__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64686__$1);
var G__64759 = cljs.core.chunk_rest(seq__64686__$1);
var G__64760 = c__4556__auto__;
var G__64761 = cljs.core.count(c__4556__auto__);
var G__64762 = (0);
seq__64686 = G__64759;
chunk__64687 = G__64760;
count__64688 = G__64761;
i__64689 = G__64762;
continue;
} else {
var vec__64699 = cljs.core.first(seq__64686__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64699,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64699,(1),null);
var temp__5733__auto___64763 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___64763)){
var effect_fn_64764 = temp__5733__auto___64763;
(effect_fn_64764.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64764.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64764.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__64765 = cljs.core.next(seq__64686__$1);
var G__64766 = null;
var G__64767 = (0);
var G__64768 = (0);
seq__64686 = G__64765;
chunk__64687 = G__64766;
count__64688 = G__64767;
i__64689 = G__64768;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__64337__auto___64769 = re_frame.interop.now();
var duration__64338__auto___64770 = (end__64337__auto___64769 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__64338__auto___64770,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__64337__auto___64769);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__64680);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___64771 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___64771)){
var new_db_64772 = temp__5735__auto___64771;
var fexpr__64702_64773 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__64702_64773.cljs$core$IFn$_invoke$arity$1 ? fexpr__64702_64773.cljs$core$IFn$_invoke$arity$1(new_db_64772) : fexpr__64702_64773.call(null,new_db_64772));
} else {
}

var seq__64703 = cljs.core.seq(effects_without_db);
var chunk__64704 = null;
var count__64705 = (0);
var i__64706 = (0);
while(true){
if((i__64706 < count__64705)){
var vec__64713 = chunk__64704.cljs$core$IIndexed$_nth$arity$2(null,i__64706);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64713,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64713,(1),null);
var temp__5733__auto___64774 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___64774)){
var effect_fn_64775 = temp__5733__auto___64774;
(effect_fn_64775.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64775.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64775.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__64776 = seq__64703;
var G__64777 = chunk__64704;
var G__64778 = count__64705;
var G__64779 = (i__64706 + (1));
seq__64703 = G__64776;
chunk__64704 = G__64777;
count__64705 = G__64778;
i__64706 = G__64779;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64703);
if(temp__5735__auto__){
var seq__64703__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64703__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64703__$1);
var G__64780 = cljs.core.chunk_rest(seq__64703__$1);
var G__64781 = c__4556__auto__;
var G__64782 = cljs.core.count(c__4556__auto__);
var G__64783 = (0);
seq__64703 = G__64780;
chunk__64704 = G__64781;
count__64705 = G__64782;
i__64706 = G__64783;
continue;
} else {
var vec__64716 = cljs.core.first(seq__64703__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64716,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64716,(1),null);
var temp__5733__auto___64784 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___64784)){
var effect_fn_64785 = temp__5733__auto___64784;
(effect_fn_64785.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64785.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64785.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__64786 = cljs.core.next(seq__64703__$1);
var G__64787 = null;
var G__64788 = (0);
var G__64789 = (0);
seq__64703 = G__64786;
chunk__64704 = G__64787;
count__64705 = G__64788;
i__64706 = G__64789;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__64719){
var map__64720 = p__64719;
var map__64720__$1 = (((((!((map__64720 == null))))?(((((map__64720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64720):map__64720);
var effect = map__64720__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64720__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64720__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__64722 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__64723 = null;
var count__64724 = (0);
var i__64725 = (0);
while(true){
if((i__64725 < count__64724)){
var effect = chunk__64723.cljs$core$IIndexed$_nth$arity$2(null,i__64725);
re_frame.fx.dispatch_later(effect);


var G__64790 = seq__64722;
var G__64791 = chunk__64723;
var G__64792 = count__64724;
var G__64793 = (i__64725 + (1));
seq__64722 = G__64790;
chunk__64723 = G__64791;
count__64724 = G__64792;
i__64725 = G__64793;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64722);
if(temp__5735__auto__){
var seq__64722__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64722__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64722__$1);
var G__64794 = cljs.core.chunk_rest(seq__64722__$1);
var G__64795 = c__4556__auto__;
var G__64796 = cljs.core.count(c__4556__auto__);
var G__64797 = (0);
seq__64722 = G__64794;
chunk__64723 = G__64795;
count__64724 = G__64796;
i__64725 = G__64797;
continue;
} else {
var effect = cljs.core.first(seq__64722__$1);
re_frame.fx.dispatch_later(effect);


var G__64798 = cljs.core.next(seq__64722__$1);
var G__64799 = null;
var G__64800 = (0);
var G__64801 = (0);
seq__64722 = G__64798;
chunk__64723 = G__64799;
count__64724 = G__64800;
i__64725 = G__64801;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__64726 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__64727 = null;
var count__64728 = (0);
var i__64729 = (0);
while(true){
if((i__64729 < count__64728)){
var vec__64736 = chunk__64727.cljs$core$IIndexed$_nth$arity$2(null,i__64729);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64736,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64736,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___64802 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___64802)){
var effect_fn_64803 = temp__5733__auto___64802;
(effect_fn_64803.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64803.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64803.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__64804 = seq__64726;
var G__64805 = chunk__64727;
var G__64806 = count__64728;
var G__64807 = (i__64729 + (1));
seq__64726 = G__64804;
chunk__64727 = G__64805;
count__64728 = G__64806;
i__64729 = G__64807;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64726);
if(temp__5735__auto__){
var seq__64726__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64726__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64726__$1);
var G__64808 = cljs.core.chunk_rest(seq__64726__$1);
var G__64809 = c__4556__auto__;
var G__64810 = cljs.core.count(c__4556__auto__);
var G__64811 = (0);
seq__64726 = G__64808;
chunk__64727 = G__64809;
count__64728 = G__64810;
i__64729 = G__64811;
continue;
} else {
var vec__64739 = cljs.core.first(seq__64726__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64739,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64739,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___64812 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___64812)){
var effect_fn_64813 = temp__5733__auto___64812;
(effect_fn_64813.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64813.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64813.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__64814 = cljs.core.next(seq__64726__$1);
var G__64815 = null;
var G__64816 = (0);
var G__64817 = (0);
seq__64726 = G__64814;
chunk__64727 = G__64815;
count__64728 = G__64816;
i__64729 = G__64817;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__64742 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__64743 = null;
var count__64744 = (0);
var i__64745 = (0);
while(true){
if((i__64745 < count__64744)){
var event = chunk__64743.cljs$core$IIndexed$_nth$arity$2(null,i__64745);
re_frame.router.dispatch(event);


var G__64818 = seq__64742;
var G__64819 = chunk__64743;
var G__64820 = count__64744;
var G__64821 = (i__64745 + (1));
seq__64742 = G__64818;
chunk__64743 = G__64819;
count__64744 = G__64820;
i__64745 = G__64821;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64742);
if(temp__5735__auto__){
var seq__64742__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64742__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64742__$1);
var G__64822 = cljs.core.chunk_rest(seq__64742__$1);
var G__64823 = c__4556__auto__;
var G__64824 = cljs.core.count(c__4556__auto__);
var G__64825 = (0);
seq__64742 = G__64822;
chunk__64743 = G__64823;
count__64744 = G__64824;
i__64745 = G__64825;
continue;
} else {
var event = cljs.core.first(seq__64742__$1);
re_frame.router.dispatch(event);


var G__64826 = cljs.core.next(seq__64742__$1);
var G__64827 = null;
var G__64828 = (0);
var G__64829 = (0);
seq__64742 = G__64826;
chunk__64743 = G__64827;
count__64744 = G__64828;
i__64745 = G__64829;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__64746 = cljs.core.seq(value);
var chunk__64747 = null;
var count__64748 = (0);
var i__64749 = (0);
while(true){
if((i__64749 < count__64748)){
var event = chunk__64747.cljs$core$IIndexed$_nth$arity$2(null,i__64749);
clear_event(event);


var G__64830 = seq__64746;
var G__64831 = chunk__64747;
var G__64832 = count__64748;
var G__64833 = (i__64749 + (1));
seq__64746 = G__64830;
chunk__64747 = G__64831;
count__64748 = G__64832;
i__64749 = G__64833;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64746);
if(temp__5735__auto__){
var seq__64746__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64746__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64746__$1);
var G__64834 = cljs.core.chunk_rest(seq__64746__$1);
var G__64835 = c__4556__auto__;
var G__64836 = cljs.core.count(c__4556__auto__);
var G__64837 = (0);
seq__64746 = G__64834;
chunk__64747 = G__64835;
count__64748 = G__64836;
i__64749 = G__64837;
continue;
} else {
var event = cljs.core.first(seq__64746__$1);
clear_event(event);


var G__64838 = cljs.core.next(seq__64746__$1);
var G__64839 = null;
var G__64840 = (0);
var G__64841 = (0);
seq__64746 = G__64838;
chunk__64747 = G__64839;
count__64748 = G__64840;
i__64749 = G__64841;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
