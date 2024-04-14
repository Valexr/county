var Rt="county";var Ot={type:"git",url:"https://github.com/Valexr/county.git"};function a(){}function Tt(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function _t(e){return e()}function ct(){return Object.create(null)}function F(e){e.forEach(_t)}function A(e){return typeof e=="function"}function jt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function C(e,t){return e!=e?t==t:e!==t}function At(e){return Object.keys(e).length===0}function ht(e,...t){if(e==null){for(let n of t)n(void 0);return a}let o=e.subscribe(...t);return o.unsubscribe?()=>o.unsubscribe():o}function R(e,t,o){e.$$.on_destroy.push(ht(t,o))}var K=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var lt=class e{_listeners="WeakMap"in K?new WeakMap:void 0;_observer=void 0;options;constructor(t){this.options=t}observe(t,o){return this._listeners.set(t,o),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(t=>{for(let o of t)e.entries.set(o.target,o),this._listeners.get(o.target)?.(o)}))}};lt.entries="WeakMap"in K?new WeakMap:void 0;var qt=!1;function zt(){qt=!0}function Jt(){qt=!1}function d(e,t){e.appendChild(t)}function x(e,t,o){e.insertBefore(t,o||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function k(){return L(" ")}function mt(){return L("")}function O(e,t,o,n){return e.addEventListener(t,o,n),()=>e.removeEventListener(t,o,n)}function Pt(e){return function(t){return t.preventDefault(),e.call(this,t)}}function h(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function Vt(e){return Array.from(e.childNodes)}function q(e,t){t=""+t,e.data!==t&&(e.data=t)}function xt(e,t){e.value=t??""}function Wt(e){let t={};return e.childNodes.forEach(o=>{t[o.slot||"default"]=!0}),t}var M;function Q(e){M=e}function Gt(){if(!M)throw new Error("Function called outside component initialization");return M}function Xt(e,t){let o=e.$$.callbacks[t.type];o&&o.slice().forEach(n=>n.call(this,t))}var T=[];var tt=[],J=[],gt=[],ge=Promise.resolve(),yt=!1;function Ht(){yt||(yt=!0,ge.then(nt))}function et(e){J.push(e)}function $t(e){gt.push(e)}var bt=new Set,z=0;function nt(){if(z!==0)return;let e=M;do{try{for(;z<T.length;){let t=T[z];z++,Q(t),ye(t.$$)}}catch(t){throw T.length=0,z=0,t}for(Q(null),T.length=0,z=0;tt.length;)tt.pop()();for(let t=0;t<J.length;t+=1){let o=J[t];bt.has(o)||(bt.add(o),o())}J.length=0}while(T.length);for(;gt.length;)gt.pop()();yt=!1,bt.clear(),Q(e)}function ye(e){if(e.fragment!==null){e.update(),F(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(et)}}function Yt(e){let t=[],o=[];J.forEach(n=>e.indexOf(n)===-1?t.push(n):o.push(n)),o.forEach(n=>n()),J=t}var ut=new Set,j;function P(){j={r:0,c:[],p:j}}function V(){j.r||F(j.c),j=j.p}function g(e,t){e&&e.i&&(ut.delete(e),e.i(t))}function w(e,t,o,n){if(e&&e.o){if(ut.has(e))return;ut.add(e),j.c.push(()=>{ut.delete(e),n&&(o&&e.d(1),n())}),e.o(t)}else n&&n()}function Ft(e,t){let o=t.token={};function n(r,i,c,l){if(t.token!==o)return;t.resolved=l;let s=t.ctx;c!==void 0&&(s=s.slice(),s[c]=l);let u=r&&(t.current=r)(s),p=!1;t.block&&(t.blocks?t.blocks.forEach((f,y)=>{y!==i&&f&&(P(),w(f,1,1,()=>{t.blocks[y]===f&&(t.blocks[y]=null)}),V())}):t.block.d(1),u.c(),g(u,1),u.m(t.mount(),t.anchor),p=!0),t.block=u,t.blocks&&(t.blocks[i]=u),p&&nt()}if(Tt(e)){let r=Gt();if(e.then(i=>{Q(r),n(t.then,1,t.value,i),Q(null)},i=>{if(Q(r),n(t.catch,2,t.error,i),Q(null),!t.hasCatch)throw i}),t.current!==t.pending)return n(t.pending,0),!0}else{if(t.current!==t.then)return n(t.then,1,t.value,e),!0;t.resolved=e}}function wt(e,t,o){let n=t.slice(),{resolved:r}=e;e.current===e.then&&(n[e.value]=r),e.current===e.catch&&(n[e.error]=r),e.block.p(n,o)}var $e=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Fe=new Set([...$e]);function kt(e,t,o){let n=e.$$.props[t];n!==void 0&&(e.$$.bound[n]=o,o(e.$$.ctx[n]))}function ot(e){e&&e.c()}function W(e,t,o){let{fragment:n,after_update:r}=e.$$;n&&n.m(t,o),et(()=>{let i=e.$$.on_mount.map(_t).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...i):F(i),e.$$.on_mount=[]}),r.forEach(et)}function Z(e,t){let o=e.$$;o.fragment!==null&&(Yt(o.after_update),F(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function ke(e,t){e.$$.dirty[0]===-1&&(T.push(e),Ht(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(e,t,o,n,r,i,c=null,l=[-1]){let s=M;Q(e);let u=e.$$={fragment:null,ctx:[],props:i,update:a,not_equal:r,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:ct(),dirty:l,skip_bound:!1,root:t.target||s.$$.root};c&&c(u.root);let p=!1;if(u.ctx=o?o(e,t.props||{},(f,y,...U)=>{let $=U.length?U[0]:y;return u.ctx&&r(u.ctx[f],u.ctx[f]=$)&&(!u.skip_bound&&u.bound[f]&&u.bound[f]($),p&&ke(e,f)),y}):[],u.update(),p=!0,F(u.before_update),u.fragment=n?n(u.ctx):!1,t.target){if(t.hydrate){zt();let f=Vt(t.target);u.fragment&&u.fragment.l(f),f.forEach(m)}else u.fragment&&u.fragment.c();t.intro&&g(e.$$.fragment),W(e,t.target,t.anchor),Jt(),nt()}Q(s)}var Qe;typeof HTMLElement=="function"&&(Qe=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(e,t,o){super(),this.$$ctor=e,this.$$s=t,o&&this.attachShadow({mode:"open"})}addEventListener(e,t,o){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}super.addEventListener(e,t,o)}removeEventListener(e,t,o){if(super.removeEventListener(e,t,o),this.$$c){let n=this.$$l_u.get(t);n&&(n(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return()=>{let i;return{c:function(){i=_("slot"),r!=="default"&&h(i,"name",r)},m:function(s,u){x(s,i,u)},d:function(s){s&&m(i)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let t={},o=Wt(this);for(let r of this.$$s)r in o&&(t[r]=[e(r)]);for(let r of this.attributes){let i=this.$$g_p(r.name);i in this.$$d||(this.$$d[i]=vt(i,r.value,this.$$p_d,"toProp"))}for(let r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});let n=()=>{this.$$r=!0;for(let r in this.$$p_d)if(this.$$d[r]=this.$$c.$$.ctx[this.$$c.$$.props[r]],this.$$p_d[r].reflect){let i=vt(r,this.$$d[r],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,i)}this.$$r=!1};this.$$c.$$.after_update.push(n),n();for(let r in this.$$l)for(let i of this.$$l[r]){let c=this.$$c.$on(r,i);this.$$l_u.set(i,c)}this.$$l={}}}attributeChangedCallback(e,t,o){this.$$r||(e=this.$$g_p(e),this.$$d[e]=vt(e,o,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function vt(e,t,o,n){let r=o[e]?.type;if(t=r==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!o[e])return t;if(n==="toAttribute")switch(r){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(r){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}var S=class{$$=void 0;$$set=void 0;$destroy(){Z(this,1),this.$destroy=a}$on(t,o){if(!A(o))return a;let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(o),()=>{let r=n.indexOf(o);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!At(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};var Kt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Kt);function Ee(e){let t,o,n=e[0].content+"",r,i,c,l,s=e[0].author+"",u;return{c(){t=_("blockquote"),o=_("p"),r=L(n),i=k(),c=_("cite"),l=L("~ "),u=L(s),h(o,"class","svelte-1ccxvzf"),h(c,"class","svelte-1ccxvzf"),h(t,"class","svelte-1ccxvzf")},m(p,f){x(p,t,f),d(t,o),d(o,r),d(t,i),d(t,c),d(c,l),d(c,u)},p(p,[f]){f&1&&n!==(n=p[0].content+"")&&q(r,n),f&1&&s!==(s=p[0].author+"")&&q(u,s)},i:a,o:a,d(p){p&&m(t)}}}function Se(e,t,o){let{quote:n={content:"",author:""}}=t;return e.$$set=r=>{"quote"in r&&o(0,n=r.quote)},[n]}var Qt=class extends S{constructor(t){super(),I(this,t,Se,Ee,C,{quote:0})}},te=Qt;var G=[];function at(e,t){return{subscribe:rt(e,t).subscribe}}function rt(e,t=a){let o,n=new Set;function r(l){if(jt(e,l)&&(e=l,o)){let s=!G.length;for(let u of n)u[1](),G.push(u,e);if(s){for(let u=0;u<G.length;u+=2)G[u][0](G[u+1]);G.length=0}}}function i(l){r(l(e))}function c(l,s=a){let u=[l,s];return n.add(u),n.size===1&&(o=t(r,i)||a),l(e),()=>{n.delete(u),n.size===0&&o&&(o(),o=null)}}return{set:r,update:i,subscribe:c}}function ee(e,t,o){let n=!Array.isArray(e),r=n?[e]:e;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");let i=t.length<2;return at(o,(c,l)=>{let s=!1,u=[],p=0,f=a,y=()=>{if(p)return;f();let $=t(n?u[0]:u,c,l);i?c($):f=A($)?$:a},U=r.map(($,B)=>ht($,it=>{u[B]=it,p&=~(1<<B),s&&y()},()=>{p|=1<<B}));return s=!0,y(),function(){F(U),f(),s=!1}})}function ne(e,t,o){let{subscribe:n,set:r}=rt(t),i=typeof window=="object"?o?localStorage:sessionStorage:void 0,c=i?.getItem(e)||"";try{t=c?JSON.parse(c):t}catch{t=t}l(t);function l(s){return i?.setItem(e,JSON.stringify(s)),t=s,r(t)}return{get:()=>t,set:s=>l(s),update:s=>l(s(t)),remove:()=>i?.removeItem(e),clear:()=>i?.clear(),subscribe:n}}var X=ne("startDate","",!0),oe=ee(X,(e,t)=>{if(X){let o=new Date,n=new Date(e),r=o.getTime()-n.getTime(),i=o.getMonth()-n.getMonth(),c=o.getDate()-n.getDate(),l=new Date(o.getFullYear(),o.getMonth()+1,0).getDate(),s=new Date(r).getFullYear()-1970,u=(s*12+i)%12,p=(u*l+c)%l;t({years:s,months:u,days:p})}},{years:0,months:0,days:0}),re=at(new Date().toLocaleTimeString("ru"),e=>{let t=setInterval(()=>{let o=new Date().toLocaleTimeString("ru");e(o)},1e3);return()=>clearInterval(t)}),ie=at(new Date().toLocaleDateString("ru")),ft=Ue();function Ue(){let{subscribe:e,set:t,update:o}=rt({content:"",author:""});return{subscribe:e,set:t,update:o,async load(){let r=await fetch("https://api.quotable.io/quotes/random"),[{content:i,author:c}]=await r.json();t({content:i,author:c})}}}function Be(e){let t,o,n,r,i,c;return{c(){t=_("ul"),o=_("li"),o.textContent=`${e[0].years}`,n=k(),r=_("li"),r.textContent=`${e[0].months}`,i=k(),c=_("li"),c.textContent=`${e[0].days}`,h(o,"id","years"),h(o,"class","svelte-1m1308"),h(r,"id","months"),h(r,"class","svelte-1m1308"),h(c,"id","days"),h(c,"class","svelte-1m1308"),h(t,"class","svelte-1m1308")},m(l,s){x(l,t,s),d(t,o),d(t,n),d(t,r),d(t,i),d(t,c)},p:a,i:a,o:a,d(l){l&&m(t)}}}function Le(e,t,o){let n;return R(e,oe,r=>o(0,n=r)),[n]}var Et=class extends S{constructor(t){super(),I(this,t,Le,Be,C,{})}},se=Et;function Ne(e){let t,o,n,r,i,c;return{c(){t=_("form"),o=_("label"),n=_("input"),h(n,"type","date"),h(n,"max",r=new Date().toLocaleString("ru")),h(n,"class","svelte-11nu7tx")},m(l,s){x(l,t,s),d(t,o),d(o,n),xt(n,e[0]),i||(c=[O(n,"input",e[2]),O(t,"submit",Pt(e[1]))],i=!0)},p(l,[s]){s&1&&xt(n,l[0])},i:a,o:a,d(l){l&&m(t),i=!1,F(c)}}}function De(e,t,o){let{value:n=""}=t;function r(c){Xt.call(this,e,c)}function i(){n=this.value,o(0,n)}return e.$$set=c=>{"value"in c&&o(0,n=c.value)},[n,r,i]}var St=class extends S{constructor(t){super(),I(this,t,De,Ne,C,{value:0})}},Ut=St;async function ce(e=5,{width:t=window.innerWidth,height:o=window.innerHeight}){try{return await Ce(e,{width:t,height:o})}catch(n){console.error(`Could not fetch photos: ${n}`)}}async function Ce(e=9,t={width:window.innerWidth,height:window.innerHeight}){let o="https://valexr.github.io/county/assets/photos.json",n=Array.from({length:e},()=>Math.floor(Math.random()*24644));return(await(await fetch(o)).json()).reduce((s,[u,p,f],y)=>{if(n.includes(y)){let U={width:t.height*(p/10),height:t.height},$={width:t.width,height:t.height},B=`?w=${c(l(U,$).width)}`;s.push({id:y,src:`https://images.unsplash.com/photo-${u}${B}`,alt:`Image by ${f} from Unsplash`,...l(U,$)})}return s},[]);function c(s){return s*devicePixelRatio}function l(s,u){let p=Math.min(u.width/s.width,u.height,s.height);return{width:Math.round(s.width*p),height:Math.round(s.height*p)}}}var{document:le}=K;function Me(e){return{c:a,m:a,p:a,i:a,o:a,d:a}}function Ie(e){let t,o,n,r,i,c,l,s,u,p,f,y,U,$,B,it,st,H,pt,Lt,Nt=[Oe,Re],N=[];function Dt(v,b){return v[1]?0:1}o=Dt(e,-1),n=N[o]=Nt[o](e);let Ct=[je,Te],D=[];function Mt(v,b){return v[1]?0:1}c=Mt(e,-1),l=D[c]=Ct[c](e);let E={ctx:e,current:null,token:null,hasCatch:!1,pending:ze,then:qe,catch:Ae,blocks:[,,,]};return Ft(u=ft.load(),E),{c(){t=_("header"),n.c(),r=k(),i=_("main"),l.c(),s=k(),E.block.c(),p=k(),f=_("footer"),y=_("button"),y.textContent="Image",U=k(),$=_("h2"),B=L(e[4]),it=k(),st=_("button"),st.textContent="Quote",h(t,"class","svelte-1uaic3c"),h(i,"class","svelte-1uaic3c"),h($,"class","svelte-1uaic3c"),h(f,"class","svelte-1uaic3c")},m(v,b){x(v,t,b),N[o].m(t,null),x(v,r,b),x(v,i,b),D[c].m(i,null),d(i,s),E.block.m(i,E.anchor=null),E.mount=()=>i,E.anchor=null,x(v,p,b),x(v,f,b),d(f,y),d(f,U),d(f,$),d($,B),d(f,it),d(f,st),H=!0,pt||(Lt=[O(y,"click",ae),O(st,"click",ft.load)],pt=!0)},p(v,b){e=v;let Y=o;o=Dt(e,b),o===Y?N[o].p(e,b):(P(),w(N[Y],1,1,()=>{N[Y]=null}),V(),n=N[o],n?n.p(e,b):(n=N[o]=Nt[o](e),n.c()),g(n,1),n.m(t,null));let dt=c;c=Mt(e,b),c===dt?D[c].p(e,b):(P(),w(D[dt],1,1,()=>{D[dt]=null}),V(),l=D[c],l?l.p(e,b):(l=D[c]=Ct[c](e),l.c()),g(l,1),l.m(i,s)),wt(E,e,b),(!H||b&16)&&q(B,e[4])},i(v){H||(g(n),g(l),g(E.block),H=!0)},o(v){w(n),w(l);for(let b=0;b<3;b+=1){let Y=E.blocks[b];w(Y)}H=!1},d(v){v&&(m(t),m(r),m(i),m(p),m(f)),N[o].d(),D[c].d(),E.block.d(),E.token=null,E=null,pt=!1,F(Lt)}}}function Re(e){let t,o;return{c(){t=_("h2"),o=L(e[2])},m(n,r){x(n,t,r),d(t,o)},p(n,r){r&4&&q(o,n[2])},i:a,o:a,d(n){n&&m(t)}}}function Oe(e){let t,o,n;function r(c){e[6](c)}let i={};return e[1]!==void 0&&(i.value=e[1]),t=new Ut({props:i}),tt.push(()=>kt(t,"value",r)),{c(){ot(t.$$.fragment)},m(c,l){W(t,c,l),n=!0},p(c,l){let s={};!o&&l&2&&(o=!0,s.value=c[1],$t(()=>o=!1)),t.$set(s)},i(c){n||(g(t.$$.fragment,c),n=!0)},o(c){w(t.$$.fragment,c),n=!1},d(c){Z(t,c)}}}function Te(e){let t,o,n,r,i;function c(s){e[7](s)}let l={};return e[1]!==void 0&&(l.value=e[1]),n=new Ut({props:l}),tt.push(()=>kt(n,"value",c)),{c(){t=_("h2"),t.textContent="Set start date",o=k(),ot(n.$$.fragment)},m(s,u){x(s,t,u),x(s,o,u),W(n,s,u),i=!0},p(s,u){let p={};!r&&u&2&&(r=!0,p.value=s[1],$t(()=>r=!1)),n.$set(p)},i(s){i||(g(n.$$.fragment,s),i=!0)},o(s){w(n.$$.fragment,s),i=!1},d(s){s&&(m(t),m(o)),Z(n,s)}}}function je(e){let t,o;return t=new se({}),{c(){ot(t.$$.fragment)},m(n,r){W(t,n,r),o=!0},p:a,i(n){o||(g(t.$$.fragment,n),o=!0)},o(n){w(t.$$.fragment,n),o=!1},d(n){Z(t,n)}}}function Ae(e){return{c:a,m:a,p:a,i:a,o:a,d:a}}function qe(e){let t,o,n=e[3]&&ue(e);return{c(){n&&n.c(),t=mt()},m(r,i){n&&n.m(r,i),x(r,t,i),o=!0},p(r,i){r[3]?n?(n.p(r,i),i&8&&g(n,1)):(n=ue(r),n.c(),g(n,1),n.m(t.parentNode,t)):n&&(P(),w(n,1,1,()=>{n=null}),V())},i(r){o||(g(n),o=!0)},o(r){w(n),o=!1},d(r){r&&m(t),n&&n.d(r)}}}function ue(e){let t,o;return t=new te({props:{quote:e[3]}}),{c(){ot(t.$$.fragment)},m(n,r){W(t,n,r),o=!0},p(n,r){let i={};r&8&&(i.quote=n[3]),t.$set(i)},i(n){o||(g(t.$$.fragment,n),o=!0)},o(n){w(t.$$.fragment,n),o=!1},d(n){Z(t,n)}}}function ze(e){return{c:a,m:a,p:a,i:a,o:a,d:a}}function Je(e){return{c:a,m:a,p:a,i:a,o:a,d:a}}function Pe(e){let t,o,n,r,i;le.title=t=e[0];let c={ctx:e,current:null,token:null,hasCatch:!1,pending:Je,then:Ie,catch:Me,blocks:[,,,]};return Ft(r=ae(),c),{c(){o=k(),n=mt(),c.block.c()},m(l,s){x(l,o,s),x(l,n,s),c.block.m(l,c.anchor=s),c.mount=()=>n.parentNode,c.anchor=n,i=!0},p(l,[s]){e=l,(!i||s&1)&&t!==(t=e[0])&&(le.title=t),wt(c,e,s)},i(l){i||(g(c.block),i=!0)},o(l){for(let s=0;s<3;s+=1){let u=c.blocks[s];w(u)}i=!1},d(l){l&&(m(o),m(n)),c.block.d(l),c.token=null,c=null}}}async function ae(){let e=await ce(1,{});document.body.style.cssText=`
            background: url(${e?.[0].src}) center no-repeat;
            background-size: cover;
        `}function Ve(e,t,o){let n,r,i,c;R(e,X,f=>o(1,n=f)),R(e,ie,f=>o(2,r=f)),R(e,ft,f=>o(3,i=f)),R(e,re,f=>o(4,c=f));let{name:l}=t,{repository:s}=t;function u(f){n=f,X.set(n)}function p(f){n=f,X.set(n)}return e.$$set=f=>{"name"in f&&o(0,l=f.name),"repository"in f&&o(5,s=f.repository)},[l,n,r,i,c,s,u,p]}var Bt=class extends S{constructor(t){super(),I(this,t,Ve,Pe,C,{name:0,repository:5})}},fe=Bt;var hr=new fe({target:document.body,props:{name:Rt,repository:Ot}});export{hr as default};
