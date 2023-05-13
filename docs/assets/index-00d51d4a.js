import{c as ae,n as Me,r as P,V as Nt,d as Mt,v as Pt,l as kt,N as It,g as pt,j as $,u as Pe,Y as Ut,a as qt,e as Lt}from"./index-bcd97300.js";const Ft=e=>ae("div",{className:`${Me}-toolbar-item`,title:e.title,onClick:e.onClick,children:e.trigger}),Bt=e=>{const{editorId:t}=P.useContext(Nt);return ae(Mt,{relative:`#${t}-toolbar-wrapper`,visible:e.visible,onChange:e.onChange,overlay:e.overlay,children:ae("div",{className:`${Me}-toolbar-item`,title:e.title||"",children:e.trigger})})},Ht=e=>{const{width:t="auto",height:r="auto"}=e;return Pt(kt,{children:[ae("div",{className:`${Me}-toolbar-item`,title:e.title,onClick:e.onClick,children:e.trigger}),ae(It,{width:t,height:r,title:e.modalTitle,visible:e.visible,onClose:e.onClose,showAdjust:e.showAdjust,isFullscreen:e.isFullscreen,onAdjust:i=>{e.onAdjust instanceof Function&&e.onAdjust(i)},children:e.children})]})};var ke={exports:{}},vt=function(t,r){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return t.apply(r,n)}},zt=vt,Ie=Object.prototype.toString,Ue=function(e){return function(t){var r=Ie.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function Q(e){return e=e.toLowerCase(),function(r){return Ue(r)===e}}function qe(e){return Array.isArray(e)}function de(e){return typeof e>"u"}function Yt(e){return e!==null&&!de(e)&&e.constructor!==null&&!de(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var yt=Q("ArrayBuffer");function Vt(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&yt(e.buffer),t}function Wt(e){return typeof e=="string"}function Jt(e){return typeof e=="number"}function gt(e){return e!==null&&typeof e=="object"}function le(e){if(Ue(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var Xt=Q("Date"),Qt=Q("File"),Zt=Q("Blob"),Kt=Q("FileList");function Le(e){return Ie.call(e)==="[object Function]"}function Gt(e){return gt(e)&&Le(e.pipe)}function er(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ie.call(e)===t||Le(e.toString)&&e.toString()===t)}var tr=Q("URLSearchParams");function rr(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function nr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Fe(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),qe(e))for(var r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.call(null,e[n],n,e)}function Ne(){var e={};function t(n,s){le(e[s])&&le(n)?e[s]=Ne(e[s],n):le(n)?e[s]=Ne({},n):qe(n)?e[s]=n.slice():e[s]=n}for(var r=0,i=arguments.length;r<i;r++)Fe(arguments[r],t);return e}function ir(e,t,r){return Fe(t,function(n,s){r&&typeof n=="function"?e[s]=zt(n,r):e[s]=n}),e}function sr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function ar(e,t,r,i){e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)}function or(e,t,r){var i,n,s,a={};t=t||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)s=i[n],a[s]||(t[s]=e[s],a[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t}function ur(e,t,r){e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;var i=e.indexOf(t,r);return i!==-1&&i===r}function lr(e){if(!e)return null;var t=e.length;if(de(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r}var cr=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),D={isArray:qe,isArrayBuffer:yt,isBuffer:Yt,isFormData:er,isArrayBufferView:Vt,isString:Wt,isNumber:Jt,isObject:gt,isPlainObject:le,isUndefined:de,isDate:Xt,isFile:Qt,isBlob:Zt,isFunction:Le,isStream:Gt,isURLSearchParams:tr,isStandardBrowserEnv:nr,forEach:Fe,merge:Ne,extend:ir,trim:rr,stripBOM:sr,inherits:ar,toFlatObject:or,kindOf:Ue,kindOfTest:Q,endsWith:ur,toArray:lr,isTypedArray:cr,isFileList:Kt},K=D;function ze(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var wt=function(t,r,i){if(!r)return t;var n;if(i)n=i(r);else if(K.isURLSearchParams(r))n=r.toString();else{var s=[];K.forEach(r,function(d,v){d===null||typeof d>"u"||(K.isArray(d)?v=v+"[]":d=[d],K.forEach(d,function(g){K.isDate(g)?g=g.toISOString():K.isObject(g)&&(g=JSON.stringify(g)),s.push(ze(v)+"="+ze(g))}))}),n=s.join("&")}if(n){var a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+n}return t},dr=D;function fe(){this.handlers=[]}fe.prototype.use=function(t,r,i){return this.handlers.push({fulfilled:t,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};fe.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};fe.prototype.forEach=function(t){dr.forEach(this.handlers,function(i){i!==null&&t(i)})};var fr=fe,hr=D,mr=function(t,r){hr.forEach(t,function(n,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(t[r]=n,delete t[s])})},Et=D;function ee(e,t,r,i,n){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),i&&(this.request=i),n&&(this.response=n)}Et.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var xt=ee.prototype,bt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){bt[e]={value:e}});Object.defineProperties(ee,bt);Object.defineProperty(xt,"isAxiosError",{value:!0});ee.from=function(e,t,r,i,n,s){var a=Object.create(xt);return Et.toFlatObject(e,a,function(d){return d!==Error.prototype}),ee.call(a,e.message,t,r,i,n),a.name=e.name,s&&Object.assign(a,s),a};var re=ee,$t={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},I=D;function pr(e,t){t=t||new FormData;var r=[];function i(s){return s===null?"":I.isDate(s)?s.toISOString():I.isArrayBuffer(s)||I.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(I.isPlainObject(s)||I.isArray(s)){if(r.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);r.push(s),I.forEach(s,function(d,v){if(!I.isUndefined(d)){var y=a?a+"."+v:v,g;if(d&&!a&&typeof d=="object"){if(I.endsWith(v,"{}"))d=JSON.stringify(d);else if(I.endsWith(v,"[]")&&(g=I.toArray(d))){g.forEach(function(l){!I.isUndefined(l)&&t.append(y,i(l))});return}}n(d,y)}}),r.pop()}else t.append(a,i(s))}return n(e),t}var St=pr,ye,Ye;function vr(){if(Ye)return ye;Ye=1;var e=re;return ye=function(r,i,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?r(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},ye}var ge,Ve;function yr(){if(Ve)return ge;Ve=1;var e=D;return ge=e.isStandardBrowserEnv()?function(){return{write:function(i,n,s,a,o,d){var v=[];v.push(i+"="+encodeURIComponent(n)),e.isNumber(s)&&v.push("expires="+new Date(s).toGMTString()),e.isString(a)&&v.push("path="+a),e.isString(o)&&v.push("domain="+o),d===!0&&v.push("secure"),document.cookie=v.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),ge}var gr=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},wr=function(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t},Er=gr,xr=wr,Rt=function(t,r){return t&&!Er(r)?xr(t,r):r},we,We;function br(){if(We)return we;We=1;var e=D,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return we=function(i){var n={},s,a,o;return i&&e.forEach(i.split(`
`),function(v){if(o=v.indexOf(":"),s=e.trim(v.substr(0,o)).toLowerCase(),a=e.trim(v.substr(o+1)),s){if(n[s]&&t.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([a]):n[s]=n[s]?n[s]+", "+a:a}}),n},we}var Ee,Je;function $r(){if(Je)return Ee;Je=1;var e=D;return Ee=e.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function s(a){var o=a;return r&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=s(window.location.href),function(o){var d=e.isString(o)?s(o):o;return d.protocol===n.protocol&&d.host===n.host}}():function(){return function(){return!0}}(),Ee}var xe,Xe;function he(){if(Xe)return xe;Xe=1;var e=re,t=D;function r(i){e.call(this,i??"canceled",e.ERR_CANCELED),this.name="CanceledError"}return t.inherits(r,e,{__CANCEL__:!0}),xe=r,xe}var be,Qe;function Sr(){return Qe||(Qe=1,be=function(t){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}),be}var $e,Ze;function Ke(){if(Ze)return $e;Ze=1;var e=D,t=vr(),r=yr(),i=wt,n=Rt,s=br(),a=$r(),o=$t,d=re,v=he(),y=Sr();return $e=function(l){return new Promise(function(k,q){var W=l.data,J=l.headers,X=l.responseType,U;function oe(){l.cancelToken&&l.cancelToken.unsubscribe(U),l.signal&&l.signal.removeEventListener("abort",U)}e.isFormData(W)&&e.isStandardBrowserEnv()&&delete J["Content-Type"];var m=new XMLHttpRequest;if(l.auth){var L=l.auth.username||"",ne=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";J.Authorization="Basic "+btoa(L+":"+ne)}var B=n(l.baseURL,l.url);m.open(l.method.toUpperCase(),i(B,l.params,l.paramsSerializer),!0),m.timeout=l.timeout;function C(){if(m){var _="getAllResponseHeaders"in m?s(m.getAllResponseHeaders()):null,h=!X||X==="text"||X==="json"?m.responseText:m.response,c={data:h,status:m.status,statusText:m.statusText,headers:_,config:l,request:m};t(function(p){k(p),oe()},function(p){q(p),oe()},c),m=null}}if("onloadend"in m?m.onloadend=C:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(C)},m.onabort=function(){m&&(q(new d("Request aborted",d.ECONNABORTED,l,m)),m=null)},m.onerror=function(){q(new d("Network Error",d.ERR_NETWORK,l,m,m)),m=null},m.ontimeout=function(){var h=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",c=l.transitional||o;l.timeoutErrorMessage&&(h=l.timeoutErrorMessage),q(new d(h,c.clarifyTimeoutError?d.ETIMEDOUT:d.ECONNABORTED,l,m)),m=null},e.isStandardBrowserEnv()){var x=(l.withCredentials||a(B))&&l.xsrfCookieName?r.read(l.xsrfCookieName):void 0;x&&(J[l.xsrfHeaderName]=x)}"setRequestHeader"in m&&e.forEach(J,function(h,c){typeof W>"u"&&c.toLowerCase()==="content-type"?delete J[c]:m.setRequestHeader(c,h)}),e.isUndefined(l.withCredentials)||(m.withCredentials=!!l.withCredentials),X&&X!=="json"&&(m.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&m.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&m.upload&&m.upload.addEventListener("progress",l.onUploadProgress),(l.cancelToken||l.signal)&&(U=function(_){m&&(q(!_||_&&_.type?new v:_),m.abort(),m=null)},l.cancelToken&&l.cancelToken.subscribe(U),l.signal&&(l.signal.aborted?U():l.signal.addEventListener("abort",U))),W||(W=null);var H=y(B);if(H&&["http","https","file"].indexOf(H)===-1){q(new d("Unsupported protocol "+H+":",d.ERR_BAD_REQUEST,l));return}m.send(W)})},$e}var Se,Ge;function Rr(){return Ge||(Ge=1,Se=null),Se}var T=D,et=mr,tt=re,Cr=$t,Or=St,Tr={"Content-Type":"application/x-www-form-urlencoded"};function rt(e,t){!T.isUndefined(e)&&T.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function Dr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Ke()),e}function Ar(e,t,r){if(T.isString(e))try{return(t||JSON.parse)(e),T.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(e)}var me={transitional:Cr,adapter:Dr(),transformRequest:[function(t,r){if(et(r,"Accept"),et(r,"Content-Type"),T.isFormData(t)||T.isArrayBuffer(t)||T.isBuffer(t)||T.isStream(t)||T.isFile(t)||T.isBlob(t))return t;if(T.isArrayBufferView(t))return t.buffer;if(T.isURLSearchParams(t))return rt(r,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var i=T.isObject(t),n=r&&r["Content-Type"],s;if((s=T.isFileList(t))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return Or(s?{"files[]":t}:t,a&&new a)}else if(i||n==="application/json")return rt(r,"application/json"),Ar(t);return t}],transformResponse:[function(t){var r=this.transitional||me.transitional,i=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&T.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?tt.from(a,tt.ERR_BAD_RESPONSE,this,null,this.response):a}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rr()},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};T.forEach(["delete","get","head"],function(t){me.headers[t]={}});T.forEach(["post","put","patch"],function(t){me.headers[t]=T.merge(Tr)});var Be=me,_r=D,jr=Be,Nr=function(t,r,i){var n=this||jr;return _r.forEach(i,function(a){t=a.call(n,t,r)}),t},Re,nt;function Ct(){return nt||(nt=1,Re=function(t){return!!(t&&t.__CANCEL__)}),Re}var it=D,Ce=Nr,Mr=Ct(),Pr=Be,kr=he();function Oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new kr}var Ir=function(t){Oe(t),t.headers=t.headers||{},t.data=Ce.call(t,t.data,t.headers,t.transformRequest),t.headers=it.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),it.forEach(["delete","get","head","post","put","patch","common"],function(n){delete t.headers[n]});var r=t.adapter||Pr.adapter;return r(t).then(function(n){return Oe(t),n.data=Ce.call(t,n.data,n.headers,t.transformResponse),n},function(n){return Mr(n)||(Oe(t),n&&n.response&&(n.response.data=Ce.call(t,n.response.data,n.response.headers,t.transformResponse))),Promise.reject(n)})},M=D,Ot=function(t,r){r=r||{};var i={};function n(y,g){return M.isPlainObject(y)&&M.isPlainObject(g)?M.merge(y,g):M.isPlainObject(g)?M.merge({},g):M.isArray(g)?g.slice():g}function s(y){if(M.isUndefined(r[y])){if(!M.isUndefined(t[y]))return n(void 0,t[y])}else return n(t[y],r[y])}function a(y){if(!M.isUndefined(r[y]))return n(void 0,r[y])}function o(y){if(M.isUndefined(r[y])){if(!M.isUndefined(t[y]))return n(void 0,t[y])}else return n(void 0,r[y])}function d(y){if(y in r)return n(t[y],r[y]);if(y in t)return n(void 0,t[y])}var v={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:d};return M.forEach(Object.keys(t).concat(Object.keys(r)),function(g){var l=v[g]||s,S=l(g);M.isUndefined(S)&&l!==d||(i[g]=S)}),i},Te,st;function Tt(){return st||(st=1,Te={version:"0.27.2"}),Te}var Ur=Tt().version,V=re,He={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){He[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});var at={};He.transitional=function(t,r,i){function n(s,a){return"[Axios v"+Ur+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,o){if(t===!1)throw new V(n(a," has been removed"+(r?" in "+r:"")),V.ERR_DEPRECATED);return r&&!at[a]&&(at[a]=!0,console.warn(n(a," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,a,o):!0}};function qr(e,t,r){if(typeof e!="object")throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var s=i[n],a=t[s];if(a){var o=e[s],d=o===void 0||a(o,s,e);if(d!==!0)throw new V("option "+s+" must be "+d,V.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new V("Unknown option "+s,V.ERR_BAD_OPTION)}}var Lr={assertOptions:qr,validators:He},Dt=D,Fr=wt,ot=fr,ut=Ir,pe=Ot,Br=Rt,At=Lr,G=At.validators;function te(e){this.defaults=e,this.interceptors={request:new ot,response:new ot}}te.prototype.request=function(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=pe(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var i=r.transitional;i!==void 0&&At.assertOptions(i,{silentJSONParsing:G.transitional(G.boolean),forcedJSONParsing:G.transitional(G.boolean),clarifyTimeoutError:G.transitional(G.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(r)===!1||(s=s&&S.synchronous,n.unshift(S.fulfilled,S.rejected))});var a=[];this.interceptors.response.forEach(function(S){a.push(S.fulfilled,S.rejected)});var o;if(!s){var d=[ut,void 0];for(Array.prototype.unshift.apply(d,n),d=d.concat(a),o=Promise.resolve(r);d.length;)o=o.then(d.shift(),d.shift());return o}for(var v=r;n.length;){var y=n.shift(),g=n.shift();try{v=y(v)}catch(l){g(l);break}}try{o=ut(v)}catch(l){return Promise.reject(l)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};te.prototype.getUri=function(t){t=pe(this.defaults,t);var r=Br(t.baseURL,t.url);return Fr(r,t.params,t.paramsSerializer)};Dt.forEach(["delete","get","head","options"],function(t){te.prototype[t]=function(r,i){return this.request(pe(i||{},{method:t,url:r,data:(i||{}).data}))}});Dt.forEach(["post","put","patch"],function(t){function r(i){return function(s,a,o){return this.request(pe(o||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}te.prototype[t]=r(),te.prototype[t+"Form"]=r(!0)});var Hr=te,De,lt;function zr(){if(lt)return De;lt=1;var e=he();function t(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(a){i=a});var n=this;this.promise.then(function(s){if(n._listeners){var a,o=n._listeners.length;for(a=0;a<o;a++)n._listeners[a](s);n._listeners=null}}),this.promise.then=function(s){var a,o=new Promise(function(d){n.subscribe(d),a=d}).then(s);return o.cancel=function(){n.unsubscribe(a)},o},r(function(a){n.reason||(n.reason=new e(a),i(n.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},t.prototype.unsubscribe=function(i){if(this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},t.source=function(){var i,n=new t(function(a){i=a});return{token:n,cancel:i}},De=t,De}var Ae,ct;function Yr(){return ct||(ct=1,Ae=function(t){return function(i){return t.apply(null,i)}}),Ae}var _e,dt;function Vr(){if(dt)return _e;dt=1;var e=D;return _e=function(r){return e.isObject(r)&&r.isAxiosError===!0},_e}var ft=D,Wr=vt,ce=Hr,Jr=Ot,Xr=Be;function _t(e){var t=new ce(e),r=Wr(ce.prototype.request,t);return ft.extend(r,ce.prototype,t),ft.extend(r,t),r.create=function(n){return _t(Jr(e,n))},r}var N=_t(Xr);N.Axios=ce;N.CanceledError=he();N.CancelToken=zr();N.isCancel=Ct();N.VERSION=Tt().version;N.toFormData=St;N.AxiosError=re;N.Cancel=N.CanceledError;N.all=function(t){return Promise.all(t)};N.spread=Yr();N.isAxiosError=Vr();ke.exports=N;ke.exports.default=N;var Qr=ke.exports,Zr=Qr;const Kr=pt(Zr),Gr=Kr.create({timeout:7600,baseURL:"https://imzbf.github.io/md-editor-rt"}),en=Gr,ht=`## 😲 md-editor-rt

Markdown Editor for React, developed in jsx and typescript, support different themes、beautify content by prettier.

### 🤖 Base

**bold**, <u>underline</u>, _italic_, ~~line-through~~, superscript<sup>26</sup>，subscript<sub>[1]</sub>，\`inline code\`，[link](https://imzbf.cc)

> quote: I Have a Dream

1. So even though we face the difficulties of today and tomorrow, I still have a dream.
2. It is a dream deeply rooted in the American dream.
3. I have a dream that one day this nation will rise up.

- [ ] Friday
- [ ] Saturday
- [x] Sunday

![Picture](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)

## 🤗 Demo

\`\`\`js
import { defineComponent, ref } from 'vue';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default defineComponent({
  name: 'MdEditor',
  setup() {
    const text = ref('');
    return () => (
      <MdEditor modelValue={text.value} onChange={(v: string) => (text.value = v)} />
    );
  }
});
\`\`\`

## 🖨 Text

The Old Man and the Sea served to reinvigorate Hemingway's literary reputation and prompted a reexamination of his entire body of work.

## 📈 Table

| nickname | from             |
| -------- | ---------------- |
| zhijian  | ChongQing, China |

## 📏 Formula

Inline: $x+y^{2x}$

$$
\\sqrt[3]{x}
$$

## 🧬 Diagram

\`\`\`mermaid
flowchart TD
  Start --> Stop
\`\`\`

## 🪄 Alert

!!! note Supported Types

note、abstract、info、tip、success、question、warning、failure、danger、bug、example、quote、hint、caution、error、attention

!!!

## ☘️ em...
`,mt=`## 😲 md-editor-rt

Markdown 编辑器，React 版本，使用 jsx 和 typescript 语法开发，支持切换主题、prettier 美化文本等。

### 🤖 基本演示

**加粗**，<u>下划线</u>，_斜体_，~~删除线~~，上标<sup>26</sup>，下标<sub>[1]</sub>，\`inline code\`，[超链接](https://imzbf.cc)

> 引用：《I Have a Dream》

1. So even though we face the difficulties of today and tomorrow, I still have a dream.
2. It is a dream deeply rooted in the American dream.
3. I have a dream that one day this nation will rise up.

- [ ] 周五
- [ ] 周六
- [x] 周天

![图片](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)

## 🤗 代码演示

\`\`\`js
import { defineComponent, ref } from 'vue';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default defineComponent({
  name: 'MdEditor',
  setup() {
    const text = ref('');
    return () => (
      <MdEditor modelValue={text.value} onChange={(v: string) => (text.value = v)} />
    );
  }
});
\`\`\`

## 🖨 文本演示

依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。

## 📈 表格演示

| 昵称 | 来自      |
| ---- | --------- |
| 之间 | 中国-重庆 |

## 📏 公式

行内：$x+y^{2x}$

$$
\\sqrt[3]{x}
$$

## 🧬 图表

\`\`\`mermaid
flowchart TD
  Start --> Stop
\`\`\`

## 🪄 提示

!!! note 支持的类型

note、abstract、info、tip、success、question、warning、failure、danger、bug、example、quote、hint、caution、error、attention

!!!

## ☘️ 占个坑@！
`,tn=["😀","😃","😄","😁","😆","😅","😂","🤣","🥲","🤔","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","👻","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳"],rn=e=>{const[t,r]=P.useState({visible:!1}),i=s=>{const a=()=>({targetValue:s,select:!0,deviationStart:0,deviationEnd:0});e.onInsert(a)},n=s=>{r({visible:s})};return $.jsx(Bt,{title:"emoji",visible:t.visible,onChange:n,trigger:$.jsx("svg",{className:"md-editor-icon","aria-hidden":"true",children:$.jsx("use",{xlinkHref:"#icon-emoji"})}),overlay:$.jsx("div",{className:"emoji-container",children:$.jsx("ol",{className:"emojis",children:tn.map((s,a)=>$.jsx("li",{onClick:()=>{i(s)},children:s},`emoji-${a}`))})})})},nn=rn,sn=e=>{const t=()=>{const r=i=>({targetValue:`==${i}==`,select:!0,deviationStart:2,deviationEnd:-2});e.onInsert(r)};return $.jsx(Ft,{title:"mark",onClick:t,trigger:$.jsx("svg",{className:"md-editor-icon","aria-hidden":"true",children:$.jsx("use",{xlinkHref:"#icon-mark"})})})},an=sn,on=(e,t,r)=>`read-ex-heading-${r}`,un=e=>{const[t,r]=P.useState({visible:!1,modalFullscreen:!1}),i=Pe(n=>n);return $.jsx(Ht,{visible:t.visible,isFullscreen:t.modalFullscreen,showAdjust:!0,title:"弹窗预览",modalTitle:"编辑预览",width:"870px",height:"600px",onClick:()=>{r({...t,visible:!0})},onClose:()=>{r({...t,visible:!1})},onAdjust:()=>{r({...t,modalFullscreen:!t.modalFullscreen})},trigger:$.jsx("svg",{className:"md-editor-icon","aria-hidden":"true",children:$.jsx("use",{xlinkHref:"#icon-read"})}),children:$.jsx("div",{style:{height:"100%",padding:"20px",overflow:"auto"},children:$.jsx(Ut,{theme:i.theme,language:i.lang,previewTheme:i.previewTheme,codeTheme:i.codeTheme,editorId:"edit2preview",modelValue:e.mdText,mdHeadingId:on})})})},ln=un;var jt={exports:{}};(function(e,t){(function(r,i){e.exports=i()})(qt,function(){var r=1e3,i=6e4,n=36e5,s="millisecond",a="second",o="minute",d="hour",v="day",y="week",g="month",l="quarter",S="year",k="date",q="Invalid Date",W=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,J=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(h){var c=["th","st","nd","rd"],u=h%100;return"["+h+(c[(u-20)%10]||c[u]||c[0])+"]"}},U=function(h,c,u){var p=String(h);return!p||p.length>=c?h:""+Array(c+1-p.length).join(u)+h},oe={s:U,z:function(h){var c=-h.utcOffset(),u=Math.abs(c),p=Math.floor(u/60),f=u%60;return(c<=0?"+":"-")+U(p,2,"0")+":"+U(f,2,"0")},m:function h(c,u){if(c.date()<u.date())return-h(u,c);var p=12*(u.year()-c.year())+(u.month()-c.month()),f=c.clone().add(p,g),E=u-f<0,w=c.clone().add(p+(E?-1:1),g);return+(-(p+(u-f)/(E?f-w:w-f))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:g,y:S,w:y,d:v,D:k,h:d,m:o,s:a,ms:s,Q:l}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},m="en",L={};L[m]=X;var ne=function(h){return h instanceof H},B=function h(c,u,p){var f;if(!c)return m;if(typeof c=="string"){var E=c.toLowerCase();L[E]&&(f=E),u&&(L[E]=u,f=E);var w=c.split("-");if(!f&&w.length>1)return h(w[0])}else{var b=c.name;L[b]=c,f=b}return!p&&f&&(m=f),f||!p&&m},C=function(h,c){if(ne(h))return h.clone();var u=typeof c=="object"?c:{};return u.date=h,u.args=arguments,new H(u)},x=oe;x.l=B,x.i=ne,x.w=function(h,c){return C(h,{locale:c.$L,utc:c.$u,x:c.$x,$offset:c.$offset})};var H=function(){function h(u){this.$L=B(u.locale,null,!0),this.parse(u)}var c=h.prototype;return c.parse=function(u){this.$d=function(p){var f=p.date,E=p.utc;if(f===null)return new Date(NaN);if(x.u(f))return new Date;if(f instanceof Date)return new Date(f);if(typeof f=="string"&&!/Z$/i.test(f)){var w=f.match(W);if(w){var b=w[2]-1||0,O=(w[7]||"0").substring(0,3);return E?new Date(Date.UTC(w[1],b,w[3]||1,w[4]||0,w[5]||0,w[6]||0,O)):new Date(w[1],b,w[3]||1,w[4]||0,w[5]||0,w[6]||0,O)}}return new Date(f)}(u),this.$x=u.x||{},this.init()},c.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds()},c.$utils=function(){return x},c.isValid=function(){return this.$d.toString()!==q},c.isSame=function(u,p){var f=C(u);return this.startOf(p)<=f&&f<=this.endOf(p)},c.isAfter=function(u,p){return C(u)<this.startOf(p)},c.isBefore=function(u,p){return this.endOf(p)<C(u)},c.$g=function(u,p,f){return x.u(u)?this[p]:this.set(f,u)},c.unix=function(){return Math.floor(this.valueOf()/1e3)},c.valueOf=function(){return this.$d.getTime()},c.startOf=function(u,p){var f=this,E=!!x.u(p)||p,w=x.p(u),b=function(Z,j){var Y=x.w(f.$u?Date.UTC(f.$y,j,Z):new Date(f.$y,j,Z),f);return E?Y:Y.endOf(v)},O=function(Z,j){return x.w(f.toDate()[Z].apply(f.toDate("s"),(E?[0,0,0,0]:[23,59,59,999]).slice(j)),f)},R=this.$W,A=this.$M,z=this.$D,F="set"+(this.$u?"UTC":"");switch(w){case S:return E?b(1,0):b(31,11);case g:return E?b(1,A):b(0,A+1);case y:var ie=this.$locale().weekStart||0,se=(R<ie?R+7:R)-ie;return b(E?z-se:z+(6-se),A);case v:case k:return O(F+"Hours",0);case d:return O(F+"Minutes",1);case o:return O(F+"Seconds",2);case a:return O(F+"Milliseconds",3);default:return this.clone()}},c.endOf=function(u){return this.startOf(u,!1)},c.$set=function(u,p){var f,E=x.p(u),w="set"+(this.$u?"UTC":""),b=(f={},f[v]=w+"Date",f[k]=w+"Date",f[g]=w+"Month",f[S]=w+"FullYear",f[d]=w+"Hours",f[o]=w+"Minutes",f[a]=w+"Seconds",f[s]=w+"Milliseconds",f)[E],O=E===v?this.$D+(p-this.$W):p;if(E===g||E===S){var R=this.clone().set(k,1);R.$d[b](O),R.init(),this.$d=R.set(k,Math.min(this.$D,R.daysInMonth())).$d}else b&&this.$d[b](O);return this.init(),this},c.set=function(u,p){return this.clone().$set(u,p)},c.get=function(u){return this[x.p(u)]()},c.add=function(u,p){var f,E=this;u=Number(u);var w=x.p(p),b=function(A){var z=C(E);return x.w(z.date(z.date()+Math.round(A*u)),E)};if(w===g)return this.set(g,this.$M+u);if(w===S)return this.set(S,this.$y+u);if(w===v)return b(1);if(w===y)return b(7);var O=(f={},f[o]=i,f[d]=n,f[a]=r,f)[w]||1,R=this.$d.getTime()+u*O;return x.w(R,this)},c.subtract=function(u,p){return this.add(-1*u,p)},c.format=function(u){var p=this,f=this.$locale();if(!this.isValid())return f.invalidDate||q;var E=u||"YYYY-MM-DDTHH:mm:ssZ",w=x.z(this),b=this.$H,O=this.$m,R=this.$M,A=f.weekdays,z=f.months,F=function(j,Y,ve,ue){return j&&(j[Y]||j(p,E))||ve[Y].slice(0,ue)},ie=function(j){return x.s(b%12||12,j,"0")},se=f.meridiem||function(j,Y,ve){var ue=j<12?"AM":"PM";return ve?ue.toLowerCase():ue},Z={YY:String(this.$y).slice(-2),YYYY:this.$y,M:R+1,MM:x.s(R+1,2,"0"),MMM:F(f.monthsShort,R,z,3),MMMM:F(z,R),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:F(f.weekdaysMin,this.$W,A,2),ddd:F(f.weekdaysShort,this.$W,A,3),dddd:A[this.$W],H:String(b),HH:x.s(b,2,"0"),h:ie(1),hh:ie(2),a:se(b,O,!0),A:se(b,O,!1),m:String(O),mm:x.s(O,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:w};return E.replace(J,function(j,Y){return Y||Z[j]||w.replace(":","")})},c.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},c.diff=function(u,p,f){var E,w=x.p(p),b=C(u),O=(b.utcOffset()-this.utcOffset())*i,R=this-b,A=x.m(this,b);return A=(E={},E[S]=A/12,E[g]=A,E[l]=A/3,E[y]=(R-O)/6048e5,E[v]=(R-O)/864e5,E[d]=R/n,E[o]=R/i,E[a]=R/r,E)[w]||R,f?A:x.a(A)},c.daysInMonth=function(){return this.endOf(g).$D},c.$locale=function(){return L[this.$L]},c.locale=function(u,p){if(!u)return this.$L;var f=this.clone(),E=B(u,p,!0);return E&&(f.$L=E),f},c.clone=function(){return x.w(this.$d,this)},c.toDate=function(){return new Date(this.valueOf())},c.toJSON=function(){return this.isValid()?this.toISOString():null},c.toISOString=function(){return this.$d.toISOString()},c.toString=function(){return this.$d.toUTCString()},h}(),_=H.prototype;return C.prototype=_,[["$ms",s],["$s",a],["$m",o],["$H",d],["$W",v],["$M",g],["$y",S],["$D",k]].forEach(function(h){_[h[1]]=function(c){return this.$g(c,h[0],h[1])}}),C.extend=function(h,c){return h.$i||(h(c,H,C),h.$i=!0),C},C.locale=B,C.isDayjs=ne,C.unix=function(h){return C(1e3*h)},C.en=L[m],C.Ls=L,C.p={},C})})(jt);var cn=jt.exports;const je=pt(cn),dn={"en-US":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"zh-CN":["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]},fn=()=>{const e=Pe(n=>n),[t,r]=P.useState(()=>je().format("YYYY/MM/DD HH:mm:ss")),i=P.useMemo(()=>{const n=e.lang,s=je().day();return`${t} ${dn[n][s>0?s-1:6]}`},[e.lang,t]);return P.useEffect(()=>{const n=setInterval(()=>{r(je().format("YYYY/MM/DD HH:mm:ss"))},1e3);return()=>{clearInterval(n)}},[]),$.jsx("span",{children:i})},hn=fn;const mn="editor-preview",vn=()=>{const[e]=P.useState(()=>!!localStorage.getItem("debug")),t=Pe(o=>o),[r,i]=P.useState(()=>t.lang==="zh-CN"?mt:ht),n=P.useRef();P.useEffect(()=>{t.lang==="zh-CN"?i(mt):i(ht)},[t.lang]);const s=P.useMemo(()=>{switch(t.lang){case"zh-CN":return"示例中的标记、emoji、预览和时间扩展组件源码：";default:return"Source code of mark, emoji, preview and time extension components in this page: "}},[t.lang]),a=P.useCallback(o=>{var d;(d=n.current)==null||d.insert(o)},[]);return P.useEffect(()=>{var o,d,v,y,g;e&&((o=n.current)==null||o.on("catalog",l=>{console.log("catalog",l)}),(d=n.current)==null||d.on("fullscreen",l=>{console.log("fullscreen",l)}),(v=n.current)==null||v.on("htmlPreview",l=>{console.log("htmlPreview",l)}),(y=n.current)==null||y.on("pageFullscreen",l=>{console.log("pageFullscreen",l)}),(g=n.current)==null||g.on("preview",l=>{console.log("preview",l)}),window.editorInstance=n.current)},[e]),$.jsx("div",{className:"project-preview",children:$.jsxs("div",{className:"container",children:[$.jsx(Lt,{ref:n,theme:t.theme,previewTheme:t.previewTheme,codeTheme:t.codeTheme,modelValue:r,language:t.lang,editorId:mn,autoDetectCode:!0,defToolbars:[$.jsx(an,{onInsert:a},"mark-extension"),$.jsx(nn,{onInsert:a},"emoji-extension"),$.jsx(ln,{mdText:r},"read-extension")],onSave:(o,d)=>{console.log("v",o),d.then(v=>{console.log("h",v)})},toolbars:["bold","underline","italic","strikeThrough","-","title","sub","sup","quote","unorderedList","orderedList","task","-","codeRow","code","link","image","table","mermaid","katex",0,1,2,"-","revoke","next","save","=","prettier","pageFullscreen","fullscreen","preview","htmlPreview","catalog","github"],onChange:o=>i(o),onUploadImg:async(o,d)=>{const v=await Promise.all(o.map(y=>new Promise((g,l)=>{const S=new FormData;S.append("file",y),en.post("/api/img/upload",S,{headers:{"Content-Type":"multipart/form-data"}}).then(k=>g(k)).catch(k=>l(k))})));d(v.map(y=>y.data.url))},footers:["markdownTotal","=",0,"scrollSwitch"],defFooters:[$.jsx(hn,{},"time-now")]}),$.jsx("br",{}),$.jsxs("span",{className:"tips-text",children:[s,$.jsx("a",{href:"https://github.com/imzbf/md-editor-rt/tree/docs/src/components",target:"_blank",children:"components"})]})]})})};export{vn as default};
