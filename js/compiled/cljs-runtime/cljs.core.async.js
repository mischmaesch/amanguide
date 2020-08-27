goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__58554 = arguments.length;
switch (G__58554) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58555 = (function (f,blockable,meta58556){
this.f = f;
this.blockable = blockable;
this.meta58556 = meta58556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58557,meta58556__$1){
var self__ = this;
var _58557__$1 = this;
return (new cljs.core.async.t_cljs$core$async58555(self__.f,self__.blockable,meta58556__$1));
}));

(cljs.core.async.t_cljs$core$async58555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58557){
var self__ = this;
var _58557__$1 = this;
return self__.meta58556;
}));

(cljs.core.async.t_cljs$core$async58555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async58555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async58555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58556","meta58556",1678844213,null)], null);
}));

(cljs.core.async.t_cljs$core$async58555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58555");

(cljs.core.async.t_cljs$core$async58555.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58555.
 */
cljs.core.async.__GT_t_cljs$core$async58555 = (function cljs$core$async$__GT_t_cljs$core$async58555(f__$1,blockable__$1,meta58556){
return (new cljs.core.async.t_cljs$core$async58555(f__$1,blockable__$1,meta58556));
});

}

return (new cljs.core.async.t_cljs$core$async58555(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__58568 = arguments.length;
switch (G__58568) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__58570 = arguments.length;
switch (G__58570) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__58576 = arguments.length;
switch (G__58576) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_60228 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60228) : fn1.call(null,val_60228));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60228) : fn1.call(null,val_60228));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__58583 = arguments.length;
switch (G__58583) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___60230 = n;
var x_60231 = (0);
while(true){
if((x_60231 < n__4613__auto___60230)){
(a[x_60231] = x_60231);

var G__60232 = (x_60231 + (1));
x_60231 = G__60232;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58593 = (function (flag,meta58594){
this.flag = flag;
this.meta58594 = meta58594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58595,meta58594__$1){
var self__ = this;
var _58595__$1 = this;
return (new cljs.core.async.t_cljs$core$async58593(self__.flag,meta58594__$1));
}));

(cljs.core.async.t_cljs$core$async58593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58595){
var self__ = this;
var _58595__$1 = this;
return self__.meta58594;
}));

(cljs.core.async.t_cljs$core$async58593.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58593.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async58593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58594","meta58594",383915912,null)], null);
}));

(cljs.core.async.t_cljs$core$async58593.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58593");

(cljs.core.async.t_cljs$core$async58593.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58593");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58593.
 */
cljs.core.async.__GT_t_cljs$core$async58593 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58593(flag__$1,meta58594){
return (new cljs.core.async.t_cljs$core$async58593(flag__$1,meta58594));
});

}

return (new cljs.core.async.t_cljs$core$async58593(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58596 = (function (flag,cb,meta58597){
this.flag = flag;
this.cb = cb;
this.meta58597 = meta58597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58598,meta58597__$1){
var self__ = this;
var _58598__$1 = this;
return (new cljs.core.async.t_cljs$core$async58596(self__.flag,self__.cb,meta58597__$1));
}));

(cljs.core.async.t_cljs$core$async58596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58598){
var self__ = this;
var _58598__$1 = this;
return self__.meta58597;
}));

(cljs.core.async.t_cljs$core$async58596.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async58596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58597","meta58597",1481207960,null)], null);
}));

(cljs.core.async.t_cljs$core$async58596.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58596");

(cljs.core.async.t_cljs$core$async58596.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58596");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58596.
 */
cljs.core.async.__GT_t_cljs$core$async58596 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58596(flag__$1,cb__$1,meta58597){
return (new cljs.core.async.t_cljs$core$async58596(flag__$1,cb__$1,meta58597));
});

}

