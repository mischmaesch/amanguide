goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_61730 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._id[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._id["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_61730(this$);
}
});

var shadow$object$IObject$_type$dyn_61731 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._type[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._type["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_61731(this$);
}
});

var shadow$object$IObject$_data$dyn_61732 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._data[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._data["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_61732(this$);
}
});

var shadow$object$IObject$_update$dyn_61733 = (function (this$,update_fn){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._update[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4429__auto__.call(null,this$,update_fn));
} else {
var m__4426__auto__ = (shadow.object._update["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4426__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_61733(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_61734 = (function (this$,cause){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4429__auto__.call(null,this$,cause));
} else {
var m__4426__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4426__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_61734(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__61309 = arguments.length;
switch (G__61309) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4126__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5735__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5735__auto__)){
var oid = temp__5735__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__61736 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__61736;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61333_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__61333_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__61342 = arguments.length;
switch (G__61342) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61466_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__61466_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__61469){
var map__61470 = p__61469;
var map__61470__$1 = (((((!((map__61470 == null))))?(((((map__61470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61470):map__61470);
var oref = map__61470__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61470__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__61479 = arguments.length;
switch (G__61479) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61475_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__61475_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5733__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5733__auto__)){
var obj = temp__5733__auto__;
return obj;
} else {
var temp__5735__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__61739 = parent;
dom = G__61739;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61740 = arguments.length;
var i__4737__auto___61741 = (0);
while(true){
if((i__4737__auto___61741 < len__4736__auto___61740)){
args__4742__auto__.push((arguments[i__4737__auto___61741]));

var G__61742 = (i__4737__auto___61741 + (1));
i__4737__auto___61741 = G__61742;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reactions_to_trigger = temp__5735__auto__;
var seq__61498 = cljs.core.seq(reactions_to_trigger);
var chunk__61499 = null;
var count__61500 = (0);
var i__61501 = (0);
while(true){
if((i__61501 < count__61500)){
var rfn = chunk__61499.cljs$core$IIndexed$_nth$arity$2(null,i__61501);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__61743 = seq__61498;
var G__61744 = chunk__61499;
var G__61745 = count__61500;
var G__61746 = (i__61501 + (1));
seq__61498 = G__61743;
chunk__61499 = G__61744;
count__61500 = G__61745;
i__61501 = G__61746;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__61498);
if(temp__5735__auto____$1){
var seq__61498__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__61498__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61498__$1);
var G__61747 = cljs.core.chunk_rest(seq__61498__$1);
var G__61748 = c__4556__auto__;
var G__61749 = cljs.core.count(c__4556__auto__);
var G__61750 = (0);
seq__61498 = G__61747;
chunk__61499 = G__61748;
count__61500 = G__61749;
i__61501 = G__61750;
continue;
} else {
var rfn = cljs.core.first(seq__61498__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__61751 = cljs.core.next(seq__61498__$1);
var G__61752 = null;
var G__61753 = (0);
var G__61754 = (0);
seq__61498 = G__61751;
chunk__61499 = G__61752;
count__61500 = G__61753;
i__61501 = G__61754;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq61490){
var G__61491 = cljs.core.first(seq61490);
var seq61490__$1 = cljs.core.next(seq61490);
var G__61492 = cljs.core.first(seq61490__$1);
var seq61490__$2 = cljs.core.next(seq61490__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61491,G__61492,seq61490__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__61510_61755 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__61511_61756 = null;
var count__61512_61757 = (0);
var i__61513_61758 = (0);
while(true){
if((i__61513_61758 < count__61512_61757)){
var child_61759 = chunk__61511_61756.cljs$core$IIndexed$_nth$arity$2(null,i__61513_61758);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_61759,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_61759,ev,notify_fn));


var G__61760 = seq__61510_61755;
var G__61761 = chunk__61511_61756;
var G__61762 = count__61512_61757;
var G__61763 = (i__61513_61758 + (1));
seq__61510_61755 = G__61760;
chunk__61511_61756 = G__61761;
count__61512_61757 = G__61762;
i__61513_61758 = G__61763;
continue;
} else {
var temp__5735__auto___61764 = cljs.core.seq(seq__61510_61755);
if(temp__5735__auto___61764){
var seq__61510_61765__$1 = temp__5735__auto___61764;
if(cljs.core.chunked_seq_QMARK_(seq__61510_61765__$1)){
var c__4556__auto___61766 = cljs.core.chunk_first(seq__61510_61765__$1);
var G__61767 = cljs.core.chunk_rest(seq__61510_61765__$1);
var G__61768 = c__4556__auto___61766;
var G__61769 = cljs.core.count(c__4556__auto___61766);
var G__61770 = (0);
seq__61510_61755 = G__61767;
chunk__61511_61756 = G__61768;
count__61512_61757 = G__61769;
i__61513_61758 = G__61770;
continue;
} else {
var child_61771 = cljs.core.first(seq__61510_61765__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_61771,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_61771,ev,notify_fn));


var G__61772 = cljs.core.next(seq__61510_61765__$1);
var G__61773 = null;
var G__61774 = (0);
var G__61775 = (0);
seq__61510_61755 = G__61772;
chunk__61511_61756 = G__61773;
count__61512_61757 = G__61774;
i__61513_61758 = G__61775;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61776 = arguments.length;
var i__4737__auto___61777 = (0);
while(true){
if((i__4737__auto___61777 < len__4736__auto___61776)){
args__4742__auto__.push((arguments[i__4737__auto___61777]));

var G__61778 = (i__4737__auto___61777 + (1));
i__4737__auto___61777 = G__61778;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq61520){
var G__61521 = cljs.core.first(seq61520);
var seq61520__$1 = cljs.core.next(seq61520);
var G__61522 = cljs.core.first(seq61520__$1);
var seq61520__$2 = cljs.core.next(seq61520__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61521,G__61522,seq61520__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61779 = arguments.length;
var i__4737__auto___61780 = (0);
while(true){
if((i__4737__auto___61780 < len__4736__auto___61779)){
args__4742__auto__.push((arguments[i__4737__auto___61780]));

var G__61781 = (i__4737__auto___61780 + (1));
i__4737__auto___61780 = G__61781;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__61782 = shadow.object.get_parent(current);
current = G__61782;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq61526){
var G__61527 = cljs.core.first(seq61526);
var seq61526__$1 = cljs.core.next(seq61526);
var G__61528 = cljs.core.first(seq61526__$1);
var seq61526__$2 = cljs.core.next(seq61526__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61527,G__61528,seq61526__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61783 = arguments.length;
var i__4737__auto___61784 = (0);
while(true){
if((i__4737__auto___61784 < len__4736__auto___61783)){
args__4742__auto__.push((arguments[i__4737__auto___61784]));

var G__61785 = (i__4737__auto___61784 + (1));
i__4737__auto___61784 = G__61785;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq61529){
var G__61530 = cljs.core.first(seq61529);
var seq61529__$1 = cljs.core.next(seq61529);
var G__61531 = cljs.core.first(seq61529__$1);
var seq61529__$2 = cljs.core.next(seq61529__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61530,G__61531,seq61529__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5733__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5733__auto__)){
var custom_remove = temp__5733__auto__;
var G__61542 = this$;
var G__61543 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__61542,G__61543) : custom_remove.call(null,G__61542,G__61543));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__61547 = arguments.length;
switch (G__61547) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__61551 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__61552 = null;
var count__61553 = (0);
var i__61554 = (0);
while(true){
if((i__61554 < count__61553)){
var vec__61577 = chunk__61552.cljs$core$IIndexed$_nth$arity$2(null,i__61554);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61577,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61577,(1),null);
var ev_def = vec__61577;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_61787__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__61551,chunk__61552,count__61553,i__61554,vec__61577,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__61551,chunk__61552,count__61553,i__61554,vec__61577,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__61551,chunk__61552,count__61553,i__61554,handler_61787__$1,vec__61577,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_61787__$1.cljs$core$IFn$_invoke$arity$3 ? handler_61787__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_61787__$1.call(null,oref,e,el));
});})(seq__61551,chunk__61552,count__61553,i__61554,handler_61787__$1,vec__61577,ev,handler,ev_def))
);


var G__61788 = seq__61551;
var G__61789 = chunk__61552;
var G__61790 = count__61553;
var G__61791 = (i__61554 + (1));
seq__61551 = G__61788;
chunk__61552 = G__61789;
count__61553 = G__61790;
i__61554 = G__61791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61551);
if(temp__5735__auto__){
var seq__61551__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61551__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61551__$1);
var G__61792 = cljs.core.chunk_rest(seq__61551__$1);
var G__61793 = c__4556__auto__;
var G__61794 = cljs.core.count(c__4556__auto__);
var G__61795 = (0);
seq__61551 = G__61792;
chunk__61552 = G__61793;
count__61553 = G__61794;
i__61554 = G__61795;
continue;
} else {
var vec__61586 = cljs.core.first(seq__61551__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61586,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61586,(1),null);
var ev_def = vec__61586;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_61796__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__61551,chunk__61552,count__61553,i__61554,vec__61586,ev,handler,ev_def,seq__61551__$1,temp__5735__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__61551,chunk__61552,count__61553,i__61554,vec__61586,ev,handler,ev_def,seq__61551__$1,temp__5735__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__61551,chunk__61552,count__61553,i__61554,handler_61796__$1,vec__61586,ev,handler,ev_def,seq__61551__$1,temp__5735__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_61796__$1.cljs$core$IFn$_invoke$arity$3 ? handler_61796__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_61796__$1.call(null,oref,e,el));
});})(seq__61551,chunk__61552,count__61553,i__61554,handler_61796__$1,vec__61586,ev,handler,ev_def,seq__61551__$1,temp__5735__auto__))
);


var G__61797 = cljs.core.next(seq__61551__$1);
var G__61798 = null;
var G__61799 = (0);
var G__61800 = (0);
seq__61551 = G__61797;
chunk__61552 = G__61798;
count__61553 = G__61799;
i__61554 = G__61800;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__61600){
var vec__61601 = p__61600;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61601,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61601,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = event;
if(cljs.core.truth_(and__4115__auto__)){
return handler;
} else {
return and__4115__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61801 = arguments.length;
var i__4737__auto___61802 = (0);
while(true){
if((i__4737__auto___61802 < len__4736__auto___61801)){
args__4742__auto__.push((arguments[i__4737__auto___61802]));

var G__61803 = (i__4737__auto___61802 + (1));
i__4737__auto___61802 = G__61803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e61606){if((e61606 instanceof Object)){
var e = e61606;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e61606;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq61604){
var G__61605 = cljs.core.first(seq61604);
var seq61604__$1 = cljs.core.next(seq61604);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61605,seq61604__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__61608 = arguments.length;
switch (G__61608) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__61609 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__61609) : shadow.dom.build.call(null,G__61609));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61611,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61615 = k61611;
var G__61615__$1 = (((G__61615 instanceof cljs.core.Keyword))?G__61615.fqn:null);
switch (G__61615__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61611,else__4383__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61616){
var vec__61617 = p__61616;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61617,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61617,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.object.Watch{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61610){
var self__ = this;
var G__61610__$1 = this;
return (new cljs.core.RecordIter((0),G__61610__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61612,other61613){
var self__ = this;
var this61612__$1 = this;
return (((!((other61613 == null)))) && ((this61612__$1.constructor === other61613.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61612__$1.key,other61613.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61612__$1.handler,other61613.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61612__$1.__extmap,other61613.__extmap)));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61610){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61620 = cljs.core.keyword_identical_QMARK_;
var expr__61621 = k__4388__auto__;
if(cljs.core.truth_((pred__61620.cljs$core$IFn$_invoke$arity$2 ? pred__61620.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__61621) : pred__61620.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__61621)))){
return (new shadow.object.Watch(G__61610,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61620.cljs$core$IFn$_invoke$arity$2 ? pred__61620.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__61621) : pred__61620.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__61621)))){
return (new shadow.object.Watch(self__.key,G__61610,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61610),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61610){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__61610,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__61614){
var extmap__4419__auto__ = (function (){var G__61623 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61614,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__61614)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61623);
} else {
return G__61623;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__61614),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__61614),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),other.shadow$object$IObject$_id$arity$1(null))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61624_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__61624_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__61625 = cljs.core.seq(self__.watches);
var chunk__61626 = null;
var count__61627 = (0);
var i__61628 = (0);
while(true){
if((i__61628 < count__61627)){
var map__61633 = chunk__61626.cljs$core$IIndexed$_nth$arity$2(null,i__61628);
var map__61633__$1 = (((((!((map__61633 == null))))?(((((map__61633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61633):map__61633);
var watch = map__61633__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__61806 = seq__61625;
var G__61807 = chunk__61626;
var G__61808 = count__61627;
var G__61809 = (i__61628 + (1));
seq__61625 = G__61806;
chunk__61626 = G__61807;
count__61627 = G__61808;
i__61628 = G__61809;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61625);
if(temp__5735__auto__){
var seq__61625__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61625__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61625__$1);
var G__61810 = cljs.core.chunk_rest(seq__61625__$1);
var G__61811 = c__4556__auto__;
var G__61812 = cljs.core.count(c__4556__auto__);
var G__61813 = (0);
seq__61625 = G__61810;
chunk__61626 = G__61811;
count__61627 = G__61812;
i__61628 = G__61813;
continue;
} else {
var map__61635 = cljs.core.first(seq__61625__$1);
var map__61635__$1 = (((((!((map__61635 == null))))?(((((map__61635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61635):map__61635);
var watch = map__61635__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61635__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61635__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__61814 = cljs.core.next(seq__61625__$1);
var G__61815 = null;
var G__61816 = (0);
var G__61817 = (0);
seq__61625 = G__61814;
chunk__61626 = G__61815;
count__61627 = G__61816;
i__61628 = G__61817;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__61637_61818 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__61638_61819 = null;
var count__61639_61820 = (0);
var i__61640_61821 = (0);
while(true){
if((i__61640_61821 < count__61639_61820)){
var child_61822 = chunk__61638_61819.cljs$core$IIndexed$_nth$arity$2(null,i__61640_61821);
shadow.object._destroy_BANG_(child_61822,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__61823 = seq__61637_61818;
var G__61824 = chunk__61638_61819;
var G__61825 = count__61639_61820;
var G__61826 = (i__61640_61821 + (1));
seq__61637_61818 = G__61823;
chunk__61638_61819 = G__61824;
count__61639_61820 = G__61825;
i__61640_61821 = G__61826;
continue;
} else {
var temp__5735__auto___61827 = cljs.core.seq(seq__61637_61818);
if(temp__5735__auto___61827){
var seq__61637_61828__$1 = temp__5735__auto___61827;
if(cljs.core.chunked_seq_QMARK_(seq__61637_61828__$1)){
var c__4556__auto___61829 = cljs.core.chunk_first(seq__61637_61828__$1);
var G__61830 = cljs.core.chunk_rest(seq__61637_61828__$1);
var G__61831 = c__4556__auto___61829;
var G__61832 = cljs.core.count(c__4556__auto___61829);
var G__61833 = (0);
seq__61637_61818 = G__61830;
chunk__61638_61819 = G__61831;
count__61639_61820 = G__61832;
i__61640_61821 = G__61833;
continue;
} else {
var child_61834 = cljs.core.first(seq__61637_61828__$1);
shadow.object._destroy_BANG_(child_61834,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__61835 = cljs.core.next(seq__61637_61828__$1);
var G__61836 = null;
var G__61837 = (0);
var G__61838 = (0);
seq__61637_61818 = G__61835;
chunk__61638_61819 = G__61836;
count__61639_61820 = G__61837;
i__61640_61821 = G__61838;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_61839 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_61839 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_61839);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__61642 = arguments.length;
switch (G__61642) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__61644 = arguments.length;
switch (G__61644) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61842 = arguments.length;
var i__4737__auto___61843 = (0);
while(true){
if((i__4737__auto___61843 < len__4736__auto___61842)){
args__4742__auto__.push((arguments[i__4737__auto___61843]));

var G__61844 = (i__4737__auto___61843 + (1));
i__4737__auto___61843 = G__61844;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_61845 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5733__auto___61846 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5733__auto___61846)){
var dom_61847 = temp__5733__auto___61846;
shadow.dom.set_data(dom_61847,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_61847,dom_events_61845);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_61847], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_61847], 0));
} else {
var temp__5735__auto___61848 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___61848)){
var dom_fn_61849 = temp__5735__auto___61848;
var dom_61850 = (function (){var G__61649 = (dom_fn_61849.cljs$core$IFn$_invoke$arity$2 ? dom_fn_61849.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_61849.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__61649) : shadow.dom.build.call(null,G__61649));
})();
shadow.dom.set_data(dom_61850,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_61850], 0));

shadow.object.bind_dom_events(oref,dom_61850,dom_events_61845);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_61850], 0));
} else {
}
}

var temp__5735__auto___61851 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___61851)){
var watches_61852 = temp__5735__auto___61851;
var seq__61650_61853 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_61852));
var chunk__61651_61854 = null;
var count__61652_61855 = (0);
var i__61653_61856 = (0);
while(true){
if((i__61653_61856 < count__61652_61855)){
var vec__61660_61857 = chunk__61651_61854.cljs$core$IIndexed$_nth$arity$2(null,i__61653_61856);
var attr_61858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61660_61857,(0),null);
var handler_61859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61660_61857,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_61858,((function (seq__61650_61853,chunk__61651_61854,count__61652_61855,i__61653_61856,vec__61660_61857,attr_61858,handler_61859,watches_61852,temp__5735__auto___61851,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_61859.cljs$core$IFn$_invoke$arity$3 ? handler_61859.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_61859.call(null,oref,old,new$));
});})(seq__61650_61853,chunk__61651_61854,count__61652_61855,i__61653_61856,vec__61660_61857,attr_61858,handler_61859,watches_61852,temp__5735__auto___61851,oid,parent,result_chan,odef,obj,oref))
);


var G__61860 = seq__61650_61853;
var G__61861 = chunk__61651_61854;
var G__61862 = count__61652_61855;
var G__61863 = (i__61653_61856 + (1));
seq__61650_61853 = G__61860;
chunk__61651_61854 = G__61861;
count__61652_61855 = G__61862;
i__61653_61856 = G__61863;
continue;
} else {
var temp__5735__auto___61864__$1 = cljs.core.seq(seq__61650_61853);
if(temp__5735__auto___61864__$1){
var seq__61650_61865__$1 = temp__5735__auto___61864__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61650_61865__$1)){
var c__4556__auto___61866 = cljs.core.chunk_first(seq__61650_61865__$1);
var G__61867 = cljs.core.chunk_rest(seq__61650_61865__$1);
var G__61868 = c__4556__auto___61866;
var G__61869 = cljs.core.count(c__4556__auto___61866);
var G__61870 = (0);
seq__61650_61853 = G__61867;
chunk__61651_61854 = G__61868;
count__61652_61855 = G__61869;
i__61653_61856 = G__61870;
continue;
} else {
var vec__61663_61871 = cljs.core.first(seq__61650_61865__$1);
var attr_61872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61663_61871,(0),null);
var handler_61873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61663_61871,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_61872,((function (seq__61650_61853,chunk__61651_61854,count__61652_61855,i__61653_61856,vec__61663_61871,attr_61872,handler_61873,seq__61650_61865__$1,temp__5735__auto___61864__$1,watches_61852,temp__5735__auto___61851,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_61873.cljs$core$IFn$_invoke$arity$3 ? handler_61873.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_61873.call(null,oref,old,new$));
});})(seq__61650_61853,chunk__61651_61854,count__61652_61855,i__61653_61856,vec__61663_61871,attr_61872,handler_61873,seq__61650_61865__$1,temp__5735__auto___61864__$1,watches_61852,temp__5735__auto___61851,oid,parent,result_chan,odef,obj,oref))
);


var G__61874 = cljs.core.next(seq__61650_61865__$1);
var G__61875 = null;
var G__61876 = (0);
var G__61877 = (0);
seq__61650_61853 = G__61874;
chunk__61651_61854 = G__61875;
count__61652_61855 = G__61876;
i__61653_61856 = G__61877;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq61646){
var G__61647 = cljs.core.first(seq61646);
var seq61646__$1 = cljs.core.next(seq61646);
var G__61648 = cljs.core.first(seq61646__$1);
var seq61646__$2 = cljs.core.next(seq61646__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61647,G__61648,seq61646__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__61668 = arguments.length;
switch (G__61668) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__61666_SHARP_){
var G__61669 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__61666_SHARP_) : node_gen.call(null,p1__61666_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__61669) : shadow.dom.build.call(null,G__61669));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__61670_61879 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__61671_61880 = null;
var count__61672_61881 = (0);
var i__61673_61882 = (0);
while(true){
if((i__61673_61882 < count__61672_61881)){
var obj_61883 = chunk__61671_61880.cljs$core$IIndexed$_nth$arity$2(null,i__61673_61882);
var obj_61884__$1 = shadow.object.get_from_dom(obj_61883);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_61884__$1);


var G__61885 = seq__61670_61879;
var G__61886 = chunk__61671_61880;
var G__61887 = count__61672_61881;
var G__61888 = (i__61673_61882 + (1));
seq__61670_61879 = G__61885;
chunk__61671_61880 = G__61886;
count__61672_61881 = G__61887;
i__61673_61882 = G__61888;
continue;
} else {
var temp__5735__auto___61889 = cljs.core.seq(seq__61670_61879);
if(temp__5735__auto___61889){
var seq__61670_61890__$1 = temp__5735__auto___61889;
if(cljs.core.chunked_seq_QMARK_(seq__61670_61890__$1)){
var c__4556__auto___61891 = cljs.core.chunk_first(seq__61670_61890__$1);
var G__61892 = cljs.core.chunk_rest(seq__61670_61890__$1);
var G__61893 = c__4556__auto___61891;
var G__61894 = cljs.core.count(c__4556__auto___61891);
var G__61895 = (0);
seq__61670_61879 = G__61892;
chunk__61671_61880 = G__61893;
count__61672_61881 = G__61894;
i__61673_61882 = G__61895;
continue;
} else {
var obj_61896 = cljs.core.first(seq__61670_61890__$1);
var obj_61897__$1 = shadow.object.get_from_dom(obj_61896);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_61897__$1);


var G__61898 = cljs.core.next(seq__61670_61890__$1);
var G__61899 = null;
var G__61900 = (0);
var G__61901 = (0);
seq__61670_61879 = G__61898;
chunk__61671_61880 = G__61899;
count__61672_61881 = G__61900;
i__61673_61882 = G__61901;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__61676 = arguments.length;
switch (G__61676) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__61674_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__61674_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__61677){
var vec__61678 = p__61677;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61678,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61678,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__61681_61903 = cljs.core.seq((function (){var G__61686 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__61686) : coll_transform.call(null,G__61686));
})());
var chunk__61682_61904 = null;
var count__61683_61905 = (0);
var i__61684_61906 = (0);
while(true){
if((i__61684_61906 < count__61683_61905)){
var item_61907 = chunk__61682_61904.cljs$core$IIndexed$_nth$arity$2(null,i__61684_61906);
shadow.object.dom_enter(coll_dom,make_item_fn(item_61907));


var G__61908 = seq__61681_61903;
var G__61909 = chunk__61682_61904;
var G__61910 = count__61683_61905;
var G__61911 = (i__61684_61906 + (1));
seq__61681_61903 = G__61908;
chunk__61682_61904 = G__61909;
count__61683_61905 = G__61910;
i__61684_61906 = G__61911;
continue;
} else {
var temp__5735__auto___61912 = cljs.core.seq(seq__61681_61903);
if(temp__5735__auto___61912){
var seq__61681_61913__$1 = temp__5735__auto___61912;
if(cljs.core.chunked_seq_QMARK_(seq__61681_61913__$1)){
var c__4556__auto___61914 = cljs.core.chunk_first(seq__61681_61913__$1);
var G__61915 = cljs.core.chunk_rest(seq__61681_61913__$1);
var G__61916 = c__4556__auto___61914;
var G__61917 = cljs.core.count(c__4556__auto___61914);
var G__61918 = (0);
seq__61681_61903 = G__61915;
chunk__61682_61904 = G__61916;
count__61683_61905 = G__61917;
i__61684_61906 = G__61918;
continue;
} else {
var item_61919 = cljs.core.first(seq__61681_61913__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_61919));


var G__61920 = cljs.core.next(seq__61681_61913__$1);
var G__61921 = null;
var G__61922 = (0);
var G__61923 = (0);
seq__61681_61903 = G__61920;
chunk__61682_61904 = G__61921;
count__61683_61905 = G__61922;
i__61684_61906 = G__61923;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4217__auto__ = count_new;
var y__4218__auto__ = count_children;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var n__4613__auto___61924 = count_children__$1;
var idx_61925 = (0);
while(true){
if((idx_61925 < n__4613__auto___61924)){
var cn_61926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_61925);
var cc_61927 = shadow.object.get_from_dom(cn_61926);
var ckey_61928 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_61927);
var cval_61929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_61927,item_key);
var vec__61687_61930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_61925);
var nkey_61931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61687_61930,(0),null);
var nval_61932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61687_61930,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_61928,nkey_61931)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_61929,nval_61932)))){
} else {
var new_obj_61933 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_61931,nval_61932], null));
shadow.dom.replace_node(cn_61926,new_obj_61933);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_61927);

