goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__65848){
var map__65849 = p__65848;
var map__65849__$1 = (((((!((map__65849 == null))))?(((((map__65849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65849):map__65849);
var m = map__65849__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65849__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65849__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__65851_65968 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65852_65969 = null;
var count__65853_65970 = (0);
var i__65854_65971 = (0);
while(true){
if((i__65854_65971 < count__65853_65970)){
var f_65972 = chunk__65852_65969.cljs$core$IIndexed$_nth$arity$2(null,i__65854_65971);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_65972], 0));


var G__65973 = seq__65851_65968;
var G__65974 = chunk__65852_65969;
var G__65975 = count__65853_65970;
var G__65976 = (i__65854_65971 + (1));
seq__65851_65968 = G__65973;
chunk__65852_65969 = G__65974;
count__65853_65970 = G__65975;
i__65854_65971 = G__65976;
continue;
} else {
var temp__5735__auto___65977 = cljs.core.seq(seq__65851_65968);
if(temp__5735__auto___65977){
var seq__65851_65978__$1 = temp__5735__auto___65977;
if(cljs.core.chunked_seq_QMARK_(seq__65851_65978__$1)){
var c__4556__auto___65979 = cljs.core.chunk_first(seq__65851_65978__$1);
var G__65980 = cljs.core.chunk_rest(seq__65851_65978__$1);
var G__65981 = c__4556__auto___65979;
var G__65982 = cljs.core.count(c__4556__auto___65979);
var G__65983 = (0);
seq__65851_65968 = G__65980;
chunk__65852_65969 = G__65981;
count__65853_65970 = G__65982;
i__65854_65971 = G__65983;
continue;
} else {
var f_65986 = cljs.core.first(seq__65851_65978__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_65986], 0));


var G__65987 = cljs.core.next(seq__65851_65978__$1);
var G__65988 = null;
var G__65989 = (0);
var G__65990 = (0);
seq__65851_65968 = G__65987;
chunk__65852_65969 = G__65988;
count__65853_65970 = G__65989;
i__65854_65971 = G__65990;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_65991 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_65991], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_65991)))?cljs.core.second(arglists_65991):arglists_65991)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__65856_65992 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65857_65993 = null;
var count__65858_65994 = (0);
var i__65859_65995 = (0);
while(true){
if((i__65859_65995 < count__65858_65994)){
var vec__65870_65996 = chunk__65857_65993.cljs$core$IIndexed$_nth$arity$2(null,i__65859_65995);
var name_65997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65870_65996,(0),null);
var map__65873_65998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65870_65996,(1),null);
var map__65873_65999__$1 = (((((!((map__65873_65998 == null))))?(((((map__65873_65998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65873_65998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65873_65998):map__65873_65998);
var doc_66000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65873_65999__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65873_65999__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_65997], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_66001], 0));

if(cljs.core.truth_(doc_66000)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_66000], 0));
} else {
}


var G__66002 = seq__65856_65992;
var G__66003 = chunk__65857_65993;
var G__66004 = count__65858_65994;
var G__66005 = (i__65859_65995 + (1));
seq__65856_65992 = G__66002;
chunk__65857_65993 = G__66003;
count__65858_65994 = G__66004;
i__65859_65995 = G__66005;
continue;
} else {
var temp__5735__auto___66006 = cljs.core.seq(seq__65856_65992);
if(temp__5735__auto___66006){
var seq__65856_66007__$1 = temp__5735__auto___66006;
if(cljs.core.chunked_seq_QMARK_(seq__65856_66007__$1)){
var c__4556__auto___66008 = cljs.core.chunk_first(seq__65856_66007__$1);
var G__66009 = cljs.core.chunk_rest(seq__65856_66007__$1);
var G__66010 = c__4556__auto___66008;
var G__66011 = cljs.core.count(c__4556__auto___66008);
var G__66012 = (0);
seq__65856_65992 = G__66009;
chunk__65857_65993 = G__66010;
count__65858_65994 = G__66011;
i__65859_65995 = G__66012;
continue;
} else {
var vec__65876_66013 = cljs.core.first(seq__65856_66007__$1);
var name_66014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65876_66013,(0),null);
var map__65879_66015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65876_66013,(1),null);
var map__65879_66016__$1 = (((((!((map__65879_66015 == null))))?(((((map__65879_66015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65879_66015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65879_66015):map__65879_66015);
var doc_66017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879_66016__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879_66016__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_66014], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_66018], 0));

if(cljs.core.truth_(doc_66017)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_66017], 0));
} else {
}


var G__66019 = cljs.core.next(seq__65856_66007__$1);
var G__66020 = null;
var G__66021 = (0);
var G__66022 = (0);
seq__65856_65992 = G__66019;
chunk__65857_65993 = G__66020;
count__65858_65994 = G__66021;
i__65859_65995 = G__66022;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__65881 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__65882 = null;
var count__65883 = (0);
var i__65884 = (0);
while(true){
if((i__65884 < count__65883)){
var role = chunk__65882.cljs$core$IIndexed$_nth$arity$2(null,i__65884);
var temp__5735__auto___66023__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___66023__$1)){
var spec_66024 = temp__5735__auto___66023__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_66024)], 0));
} else {
}


var G__66025 = seq__65881;
var G__66026 = chunk__65882;
var G__66027 = count__65883;
var G__66028 = (i__65884 + (1));
seq__65881 = G__66025;
chunk__65882 = G__66026;
count__65883 = G__66027;
i__65884 = G__66028;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__65881);
if(temp__5735__auto____$1){
var seq__65881__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__65881__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65881__$1);
var G__66029 = cljs.core.chunk_rest(seq__65881__$1);
var G__66030 = c__4556__auto__;
var G__66031 = cljs.core.count(c__4556__auto__);
var G__66032 = (0);
seq__65881 = G__66029;
chunk__65882 = G__66030;
count__65883 = G__66031;
i__65884 = G__66032;
continue;
} else {
var role = cljs.core.first(seq__65881__$1);
var temp__5735__auto___66033__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___66033__$2)){
var spec_66034 = temp__5735__auto___66033__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_66034)], 0));
} else {
}


