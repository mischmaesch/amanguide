goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__62853,p__62854){
var map__62855 = p__62853;
var map__62855__$1 = (((((!((map__62855 == null))))?(((((map__62855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62855):map__62855);
var svc = map__62855__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62855__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62855__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62855__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__62856 = p__62854;
var map__62856__$1 = (((((!((map__62856 == null))))?(((((map__62856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62856):map__62856);
var msg = map__62856__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62856__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__62859,p__62860){
var map__62861 = p__62859;
var map__62861__$1 = (((((!((map__62861 == null))))?(((((map__62861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62861):map__62861);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62861__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__62862 = p__62860;
var map__62862__$1 = (((((!((map__62862 == null))))?(((((map__62862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62862):map__62862);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62862__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__62865,p__62866){
var map__62867 = p__62865;
var map__62867__$1 = (((((!((map__62867 == null))))?(((((map__62867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62867):map__62867);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__62868 = p__62866;
var map__62868__$1 = (((((!((map__62868 == null))))?(((((map__62868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62868):map__62868);
var msg = map__62868__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62868__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__62871,tid){
var map__62872 = p__62871;
var map__62872__$1 = (((((!((map__62872 == null))))?(((((map__62872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62872):map__62872);
var svc = map__62872__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62872__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__62878 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__62879 = null;
var count__62880 = (0);
var i__62881 = (0);
while(true){
if((i__62881 < count__62880)){
var vec__62888 = chunk__62879.cljs$core$IIndexed$_nth$arity$2(null,i__62881);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62888,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62888,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__62897 = seq__62878;
var G__62898 = chunk__62879;
var G__62899 = count__62880;
var G__62900 = (i__62881 + (1));
seq__62878 = G__62897;
chunk__62879 = G__62898;
count__62880 = G__62899;
i__62881 = G__62900;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62878);
if(temp__5735__auto__){
var seq__62878__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62878__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62878__$1);
var G__62901 = cljs.core.chunk_rest(seq__62878__$1);
var G__62902 = c__4556__auto__;
var G__62903 = cljs.core.count(c__4556__auto__);
var G__62904 = (0);
seq__62878 = G__62901;
chunk__62879 = G__62902;
count__62880 = G__62903;
i__62881 = G__62904;
continue;
} else {
var vec__62891 = cljs.core.first(seq__62878__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62891,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62891,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__62905 = cljs.core.next(seq__62878__$1);
var G__62906 = null;
var G__62907 = (0);
var G__62908 = (0);
seq__62878 = G__62905;
chunk__62879 = G__62906;
count__62880 = G__62907;
i__62881 = G__62908;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__62874_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__62874_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__62875_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__62875_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__62876_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__62876_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__62877_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__62877_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__62894){
var map__62895 = p__62894;
var map__62895__$1 = (((((!((map__62895 == null))))?(((((map__62895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62895):map__62895);
var svc = map__62895__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