shadow.object.notify_tree_BANG_(new_obj_61933,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__61934 = (idx_61925 + (1));
idx_61925 = G__61934;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__61690_61935 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__61691_61936 = null;
var count__61692_61937 = (0);
var i__61693_61938 = (0);
while(true){
if((i__61693_61938 < count__61692_61937)){
var item_61939 = chunk__61691_61936.cljs$core$IIndexed$_nth$arity$2(null,i__61693_61938);
shadow.object.dom_enter(coll_dom,make_item_fn(item_61939));


var G__61940 = seq__61690_61935;
var G__61941 = chunk__61691_61936;
var G__61942 = count__61692_61937;
var G__61943 = (i__61693_61938 + (1));
seq__61690_61935 = G__61940;
chunk__61691_61936 = G__61941;
count__61692_61937 = G__61942;
i__61693_61938 = G__61943;
continue;
} else {
var temp__5735__auto___61944 = cljs.core.seq(seq__61690_61935);
if(temp__5735__auto___61944){
var seq__61690_61945__$1 = temp__5735__auto___61944;
if(cljs.core.chunked_seq_QMARK_(seq__61690_61945__$1)){
var c__4556__auto___61946 = cljs.core.chunk_first(seq__61690_61945__$1);
var G__61947 = cljs.core.chunk_rest(seq__61690_61945__$1);
var G__61948 = c__4556__auto___61946;
var G__61949 = cljs.core.count(c__4556__auto___61946);
var G__61950 = (0);
seq__61690_61935 = G__61947;
chunk__61691_61936 = G__61948;
count__61692_61937 = G__61949;
i__61693_61938 = G__61950;
continue;
} else {
var item_61951 = cljs.core.first(seq__61690_61945__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_61951));


var G__61952 = cljs.core.next(seq__61690_61945__$1);
var G__61953 = null;
var G__61954 = (0);
var G__61955 = (0);
seq__61690_61935 = G__61952;
chunk__61691_61936 = G__61953;
count__61692_61937 = G__61954;
i__61693_61938 = G__61955;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4115__auto__ = key;
if(cljs.core.truth_(and__4115__auto__)){
return path;
} else {
return and__4115__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__61694 = "inspect!";
var G__61695 = shadow.object._id(oref);
var G__61696 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__61697 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__61694,G__61695,G__61696,G__61697) : shadow.object.info.call(null,G__61694,G__61695,G__61696,G__61697));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__61698_61957 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__61699_61958 = null;
var count__61700_61959 = (0);
var i__61701_61960 = (0);
while(true){
if((i__61701_61960 < count__61700_61959)){
var vec__61716_61961 = chunk__61699_61958.cljs$core$IIndexed$_nth$arity$2(null,i__61701_61960);
var id_61962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61716_61961,(0),null);
var oref_61963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61716_61961,(1),null);
var G__61719_61964 = "dump";
var G__61720_61965 = id_61962;
var G__61721_61966 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_61963)], 0));
var G__61722_61967 = cljs.core.deref(shadow.object._data(oref_61963));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__61719_61964,G__61720_61965,G__61721_61966,G__61722_61967) : shadow.object.info.call(null,G__61719_61964,G__61720_61965,G__61721_61966,G__61722_61967));


