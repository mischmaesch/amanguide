goog.provide('amanguide_web.core');
amanguide_web.core.dev_setup = (function amanguide_web$core$dev_setup(){
if(amanguide_web.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
amanguide_web.core.mount_root = (function amanguide_web$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [amanguide_web.views.main_panel], null),root_el);
});
amanguide_web.core.init = (function amanguide_web$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("amanguide-web.events","initialize-db","amanguide-web.events/initialize-db",1962644755)], null));

amanguide_web.core.dev_setup();

return amanguide_web.core.mount_root();
});

//# sourceMappingURL=amanguide_web.core.js.map
