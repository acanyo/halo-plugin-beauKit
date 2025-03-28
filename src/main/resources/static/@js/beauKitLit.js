!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).beauKitLit={})}(this,(function(t){"use strict";var e;const r=globalThis,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}};const a=t=>new n("string"==typeof t?t:t+"",void 0,i),c=(t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),i=r.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=o.cssText,t.appendChild(e)}},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return a(e)})(t):t,{is:d,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:b,getPrototypeOf:m}=Object,g=globalThis,w=g.trustedTypes,f=w?w.emptyScript:"",v=g.reactiveElementPolyfillSupport,y=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(o){r=null}}return r}},$=(t,e)=>!d(t,e),k={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:$};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);void 0!==o&&h(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:i}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==o?void 0:o.call(this)},set(e){const s=null==o?void 0:o.call(this);i.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...u(t),...b(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const t=this._$Eu(e,r);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==(null==(r=o.converter)?void 0:r.toAttribute)?o.converter:_).toAttribute(e,o.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){var r;const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(r=t.converter)?void 0:r.fromAttribute)?t.converter:_;this._$Em=i,this[i]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??$)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,null==v||v({ReactiveElement:x}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");const A=globalThis,S=A.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+T,N=`<${O}>`,P=document,M=()=>P.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,D="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,H=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,j=/"/g,W=/^(?:script|style|textarea|title)$/i,K=(Q=1,(t,...e)=>({_$litType$:Q,strings:t,values:e})),B=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,G=P.createTreeWalker(P,129);var Q;function J(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class Y{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let i=0,s=0;const n=t.length-1,a=this.parts,[c,l]=((t,e)=>{const r=t.length-1,o=[];let i,s=2===e?"<svg>":3===e?"<math>":"",n=L;for(let a=0;a<r;a++){const e=t[a];let r,c,l=-1,d=0;for(;d<e.length&&(n.lastIndex=d,c=n.exec(e),null!==c);)d=n.lastIndex,n===L?"!--"===c[1]?n=z:void 0!==c[1]?n=F:void 0!==c[2]?(W.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=H):void 0!==c[3]&&(n=H):n===H?">"===c[0]?(n=i??L,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,r=c[1],n=void 0===c[3]?H:'"'===c[3]?j:R):n===j||n===R?n=H:n===z||n===F?n=L:(n=H,i=void 0);const h=n===H&&t[a+1].startsWith("/>")?" ":"";s+=n===L?e+N:l>=0?(o.push(r),e.slice(0,l)+C+e.slice(l)+T+h):e+T+(-2===l?a:h)}return[J(t,s+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]})(t,e);if(this.el=Y.createElement(c,r),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=G.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=l[s++],r=o.getAttribute(t).split(T),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:n[2],strings:r,ctor:"."===n[1]?rt:"?"===n[1]?ot:"@"===n[1]?it:et}),o.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:i}),o.removeAttribute(t));if(W.test(o.tagName)){const t=o.textContent.split(T),e=t.length-1;if(e>0){o.textContent=S?S.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],M()),G.nextNode(),a.push({type:2,index:++i});o.append(t[e],M())}}}else if(8===o.nodeType)if(o.data===O)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(T,t+1));)a.push({type:7,index:i}),t+=T.length-1}i++}}static createElement(t,e){const r=P.createElement("template");return r.innerHTML=t,r}}function Z(t,e,r=t,o){var i,s;if(e===B)return e;let n=void 0!==o?null==(i=r._$Co)?void 0:i[o]:r._$Cl;const a=I(e)?void 0:e._$litDirective$;return(null==n?void 0:n.constructor)!==a&&(null==(s=null==n?void 0:n._$AO)||s.call(n,!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,r,o)),void 0!==o?(r._$Co??(r._$Co=[]))[o]=n:r._$Cl=n),void 0!==n&&(e=Z(t,n._$AS(t,e.values),n,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=((null==t?void 0:t.creationScope)??P).importNode(e,!0);G.currentNode=o;let i=G.nextNode(),s=0,n=0,a=r[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new tt(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new st(i,this,t)),this._$AV.push(e),a=r[++n]}s!==(null==a?void 0:a.index)&&(i=G.nextNode(),s++)}return G.currentNode=P,o}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class tt{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=(null==o?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),I(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Y.createElement(J(o.h,o.h[0]),this.options)),o);if((null==(e=this._$AH)?void 0:e._$AD)===i)this._$AH.p(r);else{const t=new X(i,this),e=t.u(this.options);t.p(r),this.T(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Y(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const i of t)o===e.length?e.push(r=new tt(this.O(M()),this.O(M()),this,this.options)):r=e[o],r._$AI(i),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for(null==(r=this._$AP)||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=q}_$AI(t,e=this,r,o){const i=this.strings;let s=!1;if(void 0===i)t=Z(this,t,e,0),s=!I(t)||t!==this._$AH&&t!==B,s&&(this._$AH=t);else{const o=t;let n,a;for(t=i[0],n=0;n<i.length-1;n++)a=Z(this,o[r+n],e,n),a===B&&(a=this._$AH[n]),s||(s=!I(a)||a!==this._$AH[n]),a===q?t=q:t!==q&&(t+=(a??"")+i[n+1]),this._$AH[n]=a}s&&!o&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends et{constructor(t,e,r,o,i){super(t,e,r,o,i),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??q)===B)return;const r=this._$AH,o=t===q&&r!==q||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==q&&(r===q||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const nt=A.litHtmlPolyfillSupport;null==nt||nt(Y,tt),(A.litHtmlVersions??(A.litHtmlVersions=[])).push("3.2.1");let at=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const o=(null==r?void 0:r.renderBefore)??e;let i=o._$litPart$;if(void 0===i){const t=(null==r?void 0:r.renderBefore)??null;o._$litPart$=i=new tt(e.insertBefore(M(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return B}};at._$litElement$=!0,at.finalized=!0,null==(e=globalThis.litElementHydrateSupport)||e.call(globalThis,{LitElement:at});const ct=globalThis.litElementPolyfillSupport;null==ct||ct({LitElement:at}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const lt=1,dt=2,ht=t=>(...e)=>({_$litDirective$:t,values:e});class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}let ut=class extends pt{constructor(t){if(super(t),this.it=q,t.type!==dt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this._t=void 0,this.it=t;if(t===B)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ut.directiveName="unsafeHTML",ut.resultType=1;const bt=ht(ut),mt=t=>(e,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},gt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:$},wt=(t=gt,e,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===o){const{name:o}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,i,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===o){const{name:o}=r;return function(r){const i=this[o];e.call(this,r),this.requestUpdate(o,i,t)}}throw Error("Unsupported decorator location: "+o)};function ft(t){return(e,r)=>"object"==typeof r?wt(t,e,r):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}var vt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,_t=(t,e,r,o)=>{for(var i,s=o>1?void 0:o?yt(e,r):e,n=t.length-1;n>=0;n--)(i=t[n])&&(s=(o?i(e,r,s):i(s))||s);return o&&s&&vt(e,r,s),s};t.NoticePopup=class extends at{constructor(){var t;super(...arguments),this.theme="light",this.config=(null==(t=window.SWISS_KNIFE_CONFIG)?void 0:t.notice)||{enable:!1,showInterval:0,showDelay:0,title:"",content:"",showTime:0,position:"bottom-right"}}detectTheme(){var t,e;if(!(null==(e=null==(t=this.config)?void 0:t.darkMode)?void 0:e.autoDetect))return this.theme;try{if("boolean"==typeof window.SWISS_KNIFE_DARK_MODE)return window.SWISS_KNIFE_DARK_MODE?"dark":"light";const t=this.config.darkMode.selector||"html.dark";if(t.startsWith("[")&&t.includes("="))return document.querySelector(t)?"dark":"light";if(t.includes(".")){const[e,r]=t.split("."),o=e?document.querySelector(e):document.documentElement;return o&&o.classList.contains(r)?"dark":"light"}const e=this.config.darkMode.themeClass||"dark";return document.documentElement.classList.contains(e)?"dark":"light"}catch(r){return window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"}}updateTheme(){const t=this.detectTheme();this.theme!==t&&(this.theme=t)}shouldShow(){var t;if(!(null==(t=this.config)?void 0:t.enable))return!1;if(!this.config.showInterval)return!0;const e=localStorage.getItem("sk-notice-last");return!e||(Date.now()-parseInt(e,10))/36e5>=this.config.showInterval}recordShowTime(){localStorage.setItem("sk-notice-last",Date.now().toString())}connectedCallback(){var t;super.connectedCallback();const e=null==(t=window.SWISS_KNIFE_CONFIG)?void 0:t.notice;e&&(this.config=e),this.config&&!0===this.config.enable&&this.shouldShow()?(this.recordShowTime(),this.theme=this.detectTheme(),this.setupThemeObserver(),this.config.showDelay>0?setTimeout((()=>{this.showNotice()}),this.config.showDelay):this.showNotice()):this.remove()}disconnectedCallback(){super.disconnectedCallback(),this.closeTimeout&&clearTimeout(this.closeTimeout),this.themeObserver&&this.themeObserver.disconnect()}setupThemeObserver(){var t,e;try{document.addEventListener("beaukit-theme-change",(t=>{var e;this.theme=(null==(e=t.detail)?void 0:e.isDark)?"dark":"light"})),this.themeObserver&&this.themeObserver.disconnect(),this.themeObserver=new MutationObserver((()=>{this.updateTheme()}));const r=(null==(e=null==(t=this.config)?void 0:t.darkMode)?void 0:e.selector)||"html.dark";if(r.startsWith("[")){const t=r.match(/\[([^\]]+)\]/);if(t&&t[1]){const e=t[1].split("=")[0];this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:[e],subtree:!0})}}else if(r.includes(".")){const[t,e]=r.split("."),o=t?document.querySelector(t):document.documentElement;o?this.themeObserver.observe(o,{attributes:!0,attributeFilter:["class"]}):this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}else this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const o=window.matchMedia("(prefers-color-scheme: dark)"),i=()=>this.updateTheme();"addEventListener"in o?o.addEventListener("change",i):o.addListener(i)}catch(r){}}showNotice(){this.config.showTime>0&&(this.closeTimeout=window.setTimeout((()=>{this.closeNotice()}),this.config.showTime))}handleClose(t){t.stopPropagation();const e=t.target;if(!e)return void this.closeNotice();e.closest("a[href]")?setTimeout((()=>{this.closeNotice()}),100):(t.preventDefault(),this.closeNotice())}closeNotice(){var t;this.closeTimeout&&clearTimeout(this.closeTimeout);const e=null==(t=this.shadowRoot)?void 0:t.querySelector(".hs-card");e&&(e.classList.remove("hs-fade-in"),e.classList.add("hs-fade-out"),setTimeout((()=>{this.remove()}),300))}processHTML(t,e=!0){const r=document.createElement("template");if(!t.includes("<"))return r.innerHTML=`<a class="${e?"hs-read":"hs-mark-as-read"}">${t}</a>`,r.innerHTML;r.innerHTML=t;const o=r.content.querySelectorAll("a, button");return 0===o.length?r.innerHTML=`<a class="${e?"hs-read":"hs-mark-as-read"}">${t}</a>`:o.forEach((t=>{t.classList.add(e?"hs-read":"hs-mark-as-read")})),r.innerHTML}render(){var t,e,r;return(null==(t=this.config)?void 0:t.enable)?K`
      <div class="hs-card hs-${this.config.position} hs-fade-in ${this.theme}">
        <div class="hs-header">
          <span class="hs-icon">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fill-rule="evenodd"></path>
            </svg>
          </span>
          <p class="hs-alert">${this.config.title}</p>
        </div>

        <p class="hs-message">${this.config.content}</p>

        <div class="hs-actions" @click=${this.handleClose}>
          ${(null==(e=this.config.buttons)?void 0:e.confirm)?K`${bt(this.processHTML(this.config.buttons.confirm,!0))}`:K`<a class="hs-read">查看详情</a>`}
          ${(null==(r=this.config.buttons)?void 0:r.close)?K`${bt(this.processHTML(this.config.buttons.close,!1))}`:K`<a class="hs-mark-as-read">稍后查看</a>`}
        </div>
      </div>
    `:K``}},t.NoticePopup.styles=((t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new n(r,t,i)})`
    /* 组件根元素样式 */
    :host {
      display: contents;
    }

    /* 亮色主题变量定义 */
    .light {
      /* 卡片基础样式 */
      --card-bg: #fff;
      --card-border: #e5e7eb;
      --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      
      /* 文字颜色 */
      --title-color: #374151;
      --content-color: #6B7280;
      
      /* 图标样式 */
      --icon-bg: #3b82f6;
      --icon-color: #ffffff;
      --icon-shadow: none;
      
      /* 主按钮样式 */
      --primary-btn-bg: #3b82f6;
      --primary-btn-color: #ffffff;
      --primary-btn-hover: #2563eb;
      --primary-btn-shadow: none;
      
      /* 次要按钮样式 */
      --secondary-btn-bg: #F3F4F6;
      --secondary-btn-color: #4B5563;
      --secondary-btn-hover: #E5E7EB;
      --secondary-btn-border: none;
      
      /* 特效 */
      --backdrop-filter: none;
    }

    /* 深色主题变量定义 */
    .dark {
      /* 卡片基础样式 */
      --card-bg: #000;
      --card-border: rgba(255, 255, 255, 0.1);
      --card-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
      
      /* 文字颜色 */
      --title-color: rgba(255, 255, 255, 0.95);
      --content-color: rgba(255, 255, 255, 0.7);
      
      /* 图标样式 */
      --icon-bg: #3b82f6;
      --icon-color: rgba(255, 255, 255, 0.95);
      --icon-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      /* 主按钮样式 */
      --primary-btn-bg: #3b82f6;
      --primary-btn-color: rgba(255, 255, 255, 0.95);
      --primary-btn-hover: #2563eb;
      --primary-btn-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      /* 次要按钮样式 */
      --secondary-btn-bg: rgba(255, 255, 255, 0.1);
      --secondary-btn-color: rgba(255, 255, 255, 0.9);
      --secondary-btn-hover: rgba(255, 255, 255, 0.15);
      --secondary-btn-border: 1px solid rgba(255, 255, 255, 0.1);
      
      /* 特效 */
      --backdrop-filter: blur(12px);
    }

    /* 通知卡片容器 */
    .hs-card {
      position: fixed;
      z-index: 9999;
      max-width: 320px;
      border-radius: 1.25rem;
      padding: 1.25rem;
      background-color: var(--card-bg);
      border: 1px solid var(--card-border);
      box-shadow: var(--card-shadow);
      backdrop-filter: var(--backdrop-filter);
      -webkit-backdrop-filter: var(--backdrop-filter);
    }

    /* 通知头部样式 */
    .hs-header {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      margin-bottom: 0.75rem;
    }

    /* 图标容器样式 */
    .hs-icon {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999px;
      background-color: var(--icon-bg);
      color: var(--icon-color);
      box-shadow: var(--icon-shadow);
    }

    /* 图标大小 */
    .hs-icon svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    /* 标题样式 */
    .hs-alert {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.4;
      color: var(--title-color);
    }

    /* 内容样式 */
    .hs-message {
      margin: 0;
      font-size: 0.9375rem;
      line-height: 1.5;
      color: var(--content-color);
    }

    /* 按钮容器样式 */
    .hs-actions {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      margin-top: 1.25rem;
    }

    /* 按钮基础样式 */
    .hs-actions > a {
      display: block;
      text-decoration: none !important;
      text-align: center;
      font-size: 0.9375rem;
      font-weight: 600;
      padding: 0.75rem 1.25rem;
      border-radius: 0.75rem;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s ease;
    }

    /* 主按钮样式 */
    .hs-read {
      background-color: var(--primary-btn-bg);
      color: var(--primary-btn-color) !important;
      border: none;
      box-shadow: var(--primary-btn-shadow);
    }

    .hs-read:hover {
      background-color: var(--primary-btn-hover);
      text-decoration: none !important;
    }

    /* 次要按钮样式 */
    .hs-mark-as-read {
      background-color: var(--secondary-btn-bg);
      color: var(--secondary-btn-color) !important;
      border: var(--secondary-btn-border);
      box-shadow: var(--secondary-btn-shadow);
    }

    .hs-mark-as-read:hover {
      background-color: var(--secondary-btn-hover);
      text-decoration: none !important;
    }

    /* 按钮内容样式 */
    .hs-actions > a > * {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .hs-actions > a svg {
      width: 1rem;
      height: 1rem;
    }

    /* 居中定位样式 */
    .hs-center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* 左上角定位样式 */
    .hs-top-left {
      top: 1.25rem;
      left: 1.25rem;
    }

    /* 右上角定位样式 */
    .hs-top-right {
      top: 1.25rem;
      right: 1.25rem;
    }

    /* 右下角定位样式 */
    .hs-bottom-right {
      bottom: 1.25rem;
      right: 1.25rem;
    }

    /* 左下角定位样式 */
    .hs-bottom-left {
      bottom: 1.25rem;
      left: 1.25rem;
    }

    /* 动画相关样式 */
    .hs-fade-in {
      animation: hsFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .hs-fade-out {
      animation: hsFadeOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    /* 淡入动画 */
    @keyframes hsFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* 淡出动画 */
    @keyframes hsFadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `,_t([ft({type:String})],t.NoticePopup.prototype,"theme",2),_t([ft({type:Object})],t.NoticePopup.prototype,"config",2),t.NoticePopup=_t([mt("notice-popup")],t.NoticePopup),window.addEventListener("DOMContentLoaded",(()=>{var t;if(void 0===window.SWISS_KNIFE_CONFIG)return;const e=null==(t=window.SWISS_KNIFE_CONFIG)?void 0:t.notice;if(e&&!0===e.enable){const t=()=>{if(void 0===window.SWISS_KNIFE_DARK_MODE)return void setTimeout(t,200);const e=document.createElement("notice-popup"),r=window.SWISS_KNIFE_DARK_MODE;e.theme=r?"dark":"light",document.body.appendChild(e)};"complete"===document.readyState?setTimeout((()=>{requestAnimationFrame(t)}),e.showDelay||1e3):window.addEventListener("load",(()=>{setTimeout((()=>{requestAnimationFrame(t)}),e.showDelay||1e3)}))}}));const $t=ht(class extends pt{constructor(t){var e;if(super(t),t.type!==lt||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,o;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null==(r=this.nt)?void 0:r.has(t))&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const t=!!e[s];t===this.st.has(s)||(null==(o=this.nt)?void 0:o.has(s))||(t?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return B}}),kt=a('*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-top:.25rem;margin-bottom:.25rem}.mb-3{margin-bottom:.75rem}.mr-2{margin-right:.5rem}.block{display:block}.inline{display:inline}.flex{display:flex}.table{display:table}.contents{display:contents}.hidden{display:none}.h-px{height:1px}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.max-w-4xl{max-width:56rem}.flex-shrink{flex-shrink:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-blue-800{--tw-bg-opacity: 1;background-color:rgb(30 64 175 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.p-4{padding:1rem}.p-8{padding:2rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.leading-relaxed{line-height:1.625}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:host{display:contents}.dark{color-scheme:dark}.dark\\:bg-blue-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(30 64 175 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:text-gray-300:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}'),xt=class t{constructor(t="data-theme"){this.observers=new Set,this._isDark=!1,this._isDark=this.getCurrentThemeValue(t),this.themeObserver=new MutationObserver((e=>{for(const r of e)if("attributes"===r.type&&r.attributeName===t){this.updateTheme(t);break}})),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:[t]}),this.mediaQuery=window.matchMedia("(prefers-color-scheme: dark)");const e=()=>{null===document.documentElement.getAttribute(t)&&this.updateTheme(t)};"addEventListener"in this.mediaQuery?this.mediaQuery.addEventListener("change",e):this.mediaQuery.addListener(e)}static getInstance(e="data-theme"){return t.instance||(t.instance=new t(e)),t.instance}subscribe(t){return this.observers.add(t),t(this._isDark),()=>{this.observers.delete(t)}}updateTheme(t){const e=this.getCurrentThemeValue(t);this._isDark!==e&&(this._isDark=e,this.notifyObservers())}getCurrentThemeValue(t){const e=document.documentElement.getAttribute(t);return"dark"===e||"light"!==e&&window.matchMedia("(prefers-color-scheme: dark)").matches}notifyObservers(){for(const t of this.observers)t(this._isDark)}get isDark(){return this._isDark}};xt.instance=null;let At=xt;function St(t){return class extends t{connectedCallback(){super.connectedCallback(),c(this.shadowRoot,[kt])}}}function Et(t){var e;return e=class extends t{constructor(){super(...arguments),this._isDarkMode=!1,this.themeAttr="data-theme",this.unsubscribe=null}connectedCallback(){super.connectedCallback(),this.unsubscribe=At.getInstance(this.themeAttr).subscribe((t=>{this._isDarkMode!==t&&(this._isDarkMode=t,this.requestUpdate())}))}disconnectedCallback(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),super.disconnectedCallback()}render(){const t={dark:this._isDarkMode};return K`<div class=${$t(t)}>${this.renderContent()}</div>`}renderContent(){return K``}},e.properties={themeAttr:{type:String},_isDarkMode:{type:Boolean,state:!0}},e}const Ct=Et(St(at)),Tt={CustomLitElement:Ct};var Ot=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Pt=(t,e,r,o)=>{for(var i,s=o>1?void 0:o?Nt(e,r):e,n=t.length-1;n>=0;n--)(i=t[n])&&(s=(o?i(e,r,s):i(s))||s);return o&&s&&Ot(e,r,s),s};let Mt;function It(){var t,e;if(null==(e=null==(t=window.SWISS_KNIFE_CONFIG)?void 0:t.aurora)?void 0:e.enable){const t=document.createElement("script");t.type="module",document.head.appendChild(t),t.onload=()=>{setTimeout((()=>{var t;const e=null==(t=window.SWISS_KNIFE_CONFIG)?void 0:t.aurora,r=document.createElement("aurora-dia");r.setAttribute("position",(null==e?void 0:e.position)||"left"),r.setAttribute("locale",(null==e?void 0:e.locale)||"zh-CN"),document.body.appendChild(r)}),500)}}}function Ut(){"complete"===document.readyState||"interactive"===document.readyState?It():window.addEventListener("DOMContentLoaded",It)}async function Dt(){var t,e;if(null==(e=null==(t=window.SWISS_KNIFE_CONFIG)?void 0:t.player)?void 0:e.enable){const t=window.SWISS_KNIFE_CONFIG.player,e=t.playerId;if(!e)return;try{await function(t,e){return new Promise(((r,o)=>{const i=document.createElement("script");i.type="text/javascript",i.id="myhk",i.src=`https://myhkw.cn/api/player/${t}`,i.setAttribute("key",t),i.setAttribute("m",String(e)),i.onload=()=>r(),i.onerror=()=>o(new Error("Failed to load player script")),document.head.appendChild(i)}))}(e,t.mode||1),setTimeout((()=>{let t=0;const e=setInterval((()=>{t++,t>=5&&clearInterval(e)}),1e3)}),3e3)}catch(r){}}}t.TypographySettings=class extends Ct{constructor(){var t;super(...arguments),this.config=(null==(t=window.SWISS_KNIFE_CONFIG)?void 0:t.typography)||{enable:!1,fontName:"system-ui",fontUrl:""}}async loadFont(){try{if(this.config.fontUrl.endsWith(".css")){const t=document.createElement("link");t.rel="stylesheet",t.href=this.config.fontUrl,await new Promise(((e,r)=>{t.onload=e,t.onerror=r,document.head.appendChild(t)}))}else{const t=new FontFace(this.config.fontName,`url(${this.config.fontUrl})`);await t.load(),document.fonts.add(t)}document.documentElement.style.setProperty("--custom-font",this.config.fontName),document.body.style.fontFamily="var(--custom-font), system-ui"}catch(t){}}async connectedCallback(){var t;super.connectedCallback();const e=null==(t=window.SWISS_KNIFE_CONFIG)?void 0:t.typography;(null==e?void 0:e.enable)&&e.fontName&&e.fontUrl?(this.config=e,await this.loadFont()):this.remove()}},Pt([ft({type:Object})],t.TypographySettings.prototype,"config",2),t.TypographySettings=Pt([mt("typography-settings")],t.TypographySettings),window.addEventListener("load",(()=>{var t,e;"boolean"==typeof(null==(e=null==(t=window.SWISS_KNIFE_CONFIG)?void 0:t.typography)?void 0:e.enable)&&(Mt=window.setTimeout((()=>{const t=document.createElement("typography-settings");document.body.appendChild(t)}),0))}),{once:!0}),window.addEventListener("unload",(()=>{Mt&&clearTimeout(Mt)}),{once:!0}),Ut(),"complete"===document.readyState||"interactive"===document.readyState?Dt():window.addEventListener("DOMContentLoaded",Dt),window.BeauKitComponents={NoticePopup:t.NoticePopup,TypographySettings:t.TypographySettings},t.LitComponents=Tt,t.TW=St,t.TailwindLitElement=Ct,t.ThemeObserver=Et,t.initAuroraDia=Ut,t.loadAuroraDia=It,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
//# sourceMappingURL=beauKitLit.js.map