var G__61968 = seq__61698_61957;
var G__61969 = chunk__61699_61958;
var G__61970 = count__61700_61959;
var G__61971 = (i__61701_61960 + (1));
seq__61698_61957 = G__61968;
chunk__61699_61958 = G__61969;
count__61700_61959 = G__61970;
i__61701_61960 = G__61971;
continue;
} else {
var temp__5735__auto___61972 = cljs.core.seq(seq__61698_61957);
if(temp__5735__auto___61972){
var seq__61698_61973__$1 = temp__5735__auto___61972;
if(cljs.core.chunked_seq_QMARK_(seq__61698_61973__$1)){
var c__4556__auto___61974 = cljs.core.chunk_first(seq__61698_61973__$1);
var G__61975 = cljs.core.chunk_rest(seq__61698_61973__$1);
var G__61976 = c__4556__auto___61974;
var G__61977 = cljs.core.count(c__4556__auto___61974);
var G__61978 = (0);
seq__61698_61957 = G__61975;
chunk__61699_61958 = G__61976;
count__61700_61959 = G__61977;
i__61701_61960 = G__61978;
continue;
} else {
var vec__61723_61979 = cljs.core.first(seq__61698_61973__$1);
var id_61980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61723_61979,(0),null);
var oref_61981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61723_61979,(1),null);
var G__61726_61982 = "dump";
var G__61727_61983 = id_61980;
var G__61728_61984 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_61981)], 0));
var G__61729_61985 = cljs.core.deref(shadow.object._data(oref_61981));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__61726_61982,G__61727_61983,G__61728_61984,G__61729_61985) : shadow.object.info.call(null,G__61726_61982,G__61727_61983,G__61728_61984,G__61729_61985));


var G__61986 = cljs.core.next(seq__61698_61973__$1);
var G__61987 = null;
var G__61988 = (0);
var G__61989 = (0);
seq__61698_61957 = G__61986;
chunk__61699_61958 = G__61987;
count__61700_61959 = G__61988;
i__61701_61960 = G__61989;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
