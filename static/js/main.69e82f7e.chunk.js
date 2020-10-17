(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{27:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),u=n(15),i=n(8),o=n(6),s=function(e){return e.game.board},f=function(e,t){return function(n){return function(e,t){return Object(o.a)(s,(function(n){return n[e][t]}))}(e,t)(n).status}},l=function(e){return e.game.size},v=function(e){return e.game.interval},b=n(9),d=n(10);function m(){var e=Object(b.a)(["\n          background-color: white;\n        "]);return m=function(){return e},e}function p(){var e=Object(b.a)(["\n          background-color: green;\n        "]);return p=function(){return e},e}function x(){var e=Object(b.a)(["\n  height: 10px;\n  width: 10px;\n  ","\n"]);return x=function(){return e},e}!function(e){e[e.Empty=0]="Empty",e[e.Alive=1]="Alive",e[e.Dead=2]="Dead"}(r||(r={}));var j=d.b.div(x(),(function(e){switch(e.status){case r.Alive:return Object(d.a)(p());case r.Dead:default:return Object(d.a)(m())}})),O=function(e){var t=e.status;return c.a.createElement(j,{status:t})},y=function(e){var t=e.x,n=e.y,r=Object(i.c)(f(t,n));return c.a.createElement(O,{status:r})};function h(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return h=function(){return e},e}function w(){var e=Object(b.a)([""]);return w=function(){return e},e}var g=d.b.div(w()),E=d.b.div(h()),k=function(){var e=Object(i.c)(l);return c.a.createElement(g,null,new Array(e).fill(null).map((function(t,n){return c.a.createElement(E,{key:n},new Array(e).fill(null).map((function(e,t){return c.a.createElement(y,{key:"".concat(n).concat(t),x:n,y:t})})))})))},A=n(11),G=function(e){return e[Math.floor(Math.random()*e.length)]},z=function(e){var t=e.x,n=e.y,a=e.status;return{x:t,y:n,status:void 0===a?r.Empty:a}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=arguments.length>1?arguments[1]:void 0;return new Array(e).fill(null).map((function(n,a){return new Array(e).fill(null).map((function(e,n){return z({x:a,y:n,status:null!==t&&void 0!==t?t:G([r.Alive,r.Empty])})}))}))},I=n(20),C=n(26),J=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,0],[1,1],[1,-1]],M=function(e,t,n){var r=e+t;switch(!0){case r===n:return 0;case r<0:return n-1;default:return r}},B=function(e,t){var n=e.x,a=e.y;return J.reduce((function(e,c){var u=Object(C.a)(c,2),i=u[0],o=u[1],s=t.length;return e+Number(t[M(n,i,s)][M(a,o,s)].status===r.Alive)}),0)},F=function(e){return e.map((function(t){return t.map((function(t){return function(e,t){var n=B(e,t),a=e.x,c=e.y;if(e.status===r.Alive)switch(!0){case n<2:case n>3:return z({x:a,y:c,status:r.Dead});default:return z(Object(I.a)({},e))}else switch(!0){case 3===n:return z({x:a,y:c,status:r.Alive});default:return z(Object(I.a)({},e))}}(t,e)}))}))},N={active:!1,board:D(75),year:0,size:75,interval:1},S=Object(A.b)({name:"game",initialState:N,reducers:{startGame:function(e){e.active=!0},pauseGame:function(e){e.active=!1},resetGame:function(e,t){var n,r=t.payload,a=null!==(n=null===r||void 0===r?void 0:r.size)&&void 0!==n?n:e.size;e.board=D(a),e.size=a},advanceGame:function(e){var t=e.board;e.board=F(t),e.year++}}}),T=S.actions,q=S.reducer,H=T.advanceGame,K=T.startGame,L=T.pauseGame,P=q,Q=function(){var e=Object(i.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(){return e(K())}},"start"),c.a.createElement("div",{onClick:function(){return e(L())}},"pause"),c.a.createElement(k,null))},R=n(17),U=n(4),V=Object(U.c)({game:P}),W=n(7),X=n.n(W),Y=n(5),Z=X.a.mark(ee),$=X.a.mark(te);function _(e){return Object(R.b)((function(t){var n=setInterval((function(){return t("")}),e);return function(){clearInterval(n)}}))}function ee(){var e,t;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Y.e)(v);case 2:return e=n.sent,n.next=5,Object(Y.a)(_,e);case 5:t=n.sent,n.prev=6;case 7:return n.next=10,Object(Y.f)(t);case 10:return n.next=12,Object(Y.d)(H());case 12:n.next=7;break;case 14:return n.prev=14,t.close(),n.finish(14);case 17:case"end":return n.stop()}}),Z,null,[[6,,14,17]])}function te(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Y.f)(K);case 2:if(!t.sent){t.next=12;break}return t.next=5,Object(Y.c)(ee);case 5:return e=t.sent,t.next=8,Object(Y.f)(L);case 8:return t.next=10,Object(Y.b)(e);case 10:t.next=0;break;case 12:case"end":return t.stop()}}),$)}var ne=X.a.mark(re);function re(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.c)(te);case 2:case"end":return e.stop()}}),ne)}var ae=X.a.mark(ce);function ce(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.c)(re);case 2:case"end":return e.stop()}}),ae)}var ue=Object(R.a)(),ie=Object(A.a)({reducer:V,middleware:function(e){return e().concat(ue)},devTools:!1});ue.run(ce);var oe=ie;n(40);Object(u.render)(c.a.createElement(i.a,{store:oe},c.a.createElement(Q,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.69e82f7e.chunk.js.map