goog.provide('shadow.xhr');
shadow.xhr.result_chain = (function shadow$xhr$result_chain(res,handler){
return goog.result.chain(res,handler);
});
shadow.xhr.result_combine = (function shadow$xhr$result_combine(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62070 = arguments.length;
var i__4737__auto___62071 = (0);
while(true){
if((i__4737__auto___62071 < len__4736__auto___62070)){
args__4742__auto__.push((arguments[i__4737__auto___62071]));

var G__62072 = (i__4737__auto___62071 + (1));
i__4737__auto___62071 = G__62072;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic = (function (results){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.result.combine,results);
}));

(shadow.xhr.result_combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.xhr.result_combine.cljs$lang$applyTo = (function (seq61956){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61956));
}));

shadow.xhr.result_wait_on_success = (function shadow$xhr$result_wait_on_success(res,callback){
return goog.result.waitOnSuccess(res,callback);
});
shadow.xhr.result_success_QMARK_ = (function shadow$xhr$result_success_QMARK_(res){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.result.Result.State.SUCCESS,res.getState());
});
shadow.xhr.result_value = (function shadow$xhr$result_value(res){
return res.getValue();
});
shadow.xhr.result_immediate = (function shadow$xhr$result_immediate(value){
return goog.result.successfulResult(value);
});
shadow.xhr.result_error = (function shadow$xhr$result_error(res,callback){
return goog.result.waitOnError(res,callback);
});
shadow.xhr.edn_transform = (function shadow$xhr$edn_transform(body){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(body);
});
shadow.xhr.json_transform = (function shadow$xhr$json_transform(body){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(body));
});
shadow.xhr.goog_keys = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),"timeoutMs",new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),"withCredentials",new cljs.core.Keyword(null,"headers","headers",-835030129),"headers",new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),"mimeType"], null);
shadow.xhr.make_request_options = (function shadow$xhr$make_request_options(options){
var obj = ({});
var seq__61992_62073 = cljs.core.seq(options);
var chunk__61993_62074 = null;
var count__61994_62075 = (0);
var i__61995_62076 = (0);
while(true){
if((i__61995_62076 < count__61994_62075)){
var vec__62002_62077 = chunk__61993_62074.cljs$core$IIndexed$_nth$arity$2(null,i__61995_62076);
var k_62078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62002_62077,(0),null);
var v_62079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62002_62077,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_62078)] = cljs.core.clj__GT_js(v_62079));


var G__62080 = seq__61992_62073;
var G__62081 = chunk__61993_62074;
var G__62082 = count__61994_62075;
var G__62083 = (i__61995_62076 + (1));
seq__61992_62073 = G__62080;
chunk__61993_62074 = G__62081;
count__61994_62075 = G__62082;
i__61995_62076 = G__62083;
continue;
} else {
var temp__5735__auto___62084 = cljs.core.seq(seq__61992_62073);
if(temp__5735__auto___62084){
var seq__61992_62085__$1 = temp__5735__auto___62084;
if(cljs.core.chunked_seq_QMARK_(seq__61992_62085__$1)){
var c__4556__auto___62086 = cljs.core.chunk_first(seq__61992_62085__$1);
var G__62087 = cljs.core.chunk_rest(seq__61992_62085__$1);
var G__62088 = c__4556__auto___62086;
var G__62089 = cljs.core.count(c__4556__auto___62086);
var G__62090 = (0);
seq__61992_62073 = G__62087;
chunk__61993_62074 = G__62088;
count__61994_62075 = G__62089;
i__61995_62076 = G__62090;
continue;
} else {
var vec__62005_62091 = cljs.core.first(seq__61992_62085__$1);
var k_62092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62005_62091,(0),null);
var v_62093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62005_62091,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_62092)] = cljs.core.clj__GT_js(v_62093));


var G__62097 = cljs.core.next(seq__61992_62085__$1);
var G__62098 = null;
var G__62099 = (0);
var G__62100 = (0);
seq__61992_62073 = G__62097;
chunk__61993_62074 = G__62098;
count__61994_62075 = G__62099;
i__61995_62076 = G__62100;
continue;
}
} else {
}
}
break;
}

