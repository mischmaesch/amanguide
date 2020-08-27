goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63296 = arguments.length;
var i__4737__auto___63297 = (0);
while(true){
if((i__4737__auto___63297 < len__4736__auto___63296)){
args__4742__auto__.push((arguments[i__4737__auto___63297]));

var G__63298 = (i__4737__auto___63297 + (1));
i__4737__auto___63297 = G__63298;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63149){
var G__63150 = cljs.core.first(seq63149);
var seq63149__$1 = cljs.core.next(seq63149);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63150,seq63149__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63151 = cljs.core.seq(sources);
var chunk__63152 = null;
var count__63153 = (0);
var i__63154 = (0);
while(true){
if((i__63154 < count__63153)){
var map__63167 = chunk__63152.cljs$core$IIndexed$_nth$arity$2(null,i__63154);
var map__63167__$1 = (((((!((map__63167 == null))))?(((((map__63167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63167):map__63167);
var src = map__63167__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63169){var e_63299 = e63169;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63299);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63299.message)].join('')));
}

var G__63300 = seq__63151;
var G__63301 = chunk__63152;
var G__63302 = count__63153;
var G__63303 = (i__63154 + (1));
seq__63151 = G__63300;
chunk__63152 = G__63301;
count__63153 = G__63302;
i__63154 = G__63303;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63151);
if(temp__5735__auto__){
var seq__63151__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63151__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63151__$1);
var G__63304 = cljs.core.chunk_rest(seq__63151__$1);
var G__63305 = c__4556__auto__;
var G__63306 = cljs.core.count(c__4556__auto__);
var G__63307 = (0);
seq__63151 = G__63304;
chunk__63152 = G__63305;
count__63153 = G__63306;
i__63154 = G__63307;
continue;
} else {
var map__63170 = cljs.core.first(seq__63151__$1);
var map__63170__$1 = (((((!((map__63170 == null))))?(((((map__63170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63170):map__63170);
var src = map__63170__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63172){var e_63308 = e63172;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63308);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63308.message)].join('')));
}

var G__63309 = cljs.core.next(seq__63151__$1);
var G__63310 = null;
var G__63311 = (0);
var G__63312 = (0);
seq__63151 = G__63309;
chunk__63152 = G__63310;
count__63153 = G__63311;
i__63154 = G__63312;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__63173 = cljs.core.seq(js_requires);
var chunk__63174 = null;
var count__63175 = (0);
var i__63176 = (0);
while(true){
if((i__63176 < count__63175)){
var js_ns = chunk__63174.cljs$core$IIndexed$_nth$arity$2(null,i__63176);
var require_str_63313 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63313);


var G__63314 = seq__63173;
var G__63315 = chunk__63174;
var G__63316 = count__63175;
var G__63317 = (i__63176 + (1));
seq__63173 = G__63314;
chunk__63174 = G__63315;
count__63175 = G__63316;
i__63176 = G__63317;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63173);
if(temp__5735__auto__){
var seq__63173__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63173__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63173__$1);
var G__63318 = cljs.core.chunk_rest(seq__63173__$1);
var G__63319 = c__4556__auto__;
var G__63320 = cljs.core.count(c__4556__auto__);
var G__63321 = (0);
seq__63173 = G__63318;
chunk__63174 = G__63319;
count__63175 = G__63320;
i__63176 = G__63321;
continue;
} else {
var js_ns = cljs.core.first(seq__63173__$1);
var require_str_63322 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63322);


var G__63323 = cljs.core.next(seq__63173__$1);
var G__63324 = null;
var G__63325 = (0);
var G__63326 = (0);
seq__63173 = G__63323;
chunk__63174 = G__63324;
count__63175 = G__63325;
i__63176 = G__63326;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63178){
var map__63179 = p__63178;
var map__63179__$1 = (((((!((map__63179 == null))))?(((((map__63179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63179):map__63179);
var msg = map__63179__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63179__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63179__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63181(s__63182){
return (new cljs.core.LazySeq(null,(function (){
var s__63182__$1 = s__63182;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63182__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__63187 = cljs.core.first(xs__6292__auto__);
var map__63187__$1 = (((((!((map__63187 == null))))?(((((map__63187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63187):map__63187);
var src = map__63187__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63187__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63187__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__63182__$1,map__63187,map__63187__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63179,map__63179__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63181_$_iter__63183(s__63184){
return (new cljs.core.LazySeq(null,((function (s__63182__$1,map__63187,map__63187__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63179,map__63179__$1,msg,info,reload_info){
return (function (){
var s__63184__$1 = s__63184;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63184__$1);
if(temp__5735__auto____$1){
var s__63184__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63184__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63184__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63186 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63185 = (0);
while(true){
if((i__63185 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__63185);
cljs.core.chunk_append(b__63186,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__63327 = (i__63185 + (1));
i__63185 = G__63327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63186),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63181_$_iter__63183(cljs.core.chunk_rest(s__63184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63186),null);
}
} else {
var warning = cljs.core.first(s__63184__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63181_$_iter__63183(cljs.core.rest(s__63184__$2)));
}
} else {
return null;
}
break;
}
});})(s__63182__$1,map__63187,map__63187__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63179,map__63179__$1,msg,info,reload_info))
,null,null));
});})(s__63182__$1,map__63187,map__63187__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63179,map__63179__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63181(cljs.core.rest(s__63182__$1)));
} else {
var G__63328 = cljs.core.rest(s__63182__$1);
s__63182__$1 = G__63328;
continue;
}
} else {
var G__63329 = cljs.core.rest(s__63182__$1);
s__63182__$1 = G__63329;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__63189_63330 = cljs.core.seq(warnings);
var chunk__63190_63331 = null;
var count__63191_63332 = (0);
var i__63192_63333 = (0);
while(true){
if((i__63192_63333 < count__63191_63332)){
var map__63197_63334 = chunk__63190_63331.cljs$core$IIndexed$_nth$arity$2(null,i__63192_63333);
var map__63197_63335__$1 = (((((!((map__63197_63334 == null))))?(((((map__63197_63334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63197_63334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63197_63334):map__63197_63334);
var w_63336 = map__63197_63335__$1;
var msg_63337__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63197_63335__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63197_63335__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63197_63335__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63197_63335__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63340)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63338),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63339),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63337__$1)].join(''));


var G__63341 = seq__63189_63330;
var G__63342 = chunk__63190_63331;
var G__63343 = count__63191_63332;
var G__63344 = (i__63192_63333 + (1));
seq__63189_63330 = G__63341;
chunk__63190_63331 = G__63342;
count__63191_63332 = G__63343;
i__63192_63333 = G__63344;
continue;
} else {
var temp__5735__auto___63345 = cljs.core.seq(seq__63189_63330);
if(temp__5735__auto___63345){
var seq__63189_63346__$1 = temp__5735__auto___63345;
if(cljs.core.chunked_seq_QMARK_(seq__63189_63346__$1)){
var c__4556__auto___63347 = cljs.core.chunk_first(seq__63189_63346__$1);
var G__63348 = cljs.core.chunk_rest(seq__63189_63346__$1);
var G__63349 = c__4556__auto___63347;
var G__63350 = cljs.core.count(c__4556__auto___63347);
var G__63351 = (0);
seq__63189_63330 = G__63348;
chunk__63190_63331 = G__63349;
count__63191_63332 = G__63350;
i__63192_63333 = G__63351;
continue;
} else {
var map__63199_63352 = cljs.core.first(seq__63189_63346__$1);
var map__63199_63353__$1 = (((((!((map__63199_63352 == null))))?(((((map__63199_63352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63199_63352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63199_63352):map__63199_63352);
var w_63354 = map__63199_63353__$1;
var msg_63355__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63199_63353__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63199_63353__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63199_63353__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63199_63353__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63358)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63356),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63357),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63355__$1)].join(''));


var G__63359 = cljs.core.next(seq__63189_63346__$1);
var G__63360 = null;
var G__63361 = (0);
var G__63362 = (0);
seq__63189_63330 = G__63359;
chunk__63190_63331 = G__63360;
count__63191_63332 = G__63361;
i__63192_63333 = G__63362;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63177_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63177_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__63201){
var map__63202 = p__63201;
var map__63202__$1 = (((((!((map__63202 == null))))?(((((map__63202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63202):map__63202);
var msg = map__63202__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63202__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__63204 = cljs.core.seq(updates);
var chunk__63206 = null;
var count__63207 = (0);
var i__63208 = (0);
while(true){
if((i__63208 < count__63207)){
var path = chunk__63206.cljs$core$IIndexed$_nth$arity$2(null,i__63208);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63234_63363 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63237_63364 = null;
var count__63238_63365 = (0);
var i__63239_63366 = (0);
while(true){
if((i__63239_63366 < count__63238_63365)){
var node_63367 = chunk__63237_63364.cljs$core$IIndexed$_nth$arity$2(null,i__63239_63366);
var path_match_63368 = shadow.cljs.devtools.client.browser.match_paths(node_63367.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63368)){
var new_link_63369 = (function (){var G__63245 = node_63367.cloneNode(true);
G__63245.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63368),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63245;
})();
(new_link_63369.onload = ((function (seq__63234_63363,chunk__63237_63364,count__63238_63365,i__63239_63366,seq__63204,chunk__63206,count__63207,i__63208,new_link_63369,path_match_63368,node_63367,path,map__63202,map__63202__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_63367);
});})(seq__63234_63363,chunk__63237_63364,count__63238_63365,i__63239_63366,seq__63204,chunk__63206,count__63207,i__63208,new_link_63369,path_match_63368,node_63367,path,map__63202,map__63202__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63368], 0));

goog.dom.insertSiblingAfter(new_link_63369,node_63367);


var G__63370 = seq__63234_63363;
var G__63371 = chunk__63237_63364;
var G__63372 = count__63238_63365;
var G__63373 = (i__63239_63366 + (1));
seq__63234_63363 = G__63370;
chunk__63237_63364 = G__63371;
count__63238_63365 = G__63372;
i__63239_63366 = G__63373;
continue;
} else {
var G__63374 = seq__63234_63363;
var G__63375 = chunk__63237_63364;
var G__63376 = count__63238_63365;
var G__63377 = (i__63239_63366 + (1));
seq__63234_63363 = G__63374;
chunk__63237_63364 = G__63375;
count__63238_63365 = G__63376;
i__63239_63366 = G__63377;
continue;
}
} else {
var temp__5735__auto___63378 = cljs.core.seq(seq__63234_63363);
if(temp__5735__auto___63378){
var seq__63234_63379__$1 = temp__5735__auto___63378;
if(cljs.core.chunked_seq_QMARK_(seq__63234_63379__$1)){
var c__4556__auto___63380 = cljs.core.chunk_first(seq__63234_63379__$1);
var G__63381 = cljs.core.chunk_rest(seq__63234_63379__$1);
var G__63382 = c__4556__auto___63380;
var G__63383 = cljs.core.count(c__4556__auto___63380);
var G__63384 = (0);
seq__63234_63363 = G__63381;
chunk__63237_63364 = G__63382;
count__63238_63365 = G__63383;
i__63239_63366 = G__63384;
continue;
} else {
var node_63385 = cljs.core.first(seq__63234_63379__$1);
var path_match_63386 = shadow.cljs.devtools.client.browser.match_paths(node_63385.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63386)){
var new_link_63387 = (function (){var G__63246 = node_63385.cloneNode(true);
G__63246.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63386),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63246;
})();
(new_link_63387.onload = ((function (seq__63234_63363,chunk__63237_63364,count__63238_63365,i__63239_63366,seq__63204,chunk__63206,count__63207,i__63208,new_link_63387,path_match_63386,node_63385,seq__63234_63379__$1,temp__5735__auto___63378,path,map__63202,map__63202__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_63385);
});})(seq__63234_63363,chunk__63237_63364,count__63238_63365,i__63239_63366,seq__63204,chunk__63206,count__63207,i__63208,new_link_63387,path_match_63386,node_63385,seq__63234_63379__$1,temp__5735__auto___63378,path,map__63202,map__63202__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63386], 0));

goog.dom.insertSiblingAfter(new_link_63387,node_63385);


var G__63388 = cljs.core.next(seq__63234_63379__$1);
var G__63389 = null;
var G__63390 = (0);
var G__63391 = (0);
seq__63234_63363 = G__63388;
chunk__63237_63364 = G__63389;
count__63238_63365 = G__63390;
i__63239_63366 = G__63391;
continue;
} else {
var G__63392 = cljs.core.next(seq__63234_63379__$1);
var G__63393 = null;
var G__63394 = (0);
var G__63395 = (0);
seq__63234_63363 = G__63392;
chunk__63237_63364 = G__63393;
count__63238_63365 = G__63394;
i__63239_63366 = G__63395;
continue;
}
}
} else {
}
}
break;
}


var G__63396 = seq__63204;
var G__63397 = chunk__63206;
var G__63398 = count__63207;
var G__63399 = (i__63208 + (1));
seq__63204 = G__63396;
chunk__63206 = G__63397;
count__63207 = G__63398;
i__63208 = G__63399;
continue;
} else {
var G__63400 = seq__63204;
var G__63401 = chunk__63206;
var G__63402 = count__63207;
var G__63403 = (i__63208 + (1));
seq__63204 = G__63400;
chunk__63206 = G__63401;
count__63207 = G__63402;
i__63208 = G__63403;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63204);
if(temp__5735__auto__){
var seq__63204__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63204__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63204__$1);
var G__63404 = cljs.core.chunk_rest(seq__63204__$1);
var G__63405 = c__4556__auto__;
var G__63406 = cljs.core.count(c__4556__auto__);
var G__63407 = (0);
seq__63204 = G__63404;
chunk__63206 = G__63405;
count__63207 = G__63406;
i__63208 = G__63407;
continue;
} else {
var path = cljs.core.first(seq__63204__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63247_63408 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63250_63409 = null;
var count__63251_63410 = (0);
var i__63252_63411 = (0);
while(true){
if((i__63252_63411 < count__63251_63410)){
var node_63412 = chunk__63250_63409.cljs$core$IIndexed$_nth$arity$2(null,i__63252_63411);
var path_match_63413 = shadow.cljs.devtools.client.browser.match_paths(node_63412.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63413)){
var new_link_63414 = (function (){var G__63258 = node_63412.cloneNode(true);
G__63258.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63413),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63258;
})();
(new_link_63414.onload = ((function (seq__63247_63408,chunk__63250_63409,count__63251_63410,i__63252_63411,seq__63204,chunk__63206,count__63207,i__63208,new_link_63414,path_match_63413,node_63412,path,seq__63204__$1,temp__5735__auto__,map__63202,map__63202__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_63412);
});})(seq__63247_63408,chunk__63250_63409,count__63251_63410,i__63252_63411,seq__63204,chunk__63206,count__63207,i__63208,new_link_63414,path_match_63413,node_63412,path,seq__63204__$1,temp__5735__auto__,map__63202,map__63202__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63413], 0));

goog.dom.insertSiblingAfter(new_link_63414,node_63412);


var G__63415 = seq__63247_63408;
var G__63416 = chunk__63250_63409;
var G__63417 = count__63251_63410;
var G__63418 = (i__63252_63411 + (1));
seq__63247_63408 = G__63415;
chunk__63250_63409 = G__63416;
count__63251_63410 = G__63417;
i__63252_63411 = G__63418;
continue;
} else {
var G__63419 = seq__63247_63408;
var G__63420 = chunk__63250_63409;
var G__63421 = count__63251_63410;
var G__63422 = (i__63252_63411 + (1));
seq__63247_63408 = G__63419;
chunk__63250_63409 = G__63420;
count__63251_63410 = G__63421;
i__63252_63411 = G__63422;
continue;
}
} else {
var temp__5735__auto___63423__$1 = cljs.core.seq(seq__63247_63408);
if(temp__5735__auto___63423__$1){
var seq__63247_63424__$1 = temp__5735__auto___63423__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63247_63424__$1)){
var c__4556__auto___63425 = cljs.core.chunk_first(seq__63247_63424__$1);
var G__63426 = cljs.core.chunk_rest(seq__63247_63424__$1);
var G__63427 = c__4556__auto___63425;
var G__63428 = cljs.core.count(c__4556__auto___63425);
var G__63429 = (0);
seq__63247_63408 = G__63426;
chunk__63250_63409 = G__63427;
count__63251_63410 = G__63428;
i__63252_63411 = G__63429;
continue;
} else {
var node_63430 = cljs.core.first(seq__63247_63424__$1);
var path_match_63431 = shadow.cljs.devtools.client.browser.match_paths(node_63430.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63431)){
var new_link_63432 = (function (){var G__63259 = node_63430.cloneNode(true);
G__63259.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63431),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63259;
})();
(new_link_63432.onload = ((function (seq__63247_63408,chunk__63250_63409,count__63251_63410,i__63252_63411,seq__63204,chunk__63206,count__63207,i__63208,new_link_63432,path_match_63431,node_63430,seq__63247_63424__$1,temp__5735__auto___63423__$1,path,seq__63204__$1,temp__5735__auto__,map__63202,map__63202__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_63430);
});})(seq__63247_63408,chunk__63250_63409,count__63251_63410,i__63252_63411,seq__63204,chunk__63206,count__63207,i__63208,new_link_63432,path_match_63431,node_63430,seq__63247_63424__$1,temp__5735__auto___63423__$1,path,seq__63204__$1,temp__5735__auto__,map__63202,map__63202__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63431], 0));

goog.dom.insertSiblingAfter(new_link_63432,node_63430);


var G__63433 = cljs.core.next(seq__63247_63424__$1);
var G__63434 = null;
var G__63435 = (0);
var G__63436 = (0);
seq__63247_63408 = G__63433;
chunk__63250_63409 = G__63434;
count__63251_63410 = G__63435;
i__63252_63411 = G__63436;
continue;
} else {
var G__63437 = cljs.core.next(seq__63247_63424__$1);
var G__63438 = null;
var G__63439 = (0);
var G__63440 = (0);
seq__63247_63408 = G__63437;
chunk__63250_63409 = G__63438;
count__63251_63410 = G__63439;
i__63252_63411 = G__63440;
continue;
}
}
} else {
}
}
break;
}


var G__63441 = cljs.core.next(seq__63204__$1);
var G__63442 = null;
var G__63443 = (0);
var G__63444 = (0);
seq__63204 = G__63441;
chunk__63206 = G__63442;
count__63207 = G__63443;
i__63208 = G__63444;
continue;
} else {
var G__63445 = cljs.core.next(seq__63204__$1);
var G__63446 = null;
var G__63447 = (0);
var G__63448 = (0);
seq__63204 = G__63445;
chunk__63206 = G__63446;
count__63207 = G__63447;
i__63208 = G__63448;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__63260){
var map__63261 = p__63260;
var map__63261__$1 = (((((!((map__63261 == null))))?(((((map__63261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63261):map__63261);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63261__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__63267){
var map__63268 = p__63267;
var map__63268__$1 = (((((!((map__63268 == null))))?(((((map__63268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63268):map__63268);
var _ = map__63268__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63268__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__63270,done,error){
var map__63271 = p__63270;
var map__63271__$1 = (((((!((map__63271 == null))))?(((((map__63271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63271):map__63271);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63271__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__63273,done,error){
var map__63274 = p__63273;
var map__63274__$1 = (((((!((map__63274 == null))))?(((((map__63274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63274):map__63274);
var msg = map__63274__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63274__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63274__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63274__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__63276){
var map__63277 = p__63276;
var map__63277__$1 = (((((!((map__63277 == null))))?(((((map__63277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63277):map__63277);
var src = map__63277__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63277__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__63279 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__63279) : done.call(null,G__63279));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__63280){
var map__63281 = p__63280;
var map__63281__$1 = (((((!((map__63281 == null))))?(((((map__63281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63281):map__63281);
var msg__$1 = map__63281__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63281__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e63283){var ex = e63283;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__63284){
var map__63285 = p__63284;
var map__63285__$1 = (((((!((map__63285 == null))))?(((((map__63285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63285):map__63285);
var env = map__63285__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63285__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__63287){
var map__63288 = p__63287;
var map__63288__$1 = (((((!((map__63288 == null))))?(((((map__63288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63288):map__63288);
var msg = map__63288__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63288__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__63290){
var map__63291 = p__63290;
var map__63291__$1 = (((((!((map__63291 == null))))?(((((map__63291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63291):map__63291);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63291__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63291__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__63293){
var map__63294 = p__63293;
var map__63294__$1 = (((((!((map__63294 == null))))?(((((map__63294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63294):map__63294);
var svc = map__63294__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63294__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
