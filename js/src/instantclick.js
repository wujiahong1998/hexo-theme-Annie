// build time:Fri Feb 07 2020 19:35:43 GMT+0800 (GMT+08:00)
var InstantClick=function(t,e){function n(t){var e=t.indexOf("#");return e<0?t:t.substr(0,e)}function r(t){for(;t&&"A"!=t.nodeName;)t=t.parentNode;return t}function a(t){do{if(!t.hasAttribute)break;if(t.hasAttribute("data-instant"))return!1;if(t.hasAttribute("data-no-instant"))return!0}while(t=t.parentNode);return!1}function o(t){do{if(!t.hasAttribute)break;if(t.hasAttribute("data-no-instant"))return!1;if(t.hasAttribute("data-instant"))return!0}while(t=t.parentNode);return!1}function s(t){var i=e.protocol+"//"+e.host;return!(t.target||t.hasAttribute("download")||0!=t.href.indexOf(i+"/")||t.href.indexOf("#")>-1&&n(t.href)==L||(M?!o(t):a(t)))}function d(t,e,n,i){for(var r=!1,a=0;a<q[t].length;a++)if("receive"==t){var o=q[t][a](e,n,i);o&&("body"in o&&(n=o.body),"title"in o&&(i=o.title),r=o)}else q[t][a](e,n,i);return r}function l(e,i,r,a){if(t.documentElement.replaceChild(i,t.body),r){history.pushState(null,null,r);var o=r.indexOf("#"),s=o>-1&&t.getElementById(r.substr(o+1)),l=0;if(s)for(;s.offsetParent;)l+=s.offsetTop,s=s.offsetParent;scrollTo(0,l),L=n(r)}else scrollTo(0,a);D&&t.title==e?t.title=e+String.fromCharCode(160):t.title=e,b(),G.done(),d("change",!1);var f=t.createEvent("HTMLEvents");f.initEvent("instantclick:newpage",!0,!0),dispatchEvent(f)}function f(){P=!1,R=!1}function c(t){return t.replace(/<noscript[\s\S]+<\/noscript>/gi,"")}function u(t){if(!(k>+new Date-500)){var e=r(t.target);e&&s(e)&&g(e.href)}}function h(t){if(!(k>+new Date-500)){var e=r(t.target);e&&s(e)&&(e.addEventListener("mouseout",m),H?(A=e.href,x=setTimeout(g,H)):g(e.href))}}function v(t){k=+new Date;var e=r(t.target);e&&s(e)&&(O?e.removeEventListener("mousedown",u):e.removeEventListener("mouseover",h),g(e.href))}function p(t){var e=r(t.target);e&&s(e)&&(t.which>1||t.metaKey||t.ctrlKey||(t.preventDefault(),T(e.href)))}function m(){return x?(clearTimeout(x),void(x=!1)):void(P&&!R&&(C.abort(),f()))}function y(){if(!(C.readyState<4)&&0!=C.status){if(K.ready=+new Date-K.start,C.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var e=t.implementation.createHTMLDocument("");e.documentElement.innerHTML=c(C.responseText),I=e.title,W=e.body;var i=d("receive",S,W,I);i&&("body"in i&&(W=i.body),"title"in i&&(I=i.title));var r=n(S);N[r]={body:W,title:I,scrollY:r in N?N[r].scrollY:0};for(var a,o,s=e.head.children,l=0,f=s.length-1;f>=0;f--)if(a=s[f],a.hasAttribute("data-instant-track")){o=a.getAttribute("href")||a.getAttribute("src")||a.innerHTML;for(var u=X.length-1;u>=0;u--)X[u]==o&&l++}l!=X.length&&(z=!0)}else z=!0;R&&(R=!1,T(S))}}function b(e){if(t.body.addEventListener("touchstart",v,!0),O?t.body.addEventListener("mousedown",u,!0):t.body.addEventListener("mouseover",h,!0),t.body.addEventListener("click",p,!0),!e){var n,r,a,o,s=t.body.getElementsByTagName("script");for(i=0,j=s.length;i<j;i++)n=s[i],n.hasAttribute("data-no-instant")||(r=t.createElement("script"),n.src&&(r.src=n.src),n.innerHTML&&(r.innerHTML=n.innerHTML),a=n.parentNode,o=n.nextSibling,a.removeChild(n),a.insertBefore(r,o))}}function g(t){!O&&"display"in K&&+new Date-(K.start+K.display)<100||(x&&(clearTimeout(x),x=!1),t||(t=A),P&&(t==S||R)||(P=!0,R=!1,S=t,W=!1,z=!1,K={start:+new Date},d("fetch"),C.open("GET",t),C.send()))}function T(t){return"display"in K||(K.display=+new Date-K.start),x||!P?x&&S&&S!=t?void(e.href=t):(g(t),G.start(0,!0),d("wait"),void(R=!0)):R?void(e.href=t):z?void(e.href=S):W?(N[L].scrollY=pageYOffset,f(),void l(I,W,S)):(G.start(0,!0),d("wait"),void(R=!0))}function E(){if(!L){if(!F)return void d("change",!0);for(var i=arguments.length-1;i>=0;i--){var r=arguments[i];r===!0?M=!0:"mousedown"==r?O=!0:"number"==typeof r&&(H=r)}L=n(e.href),N[L]={body:t.body,title:t.title,scrollY:pageYOffset};for(var a,o,s=t.head.children,i=s.length-1;i>=0;i--)a=s[i],a.hasAttribute("data-instant-track")&&(o=a.getAttribute("href")||a.getAttribute("src")||a.innerHTML,X.push(o));C=new XMLHttpRequest,C.addEventListener("readystatechange",y),b(!0),G.init(),d("change",!0),addEventListener("popstate",function(){var t=n(e.href);if(t!=L){if(!(t in N))return void(e.href=e.href);N[L].scrollY=pageYOffset,L=t,l(N[t].title,N[t].body,!1,N[t].scrollY)}})}}function w(t,e){q[t].push(e)}var L,A,x,k,C,M,O,H,Y=navigator.userAgent,D=Y.indexOf(" CriOS/")>-1,B="createTouch"in t,N={},S=!1,I=!1,z=!1,W=!1,K={},P=!1,R=!1,X=[],q={fetch:[],receive:[],wait:[],change:[]},G=function(){function e(){d=t.createElement("div"),d.id="instantclick",l=t.createElement("div"),l.id="instantclick-bar",l.className="instantclick-bar",d.appendChild(l);var e=["Webkit","Moz","O"];if(f="transform",!(f in l.style))for(var n=0;n<3;n++)e[n]+"Transform"in l.style&&(f=e[n]+"Transform");var i="transition";if(!(i in l.style))for(var n=0;n<3;n++)e[n]+"Transition"in l.style&&(i="-"+e[n].toLowerCase()+"-"+i);var r=t.createElement("style");r.innerHTML="#instantclick{position:"+(B?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+i+":opacity .25s .1s}.instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;"+i+":all .25s}",t.head.appendChild(r),B&&(s(),addEventListener("resize",s),addEventListener("scroll",s))}function n(e,n){c=e,t.getElementById(d.id)&&t.body.removeChild(d),d.style.opacity="1",t.getElementById(d.id)&&t.body.removeChild(d),a(),n&&setTimeout(i,0),clearTimeout(u),u=setTimeout(r,500)}function i(){c=10,a()}function r(){c+=1+2*Math.random(),c>=98?c=98:u=setTimeout(r,500),a()}function a(){l.style[f]="translate("+c+"%)",t.getElementById(d.id)||t.body.appendChild(d)}function o(){return t.getElementById(d.id)?(clearTimeout(u),c=100,a(),void(d.style.opacity="0")):(n(100==c?0:c),void setTimeout(o,0))}function s(){d.style.left=pageXOffset+"px",d.style.width=innerWidth+"px",d.style.top=pageYOffset+"px";var t="orientation"in window&&90==Math.abs(orientation),e=innerWidth/screen[t?"height":"width"]*2;d.style[f]="scaleY("+e+")"}var d,l,f,c,u;return{init:e,start:n,done:o}}(),F="pushState"in history&&(!Y.match("Android")||Y.match("Chrome/"))&&"file:"!=e.protocol;return{supported:F,init:E,on:w}}(document,location);
//rebuild by neat 