return obj;
});
shadow.xhr.content_transforms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, ["text/edn",shadow.xhr.edn_transform,"application/edn",shadow.xhr.edn_transform,"application/json",shadow.xhr.json_transform,"text/html",cljs.core.identity,"text/plain",cljs.core.identity], null));
shadow.xhr.register_transform = (function shadow$xhr$register_transform(content_type,transform_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.xhr.content_transforms,cljs.core.assoc,content_type,transform_fn);
});
shadow.xhr.auto_transform = (function shadow$xhr$auto_transform(req){
var content_type = (function (){var ct = clojure.string.lower_case(req.getResponseHeader("Content-Type"));
var sep = ct.indexOf(";");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),sep)){
return ct.substring((0),sep);
} else {
return ct;
}
})();
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.xhr.content_transforms),content_type);
if((transform_fn == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported content-type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null));
} else {
var G__62008 = req.responseText;
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__62008) : transform_fn.call(null,G__62008));
}
});
shadow.xhr.make_url = (function shadow$xhr$make_url(url,params){
return goog.uri.utils.appendParamsFromMap(url,cljs.core.clj__GT_js(params));
});
shadow.xhr.transform_request_body = (function shadow$xhr$transform_request_body(data){
if(typeof data === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain; charset=utf-8",data], null);
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IPrintWithWriter$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/edn; charset=utf-8",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/octet-stream",data], null);

}
}
});
shadow.xhr.as_url = (function shadow$xhr$as_url(input){
if(typeof input === 'string'){
return input;
} else {
if(((cljs.core.vector_QMARK_(input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(input))) && (typeof cljs.core.first(input) === 'string') && (cljs.core.map_QMARK_(cljs.core.second(input))))){
var vec__62010 = input;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62010,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62010,(1),null);
return shadow.xhr.make_url(url,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doesnt look like an url",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));

}
}
});
shadow.xhr.e__GT_data = (function shadow$xhr$e__GT_data(e){
return e;
});
shadow.xhr.event_handler = (function shadow$xhr$event_handler(req,events,event_type){
return (function (e){
if(cljs.core.map_QMARK_(events)){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_type);
if(cljs.core.truth_(temp__5735__auto__)){
var c = temp__5735__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;
}
} else {
if((!((events == null)))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(events,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;

}
}
});
});
shadow.xhr.request_ok_QMARK_ = (function shadow$xhr$request_ok_QMARK_(status){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status);
});
shadow.xhr.request_error_QMARK_ = (function shadow$xhr$request_error_QMARK_(status){
return (status >= (400));
});
/**
 * creates a channel and performs xhr request like (chan :GET "/something")
 * 
 * accepts url as string or [url params]
 * 
 * this channel will receive one message [status body req] on load
 * loadend will close the result channel, so you will get nil results on request errors/timeouts
 * 
 * use options hash to pass in extra channels
 * 
 * (chan :POST "/something" some-data {:events chan-or-map
 *                                       :upload chan-or-map})
 * 
 * when given a chan that channels receives messages in form of [event-type event-data req]
 * when given a map a channel is expected for each eventtype and will receive [event-data req]
 * {:timeout some-chan}, if no channel for a given event is present, no message is sent
 * 
 * event types are :loadstart :progress :abort :error :timeout :loadend :load (see xhr spec)
 * only exception is that status >= 500 does not return a result and produces an error event instead
 */
shadow.xhr.chan = (function shadow$xhr$chan(var_args){
var G__62014 = arguments.length;
switch (G__62014) {
case 2:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,p__62019){
var map__62020 = p__62019;
var map__62020__$1 = (((((!((map__62020 == null))))?(((((map__62020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62020):map__62020);
var options = map__62020__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62020__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var upload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62020__$1,new cljs.core.Keyword(null,"upload","upload",-255769218));
var body_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62020__$1,new cljs.core.Keyword(null,"body-only","body-only",-698120682));
var req = (new XMLHttpRequest());
var body_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
var vec__62022 = ((body_QMARK_)?shadow.xhr.transform_request_body(data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62022,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62022,(1),null);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
if(cljs.core.truth_(((body_QMARK_)?upload:false))){
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"error","error",-978969032),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"error","error",-978969032)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"load","load",-1318641184),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));
} else {
}

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadend","loadend",1430560564),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadend","loadend",1430560564));
return (function (e){
callback(e);

return cljs.core.async.close_BANG_(result_chan);
});
})());

var error_handler_62123 = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"error","error",-978969032));
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"error","error",-978969032),error_handler_62123);

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"load","load",-1318641184),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"load","load",-1318641184));
return (function (e){
var status = req.status;
var body__$1 = (function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5733__auto__)){
var transform = temp__5733__auto__;
var G__62025 = req.responseText;
var G__62026 = req;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__62025,G__62026) : transform.call(null,G__62025,G__62026));
} else {
return shadow.xhr.auto_transform(req);
}
})();
if(shadow.xhr.request_error_QMARK_(status)){
return error_handler_62123(e);
} else {
callback(e);

if(cljs.core.truth_(body_only)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,body__$1);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,body__$1,req], null));
}
}
});
})());

req.open(cljs.core.name(method),shadow.xhr.as_url(url),true);

(req.responseType = "text");

(req.withCredentials = (!(new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235).cljs$core$IFn$_invoke$arity$1(options) === false)));

