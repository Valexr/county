var Kt="county";var te={type:"git",url:"https://github.com/Valexr/county.git"};function p(){}var nt=e=>e;function ee(e,t){for(let n in t)e[n]=t[n];return e}function ne(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function St(e){return e()}function bt(){return Object.create(null)}function B(e){e.forEach(St)}function G(e){return typeof e=="function"}function oe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function A(e,t){return e!=e?t==t:e!==t}function re(e){return Object.keys(e).length===0}function Bt(e,...t){if(e==null){for(let o of t)o(void 0);return p}let n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ot(e,t,n){e.$$.on_destroy.push(Bt(t,n))}function ie(e,t,n,o){if(e){let r=se(e,t,n,o);return e[0](r)}}function se(e,t,n,o){return e[1]&&o?ee(n.ctx.slice(),e[1](o(t))):n.ctx}function ce(e,t,n,o){if(e[2]&&o){let r=e[2](o(n));if(t.dirty===void 0)return r;if(typeof r=="object"){let c=[],u=Math.max(t.dirty.length,r.length);for(let i=0;i<u;i+=1)c[i]=t.dirty[i]|r[i];return c}return t.dirty|r}return t.dirty}function ue(e,t,n,o,r,c){if(r){let u=se(t,n,o,c);e.p(u,r)}}function le(e){if(e.ctx.length>32){let t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}var ae=typeof window<"u",Dt=ae?()=>window.performance.now():()=>Date.now(),pt=ae?e=>requestAnimationFrame(e):p;var rt=new Set;function fe(e){rt.forEach(t=>{t.c(e)||(rt.delete(t),t.f())}),rt.size!==0&&pt(fe)}function Lt(e){let t;return rt.size===0&&pt(fe),{promise:new Promise(n=>{rt.add(t={c:e,f:n})}),abort(){rt.delete(t)}}}var It=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var yt=class e{_listeners="WeakMap"in It?new WeakMap:void 0;_observer=void 0;options;constructor(t){this.options=t}observe(t,n){return this._listeners.set(t,n),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(t=>{for(let n of t)e.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};yt.entries="WeakMap"in It?new WeakMap:void 0;var pe=!1;function de(){pe=!0}function _e(){pe=!1}function F(e,t){e.appendChild(t)}function Mt(e){if(!e)return document;let t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function he(e){let t=g("style");return t.textContent="/* empty */",qe(Mt(e),t),t.sheet}function qe(e,t){return F(e.head||e,t),t.sheet}function y(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function L(){return S(" ")}function me(){return S("")}function V(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function be(e){return function(t){return t.preventDefault(),e.call(this,t)}}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ye(e){return Array.from(e.childNodes)}function I(e,t){t=""+t,e.data!==t&&(e.data=t)}function Nt(e,t){e.value=t??""}function Ot(e,t,n){e.classList.toggle(t,!!n)}function gt(e,t,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:o})}function ge(e){let t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}var xt=new Map,$t=0;function je(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Re(e,t){let n={stylesheet:he(t),rules:{}};return xt.set(e,n),n}function Ct(e,t,n,o,r,c,u,i=0){let s=16.666/o,l=`{
`;for(let Q=0;Q<=1;Q+=s){let D=t+(n-t)*c(Q);l+=Q*100+`%{${u(D,1-D)}}
`}let f=l+`100% {${u(n,1-n)}}
}`,a=`__svelte_${je(f)}_${i}`,d=Mt(e),{stylesheet:x,rules:_}=xt.get(d)||Re(d,e);_[a]||(_[a]=!0,x.insertRule(`@keyframes ${a} ${f}`,x.cssRules.length));let k=e.style.animation||"";return e.style.animation=`${k?`${k}, `:""}${a} ${o}ms linear ${r}ms 1 both`,$t+=1,a}function Ft(e,t){let n=(e.style.animation||"").split(", "),o=n.filter(t?c=>c.indexOf(t)<0:c=>c.indexOf("__svelte")===-1),r=n.length-o.length;r&&(e.style.animation=o.join(", "),$t-=r,$t||Te())}function Te(){pt(()=>{$t||(xt.forEach(e=>{let{ownerNode:t}=e.stylesheet;t&&m(t)}),xt.clear())})}var Z;function N(e){Z=e}function xe(){if(!Z)throw new Error("Function called outside component initialization");return Z}function $e(e,t){let n=e.$$.callbacks[t.type];n&&n.slice().forEach(o=>o.call(this,t))}var H=[];var M=[],st=[],jt=[],Ae=Promise.resolve(),Rt=!1;function Fe(){Rt||(Rt=!0,Ae.then(dt))}function X(e){st.push(e)}function z(e){jt.push(e)}var qt=new Set,it=0;function dt(){if(it!==0)return;let e=Z;do{try{for(;it<H.length;){let t=H[it];it++,N(t),Ve(t.$$)}}catch(t){throw H.length=0,it=0,t}for(N(null),H.length=0,it=0;M.length;)M.pop()();for(let t=0;t<st.length;t+=1){let n=st[t];qt.has(n)||(qt.add(n),n())}st.length=0}while(H.length);for(;jt.length;)jt.pop()();Rt=!1,qt.clear(),N(e)}function Ve(e){if(e.fragment!==null){e.update(),B(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}function we(e){let t=[],n=[];st.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),st=t}var _t;function ze(){return _t||(_t=Promise.resolve(),_t.then(()=>{_t=null})),_t}function ve(e,t,n){e.dispatchEvent(gt(`${t?"intro":"outro"}${n}`))}var wt=new Set,Y;function ct(){Y={r:0,c:[],p:Y}}function ut(){Y.r||B(Y.c),Y=Y.p}function $(e,t){e&&e.i&&(wt.delete(e),e.i(t))}function v(e,t,n,o){if(e&&e.o){if(wt.has(e))return;wt.add(e),Y.c.push(()=>{wt.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}var Pe={duration:0};function ke(e,t,n){let o={direction:"in"},r=t(e,n,o),c=!1,u,i,s=0;function l(){u&&Ft(e,u)}function f(){let{delay:d=0,duration:x=300,easing:_=nt,tick:k=p,css:Q}=r||Pe;Q&&(u=Ct(e,0,1,x,d,_,Q,s++)),k(0,1);let D=Dt()+d,R=D+x;i&&i.abort(),c=!0,X(()=>ve(e,!0,"start")),i=Lt(h=>{if(c){if(h>=R)return k(1,0),ve(e,!0,"end"),l(),c=!1;if(h>=D){let w=_((h-D)/x);k(w,1-w)}}return c})}let a=!1;return{start(){a||(a=!0,Ft(e),G(r)?(r=r(o),ze().then(f)):f())},invalidate(){a=!1},end(){c&&(l(),c=!1)}}}function Tt(e,t){let n=t.token={};function o(r,c,u,i){if(t.token!==n)return;t.resolved=i;let s=t.ctx;u!==void 0&&(s=s.slice(),s[u]=i);let l=r&&(t.current=r)(s),f=!1;t.block&&(t.blocks?t.blocks.forEach((a,d)=>{d!==c&&a&&(ct(),v(a,1,1,()=>{t.blocks[d]===a&&(t.blocks[d]=null)}),ut())}):t.block.d(1),l.c(),$(l,1),l.m(t.mount(),t.anchor),f=!0),t.block=l,t.blocks&&(t.blocks[c]=l),f&&dt()}if(ne(e)){let r=xe();if(e.then(c=>{N(r),o(t.then,1,t.value,c),N(null)},c=>{if(N(r),o(t.catch,2,t.error,c),N(null),!t.hasCatch)throw c}),t.current!==t.pending)return o(t.pending,0),!0}else{if(t.current!==t.then)return o(t.then,1,t.value,e),!0;t.resolved=e}}function At(e,t,n){let o=t.slice(),{resolved:r}=e;e.current===e.then&&(o[e.value]=r),e.current===e.catch&&(o[e.error]=r),e.block.p(o,n)}var Je=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],We=new Set([...Je]);function P(e,t,n){let o=e.$$.props[t];o!==void 0&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function T(e){e&&e.c()}function q(e,t,n){let{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),X(()=>{let c=e.$$.on_mount.map(St).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...c):B(c),e.$$.on_mount=[]}),r.forEach(X)}function j(e,t){let n=e.$$;n.fragment!==null&&(we(n.after_update),B(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Xe(e,t){e.$$.dirty[0]===-1&&(H.push(e),Fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,o,r,c,u=null,i=[-1]){let s=Z;N(e);let l=e.$$={fragment:null,ctx:[],props:c,update:p,not_equal:r,bound:bt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:bt(),dirty:i,skip_bound:!1,root:t.target||s.$$.root};u&&u(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(a,d,...x)=>{let _=x.length?x[0]:d;return l.ctx&&r(l.ctx[a],l.ctx[a]=_)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](_),f&&Xe(e,a)),d}):[],l.update(),f=!0,B(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){de();let a=ye(t.target);l.fragment&&l.fragment.l(a),a.forEach(m)}else l.fragment&&l.fragment.c();t.intro&&$(e.$$.fragment),q(e,t.target,t.anchor),_e(),dt()}N(s)}var He;typeof HTMLElement=="function"&&(He=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let o=this.$$c.$on(e,t);this.$$l_u.set(t,o)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let o=this.$$l_u.get(t);o&&(o(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return()=>{let c;return{c:function(){c=g("slot"),r!=="default"&&b(c,"name",r)},m:function(s,l){y(s,c,l)},d:function(s){s&&m(c)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let t={},n=ge(this);for(let r of this.$$s)r in n&&(t[r]=[e(r)]);for(let r of this.attributes){let c=this.$$g_p(r.name);c in this.$$d||(this.$$d[c]=Vt(c,r.value,this.$$p_d,"toProp"))}for(let r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});let o=()=>{this.$$r=!0;for(let r in this.$$p_d)if(this.$$d[r]=this.$$c.$$.ctx[this.$$c.$$.props[r]],this.$$p_d[r].reflect){let c=Vt(r,this.$$d[r],this.$$p_d,"toAttribute");c==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,c)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(let r in this.$$l)for(let c of this.$$l[r]){let u=this.$$c.$on(r,c);this.$$l_u.set(c,u)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=Vt(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function Vt(e,t,n,o){let r=n[e]?.type;if(t=r==="Boolean"&&typeof t!="boolean"?t!=null:t,!o||!n[e])return t;if(o==="toAttribute")switch(r){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(r){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}var O=class{$$=void 0;$$set=void 0;$destroy(){j(this,1),this.$destroy=p}$on(t,n){if(!G(n))return p;let o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{let r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};var Qe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Qe);function Ue(e,{delay:t=0,duration:n=400,easing:o=nt}={}){let r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:o,css:c=>`opacity: ${c*r}`}}function Ye(e){let t,n,o=e[0].content+"",r,c,u,i,s=e[0].author+"",l,f;return{c(){t=g("blockquote"),n=g("p"),r=S(o),c=L(),u=g("a"),i=S("~ "),l=S(s),b(n,"class","svelte-1l2to6l"),b(u,"href",e[1]),b(u,"class","svelte-1l2to6l"),b(t,"class","svelte-1l2to6l")},m(a,d){y(a,t,d),F(t,n),F(n,r),F(t,c),F(t,u),F(u,i),F(u,l)},p(a,[d]){d&1&&o!==(o=a[0].content+"")&&I(r,o),d&1&&s!==(s=a[0].author+"")&&I(l,s),d&2&&b(u,"href",a[1])},i(a){a&&(f||X(()=>{f=ke(t,Ue,{}),f.start()}))},o:p,d(a){a&&m(t)}}}function Ke(e,t,n){let{quote:o={content:"",author:""}}=t,{href:r=""}=t;return e.$$set=c=>{"quote"in c&&n(0,o=c.quote),"href"in c&&n(1,r=c.href)},[o,r]}var zt=class extends O{constructor(t){super(),J(this,t,Ke,Ye,A,{quote:0,href:1})}},Ee=zt;function tn(e){let t,n,o,r,c=e[4].default,u=ie(c,e,e[3],null);return{c(){t=g("button"),u&&u.c(),b(t,"id",e[0]),b(t,"class","clear outline svelte-1af6mi3")},m(i,s){y(i,t,s),u&&u.m(t,null),n=!0,o||(r=V(t,"click",e[1]),o=!0)},p(i,[s]){u&&u.p&&(!n||s&8)&&ue(u,c,i,i[3],n?ce(c,i[3],s,null):le(i[3]),null),(!n||s&1)&&b(t,"id",i[0])},i(i){n||($(u,i),n=!0)},o(i){v(u,i),n=!1},d(i){i&&m(t),u&&u.d(i),o=!1,r()}}}function en(e,t,n){let{$$slots:o={},$$scope:r}=t,{id:c=""}=t,{type:u}=t;function i(s){let{id:l}=s.currentTarget;n(2,u=l)}return e.$$set=s=>{"id"in s&&n(0,c=s.id),"type"in s&&n(2,u=s.type),"$$scope"in s&&n(3,r=s.$$scope)},[c,i,u,r,o]}var Pt=class extends O{constructor(t){super(),J(this,t,en,tn,A,{id:0,type:2})}},K=Pt;function nn(e){let t,n,o,r,c,u,i,s,l,f,a,d;function x(h){e[5](h)}let _={id:"hours",$$slots:{default:[cn]},$$scope:{ctx:e}};e[1]!==void 0&&(_.type=e[1]),n=new K({props:_}),M.push(()=>P(n,"type",x));function k(h){e[6](h)}let Q={id:"months",$$slots:{default:[un]},$$scope:{ctx:e}};e[1]!==void 0&&(Q.type=e[1]),u=new K({props:Q}),M.push(()=>P(u,"type",k));function D(h){e[7](h)}let R={id:"days",$$slots:{default:[ln]},$$scope:{ctx:e}};return e[1]!==void 0&&(R.type=e[1]),f=new K({props:R}),M.push(()=>P(f,"type",D)),{c(){t=g("li"),T(n.$$.fragment),r=L(),c=g("li"),T(u.$$.fragment),s=L(),l=g("li"),T(f.$$.fragment),b(t,"id","years"),b(t,"class","svelte-1u76tma"),b(c,"id","months"),b(c,"class","svelte-1u76tma"),b(l,"id","days"),b(l,"class","svelte-1u76tma")},m(h,w){y(h,t,w),q(n,t,null),y(h,r,w),y(h,c,w),q(u,c,null),y(h,s,w),y(h,l,w),q(f,l,null),d=!0},p(h,w){let tt={};w&257&&(tt.$$scope={dirty:w,ctx:h}),!o&&w&2&&(o=!0,tt.type=h[1],z(()=>o=!1)),n.$set(tt);let at={};w&257&&(at.$$scope={dirty:w,ctx:h}),!i&&w&2&&(i=!0,at.type=h[1],z(()=>i=!1)),u.$set(at);let ft={};w&257&&(ft.$$scope={dirty:w,ctx:h}),!a&&w&2&&(a=!0,ft.type=h[1],z(()=>a=!1)),f.$set(ft)},i(h){d||($(n.$$.fragment,h),$(u.$$.fragment,h),$(f.$$.fragment,h),d=!0)},o(h){v(n.$$.fragment,h),v(u.$$.fragment,h),v(f.$$.fragment,h),d=!1},d(h){h&&(m(t),m(r),m(c),m(s),m(l)),j(n),j(u),j(f)}}}function on(e){let t,n,o,r;function c(i){e[4](i)}let u={id:"",$$slots:{default:[an]},$$scope:{ctx:e}};return e[1]!==void 0&&(u.type=e[1]),n=new K({props:u}),M.push(()=>P(n,"type",c)),{c(){t=g("li"),T(n.$$.fragment),b(t,"id","hours"),b(t,"class","svelte-1u76tma")},m(i,s){y(i,t,s),q(n,t,null),r=!0},p(i,s){let l={};s&257&&(l.$$scope={dirty:s,ctx:i}),!o&&s&2&&(o=!0,l.type=i[1],z(()=>o=!1)),n.$set(l)},i(i){r||($(n.$$.fragment,i),r=!0)},o(i){v(n.$$.fragment,i),r=!1},d(i){i&&m(t),j(n)}}}function rn(e){let t,n,o,r;function c(i){e[3](i)}let u={id:"",$$slots:{default:[fn]},$$scope:{ctx:e}};return e[1]!==void 0&&(u.type=e[1]),n=new K({props:u}),M.push(()=>P(n,"type",c)),{c(){t=g("li"),T(n.$$.fragment),b(t,"id","days"),b(t,"class","svelte-1u76tma")},m(i,s){y(i,t,s),q(n,t,null),r=!0},p(i,s){let l={};s&257&&(l.$$scope={dirty:s,ctx:i}),!o&&s&2&&(o=!0,l.type=i[1],z(()=>o=!1)),n.$set(l)},i(i){r||($(n.$$.fragment,i),r=!0)},o(i){v(n.$$.fragment,i),r=!1},d(i){i&&m(t),j(n)}}}function sn(e){let t,n,o,r;function c(i){e[2](i)}let u={id:"",$$slots:{default:[pn]},$$scope:{ctx:e}};return e[1]!==void 0&&(u.type=e[1]),n=new K({props:u}),M.push(()=>P(n,"type",c)),{c(){t=g("li"),T(n.$$.fragment),b(t,"id","months"),b(t,"class","svelte-1u76tma")},m(i,s){y(i,t,s),q(n,t,null),r=!0},p(i,s){let l={};s&257&&(l.$$scope={dirty:s,ctx:i}),!o&&s&2&&(o=!0,l.type=i[1],z(()=>o=!1)),n.$set(l)},i(i){r||($(n.$$.fragment,i),r=!0)},o(i){v(n.$$.fragment,i),r=!1},d(i){i&&m(t),j(n)}}}function cn(e){let t=e[0].years+"",n;return{c(){n=S(t)},m(o,r){y(o,n,r)},p(o,r){r&1&&t!==(t=o[0].years+"")&&I(n,t)},d(o){o&&m(n)}}}function un(e){let t=e[0].months+"",n;return{c(){n=S(t)},m(o,r){y(o,n,r)},p(o,r){r&1&&t!==(t=o[0].months+"")&&I(n,t)},d(o){o&&m(n)}}}function ln(e){let t=e[0].days+"",n;return{c(){n=S(t)},m(o,r){y(o,n,r)},p(o,r){r&1&&t!==(t=o[0].days+"")&&I(n,t)},d(o){o&&m(n)}}}function an(e){let t=e[0].years*12*4*7*24+"",n;return{c(){n=S(t)},m(o,r){y(o,n,r)},p(o,r){r&1&&t!==(t=o[0].years*12*4*7*24+"")&&I(n,t)},d(o){o&&m(n)}}}function fn(e){let t=e[0].years*12*4*7+"",n;return{c(){n=S(t)},m(o,r){y(o,n,r)},p(o,r){r&1&&t!==(t=o[0].years*12*4*7+"")&&I(n,t)},d(o){o&&m(n)}}}function pn(e){let t=e[0].years*12+"",n;return{c(){n=S(t)},m(o,r){y(o,n,r)},p(o,r){r&1&&t!==(t=o[0].years*12+"")&&I(n,t)},d(o){o&&m(n)}}}function dn(e){let t,n,o,r,c=[sn,rn,on,nn],u=[];function i(s,l){return s[1]==="months"?0:s[1]==="days"?1:s[1]==="hours"?2:3}return n=i(e,-1),o=u[n]=c[n](e),{c(){t=g("ul"),o.c(),b(t,"class","svelte-1u76tma")},m(s,l){y(s,t,l),u[n].m(t,null),r=!0},p(s,[l]){let f=n;n=i(s,l),n===f?u[n].p(s,l):(ct(),v(u[f],1,1,()=>{u[f]=null}),ut(),o=u[n],o?o.p(s,l):(o=u[n]=c[n](s),o.c()),$(o,1),o.m(t,null))},i(s){r||($(o),r=!0)},o(s){v(o),r=!1},d(s){s&&m(t),u[n].d()}}}function _n(e,t,n){let{county:o}=t,r="";function c(a){r=a,n(1,r)}function u(a){r=a,n(1,r)}function i(a){r=a,n(1,r)}function s(a){r=a,n(1,r)}function l(a){r=a,n(1,r)}function f(a){r=a,n(1,r)}return e.$$set=a=>{"county"in a&&n(0,o=a.county)},[o,r,c,u,i,s,l,f]}var Jt=class extends O{constructor(t){super(),J(this,t,_n,dn,A,{county:0})}},Se=Jt;function Be(e){let t,n;return{c(){t=g("h2"),n=S(e[2])},m(o,r){y(o,t,r),F(t,n)},p(o,r){r&4&&I(n,o[2])},d(o){o&&m(t)}}}function hn(e){let t,n,o,r,c,u,i,s=!e[0]&&Be(e);return{c(){t=g("form"),s&&s.c(),n=L(),o=g("label"),r=g("input"),b(r,"type","date"),b(r,"max",c=new Date().toLocaleString("ru")),b(r,"class","svelte-1mp7hcf"),Ot(r,"hidden",!e[0]),b(t,"method","post")},m(l,f){y(l,t,f),s&&s.m(t,null),F(t,n),F(t,o),F(o,r),e[4](r),Nt(r,e[0]),u||(i=[V(r,"input",e[5]),V(t,"submit",be(e[3]))],u=!0)},p(l,[f]){l[0]?s&&(s.d(1),s=null):s?s.p(l,f):(s=Be(l),s.c(),s.m(t,n)),f&1&&Nt(r,l[0]),f&1&&Ot(r,"hidden",!l[0])},i:p,o:p,d(l){l&&m(t),s&&s.d(),e[4](null),u=!1,B(i)}}}function mn(e,t,n){let{date:o=""}=t,{value:r=""}=t,{input:c}=t;function u(l){$e.call(this,e,l)}function i(l){M[l?"unshift":"push"](()=>{c=l,n(1,c)})}function s(){r=this.value,n(0,r)}return e.$$set=l=>{"date"in l&&n(2,o=l.date),"value"in l&&n(0,r=l.value),"input"in l&&n(1,c=l.input)},[r,c,o,u,i,s]}var Wt=class extends O{constructor(t){super(),J(this,t,mn,hn,A,{date:2,value:0,input:1})}},De=Wt;var lt=[];function vt(e,t){return{subscribe:ht(e,t).subscribe}}function ht(e,t=p){let n,o=new Set;function r(i){if(oe(e,i)&&(e=i,n)){let s=!lt.length;for(let l of o)l[1](),lt.push(l,e);if(s){for(let l=0;l<lt.length;l+=2)lt[l][0](lt[l+1]);lt.length=0}}}function c(i){r(i(e))}function u(i,s=p){let l=[i,s];return o.add(l),o.size===1&&(n=t(r,c)||p),i(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:u}}function Le(e,t,n){let o=!Array.isArray(e),r=o?[e]:e;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");let c=t.length<2;return vt(n,(u,i)=>{let s=!1,l=[],f=0,a=p,d=()=>{if(f)return;a();let _=t(o?l[0]:l,u,i);c?u(_):a=G(_)?_:p},x=r.map((_,k)=>Bt(_,Q=>{l[k]=Q,f&=~(1<<k),s&&d()},()=>{f|=1<<k}));return s=!0,d(),function(){B(x),a(),s=!1}})}function kt(e,t,n){let{subscribe:o,set:r}=ht(t),c=typeof window=="object"?n?localStorage:sessionStorage:void 0,u=c?.getItem(e)||"";try{t=u?JSON.parse(u):t}catch{t=t}i(t);function i(s){return c?.setItem(e,JSON.stringify(s)),t=s,r(t)}return{get:()=>t,set:s=>i(s),update:s=>i(s(t)),remove:()=>c?.removeItem(e),clear:()=>c?.clear(),subscribe:o}}var Gt=bn();function bn(){let{subscribe:e,get:t,set:n,update:o}=kt("imagesJSON",[],!0);async function r(){if(!t().length){let i=await fetch("https://valexr.github.io/county/assets/photos.json");n(await i.json())}}function c(u=1,i={width:window.innerWidth,height:window.innerHeight}){let s=Array.from({length:u},()=>Math.floor(Math.random()*24644));return t().reduce((a,[d,x,_],k)=>{if(s.includes(k)){let Q={width:i.height*(x/10),height:i.height},D={width:i.width,height:i.height},R=`?w=${l(f(Q,D).width)}`;a.push({id:k,src:`https://images.unsplash.com/photo-${d}${R}`,alt:`Image by ${_} from Unsplash`,...f(Q,D)})}return a},[]);function l(a){return a*devicePixelRatio}function f(a,d){let x=Math.min(d.width/a.width,d.height,a.height);return{width:Math.round(a.width*x),height:Math.round(a.height*x)}}}return{subscribe:e,set:n,update:o,load:r,prepare:c,async back(){await r();let[{src:u}]=c();document.body.style.cssText=`
                background: url(${u}) center no-repeat;
                background-size: cover;
            `}}}var mt=kt("startDate","",!0),Ie=Le(mt,(e,t)=>{if(mt){let n=new Date,o=new Date(e),r=n.getTime()-o.getTime(),c=n.getMonth()-o.getMonth(),u=n.getDate()-o.getDate(),i=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),s=new Date(r).getFullYear()-1970,l=(s*12+c)%12,f=(l*i+u)%i;t({years:s,months:l,days:f})}},{years:0,months:0,days:0}),Me=vt(new Date().toLocaleTimeString("ru"),e=>{let t=setInterval(()=>{let n=new Date().toLocaleTimeString("ru");e(n)},1e3);return()=>clearInterval(t)}),Ne=vt(new Date().toLocaleDateString("ru")),Qt=yn();function yn(){let{subscribe:e,set:t,update:n}=ht({content:"",author:""});return{subscribe:e,set:t,update:n,async load(){let r=await fetch("https://api.quotable.io/quotes/random"),[{content:c,author:u}]=await r.json();t({content:c,author:u})}}}function gn(e){return{c:p,m:p,p,i:p,o:p,d:p}}function xn(e){let t,n,o,r,c,u,i,s,l,f,a,d,x,_,k,Q,D,R,h,w,tt;function at(U){e[9](U)}function ft(U){e[10](U)}let Ut={date:e[3]};e[2]!==void 0&&(Ut.input=e[2]),e[4]!==void 0&&(Ut.value=e[4]),n=new De({props:Ut}),M.push(()=>P(n,"input",at)),M.push(()=>P(n,"value",ft));let Xt=[Fn,$n],W=[];function Ht(U,E){return U[4]?0:1}i=Ht(e,-1),s=W[i]=Xt[i](e);let C={ctx:e,current:null,token:null,hasCatch:!1,pending:kn,then:vn,catch:wn,blocks:[,,,]};return Tt(f=Qt.load(),C),{c(){t=g("header"),T(n.$$.fragment),c=L(),u=g("main"),s.c(),l=L(),C.block.c(),a=L(),d=g("footer"),x=g("button"),x.textContent="Image",_=L(),k=g("h2"),Q=S(e[7]),D=L(),R=g("button"),R.textContent="Quote",b(t,"class","svelte-13fq23c"),b(u,"class","svelte-13fq23c"),b(k,"class","svelte-13fq23c"),b(d,"class","svelte-13fq23c")},m(U,E){y(U,t,E),q(n,t,null),y(U,c,E),y(U,u,E),W[i].m(u,null),F(u,l),C.block.m(u,C.anchor=null),C.mount=()=>u,C.anchor=null,y(U,a,E),y(U,d,E),F(d,x),F(d,_),F(d,k),F(k,Q),F(d,D),F(d,R),h=!0,w||(tt=[V(x,"click",Gt.back),V(R,"click",Qt.load)],w=!0)},p(U,E){e=U;let et={};E&8&&(et.date=e[3]),!o&&E&4&&(o=!0,et.input=e[2],z(()=>o=!1)),!r&&E&16&&(r=!0,et.value=e[4],z(()=>r=!1)),n.$set(et);let Et=i;i=Ht(e,E),i===Et?W[i].p(e,E):(ct(),v(W[Et],1,1,()=>{W[Et]=null}),ut(),s=W[i],s?s.p(e,E):(s=W[i]=Xt[i](e),s.c()),$(s,1),s.m(u,l)),At(C,e,E),(!h||E&128)&&I(Q,e[7])},i(U){h||($(n.$$.fragment,U),$(s),$(C.block),h=!0)},o(U){v(n.$$.fragment,U),v(s);for(let E=0;E<3;E+=1){let et=C.blocks[E];v(et)}h=!1},d(U){U&&(m(t),m(c),m(u),m(a),m(d)),j(n),W[i].d(),C.block.d(),C.token=null,C=null,w=!1,B(tt)}}}function $n(e){let t,n,o,r;return{c(){t=g("h2"),n=g("button"),n.textContent="Set start date"},m(c,u){y(c,t,u),F(t,n),o||(r=V(n,"click",e[8]),o=!0)},p,i:p,o:p,d(c){c&&m(t),o=!1,r()}}}function Fn(e){let t,n;return t=new Se({props:{county:e[5]}}),{c(){T(t.$$.fragment)},m(o,r){q(t,o,r),n=!0},p(o,r){let c={};r&32&&(c.county=o[5]),t.$set(c)},i(o){n||($(t.$$.fragment,o),n=!0)},o(o){v(t.$$.fragment,o),n=!1},d(o){j(t,o)}}}function wn(e){return{c:p,m:p,p,i:p,o:p,d:p}}function vn(e){let t,n;return t=new Ee({props:{quote:e[6],href:e[1]}}),{c(){T(t.$$.fragment)},m(o,r){q(t,o,r),n=!0},p(o,r){let c={};r&64&&(c.quote=o[6]),r&2&&(c.href=o[1]),t.$set(c)},i(o){n||($(t.$$.fragment,o),n=!0)},o(o){v(t.$$.fragment,o),n=!1},d(o){j(t,o)}}}function kn(e){return{c:p,m:p,p,i:p,o:p,d:p}}function Qn(e){return{c:p,m:p,p,i:p,o:p,d:p}}function Un(e){let t,n,o,r,c;document.title=t=e[0];let u={ctx:e,current:null,token:null,hasCatch:!1,pending:Qn,then:xn,catch:gn,blocks:[,,,]};return Tt(r=Gt.back(),u),{c(){n=L(),o=me(),u.block.c()},m(i,s){y(i,n,s),y(i,o,s),u.block.m(i,u.anchor=s),u.mount=()=>o.parentNode,u.anchor=o,c=!0},p(i,[s]){e=i,(!c||s&1)&&t!==(t=e[0])&&(document.title=t),At(u,e,s)},i(i){c||($(u.block),c=!0)},o(i){for(let s=0;s<3;s+=1){let l=u.blocks[s];v(l)}c=!1},d(i){i&&(m(n),m(o)),u.block.d(i),u.token=null,u=null}}}function En(e,t,n){let o,r,c,u,i;ot(e,Ne,_=>n(3,o=_)),ot(e,mt,_=>n(4,r=_)),ot(e,Ie,_=>n(5,c=_)),ot(e,Qt,_=>n(6,u=_)),ot(e,Me,_=>n(7,i=_));let{name:s}=t,{repository:l}=t,f;function a(){f.focus(),f.showPicker()}function d(_){f=_,n(2,f)}function x(_){r=_,mt.set(r)}return e.$$set=_=>{"name"in _&&n(0,s=_.name),"repository"in _&&n(1,l=_.repository)},[s,l,f,o,r,c,u,i,a,d,x]}var Zt=class extends O{constructor(t){super(),J(this,t,En,Un,A,{name:0,repository:1})}},Oe=Zt;var ai=new Oe({target:document.body,props:{name:Kt,repository:te}});export{ai as default};
