(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{19:function(t,e,n){t.exports=n(32)},32:function(t,e,n){"use strict";n.r(e);var r,a=n(0),u=n.n(a),c=n(9),i=n(7),o=n(2),l=function(t){return t.game.board},f=function(t,e){return function(n){return function(t,e){return Object(o.a)(l,(function(n){return n[t][e]}))}(t,e)(n).status}},s=n(3),d=n(4);function v(){var t=Object(s.a)(["\n          background-color: white;\n        "]);return v=function(){return t},t}function m(){var t=Object(s.a)(["\n          background-color: green;\n        "]);return m=function(){return t},t}function b(){var t=Object(s.a)(["\n  height: 10px;\n  width: 10px;\n  ","\n"]);return b=function(){return t},t}!function(t){t[t.Empty=0]="Empty",t[t.Alive=1]="Alive",t[t.Dead=2]="Dead"}(r||(r={}));var y=d.b.div(b(),(function(t){switch(t.status){case r.Alive:return Object(d.a)(m());case r.Dead:default:return Object(d.a)(v())}})),p=function(t){var e=t.status;return u.a.createElement(y,{status:e})},h=function(t){var e=t.x,n=t.y,r=Object(i.c)(f(e,n));return u.a.createElement(p,{status:r})};function j(){var t=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return j=function(){return t},t}function O(){var t=Object(s.a)([""]);return O=function(){return t},t}var g=d.b.div(O()),E=d.b.div(j()),x=function(){return u.a.createElement(g,null,new Array(50).fill(null).map((function(t,e){return u.a.createElement(E,{key:e},new Array(50).fill(null).map((function(t,n){return u.a.createElement(h,{key:"".concat(e).concat(n),x:e,y:n})})))})))},w=n(5),A=function(t){return t[Math.floor(Math.random()*t.length)]},k=function(t){var e=t.x,n=t.y,a=t.status;return{x:e,y:n,status:void 0===a?r.Empty:a}},D=n(12),G=n(18),J=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,0],[1,1],[1,-1]],M=function(t,e,n){var r=t+e;switch(!0){case r===n:return 0;case r<0:return n-1;default:return r}},B=function(t,e){var n=t.x,a=t.y;return J.reduce((function(t,u){var c=Object(G.a)(u,2),i=c[0],o=c[1],l=e.length;return t+Number(e[M(n,i,l)][M(a,o,l)].status===r.Alive)}),0)},C=function(t){return t.map((function(e){return e.map((function(e){return function(t,e){var n=B(t,e),a=t.x,u=t.y;if(t.status===r.Alive)switch(!0){case n<2:case n>3:return k({x:a,y:u,status:r.Dead});default:return k(Object(D.a)({},t))}else switch(!0){case 3===n:return k({x:a,y:u,status:r.Alive});default:return k(Object(D.a)({},t))}}(e,t)}))}))},F={board:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e=arguments.length>1?arguments[1]:void 0;return new Array(t).fill(null).map((function(n,a){return new Array(t).fill(null).map((function(t,n){return k({x:a,y:n,status:null!==e&&void 0!==e?e:A([r.Alive,r.Empty])})}))}))}(50),year:0},I=Object(w.b)({name:"game",initialState:F,reducers:{advanceGame:function(t){var e=t.board,n=t.year;return{board:C(e),year:n+1}}}}),N=I.actions,S=I.reducer,T=N.advanceGame,q=S,z=function(){var t=Object(i.b)();return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{onClick:function(){return t(T())}},"advance"),";",u.a.createElement(x,null))},H=n(1),K=Object(H.c)({game:q}),L=Object(w.a)({reducer:K,devTools:!1});n(31);Object(c.render)(u.a.createElement(i.a,{store:L},u.a.createElement(z,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.94cbe967.chunk.js.map