if(body_QMARK_){
req.setRequestHeader("Content-Type",content_type);
} else {
}

if(body_QMARK_){
req.send(body);
} else {
req.send();
}

return result_chan;
}));

(shadow.xhr.chan.cljs$lang$maxFixedArity = 4);

shadow.xhr.request = (function shadow$xhr$request(var_args){
var G__62028 = arguments.length;
switch (G__62028) {
case 2:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,options){
if((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"DELETE","DELETE",1688673772),null,new cljs.core.Keyword(null,"GET","GET",1736591026),null], null), null),method)))) && ((data == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request needs data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"options","options",99638489),options], null));
} else {
}

var body_QMARK_ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method)) || ((data == null)))));
var vec__62034 = shadow.xhr.transform_request_body(data);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62034,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62034,(1),null);
var req = goog.labs.net.xhr.send(cljs.core.name(method),(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method))?data:false))?shadow.xhr.make_url(url,data):url),((body_QMARK_)?body:null),shadow.xhr.make_request_options(((body_QMARK_)?cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null),content_type):options)));
var req__$1 = goog.result.SimpleResult.fromPromise(req);
return goog.result.transform(req__$1,shadow.xhr.auto_transform);
}));

(shadow.xhr.request.cljs$lang$maxFixedArity = 4);

shadow.xhr.upload = (function shadow$xhr$upload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62136 = arguments.length;
var i__4737__auto___62137 = (0);
while(true){
if((i__4737__auto___62137 < len__4736__auto___62136)){
args__4742__auto__.push((arguments[i__4737__auto___62137]));

var G__62138 = (i__4737__auto___62137 + (1));
i__4737__auto___62137 = G__62138;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic = (function (url,file,events){
var xhr = (new XMLHttpRequest());
var seq__62046_62139 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events));
var chunk__62048_62140 = null;
var count__62049_62141 = (0);
var i__62050_62142 = (0);
while(true){
if((i__62050_62142 < count__62049_62141)){
var vec__62063_62143 = chunk__62048_62140.cljs$core$IIndexed$_nth$arity$2(null,i__62050_62142);
var ev_id_62144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62063_62143,(0),null);
var ev_handler_62145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62063_62143,(1),null);
var target_62146 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_62144))?(xhr["upload"]):xhr);
target_62146.addEventListener(cljs.core.name(ev_id_62144),ev_handler_62145);


var G__62147 = seq__62046_62139;
var G__62148 = chunk__62048_62140;
var G__62149 = count__62049_62141;
var G__62150 = (i__62050_62142 + (1));
seq__62046_62139 = G__62147;
chunk__62048_62140 = G__62148;
count__62049_62141 = G__62149;
i__62050_62142 = G__62150;
continue;
} else {
var temp__5735__auto___62151 = cljs.core.seq(seq__62046_62139);
if(temp__5735__auto___62151){
var seq__62046_62152__$1 = temp__5735__auto___62151;
if(cljs.core.chunked_seq_QMARK_(seq__62046_62152__$1)){
var c__4556__auto___62153 = cljs.core.chunk_first(seq__62046_62152__$1);
var G__62154 = cljs.core.chunk_rest(seq__62046_62152__$1);
var G__62155 = c__4556__auto___62153;
var G__62156 = cljs.core.count(c__4556__auto___62153);
var G__62157 = (0);
seq__62046_62139 = G__62154;
chunk__62048_62140 = G__62155;
count__62049_62141 = G__62156;
i__62050_62142 = G__62157;
continue;
} else {
var vec__62066_62158 = cljs.core.first(seq__62046_62152__$1);
var ev_id_62159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62066_62158,(0),null);
var ev_handler_62160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62066_62158,(1),null);
var target_62161 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_62159))?(xhr["upload"]):xhr);
target_62161.addEventListener(cljs.core.name(ev_id_62159),ev_handler_62160);


var G__62162 = cljs.core.next(seq__62046_62152__$1);
var G__62163 = null;
var G__62164 = (0);
var G__62165 = (0);
seq__62046_62139 = G__62162;
chunk__62048_62140 = G__62163;
count__62049_62141 = G__62164;
i__62050_62142 = G__62165;
continue;
}
} else {
}
}
break;
}

var G__62069 = xhr;
G__62069.open("PUT",url);

G__62069.send(file);

return G__62069;
}));

(shadow.xhr.upload.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.xhr.upload.cljs$lang$applyTo = (function (seq62038){
var G__62041 = cljs.core.first(seq62038);
var seq62038__$1 = cljs.core.next(seq62038);
var G__62042 = cljs.core.first(seq62038__$1);
var seq62038__$2 = cljs.core.next(seq62038__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62041,G__62042,seq62038__$2);
}));


//# sourceMappingURL=shadow.xhr.js.map
