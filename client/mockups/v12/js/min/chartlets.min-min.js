!function(t){function n(t,n){var e=t.getAttribute(n);return e?e.replace(/, +/g,",").split(/ +/g):null}function e(t){var e,r,a,i;for(e=n(t,"data-opts")||[],a={},i=0;i<e.length;i++)r=e[i].split(":"),a[r[0]]=r[1];return a}function r(t){var n=t.match(/\[[^\[]+\]/g)||[],e,r;for(e=0;e<n.length;e++)for(n[e]=n[e].match(/[-\d\.]+/g),r=0;r<n[e].length;r++)n[e][r]=+n[e][r];return n}function a(){return"stack"===K.transform}function i(){return void 0!==K.fill}function o(t,n){return n?f(t):c(t)}function c(t){var n=Array.prototype.concat.apply([],t);return("bar"===j||a())&&n.push(0),[Math.min.apply(null,n),Math.max.apply(null,n)]}function f(t){return c(M(t).concat(t))}function u(t){var n={r:0,g:0,b:0,a:1};return t.match(/#/)?n=h(t):t.match(/rgb/)?n=l(t):t.match(/hsl/)&&(n=d(t)),n}function l(t){var n=t.match(/[\d\.]+/g);return{r:+n[0],g:+n[1],b:+n[2],a:+n[3]||1}}function h(t){var n=t.match(/\w/g),e;return 3===n.length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]),e=+("0x"+n.join("")),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e,a:1}}function d(t){function n(t,n,e){return 0>e&&(e+=1),e>1&&(e-=1),1/6>e?t+6*(n-t)*e:.5>e?n:2/3>e?t+(n-t)*(2/3-e)*6:t}var e,r,a,i,o,c,f,u,l,h;return e=t.match(/[\d\.]+/g),r=+e[0]/360,a=+e[1]/100,i=+e[2]/100,h=(+e[3]||1)/1,0===a?o=c=f=i:(u=.5>i?i*(1+a):i+a-i*a,l=2*i-u,o=n(l,u,r+1/3),c=n(l,u,r),f=n(l,u,r-1/3)),{r:255*o,g:255*c,b:255*f,a:h}}function s(t,n){return t.a*=n,t}function g(t){return"rgba("+[Math.round(t.r),Math.round(t.g),Math.round(t.b),t.a].join(",")+")"}function b(){D=!0,B.translate(E,0),B.rotate(Math.PI/2)}function m(t){return(D?O:E)/(t-1)}function v(t,n){return t*m(n)}function p(t){var n=D?E:O;return n-n*((t-G[0])/(G[1]-G[0]))}function y(t){var n,e=0;for(n=0;n<t.length;n++)e+=t[n];return e}function T(t,n){var e,r=0;for(e=0;e<t.length;e++)r+=t[e][n];return r}function M(t){var n,e=[];for(n=0;n<t[0].length;n++)e.push(T(t,n));return e}function w(t){return L[t]||"#000"}function A(t,n,e,r,i){var o=0,c,f,u;for(u=m(t.length),B.lineWidth=Math.min(3,e),B.lineJoin="round",B.beginPath(),B.strokeStyle=n,B.moveTo(0,p(t[0]));++o<t.length;)c=v(o,t.length),f=p(t[o]),a()&&(K.shape="straight"),x(t,o,c,f,u,K.shape);if(r){if(B.fillStyle=r,i)for(;--o>=0;)c=v(o,i.length),f=p(i[o]),x(i,o,c,f,u,K.shape);else B.lineTo(c,p(0)),B.lineTo(0,p(0));B.fill()}else B.stroke()}function x(t,n,e,r,a,i){var o,c;"smooth"===i?(o=v(n-.5,t.length),c=p(t[n-1]),B.bezierCurveTo(o,c,o,r,e,r)):("step"===i&&(B.lineTo(e-a/2,p(t[n-1])),B.lineTo(e-a/2,r)),B.lineTo(e,r))}function k(t,n,e,r){for(var a=-1,i,o,c;++a<t.length;)i=v(a,t.length),o=p(t[a]),"square"===n?(c=2.5*Math.max(2,r),S(e,i-c/2,o+c/2,c,c)):(c=r+1,P(e,i,o,c))}function P(t,n,e,r){B.fillStyle=t,B.beginPath(),B.arc(n,e,r,2*Math.PI,!1),B.fill()}function S(t,n,e,r,a){B.fillStyle=t,B.fillRect(n,e-a,r,a)}function q(){var t,n;if(!isNaN(+K.axis)){for(t=0,n=Math.round(p(K.axis)),B.lineWidth=1,B.lineJoin="round",B.strokeStyle="#bbb",B.moveTo(t,n);E>t;)B.lineTo(t+5,n),B.moveTo(t+8,n),t+=8;B.stroke()}}function R(t,n,e,r){return+t+(+n-+t)*(e/r)}function z(t,n,e){var r,a,i=[t];for(r=0;r<t.length;r++)for(a=1;e>a;a++)i[a]||(i[a]=[]),i[a][r]=R(t[r],n[r],a,e);return i.concat([n])}function I(t,n,e){var r,a=[];for(r=0;r<t.length;r++)a.push(z(t[r],n[r],e));return a}function F(t,n,e){function r(){var n=[];for(i=0;i<c.length;i++)n.push(c[i][a]);N.update(t,n),++a<=o&&V(r)}var a=1,i=0,o=8,c=I(n,e,o);return n.length?void V(r):N.update(t,e)}function J(){var t,n,e,r,o,c;for(q(),t=0;t<H.length;t++)n=H[t],e=w(t),a()&&(n=M(H.slice(0,t+1)),c=t>0?M(H.slice(0,t)):null),A(n,e,K.stroke||1.5,null),(a()||i())&&(o=K.alpha||(a()?1:.5),r=g(s(u(e),o)),A(n,e,0,r,c)),K.cap&&k(n,K.cap,e,B.lineWidth)}function W(){var t,n,e,r,i,o,c,f,u;for("horiz"===K.orient&&b(),q(),B.lineWidth=K.stroke||1,B.lineJoin="miter",u=H[0].length,t=0;t<H.length;t++)for(n=0;u>n;n++)e=1,r=D?O:E,c=r/u/H.length-e/H.length*t-1,i=e/2+v(n,u+1)+c*t+1,o=p(H[t][n]),f=o-p(0)||1,a()&&(c=r/u-2,i=v(n,u+1),o=p(T(H.slice(0,t+1),n))),S(w(t),i,o,c,f)}function _(){var t,n,e,r,a,i,o,c;for(n=E/2,e=O/2,r=Math.min(n,e)-2,a=1.5*Math.PI,i=0,o=H[0],c=y(o),t=0;t<o.length;t++)B.fillStyle=w(t),B.beginPath(),i=a+o[t]/c*2*Math.PI,B.arc(n,e,r,a,i,!1),B.lineTo(n,e),B.fill(),a=i}function C(i){t.devicePixelRatio>1&&(i.__resized||(i.style.width=i.width+"px",i.style.height=i.height+"px",i.width=2*i.width,i.height=2*i.height,i.__resized=!0)),j=n(i,"data-type")[0],H=r(i.getAttribute("data-sets")),K=e(i),B=i.getContext("2d"),E=i.width,O=i.height,L=Q[K.theme]||n(i,"data-colors")||Q.basic,G=n(i,"data-range")||o(H,a()),D=!1,i.width=i.width,K.bgcolor&&S(K.bgcolor||"#fff",0,0,E,-O);try{U[j](B,E,O,H,K)}catch(c){console.error(c.message)}}var N,j,B,E,O,D,G,H,K,L,Q,U,V;j=null,B=null,E=0,O=0,D=!1,G=[0,0],H=[],K={},U={line:J,bar:W,pie:_},Q={blues:["#7eb5d6","#2a75a9","#214b6b","#dfc184","#8f6048"],money:["#009b6d","#89d168","#d3eb87","#666666","#aaaaaa"],circus:["#9351a4","#ff99cc","#e31a1c","#66cdaa","#ffcc33"],party:["#ffcc00","#ff66cc","#3375cd","#e43b3b","#96cb3f"],garden:["#3c7bb0","#ffa07a","#2e8b57","#7eb5d6","#89d168"],crayon:["#468ff0","#ff8000","#00c000","#ffd700","#ff4500"],ocean:["#3375cd","#62ccb2","#4aa5d5","#a6cee3","#ffcc33"],spring:["#ed729d","#72caed","#9e9ac8","#a6d854","#f4a582"],beach:["#f92830","#2fb4b1","#ffa839","#3375cd","#5fd1d5"],fire:["#dc143c","#ff8c00","#ffcc33","#b22222","#cd8540"]},V=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(n){t.setTimeout(n,1e3/60)},N={render:function(t){var n;for(t||(t=document.querySelectorAll(".chartlet")),n=0;n<t.length;n++)C(t[n])},setTheme:function(t,n){Q[t]=n},getTheme:function(t){return t?Q[t]:L},setRenderer:function(t,n){U[t]=n},update:function(t,n,e){return"string"==typeof t&&(t=document.getElementById(t)),e&&"linear"===e.transition?void new F(t,r(t.getAttribute("data-sets")),n):(t.setAttribute("data-sets",JSON.stringify(n)),void this.render([t]))}},t.Chartlets=N}(window);