var G__66035 = cljs.core.next(seq__65881__$1);
var G__66036 = null;
var G__66037 = (0);
var G__66038 = (0);
seq__65881 = G__66035;
chunk__65882 = G__66036;
count__65883 = G__66037;
i__65884 = G__66038;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__66039 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__66040 = cljs.core.ex_cause(t);
via = G__66039;
t = G__66040;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__65892 = datafied_throwable;
var map__65892__$1 = (((((!((map__65892 == null))))?(((((map__65892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65892):map__65892);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65892__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65892__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65892__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__65893 = cljs.core.last(via);
var map__65893__$1 = (((((!((map__65893 == null))))?(((((map__65893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65893):map__65893);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65893__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65893__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65893__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__65894 = data;
var map__65894__$1 = (((((!((map__65894 == null))))?(((((map__65894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65894):map__65894);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__65895 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__65895__$1 = (((((!((map__65895 == null))))?(((((map__65895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65895):map__65895);
var top_data = map__65895__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65895__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__65900 = phase;
var G__65900__$1 = (((G__65900 instanceof cljs.core.Keyword))?G__65900.fqn:null);
switch (G__65900__$1) {
case "read-source":
var map__65901 = data;
var map__65901__$1 = (((((!((map__65901 == null))))?(((((map__65901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65901):map__65901);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__65903 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__65903__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65903,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__65903);
var G__65903__$2 = (cljs.core.truth_((function (){var fexpr__65905 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__65905.cljs$core$IFn$_invoke$arity$1 ? fexpr__65905.cljs$core$IFn$_invoke$arity$1(source) : fexpr__65905.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__65903__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__65903__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65903__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__65903__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__65906 = top_data;
var G__65906__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65906,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__65906);
var G__65906__$2 = (cljs.core.truth_((function (){var fexpr__65907 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__65907.cljs$core$IFn$_invoke$arity$1 ? fexpr__65907.cljs$core$IFn$_invoke$arity$1(source) : fexpr__65907.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__65906__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__65906__$1);
var G__65906__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65906__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__65906__$2);
var G__65906__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65906__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__65906__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65906__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__65906__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__65908 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65908,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65908,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65908,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65908,(3),null);
var G__65911 = top_data;
var G__65911__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65911,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__65911);
var G__65911__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65911__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__65911__$1);
var G__65911__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65911__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__65911__$2);
var G__65911__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65911__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__65911__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65911__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__65911__$4;
}

break;
case "execution":
var vec__65913 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65913,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65913,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65913,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65913,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__65891_SHARP_){
var or__4126__auto__ = (p1__65891_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__65917 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__65917.cljs$core$IFn$_invoke$arity$1 ? fexpr__65917.cljs$core$IFn$_invoke$arity$1(p1__65891_SHARP_) : fexpr__65917.call(null,p1__65891_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__65918 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__65918__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65918,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__65918);
var G__65918__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65918__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__65918__$1);
var G__65918__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65918__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__65918__$2);
var G__65918__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65918__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__65918__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65918__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__65918__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65900__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__65921){
var map__65922 = p__65921;
var map__65922__$1 = (((((!((map__65922 == null))))?(((((map__65922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65922):map__65922);
var triage_data = map__65922__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__65924 = phase;
var G__65924__$1 = (((G__65924 instanceof cljs.core.Keyword))?G__65924.fqn:null);
switch (G__65924__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__65925 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__65926 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__65927 = loc;
var G__65928 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__65929_66053 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__65930_66054 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__65931_66055 = true;
var _STAR_print_fn_STAR__temp_val__65932_66056 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65931_66055);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65932_66056);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65919_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__65919_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65930_66054);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65929_66053);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__65925,G__65926,G__65927,G__65928) : format.call(null,G__65925,G__65926,G__65927,G__65928));

break;
case "macroexpansion":
var G__65933 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__65934 = cause_type;
var G__65935 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__65936 = loc;
var G__65937 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__65933,G__65934,G__65935,G__65936,G__65937) : format.call(null,G__65933,G__65934,G__65935,G__65936,G__65937));

break;
case "compile-syntax-check":
var G__65938 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__65939 = cause_type;
var G__65940 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__65941 = loc;
var G__65942 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__65938,G__65939,G__65940,G__65941,G__65942) : format.call(null,G__65938,G__65939,G__65940,G__65941,G__65942));

break;
case "compilation":
var G__65943 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__65944 = cause_type;
var G__65945 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__65946 = loc;
var G__65947 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__65943,G__65944,G__65945,G__65946,G__65947) : format.call(null,G__65943,G__65944,G__65945,G__65946,G__65947));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__65948 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__65949 = symbol;
var G__65950 = loc;
var G__65951 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__65952_66057 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__65953_66058 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__65954_66059 = true;
var _STAR_print_fn_STAR__temp_val__65955_66060 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65954_66059);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65955_66060);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65920_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__65920_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65953_66058);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65952_66057);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__65948,G__65949,G__65950,G__65951) : format.call(null,G__65948,G__65949,G__65950,G__65951));
} else {
var G__65956 = "Execution error%s at %s(%s).\n%s\n";
var G__65957 = cause_type;
var G__65958 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__65959 = loc;
var G__65960 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__65956,G__65957,G__65958,G__65959,G__65960) : format.call(null,G__65956,G__65957,G__65958,G__65959,G__65960));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65924__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