return (new cljs.core.async.t_cljs$core$async58596(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58601_SHARP_){
var G__58609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58601_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58609) : fret.call(null,G__58609));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58602_SHARP_){
var G__58610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58602_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58610) : fret.call(null,G__58610));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__60233 = (i + (1));
i = G__60233;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60234 = arguments.length;
var i__4737__auto___60235 = (0);
while(true){
if((i__4737__auto___60235 < len__4736__auto___60234)){
args__4742__auto__.push((arguments[i__4737__auto___60235]));

var G__60236 = (i__4737__auto___60235 + (1));
i__4737__auto___60235 = G__60236;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58631){
var map__58632 = p__58631;
var map__58632__$1 = (((((!((map__58632 == null))))?(((((map__58632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58632):map__58632);
var opts = map__58632__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58629){
var G__58630 = cljs.core.first(seq58629);
var seq58629__$1 = cljs.core.next(seq58629);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58630,seq58629__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__58638 = arguments.length;
switch (G__58638) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__58489__auto___60238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_58669){
var state_val_58670 = (state_58669[(1)]);
if((state_val_58670 === (7))){
var inst_58661 = (state_58669[(2)]);
var state_58669__$1 = state_58669;
var statearr_58689_60239 = state_58669__$1;
(statearr_58689_60239[(2)] = inst_58661);

(statearr_58689_60239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58670 === (1))){
var state_58669__$1 = state_58669;
var statearr_58690_60240 = state_58669__$1;
(statearr_58690_60240[(2)] = null);

(statearr_58690_60240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58670 === (4))){
var inst_58641 = (state_58669[(7)]);
var inst_58641__$1 = (state_58669[(2)]);
var inst_58642 = (inst_58641__$1 == null);
var state_58669__$1 = (function (){var statearr_58691 = state_58669;
(statearr_58691[(7)] = inst_58641__$1);

return statearr_58691;
})();
if(cljs.core.truth_(inst_58642)){
var statearr_58692_60241 = state_58669__$1;
(statearr_58692_60241[(1)] = (5));

} else {
var statearr_58693_60242 = state_58669__$1;
(statearr_58693_60242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58670 === (13))){
var state_58669__$1 = state_58669;
var statearr_58695_60243 = state_58669__$1;
(statearr_58695_60243[(2)] = null);

(statearr_58695_60243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58670 === (6))){
var inst_58641 = (state_58669[(7)]);
var state_58669__$1 = state_58669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58669__$1,(11),to,inst_58641);
} else {
if((state_val_58670 === (3))){
var inst_58663 = (state_58669[(2)]);
var state_58669__$1 = state_58669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58669__$1,inst_58663);
} else {
if((state_val_58670 === (12))){
var state_58669__$1 = state_58669;
var statearr_58699_60244 = state_58669__$1;
(statearr_58699_60244[(2)] = null);

(statearr_58699_60244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58670 === (2))){
var state_58669__$1 = state_58669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58669__$1,(4),from);
} else {
if((state_val_58670 === (11))){
var inst_58654 = (state_58669[(2)]);
var state_58669__$1 = state_58669;
if(cljs.core.truth_(inst_58654)){
var statearr_58701_60245 = state_58669__$1;
(statearr_58701_60245[(1)] = (12));

} else {
var statearr_58702_60246 = state_58669__$1;
(statearr_58702_60246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58670 === (9))){
var state_58669__$1 = state_58669;
var statearr_58703_60247 = state_58669__$1;
(statearr_58703_60247[(2)] = null);

(statearr_58703_60247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58670 === (5))){
var state_58669__$1 = state_58669;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58704_60248 = state_58669__$1;
(statearr_58704_60248[(1)] = (8));

} else {
var statearr_58705_60249 = state_58669__$1;
(statearr_58705_60249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58670 === (14))){
var inst_58659 = (state_58669[(2)]);
var state_58669__$1 = state_58669;
var statearr_58706_60250 = state_58669__$1;
(statearr_58706_60250[(2)] = inst_58659);

(statearr_58706_60250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58670 === (10))){
var inst_58651 = (state_58669[(2)]);
var state_58669__$1 = state_58669;
var statearr_58707_60251 = state_58669__$1;
(statearr_58707_60251[(2)] = inst_58651);

(statearr_58707_60251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58670 === (8))){
var inst_58648 = cljs.core.async.close_BANG_(to);
var state_58669__$1 = state_58669;
var statearr_58708_60252 = state_58669__$1;
(statearr_58708_60252[(2)] = inst_58648);

(statearr_58708_60252[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_58709 = [null,null,null,null,null,null,null,null];
(statearr_58709[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_58709[(1)] = (1));

return statearr_58709;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_58669){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_58669);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e58711){var ex__58396__auto__ = e58711;
var statearr_58712_60253 = state_58669;
(statearr_58712_60253[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_58669[(4)]))){
var statearr_58713_60254 = state_58669;
(statearr_58713_60254[(1)] = cljs.core.first((state_58669[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60255 = state_58669;
state_58669 = G__60255;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_58669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_58669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_58715 = f__58490__auto__();
(statearr_58715[(6)] = c__58489__auto___60238);

return statearr_58715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__58716){
var vec__58717 = p__58716;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58717,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58717,(1),null);
var job = vec__58717;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__58489__auto___60256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_58724){
var state_val_58725 = (state_58724[(1)]);
if((state_val_58725 === (1))){
var state_58724__$1 = state_58724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58724__$1,(2),res,v);
} else {
if((state_val_58725 === (2))){
var inst_58721 = (state_58724[(2)]);
var inst_58722 = cljs.core.async.close_BANG_(res);
var state_58724__$1 = (function (){var statearr_58726 = state_58724;
(statearr_58726[(7)] = inst_58721);

return statearr_58726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58724__$1,inst_58722);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0 = (function (){
var statearr_58727 = [null,null,null,null,null,null,null,null];
(statearr_58727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__);

(statearr_58727[(1)] = (1));

return statearr_58727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1 = (function (state_58724){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_58724);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e58728){var ex__58396__auto__ = e58728;
var statearr_58729_60257 = state_58724;
(statearr_58729_60257[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_58724[(4)]))){
var statearr_58730_60258 = state_58724;
(statearr_58730_60258[(1)] = cljs.core.first((state_58724[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60259 = state_58724;
state_58724 = G__60259;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__ = function(state_58724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1.call(this,state_58724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_58731 = f__58490__auto__();
(statearr_58731[(6)] = c__58489__auto___60256);

return statearr_58731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__58733){
var vec__58734 = p__58733;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58734,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58734,(1),null);
var job = vec__58734;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___60260 = n;
var __60261 = (0);
while(true){
if((__60261 < n__4613__auto___60260)){
var G__58737_60262 = type;
var G__58737_60263__$1 = (((G__58737_60262 instanceof cljs.core.Keyword))?G__58737_60262.fqn:null);
switch (G__58737_60263__$1) {
case "compute":
var c__58489__auto___60265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60261,c__58489__auto___60265,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async){
return (function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = ((function (__60261,c__58489__auto___60265,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async){
return (function (state_58750){
var state_val_58751 = (state_58750[(1)]);
if((state_val_58751 === (1))){
var state_58750__$1 = state_58750;
var statearr_58752_60266 = state_58750__$1;
(statearr_58752_60266[(2)] = null);

(statearr_58752_60266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58751 === (2))){
var state_58750__$1 = state_58750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58750__$1,(4),jobs);
} else {
if((state_val_58751 === (3))){
var inst_58748 = (state_58750[(2)]);
var state_58750__$1 = state_58750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58750__$1,inst_58748);
} else {
if((state_val_58751 === (4))){
var inst_58740 = (state_58750[(2)]);
var inst_58741 = process(inst_58740);
var state_58750__$1 = state_58750;
if(cljs.core.truth_(inst_58741)){
var statearr_58753_60267 = state_58750__$1;
(statearr_58753_60267[(1)] = (5));

} else {
var statearr_58754_60268 = state_58750__$1;
(statearr_58754_60268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58751 === (5))){
var state_58750__$1 = state_58750;
var statearr_58755_60269 = state_58750__$1;
(statearr_58755_60269[(2)] = null);

(statearr_58755_60269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58751 === (6))){
var state_58750__$1 = state_58750;
var statearr_58756_60270 = state_58750__$1;
(statearr_58756_60270[(2)] = null);

(statearr_58756_60270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58751 === (7))){
var inst_58746 = (state_58750[(2)]);
var state_58750__$1 = state_58750;
var statearr_58757_60271 = state_58750__$1;
(statearr_58757_60271[(2)] = inst_58746);

(statearr_58757_60271[(1)] = (3));


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
});})(__60261,c__58489__auto___60265,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async))
;
return ((function (__60261,switch__58392__auto__,c__58489__auto___60265,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0 = (function (){
var statearr_58758 = [null,null,null,null,null,null,null];
(statearr_58758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__);

(statearr_58758[(1)] = (1));

return statearr_58758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1 = (function (state_58750){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_58750);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e58759){var ex__58396__auto__ = e58759;
var statearr_58760_60272 = state_58750;
(statearr_58760_60272[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_58750[(4)]))){
var statearr_58761_60273 = state_58750;
(statearr_58761_60273[(1)] = cljs.core.first((state_58750[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60274 = state_58750;
state_58750 = G__60274;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__ = function(state_58750){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1.call(this,state_58750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__;
})()
;})(__60261,switch__58392__auto__,c__58489__auto___60265,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async))
})();
var state__58491__auto__ = (function (){var statearr_58772 = f__58490__auto__();
(statearr_58772[(6)] = c__58489__auto___60265);

return statearr_58772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
});})(__60261,c__58489__auto___60265,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async))
);


break;
case "async":
var c__58489__auto___60275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60261,c__58489__auto___60275,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async){
return (function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = ((function (__60261,c__58489__auto___60275,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async){
return (function (state_58822){
var state_val_58823 = (state_58822[(1)]);
if((state_val_58823 === (1))){
var state_58822__$1 = state_58822;
var statearr_58824_60276 = state_58822__$1;
(statearr_58824_60276[(2)] = null);

(statearr_58824_60276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58823 === (2))){
var state_58822__$1 = state_58822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58822__$1,(4),jobs);
} else {
if((state_val_58823 === (3))){
var inst_58820 = (state_58822[(2)]);
var state_58822__$1 = state_58822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58822__$1,inst_58820);
} else {
if((state_val_58823 === (4))){
var inst_58811 = (state_58822[(2)]);
var inst_58812 = async(inst_58811);
var state_58822__$1 = state_58822;
if(cljs.core.truth_(inst_58812)){
var statearr_58825_60277 = state_58822__$1;
(statearr_58825_60277[(1)] = (5));

} else {
var statearr_58826_60278 = state_58822__$1;
(statearr_58826_60278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58823 === (5))){
var state_58822__$1 = state_58822;
var statearr_58827_60279 = state_58822__$1;
(statearr_58827_60279[(2)] = null);

(statearr_58827_60279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58823 === (6))){
var state_58822__$1 = state_58822;
var statearr_58829_60280 = state_58822__$1;
(statearr_58829_60280[(2)] = null);

(statearr_58829_60280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58823 === (7))){
var inst_58818 = (state_58822[(2)]);
var state_58822__$1 = state_58822;
var statearr_58830_60281 = state_58822__$1;
(statearr_58830_60281[(2)] = inst_58818);

(statearr_58830_60281[(1)] = (3));


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
});})(__60261,c__58489__auto___60275,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async))
;
return ((function (__60261,switch__58392__auto__,c__58489__auto___60275,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0 = (function (){
var statearr_58831 = [null,null,null,null,null,null,null];
(statearr_58831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__);

(statearr_58831[(1)] = (1));

return statearr_58831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1 = (function (state_58822){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_58822);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e58832){var ex__58396__auto__ = e58832;
var statearr_58833_60282 = state_58822;
(statearr_58833_60282[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_58822[(4)]))){
var statearr_58834_60283 = state_58822;
(statearr_58834_60283[(1)] = cljs.core.first((state_58822[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60284 = state_58822;
state_58822 = G__60284;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__ = function(state_58822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1.call(this,state_58822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__;
})()
;})(__60261,switch__58392__auto__,c__58489__auto___60275,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async))
})();
var state__58491__auto__ = (function (){var statearr_58835 = f__58490__auto__();
(statearr_58835[(6)] = c__58489__auto___60275);

return statearr_58835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
});})(__60261,c__58489__auto___60275,G__58737_60262,G__58737_60263__$1,n__4613__auto___60260,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58737_60263__$1)].join('')));

}

var G__60285 = (__60261 + (1));
__60261 = G__60285;
continue;
} else {
}
break;
}

var c__58489__auto___60286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_58857){
var state_val_58858 = (state_58857[(1)]);
if((state_val_58858 === (7))){
var inst_58853 = (state_58857[(2)]);
var state_58857__$1 = state_58857;
var statearr_58859_60287 = state_58857__$1;
(statearr_58859_60287[(2)] = inst_58853);

(statearr_58859_60287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58858 === (1))){
var state_58857__$1 = state_58857;
var statearr_58860_60288 = state_58857__$1;
(statearr_58860_60288[(2)] = null);

(statearr_58860_60288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58858 === (4))){
var inst_58838 = (state_58857[(7)]);
var inst_58838__$1 = (state_58857[(2)]);
var inst_58839 = (inst_58838__$1 == null);
var state_58857__$1 = (function (){var statearr_58861 = state_58857;
(statearr_58861[(7)] = inst_58838__$1);

return statearr_58861;
})();
if(cljs.core.truth_(inst_58839)){
var statearr_58862_60289 = state_58857__$1;
(statearr_58862_60289[(1)] = (5));

} else {
var statearr_58863_60290 = state_58857__$1;
(statearr_58863_60290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58858 === (6))){
var inst_58843 = (state_58857[(8)]);
var inst_58838 = (state_58857[(7)]);
var inst_58843__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_58844 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58845 = [inst_58838,inst_58843__$1];
var inst_58846 = (new cljs.core.PersistentVector(null,2,(5),inst_58844,inst_58845,null));
var state_58857__$1 = (function (){var statearr_58864 = state_58857;
(statearr_58864[(8)] = inst_58843__$1);

return statearr_58864;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58857__$1,(8),jobs,inst_58846);
} else {
if((state_val_58858 === (3))){
var inst_58855 = (state_58857[(2)]);
var state_58857__$1 = state_58857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58857__$1,inst_58855);
} else {
if((state_val_58858 === (2))){
var state_58857__$1 = state_58857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58857__$1,(4),from);
} else {
if((state_val_58858 === (9))){
var inst_58850 = (state_58857[(2)]);
var state_58857__$1 = (function (){var statearr_58865 = state_58857;
(statearr_58865[(9)] = inst_58850);

return statearr_58865;
})();
var statearr_58866_60291 = state_58857__$1;
(statearr_58866_60291[(2)] = null);

(statearr_58866_60291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58858 === (5))){
var inst_58841 = cljs.core.async.close_BANG_(jobs);
var state_58857__$1 = state_58857;
var statearr_58867_60292 = state_58857__$1;
(statearr_58867_60292[(2)] = inst_58841);

(statearr_58867_60292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58858 === (8))){
var inst_58843 = (state_58857[(8)]);
var inst_58848 = (state_58857[(2)]);
var state_58857__$1 = (function (){var statearr_58868 = state_58857;
(statearr_58868[(10)] = inst_58848);

return statearr_58868;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58857__$1,(9),results,inst_58843);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0 = (function (){
var statearr_58869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__);

(statearr_58869[(1)] = (1));

return statearr_58869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1 = (function (state_58857){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_58857);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e58870){var ex__58396__auto__ = e58870;
var statearr_58871_60293 = state_58857;
(statearr_58871_60293[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_58857[(4)]))){
var statearr_58872_60294 = state_58857;
(statearr_58872_60294[(1)] = cljs.core.first((state_58857[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60295 = state_58857;
state_58857 = G__60295;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__ = function(state_58857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1.call(this,state_58857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_58873 = f__58490__auto__();
(statearr_58873[(6)] = c__58489__auto___60286);

return statearr_58873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


var c__58489__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_58911){
var state_val_58912 = (state_58911[(1)]);
if((state_val_58912 === (7))){
var inst_58907 = (state_58911[(2)]);
var state_58911__$1 = state_58911;
var statearr_58913_60296 = state_58911__$1;
(statearr_58913_60296[(2)] = inst_58907);

(statearr_58913_60296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (20))){
var state_58911__$1 = state_58911;
var statearr_58914_60297 = state_58911__$1;
(statearr_58914_60297[(2)] = null);

(statearr_58914_60297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (1))){
var state_58911__$1 = state_58911;
var statearr_58915_60298 = state_58911__$1;
(statearr_58915_60298[(2)] = null);

(statearr_58915_60298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (4))){
var inst_58876 = (state_58911[(7)]);
var inst_58876__$1 = (state_58911[(2)]);
var inst_58877 = (inst_58876__$1 == null);
var state_58911__$1 = (function (){var statearr_58916 = state_58911;
(statearr_58916[(7)] = inst_58876__$1);

return statearr_58916;
})();
if(cljs.core.truth_(inst_58877)){
var statearr_58918_60299 = state_58911__$1;
(statearr_58918_60299[(1)] = (5));

} else {
var statearr_58919_60300 = state_58911__$1;
(statearr_58919_60300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (15))){
var inst_58889 = (state_58911[(8)]);
var state_58911__$1 = state_58911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58911__$1,(18),to,inst_58889);
} else {
if((state_val_58912 === (21))){
var inst_58902 = (state_58911[(2)]);
var state_58911__$1 = state_58911;
var statearr_58921_60301 = state_58911__$1;
(statearr_58921_60301[(2)] = inst_58902);

(statearr_58921_60301[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (13))){
var inst_58904 = (state_58911[(2)]);
var state_58911__$1 = (function (){var statearr_58922 = state_58911;
(statearr_58922[(9)] = inst_58904);

return statearr_58922;
})();
var statearr_58923_60302 = state_58911__$1;
(statearr_58923_60302[(2)] = null);

(statearr_58923_60302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (6))){
var inst_58876 = (state_58911[(7)]);
var state_58911__$1 = state_58911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58911__$1,(11),inst_58876);
} else {
if((state_val_58912 === (17))){
var inst_58897 = (state_58911[(2)]);
var state_58911__$1 = state_58911;
if(cljs.core.truth_(inst_58897)){
var statearr_58927_60303 = state_58911__$1;
(statearr_58927_60303[(1)] = (19));

} else {
var statearr_58928_60304 = state_58911__$1;
(statearr_58928_60304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (3))){
var inst_58909 = (state_58911[(2)]);
var state_58911__$1 = state_58911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58911__$1,inst_58909);
} else {
if((state_val_58912 === (12))){
var inst_58886 = (state_58911[(10)]);
var state_58911__$1 = state_58911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58911__$1,(14),inst_58886);
} else {
if((state_val_58912 === (2))){
var state_58911__$1 = state_58911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58911__$1,(4),results);
} else {
if((state_val_58912 === (19))){
var state_58911__$1 = state_58911;
var statearr_58930_60305 = state_58911__$1;
(statearr_58930_60305[(2)] = null);

(statearr_58930_60305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (11))){
var inst_58886 = (state_58911[(2)]);
var state_58911__$1 = (function (){var statearr_58931 = state_58911;
(statearr_58931[(10)] = inst_58886);

return statearr_58931;
})();
var statearr_58932_60306 = state_58911__$1;
(statearr_58932_60306[(2)] = null);

(statearr_58932_60306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (9))){
var state_58911__$1 = state_58911;
var statearr_58934_60307 = state_58911__$1;
(statearr_58934_60307[(2)] = null);

(statearr_58934_60307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (5))){
var state_58911__$1 = state_58911;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58937_60308 = state_58911__$1;
(statearr_58937_60308[(1)] = (8));

} else {
var statearr_58939_60309 = state_58911__$1;
(statearr_58939_60309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (14))){
var inst_58889 = (state_58911[(8)]);
var inst_58889__$1 = (state_58911[(2)]);
var inst_58890 = (inst_58889__$1 == null);
var inst_58891 = cljs.core.not(inst_58890);
var state_58911__$1 = (function (){var statearr_58940 = state_58911;
(statearr_58940[(8)] = inst_58889__$1);

return statearr_58940;
})();
if(inst_58891){
var statearr_58941_60310 = state_58911__$1;
(statearr_58941_60310[(1)] = (15));

} else {
var statearr_58942_60311 = state_58911__$1;
(statearr_58942_60311[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (16))){
var state_58911__$1 = state_58911;
var statearr_58944_60312 = state_58911__$1;
(statearr_58944_60312[(2)] = false);

(statearr_58944_60312[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (10))){
var inst_58883 = (state_58911[(2)]);
var state_58911__$1 = state_58911;
var statearr_58951_60313 = state_58911__$1;
(statearr_58951_60313[(2)] = inst_58883);

(statearr_58951_60313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (18))){
var inst_58894 = (state_58911[(2)]);
var state_58911__$1 = state_58911;
var statearr_58952_60314 = state_58911__$1;
(statearr_58952_60314[(2)] = inst_58894);

(statearr_58952_60314[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (8))){
var inst_58880 = cljs.core.async.close_BANG_(to);
var state_58911__$1 = state_58911;
var statearr_58954_60315 = state_58911__$1;
(statearr_58954_60315[(2)] = inst_58880);

(statearr_58954_60315[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0 = (function (){
var statearr_58960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__);

(statearr_58960[(1)] = (1));

return statearr_58960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1 = (function (state_58911){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_58911);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e58963){var ex__58396__auto__ = e58963;
var statearr_58965_60316 = state_58911;
(statearr_58965_60316[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_58911[(4)]))){
var statearr_58966_60317 = state_58911;
(statearr_58966_60317[(1)] = cljs.core.first((state_58911[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60318 = state_58911;
state_58911 = G__60318;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__ = function(state_58911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1.call(this,state_58911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_58969 = f__58490__auto__();
(statearr_58969[(6)] = c__58489__auto__);

return statearr_58969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));

return c__58489__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__58975 = arguments.length;
switch (G__58975) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__58983 = arguments.length;
switch (G__58983) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__58994 = arguments.length;
switch (G__58994) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__58489__auto___60322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59030){
var state_val_59031 = (state_59030[(1)]);
if((state_val_59031 === (7))){
var inst_59026 = (state_59030[(2)]);
var state_59030__$1 = state_59030;
var statearr_59032_60323 = state_59030__$1;
(statearr_59032_60323[(2)] = inst_59026);

(statearr_59032_60323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59031 === (1))){
var state_59030__$1 = state_59030;
var statearr_59033_60324 = state_59030__$1;
(statearr_59033_60324[(2)] = null);

(statearr_59033_60324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59031 === (4))){
var inst_59006 = (state_59030[(7)]);
var inst_59006__$1 = (state_59030[(2)]);
var inst_59008 = (inst_59006__$1 == null);
var state_59030__$1 = (function (){var statearr_59034 = state_59030;
(statearr_59034[(7)] = inst_59006__$1);

return statearr_59034;
})();
if(cljs.core.truth_(inst_59008)){
var statearr_59035_60325 = state_59030__$1;
(statearr_59035_60325[(1)] = (5));

} else {
var statearr_59036_60326 = state_59030__$1;
(statearr_59036_60326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59031 === (13))){
var state_59030__$1 = state_59030;
var statearr_59037_60327 = state_59030__$1;
(statearr_59037_60327[(2)] = null);

(statearr_59037_60327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59031 === (6))){
var inst_59006 = (state_59030[(7)]);
var inst_59013 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59006) : p.call(null,inst_59006));
var state_59030__$1 = state_59030;
if(cljs.core.truth_(inst_59013)){
var statearr_59038_60328 = state_59030__$1;
(statearr_59038_60328[(1)] = (9));

} else {
var statearr_59039_60329 = state_59030__$1;
(statearr_59039_60329[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59031 === (3))){
var inst_59028 = (state_59030[(2)]);
var state_59030__$1 = state_59030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59030__$1,inst_59028);
} else {
if((state_val_59031 === (12))){
var state_59030__$1 = state_59030;
var statearr_59040_60330 = state_59030__$1;
(statearr_59040_60330[(2)] = null);

(statearr_59040_60330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59031 === (2))){
var state_59030__$1 = state_59030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59030__$1,(4),ch);
} else {
if((state_val_59031 === (11))){
var inst_59006 = (state_59030[(7)]);
var inst_59017 = (state_59030[(2)]);
var state_59030__$1 = state_59030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59030__$1,(8),inst_59017,inst_59006);
} else {
if((state_val_59031 === (9))){
var state_59030__$1 = state_59030;
var statearr_59041_60331 = state_59030__$1;
(statearr_59041_60331[(2)] = tc);

(statearr_59041_60331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59031 === (5))){
var inst_59010 = cljs.core.async.close_BANG_(tc);
var inst_59011 = cljs.core.async.close_BANG_(fc);
var state_59030__$1 = (function (){var statearr_59042 = state_59030;
(statearr_59042[(8)] = inst_59010);

return statearr_59042;
})();
var statearr_59043_60332 = state_59030__$1;
(statearr_59043_60332[(2)] = inst_59011);

(statearr_59043_60332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59031 === (14))){
var inst_59024 = (state_59030[(2)]);
var state_59030__$1 = state_59030;
var statearr_59044_60333 = state_59030__$1;
(statearr_59044_60333[(2)] = inst_59024);

(statearr_59044_60333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59031 === (10))){
var state_59030__$1 = state_59030;
var statearr_59045_60334 = state_59030__$1;
(statearr_59045_60334[(2)] = fc);

(statearr_59045_60334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59031 === (8))){
var inst_59019 = (state_59030[(2)]);
var state_59030__$1 = state_59030;
if(cljs.core.truth_(inst_59019)){
var statearr_59046_60335 = state_59030__$1;
(statearr_59046_60335[(1)] = (12));

} else {
var statearr_59047_60336 = state_59030__$1;
(statearr_59047_60336[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_59052 = [null,null,null,null,null,null,null,null,null];
(statearr_59052[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_59052[(1)] = (1));

return statearr_59052;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_59030){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59030);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59053){var ex__58396__auto__ = e59053;
var statearr_59054_60337 = state_59030;
(statearr_59054_60337[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59030[(4)]))){
var statearr_59055_60338 = state_59030;
(statearr_59055_60338[(1)] = cljs.core.first((state_59030[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60339 = state_59030;
state_59030 = G__60339;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_59030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_59030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59057 = f__58490__auto__();
(statearr_59057[(6)] = c__58489__auto___60322);

return statearr_59057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__58489__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59081){
var state_val_59082 = (state_59081[(1)]);
if((state_val_59082 === (7))){
var inst_59077 = (state_59081[(2)]);
var state_59081__$1 = state_59081;
var statearr_59084_60340 = state_59081__$1;
(statearr_59084_60340[(2)] = inst_59077);

(statearr_59084_60340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (1))){
var inst_59060 = init;
var inst_59061 = inst_59060;
var state_59081__$1 = (function (){var statearr_59088 = state_59081;
(statearr_59088[(7)] = inst_59061);

return statearr_59088;
})();
var statearr_59089_60343 = state_59081__$1;
(statearr_59089_60343[(2)] = null);

(statearr_59089_60343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (4))){
var inst_59064 = (state_59081[(8)]);
var inst_59064__$1 = (state_59081[(2)]);
var inst_59065 = (inst_59064__$1 == null);
var state_59081__$1 = (function (){var statearr_59090 = state_59081;
(statearr_59090[(8)] = inst_59064__$1);

return statearr_59090;
})();
if(cljs.core.truth_(inst_59065)){
var statearr_59091_60344 = state_59081__$1;
(statearr_59091_60344[(1)] = (5));

} else {
var statearr_59092_60345 = state_59081__$1;
(statearr_59092_60345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (6))){
var inst_59068 = (state_59081[(9)]);
var inst_59064 = (state_59081[(8)]);
var inst_59061 = (state_59081[(7)]);
var inst_59068__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_59061,inst_59064) : f.call(null,inst_59061,inst_59064));
var inst_59069 = cljs.core.reduced_QMARK_(inst_59068__$1);
var state_59081__$1 = (function (){var statearr_59093 = state_59081;
(statearr_59093[(9)] = inst_59068__$1);

return statearr_59093;
})();
if(inst_59069){
var statearr_59094_60349 = state_59081__$1;
(statearr_59094_60349[(1)] = (8));

} else {
var statearr_59095_60350 = state_59081__$1;
(statearr_59095_60350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (3))){
var inst_59079 = (state_59081[(2)]);
var state_59081__$1 = state_59081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59081__$1,inst_59079);
} else {
if((state_val_59082 === (2))){
var state_59081__$1 = state_59081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59081__$1,(4),ch);
} else {
if((state_val_59082 === (9))){
var inst_59068 = (state_59081[(9)]);
var inst_59061 = inst_59068;
var state_59081__$1 = (function (){var statearr_59096 = state_59081;
(statearr_59096[(7)] = inst_59061);

return statearr_59096;
})();
var statearr_59097_60352 = state_59081__$1;
(statearr_59097_60352[(2)] = null);

(statearr_59097_60352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (5))){
var inst_59061 = (state_59081[(7)]);
var state_59081__$1 = state_59081;
var statearr_59098_60353 = state_59081__$1;
(statearr_59098_60353[(2)] = inst_59061);

(statearr_59098_60353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (10))){
var inst_59075 = (state_59081[(2)]);
var state_59081__$1 = state_59081;
var statearr_59099_60354 = state_59081__$1;
(statearr_59099_60354[(2)] = inst_59075);

(statearr_59099_60354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59082 === (8))){
var inst_59068 = (state_59081[(9)]);
var inst_59071 = cljs.core.deref(inst_59068);
var state_59081__$1 = state_59081;
var statearr_59100_60355 = state_59081__$1;
(statearr_59100_60355[(2)] = inst_59071);

(statearr_59100_60355[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__58393__auto__ = null;
var cljs$core$async$reduce_$_state_machine__58393__auto____0 = (function (){
var statearr_59101 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59101[(0)] = cljs$core$async$reduce_$_state_machine__58393__auto__);

(statearr_59101[(1)] = (1));

return statearr_59101;
});
var cljs$core$async$reduce_$_state_machine__58393__auto____1 = (function (state_59081){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59081);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59102){var ex__58396__auto__ = e59102;
var statearr_59103_60360 = state_59081;
(statearr_59103_60360[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59081[(4)]))){
var statearr_59104_60361 = state_59081;
(statearr_59104_60361[(1)] = cljs.core.first((state_59081[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60362 = state_59081;
state_59081 = G__60362;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__58393__auto__ = function(state_59081){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__58393__auto____1.call(this,state_59081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__58393__auto____0;
cljs$core$async$reduce_$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__58393__auto____1;
return cljs$core$async$reduce_$_state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59105 = f__58490__auto__();
(statearr_59105[(6)] = c__58489__auto__);

return statearr_59105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));

return c__58489__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__58489__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59111){
var state_val_59112 = (state_59111[(1)]);
if((state_val_59112 === (1))){
var inst_59106 = cljs.core.async.reduce(f__$1,init,ch);
var state_59111__$1 = state_59111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59111__$1,(2),inst_59106);
} else {
if((state_val_59112 === (2))){
var inst_59108 = (state_59111[(2)]);
var inst_59109 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_59108) : f__$1.call(null,inst_59108));
var state_59111__$1 = state_59111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59111__$1,inst_59109);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__58393__auto__ = null;
var cljs$core$async$transduce_$_state_machine__58393__auto____0 = (function (){
var statearr_59113 = [null,null,null,null,null,null,null];
(statearr_59113[(0)] = cljs$core$async$transduce_$_state_machine__58393__auto__);

(statearr_59113[(1)] = (1));

return statearr_59113;
});
var cljs$core$async$transduce_$_state_machine__58393__auto____1 = (function (state_59111){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59111);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59114){var ex__58396__auto__ = e59114;
var statearr_59115_60366 = state_59111;
(statearr_59115_60366[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59111[(4)]))){
var statearr_59116_60367 = state_59111;
(statearr_59116_60367[(1)] = cljs.core.first((state_59111[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60370 = state_59111;
state_59111 = G__60370;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__58393__auto__ = function(state_59111){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__58393__auto____1.call(this,state_59111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__58393__auto____0;
cljs$core$async$transduce_$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__58393__auto____1;
return cljs$core$async$transduce_$_state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59117 = f__58490__auto__();
(statearr_59117[(6)] = c__58489__auto__);

return statearr_59117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));

return c__58489__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__59119 = arguments.length;
switch (G__59119) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__58489__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59144){
var state_val_59145 = (state_59144[(1)]);
if((state_val_59145 === (7))){
var inst_59126 = (state_59144[(2)]);
var state_59144__$1 = state_59144;
var statearr_59146_60374 = state_59144__$1;
(statearr_59146_60374[(2)] = inst_59126);

(statearr_59146_60374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59145 === (1))){
var inst_59120 = cljs.core.seq(coll);
var inst_59121 = inst_59120;
var state_59144__$1 = (function (){var statearr_59147 = state_59144;
(statearr_59147[(7)] = inst_59121);

return statearr_59147;
})();
var statearr_59148_60377 = state_59144__$1;
(statearr_59148_60377[(2)] = null);

(statearr_59148_60377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59145 === (4))){
var inst_59121 = (state_59144[(7)]);
var inst_59124 = cljs.core.first(inst_59121);
var state_59144__$1 = state_59144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59144__$1,(7),ch,inst_59124);
} else {
if((state_val_59145 === (13))){
var inst_59138 = (state_59144[(2)]);
var state_59144__$1 = state_59144;
var statearr_59149_60378 = state_59144__$1;
(statearr_59149_60378[(2)] = inst_59138);

(statearr_59149_60378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59145 === (6))){
var inst_59129 = (state_59144[(2)]);
var state_59144__$1 = state_59144;
if(cljs.core.truth_(inst_59129)){
var statearr_59150_60379 = state_59144__$1;
(statearr_59150_60379[(1)] = (8));

} else {
var statearr_59151_60380 = state_59144__$1;
(statearr_59151_60380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59145 === (3))){
var inst_59142 = (state_59144[(2)]);
var state_59144__$1 = state_59144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59144__$1,inst_59142);
} else {
if((state_val_59145 === (12))){
var state_59144__$1 = state_59144;
var statearr_59152_60381 = state_59144__$1;
(statearr_59152_60381[(2)] = null);

(statearr_59152_60381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59145 === (2))){
var inst_59121 = (state_59144[(7)]);
var state_59144__$1 = state_59144;
if(cljs.core.truth_(inst_59121)){
var statearr_59153_60382 = state_59144__$1;
(statearr_59153_60382[(1)] = (4));

} else {
var statearr_59154_60383 = state_59144__$1;
(statearr_59154_60383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59145 === (11))){
var inst_59135 = cljs.core.async.close_BANG_(ch);
var state_59144__$1 = state_59144;
var statearr_59155_60384 = state_59144__$1;
(statearr_59155_60384[(2)] = inst_59135);

(statearr_59155_60384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59145 === (9))){
var state_59144__$1 = state_59144;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59156_60385 = state_59144__$1;
(statearr_59156_60385[(1)] = (11));

} else {
var statearr_59157_60386 = state_59144__$1;
(statearr_59157_60386[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59145 === (5))){
var inst_59121 = (state_59144[(7)]);
var state_59144__$1 = state_59144;
var statearr_59158_60387 = state_59144__$1;
(statearr_59158_60387[(2)] = inst_59121);

(statearr_59158_60387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59145 === (10))){
var inst_59140 = (state_59144[(2)]);
var state_59144__$1 = state_59144;
var statearr_59159_60388 = state_59144__$1;
(statearr_59159_60388[(2)] = inst_59140);

(statearr_59159_60388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59145 === (8))){
var inst_59121 = (state_59144[(7)]);
var inst_59131 = cljs.core.next(inst_59121);
var inst_59121__$1 = inst_59131;
var state_59144__$1 = (function (){var statearr_59160 = state_59144;
(statearr_59160[(7)] = inst_59121__$1);

return statearr_59160;
})();
var statearr_59161_60389 = state_59144__$1;
(statearr_59161_60389[(2)] = null);

(statearr_59161_60389[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_59162 = [null,null,null,null,null,null,null,null];
(statearr_59162[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_59162[(1)] = (1));

return statearr_59162;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_59144){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59144);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59163){var ex__58396__auto__ = e59163;
var statearr_59164_60390 = state_59144;
(statearr_59164_60390[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59144[(4)]))){
var statearr_59165_60391 = state_59144;
(statearr_59165_60391[(1)] = cljs.core.first((state_59144[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60392 = state_59144;
state_59144 = G__60392;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_59144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_59144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59166 = f__58490__auto__();
(statearr_59166[(6)] = c__58489__auto__);

return statearr_59166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));

return c__58489__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__59168 = arguments.length;
switch (G__59168) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_60394 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_60394(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_60395 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_60395(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_60398 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_60398(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_60399 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_60399(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59169 = (function (ch,cs,meta59170){
this.ch = ch;
this.cs = cs;
this.meta59170 = meta59170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59171,meta59170__$1){
var self__ = this;
var _59171__$1 = this;
return (new cljs.core.async.t_cljs$core$async59169(self__.ch,self__.cs,meta59170__$1));
}));

(cljs.core.async.t_cljs$core$async59169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59171){
var self__ = this;
var _59171__$1 = this;
return self__.meta59170;
}));

(cljs.core.async.t_cljs$core$async59169.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59169.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59169.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async59169.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async59169.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async59169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59170","meta59170",1021631853,null)], null);
}));

(cljs.core.async.t_cljs$core$async59169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59169");

(cljs.core.async.t_cljs$core$async59169.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59169.
 */
cljs.core.async.__GT_t_cljs$core$async59169 = (function cljs$core$async$mult_$___GT_t_cljs$core$async59169(ch__$1,cs__$1,meta59170){
return (new cljs.core.async.t_cljs$core$async59169(ch__$1,cs__$1,meta59170));
});

}

return (new cljs.core.async.t_cljs$core$async59169(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__58489__auto___60401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59304){
var state_val_59305 = (state_59304[(1)]);
if((state_val_59305 === (7))){
var inst_59300 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59306_60403 = state_59304__$1;
(statearr_59306_60403[(2)] = inst_59300);

(statearr_59306_60403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (20))){
var inst_59205 = (state_59304[(7)]);
var inst_59217 = cljs.core.first(inst_59205);
var inst_59218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59217,(0),null);
var inst_59219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59217,(1),null);
var state_59304__$1 = (function (){var statearr_59307 = state_59304;
(statearr_59307[(8)] = inst_59218);

return statearr_59307;
})();
if(cljs.core.truth_(inst_59219)){
var statearr_59308_60405 = state_59304__$1;
(statearr_59308_60405[(1)] = (22));

} else {
var statearr_59309_60406 = state_59304__$1;
(statearr_59309_60406[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (27))){
var inst_59249 = (state_59304[(9)]);
var inst_59174 = (state_59304[(10)]);
var inst_59247 = (state_59304[(11)]);
var inst_59254 = (state_59304[(12)]);
var inst_59254__$1 = cljs.core._nth(inst_59247,inst_59249);
var inst_59255 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59254__$1,inst_59174,done);
var state_59304__$1 = (function (){var statearr_59310 = state_59304;
(statearr_59310[(12)] = inst_59254__$1);

return statearr_59310;
})();
if(cljs.core.truth_(inst_59255)){
var statearr_59311_60407 = state_59304__$1;
(statearr_59311_60407[(1)] = (30));

} else {
var statearr_59312_60409 = state_59304__$1;
(statearr_59312_60409[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (1))){
var state_59304__$1 = state_59304;
var statearr_59313_60410 = state_59304__$1;
(statearr_59313_60410[(2)] = null);

(statearr_59313_60410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (24))){
var inst_59205 = (state_59304[(7)]);
var inst_59224 = (state_59304[(2)]);
var inst_59225 = cljs.core.next(inst_59205);
var inst_59183 = inst_59225;
var inst_59184 = null;
var inst_59185 = (0);
var inst_59186 = (0);
var state_59304__$1 = (function (){var statearr_59314 = state_59304;
(statearr_59314[(13)] = inst_59183);

(statearr_59314[(14)] = inst_59185);

(statearr_59314[(15)] = inst_59224);

(statearr_59314[(16)] = inst_59186);

(statearr_59314[(17)] = inst_59184);

return statearr_59314;
})();
var statearr_59315_60412 = state_59304__$1;
(statearr_59315_60412[(2)] = null);

(statearr_59315_60412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (39))){
var state_59304__$1 = state_59304;
var statearr_59319_60413 = state_59304__$1;
(statearr_59319_60413[(2)] = null);

(statearr_59319_60413[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (4))){
var inst_59174 = (state_59304[(10)]);
var inst_59174__$1 = (state_59304[(2)]);
var inst_59175 = (inst_59174__$1 == null);
var state_59304__$1 = (function (){var statearr_59320 = state_59304;
(statearr_59320[(10)] = inst_59174__$1);

return statearr_59320;
})();
if(cljs.core.truth_(inst_59175)){
var statearr_59321_60415 = state_59304__$1;
(statearr_59321_60415[(1)] = (5));

} else {
var statearr_59322_60416 = state_59304__$1;
(statearr_59322_60416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (15))){
var inst_59183 = (state_59304[(13)]);
var inst_59185 = (state_59304[(14)]);
var inst_59186 = (state_59304[(16)]);
var inst_59184 = (state_59304[(17)]);
var inst_59201 = (state_59304[(2)]);
var inst_59202 = (inst_59186 + (1));
var tmp59316 = inst_59183;
var tmp59317 = inst_59185;
var tmp59318 = inst_59184;
var inst_59183__$1 = tmp59316;
var inst_59184__$1 = tmp59318;
var inst_59185__$1 = tmp59317;
var inst_59186__$1 = inst_59202;
var state_59304__$1 = (function (){var statearr_59323 = state_59304;
(statearr_59323[(13)] = inst_59183__$1);

(statearr_59323[(14)] = inst_59185__$1);

(statearr_59323[(16)] = inst_59186__$1);

(statearr_59323[(18)] = inst_59201);

(statearr_59323[(17)] = inst_59184__$1);

return statearr_59323;
})();
var statearr_59324_60418 = state_59304__$1;
(statearr_59324_60418[(2)] = null);

(statearr_59324_60418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (21))){
var inst_59228 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59328_60419 = state_59304__$1;
(statearr_59328_60419[(2)] = inst_59228);

(statearr_59328_60419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (31))){
var inst_59254 = (state_59304[(12)]);
var inst_59258 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59254);
var state_59304__$1 = state_59304;
var statearr_59329_60420 = state_59304__$1;
(statearr_59329_60420[(2)] = inst_59258);

(statearr_59329_60420[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (32))){
var inst_59249 = (state_59304[(9)]);
var inst_59246 = (state_59304[(19)]);
var inst_59248 = (state_59304[(20)]);
var inst_59247 = (state_59304[(11)]);
var inst_59260 = (state_59304[(2)]);
var inst_59261 = (inst_59249 + (1));
var tmp59325 = inst_59246;
var tmp59326 = inst_59248;
var tmp59327 = inst_59247;
var inst_59246__$1 = tmp59325;
var inst_59247__$1 = tmp59327;
var inst_59248__$1 = tmp59326;
var inst_59249__$1 = inst_59261;
var state_59304__$1 = (function (){var statearr_59330 = state_59304;
(statearr_59330[(9)] = inst_59249__$1);

(statearr_59330[(19)] = inst_59246__$1);

(statearr_59330[(20)] = inst_59248__$1);

(statearr_59330[(21)] = inst_59260);

(statearr_59330[(11)] = inst_59247__$1);

return statearr_59330;
})();
var statearr_59331_60422 = state_59304__$1;
(statearr_59331_60422[(2)] = null);

(statearr_59331_60422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (40))){
var inst_59273 = (state_59304[(22)]);
var inst_59277 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59273);
var state_59304__$1 = state_59304;
var statearr_59332_60424 = state_59304__$1;
(statearr_59332_60424[(2)] = inst_59277);

(statearr_59332_60424[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (33))){
var inst_59264 = (state_59304[(23)]);
var inst_59266 = cljs.core.chunked_seq_QMARK_(inst_59264);
var state_59304__$1 = state_59304;
if(inst_59266){
var statearr_59333_60425 = state_59304__$1;
(statearr_59333_60425[(1)] = (36));

} else {
var statearr_59334_60426 = state_59304__$1;
(statearr_59334_60426[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (13))){
var inst_59195 = (state_59304[(24)]);
var inst_59198 = cljs.core.async.close_BANG_(inst_59195);
var state_59304__$1 = state_59304;
var statearr_59335_60427 = state_59304__$1;
(statearr_59335_60427[(2)] = inst_59198);

(statearr_59335_60427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (22))){
var inst_59218 = (state_59304[(8)]);
var inst_59221 = cljs.core.async.close_BANG_(inst_59218);
var state_59304__$1 = state_59304;
var statearr_59336_60428 = state_59304__$1;
(statearr_59336_60428[(2)] = inst_59221);

(statearr_59336_60428[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (36))){
var inst_59264 = (state_59304[(23)]);
var inst_59268 = cljs.core.chunk_first(inst_59264);
var inst_59269 = cljs.core.chunk_rest(inst_59264);
var inst_59270 = cljs.core.count(inst_59268);
var inst_59246 = inst_59269;
var inst_59247 = inst_59268;
var inst_59248 = inst_59270;
var inst_59249 = (0);
var state_59304__$1 = (function (){var statearr_59337 = state_59304;
(statearr_59337[(9)] = inst_59249);

(statearr_59337[(19)] = inst_59246);

(statearr_59337[(20)] = inst_59248);

(statearr_59337[(11)] = inst_59247);

return statearr_59337;
})();
var statearr_59338_60429 = state_59304__$1;
(statearr_59338_60429[(2)] = null);

(statearr_59338_60429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (41))){
var inst_59264 = (state_59304[(23)]);
var inst_59279 = (state_59304[(2)]);
var inst_59280 = cljs.core.next(inst_59264);
var inst_59246 = inst_59280;
var inst_59247 = null;
var inst_59248 = (0);
var inst_59249 = (0);
var state_59304__$1 = (function (){var statearr_59339 = state_59304;
(statearr_59339[(9)] = inst_59249);

(statearr_59339[(19)] = inst_59246);

(statearr_59339[(20)] = inst_59248);

(statearr_59339[(25)] = inst_59279);

(statearr_59339[(11)] = inst_59247);

return statearr_59339;
})();
var statearr_59340_60430 = state_59304__$1;
(statearr_59340_60430[(2)] = null);

(statearr_59340_60430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (43))){
var state_59304__$1 = state_59304;
var statearr_59341_60432 = state_59304__$1;
(statearr_59341_60432[(2)] = null);

(statearr_59341_60432[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (29))){
var inst_59288 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59342_60434 = state_59304__$1;
(statearr_59342_60434[(2)] = inst_59288);

(statearr_59342_60434[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (44))){
var inst_59297 = (state_59304[(2)]);
var state_59304__$1 = (function (){var statearr_59343 = state_59304;
(statearr_59343[(26)] = inst_59297);

return statearr_59343;
})();
var statearr_59344_60435 = state_59304__$1;
(statearr_59344_60435[(2)] = null);

(statearr_59344_60435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (6))){
var inst_59238 = (state_59304[(27)]);
var inst_59237 = cljs.core.deref(cs);
var inst_59238__$1 = cljs.core.keys(inst_59237);
var inst_59239 = cljs.core.count(inst_59238__$1);
var inst_59240 = cljs.core.reset_BANG_(dctr,inst_59239);
var inst_59245 = cljs.core.seq(inst_59238__$1);
var inst_59246 = inst_59245;
var inst_59247 = null;
var inst_59248 = (0);
var inst_59249 = (0);
var state_59304__$1 = (function (){var statearr_59345 = state_59304;
(statearr_59345[(9)] = inst_59249);

(statearr_59345[(27)] = inst_59238__$1);

(statearr_59345[(19)] = inst_59246);

(statearr_59345[(20)] = inst_59248);

(statearr_59345[(28)] = inst_59240);

(statearr_59345[(11)] = inst_59247);

return statearr_59345;
})();
var statearr_59346_60436 = state_59304__$1;
(statearr_59346_60436[(2)] = null);

(statearr_59346_60436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (28))){
var inst_59264 = (state_59304[(23)]);
var inst_59246 = (state_59304[(19)]);
var inst_59264__$1 = cljs.core.seq(inst_59246);
var state_59304__$1 = (function (){var statearr_59347 = state_59304;
(statearr_59347[(23)] = inst_59264__$1);

return statearr_59347;
})();
if(inst_59264__$1){
var statearr_59348_60437 = state_59304__$1;
(statearr_59348_60437[(1)] = (33));

} else {
var statearr_59349_60438 = state_59304__$1;
(statearr_59349_60438[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (25))){
var inst_59249 = (state_59304[(9)]);
var inst_59248 = (state_59304[(20)]);
var inst_59251 = (inst_59249 < inst_59248);
var inst_59252 = inst_59251;
var state_59304__$1 = state_59304;
if(cljs.core.truth_(inst_59252)){
var statearr_59350_60439 = state_59304__$1;
(statearr_59350_60439[(1)] = (27));

} else {
var statearr_59351_60440 = state_59304__$1;
(statearr_59351_60440[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (34))){
var state_59304__$1 = state_59304;
var statearr_59352_60441 = state_59304__$1;
(statearr_59352_60441[(2)] = null);

(statearr_59352_60441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (17))){
var state_59304__$1 = state_59304;
var statearr_59353_60443 = state_59304__$1;
(statearr_59353_60443[(2)] = null);

(statearr_59353_60443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (3))){
var inst_59302 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59304__$1,inst_59302);
} else {
if((state_val_59305 === (12))){
var inst_59233 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59354_60445 = state_59304__$1;
(statearr_59354_60445[(2)] = inst_59233);

(statearr_59354_60445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (2))){
var state_59304__$1 = state_59304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59304__$1,(4),ch);
} else {
if((state_val_59305 === (23))){
var state_59304__$1 = state_59304;
var statearr_59355_60446 = state_59304__$1;
(statearr_59355_60446[(2)] = null);

(statearr_59355_60446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (35))){
var inst_59286 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59356_60447 = state_59304__$1;
(statearr_59356_60447[(2)] = inst_59286);

(statearr_59356_60447[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (19))){
var inst_59205 = (state_59304[(7)]);
var inst_59209 = cljs.core.chunk_first(inst_59205);
var inst_59210 = cljs.core.chunk_rest(inst_59205);
var inst_59211 = cljs.core.count(inst_59209);
var inst_59183 = inst_59210;
var inst_59184 = inst_59209;
var inst_59185 = inst_59211;
var inst_59186 = (0);
var state_59304__$1 = (function (){var statearr_59357 = state_59304;
(statearr_59357[(13)] = inst_59183);

(statearr_59357[(14)] = inst_59185);

(statearr_59357[(16)] = inst_59186);

(statearr_59357[(17)] = inst_59184);

return statearr_59357;
})();
var statearr_59358_60448 = state_59304__$1;
(statearr_59358_60448[(2)] = null);

(statearr_59358_60448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (11))){
var inst_59205 = (state_59304[(7)]);
var inst_59183 = (state_59304[(13)]);
var inst_59205__$1 = cljs.core.seq(inst_59183);
var state_59304__$1 = (function (){var statearr_59359 = state_59304;
(statearr_59359[(7)] = inst_59205__$1);

return statearr_59359;
})();
if(inst_59205__$1){
var statearr_59360_60449 = state_59304__$1;
(statearr_59360_60449[(1)] = (16));

} else {
var statearr_59361_60450 = state_59304__$1;
(statearr_59361_60450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (9))){
var inst_59235 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59362_60451 = state_59304__$1;
(statearr_59362_60451[(2)] = inst_59235);

(statearr_59362_60451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (5))){
var inst_59181 = cljs.core.deref(cs);
var inst_59182 = cljs.core.seq(inst_59181);
var inst_59183 = inst_59182;
var inst_59184 = null;
var inst_59185 = (0);
var inst_59186 = (0);
var state_59304__$1 = (function (){var statearr_59363 = state_59304;
(statearr_59363[(13)] = inst_59183);

(statearr_59363[(14)] = inst_59185);

(statearr_59363[(16)] = inst_59186);

(statearr_59363[(17)] = inst_59184);

return statearr_59363;
})();
var statearr_59364_60453 = state_59304__$1;
(statearr_59364_60453[(2)] = null);

(statearr_59364_60453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (14))){
var state_59304__$1 = state_59304;
var statearr_59365_60454 = state_59304__$1;
(statearr_59365_60454[(2)] = null);

(statearr_59365_60454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (45))){
var inst_59294 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59366_60455 = state_59304__$1;
(statearr_59366_60455[(2)] = inst_59294);

(statearr_59366_60455[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (26))){
var inst_59238 = (state_59304[(27)]);
var inst_59290 = (state_59304[(2)]);
var inst_59291 = cljs.core.seq(inst_59238);
var state_59304__$1 = (function (){var statearr_59367 = state_59304;
(statearr_59367[(29)] = inst_59290);

return statearr_59367;
})();
if(inst_59291){
var statearr_59368_60456 = state_59304__$1;
(statearr_59368_60456[(1)] = (42));

} else {
var statearr_59369_60457 = state_59304__$1;
(statearr_59369_60457[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (16))){
var inst_59205 = (state_59304[(7)]);
var inst_59207 = cljs.core.chunked_seq_QMARK_(inst_59205);
var state_59304__$1 = state_59304;
if(inst_59207){
var statearr_59370_60458 = state_59304__$1;
(statearr_59370_60458[(1)] = (19));

} else {
var statearr_59371_60459 = state_59304__$1;
(statearr_59371_60459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (38))){
var inst_59283 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59372_60460 = state_59304__$1;
(statearr_59372_60460[(2)] = inst_59283);

(statearr_59372_60460[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (30))){
var state_59304__$1 = state_59304;
var statearr_59373_60465 = state_59304__$1;
(statearr_59373_60465[(2)] = null);

(statearr_59373_60465[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (10))){
var inst_59186 = (state_59304[(16)]);
var inst_59184 = (state_59304[(17)]);
var inst_59194 = cljs.core._nth(inst_59184,inst_59186);
var inst_59195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59194,(0),null);
var inst_59196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59194,(1),null);
var state_59304__$1 = (function (){var statearr_59374 = state_59304;
(statearr_59374[(24)] = inst_59195);

return statearr_59374;
})();
if(cljs.core.truth_(inst_59196)){
var statearr_59375_60466 = state_59304__$1;
(statearr_59375_60466[(1)] = (13));

} else {
var statearr_59376_60467 = state_59304__$1;
(statearr_59376_60467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (18))){
var inst_59231 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59377_60468 = state_59304__$1;
(statearr_59377_60468[(2)] = inst_59231);

(statearr_59377_60468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (42))){
var state_59304__$1 = state_59304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59304__$1,(45),dchan);
} else {
if((state_val_59305 === (37))){
var inst_59264 = (state_59304[(23)]);
var inst_59273 = (state_59304[(22)]);
var inst_59174 = (state_59304[(10)]);
var inst_59273__$1 = cljs.core.first(inst_59264);
var inst_59274 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59273__$1,inst_59174,done);
var state_59304__$1 = (function (){var statearr_59378 = state_59304;
(statearr_59378[(22)] = inst_59273__$1);

return statearr_59378;
})();
if(cljs.core.truth_(inst_59274)){
var statearr_59379_60469 = state_59304__$1;
(statearr_59379_60469[(1)] = (39));

} else {
var statearr_59380_60470 = state_59304__$1;
(statearr_59380_60470[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (8))){
var inst_59185 = (state_59304[(14)]);
var inst_59186 = (state_59304[(16)]);
var inst_59188 = (inst_59186 < inst_59185);
var inst_59189 = inst_59188;
var state_59304__$1 = state_59304;
if(cljs.core.truth_(inst_59189)){
var statearr_59381_60471 = state_59304__$1;
(statearr_59381_60471[(1)] = (10));

} else {
var statearr_59382_60472 = state_59304__$1;
(statearr_59382_60472[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__58393__auto__ = null;
var cljs$core$async$mult_$_state_machine__58393__auto____0 = (function (){
var statearr_59383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59383[(0)] = cljs$core$async$mult_$_state_machine__58393__auto__);

(statearr_59383[(1)] = (1));

return statearr_59383;
});
var cljs$core$async$mult_$_state_machine__58393__auto____1 = (function (state_59304){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59304);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59384){var ex__58396__auto__ = e59384;
var statearr_59385_60473 = state_59304;
(statearr_59385_60473[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59304[(4)]))){
var statearr_59386_60474 = state_59304;
(statearr_59386_60474[(1)] = cljs.core.first((state_59304[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60475 = state_59304;
state_59304 = G__60475;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__58393__auto__ = function(state_59304){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__58393__auto____1.call(this,state_59304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__58393__auto____0;
cljs$core$async$mult_$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__58393__auto____1;
return cljs$core$async$mult_$_state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59387 = f__58490__auto__();
(statearr_59387[(6)] = c__58489__auto___60401);

return statearr_59387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__59389 = arguments.length;
switch (G__59389) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_60479 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_60479(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_60480 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_60480(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_60481 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_60481(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_60486 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_60486(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_60490 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_60490(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60497 = arguments.length;
var i__4737__auto___60498 = (0);
while(true){
if((i__4737__auto___60498 < len__4736__auto___60497)){
args__4742__auto__.push((arguments[i__4737__auto___60498]));

var G__60499 = (i__4737__auto___60498 + (1));
i__4737__auto___60498 = G__60499;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59394){
var map__59395 = p__59394;
var map__59395__$1 = (((((!((map__59395 == null))))?(((((map__59395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59395):map__59395);
var opts = map__59395__$1;
var statearr_59397_60503 = state;
(statearr_59397_60503[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_59398_60504 = state;
(statearr_59398_60504[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_59399_60505 = state;
(statearr_59399_60505[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq59390){
var G__59391 = cljs.core.first(seq59390);
var seq59390__$1 = cljs.core.next(seq59390);
var G__59392 = cljs.core.first(seq59390__$1);
var seq59390__$2 = cljs.core.next(seq59390__$1);
var G__59393 = cljs.core.first(seq59390__$2);
var seq59390__$3 = cljs.core.next(seq59390__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59391,G__59392,G__59393,seq59390__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59400 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta59401){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta59401 = meta59401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59402,meta59401__$1){
var self__ = this;
var _59402__$1 = this;
return (new cljs.core.async.t_cljs$core$async59400(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta59401__$1));
}));

(cljs.core.async.t_cljs$core$async59400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59402){
var self__ = this;
var _59402__$1 = this;
return self__.meta59401;
}));

(cljs.core.async.t_cljs$core$async59400.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async59400.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59400.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59400.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59400.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59400.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59400.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta59401","meta59401",221248022,null)], null);
}));

(cljs.core.async.t_cljs$core$async59400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59400");

(cljs.core.async.t_cljs$core$async59400.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59400.
 */
cljs.core.async.__GT_t_cljs$core$async59400 = (function cljs$core$async$mix_$___GT_t_cljs$core$async59400(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59401){
return (new cljs.core.async.t_cljs$core$async59400(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59401));
});

}

return (new cljs.core.async.t_cljs$core$async59400(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58489__auto___60523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59504){
var state_val_59505 = (state_59504[(1)]);
if((state_val_59505 === (7))){
var inst_59419 = (state_59504[(2)]);
var state_59504__$1 = state_59504;
var statearr_59506_60524 = state_59504__$1;
(statearr_59506_60524[(2)] = inst_59419);

(statearr_59506_60524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (20))){
var inst_59431 = (state_59504[(7)]);
var state_59504__$1 = state_59504;
var statearr_59507_60525 = state_59504__$1;
(statearr_59507_60525[(2)] = inst_59431);

(statearr_59507_60525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (27))){
var state_59504__$1 = state_59504;
var statearr_59508_60526 = state_59504__$1;
(statearr_59508_60526[(2)] = null);

(statearr_59508_60526[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (1))){
var inst_59406 = (state_59504[(8)]);
var inst_59406__$1 = calc_state();
var inst_59408 = (inst_59406__$1 == null);
var inst_59409 = cljs.core.not(inst_59408);
var state_59504__$1 = (function (){var statearr_59509 = state_59504;
(statearr_59509[(8)] = inst_59406__$1);

return statearr_59509;
})();
if(inst_59409){
var statearr_59510_60527 = state_59504__$1;
(statearr_59510_60527[(1)] = (2));

} else {
var statearr_59511_60528 = state_59504__$1;
(statearr_59511_60528[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (24))){
var inst_59464 = (state_59504[(9)]);
var inst_59455 = (state_59504[(10)]);
var inst_59478 = (state_59504[(11)]);
var inst_59478__$1 = (inst_59455.cljs$core$IFn$_invoke$arity$1 ? inst_59455.cljs$core$IFn$_invoke$arity$1(inst_59464) : inst_59455.call(null,inst_59464));
var state_59504__$1 = (function (){var statearr_59512 = state_59504;
(statearr_59512[(11)] = inst_59478__$1);

return statearr_59512;
})();
if(cljs.core.truth_(inst_59478__$1)){
var statearr_59513_60529 = state_59504__$1;
(statearr_59513_60529[(1)] = (29));

} else {
var statearr_59514_60530 = state_59504__$1;
(statearr_59514_60530[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (4))){
var inst_59422 = (state_59504[(2)]);
var state_59504__$1 = state_59504;
if(cljs.core.truth_(inst_59422)){
var statearr_59515_60531 = state_59504__$1;
(statearr_59515_60531[(1)] = (8));

} else {
var statearr_59516_60532 = state_59504__$1;
(statearr_59516_60532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (15))){
var inst_59449 = (state_59504[(2)]);
var state_59504__$1 = state_59504;
if(cljs.core.truth_(inst_59449)){
var statearr_59517_60533 = state_59504__$1;
(statearr_59517_60533[(1)] = (19));

} else {
var statearr_59518_60534 = state_59504__$1;
(statearr_59518_60534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (21))){
var inst_59454 = (state_59504[(12)]);
var inst_59454__$1 = (state_59504[(2)]);
var inst_59455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59454__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59454__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59454__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59504__$1 = (function (){var statearr_59519 = state_59504;
(statearr_59519[(13)] = inst_59456);

(statearr_59519[(10)] = inst_59455);

(statearr_59519[(12)] = inst_59454__$1);

return statearr_59519;
})();
return cljs.core.async.ioc_alts_BANG_(state_59504__$1,(22),inst_59457);
} else {
if((state_val_59505 === (31))){
var inst_59486 = (state_59504[(2)]);
var state_59504__$1 = state_59504;
if(cljs.core.truth_(inst_59486)){
var statearr_59520_60535 = state_59504__$1;
(statearr_59520_60535[(1)] = (32));

} else {
var statearr_59521_60536 = state_59504__$1;
(statearr_59521_60536[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (32))){
var inst_59463 = (state_59504[(14)]);
var state_59504__$1 = state_59504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59504__$1,(35),out,inst_59463);
} else {
if((state_val_59505 === (33))){
var inst_59454 = (state_59504[(12)]);
var inst_59431 = inst_59454;
var state_59504__$1 = (function (){var statearr_59522 = state_59504;
(statearr_59522[(7)] = inst_59431);

return statearr_59522;
})();
var statearr_59523_60537 = state_59504__$1;
(statearr_59523_60537[(2)] = null);

(statearr_59523_60537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (13))){
var inst_59431 = (state_59504[(7)]);
var inst_59438 = inst_59431.cljs$lang$protocol_mask$partition0$;
var inst_59439 = (inst_59438 & (64));
var inst_59440 = inst_59431.cljs$core$ISeq$;
var inst_59441 = (cljs.core.PROTOCOL_SENTINEL === inst_59440);
var inst_59442 = ((inst_59439) || (inst_59441));
var state_59504__$1 = state_59504;
if(cljs.core.truth_(inst_59442)){
var statearr_59524_60538 = state_59504__$1;
(statearr_59524_60538[(1)] = (16));

} else {
var statearr_59525_60539 = state_59504__$1;
(statearr_59525_60539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (22))){
var inst_59463 = (state_59504[(14)]);
var inst_59464 = (state_59504[(9)]);
var inst_59462 = (state_59504[(2)]);
var inst_59463__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59462,(0),null);
var inst_59464__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59462,(1),null);
var inst_59465 = (inst_59463__$1 == null);
var inst_59466 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59464__$1,change);
var inst_59467 = ((inst_59465) || (inst_59466));
var state_59504__$1 = (function (){var statearr_59526 = state_59504;
(statearr_59526[(14)] = inst_59463__$1);

(statearr_59526[(9)] = inst_59464__$1);

return statearr_59526;
})();
if(cljs.core.truth_(inst_59467)){
var statearr_59527_60540 = state_59504__$1;
(statearr_59527_60540[(1)] = (23));

} else {
var statearr_59528_60541 = state_59504__$1;
(statearr_59528_60541[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (36))){
var inst_59454 = (state_59504[(12)]);
var inst_59431 = inst_59454;
var state_59504__$1 = (function (){var statearr_59529 = state_59504;
(statearr_59529[(7)] = inst_59431);

return statearr_59529;
})();
var statearr_59530_60542 = state_59504__$1;
(statearr_59530_60542[(2)] = null);

(statearr_59530_60542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (29))){
var inst_59478 = (state_59504[(11)]);
var state_59504__$1 = state_59504;
var statearr_59531_60545 = state_59504__$1;
(statearr_59531_60545[(2)] = inst_59478);

(statearr_59531_60545[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (6))){
var state_59504__$1 = state_59504;
var statearr_59532_60547 = state_59504__$1;
(statearr_59532_60547[(2)] = false);

(statearr_59532_60547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (28))){
var inst_59474 = (state_59504[(2)]);
var inst_59475 = calc_state();
var inst_59431 = inst_59475;
var state_59504__$1 = (function (){var statearr_59533 = state_59504;
(statearr_59533[(7)] = inst_59431);

(statearr_59533[(15)] = inst_59474);

return statearr_59533;
})();
var statearr_59534_60548 = state_59504__$1;
(statearr_59534_60548[(2)] = null);

(statearr_59534_60548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (25))){
var inst_59500 = (state_59504[(2)]);
var state_59504__$1 = state_59504;
var statearr_59535_60552 = state_59504__$1;
(statearr_59535_60552[(2)] = inst_59500);

(statearr_59535_60552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (34))){
var inst_59498 = (state_59504[(2)]);
var state_59504__$1 = state_59504;
var statearr_59536_60554 = state_59504__$1;
(statearr_59536_60554[(2)] = inst_59498);

(statearr_59536_60554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (17))){
var state_59504__$1 = state_59504;
var statearr_59537_60555 = state_59504__$1;
(statearr_59537_60555[(2)] = false);

(statearr_59537_60555[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (3))){
var state_59504__$1 = state_59504;
var statearr_59538_60556 = state_59504__$1;
(statearr_59538_60556[(2)] = false);

(statearr_59538_60556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (12))){
var inst_59502 = (state_59504[(2)]);
var state_59504__$1 = state_59504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59504__$1,inst_59502);
} else {
if((state_val_59505 === (2))){
var inst_59406 = (state_59504[(8)]);
var inst_59411 = inst_59406.cljs$lang$protocol_mask$partition0$;
var inst_59412 = (inst_59411 & (64));
var inst_59413 = inst_59406.cljs$core$ISeq$;
var inst_59414 = (cljs.core.PROTOCOL_SENTINEL === inst_59413);
var inst_59415 = ((inst_59412) || (inst_59414));
var state_59504__$1 = state_59504;
if(cljs.core.truth_(inst_59415)){
var statearr_59539_60559 = state_59504__$1;
(statearr_59539_60559[(1)] = (5));

} else {
var statearr_59540_60560 = state_59504__$1;
(statearr_59540_60560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (23))){
var inst_59463 = (state_59504[(14)]);
var inst_59469 = (inst_59463 == null);
var state_59504__$1 = state_59504;
if(cljs.core.truth_(inst_59469)){
var statearr_59541_60561 = state_59504__$1;
(statearr_59541_60561[(1)] = (26));

} else {
var statearr_59542_60562 = state_59504__$1;
(statearr_59542_60562[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (35))){
var inst_59489 = (state_59504[(2)]);
var state_59504__$1 = state_59504;
if(cljs.core.truth_(inst_59489)){
var statearr_59543_60563 = state_59504__$1;
(statearr_59543_60563[(1)] = (36));

} else {
var statearr_59544_60564 = state_59504__$1;
(statearr_59544_60564[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (19))){
var inst_59431 = (state_59504[(7)]);
var inst_59451 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59431);
var state_59504__$1 = state_59504;
var statearr_59545_60565 = state_59504__$1;
(statearr_59545_60565[(2)] = inst_59451);

(statearr_59545_60565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (11))){
var inst_59431 = (state_59504[(7)]);
var inst_59435 = (inst_59431 == null);
var inst_59436 = cljs.core.not(inst_59435);
var state_59504__$1 = state_59504;
if(inst_59436){
var statearr_59546_60566 = state_59504__$1;
(statearr_59546_60566[(1)] = (13));

} else {
var statearr_59547_60567 = state_59504__$1;
(statearr_59547_60567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (9))){
var inst_59406 = (state_59504[(8)]);
var state_59504__$1 = state_59504;
var statearr_59548_60572 = state_59504__$1;
(statearr_59548_60572[(2)] = inst_59406);

(statearr_59548_60572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (5))){
var state_59504__$1 = state_59504;
var statearr_59549_60573 = state_59504__$1;
(statearr_59549_60573[(2)] = true);

(statearr_59549_60573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (14))){
var state_59504__$1 = state_59504;
var statearr_59550_60574 = state_59504__$1;
(statearr_59550_60574[(2)] = false);

(statearr_59550_60574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (26))){
var inst_59464 = (state_59504[(9)]);
var inst_59471 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_59464);
var state_59504__$1 = state_59504;
var statearr_59551_60577 = state_59504__$1;
(statearr_59551_60577[(2)] = inst_59471);

(statearr_59551_60577[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (16))){
var state_59504__$1 = state_59504;
var statearr_59552_60580 = state_59504__$1;
(statearr_59552_60580[(2)] = true);

(statearr_59552_60580[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (38))){
var inst_59494 = (state_59504[(2)]);
var state_59504__$1 = state_59504;
var statearr_59553_60581 = state_59504__$1;
(statearr_59553_60581[(2)] = inst_59494);

(statearr_59553_60581[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (30))){
var inst_59456 = (state_59504[(13)]);
var inst_59464 = (state_59504[(9)]);
var inst_59455 = (state_59504[(10)]);
var inst_59481 = cljs.core.empty_QMARK_(inst_59455);
var inst_59482 = (inst_59456.cljs$core$IFn$_invoke$arity$1 ? inst_59456.cljs$core$IFn$_invoke$arity$1(inst_59464) : inst_59456.call(null,inst_59464));
var inst_59483 = cljs.core.not(inst_59482);
var inst_59484 = ((inst_59481) && (inst_59483));
var state_59504__$1 = state_59504;
var statearr_59554_60582 = state_59504__$1;
(statearr_59554_60582[(2)] = inst_59484);

(statearr_59554_60582[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (10))){
var inst_59406 = (state_59504[(8)]);
var inst_59427 = (state_59504[(2)]);
var inst_59428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59427,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59427,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59427,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59431 = inst_59406;
var state_59504__$1 = (function (){var statearr_59555 = state_59504;
(statearr_59555[(16)] = inst_59429);

(statearr_59555[(7)] = inst_59431);

(statearr_59555[(17)] = inst_59430);

(statearr_59555[(18)] = inst_59428);

return statearr_59555;
})();
var statearr_59556_60590 = state_59504__$1;
(statearr_59556_60590[(2)] = null);

(statearr_59556_60590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (18))){
var inst_59446 = (state_59504[(2)]);
var state_59504__$1 = state_59504;
var statearr_59557_60597 = state_59504__$1;
(statearr_59557_60597[(2)] = inst_59446);

(statearr_59557_60597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (37))){
var state_59504__$1 = state_59504;
var statearr_59558_60598 = state_59504__$1;
(statearr_59558_60598[(2)] = null);

(statearr_59558_60598[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59505 === (8))){
var inst_59406 = (state_59504[(8)]);
var inst_59424 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59406);
var state_59504__$1 = state_59504;
var statearr_59559_60599 = state_59504__$1;
(statearr_59559_60599[(2)] = inst_59424);

(statearr_59559_60599[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__58393__auto__ = null;
var cljs$core$async$mix_$_state_machine__58393__auto____0 = (function (){
var statearr_59560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59560[(0)] = cljs$core$async$mix_$_state_machine__58393__auto__);

(statearr_59560[(1)] = (1));

return statearr_59560;
});
var cljs$core$async$mix_$_state_machine__58393__auto____1 = (function (state_59504){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59504);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59561){var ex__58396__auto__ = e59561;
var statearr_59562_60600 = state_59504;
(statearr_59562_60600[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59504[(4)]))){
var statearr_59563_60601 = state_59504;
(statearr_59563_60601[(1)] = cljs.core.first((state_59504[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60602 = state_59504;
state_59504 = G__60602;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__58393__auto__ = function(state_59504){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__58393__auto____1.call(this,state_59504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__58393__auto____0;
cljs$core$async$mix_$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__58393__auto____1;
return cljs$core$async$mix_$_state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59564 = f__58490__auto__();
(statearr_59564[(6)] = c__58489__auto___60523);

return statearr_59564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_60603 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_60603(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_60604 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_60604(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_60611 = (function() {
var G__60612 = null;
var G__60612__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__60612__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__60612 = function(p,v){
switch(arguments.length){
case 1:
return G__60612__1.call(this,p);
case 2:
return G__60612__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60612.cljs$core$IFn$_invoke$arity$1 = G__60612__1;
G__60612.cljs$core$IFn$_invoke$arity$2 = G__60612__2;
return G__60612;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__59566 = arguments.length;
switch (G__59566) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60611(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60611(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__59569 = arguments.length;
switch (G__59569) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__59567_SHARP_){
if(cljs.core.truth_((p1__59567_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__59567_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__59567_SHARP_.call(null,topic)))){
return p1__59567_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59567_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59570 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59571){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59571 = meta59571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59572,meta59571__$1){
var self__ = this;
var _59572__$1 = this;
return (new cljs.core.async.t_cljs$core$async59570(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59571__$1));
}));

(cljs.core.async.t_cljs$core$async59570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59572){
var self__ = this;
var _59572__$1 = this;
return self__.meta59571;
}));

(cljs.core.async.t_cljs$core$async59570.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59570.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59570.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59570.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async59570.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async59570.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async59570.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async59570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59571","meta59571",-1565981467,null)], null);
}));

(cljs.core.async.t_cljs$core$async59570.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59570");

(cljs.core.async.t_cljs$core$async59570.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59570");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59570.
 */
cljs.core.async.__GT_t_cljs$core$async59570 = (function cljs$core$async$__GT_t_cljs$core$async59570(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59571){
return (new cljs.core.async.t_cljs$core$async59570(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59571));
});

}

return (new cljs.core.async.t_cljs$core$async59570(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58489__auto___60627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59644){
var state_val_59645 = (state_59644[(1)]);
if((state_val_59645 === (7))){
var inst_59640 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59646_60628 = state_59644__$1;
(statearr_59646_60628[(2)] = inst_59640);

(statearr_59646_60628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (20))){
var state_59644__$1 = state_59644;
var statearr_59647_60629 = state_59644__$1;
(statearr_59647_60629[(2)] = null);

(statearr_59647_60629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (1))){
var state_59644__$1 = state_59644;
var statearr_59648_60630 = state_59644__$1;
(statearr_59648_60630[(2)] = null);

(statearr_59648_60630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (24))){
var inst_59623 = (state_59644[(7)]);
var inst_59632 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_59623);
var state_59644__$1 = state_59644;
var statearr_59649_60631 = state_59644__$1;
(statearr_59649_60631[(2)] = inst_59632);

(statearr_59649_60631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (4))){
var inst_59575 = (state_59644[(8)]);
var inst_59575__$1 = (state_59644[(2)]);
var inst_59576 = (inst_59575__$1 == null);
var state_59644__$1 = (function (){var statearr_59650 = state_59644;
(statearr_59650[(8)] = inst_59575__$1);

return statearr_59650;
})();
if(cljs.core.truth_(inst_59576)){
var statearr_59651_60632 = state_59644__$1;
(statearr_59651_60632[(1)] = (5));

} else {
var statearr_59652_60633 = state_59644__$1;
(statearr_59652_60633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (15))){
var inst_59617 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59653_60634 = state_59644__$1;
(statearr_59653_60634[(2)] = inst_59617);

(statearr_59653_60634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (21))){
var inst_59637 = (state_59644[(2)]);
var state_59644__$1 = (function (){var statearr_59654 = state_59644;
(statearr_59654[(9)] = inst_59637);

return statearr_59654;
})();
var statearr_59655_60635 = state_59644__$1;
(statearr_59655_60635[(2)] = null);

(statearr_59655_60635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (13))){
var inst_59599 = (state_59644[(10)]);
var inst_59601 = cljs.core.chunked_seq_QMARK_(inst_59599);
var state_59644__$1 = state_59644;
if(inst_59601){
var statearr_59656_60636 = state_59644__$1;
(statearr_59656_60636[(1)] = (16));

} else {
var statearr_59657_60637 = state_59644__$1;
(statearr_59657_60637[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (22))){
var inst_59629 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
if(cljs.core.truth_(inst_59629)){
var statearr_59658_60638 = state_59644__$1;
(statearr_59658_60638[(1)] = (23));

} else {
var statearr_59659_60639 = state_59644__$1;
(statearr_59659_60639[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (6))){
var inst_59625 = (state_59644[(11)]);
var inst_59575 = (state_59644[(8)]);
var inst_59623 = (state_59644[(7)]);
var inst_59623__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_59575) : topic_fn.call(null,inst_59575));
var inst_59624 = cljs.core.deref(mults);
var inst_59625__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59624,inst_59623__$1);
var state_59644__$1 = (function (){var statearr_59660 = state_59644;
(statearr_59660[(11)] = inst_59625__$1);

(statearr_59660[(7)] = inst_59623__$1);

return statearr_59660;
})();
if(cljs.core.truth_(inst_59625__$1)){
var statearr_59661_60640 = state_59644__$1;
(statearr_59661_60640[(1)] = (19));

} else {
var statearr_59662_60641 = state_59644__$1;
(statearr_59662_60641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (25))){
var inst_59634 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59663_60642 = state_59644__$1;
(statearr_59663_60642[(2)] = inst_59634);

(statearr_59663_60642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (17))){
var inst_59599 = (state_59644[(10)]);
var inst_59608 = cljs.core.first(inst_59599);
var inst_59609 = cljs.core.async.muxch_STAR_(inst_59608);
var inst_59610 = cljs.core.async.close_BANG_(inst_59609);
var inst_59611 = cljs.core.next(inst_59599);
var inst_59585 = inst_59611;
var inst_59586 = null;
var inst_59587 = (0);
var inst_59588 = (0);
var state_59644__$1 = (function (){var statearr_59664 = state_59644;
(statearr_59664[(12)] = inst_59610);

(statearr_59664[(13)] = inst_59586);

(statearr_59664[(14)] = inst_59585);

(statearr_59664[(15)] = inst_59587);

(statearr_59664[(16)] = inst_59588);

return statearr_59664;
})();
var statearr_59665_60643 = state_59644__$1;
(statearr_59665_60643[(2)] = null);

(statearr_59665_60643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (3))){
var inst_59642 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59644__$1,inst_59642);
} else {
if((state_val_59645 === (12))){
var inst_59619 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59666_60644 = state_59644__$1;
(statearr_59666_60644[(2)] = inst_59619);

(statearr_59666_60644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (2))){
var state_59644__$1 = state_59644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59644__$1,(4),ch);
} else {
if((state_val_59645 === (23))){
var state_59644__$1 = state_59644;
var statearr_59667_60645 = state_59644__$1;
(statearr_59667_60645[(2)] = null);

(statearr_59667_60645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (19))){
var inst_59625 = (state_59644[(11)]);
var inst_59575 = (state_59644[(8)]);
var inst_59627 = cljs.core.async.muxch_STAR_(inst_59625);
var state_59644__$1 = state_59644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59644__$1,(22),inst_59627,inst_59575);
} else {
if((state_val_59645 === (11))){
var inst_59599 = (state_59644[(10)]);
var inst_59585 = (state_59644[(14)]);
var inst_59599__$1 = cljs.core.seq(inst_59585);
var state_59644__$1 = (function (){var statearr_59668 = state_59644;
(statearr_59668[(10)] = inst_59599__$1);

return statearr_59668;
})();
if(inst_59599__$1){
var statearr_59669_60646 = state_59644__$1;
(statearr_59669_60646[(1)] = (13));

} else {
var statearr_59670_60648 = state_59644__$1;
(statearr_59670_60648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (9))){
var inst_59621 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59671_60649 = state_59644__$1;
(statearr_59671_60649[(2)] = inst_59621);

(statearr_59671_60649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (5))){
var inst_59582 = cljs.core.deref(mults);
var inst_59583 = cljs.core.vals(inst_59582);
var inst_59584 = cljs.core.seq(inst_59583);
var inst_59585 = inst_59584;
var inst_59586 = null;
var inst_59587 = (0);
var inst_59588 = (0);
var state_59644__$1 = (function (){var statearr_59672 = state_59644;
(statearr_59672[(13)] = inst_59586);

(statearr_59672[(14)] = inst_59585);

(statearr_59672[(15)] = inst_59587);

(statearr_59672[(16)] = inst_59588);

return statearr_59672;
})();
var statearr_59673_60654 = state_59644__$1;
(statearr_59673_60654[(2)] = null);

(statearr_59673_60654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (14))){
var state_59644__$1 = state_59644;
var statearr_59677_60655 = state_59644__$1;
(statearr_59677_60655[(2)] = null);

(statearr_59677_60655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (16))){
var inst_59599 = (state_59644[(10)]);
var inst_59603 = cljs.core.chunk_first(inst_59599);
var inst_59604 = cljs.core.chunk_rest(inst_59599);
var inst_59605 = cljs.core.count(inst_59603);
var inst_59585 = inst_59604;
var inst_59586 = inst_59603;
var inst_59587 = inst_59605;
var inst_59588 = (0);
var state_59644__$1 = (function (){var statearr_59678 = state_59644;
(statearr_59678[(13)] = inst_59586);

(statearr_59678[(14)] = inst_59585);

(statearr_59678[(15)] = inst_59587);

(statearr_59678[(16)] = inst_59588);

return statearr_59678;
})();
var statearr_59679_60656 = state_59644__$1;
(statearr_59679_60656[(2)] = null);

(statearr_59679_60656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (10))){
var inst_59586 = (state_59644[(13)]);
var inst_59585 = (state_59644[(14)]);
var inst_59587 = (state_59644[(15)]);
var inst_59588 = (state_59644[(16)]);
var inst_59593 = cljs.core._nth(inst_59586,inst_59588);
var inst_59594 = cljs.core.async.muxch_STAR_(inst_59593);
var inst_59595 = cljs.core.async.close_BANG_(inst_59594);
var inst_59596 = (inst_59588 + (1));
var tmp59674 = inst_59586;
var tmp59675 = inst_59585;
var tmp59676 = inst_59587;
var inst_59585__$1 = tmp59675;
var inst_59586__$1 = tmp59674;
var inst_59587__$1 = tmp59676;
var inst_59588__$1 = inst_59596;
var state_59644__$1 = (function (){var statearr_59680 = state_59644;
(statearr_59680[(13)] = inst_59586__$1);

(statearr_59680[(14)] = inst_59585__$1);

(statearr_59680[(17)] = inst_59595);

(statearr_59680[(15)] = inst_59587__$1);

(statearr_59680[(16)] = inst_59588__$1);

return statearr_59680;
})();
var statearr_59681_60657 = state_59644__$1;
(statearr_59681_60657[(2)] = null);

(statearr_59681_60657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (18))){
var inst_59614 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59682_60658 = state_59644__$1;
(statearr_59682_60658[(2)] = inst_59614);

(statearr_59682_60658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (8))){
var inst_59587 = (state_59644[(15)]);
var inst_59588 = (state_59644[(16)]);
var inst_59590 = (inst_59588 < inst_59587);
var inst_59591 = inst_59590;
var state_59644__$1 = state_59644;
if(cljs.core.truth_(inst_59591)){
var statearr_59683_60659 = state_59644__$1;
(statearr_59683_60659[(1)] = (10));

} else {
var statearr_59684_60660 = state_59644__$1;
(statearr_59684_60660[(1)] = (11));

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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_59685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59685[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_59685[(1)] = (1));

return statearr_59685;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_59644){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59644);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59686){var ex__58396__auto__ = e59686;
var statearr_59687_60663 = state_59644;
(statearr_59687_60663[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59644[(4)]))){
var statearr_59688_60664 = state_59644;
(statearr_59688_60664[(1)] = cljs.core.first((state_59644[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60665 = state_59644;
state_59644 = G__60665;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_59644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_59644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59689 = f__58490__auto__();
(statearr_59689[(6)] = c__58489__auto___60627);

return statearr_59689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__59691 = arguments.length;
switch (G__59691) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__59693 = arguments.length;
switch (G__59693) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__59695 = arguments.length;
switch (G__59695) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__58489__auto___60671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59738){
var state_val_59739 = (state_59738[(1)]);
if((state_val_59739 === (7))){
var state_59738__$1 = state_59738;
var statearr_59740_60672 = state_59738__$1;
(statearr_59740_60672[(2)] = null);

(statearr_59740_60672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (1))){
var state_59738__$1 = state_59738;
var statearr_59741_60673 = state_59738__$1;
(statearr_59741_60673[(2)] = null);

(statearr_59741_60673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (4))){
var inst_59699 = (state_59738[(7)]);
var inst_59698 = (state_59738[(8)]);
var inst_59701 = (inst_59699 < inst_59698);
var state_59738__$1 = state_59738;
if(cljs.core.truth_(inst_59701)){
var statearr_59742_60674 = state_59738__$1;
(statearr_59742_60674[(1)] = (6));

} else {
var statearr_59743_60675 = state_59738__$1;
(statearr_59743_60675[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (15))){
var inst_59724 = (state_59738[(9)]);
var inst_59729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_59724);
var state_59738__$1 = state_59738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59738__$1,(17),out,inst_59729);
} else {
if((state_val_59739 === (13))){
var inst_59724 = (state_59738[(9)]);
var inst_59724__$1 = (state_59738[(2)]);
var inst_59725 = cljs.core.some(cljs.core.nil_QMARK_,inst_59724__$1);
var state_59738__$1 = (function (){var statearr_59744 = state_59738;
(statearr_59744[(9)] = inst_59724__$1);

return statearr_59744;
})();
if(cljs.core.truth_(inst_59725)){
var statearr_59745_60678 = state_59738__$1;
(statearr_59745_60678[(1)] = (14));

} else {
var statearr_59746_60679 = state_59738__$1;
(statearr_59746_60679[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (6))){
var state_59738__$1 = state_59738;
var statearr_59747_60680 = state_59738__$1;
(statearr_59747_60680[(2)] = null);

(statearr_59747_60680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (17))){
var inst_59731 = (state_59738[(2)]);
var state_59738__$1 = (function (){var statearr_59749 = state_59738;
(statearr_59749[(10)] = inst_59731);

return statearr_59749;
})();
var statearr_59750_60681 = state_59738__$1;
(statearr_59750_60681[(2)] = null);

(statearr_59750_60681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (3))){
var inst_59736 = (state_59738[(2)]);
var state_59738__$1 = state_59738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59738__$1,inst_59736);
} else {
if((state_val_59739 === (12))){
var _ = (function (){var statearr_59751 = state_59738;
(statearr_59751[(4)] = cljs.core.rest((state_59738[(4)])));

return statearr_59751;
})();
var state_59738__$1 = state_59738;
var ex59748 = (state_59738__$1[(2)]);
var statearr_59752_60682 = state_59738__$1;
(statearr_59752_60682[(5)] = ex59748);


if((ex59748 instanceof Object)){
var statearr_59753_60683 = state_59738__$1;
(statearr_59753_60683[(1)] = (11));

(statearr_59753_60683[(5)] = null);

} else {
throw ex59748;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (2))){
var inst_59697 = cljs.core.reset_BANG_(dctr,cnt);
var inst_59698 = cnt;
var inst_59699 = (0);
var state_59738__$1 = (function (){var statearr_59754 = state_59738;
(statearr_59754[(7)] = inst_59699);

(statearr_59754[(11)] = inst_59697);

(statearr_59754[(8)] = inst_59698);

return statearr_59754;
})();
var statearr_59755_60684 = state_59738__$1;
(statearr_59755_60684[(2)] = null);

(statearr_59755_60684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (11))){
var inst_59703 = (state_59738[(2)]);
var inst_59704 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_59738__$1 = (function (){var statearr_59756 = state_59738;
(statearr_59756[(12)] = inst_59703);

return statearr_59756;
})();
var statearr_59757_60685 = state_59738__$1;
(statearr_59757_60685[(2)] = inst_59704);

(statearr_59757_60685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (9))){
var inst_59699 = (state_59738[(7)]);
var _ = (function (){var statearr_59758 = state_59738;
(statearr_59758[(4)] = cljs.core.cons((12),(state_59738[(4)])));

return statearr_59758;
})();
var inst_59710 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_59699) : chs__$1.call(null,inst_59699));
var inst_59711 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_59699) : done.call(null,inst_59699));
var inst_59712 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59710,inst_59711);
var ___$1 = (function (){var statearr_59759 = state_59738;
(statearr_59759[(4)] = cljs.core.rest((state_59738[(4)])));

return statearr_59759;
})();
var state_59738__$1 = state_59738;
var statearr_59760_60686 = state_59738__$1;
(statearr_59760_60686[(2)] = inst_59712);

(statearr_59760_60686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (5))){
var inst_59722 = (state_59738[(2)]);
var state_59738__$1 = (function (){var statearr_59761 = state_59738;
(statearr_59761[(13)] = inst_59722);

return statearr_59761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59738__$1,(13),dchan);
} else {
if((state_val_59739 === (14))){
var inst_59727 = cljs.core.async.close_BANG_(out);
var state_59738__$1 = state_59738;
var statearr_59762_60687 = state_59738__$1;
(statearr_59762_60687[(2)] = inst_59727);

(statearr_59762_60687[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (16))){
var inst_59734 = (state_59738[(2)]);
var state_59738__$1 = state_59738;
var statearr_59763_60688 = state_59738__$1;
(statearr_59763_60688[(2)] = inst_59734);

(statearr_59763_60688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (10))){
var inst_59699 = (state_59738[(7)]);
var inst_59715 = (state_59738[(2)]);
var inst_59716 = (inst_59699 + (1));
var inst_59699__$1 = inst_59716;
var state_59738__$1 = (function (){var statearr_59764 = state_59738;
(statearr_59764[(7)] = inst_59699__$1);

(statearr_59764[(14)] = inst_59715);

return statearr_59764;
})();
var statearr_59765_60689 = state_59738__$1;
(statearr_59765_60689[(2)] = null);

(statearr_59765_60689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59739 === (8))){
var inst_59720 = (state_59738[(2)]);
var state_59738__$1 = state_59738;
var statearr_59766_60690 = state_59738__$1;
(statearr_59766_60690[(2)] = inst_59720);

(statearr_59766_60690[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_59767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59767[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_59767[(1)] = (1));

return statearr_59767;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_59738){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59738);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59768){var ex__58396__auto__ = e59768;
var statearr_59769_60692 = state_59738;
(statearr_59769_60692[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59738[(4)]))){
var statearr_59770_60693 = state_59738;
(statearr_59770_60693[(1)] = cljs.core.first((state_59738[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60694 = state_59738;
state_59738 = G__60694;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_59738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_59738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59771 = f__58490__auto__();
(statearr_59771[(6)] = c__58489__auto___60671);

return statearr_59771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__59774 = arguments.length;
switch (G__59774) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58489__auto___60700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59806){
var state_val_59807 = (state_59806[(1)]);
if((state_val_59807 === (7))){
var inst_59785 = (state_59806[(7)]);
var inst_59786 = (state_59806[(8)]);
var inst_59785__$1 = (state_59806[(2)]);
var inst_59786__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59785__$1,(0),null);
var inst_59787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59785__$1,(1),null);
var inst_59788 = (inst_59786__$1 == null);
var state_59806__$1 = (function (){var statearr_59808 = state_59806;
(statearr_59808[(7)] = inst_59785__$1);

(statearr_59808[(9)] = inst_59787);

(statearr_59808[(8)] = inst_59786__$1);

return statearr_59808;
})();
if(cljs.core.truth_(inst_59788)){
var statearr_59809_60701 = state_59806__$1;
(statearr_59809_60701[(1)] = (8));

} else {
var statearr_59810_60702 = state_59806__$1;
(statearr_59810_60702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59807 === (1))){
var inst_59775 = cljs.core.vec(chs);
var inst_59776 = inst_59775;
var state_59806__$1 = (function (){var statearr_59811 = state_59806;
(statearr_59811[(10)] = inst_59776);

return statearr_59811;
})();
var statearr_59812_60703 = state_59806__$1;
(statearr_59812_60703[(2)] = null);

(statearr_59812_60703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59807 === (4))){
var inst_59776 = (state_59806[(10)]);
var state_59806__$1 = state_59806;
return cljs.core.async.ioc_alts_BANG_(state_59806__$1,(7),inst_59776);
} else {
if((state_val_59807 === (6))){
var inst_59802 = (state_59806[(2)]);
var state_59806__$1 = state_59806;
var statearr_59813_60704 = state_59806__$1;
(statearr_59813_60704[(2)] = inst_59802);

(statearr_59813_60704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59807 === (3))){
var inst_59804 = (state_59806[(2)]);
var state_59806__$1 = state_59806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59806__$1,inst_59804);
} else {
if((state_val_59807 === (2))){
var inst_59776 = (state_59806[(10)]);
var inst_59778 = cljs.core.count(inst_59776);
var inst_59779 = (inst_59778 > (0));
var state_59806__$1 = state_59806;
if(cljs.core.truth_(inst_59779)){
var statearr_59815_60705 = state_59806__$1;
(statearr_59815_60705[(1)] = (4));

} else {
var statearr_59816_60706 = state_59806__$1;
(statearr_59816_60706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59807 === (11))){
var inst_59776 = (state_59806[(10)]);
var inst_59795 = (state_59806[(2)]);
var tmp59814 = inst_59776;
var inst_59776__$1 = tmp59814;
var state_59806__$1 = (function (){var statearr_59817 = state_59806;
(statearr_59817[(10)] = inst_59776__$1);

(statearr_59817[(11)] = inst_59795);

return statearr_59817;
})();
var statearr_59818_60707 = state_59806__$1;
(statearr_59818_60707[(2)] = null);

(statearr_59818_60707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59807 === (9))){
var inst_59786 = (state_59806[(8)]);
var state_59806__$1 = state_59806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59806__$1,(11),out,inst_59786);
} else {
if((state_val_59807 === (5))){
var inst_59800 = cljs.core.async.close_BANG_(out);
var state_59806__$1 = state_59806;
var statearr_59819_60708 = state_59806__$1;
(statearr_59819_60708[(2)] = inst_59800);

(statearr_59819_60708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59807 === (10))){
var inst_59798 = (state_59806[(2)]);
var state_59806__$1 = state_59806;
var statearr_59820_60713 = state_59806__$1;
(statearr_59820_60713[(2)] = inst_59798);

(statearr_59820_60713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59807 === (8))){
var inst_59776 = (state_59806[(10)]);
var inst_59785 = (state_59806[(7)]);
var inst_59787 = (state_59806[(9)]);
var inst_59786 = (state_59806[(8)]);
var inst_59790 = (function (){var cs = inst_59776;
var vec__59781 = inst_59785;
var v = inst_59786;
var c = inst_59787;
return (function (p1__59772_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__59772_SHARP_);
});
})();
var inst_59791 = cljs.core.filterv(inst_59790,inst_59776);
var inst_59776__$1 = inst_59791;
var state_59806__$1 = (function (){var statearr_59821 = state_59806;
(statearr_59821[(10)] = inst_59776__$1);

return statearr_59821;
})();
var statearr_59822_60717 = state_59806__$1;
(statearr_59822_60717[(2)] = null);

(statearr_59822_60717[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_59823 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59823[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_59823[(1)] = (1));

return statearr_59823;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_59806){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59806);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59824){var ex__58396__auto__ = e59824;
var statearr_59825_60721 = state_59806;
(statearr_59825_60721[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59806[(4)]))){
var statearr_59826_60722 = state_59806;
(statearr_59826_60722[(1)] = cljs.core.first((state_59806[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60723 = state_59806;
state_59806 = G__60723;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_59806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_59806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59827 = f__58490__auto__();
(statearr_59827[(6)] = c__58489__auto___60700);

return statearr_59827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__59829 = arguments.length;
switch (G__59829) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58489__auto___60731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59853){
var state_val_59854 = (state_59853[(1)]);
if((state_val_59854 === (7))){
var inst_59835 = (state_59853[(7)]);
var inst_59835__$1 = (state_59853[(2)]);
var inst_59836 = (inst_59835__$1 == null);
var inst_59837 = cljs.core.not(inst_59836);
var state_59853__$1 = (function (){var statearr_59855 = state_59853;
(statearr_59855[(7)] = inst_59835__$1);

return statearr_59855;
})();
if(inst_59837){
var statearr_59856_60736 = state_59853__$1;
(statearr_59856_60736[(1)] = (8));

} else {
var statearr_59857_60737 = state_59853__$1;
(statearr_59857_60737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59854 === (1))){
var inst_59830 = (0);
var state_59853__$1 = (function (){var statearr_59858 = state_59853;
(statearr_59858[(8)] = inst_59830);

return statearr_59858;
})();
var statearr_59859_60738 = state_59853__$1;
(statearr_59859_60738[(2)] = null);

(statearr_59859_60738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59854 === (4))){
var state_59853__$1 = state_59853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59853__$1,(7),ch);
} else {
if((state_val_59854 === (6))){
var inst_59848 = (state_59853[(2)]);
var state_59853__$1 = state_59853;
var statearr_59860_60739 = state_59853__$1;
(statearr_59860_60739[(2)] = inst_59848);

(statearr_59860_60739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59854 === (3))){
var inst_59850 = (state_59853[(2)]);
var inst_59851 = cljs.core.async.close_BANG_(out);
var state_59853__$1 = (function (){var statearr_59861 = state_59853;
(statearr_59861[(9)] = inst_59850);

return statearr_59861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59853__$1,inst_59851);
} else {
if((state_val_59854 === (2))){
var inst_59830 = (state_59853[(8)]);
var inst_59832 = (inst_59830 < n);
var state_59853__$1 = state_59853;
if(cljs.core.truth_(inst_59832)){
var statearr_59862_60740 = state_59853__$1;
(statearr_59862_60740[(1)] = (4));

} else {
var statearr_59863_60741 = state_59853__$1;
(statearr_59863_60741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59854 === (11))){
var inst_59830 = (state_59853[(8)]);
var inst_59840 = (state_59853[(2)]);
var inst_59841 = (inst_59830 + (1));
var inst_59830__$1 = inst_59841;
var state_59853__$1 = (function (){var statearr_59864 = state_59853;
(statearr_59864[(10)] = inst_59840);

(statearr_59864[(8)] = inst_59830__$1);

return statearr_59864;
})();
var statearr_59865_60742 = state_59853__$1;
(statearr_59865_60742[(2)] = null);

(statearr_59865_60742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59854 === (9))){
var state_59853__$1 = state_59853;
var statearr_59866_60743 = state_59853__$1;
(statearr_59866_60743[(2)] = null);

(statearr_59866_60743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59854 === (5))){
var state_59853__$1 = state_59853;
var statearr_59867_60745 = state_59853__$1;
(statearr_59867_60745[(2)] = null);

(statearr_59867_60745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59854 === (10))){
var inst_59845 = (state_59853[(2)]);
var state_59853__$1 = state_59853;
var statearr_59868_60747 = state_59853__$1;
(statearr_59868_60747[(2)] = inst_59845);

(statearr_59868_60747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59854 === (8))){
var inst_59835 = (state_59853[(7)]);
var state_59853__$1 = state_59853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59853__$1,(11),out,inst_59835);
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
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_59869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59869[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_59869[(1)] = (1));

return statearr_59869;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_59853){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59853);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59870){var ex__58396__auto__ = e59870;
var statearr_59871_60748 = state_59853;
(statearr_59871_60748[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59853[(4)]))){
var statearr_59872_60749 = state_59853;
(statearr_59872_60749[(1)] = cljs.core.first((state_59853[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60750 = state_59853;
state_59853 = G__60750;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_59853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_59853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59873 = f__58490__auto__();
(statearr_59873[(6)] = c__58489__auto___60731);

return statearr_59873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59875 = (function (f,ch,meta59876){
this.f = f;
this.ch = ch;
this.meta59876 = meta59876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59877,meta59876__$1){
var self__ = this;
var _59877__$1 = this;
return (new cljs.core.async.t_cljs$core$async59875(self__.f,self__.ch,meta59876__$1));
}));

(cljs.core.async.t_cljs$core$async59875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59877){
var self__ = this;
var _59877__$1 = this;
return self__.meta59876;
}));

(cljs.core.async.t_cljs$core$async59875.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59875.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59875.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59875.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59875.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59878 = (function (f,ch,meta59876,_,fn1,meta59879){
this.f = f;
this.ch = ch;
this.meta59876 = meta59876;
this._ = _;
this.fn1 = fn1;
this.meta59879 = meta59879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59880,meta59879__$1){
var self__ = this;
var _59880__$1 = this;
return (new cljs.core.async.t_cljs$core$async59878(self__.f,self__.ch,self__.meta59876,self__._,self__.fn1,meta59879__$1));
}));

(cljs.core.async.t_cljs$core$async59878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59880){
var self__ = this;
var _59880__$1 = this;
return self__.meta59879;
}));

(cljs.core.async.t_cljs$core$async59878.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59878.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async59878.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59878.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__59874_SHARP_){
var G__59881 = (((p1__59874_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__59874_SHARP_) : self__.f.call(null,p1__59874_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__59881) : f1.call(null,G__59881));
});
}));

(cljs.core.async.t_cljs$core$async59878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59876","meta59876",-631262030,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59875","cljs.core.async/t_cljs$core$async59875",24044609,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59879","meta59879",461096397,null)], null);
}));

(cljs.core.async.t_cljs$core$async59878.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59878");

(cljs.core.async.t_cljs$core$async59878.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59878");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59878.
 */
cljs.core.async.__GT_t_cljs$core$async59878 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59878(f__$1,ch__$1,meta59876__$1,___$2,fn1__$1,meta59879){
return (new cljs.core.async.t_cljs$core$async59878(f__$1,ch__$1,meta59876__$1,___$2,fn1__$1,meta59879));
});

}

return (new cljs.core.async.t_cljs$core$async59878(self__.f,self__.ch,self__.meta59876,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__59882 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__59882) : self__.f.call(null,G__59882));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async59875.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59875.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async59875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59876","meta59876",-631262030,null)], null);
}));

(cljs.core.async.t_cljs$core$async59875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59875");

(cljs.core.async.t_cljs$core$async59875.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59875.
 */
cljs.core.async.__GT_t_cljs$core$async59875 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59875(f__$1,ch__$1,meta59876){
return (new cljs.core.async.t_cljs$core$async59875(f__$1,ch__$1,meta59876));
});

}

return (new cljs.core.async.t_cljs$core$async59875(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59883 = (function (f,ch,meta59884){
this.f = f;
this.ch = ch;
this.meta59884 = meta59884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59885,meta59884__$1){
var self__ = this;
var _59885__$1 = this;
return (new cljs.core.async.t_cljs$core$async59883(self__.f,self__.ch,meta59884__$1));
}));

(cljs.core.async.t_cljs$core$async59883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59885){
var self__ = this;
var _59885__$1 = this;
return self__.meta59884;
}));

(cljs.core.async.t_cljs$core$async59883.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59883.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59883.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59883.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59883.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59883.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async59883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59884","meta59884",-2048845408,null)], null);
}));

(cljs.core.async.t_cljs$core$async59883.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59883");

(cljs.core.async.t_cljs$core$async59883.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59883");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59883.
 */
cljs.core.async.__GT_t_cljs$core$async59883 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59883(f__$1,ch__$1,meta59884){
return (new cljs.core.async.t_cljs$core$async59883(f__$1,ch__$1,meta59884));
});

}

return (new cljs.core.async.t_cljs$core$async59883(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59886 = (function (p,ch,meta59887){
this.p = p;
this.ch = ch;
this.meta59887 = meta59887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59888,meta59887__$1){
var self__ = this;
var _59888__$1 = this;
return (new cljs.core.async.t_cljs$core$async59886(self__.p,self__.ch,meta59887__$1));
}));

(cljs.core.async.t_cljs$core$async59886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59888){
var self__ = this;
var _59888__$1 = this;
return self__.meta59887;
}));

(cljs.core.async.t_cljs$core$async59886.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59886.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59886.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59886.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async59886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59887","meta59887",-1201098216,null)], null);
}));

(cljs.core.async.t_cljs$core$async59886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59886");

(cljs.core.async.t_cljs$core$async59886.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59886.
 */
cljs.core.async.__GT_t_cljs$core$async59886 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59886(p__$1,ch__$1,meta59887){
return (new cljs.core.async.t_cljs$core$async59886(p__$1,ch__$1,meta59887));
});

}

return (new cljs.core.async.t_cljs$core$async59886(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__59890 = arguments.length;
switch (G__59890) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58489__auto___60766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59911){
var state_val_59912 = (state_59911[(1)]);
if((state_val_59912 === (7))){
var inst_59907 = (state_59911[(2)]);
var state_59911__$1 = state_59911;
var statearr_59913_60767 = state_59911__$1;
(statearr_59913_60767[(2)] = inst_59907);

(statearr_59913_60767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59912 === (1))){
var state_59911__$1 = state_59911;
var statearr_59914_60768 = state_59911__$1;
(statearr_59914_60768[(2)] = null);

(statearr_59914_60768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59912 === (4))){
var inst_59893 = (state_59911[(7)]);
var inst_59893__$1 = (state_59911[(2)]);
var inst_59894 = (inst_59893__$1 == null);
var state_59911__$1 = (function (){var statearr_59915 = state_59911;
(statearr_59915[(7)] = inst_59893__$1);

return statearr_59915;
})();
if(cljs.core.truth_(inst_59894)){
var statearr_59916_60769 = state_59911__$1;
(statearr_59916_60769[(1)] = (5));

} else {
var statearr_59917_60770 = state_59911__$1;
(statearr_59917_60770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59912 === (6))){
var inst_59893 = (state_59911[(7)]);
var inst_59898 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59893) : p.call(null,inst_59893));
var state_59911__$1 = state_59911;
if(cljs.core.truth_(inst_59898)){
var statearr_59918_60771 = state_59911__$1;
(statearr_59918_60771[(1)] = (8));

} else {
var statearr_59919_60772 = state_59911__$1;
(statearr_59919_60772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59912 === (3))){
var inst_59909 = (state_59911[(2)]);
var state_59911__$1 = state_59911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59911__$1,inst_59909);
} else {
if((state_val_59912 === (2))){
var state_59911__$1 = state_59911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59911__$1,(4),ch);
} else {
if((state_val_59912 === (11))){
var inst_59901 = (state_59911[(2)]);
var state_59911__$1 = state_59911;
var statearr_59920_60773 = state_59911__$1;
(statearr_59920_60773[(2)] = inst_59901);

(statearr_59920_60773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59912 === (9))){
var state_59911__$1 = state_59911;
var statearr_59921_60774 = state_59911__$1;
(statearr_59921_60774[(2)] = null);

(statearr_59921_60774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59912 === (5))){
var inst_59896 = cljs.core.async.close_BANG_(out);
var state_59911__$1 = state_59911;
var statearr_59922_60775 = state_59911__$1;
(statearr_59922_60775[(2)] = inst_59896);

(statearr_59922_60775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59912 === (10))){
var inst_59904 = (state_59911[(2)]);
var state_59911__$1 = (function (){var statearr_59923 = state_59911;
(statearr_59923[(8)] = inst_59904);

return statearr_59923;
})();
var statearr_59924_60776 = state_59911__$1;
(statearr_59924_60776[(2)] = null);

(statearr_59924_60776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59912 === (8))){
var inst_59893 = (state_59911[(7)]);
var state_59911__$1 = state_59911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59911__$1,(11),out,inst_59893);
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
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_59925 = [null,null,null,null,null,null,null,null,null];
(statearr_59925[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_59925[(1)] = (1));

return statearr_59925;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_59911){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59911);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e59926){var ex__58396__auto__ = e59926;
var statearr_59927_60777 = state_59911;
(statearr_59927_60777[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59911[(4)]))){
var statearr_59928_60778 = state_59911;
(statearr_59928_60778[(1)] = cljs.core.first((state_59911[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60779 = state_59911;
state_59911 = G__60779;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_59911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_59911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_59929 = f__58490__auto__();
(statearr_59929[(6)] = c__58489__auto___60766);

return statearr_59929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__59931 = arguments.length;
switch (G__59931) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__58489__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_59993){
var state_val_59994 = (state_59993[(1)]);
if((state_val_59994 === (7))){
var inst_59989 = (state_59993[(2)]);
var state_59993__$1 = state_59993;
var statearr_59995_60784 = state_59993__$1;
(statearr_59995_60784[(2)] = inst_59989);

(statearr_59995_60784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (20))){
var inst_59959 = (state_59993[(7)]);
var inst_59970 = (state_59993[(2)]);
var inst_59971 = cljs.core.next(inst_59959);
var inst_59945 = inst_59971;
var inst_59946 = null;
var inst_59947 = (0);
var inst_59948 = (0);
var state_59993__$1 = (function (){var statearr_59996 = state_59993;
(statearr_59996[(8)] = inst_59947);

(statearr_59996[(9)] = inst_59945);

(statearr_59996[(10)] = inst_59970);

(statearr_59996[(11)] = inst_59948);

(statearr_59996[(12)] = inst_59946);

return statearr_59996;
})();
var statearr_59997_60785 = state_59993__$1;
(statearr_59997_60785[(2)] = null);

(statearr_59997_60785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (1))){
var state_59993__$1 = state_59993;
var statearr_59998_60786 = state_59993__$1;
(statearr_59998_60786[(2)] = null);

(statearr_59998_60786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (4))){
var inst_59934 = (state_59993[(13)]);
var inst_59934__$1 = (state_59993[(2)]);
var inst_59935 = (inst_59934__$1 == null);
var state_59993__$1 = (function (){var statearr_59999 = state_59993;
(statearr_59999[(13)] = inst_59934__$1);

return statearr_59999;
})();
if(cljs.core.truth_(inst_59935)){
var statearr_60000_60787 = state_59993__$1;
(statearr_60000_60787[(1)] = (5));

} else {
var statearr_60001_60788 = state_59993__$1;
(statearr_60001_60788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (15))){
var state_59993__$1 = state_59993;
var statearr_60005_60789 = state_59993__$1;
(statearr_60005_60789[(2)] = null);

(statearr_60005_60789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (21))){
var state_59993__$1 = state_59993;
var statearr_60006_60790 = state_59993__$1;
(statearr_60006_60790[(2)] = null);

(statearr_60006_60790[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (13))){
var inst_59947 = (state_59993[(8)]);
var inst_59945 = (state_59993[(9)]);
var inst_59948 = (state_59993[(11)]);
var inst_59946 = (state_59993[(12)]);
var inst_59955 = (state_59993[(2)]);
var inst_59956 = (inst_59948 + (1));
var tmp60002 = inst_59947;
var tmp60003 = inst_59945;
var tmp60004 = inst_59946;
var inst_59945__$1 = tmp60003;
var inst_59946__$1 = tmp60004;
var inst_59947__$1 = tmp60002;
var inst_59948__$1 = inst_59956;
var state_59993__$1 = (function (){var statearr_60007 = state_59993;
(statearr_60007[(8)] = inst_59947__$1);

(statearr_60007[(14)] = inst_59955);

(statearr_60007[(9)] = inst_59945__$1);

(statearr_60007[(11)] = inst_59948__$1);

(statearr_60007[(12)] = inst_59946__$1);

return statearr_60007;
})();
var statearr_60008_60792 = state_59993__$1;
(statearr_60008_60792[(2)] = null);

(statearr_60008_60792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (22))){
var state_59993__$1 = state_59993;
var statearr_60009_60793 = state_59993__$1;
(statearr_60009_60793[(2)] = null);

(statearr_60009_60793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (6))){
var inst_59934 = (state_59993[(13)]);
var inst_59943 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59934) : f.call(null,inst_59934));
var inst_59944 = cljs.core.seq(inst_59943);
var inst_59945 = inst_59944;
var inst_59946 = null;
var inst_59947 = (0);
var inst_59948 = (0);
var state_59993__$1 = (function (){var statearr_60010 = state_59993;
(statearr_60010[(8)] = inst_59947);

(statearr_60010[(9)] = inst_59945);

(statearr_60010[(11)] = inst_59948);

(statearr_60010[(12)] = inst_59946);

return statearr_60010;
})();
var statearr_60011_60794 = state_59993__$1;
(statearr_60011_60794[(2)] = null);

(statearr_60011_60794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (17))){
var inst_59959 = (state_59993[(7)]);
var inst_59963 = cljs.core.chunk_first(inst_59959);
var inst_59964 = cljs.core.chunk_rest(inst_59959);
var inst_59965 = cljs.core.count(inst_59963);
var inst_59945 = inst_59964;
var inst_59946 = inst_59963;
var inst_59947 = inst_59965;
var inst_59948 = (0);
var state_59993__$1 = (function (){var statearr_60012 = state_59993;
(statearr_60012[(8)] = inst_59947);

(statearr_60012[(9)] = inst_59945);

(statearr_60012[(11)] = inst_59948);

(statearr_60012[(12)] = inst_59946);

return statearr_60012;
})();
var statearr_60013_60795 = state_59993__$1;
(statearr_60013_60795[(2)] = null);

(statearr_60013_60795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (3))){
var inst_59991 = (state_59993[(2)]);
var state_59993__$1 = state_59993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59993__$1,inst_59991);
} else {
if((state_val_59994 === (12))){
var inst_59979 = (state_59993[(2)]);
var state_59993__$1 = state_59993;
var statearr_60014_60796 = state_59993__$1;
(statearr_60014_60796[(2)] = inst_59979);

(statearr_60014_60796[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (2))){
var state_59993__$1 = state_59993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59993__$1,(4),in$);
} else {
if((state_val_59994 === (23))){
var inst_59987 = (state_59993[(2)]);
var state_59993__$1 = state_59993;
var statearr_60015_60797 = state_59993__$1;
(statearr_60015_60797[(2)] = inst_59987);

(statearr_60015_60797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (19))){
var inst_59974 = (state_59993[(2)]);
var state_59993__$1 = state_59993;
var statearr_60016_60798 = state_59993__$1;
(statearr_60016_60798[(2)] = inst_59974);

(statearr_60016_60798[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (11))){
var inst_59959 = (state_59993[(7)]);
var inst_59945 = (state_59993[(9)]);
var inst_59959__$1 = cljs.core.seq(inst_59945);
var state_59993__$1 = (function (){var statearr_60017 = state_59993;
(statearr_60017[(7)] = inst_59959__$1);

return statearr_60017;
})();
if(inst_59959__$1){
var statearr_60018_60803 = state_59993__$1;
(statearr_60018_60803[(1)] = (14));

} else {
var statearr_60019_60804 = state_59993__$1;
(statearr_60019_60804[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (9))){
var inst_59981 = (state_59993[(2)]);
var inst_59982 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_59993__$1 = (function (){var statearr_60020 = state_59993;
(statearr_60020[(15)] = inst_59981);

return statearr_60020;
})();
if(cljs.core.truth_(inst_59982)){
var statearr_60021_60806 = state_59993__$1;
(statearr_60021_60806[(1)] = (21));

} else {
var statearr_60022_60807 = state_59993__$1;
(statearr_60022_60807[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (5))){
var inst_59937 = cljs.core.async.close_BANG_(out);
var state_59993__$1 = state_59993;
var statearr_60023_60808 = state_59993__$1;
(statearr_60023_60808[(2)] = inst_59937);

(statearr_60023_60808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (14))){
var inst_59959 = (state_59993[(7)]);
var inst_59961 = cljs.core.chunked_seq_QMARK_(inst_59959);
var state_59993__$1 = state_59993;
if(inst_59961){
var statearr_60024_60809 = state_59993__$1;
(statearr_60024_60809[(1)] = (17));

} else {
var statearr_60025_60810 = state_59993__$1;
(statearr_60025_60810[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (16))){
var inst_59977 = (state_59993[(2)]);
var state_59993__$1 = state_59993;
var statearr_60026_60811 = state_59993__$1;
(statearr_60026_60811[(2)] = inst_59977);

(statearr_60026_60811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59994 === (10))){
var inst_59948 = (state_59993[(11)]);
var inst_59946 = (state_59993[(12)]);
var inst_59953 = cljs.core._nth(inst_59946,inst_59948);
var state_59993__$1 = state_59993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59993__$1,(13),out,inst_59953);
} else {
if((state_val_59994 === (18))){
var inst_59959 = (state_59993[(7)]);
var inst_59968 = cljs.core.first(inst_59959);
var state_59993__$1 = state_59993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59993__$1,(20),out,inst_59968);
} else {
if((state_val_59994 === (8))){
var inst_59947 = (state_59993[(8)]);
var inst_59948 = (state_59993[(11)]);
var inst_59950 = (inst_59948 < inst_59947);
var inst_59951 = inst_59950;
var state_59993__$1 = state_59993;
if(cljs.core.truth_(inst_59951)){
var statearr_60027_60813 = state_59993__$1;
(statearr_60027_60813[(1)] = (10));

} else {
var statearr_60028_60814 = state_59993__$1;
(statearr_60028_60814[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__58393__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__58393__auto____0 = (function (){
var statearr_60029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60029[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__58393__auto__);

(statearr_60029[(1)] = (1));

return statearr_60029;
});
var cljs$core$async$mapcat_STAR__$_state_machine__58393__auto____1 = (function (state_59993){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_59993);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e60030){var ex__58396__auto__ = e60030;
var statearr_60031_60819 = state_59993;
(statearr_60031_60819[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_59993[(4)]))){
var statearr_60032_60820 = state_59993;
(statearr_60032_60820[(1)] = cljs.core.first((state_59993[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60821 = state_59993;
state_59993 = G__60821;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__58393__auto__ = function(state_59993){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__58393__auto____1.call(this,state_59993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__58393__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__58393__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_60033 = f__58490__auto__();
(statearr_60033[(6)] = c__58489__auto__);

return statearr_60033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));

return c__58489__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__60035 = arguments.length;
switch (G__60035) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__60037 = arguments.length;
switch (G__60037) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__60039 = arguments.length;
switch (G__60039) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58489__auto___60825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_60063){
var state_val_60064 = (state_60063[(1)]);
if((state_val_60064 === (7))){
var inst_60058 = (state_60063[(2)]);
var state_60063__$1 = state_60063;
var statearr_60065_60826 = state_60063__$1;
(statearr_60065_60826[(2)] = inst_60058);

(statearr_60065_60826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60064 === (1))){
var inst_60040 = null;
var state_60063__$1 = (function (){var statearr_60066 = state_60063;
(statearr_60066[(7)] = inst_60040);

return statearr_60066;
})();
var statearr_60067_60827 = state_60063__$1;
(statearr_60067_60827[(2)] = null);

(statearr_60067_60827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60064 === (4))){
var inst_60043 = (state_60063[(8)]);
var inst_60043__$1 = (state_60063[(2)]);
var inst_60044 = (inst_60043__$1 == null);
var inst_60045 = cljs.core.not(inst_60044);
var state_60063__$1 = (function (){var statearr_60068 = state_60063;
(statearr_60068[(8)] = inst_60043__$1);

return statearr_60068;
})();
if(inst_60045){
var statearr_60069_60828 = state_60063__$1;
(statearr_60069_60828[(1)] = (5));

} else {
var statearr_60070_60829 = state_60063__$1;
(statearr_60070_60829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60064 === (6))){
var state_60063__$1 = state_60063;
var statearr_60071_60830 = state_60063__$1;
(statearr_60071_60830[(2)] = null);

(statearr_60071_60830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60064 === (3))){
var inst_60060 = (state_60063[(2)]);
var inst_60061 = cljs.core.async.close_BANG_(out);
var state_60063__$1 = (function (){var statearr_60072 = state_60063;
(statearr_60072[(9)] = inst_60060);

return statearr_60072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60063__$1,inst_60061);
} else {
if((state_val_60064 === (2))){
var state_60063__$1 = state_60063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60063__$1,(4),ch);
} else {
if((state_val_60064 === (11))){
var inst_60043 = (state_60063[(8)]);
var inst_60052 = (state_60063[(2)]);
var inst_60040 = inst_60043;
var state_60063__$1 = (function (){var statearr_60073 = state_60063;
(statearr_60073[(7)] = inst_60040);

(statearr_60073[(10)] = inst_60052);

return statearr_60073;
})();
var statearr_60074_60831 = state_60063__$1;
(statearr_60074_60831[(2)] = null);

(statearr_60074_60831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60064 === (9))){
var inst_60043 = (state_60063[(8)]);
var state_60063__$1 = state_60063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60063__$1,(11),out,inst_60043);
} else {
if((state_val_60064 === (5))){
var inst_60043 = (state_60063[(8)]);
var inst_60040 = (state_60063[(7)]);
var inst_60047 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60043,inst_60040);
var state_60063__$1 = state_60063;
if(inst_60047){
var statearr_60076_60835 = state_60063__$1;
(statearr_60076_60835[(1)] = (8));

} else {
var statearr_60077_60836 = state_60063__$1;
(statearr_60077_60836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60064 === (10))){
var inst_60055 = (state_60063[(2)]);
var state_60063__$1 = state_60063;
var statearr_60078_60837 = state_60063__$1;
(statearr_60078_60837[(2)] = inst_60055);

(statearr_60078_60837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60064 === (8))){
var inst_60040 = (state_60063[(7)]);
var tmp60075 = inst_60040;
var inst_60040__$1 = tmp60075;
var state_60063__$1 = (function (){var statearr_60079 = state_60063;
(statearr_60079[(7)] = inst_60040__$1);

return statearr_60079;
})();
var statearr_60080_60838 = state_60063__$1;
(statearr_60080_60838[(2)] = null);

(statearr_60080_60838[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_60081 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60081[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_60081[(1)] = (1));

return statearr_60081;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_60063){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_60063);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e60082){var ex__58396__auto__ = e60082;
var statearr_60083_60839 = state_60063;
(statearr_60083_60839[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_60063[(4)]))){
var statearr_60084_60840 = state_60063;
(statearr_60084_60840[(1)] = cljs.core.first((state_60063[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60841 = state_60063;
state_60063 = G__60841;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_60063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_60063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_60085 = f__58490__auto__();
(statearr_60085[(6)] = c__58489__auto___60825);

return statearr_60085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60087 = arguments.length;
switch (G__60087) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58489__auto___60843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_60125){
var state_val_60126 = (state_60125[(1)]);
if((state_val_60126 === (7))){
var inst_60121 = (state_60125[(2)]);
var state_60125__$1 = state_60125;
var statearr_60127_60844 = state_60125__$1;
(statearr_60127_60844[(2)] = inst_60121);

(statearr_60127_60844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60126 === (1))){
var inst_60088 = (new Array(n));
var inst_60089 = inst_60088;
var inst_60090 = (0);
var state_60125__$1 = (function (){var statearr_60128 = state_60125;
(statearr_60128[(7)] = inst_60090);

(statearr_60128[(8)] = inst_60089);

return statearr_60128;
})();
var statearr_60129_60846 = state_60125__$1;
(statearr_60129_60846[(2)] = null);

(statearr_60129_60846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60126 === (4))){
var inst_60093 = (state_60125[(9)]);
var inst_60093__$1 = (state_60125[(2)]);
var inst_60094 = (inst_60093__$1 == null);
var inst_60095 = cljs.core.not(inst_60094);
var state_60125__$1 = (function (){var statearr_60130 = state_60125;
(statearr_60130[(9)] = inst_60093__$1);

return statearr_60130;
})();
if(inst_60095){
var statearr_60131_60847 = state_60125__$1;
(statearr_60131_60847[(1)] = (5));

} else {
var statearr_60132_60848 = state_60125__$1;
(statearr_60132_60848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60126 === (15))){
var inst_60115 = (state_60125[(2)]);
var state_60125__$1 = state_60125;
var statearr_60133_60849 = state_60125__$1;
(statearr_60133_60849[(2)] = inst_60115);

(statearr_60133_60849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60126 === (13))){
var state_60125__$1 = state_60125;
var statearr_60134_60850 = state_60125__$1;
(statearr_60134_60850[(2)] = null);

(statearr_60134_60850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60126 === (6))){
var inst_60090 = (state_60125[(7)]);
var inst_60111 = (inst_60090 > (0));
var state_60125__$1 = state_60125;
if(cljs.core.truth_(inst_60111)){
var statearr_60135_60851 = state_60125__$1;
(statearr_60135_60851[(1)] = (12));

} else {
var statearr_60136_60852 = state_60125__$1;
(statearr_60136_60852[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60126 === (3))){
var inst_60123 = (state_60125[(2)]);
var state_60125__$1 = state_60125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60125__$1,inst_60123);
} else {
if((state_val_60126 === (12))){
var inst_60089 = (state_60125[(8)]);
var inst_60113 = cljs.core.vec(inst_60089);
var state_60125__$1 = state_60125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60125__$1,(15),out,inst_60113);
} else {
if((state_val_60126 === (2))){
var state_60125__$1 = state_60125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60125__$1,(4),ch);
} else {
if((state_val_60126 === (11))){
var inst_60105 = (state_60125[(2)]);
var inst_60106 = (new Array(n));
var inst_60089 = inst_60106;
var inst_60090 = (0);
var state_60125__$1 = (function (){var statearr_60137 = state_60125;
(statearr_60137[(7)] = inst_60090);

(statearr_60137[(8)] = inst_60089);

(statearr_60137[(10)] = inst_60105);

return statearr_60137;
})();
var statearr_60138_60853 = state_60125__$1;
(statearr_60138_60853[(2)] = null);

(statearr_60138_60853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60126 === (9))){
var inst_60089 = (state_60125[(8)]);
var inst_60103 = cljs.core.vec(inst_60089);
var state_60125__$1 = state_60125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60125__$1,(11),out,inst_60103);
} else {
if((state_val_60126 === (5))){
var inst_60093 = (state_60125[(9)]);
var inst_60090 = (state_60125[(7)]);
var inst_60089 = (state_60125[(8)]);
var inst_60098 = (state_60125[(11)]);
var inst_60097 = (inst_60089[inst_60090] = inst_60093);
var inst_60098__$1 = (inst_60090 + (1));
var inst_60099 = (inst_60098__$1 < n);
var state_60125__$1 = (function (){var statearr_60139 = state_60125;
(statearr_60139[(11)] = inst_60098__$1);

(statearr_60139[(12)] = inst_60097);

return statearr_60139;
})();
if(cljs.core.truth_(inst_60099)){
var statearr_60140_60854 = state_60125__$1;
(statearr_60140_60854[(1)] = (8));

} else {
var statearr_60141_60855 = state_60125__$1;
(statearr_60141_60855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60126 === (14))){
var inst_60118 = (state_60125[(2)]);
var inst_60119 = cljs.core.async.close_BANG_(out);
var state_60125__$1 = (function (){var statearr_60143 = state_60125;
(statearr_60143[(13)] = inst_60118);

return statearr_60143;
})();
var statearr_60144_60856 = state_60125__$1;
(statearr_60144_60856[(2)] = inst_60119);

(statearr_60144_60856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60126 === (10))){
var inst_60109 = (state_60125[(2)]);
var state_60125__$1 = state_60125;
var statearr_60145_60857 = state_60125__$1;
(statearr_60145_60857[(2)] = inst_60109);

(statearr_60145_60857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60126 === (8))){
var inst_60089 = (state_60125[(8)]);
var inst_60098 = (state_60125[(11)]);
var tmp60142 = inst_60089;
var inst_60089__$1 = tmp60142;
var inst_60090 = inst_60098;
var state_60125__$1 = (function (){var statearr_60146 = state_60125;
(statearr_60146[(7)] = inst_60090);

(statearr_60146[(8)] = inst_60089__$1);

return statearr_60146;
})();
var statearr_60147_60858 = state_60125__$1;
(statearr_60147_60858[(2)] = null);

(statearr_60147_60858[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_60148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60148[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_60148[(1)] = (1));

return statearr_60148;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_60125){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_60125);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e60149){var ex__58396__auto__ = e60149;
var statearr_60150_60859 = state_60125;
(statearr_60150_60859[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_60125[(4)]))){
var statearr_60151_60860 = state_60125;
(statearr_60151_60860[(1)] = cljs.core.first((state_60125[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60861 = state_60125;
state_60125 = G__60861;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_60125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_60125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_60152 = f__58490__auto__();
(statearr_60152[(6)] = c__58489__auto___60843);

return statearr_60152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60154 = arguments.length;
switch (G__60154) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58489__auto___60868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58490__auto__ = (function (){var switch__58392__auto__ = (function (state_60196){
var state_val_60197 = (state_60196[(1)]);
if((state_val_60197 === (7))){
var inst_60192 = (state_60196[(2)]);
var state_60196__$1 = state_60196;
var statearr_60198_60872 = state_60196__$1;
(statearr_60198_60872[(2)] = inst_60192);

(statearr_60198_60872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60197 === (1))){
var inst_60155 = [];
var inst_60156 = inst_60155;
var inst_60157 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60196__$1 = (function (){var statearr_60199 = state_60196;
(statearr_60199[(7)] = inst_60156);

(statearr_60199[(8)] = inst_60157);

return statearr_60199;
})();
var statearr_60200_60873 = state_60196__$1;
(statearr_60200_60873[(2)] = null);

(statearr_60200_60873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60197 === (4))){
var inst_60160 = (state_60196[(9)]);
var inst_60160__$1 = (state_60196[(2)]);
var inst_60161 = (inst_60160__$1 == null);
var inst_60162 = cljs.core.not(inst_60161);
var state_60196__$1 = (function (){var statearr_60201 = state_60196;
(statearr_60201[(9)] = inst_60160__$1);

return statearr_60201;
})();
if(inst_60162){
var statearr_60202_60875 = state_60196__$1;
(statearr_60202_60875[(1)] = (5));

} else {
var statearr_60203_60877 = state_60196__$1;
(statearr_60203_60877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60197 === (15))){
var inst_60186 = (state_60196[(2)]);
var state_60196__$1 = state_60196;
var statearr_60204_60878 = state_60196__$1;
(statearr_60204_60878[(2)] = inst_60186);

(statearr_60204_60878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60197 === (13))){
var state_60196__$1 = state_60196;
var statearr_60205_60879 = state_60196__$1;
(statearr_60205_60879[(2)] = null);

(statearr_60205_60879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60197 === (6))){
var inst_60156 = (state_60196[(7)]);
var inst_60181 = inst_60156.length;
var inst_60182 = (inst_60181 > (0));
var state_60196__$1 = state_60196;
if(cljs.core.truth_(inst_60182)){
var statearr_60206_60880 = state_60196__$1;
(statearr_60206_60880[(1)] = (12));

} else {
var statearr_60207_60881 = state_60196__$1;
(statearr_60207_60881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60197 === (3))){
var inst_60194 = (state_60196[(2)]);
var state_60196__$1 = state_60196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60196__$1,inst_60194);
} else {
if((state_val_60197 === (12))){
var inst_60156 = (state_60196[(7)]);
var inst_60184 = cljs.core.vec(inst_60156);
var state_60196__$1 = state_60196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60196__$1,(15),out,inst_60184);
} else {
if((state_val_60197 === (2))){
var state_60196__$1 = state_60196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60196__$1,(4),ch);
} else {
if((state_val_60197 === (11))){
var inst_60164 = (state_60196[(10)]);
var inst_60160 = (state_60196[(9)]);
var inst_60174 = (state_60196[(2)]);
var inst_60175 = [];
var inst_60176 = inst_60175.push(inst_60160);
var inst_60156 = inst_60175;
var inst_60157 = inst_60164;
var state_60196__$1 = (function (){var statearr_60208 = state_60196;
(statearr_60208[(11)] = inst_60174);

(statearr_60208[(12)] = inst_60176);

(statearr_60208[(7)] = inst_60156);

(statearr_60208[(8)] = inst_60157);

return statearr_60208;
})();
var statearr_60209_60882 = state_60196__$1;
(statearr_60209_60882[(2)] = null);

(statearr_60209_60882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60197 === (9))){
var inst_60156 = (state_60196[(7)]);
var inst_60172 = cljs.core.vec(inst_60156);
var state_60196__$1 = state_60196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60196__$1,(11),out,inst_60172);
} else {
if((state_val_60197 === (5))){
var inst_60164 = (state_60196[(10)]);
var inst_60160 = (state_60196[(9)]);
var inst_60157 = (state_60196[(8)]);
var inst_60164__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60160) : f.call(null,inst_60160));
var inst_60165 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60164__$1,inst_60157);
var inst_60166 = cljs.core.keyword_identical_QMARK_(inst_60157,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_60167 = ((inst_60165) || (inst_60166));
var state_60196__$1 = (function (){var statearr_60210 = state_60196;
(statearr_60210[(10)] = inst_60164__$1);

return statearr_60210;
})();
if(cljs.core.truth_(inst_60167)){
var statearr_60211_60883 = state_60196__$1;
(statearr_60211_60883[(1)] = (8));

} else {
var statearr_60212_60884 = state_60196__$1;
(statearr_60212_60884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60197 === (14))){
var inst_60189 = (state_60196[(2)]);
var inst_60190 = cljs.core.async.close_BANG_(out);
var state_60196__$1 = (function (){var statearr_60214 = state_60196;
(statearr_60214[(13)] = inst_60189);

return statearr_60214;
})();
var statearr_60215_60885 = state_60196__$1;
(statearr_60215_60885[(2)] = inst_60190);

(statearr_60215_60885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60197 === (10))){
var inst_60179 = (state_60196[(2)]);
var state_60196__$1 = state_60196;
var statearr_60216_60886 = state_60196__$1;
(statearr_60216_60886[(2)] = inst_60179);

(statearr_60216_60886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60197 === (8))){
var inst_60164 = (state_60196[(10)]);
var inst_60156 = (state_60196[(7)]);
var inst_60160 = (state_60196[(9)]);
var inst_60169 = inst_60156.push(inst_60160);
var tmp60213 = inst_60156;
var inst_60156__$1 = tmp60213;
var inst_60157 = inst_60164;
var state_60196__$1 = (function (){var statearr_60217 = state_60196;
(statearr_60217[(14)] = inst_60169);

(statearr_60217[(7)] = inst_60156__$1);

(statearr_60217[(8)] = inst_60157);

return statearr_60217;
})();
var statearr_60218_60887 = state_60196__$1;
(statearr_60218_60887[(2)] = null);

(statearr_60218_60887[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__58393__auto__ = null;
var cljs$core$async$state_machine__58393__auto____0 = (function (){
var statearr_60219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60219[(0)] = cljs$core$async$state_machine__58393__auto__);

(statearr_60219[(1)] = (1));

return statearr_60219;
});
var cljs$core$async$state_machine__58393__auto____1 = (function (state_60196){
while(true){
var ret_value__58394__auto__ = (function (){try{while(true){
var result__58395__auto__ = switch__58392__auto__(state_60196);
if(cljs.core.keyword_identical_QMARK_(result__58395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58395__auto__;
}
break;
}
}catch (e60220){var ex__58396__auto__ = e60220;
var statearr_60221_60888 = state_60196;
(statearr_60221_60888[(2)] = ex__58396__auto__);


if(cljs.core.seq((state_60196[(4)]))){
var statearr_60222_60889 = state_60196;
(statearr_60222_60889[(1)] = cljs.core.first((state_60196[(4)])));

} else {
throw ex__58396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60890 = state_60196;
state_60196 = G__60890;
continue;
} else {
return ret_value__58394__auto__;
}
break;
}
});
cljs$core$async$state_machine__58393__auto__ = function(state_60196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58393__auto____1.call(this,state_60196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58393__auto____0;
cljs$core$async$state_machine__58393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58393__auto____1;
return cljs$core$async$state_machine__58393__auto__;
})()
})();
var state__58491__auto__ = (function (){var statearr_60223 = f__58490__auto__();
(statearr_60223[(6)] = c__58489__auto___60868);

return statearr_60223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58491__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
