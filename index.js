var Xr=Object.defineProperty;var vn=e=>{throw TypeError(e)};var Qr=(e,t,n)=>t in e?Xr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var b=(e,t,n)=>Qr(e,typeof t!="symbol"?t+"":t,n),_t=(e,t,n)=>t.has(e)||vn("Cannot "+n);var u=(e,t,n)=>(_t(e,t,"read from private field"),n?n.call(e):t.get(e)),x=(e,t,n)=>t.has(e)?vn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),w=(e,t,n,r)=>(_t(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),R=(e,t,n)=>(_t(e,t,"access private method"),n);var yn=(e,t,n,r)=>({set _(a){w(e,t,a,n)},get _(){return u(e,t,r)}});import{AsyncLocalStorage as Yr}from"node:async_hooks";function es(){const{process:e,Deno:t}=globalThis;return!(typeof(t==null?void 0:t.noColor)=="boolean"?t.noColor:e!==void 0?"NO_COLOR"in(e==null?void 0:e.env):!1)}var Zt="__COMPOSED_HANDLER",nr=e=>e.length>1,rr=e=>e[Zt]?rr(e[Zt]):e,ts=e=>e.name||(nr(e)?"[middleware]":"[handler]"),ns=e=>e.routes.map(({path:t,method:n,handler:r})=>{const a=rr(r);return{path:t,method:n,name:ts(a),isMiddleware:nr(a)}}),rs=(e,t)=>{const n=es(),r={};let a=0,s=0;ns(e).filter(({isMiddleware:o})=>!o).map(o=>{const i=`${o.method}-${o.path}`;if((r[i]||(r[i]=[])).push(o),!(r[i].length>1))return a=Math.max(a,o.method.length),s=Math.max(s,o.path.length),{method:o.method,path:o.path,routes:r[i]}}).forEach(o=>{if(!o)return;const{method:i,path:l,routes:c}=o,h=n?`\x1B[32m${i}\x1B[0m`:i;console.log(`${h} ${" ".repeat(a-i.length)} ${l}`)})};const ss=e=>(e.status(404),e.render("404 Not Found")),as=Object.freeze(Object.defineProperty({__proto__:null,default:ss},Symbol.toStringTag,{value:"Module"})),os=(e,t)=>"getResponse"in e?e.getResponse():(console.error(e.message),t.status(500),t.render("Internal Server Error")),is=Object.freeze(Object.defineProperty({__proto__:null,default:os},Symbol.toStringTag,{value:"Module"}));var De={Stringify:1,BeforeStream:2,Stream:3},$=(e,t)=>{const n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},ls=/[&<>'"]/,It=async(e,t)=>{let n="";t||(t=[]);const r=await Promise.all(e);for(let a=r.length-1;n+=r[a],a--,!(a<0);a--){let s=r[a];typeof s=="object"&&t.push(...s.callbacks||[]);const o=s.isEscaped;if(s=await(typeof s=="object"?s.toString():s),typeof s=="object"&&t.push(...s.callbacks||[]),s.isEscaped??o)n+=s;else{const i=[n];ue(s,i),n=i[0]}}return $(n,t)},ue=(e,t)=>{const n=e.search(ls);if(n===-1){t[0]+=e;return}let r,a,s=0;for(a=n;a<e.length;a++){switch(e.charCodeAt(a)){case 34:r="&quot;";break;case 39:r="&#39;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t[0]+=e.substring(s,a)+r,s=a+1}t[0]+=e.substring(s,a)},sr=e=>{const t=e.callbacks;if(!(t!=null&&t.length))return e;const n=[e],r={};return t.forEach(a=>a({phase:De.Stringify,buffer:n,context:r})),n[0]},kt=async(e,t,n,r,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const s=e.callbacks;if(!(s!=null&&s.length))return Promise.resolve(e);a?a[0]+=e:a=[e];const o=Promise.all(s.map(i=>i({phase:t,buffer:a,context:r}))).then(i=>Promise.all(i.filter(Boolean).map(l=>kt(l,t,!1,r,a))).then(()=>a[0]));return n?$(await o,s):o},cs=(e,...t)=>{const n=[""];for(let r=0,a=e.length-1;r<a;r++){n[0]+=e[r];const s=Array.isArray(t[r])?t[r].flat(1/0):[t[r]];for(let o=0,i=s.length;o<i;o++){const l=s[o];if(typeof l=="string")ue(l,n);else if(typeof l=="number")n[0]+=l;else{if(typeof l=="boolean"||l===null||l===void 0)continue;if(typeof l=="object"&&l.isEscaped)if(l.callbacks)n.unshift("",l);else{const c=l.toString();c instanceof Promise?n.unshift("",c):n[0]+=c}else l instanceof Promise?n.unshift("",l):ue(l.toString(),n)}}}return n[0]+=e.at(-1),n.length===1?"callbacks"in n?$(sr($(n[0],n.callbacks))):$(n[0]):It(n,n.callbacks)},un=Symbol("RENDERER"),Xt=Symbol("ERROR_HANDLER"),D=Symbol("STASH"),ar=Symbol("INTERNAL"),us=Symbol("MEMO"),Rt=Symbol("PERMALINK"),bn=e=>(e[ar]=!0,e),or=e=>({value:t,children:n})=>{if(!n)return;const r={children:[{tag:bn(()=>{e.push(t)}),props:{}}]};Array.isArray(n)?r.children.push(...n.flat()):r.children.push(n),r.children.push({tag:bn(()=>{e.pop()}),props:{}});const a={tag:"",props:r,type:""};return a[Xt]=s=>{throw e.pop(),s},a},ir=e=>{const t=[e],n=or(t);return n.values=t,n.Provider=n,xe.push(n),n},xe=[],Sn=!1,Lt,Qt,Yt=0,en=!1,lr=()=>{if(Sn)return Lt;Sn=!0;const e=globalThis;let t;for(const n of[()=>{var r,a,s;return(s=(a=(r=e.process)==null?void 0:r.getBuiltinModule)==null?void 0:a.call(r,"node:async_hooks"))==null?void 0:s.AsyncLocalStorage},()=>{var r,a,s,o;return(o=(s=(a=(r=e.process)==null?void 0:r.mainModule)==null?void 0:a.require)==null?void 0:s.call(a,"node:async_hooks"))==null?void 0:o.AsyncLocalStorage}]){try{t=n()}catch{}if(t)break}return t&&(Lt=new t),Lt},ct=()=>{var e;return((e=lr())==null?void 0:e.getStore())||Qt},cr=()=>{Yt>0&&!en&&(en=!0,console.warn("hono/jsx: AsyncLocalStorage is unavailable in this runtime, so useContext() after an await in an async component falls back to the context default value during server-side rendering. To get provided values across await boundaries, use a runtime with AsyncLocalStorage (Node.js >= 20.16, Deno, Bun, or Cloudflare Workers with the nodejs_compat flag)."))},ur=(e,t)=>{if(!e)return cr(),t.values;let n=e.get(t);return n||(n=[t.values[0]],e.set(t,n)),n},dr=(e,t)=>{if(!e)return cr(),t.values.at(-1);const n=e.get(t);return n!=null&&n.length?n.at(-1):t.values[0]},ds=e=>(e?xe.filter(t=>e.has(t)):xe).map(t=>[t,dr(e,t)]),fs=(e,t,n)=>Tt(()=>{const r=ct(),a=n.map(([o,i])=>{const l=ur(r,o);return l.push(i),l}),s=()=>{a.forEach(o=>{o.pop()})};try{const o=e();return o instanceof Promise?o.finally(s):(s(),o)}catch(o){throw s(),o}},t),Tt=(e,t)=>{if(ct())return e();const n=t??new WeakMap,r=lr();if(r)return r.run(n,e);Qt=n;let a;try{a=e()}finally{Qt=void 0}return!en&&a instanceof Promise&&(Yt++,a=a.finally(()=>{Yt--})),a},hs=()=>{const e=ct(),t=ds(e);return n=>fs(n,e,t)},Ot=e=>{const t=[e],n=r=>{const a=ur(ct(),n);a.push(r.value);let s;try{s=typeof r.children=="string"?fn([r.children]):Ns(r.children)?js(r.children):r.children?(Array.isArray(r.children)?new vr("",{},r.children):r.children).toString():$("")}catch(o){throw a.pop(),o}return s instanceof Promise?s.finally(()=>a.pop()).then(o=>$(o,o.callbacks)):(a.pop(),$(s))};return n.values=t,n.Provider=n,n[un]=or(t),xe.push(n),n},Ee=e=>dr(ct(),e),Pt={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},tn={},ye="data-precedence",fr=e=>e.rel==="stylesheet"&&"precedence"in e,hr=(e,t)=>e==="link"?t:Pt[e].length>0,ut=e=>Array.isArray(e)?e:[e],wn=new WeakMap,An=(e,t,n,r)=>({buffer:a,context:s})=>{if(!a)return;const o=wn.get(s)||{};wn.set(s,o);const i=o[e]||(o[e]=[]);let l=!1;const c=Pt[e],h=hr(e,r!==void 0);if(h){e:for(const[,f]of i)if(!(e==="link"&&!(f.rel==="stylesheet"&&f[ye]!==void 0))){for(const d of c)if(((f==null?void 0:f[d])??null)===(n==null?void 0:n[d])){l=!0;break e}}}if(l?a[0]=a[0].replaceAll(t,""):h||e==="link"?i.push([t,n,r]):i.unshift([t,n,r]),a[0].indexOf("</head>")!==-1){let f;if(e==="link"||r!==void 0){const d=[];f=i.map(([m,,g],y)=>{if(g===void 0)return[m,Number.MAX_SAFE_INTEGER,y];let v=d.indexOf(g);return v===-1&&(d.push(g),v=d.length-1),[m,v,y]}).sort((m,g)=>m[1]-g[1]||m[2]-g[2]).map(([m])=>m)}else f=i.map(([d])=>d);f.forEach(d=>{a[0]=a[0].replaceAll(d,"")}),a[0]=a[0].replace(/(?=<\/head>)/,()=>f.join(""))}},dt=(e,t,n)=>fn([new F(e,n,ut(t??[]))]),ft=(e,t,n,r)=>{if("itemProp"in n)return dt(e,t,n);let{precedence:a,blocking:s,...o}=n;a=r?a??"":void 0,r&&(o[ye]=a);const i=new F(e,o,ut(t||[])).toString();return i instanceof Promise?i.then(l=>$(l,[...l.callbacks||[],An(e,l,o,a)])):$(i,[An(e,i,o,a)])},ps=({children:e,...t})=>{const n=dn();if(n){const r=Ee(n);if(r==="svg"||r==="head")return new F("title",t,ut(e??[]))}return ft("title",e,t,!1)},ms=({children:e,...t})=>{const n=dn();return["src","async"].some(r=>!t[r])||n&&Ee(n)==="head"?dt("script",e,t):ft("script",e,t,!1)},gs=({children:e,...t})=>["href","precedence"].every(n=>n in t)?(t["data-href"]=t.href,delete t.href,ft("style",e,t,!0)):dt("style",e,t),vs=({children:e,...t})=>["onLoad","onError"].some(n=>n in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?dt("link",e,t):ft("link",e,t,fr(t)),ys=({children:e,...t})=>{const n=dn();return n&&Ee(n)==="head"?dt("meta",e,t):ft("meta",e,t,!1)},pr=(e,{children:t,...n})=>new F(e,n,ut(t??[])),bs=e=>(typeof e.action=="function"&&(e.action=Rt in e.action?e.action[Rt]:void 0),pr("form",e)),mr=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=Rt in t.formAction?t.formAction[Rt]:void 0),pr(e,t)),Ss=e=>mr("input",e),ws=e=>mr("button",e);const Nt=Object.freeze(Object.defineProperty({__proto__:null,button:ws,form:bs,input:Ss,link:vs,meta:ys,script:ms,style:gs,title:ps},Symbol.toStringTag,{value:"Module"}));var As=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),Dt=e=>As.get(e)||e,Cs=/[\s"'<>/=`\\\x00-\x1f\x7f-\x9f]/,jt=new Set,Cn=1024,xs=/^[!?]|[\s"'<>/=`\\\x00-\x1f\x7f-\x9f]/,xn=new Set,Es=256,qe=(e,t,n)=>{e.size>=t&&e.clear(),e.add(n)},ks=e=>xn.has(e)?!0:typeof e!="string"?!1:e.length===0?!0:xs.test(e)?!1:(qe(xn,Es,e),!0),Rs=e=>{if(jt.has(e))return!0;const t=e.length;if(t===0)return!1;for(let n=0;n<t;n++){const r=e.charCodeAt(n);if(!(r>=97&&r<=122||r>=65&&r<=90||r>=48&&r<=57||r===45||r===95||r===46||r===58))return Cs.test(e)?!1:(qe(jt,Cn,e),!0)}return qe(jt,Cn,e),!0},Ps=/[\s"'():;\\/\[\]{}\x00-\x1f\x7f-\x9f]/,Mt=new Set,En=1024,Ds=e=>{if(Mt.has(e))return!0;const t=e.length;if(t===0)return!1;for(let n=0;n<t;n++){const r=e.charCodeAt(n);if(!(r>=97&&r<=122||r>=65&&r<=90||r>=48&&r<=57||r===45||r===95))return Ps.test(e)?!1:(qe(Mt,En,e),!0)}return qe(Mt,En,e),!0},Is=/[;"'\\/\[\](){}]/,Ts=e=>{if(!Is.test(e))return!1;let t=0;const n=[];for(let r=0,a=e.length;r<a;r++){const s=e.charCodeAt(r);if(s===92){if(r===a-1)return!0;r++}else if(t!==0){if(s===10||s===12||s===13)return!0;s===t&&(t=0)}else if(s===47&&e.charCodeAt(r+1)===42){const o=e.indexOf("*/",r+2);if(o===-1)return!0;r=o+1}else if(s===34||s===39)t=s;else if(s===40)n.push(41);else if(s===91)n.push(93);else{if(s===123||s===125)return!0;if(s===41||s===93){if(n[n.length-1]!==s)return!0;n.pop()}else if(s===59&&n.length===0)return!0}}return t!==0||n.length!==0},gr=(e,t)=>{for(const[n,r]of Object.entries(e)){const a=n[0]==="-"||!/[A-Z]/.test(n)?n:n.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`);if(!Ds(a))continue;if(r==null){t(a,null);continue}let s;if(typeof r=="number")s=a.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${r}`:`${r}px`;else if(typeof r=="string"){if(Ts(r))continue;s=r}else continue;t(a,s)}},Je=void 0,dn=()=>Je,Os=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,_s=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],Ls=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],kn=(e,t)=>e.then(n=>{if(typeof n!="string"&&!Array.isArray(n)&&!(n instanceof F))return n;const r=Array.isArray(n)?n:[n],a=()=>{const s=[""];return Be(r,s),s.length===1?$(s[0],s.callbacks):It(s,s.callbacks)};return t?t(a):Tt(a)}),Be=(e,t)=>{for(let n=0,r=e.length;n<r;n++){const a=e[n];if(typeof a=="string")ue(a,t);else{if(typeof a=="boolean"||a===null||a===void 0)continue;if(a instanceof F)a.toStringToBuffer(t);else if(typeof a=="number")t[0]+=a;else if(a.isEscaped){t[0]+=a;const s=a.callbacks;s&&(t.callbacks||(t.callbacks=[]),t.callbacks.push(...s))}else a instanceof Promise?t.unshift("",a):Be(a,t)}}},fn=e=>Tt(()=>{const t=[""];return Be(e,t),t.length===1?$(t[0],t.callbacks):It(t,t.callbacks)}),Ns=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)&&!(e instanceof F)&&!(e instanceof Promise)&&!e.isEscaped&&typeof e.toString=="function",js=e=>{const t=e.toString(),n=r=>fn([String(r)]);return t instanceof Promise?t.then(n):n(t)},F=class{constructor(e,t,n){b(this,"tag");b(this,"props");b(this,"key");b(this,"children");b(this,"isEscaped",!0);if(typeof e!="function"&&!ks(e))throw new Error(`Invalid JSX tag name: ${e}`);this.tag=e,this.props=t,this.children=n}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){return Tt(()=>{const t=[""];return this.toStringToBuffer(t),t.length===1?"callbacks"in t?sr($(t[0],t.callbacks)).toString():t[0]:It(t,t.callbacks)})}toStringToBuffer(e){const t=this.tag,n=this.props;let{children:r}=this;e[0]+=`<${t}`;const a=t==="svg"||Je&&Ee(Je)==="svg"?s=>Os(Dt(s)):s=>Dt(s);for(let[s,o]of Object.entries(n))if(s=a(s),!!Rs(s)&&s!=="children"){if(s==="style"&&typeof o=="object"){let i="";gr(o,(l,c)=>{c!=null&&(i+=`${i?";":""}${l}:${c}`)}),e[0]+=' style="',ue(i,e),e[0]+='"'}else if(typeof o=="string")e[0]+=` ${s}="`,ue(o,e),e[0]+='"';else if(o!=null)if(typeof o=="number"||o.isEscaped)e[0]+=` ${s}="${o}"`;else if(typeof o=="boolean"&&Ls.includes(s))o&&(e[0]+=` ${s}=""`);else if(s==="dangerouslySetInnerHTML"){if(r.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r=[$(o.__html)]}else if(o instanceof Promise)e[0]+=` ${s}="`,e.unshift('"',o);else if(typeof o=="function"){if(!s.startsWith("on")&&s!=="ref")throw new Error(`Invalid prop '${s}' of type 'function' supplied to '${t}'.`)}else e[0]+=` ${s}="`,ue(o.toString(),e),e[0]+='"'}if(_s.includes(t)&&r.length===0){e[0]+="/>";return}e[0]+=">",Be(r,e),e[0]+=`</${t}>`}},$t=class extends F{toStringToBuffer(e){const{children:t}=this,n={...this.props};t.length&&(n.children=t.length===1?t[0]:t);const r=this.tag.call(null,n);typeof r=="boolean"||r==null||(r instanceof Promise?xe.length===0?e.unshift("",kn(r)):e.unshift("",kn(r,hs())):r instanceof F?r.toStringToBuffer(e):Array.isArray(r)?Be(r,e):typeof r=="number"||r.isEscaped?(e[0]+=r,r.callbacks&&(e.callbacks||(e.callbacks=[]),e.callbacks.push(...r.callbacks))):ue(r,e))}},vr=class extends F{toStringToBuffer(e){Be(this.children,e)}},nn=(e,t,...n)=>{t??(t={}),n.length&&(t.children=n.length===1?n[0]:n);const r=t.key;delete t.key;const a=vt(e,t,n);return a.key=r,a},Rn=!1,vt=(e,t,n)=>{if(!Rn){for(const r in tn)Nt[r][un]=tn[r];Rn=!0}return typeof e=="function"?new $t(e,t,n):Nt[e]?new $t(Nt[e],t,n):e==="svg"||e==="head"?(Je||(Je=Ot("")),new F(e,t,[new $t(Je,{value:e},n)])):new F(e,t,n)},$e=({children:e})=>new vr("",{children:e},Array.isArray(e)?e:e?[e]:[]),Ms=e=>!!(e&&typeof e=="object"&&"tag"in e&&"props"in e);function p(e,t,n){let r;if(!t||!("children"in t))r=vt(e,t,[]);else{const a=t.children;r=Array.isArray(a)?vt(e,t,a):vt(e,t,[a])}return r.key=n,r}var Ze="_hp",$s={Change:"Input",DoubleClick:"DblClick"},Ws={svg:"2000/svg",math:"1998/Math/MathML"},We=[],Ue=new WeakMap,Fe=void 0,Fs=()=>Fe,J=e=>"t"in e,Wt={onClick:["click",!1]},Pn=e=>{if(!e.startsWith("on"))return;if(Wt[e])return Wt[e];const t=e.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(t){const[,n,r]=t;return Wt[e]=[($s[n]||n).toLowerCase(),!!r]}},Dn=(e,t)=>Fe&&e instanceof SVGElement&&/[A-Z]/.test(t)&&(t in e.style||t.match(/^(?:o|pai|str|u|ve)/))?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,yr=e=>e==null||e===!1?null:e,Hs=(e,t)=>{"value"in t&&(e.value=yr(t.value),!e.multiple&&e.selectedIndex===-1&&(e.selectedIndex=0))},In=e=>e instanceof DOMException&&e.name==="InvalidCharacterError",Bs=(e,t,n)=>{var r,a;t||(t={});for(let s in t){const o=t[s];if(s!=="children"&&(!n||n[s]!==o)){s=Dt(s);const i=Pn(s);if(i){if((n==null?void 0:n[s])!==o&&(n&&e.removeEventListener(i[0],n[s],i[1]),o!=null)){if(typeof o!="function")throw new Error(`Event handler for "${s}" is not a function`);e.addEventListener(i[0],o,i[1])}}else if(s==="dangerouslySetInnerHTML"&&o)e.innerHTML=o.__html;else if(s==="ref"){(r=Ue.get(e))==null||r();let l;typeof o=="function"?l=o(e)||(()=>o(null)):o&&"current"in o&&(o.current=e,l=()=>o.current=null),Ue.set(e,l)}else if(s==="style"){const l=e.style;typeof o=="string"?l.cssText=o:(l.cssText="",o!=null&&gr(o,l.setProperty.bind(l)))}else{if(s==="value"){const c=e.nodeName;if(c==="SELECT")continue;if((c==="INPUT"||c==="TEXTAREA")&&(e.value=yr(o),c==="TEXTAREA")){e.textContent=o;continue}}else(s==="checked"&&e.nodeName==="INPUT"||s==="selected"&&e.nodeName==="OPTION")&&(e[s]=o);const l=Dn(e,s);try{o==null||o===!1?e.removeAttribute(l):o===!0?e.setAttribute(l,""):typeof o=="string"||typeof o=="number"?e.setAttribute(l,o):e.setAttribute(l,o.toString())}catch(c){if(!In(c))throw c}}}}if(n)for(let s in n){const o=n[s];if(s!=="children"&&!(s in t)){s=Dt(s);const i=Pn(s);if(i)e.removeEventListener(i[0],o,i[1]);else if(s==="ref")(a=Ue.get(e))==null||a(),Ue.delete(e);else try{e.removeAttribute(Dn(e,s))}catch(l){if(!In(l))throw l}}}},Gs=(e,t)=>{t[D][0]=0,We.push([e,t]);const n=t.tag[un]||t.tag,r=n.defaultProps?{...n.defaultProps,...t.props}:t.props;try{return[n.call(null,r)]}finally{We.pop()}},br=(e,t,n,r,a)=>{var s,o;(s=e.vR)!=null&&s.length&&(r.push(...e.vR),delete e.vR),typeof e.tag=="function"&&((o=e[D][1][Ve])==null||o.forEach(i=>a.push(i))),e.vC.forEach(i=>{var l;if(J(i))n.push(i);else if(typeof i.tag=="function"||i.tag===""){i.c=t;const c=n.length;if(br(i,t,n,r,a),i.s){for(let h=c;h<n.length;h++)n[h].s=!0;i.s=!1}}else n.push(i),(l=i.vR)!=null&&l.length&&(r.push(...i.vR),delete i.vR)})},Us=e=>{var t;for(;e&&(e.tag===Ze||!e.e);)e=e.tag===Ze||!((t=e.vC)!=null&&t[0])?e.nN:e.vC[0];return e==null?void 0:e.e},Sr=e=>{var t,n,r,a,s,o;J(e)||((n=(t=e[D])==null?void 0:t[1][Ve])==null||n.forEach(i=>{var l;return(l=i[2])==null?void 0:l.call(i)}),(r=Ue.get(e.e))==null||r(),e.p===2&&((a=e.vC)==null||a.forEach(i=>i.p=2)),(s=e.vC)==null||s.forEach(Sr)),e.p||((o=e.e)==null||o.remove(),delete e.e),typeof e.tag=="function"&&(ze.delete(e),yt.delete(e),delete e[D][3],e.a=!0)},wr=(e,t,n)=>{e.c=t,Ar(e,t,n)},Tn=(e,t)=>{if(t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n}},On=Symbol(),Ar=(e,t,n)=>{var c;const r=[],a=[],s=[];br(e,t,r,a,s),a.forEach(Sr);const o=n?void 0:t.childNodes;let i,l=null;if(n)i=-1;else if(!o.length)i=0;else{const h=Tn(o,Us(e.nN));h!==void 0?(l=o[h],i=h):i=Tn(o,(c=r.find(f=>f.tag!==Ze&&f.e))==null?void 0:c.e)??-1,i===-1&&(n=!0)}for(let h=0,f=r.length;h<f;h++,i++){const d=r[h];let m;if(d.s&&d.e)m=d.e,d.s=!1;else{const g=n||!d.e;J(d)?(d.e&&d.d&&(d.e.textContent=d.t),d.d=!1,m=d.e||(d.e=document.createTextNode(d.t))):(m=d.e||(d.e=d.n?document.createElementNS(d.n,d.tag):document.createElement(d.tag)),Bs(m,d.props,d.pP),Ar(d,m,g),d.tag==="select"&&Hs(m,d.props))}d.tag===Ze?i--:n?m.parentNode||t.appendChild(m):o[i]!==m&&o[i-1]!==m&&(o[i+1]===m?t.appendChild(o[i]):t.insertBefore(m,l||o[i]||null))}if(e.pP&&(e.pP=void 0),s.length){const h=[],f=[];s.forEach(([,d,,m,g])=>{d&&h.push(d),m&&f.push(m),g==null||g()}),h.forEach(d=>d()),f.length&&requestAnimationFrame(()=>{f.forEach(d=>d())})}},zs=(e,t)=>!!(e&&e.length===t.length&&e.every((n,r)=>n[1]===t[r][1])),yt=new WeakMap,rn=(e,t,n)=>{var s,o,i,l,c,h;const r=!n&&t.pC;n&&(t.pC||(t.pC=t.vC));let a;try{n||(n=typeof t.tag=="function"?Gs(e,t):ut(t.props.children)),((s=n[0])==null?void 0:s.tag)===""&&n[0][Xt]&&(a=n[0][Xt],e[5].push([e,a,t]));const f=r?[...t.pC]:t.vC?[...t.vC]:void 0,d=[];let m;for(let g=0;g<n.length;g++){if(Array.isArray(n[g])){n.splice(g,1,...n[g].flat(1/0)),g--;continue}let y=Ks(n[g]);if(y){typeof y.tag=="function"&&!y.tag[ar]&&(xe.length>0&&(y[D][2]=xe.map(A=>[A,A.values.at(-1)])),(o=e[5])!=null&&o.length&&(y[D][3]=e[5].at(-1)));let v;if(f&&f.length){const A=f.findIndex(J(y)?C=>J(C):y.key!==void 0?C=>C.key===y.key&&C.tag===y.tag:C=>C.tag===y.tag);A!==-1&&(v=f[A],f.splice(A,1))}if(v)if(J(y))v.t!==y.t&&(v.t=y.t,v.d=!0),y=v;else{const A=v.pP=v.props;if(v.props=y.props,v.f||(v.f=y.f||t.f),typeof y.tag=="function"){const C=v[D][2];v[D][2]=y[D][2]||[],v[D][3]=y[D][3],!v.f&&((v.o||v)===y.o||(l=(i=v.tag)[us])!=null&&l.call(i,A,v.props))&&zs(C,v[D][2])&&(v.s=!0)}y=v}else if(!J(y)&&Fe){const A=Ee(Fe);A&&(y.n=A)}if(!J(y)&&!y.s&&(rn(e,y),delete y.f),d.push(y),m&&!m.s&&!y.s)for(let A=m;A&&!J(A);A=(c=A.vC)==null?void 0:c.at(-1))A.nN=y;m=y}}t.vR=r?[...t.vC,...f||[]]:f||[],t.vC=d,r&&delete t.pC}catch(f){if(t.f=!0,f===On){if(a)return;throw f}const[d,m,g]=((h=t[D])==null?void 0:h[3])||[];if(m){const y=()=>bt([0,!1,e[2]],g),v=yt.get(g)||[];v.push(y),yt.set(g,v);const A=m(f,()=>{const C=yt.get(g);if(C){const P=C.indexOf(y);if(P!==-1)return C.splice(P,1),y()}});if(A){if(e[0]===1)e[1]=!0;else if(rn(e,g,[A]),(m.length===1||e!==d)&&g.c){wr(g,g.c,!1);return}throw On}}throw f}finally{a&&e[5].pop()}},Ks=e=>{if(!(e==null||typeof e=="boolean")){if(typeof e=="string"||typeof e=="number")return{t:e.toString(),d:!0};if("vR"in e&&(e={tag:e.tag,props:e.props,key:e.key,f:e.f,type:e.tag,ref:e.props.ref,o:e.o||e}),typeof e.tag=="function")e[D]=[0,[]];else{const t=Ws[e.tag];t&&(Fe||(Fe=ir("")),e.props.children=[{tag:Fe,props:{value:e.n=`http://www.w3.org/${t}`,children:e.props.children}}])}return e}},_n=(e,t)=>{var n,r;(n=t[D][2])==null||n.forEach(([a,s])=>{a.values.push(s)});try{rn(e,t,void 0)}catch{return}if(t.a){delete t.a;return}(r=t[D][2])==null||r.forEach(([a])=>{a.values.pop()}),(e[0]!==1||!e[1])&&wr(t,t.c,!1)},ze=new WeakMap,Ln=[],bt=async(e,t)=>{e[5]||(e[5]=[]);const n=ze.get(t);n&&n[0](void 0);let r;const a=new Promise(s=>r=s);if(ze.set(t,[r,()=>{e[2]?e[2](e,t,s=>{_n(s,t)}).then(()=>r(t)):(_n(e,t),r(t))}]),Ln.length)Ln.at(-1).add(t);else{await Promise.resolve();const s=ze.get(t);s&&(ze.delete(t),s[1]())}return a},Vs=(e,t,n)=>({tag:Ze,props:{children:e},key:n,e:t,p:1}),Ft=0,Ve=1,Ht=2,Bt=3,Gt=new WeakMap,hn=(e,t)=>!e||!t||e.length!==t.length||t.some((n,r)=>n!==e[r]),qs=void 0,Nn=[],Xe=e=>{var o;const t=()=>typeof e=="function"?e():e,n=We.at(-1);if(!n)return[t(),()=>{}];const[,r]=n,a=(o=r[D][1])[Ft]||(o[Ft]=[]),s=r[D][0]++;return a[s]||(a[s]=[t(),i=>{const l=qs,c=a[s];if(typeof i=="function"&&(i=i(c[0])),!Object.is(i,c[0]))if(c[0]=i,Nn.length){const[h,f]=Nn.at(-1);Promise.all([h===3?r:bt([h,!1,l],r),f]).then(([d])=>{if(!d||!(h===2||h===3))return;const m=d.vC;requestAnimationFrame(()=>{setTimeout(()=>{m===d.vC&&bt([h===3?1:0,!1,l],d)})})})}else bt([0,!1,l],r)}])},Js=(e,t,n)=>{var c;const r=We.at(-1);if(!r)return;const[,a]=r,s=(c=a[D][1])[Ve]||(c[Ve]=[]),o=a[D][0]++,[i,,l]=s[o]||(s[o]=[]);if(hn(i,n)){l&&l();const h=()=>{f[e]=void 0,f[2]=t()},f=[n,void 0,void 0,void 0,void 0];f[e]=h,s[o]=f}},jn=(e,t)=>Js(3,e,t),pn=(e,t)=>{var i;const n=We.at(-1);if(!n)return e;const[,r]=n,a=(i=r[D][1])[Ht]||(i[Ht]=[]),s=r[D][0]++,o=a[s];return hn(o==null?void 0:o[1],t)?a[s]=[e,t]:e=a[s][0],e},Zs=e=>{const t=Gt.get(e);if(t){if(t.length===2)throw t[1];return t[0]}throw e.then(n=>Gt.set(e,[n]),n=>Gt.set(e,[void 0,n])),e},Xs=(e,t)=>{var i;const n=We.at(-1);if(!n)return e();const[,r]=n,a=(i=r[D][1])[Bt]||(i[Bt]=[]),s=r[D][0]++,o=a[s];return hn(o==null?void 0:o[1],t)&&(a[s]=[e(),t]),a[s][0]},Qs=ir({pending:!1,data:null,method:null,action:null}),Mn=new Set,Ys=e=>{Mn.add(e),e.finally(()=>Mn.delete(e))},mn=(e,t)=>Xs(()=>n=>{let r;e&&(typeof e=="function"?r=e(n)||(()=>{e(null)}):e&&"current"in e&&(e.current=n,r=()=>{e.current=null}));const a=t(n);return()=>{a==null||a(),r==null||r()}},[e]),Re=Object.create(null),pt=Object.create(null),ht=(e,t,n,r,a)=>{if(t!=null&&t.itemProp)return{tag:e,props:t,type:e,ref:t.ref};const s=document.head;let{onLoad:o,onError:i,precedence:l,blocking:c,...h}=t,f=null,d=!1;const m=Pt[e],g=hr(e,r),y=S=>S.getAttribute("rel")==="stylesheet"&&S.getAttribute(ye)!==null;let v;if(g){const S=s.querySelectorAll(e);e:for(const k of S)if(!(e==="link"&&!y(k))){for(const E of m)if(k.getAttribute(E)===t[E]){f=k;break e}}if(!f){const k=m.reduce((E,I)=>t[I]===void 0?E:`${E}-${I}-${t[I]}`,e);d=!pt[k],f=pt[k]||(pt[k]=(()=>{const E=document.createElement(e);for(const I of m)t[I]!==void 0&&E.setAttribute(I,t[I]);return t.rel&&E.setAttribute("rel",t.rel),E})())}}else v=s.querySelectorAll(e);l=r?l??"":void 0,r&&(h[ye]=l);const A=pn(S=>{if(g){if(e==="link"&&l!==void 0){let E=!1;for(const I of s.querySelectorAll(e)){const N=I.getAttribute(ye);if(N===null){s.insertBefore(S,I);return}if(E&&N!==l){s.insertBefore(S,I);return}N===l&&(E=!0)}s.appendChild(S);return}let k=!1;for(const E of s.querySelectorAll(e)){if(k&&E.getAttribute(ye)!==l){s.insertBefore(S,E);return}E.getAttribute(ye)===l&&(k=!0)}s.appendChild(S)}else if(e==="link")s.contains(S)||s.appendChild(S);else if(v){let k=!1;for(const E of v)if(E===S){k=!0;break}k||s.insertBefore(S,s.contains(v[0])?v[0]:s.querySelector(e)),v=void 0}},[g,l,e]),C=mn(t.ref,S=>{var I;const k=m[0];if(n===2&&(S.innerHTML=""),(d||v)&&A(S),!i&&!o||!k)return;let E=Re[I=S.getAttribute(k)]||(Re[I]=new Promise((N,ke)=>{S.addEventListener("load",N),S.addEventListener("error",ke)}));o&&(E=E.then(o)),i&&(E=E.catch(i)),E.catch(()=>{})});if(a&&c==="render"){const S=Pt[e][0];if(S&&t[S]){const k=t[S],E=Re[k]||(Re[k]=new Promise((I,N)=>{A(f),f.addEventListener("load",I),f.addEventListener("error",N)}));Zs(E)}}const P={tag:e,type:e,props:{...h,ref:C},ref:C};return P.p=n,f&&(P.e=f),Vs(P,s)},ea=e=>{const t=Fs(),n=t&&Ee(t);return n!=null&&n.endsWith("svg")?{tag:"title",props:e,type:"title",ref:e.ref}:ht("title",e,void 0,!1,!1)},ta=e=>!e||["src","async"].some(t=>!e[t])?{tag:"script",props:e,type:"script",ref:e.ref}:ht("script",e,1,!1,!0),na=e=>!e||!["href","precedence"].every(t=>t in e)?{tag:"style",props:e,type:"style",ref:e.ref}:(e["data-href"]=e.href,delete e.href,ht("style",e,2,!0,!0)),ra=e=>!e||["onLoad","onError"].some(t=>t in e)||e.rel==="stylesheet"&&(!("precedence"in e)||"disabled"in e)?{tag:"link",props:e,type:"link",ref:e.ref}:ht("link",e,1,fr(e),!0),sa=e=>ht("meta",e,void 0,!1,!1),Cr=Symbol(),aa=e=>{const{action:t,...n}=e;typeof t!="function"&&(n.action=t);const[r,a]=Xe([null,!1]),s=pn(async c=>{const h=c.isTrusted?t:c.detail[Cr];if(typeof h!="function")return;c.preventDefault();const f=new FormData(c.target);a([f,!0]);const d=h(f);d instanceof Promise&&(Ys(d),await d),a([null,!0])},[]),o=mn(e.ref,c=>(c.addEventListener("submit",s),()=>{c.removeEventListener("submit",s)})),[i,l]=r;return r[1]=!1,{tag:Qs,props:{value:{pending:i!==null,data:i,method:i?"post":null,action:i?t:null},children:{tag:"form",props:{...n,ref:o},type:"form",ref:o}},f:l}},xr=(e,{formAction:t,...n})=>{if(typeof t=="function"){const r=pn(a=>{a.preventDefault(),a.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[Cr]:t}}))},[]);n.ref=mn(n.ref,a=>(a.addEventListener("click",r),()=>{a.removeEventListener("click",r)}))}return{tag:e,props:n,type:e,ref:n.ref}},oa=e=>xr("input",e),ia=e=>xr("button",e);Object.assign(tn,{title:ea,script:ta,style:na,link:ra,meta:sa,form:aa,input:oa,button:ia});Ot(null);var $n=new TextEncoder,la=(e,t=console.trace)=>{let n=!1;return new ReadableStream({async start(a){var s;try{e instanceof F&&(e=e.toString());const o=typeof e=="object"?e:{},i=await kt(e,De.BeforeStream,!0,o);n||a.enqueue($n.encode(i));let l=0;const c=[],h=f=>{c.push(f.catch(d=>(console.log(d),t(d),"")).then(async d=>{var m;d=await kt(d,De.BeforeStream,!0,o),(m=d.callbacks)==null||m.map(g=>g({phase:De.Stream,context:o})).filter(Boolean).forEach(h),l++,n||a.enqueue($n.encode(d))}))};for((s=i.callbacks)==null||s.map(f=>f({phase:De.Stream,context:o})).filter(Boolean).forEach(h);l!==c.length;)await Promise.all(c)}catch(o){t(o)}n||a.close()},cancel(){n=!0}})},ca=Ot(null),ua=(e,t,n,r)=>(a,s)=>{r=typeof r=="function"?r(e):r;const o=typeof(r==null?void 0:r.docType)=="string"?r.docType:(r==null?void 0:r.docType)===!1?"":"<!DOCTYPE html>",i=n?nn(c=>n(c,e),{Layout:t,...s},a):a,l=cs`${$(o)}${nn(ca.Provider,{value:e},i)}`;if(r!=null&&r.stream){if(r.stream===!0)e.header("Transfer-Encoding","chunked"),e.header("Content-Type","text/html; charset=UTF-8"),e.header("Content-Encoding","Identity");else for(const[c,h]of Object.entries(r.stream))e.header(c,h);return e.body(la(l))}else return e.html(l)},da=(e,t)=>function(r,a){const s=r.getLayout()??$e;return e&&r.setLayout(o=>e({...o,Layout:s},r)),r.setRenderer(ua(r,s,e,t)),a()};const fa=da(({children:e})=>p("html",{lang:"en",children:[p("head",{children:[p("meta",{charset:"utf-8"}),p("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),p("link",{href:"/favicon.ico",rel:"icon"}),p(jo,{href:"/app/style.css",rel:"stylesheet"}),p(No,{src:"/app/client.ts",async:!0})]}),p("body",{children:e})]})),ha=Object.freeze(Object.defineProperty({__proto__:null,default:fa},Symbol.toStringTag,{value:"Module"})),pa="component-name",ma="component-export",ga="data-serialized-props",va="data-hono-template",de="__importing_islands",sn=Symbol(),an=Symbol(),Ut=Ot({[sn]:!1,[an]:!1}),Er=e=>Array.isArray(e)?e.some(Er):typeof e=="object"&&Ms(e),gn=({componentName:e,componentExport:t,Component:n,props:r})=>{const a={},s={};for(const i in r){const l=r[i];Er(l)?a[i]=l:s[i]=l}const o=Ee(Ut);return o[an]||!o[sn]?p("honox-island",{[pa]:e,[ma]:t||void 0,[ga]:JSON.stringify(s),children:[p(Ut.Provider,{value:{...o,[sn]:!0},children:p(n,{...r})}),Object.entries(a).map(([i,l])=>nn("template",{[va]:i,key:i},p(Ut.Provider,{value:{...o,[an]:!0},children:l})))]}):p(n,{...r})},kr=({title:e,level:t,className:n})=>{const a=`${(s=>{switch(s){case 2:return"text-2xl font-bold text-gray-800";case 3:return"text-xl font-semibold text-blue-900";case 4:return"text-lg font-semibold text-gray-800";default:return"text-3xl font-bold text-gray-900"}})(t)} ${n||""}`;return p("h2",{className:a,dangerouslySetInnerHTML:{__html:e}})},ya=({title:e,level:t,isOpen:n,onClick:r})=>p("button",{type:"button",onClick:r,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${n?"rotate-90":""}`,children:"▶"}),p(kr,{title:e,level:t})]});function Rr(e){return[/github\.com\/[^/]+\/[^/]+/,/qiita\.com\/[^/]+\/items/,/qiita\.com\/tags/,/zenn\.dev\/[^/]+\/articles/,/zenn\.dev\/[^/]+\/books/,/zenn\.dev\/topics/,/dev\.classmethod\.jp\/articles/,/speakerdeck\.com\/[^/]+\/[^/]+/,/x\.com\/[^/]+\/status/,/x\.com\/search/,/docswell\.com\/slide/].some(r=>r.test(e))?!1:[/https?:\/\/dev\.classmethod\.jp\/author\/[a-zA-Z0-9_-]+$/,/https?:\/\/github\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/zenn\.dev\/[a-zA-Z0-9_-]+$/,/https?:\/\/speakerdeck\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/x\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/qiita\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/www\.docswell\.com\/user\/[a-zA-Z0-9_-]+$/].some(r=>r.test(e))}function ba(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n=t.exec(e);for(;n!==null;){const r=n[2];if(Rr(r))return!0;n=t.exec(e)}return!1}function Sa(e,t){if(!ba(e))return e;const n={"dev.classmethod.jp":{name:"DevelopersIO",logo:"amazonaws",color:"orange",usernameRegex:/dev\.classmethod\.jp\/author\/([^/\s)]+)/},"github.com":{name:"GitHub",logo:"github",color:"black",usernameRegex:/github\.com\/([^/\s)]+)/},"zenn.dev":{name:"Zenn",logo:"zenn",color:"blue",usernameRegex:/zenn\.dev\/([^/\s)]+)/},"speakerdeck.com":{name:"Speaker--Deck",logo:"speakerdeck",color:"green",usernameRegex:/speakerdeck\.com\/([^/\s)]+)/},"x.com":{name:"X",logo:"x",color:"black",usernameRegex:/x\.com\/([^/\s)]+)/},"qiita.com":{name:"Qiita",logo:"qiita",color:"brightgreen",usernameRegex:/qiita\.com\/([^/\s)]+)/},"www.docswell.com":{name:"Docswell",logo:"readthedocs",color:"blue",usernameRegex:/www\.docswell\.com\/user\/([^/\s)]+)/}};let r=e;return Object.entries(n).forEach(([a,s])=>{const o=new RegExp(`\\[([^\\]]+)\\]\\(https?://${a.replace(/\./g,"\\.")}[^\\)]*\\)`,"g");r=r.replace(o,i=>{try{const l=i.match(/\[([^\]]+)\]\(([^)]+)\)/);if(!l)return i;const c=l[2];if(!Rr(c))return i;const h=i.match(s.usernameRegex),f=h?h[1]:"";if(f){const d=encodeURIComponent(`${s.name}-@${f}`),m=encodeURIComponent(s.logo),g=encodeURIComponent(s.color),y=`https://img.shields.io/badge/${d}-${g}?style=flat&logo=${m}`;return`<a href="${c}" target="_blank" rel="noopener"><img src="${y}" alt="${s.name}" /></a>`}else{const d=encodeURIComponent(s.name),m=encodeURIComponent(s.logo),g=encodeURIComponent(s.color),y=`https://img.shields.io/badge/${d}-${g}?style=flat&logo=${m}`;return`<a href="${c}" target="_blank" rel="noopener"><img src="${y}" alt="${s.name}" /></a>`}}catch(l){return console.warn("Error converting account link:",l),i}})}),r}const wa="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-200 transition-colors duration-200",zt=/^\d+\.\s/;function Aa(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Wn(e,t){return`<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">${t}</span><span>${Ke(e)}</span></li>`}function Pr(e){return e.replace(/\*\*([^*]+)\*\*/g,'<strong class="font-bold">$1</strong>').replace(new RegExp("(?<!\\*)\\*([^*]+)\\*(?!\\*)","g"),'<em class="italic">$1</em>').replace(/`([^`]+)`/g,`<code class="${wa}">$1</code>`)}function Ke(e){return Pr(e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'))}function Ca(e){var a;const t=e.trim().split(`
`);let n="",r=0;for(;r<t.length;){const s=t[r].trim();if(s==="---"){n+='<hr class="my-6 border-t border-gray-200">',r++;continue}if(s.startsWith("```")){let o="";for(r++;r<t.length;){const l=t[r];if(l.trim()==="```"||l.trim().startsWith("```"))break;o+=`${l}
`,r++}const i=Aa(o.trim());n+=`<div class="my-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"><pre class="p-4 overflow-x-auto bg-gray-50"><code class="text-sm text-gray-800 font-mono leading-6 whitespace-pre-wrap">${i}</code></pre></div>`,r<t.length&&r++;continue}if(s.startsWith("> ")){let o="";for(;r<t.length&&t[r].trim().startsWith("> ");)o+=`${t[r].trim().substring(2)} `,r++;n+=`<blockquote class="my-4 pl-4 border-l-4 border-blue-500 bg-blue-50 py-3 pr-4 rounded-r-lg"><p class="text-gray-700 italic">${Ke(o.trim())}</p></blockquote>`;continue}if(zt.test(s)){let o=1;for(;r<t.length&&zt.test(t[r].trim());){const i=t[r].trim().replace(zt,"");n+=Wn(i,`${o}.`),o++,r++}continue}if(s.startsWith("- ")){const o=s.substring(2);n+=Wn(o,"•"),r++;continue}if(s.includes("|")&&((a=t[r+1])!=null&&a.includes("---"))){const o=s.split("|").map(i=>i.trim()).filter(i=>i);if(t[r+1].includes("---")){for(n+='<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>',o.forEach(i=>{n+=`<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${Ke(i)}</th>`}),n+='</tr></thead><tbody class="divide-y divide-gray-200">',r+=2;r<t.length&&t[r].trim().includes("|");){const i=t[r].trim().split("|").map(l=>l.trim()).filter(l=>l);i.length>0&&(n+='<tr class="hover:bg-gray-50">',i.forEach(l=>{n+=`<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${Ke(l)}</td>`}),n+="</tr>"),r++}n+="</tbody></table></div>";continue}}s?n+=`${Ke(s)}<br>`:n+="<br>",r++}return n}function xa(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:speakerdeck\.com\/player\/|www\.docswell\.com\/slide\/[^/]+\/embed?)[^)]+)\)/g;return e.replace(t,(n,r,a)=>{let s=r,o="";return a.includes("speakerdeck.com")?(s=r.replace(/\s*\\?\s*-\s*Speaker\s*Deck\s*$/i,""),o="speakerdeck-iframe"):a.includes("docswell.com")&&(s=r.replace(/\s*\|\s*ドクセル\s*$/i,""),o="docswell-iframe"),`<iframe class="${o}" frameborder="0" src="${a}" title="${s}" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`})}function Ea(e){const t=/- \[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^)]+)\)/g,n=/\[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^)]+)\)/g,r="width: 100%; height: auto; aspect-ratio: 560 / 315; border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;";let a=e.replace(t,(s,o,i)=>`<iframe style="${r}" src="${i}" title="${o}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);return a=a.replace(n,(s,o,i)=>`<iframe style="${r}" src="${i}" title="${o}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`),a}function ka(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:dev\.classmethod\.jp\/articles\/[^)]+|qiita\.com\/[^/]+\/items\/[^)]+|zenn\.dev\/[^/]+\/articles\/[^)]+))\)/g;return e.replace(t,(n,r,a)=>`<iframe class="hatenablogcard" style="width:100%;height:155px;" title="${r}" src="https://hatenablog-parts.com/embed?url=${encodeURIComponent(a)}" width="300" height="150" frameborder="0" scrolling="no"></iframe>`)}function He(e,t){if(!e.trim())return"";let n=Ea(e);return n=xa(n),n=ka(n),n=Sa(n),n=Ca(n),Pr(n)}function Ra(e){const t=e.split(`
`),n=[];let r=null,a=0;for(const s of t){const o=s.match(/^(#+)\s+(.+)/);if(o){r&&n.push(r);const i=o[1].length;let l=o[2];l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'),r={title:l,content:"",level:i,id:`section-${++a}`}}else r?r.content+=`${s}
`:n.length===0&&(r={title:"",content:`${s}
`,level:0,id:"intro"})}return r&&n.push(r),n}const Pa=function({title:e,content:t,level:n,defaultOpen:r=!1}){const[a,s]=Xe(r);return n!==4?p("div",{className:"mb-6",children:[p(kr,{title:e,level:n,className:"mb-4"}),p("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:He(t)}})]}):p("div",{className:"mb-6 border border-gray-200 rounded-lg",children:[p(ya,{title:e,level:n,isOpen:a,onClick:()=>s(!a)}),a&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:He(t)}})})]})},Da=function(e){return p(gn,{componentName:"/app/islands/CollapsibleSection.tsx",Component:Pa,props:e})},Ia=()=>p("svg",{className:"animate-spin h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[p("title",{children:"Loading"}),p("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),Ta=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:[p("title",{children:"Markdown"}),p("path",{d:"M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"})]}),Oa=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:[p("title",{children:"PDF"}),p("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})]}),Fn=({type:e,isLoading:t,onClick:n})=>{const r=e==="pdf";return p("button",{type:"button",onClick:n,disabled:t,className:`flex items-center justify-center gap-2 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-colors duration-200 w-[280px] ${r?"bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300":"bg-slate-500 hover:bg-slate-600 disabled:bg-slate-300"}`,children:t?p($e,{children:[p(Ia,{}),p("span",{children:"ダウンロード中..."})]}):p($e,{children:[r?p(Oa,{}):p(Ta,{}),p("span",{children:r?"PDFをダウンロード":"Markdownをダウンロード"})]})})},_a=function(){const[e,t]=Xe(null),n=async r=>{t(r);try{const a=r==="markdown"?"README.md":"README.pdf",s=`/resume/${a}`,o=document.createElement("a");o.href=s,o.download=a,document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch(a){console.error("Download failed:",a)}finally{t(null)}};return p("div",{className:"flex flex-col sm:flex-row gap-3 items-center justify-center mb-8",children:[p(Fn,{type:"markdown",isLoading:e==="markdown",onClick:()=>n("markdown")}),p(Fn,{type:"pdf",isLoading:e==="pdf",onClick:()=>n("pdf")})]})},La=function(e){return p(gn,{componentName:"/app/islands/DownloadSection.tsx",Component:_a,props:e})},Na=({allOpen:e,onClick:t})=>p("button",{type:"button",onClick:t,className:`px-3 py-1 text-sm rounded-md transition-colors flex items-center gap-2 ${e?"bg-red-100 hover:bg-red-200 text-red-700":"bg-blue-100 hover:bg-blue-200 text-blue-700"}`,children:[p("span",{className:"text-xs",children:e?"全て閉じる":"全て開く"}),p("span",{className:`transform transition-transform ${e?"rotate-180":""}`,children:"▼"})]}),ja=e=>{const[t,n]=Xe({}),[r,a]=Xe(!1);return jn(()=>{const i={};e.forEach(l=>{i[l.id]=!1}),n(i)},[e]),jn(()=>{const i=Object.values(t).filter(Boolean).length;a(i===e.length&&e.length>0)},[t,e.length]),{toggleStates:t,allOpen:r,handleToggle:i=>{n(l=>({...l,[i]:!l[i]}))},handleBulkToggle:()=>{const i=!r,l={};e.forEach(c=>{l[c.id]=i}),n(l),a(i)}}},Ma=({title:e,hasSubsections:t,allOpen:n,onBulkToggle:r})=>p("div",{className:"flex items-center justify-between mb-4",children:[p("h3",{className:"text-xl font-semibold text-blue-900",dangerouslySetInnerHTML:{__html:e}}),t&&p(Na,{allOpen:n,onClick:r})]}),$a=({subsection:e,isOpen:t,onToggle:n})=>p("div",{className:"mb-4 border border-gray-200 rounded-lg",children:[p("button",{type:"button",onClick:n,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${t?"rotate-90":""}`,children:"▶"}),p("span",{className:"text-lg font-semibold text-gray-800",dangerouslySetInnerHTML:{__html:e.title}})]}),t&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:He(e.content,e.title)}})})]}),Wa=function({section:e,subsections:t}){const{toggleStates:n,allOpen:r,handleToggle:a,handleBulkToggle:s}=ja(t);return p("div",{className:"mb-8",children:[p(Ma,{title:e.title,hasSubsections:t.length>0,allOpen:r,onBulkToggle:s}),e.content.trim()&&p("div",{className:"prose max-w-none mb-6",dangerouslySetInnerHTML:{__html:He(e.content,e.title)}}),t.map(o=>p($a,{subsection:o,isOpen:n[o.id]||!1,onToggle:()=>a(o.id)},o.id))]})},Fa=function(e){return p(gn,{componentName:"/app/islands/SectionGroup.tsx",Component:Wa,props:e})},Ha=`## 基本情報

### プロフィール

|項目|値|
|---|---|
|ハンドルネーム|つくぼし|
|最終学歴|早稲田大学 商学部卒|
|主要職種|クラウドインフラエンジニア|

### アカウント

- [DevelopersIO](https://dev.classmethod.jp/author/tsukuboshi)
- [Zenn](https://zenn.dev/tsukuboshi)
- [Github](https://github.com/tsukuboshi)
- [SpeakerDeck](https://speakerdeck.com/tsukuboshi)
- [X](https://x.com/tsukuboshi0755)

## 業務スキル

### クラウドインフラ設計

\`\`\`txt
クラウドインフラの設計を専門としており、特にAWS のアーキテクチャ設計・構築が一番得意です。  
モノリシック、マイクロサービス、静的ウェブサイトホスティング、CICD パイプライン、マルチアカウント、イベント駆動といった様々なパターンの設計・構築経験があります。  
AWS アーキテクチャを構築するにあたり、CloudFormation、Terraform、CDK といった IaC の開発経験も多数あります。  
\`\`\`

### 生成AIの専門知識

\`\`\`txt
LLMが流行し始めた頃から生成 AI、RAG、及び AI エージェントの分野に特化し、様々な情報を発信してきました。  
生成 AI を活用したチャットボットアプリの自社開発や導入支援に携わった経験があります。
さらに、生成 AI インフラに特化した社内チームのリーダーを務めていたり、生成 AI コンピテンシーの取得に貢献した経験もあります。  
\`\`\`

### サーバレス開発

\`\`\`txt
インフラ側のみならずアプリ側の問題にも幅広く対応できるエンジニアになりたいという思いから、サーバレスのアプリケーション開発経験も積極的に積んできました。  
アーキテクチャとしては、主に Lambda や ECS Fargate、Cloud Run 上でのサーバレスアプリケーションを設計・開発してきています。  
言語としては主に Python 及び TypeScript を使用したバックエンド開発経験があります。    
\`\`\`

### プロジェクトマネジメント

\`\`\`txt
プロジェクトマネージャーを務めることが多く、チームマネジメント及び顧客折衝の経験が豊富です。  
小規模チームで(3 - 5 人程度)でリーダーを務めた事が多数あります。  
プロジェクトを成功に導くため、メンバーのモチベーション向上や業務効率化に繋がるような仕組みづくりを大切にしています。  
\`\`\`

### アウトプット活動

\`\`\`txt
多くの方と技術の面白さを語り合いたい思いから、ブログ執筆や勉強会登壇、個人開発等のアウトプット活動に積極的に取り組んできました。   
DevelopersIO、Zennなどで100本以上の技術記事を執筆すると共に、技術雑誌への寄稿実績もあり、AWSや生成AIを中心に発信しています。
またJAWS-UGを主とした勉強会への登壇も20回以上実施しており、様々な形態での発信を心がけています。  
\`\`\`

## 技術スキル

実業務で使用した技術のみ列挙します。

### AWS

\`IAM\` \`VPC\` \`ELB(ALB・NLB)\` \`EC2\` \`EFS\` \`RDS(MySQL・Aurora)\` \`ElastiCache(Redis)\` \`S3\` \`CloudFront\` \`Route 53\` \`ACM\` \`WAF\` \`ECS(Fargate)\` \`App Runner\` \`ECR\` \`API Gateway\` \`Lambda(Node.js・Python)\` \`DynamoDB\` \`Step Functions\` \`CodeCommit\` \`CodeBuild\` \`CodeDeploy\` \`CodePipeline\` \`SQS\` \`SNS\` \`Data Firehose\` \`EventBridge\` \`CloudWatch (Alarm・Logs)\` \`Security Hub\` \`GuardDuty\` \`Control Tower\` \`Organizations\` \`Identity Center\` \`Service Catalog\` \`DevOps Guru\` \`Bedrock\` \`Kendra\`

### Google Cloud

\`Cloud Run\` \`Alloy DB\`

### IaC

\`Terraform\` \`CloudFormation\` \`SAM\` \`CDK\`

### OS

\`Linux\` \`Windows\`

### Programming Language / Framework

\`Python\` \`TypeScript\` \`Node.js\` \`Fastify\` \`Prisma\`

### SaaS

\`GitHub\` \`GitHub Actions\`

## 保有称号

### 表彰

|表彰名|対象年度|
|---|---|
|Japan AWS Top Engineer|2024/2025|
|AWS Community Builder|2024/2025|

### 資格

|資格名|取得日|
|---|---|
|AWS DOP|2023/6/15|
|AWS SAP|2022/8/3|
|LPIC-2|2021/6/28|
|ORACLE MASTER Silver Oracle Database 12c|2021/3/29|
|基本情報 技術者試験|2019/11/20|

## 経歴

### 株式会社ゼスト(業務委託：2025/3 -2025/6、正社員：2025/7 - 2025/8)

#### 業務要約

**役割**：バックエンドエンジニア

**プロジェクト一覧**

- 介護事業者向けZEST SCHEDULE開発
- 関係者向けZEST SCHEDULE ADMIN開発

**業務内容**

1. フロントエンドのNext.jsと技術スタックを統一し開発チーム全体の開発チーム全体の保守性向上のためTypeScript/Fastify/Prismaを用いて介護事業者向けスケジューリングシステムのRESTful APIを設計・開発し、どのエンジニアでも比較的運用しやすいバックエンド基盤を構築
2. 社内のインフラ運用担当者が少なかったため、Cloud Runを活用したコンテナデプロイやAlloy DBでのSQLオペレーションも兼任し、フルスタックな開発運用体制に貢献

**使用技術**

- 言語・フレームワーク：\`TypeScript\` \`Node.js\` \`Fastify\` \`Prisma\`
- Google Cloudサービス：\`Cloud Run\` \`Alloy DB\`
- SaaS：\`GitHub\` \`GitHub Actions\`

### クラスメソッド株式会社(正社員：2022/3 - 2025/6)

参画したプロジェクトが多いため、以下で主要なもののみ個別で記載します。

#### SaaSログ連携・保管コンテナシステム設計構築 (2024/9 - 2025/6)

**概要**：SaaS から出力されるログを定期的に AWS にアップロードし、監査で使用するためのログ形式に加工するコンテナインフラ/アプリを設計・構築・開発

**役割**：プロジェクトマネージャー(3名チーム)/バックエンドエンジニア

**業務内容**

1. 3名チームのリーダーとして技術選定から実装までの全工程を主導し、メンバーの技術レベルに応じたタスク配分と週次定例による進捗管理を実施
2. タイムアウト制限を回避しつつ運用負荷を最小限にするためECS Fargateをインフラ/アプリの両面で設計・構築し、SaaSログの定期取得と加工処理を自動化
3. マルチテナント環境での設定差分管理のためCloudFormation/SAMでIaC化し、パラメータファイルによる環境別デプロイを実現
4. ログ欠損による業務影響を防ぐためStep Functionsの自動リトライ機構とCloudWatch Alarmsによる監視を設計・構築し、障害時の自動復旧を確立

**使用技術**

- AWS サービス：\`VPC\` \`ECR\` \`ECS(Fargate)\` \`Lambda(Python)\` \`SQS\` \`SNS\` \`S3\` \`CloudWatch (Alarm・Logs)\` \`EventBridge\` \`Step Functions\`
- IaC： \`CloudFormation\` \`SAM\`
- SaaS： \`GitHub\`

#### AI-Starter内製開発(2024/1 - 2025/6)

**概要**：生成AIを活用した自社SaaSチャットボットアプリ基盤を設計・開発

**役割**：生成AIエンジニア/インフラエンジニア

**参考URL**：[生成AI環境構築サービス「AI\\-Starter」 \\| サービス \\| クラスメソッド株式会社](https://classmethod.jp/services/generative-ai/ai-starter/)

**業務内容**

1. React.jsアプリと技術スタックを統一し保守性を向上させるためCDK（TypeScript）でIaCを刷新
2. 運用負荷削減のためApp Runner/DynamoDB/Bedrock/Kendra/S3/Secrets Managerを用いたサーバレスアーキテクチャを設計・構築
3. 要件に応じた構成パターンの提供を実現するためCDKのコンストラクト分割を実装すると共に、デプロイ作業を効率化するためCDKメタデータ削除及びパラメータ最適化がされたCloudFormationを生成する標準化されたデプロイ手法を確立
4. 障害発生時の迅速な対応のためCloudWatch Alarmにて5xxエラー時及びメトリクスフィルターを用いたエラーログ出力時のアラートを定義し、SNS/ChatbotでSlackに通知される仕組みを実装


**使用技術**

- AWS サービス：\`WAF\` \`App Runner\` \`DynamoDB\` \`Secrets Manager\` \`Lambda(Node.js)\` \`Bedrock\` \`Kendra\` \`S3\`
- IaC： \`CDK(Typescript)\`

#### AIチャットボット設計構築 (2024/9 - 2025/3)

**概要**：生成 AI を活用したOSSである[GenU](https://github.com/aws-samples/generative-ai-use-cases)を用いたチャットボットを構築  

**役割**：プロジェクトマネージャー(3名チーム)/生成AIエンジニア

**業務内容**

1. 3名体制のチームを統括し、顧客要件定義から技術選定、リソース配分、進捗管理まで一貫してマネジメント
2. お客様の業務内容に適した生成AIユースケース選定のためGenUを提案し、セキュリティ要件を満たすためBedrock Knowledge BaseのRAGシステムをCDKで実装
3. 社内文書に含まれる図表も検索対象にする必要からAdvanced Parsing機能を有効化し、テキストだけでなく視覚的情報も含めた高精度な回答生成を実現
4. 知識レベルの異なる関係者への説明のため生成AI基礎からKendraとの技術比較、検索精度評価のRAGASやBedrock Guardrailの活用方法まで幅広く技術QAに対応

**使用技術**

- AWS サービス：\`WAF\` \`DynamoDB\` \`Secrets Manager\` \`Lambda(Node.js)\` \`Bedrock\` \`Kendra\` \`S3\`
- IaC： \`CDK(Typescript)\`

#### 社内生成AIインフラチーム活動(2024/1 - 2025/6)

**概要**：生成 AI 関連の案件に対応する体制作りのため、生成 AI に特化したインフラを専門に部署を跨いだ交流を促進する活動を主導

**役割**：チームリーダー(5名チーム)/生成AIエンジニア

**参考URL**：[40社の支援実績によりAWSの「生成AIコンピテンシー」を取得 \\| クラスメソッド株式会社](https://classmethod.jp/news/250619-generative-ai-competency/)

**業務内容**

1. 5名チームのリーダーとして生成AIインフラチームを立ち上げ、メンバーの自主性を重視した運営方針で各自の得意分野での専門性向上を促進
2. 部門間の連携不足解消のため定期交流会を主導し、成功事例の共有とナレッジベース構築により効率的な業務フローを整備
3. 部門内の生成AI知識格差を解消するために定期的なブログ作成/勉強会を企画するとともに、生成AIに関する各種QA対応を積極的に実施
4. AWSコンピテンシー取得要件を満たすため生成AI案件のドキュメント整備と監査対応準備を部門横断で実施し、コンピテンシー取得に貢献

#### RAG システム設計構築 (2023/11 - 2024/3)

**概要**：生成 AI を活用したチャットボットアプリで使用する、社内ドキュメントを検索するための RAG システムを設計・構築

**役割**：生成AIエンジニア/インフラエンジニア

**業務内容**

1. 運用負荷を最小化するため当時まだ実績の少なかったBedrock/Kendra/S3のフルマネージドサービスを組み合わせたサーバレスRAGアーキテクチャを設計・構築
2. インフラ担当者不足に対応するためApp Runnerのオートスケーリングを活用し、NWやOSの運用が不要なAIチャットボット基盤を確立

**使用技術**

- AWS サービス：\`WAF\` \`App Runner\` \`Bedrock\` \`Kendra\` \`S3\`
- IaC： \`CloudFormation\`

#### AWSマルチアカウント管理支援通知集約システム内製開発(2023/8 - 2024/2)

**概要**：複数の AWS アカウントに対する通知設定を一括で付与できる、通知集約システムを構築

**役割**：インフラエンジニア

**参考URL**：[AWSマルチアカウント管理支援 \\| クラスメソッド株式会社](https://classmethod.jp/aws/services/multi-account/)

**業務内容**

1. 複数アカウントのセキュリティアラート見逃しを防ぐためSecurity Hub/GuardDutyの通知をEventBridge経由で集約し、Step Functionsで一元管理する構成を実装
2. アカウント追加の度に手動設定する運用負荷を削減するためCDK(TypeScript)でマルチアカウント対応のIaC実装を行い、パラメータ化による効率的なデプロイを実現

**使用技術**

- AWS サービス：\`Security Hub\` \`GuardDuty\` \`Step Functions\` \`EventBridge\`
- IaC： \`CDK(Typescript)\`

#### SaaSログ連携・保管サーバレスシステム設計構築(2023/5 - 2024/6)

**概要**：SaaS から出力されるログを定期的に AWS にアップロードし、監査で使用するためのログ形式に加工するサーバレスインフラ/アプリ及びCICDシステムを設計・構築・開発

**役割**：プロジェクトマネージャー(3名チーム)/バックエンドエンジニア

**業務内容**

1. 3名チームのリーダーとして要件定義から運用移管まで一貫して管理し、週次定例とドキュメント整備による品質管理を実施
2. サーバレス構成で運用負荷を最小化するためLambdaをインフラ/アプリの両面で設計・構築し、SaaSログの定期取得と加工処理を自動化
3. 長期的な保守性確保のためPycodeStyle準拠のコーディング規約を策定し、pytestによる品質担保とloggingモジュールによる障害時の原因特定を容易化
4. 複数メンバーでの並行開発を効率化するためGitHub Pull requests/Wiki/Actionsで開発プロセスを標準化し、自動テスト/デプロイでリリース品質を向上

**使用技術**

- AWS サービス：\`EventBridge\` \`Lambda(Python)\` \`SQS\` \`SNS\` \`S3\` \`CloudWatch (Alarm・Logs)\` \`DevOps Guru\`
- IaC： \`CloudFormation\` \`SAM\`
- SaaS： \`GitHub\` \`GitHub Actions\`

#### 認証システム用コンテナ基盤技術支援(2022/11 - 2023/6)

**概要**：顧客情報利用のための認証システムにおけるアプリケーションのコンテナ化に伴うインフラ基盤を設計・構築  

**役割**：プロジェクトマネージャー(5名チーム)/インフラエンジニア

**業務内容**

1. 5名チームのリーダーとして顧客との週次定例を主導し、技術的課題の早期発見と解決策の提案により計画通りのプロジェクト完遂を達成
2. アクセス数に応じたスケーリングの要求に対しECS Fargateを設計・構築し、PHPログの用途別振り分けのためFireLensによるログルーティングを実装
3. CI/CD未経験の顧客のためCodePipelineのローリングアップデートとブルー・グリーンの比較検証を実施し、シンプルな構成を重視してローリングアップデートを設計・構築
4. 社内ネットワーク限定アクセスとTLS暗号化要件を満たすため、API Gateway/NLB/ECSのプライベート統合にCloudFront/WAFを組み合わせたセキュアな認証基盤を実現

**使用技術**

- AWS サービス： \`VPC\` \`ELB(ALB・NLB)\` \`ECS\` \`EFS\` \`RDS(Aurora)\` \`ElastiCache(Redis)\` \`S3\` \`CloudFront\` \`WAF\` \`ECS(Fargate)\` \`ECR\` \`API Gateway\` \`CodeCommit\` \`CodeBuild\` \`CodeDeploy\` \`CodePipeline\` \`EventBridge\`
- IaC： \`CloudFormation\`

#### 基幹システム用マルチアカウント基盤技術支援 (2022/7 - 2024/3)

**概要**：部門・プロジェクト単位での権限/環境の分離やガバナンス統一に必要な、社内システム用のマルチアカウント管理基盤の設計・構築に伴う技術支援を実施。

**役割**：プロジェクトマネージャー(3名チーム)/インフラエンジニア

**業務内容**

1. 3名チームのリーダーとして顧客要件のヒアリングと技術課題の整理を実施し、定期的な進捗報告と課題解決策の提案により円滑なプロジェクト推進を実現
2. 部門・プロジェクト単位での権限分離要求に対しControl Tower/Organizationsの設計支援を実施し、セキュリティとガバナンスを統一した管理基盤を実現
3. 各部門が安全にリソース作成できる仕組みのためService Catalogでの標準テンプレート作成を支援し、承認済みリソースのみ展開可能な環境を確立
4. 複数アカウントのログ分析効率化のためWAF/Data Firehose/CloudWatch Logsによる集約基盤の設計支援を行い、インシデント調査時間の短縮を実現

**使用技術**

- AWS サービス： \`Control Tower\` \`Organizations\` \`Identity Center\` \`Service Catalog\` \`WAF\` \`Data Firehose\` \`CloudWatch (Logs)\`
- IaC： \`CloudFormation\`
- SaaS： \`GitHub\`

#### ECサイト用AWS環境構築(2022/6 - 2022/7)

**概要**：新規 EC サイトにおけるランディングページに必要な静的ウェブサイトホスティング基盤を設計・構築

**役割**：インフラエンジニア

**業務内容**

1. 3週間の短納期要求に対しインフラ構築を高速化するためTerraformでIaC化し、CloudFront/S3による高可用性の静的ホスティング基盤を設計・構築
2. 公開前のランディングページ保護のためCloudFront Functions(Node.js)によるBasic認証を開発し、開発段階での不正アクセスを防止
3. 企業ブランディング確立のためRoute 53/ACMでカスタムドメインとHTTPS配信を設定し、信頼性の高いWebサイト環境を実現

**使用技術**

- AWS サービス：\`IAM\` \`CloudFront\` \`S3\` \`Lambda(Node.js)\` \`Route 53\` \`ACM\`
- IaC： \`Terraform\`

#### CMSインフラ用AWS環境構築(2022/5 - 2022/8)

**概要**：動画サイト構築 CMS 新規導入のためのウェブサイト基盤を設計・構築

**役割**：インフラエンジニア

**業務内容**

1. 2週間の短納期と環境別構成要求に対応するためTerraformでIaC化し、ALB/EC2/RDS/ElastiCacheのCMS基盤を迅速に設計・構築
2. 検証・本番環境の差異による不具合を防ぐためTerraform Moduleで共通部分を抽出し、パラメータのみの変更で環境差分を吸収
3. 夜間のトラフィック減少に着目しLambda/EventBridgeでRDSインスタンスタイプの定期切り替えを自動化し、ランニングコストを削減

**使用技術**

- AWS サービス：\`IAM\` \`VPC\` \`ELB(ALB)\` \`EC2\` \`RDS(MySQL)\` \`ElastiCache(Redis)\` \`S3\` \`Route 53\` \`ACM\` \`Lambda(Python)\`
- IaC： \`Terraform\`

### 兼松エレクトロニクス株式会社(正社員：2019/4 - 2022/2)

#### 業務要約

**役割**：インフラエンジニア  

**プロジェクト一覧**

- 基幹システム用vSphere基盤更改(2021/10 - 2022/2): Oracle19c DBサーバの設計・構築
- 情報システム用vSphere基盤更改(2021/10 - 2021/12): RHEL8・Apache2.4環境の構築
- 基幹システム用z/VM基盤更改(2021/6 - 2021/12): SLES12 SP5へのバージョンアップ
- 基幹システム用VIOS基盤更改(2021/1 - 2021/7): WAS9.0.5 APサーバの設計・構築
- 社内コンテナ検証チーム活動(2020/6 - 2022/1): Kubernetes・OpenShift検証環境構築

**業務内容**

1. 基幹システムの老朽化対応のためVMware vSphere/zVM/VIOS上での更改を担当し、Oracle19c/RHEL8/SLES12/WAS9.0.5の設計・構築により安定稼働を継続
2. 社内のコンテナ技術導入推進のためDocker/Kubernetes/OpenShiftの検証チームに参加し、従来の仮想化環境からの移行検討と技術標準の策定に貢献

**使用技術**: Linux(RHEL/SLES), VMware vSphere, Oracle, WebSphere, Apache, Docker, Kubernetes, OpenShift

## 業務外活動

### 個人開発

以下では開発した自作リポジトリの内、主要なものを記載します。

|リポジトリ名|言語・フレームワーク|概要|
|---|---|---|
|[dotfiles](https://github.com/tsukuboshi/dotfiles)|\`Bash\`|自身の PC セットアップ用の dotfiles|
|[honox-resume-template](https://github.com/tsukuboshi/honox-resume-template)|\`TypeScript\` \`HonoX\` \`Vite\`|Markdown職務経歴書をWebサイトとPDFに変換し自動デプロイするテンプレート|
|[sam-notify-aws-billing](https://github.com/tsukuboshi/sam-notify-aws-billing)|\`SAM\` \`Python\`|AWS 利用料金を通知するサーバレスシステムコード|
|[sam-ai-cloud-engineer](https://github.com/tsukuboshi/sam-ai-cloud-engineer)|\`SAM\` \`Python\`|Amazon Bedrock を活用し構成図を CloudFormation テンプレートとパラメータシートに変換するサーバレスシステムコード|
|[nextjs-mastra-mcp-with-aws](https://github.com/tsukuboshi/nextjs-mastra-mcp-with-aws)|\`CDK\` \`TypeScript\`|AWS とMastraで実装したMCP Serverを呼び出すAIエージェント|
|[gas-count-schedule-time](https://github.com/tsukuboshi/gas-count-schedule-time)|\`Apps Script\` \`TypeScript\`|Googleカレンダーの予定から色ごとに工数をカウントし集計するアプリコード|
|[sam-bedrock-kb-aurora-rag](https://github.com/tsukuboshi/sam-bedrock-kb-aurora-rag)|\`SAM\` \`Python\`|Amazon Aurora と Amazon Bedrock Knowledge Bases を用いた RAG システムデプロイするためのコード|
|[terraform-microservices-template](https://github.com/tsukuboshi/terraform-microservices-template)|\`Terraform\`|AWS を用いたマイクロサービス構成用 Terraform テンプレート|

### ブログ投稿

#### DevelopersIO

2022/3から2025/6までに、100本以上の記事を作成していました。代表的な記事は以下の通りです。

- [AWS入門ブログリレー2024〜Amazon Bedrock編〜](https://dev.classmethod.jp/articles/introduction-2024-aws-bedrock/)
- [CloudFormation一撃で作るAWS料金通知ツール(Email/Slack/LINE対応)](https://dev.classmethod.jp/articles/notify-aws-billing-for-cloudformaiton/)
- [Knowledge Bases for Amazon Bedrock (with OpenSearch Serverless)をSAMで実装してみた](https://dev.classmethod.jp/articles/sam-knowledge-base-for-bedrock-with-oss/)
- [Kendraのアクセスコントロール設定をEntra IDのOpen ID Connectを用いて有効化してみた](https://dev.classmethod.jp/articles/kendra-sharepoint-entraid-oidc/)
- [ECSとCodePipelineのブルー/グリーンデプロイ構成をCDKで実装してみた](https://dev.classmethod.jp/articles/cdk-ecr-ecs-bluegreen-deployment/)
- [FireLens(Fluent Bit)におけるログルーティングの仕組みについて調査してみた](https://dev.classmethod.jp/articles/ecs_firelens_tag/)
- [ECS Service ConnectをTerraformでデプロイしてみた](https://dev.classmethod.jp/articles/ecs-service-connect-terraform/)
- [CloudFormationでAWS WAFのカウントモードとブロックモードを切り替えてみた](https://dev.classmethod.jp/articles/cfn-create-waf-count-block-switch/)
- [NLB/GWLB/CLBの作成を禁止するIAMポリシーを作ってみた](https://dev.classmethod.jp/articles/deny-nlb-glb-clb-iam-policy/)
- [TerraformでCloudFront Functionsを環境ごとに有効化/無効化してみた](https://dev.classmethod.jp/articles/cloudfront-functions-per-env-terraform/)

#### Zenn

2023/5から現在まで投稿している主要のブログサイトになります。代表的な記事は以下の通りです。

- [Macの環境をdotfilesでセットアップしてみた改](https://zenn.dev/tsukuboshi/articles/6e82aef942d9af)
- [Google Calenderの予定をTypeScriptを用いて色別で工数集計してみた](https://zenn.dev/tsukuboshi/articles/31c95d863d8896)
- [MCP Serverを呼び出すAIエージェントをMastra、Next.js、AWS CDKで実装してみた](https://zenn.dev/tsukuboshi/articles/nextjs-mastra-mcp-with-aws)
- [Markdownで書いた職務経歴書を良い感じのWebサイトとPDFに自動変換するツールを作ってみた](https://zenn.dev/tsukuboshi/articles/honox-resume)
- [Claude Codeとghコマンドで作るカスタムスラッシュコマンドn選](https://zenn.dev/tsukuboshi/articles/claude-code-custom-slash-commands)

### イベント登壇

#### [Mita.ts #5](https://mitats.connpass.com/event/340678/)：Mastraに入門してみた 〜AWS CDKを添えて〜

- [Mastraに入門してみた 〜AWS CDKを添えて〜 - Speaker Deck](https://speakerdeck.com/player/c5f37701df3a4d46a3f4ea1e55d2223a)

#### [Classmethod AI Talks(CATs) #14](https://cats.doorkeeper.jp/events/180830)：AWSエンジニアに捧ぐLangChainの歩き方

- [AWSエンジニアに捧ぐLangChainの歩き方 - Speaker Deck](https://speakerdeck.com/player/8c6afd2c50c34c189d72892eebf4c2ae)
- [AWSエンジニアに捧ぐLangChainの歩き方 - YouTube](https://www.youtube.com/embed/AJKS7i67Sxg?si=sFiaMmE_17lAaWO8)

#### [Toranomon Tech Hub #2](https://toranomon-tech-hub.connpass.com/event/337629/)：世界の中心でApp Runnerを叫ぶ  〜Aurora DSQLを添えて〜

- [世界の中心でApp Runnerを叫ぶ  〜Aurora DSQLを添えて〜 - Speaker Deck](https://speakerdeck.com/player/46b7da3d0de64407bdaf9f1226040a21)

#### [JAWS FESTA 2024 in 広島](https://jawsfesta2024.jaws-ug.jp/)：Amplify Gen 2ではじめる 生成AIアプリ開発入門

- [Amplify Gen 2ではじめる 生成AIアプリ開発入門 - Speaker Deck](https://speakerdeck.com/player/98e6569af2b24e4ebff41b46dc4d253a)

#### [Classmethod Odyssey](https://classmethod.connpass.com/event/322685/)：AWSで構築するパターン別RAG構成解説

- [AWSで構築するパターン別RAG構成解説 - Speaker Deck](https://speakerdeck.com/player/2707682b444841d19d18771759abc78e)
- [AWSで実現するRAG構成！Retrieverの種類と最適なインフラパターン解説 - YouTube](https://www.youtube.com/embed/QPhGs0iwBR8?si=_DFt38cwSZKl0bvf)

#### [Bedrock Claude Night 2](https://jawsug-ai.connpass.com/event/319748/)：AWS構成図からCloudFormationとパラメータシートを自動生成するシステムを作ってみた

- [AWS構成図からCloudFormationとパラメータシートを自動生成するシステムを作ってみた - Speaker Deck](https://speakerdeck.com/player/1464a901f9fb4e2e89fda1fa85ab6471)

#### [JAWS-UG東京 ランチタイムLT会 #11](https://jawsug.connpass.com/event/316451/)：5分で分かる(かもしれない)Vector engine for OpenSearch Serverless

- [5分で分かる(かもしれない)Vector engine for OpenSearch Serverless - Speaker Deck](https://speakerdeck.com/player/aaa0830e33354ea6a63b8322be7e08bf)

#### [JAWS-UG朝会 #55](https://jawsug-asa.connpass.com/event/301827/)：君はApplication Composerというサービスを知っているか

- [君はApplication Composerというサービスを知っているか - Speaker Deck](https://speakerdeck.com/player/209b17ab0ec7448da834f4df887d0652)

#### [JAWS-UG CDK支部 #12](https://jawsug-cdk.connpass.com/event/307989/)：CDKをCloudFormationテンプレートとして利用する際の注意点n選

- [CDKをCloudFormationテンプレートとして利用する際の注意点n選 - Speaker Deck](https://speakerdeck.com/player/eb548fa38dd745969c32ccc138cced66)

#### [JAWS-UG朝会 #51](https://jawsug-asa.connpass.com/event/291917/)：インフラエンジニアのためのLambda実践入門

- [インフラエンジニアのためのLambda実践入門 - Speaker Deck](https://speakerdeck.com/player/f541cbd494e941558827ec87039ebfe4)

#### [DevelopersIO 2023](https://event.classmethod.jp/developers-io/2023)：AWSとGitHubを用いたパターン別CI/CD構成解説

- [AWSとGitHubを用いたパターン別CI/CD構成解説 - Speaker Deck](https://speakerdeck.com/player/13ed26fb607a41d598f64b0b899dd0da)
- [AWS基盤でのCI/CD構成を徹底解説！CodeシリーズとGitHubの使い分けも解消 - YouTube](https://www.youtube.com/embed/nJ-eEgfbjG8?si=CiEVatkJa5fNdYqC)

#### [JAWS-UG朝会 #39](https://jawsug-asa.connpass.com/event/255874/)：(今更ながら)AWSのコンテナサービスについてざっくりまとめてみる

- [(今更ながら)AWSのコンテナサービスについてざっくりまとめてみる - Speaker Deck](https://speakerdeck.com/player/bac50c7f2ab44ab5a94c80f82883334b)

#### [JAWS-UG CLI専門支部 #273R](https://jawsug-cli.connpass.com/event/253108/)：LambdaとLine Messaging APIで湯婆婆botを作ってみた

- [LambdaとLine Messaging APIで湯婆婆botを作ってみた - Speaker Deck](https://speakerdeck.com/player/9c9d25fecd894b9b845063e50662b5ea)

#### [DevelopersIO 2022](https://dev.classmethod.jp/news/devio-2022/)：AWS初心者に捧ぐコスト可視化のススメ

- [AWS初心者に捧ぐコスト可視化のススメ - Speaker Deck](https://speakerdeck.com/player/6864a287e4074215b7f179716df7a0b4)
- [AWS初心者に捧ぐコスト可視化のススメ - YouTube](https://www.youtube.com/embed/KWBxZIyDUJY?si=LkuNB641YEB0DF5M)

#### [AKIBA.AWS ONLINE #08](https://dev.classmethod.jp/news/akiba-aws-220523/)：それ、t2.micro選んで大丈夫？

- [それ、t2.micro選んで大丈夫？ - Speaker Deck](https://speakerdeck.com/player/d12345c2b1f94f7fb6626de0d7b81211)

#### [JAWS-UG CLI専門支部 #256M](https://jawsug-cli.connpass.com/event/243629/)：CLI専門支部に参加したらAWSエンジニアに転職できた件について

- [CLI専門支部に参加したらAWSエンジニアに転職できた件について - Speaker Deck](https://speakerdeck.com/player/19623bacacf44d4d8567255085941c1b)

### 特筆事項

#### Software Design 2024年11月号寄稿

**概要**：「第1特集 新世代の開発スタイル はじめてのAI駆動開発」内の「第4章：Infrastructure as Codeで生成AIを活用するアーキテクチャ図⇔IaCコードの変換も自由自在」を寄稿

**参考URL**：[Software Design 2024年11月号 \\| 技術評論社](https://gihyo.jp/magazine/SD/archive/2024/202411)

#### JAWS-UG 茨城運営

**概要**：JAWS-UG茨城の初期メンバーとして2024/11からの立ち上げに貢献し、運営メンバーとして活動中

**参考URL**：[JAWS\\-UG 茨城 \\- connpass](https://jawsug-ibaraki.connpass.com/)
`;function Ba(){const e=Ra(Ha),n=(r=>{const a=[];let s=null,o=[];return r.forEach(i=>{!i.title&&i.level===0?a.push({type:"intro",section:i}):i.level===1||i.level===2?(s&&(a.push({type:"h3-group",section:s,subsections:o}),s=null,o=[]),a.push({type:"regular",section:i})):i.level===3?(s&&a.push({type:"h3-group",section:s,subsections:o}),s=i,o=[]):i.level===4&&s?o.push(i):(s&&(a.push({type:"h3-group",section:s,subsections:o}),s=null,o=[]),a.push({type:"regular",section:i}))}),s&&a.push({type:"h3-group",section:s,subsections:o}),a})(e);return p("div",{className:"min-h-screen bg-gray-50",children:p("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[p("header",{className:"text-center mb-12",children:[p("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"職務経歴書"}),p(La,{})]}),p("main",{className:"bg-white rounded-lg shadow-lg p-8",children:n.map((r,a)=>{if(r.type==="intro")return p("div",{className:"mb-8",dangerouslySetInnerHTML:{__html:`<p class="mb-4">${He(r.section.content)}</p>`}},r.section.id);if(r.type==="h3-group")return p(Fa,{section:r.section,subsections:r.subsections||[]},r.section.id);{const s=He(r.section.content);return p(Da,{title:r.section.title,content:s,level:r.section.level,defaultOpen:r.section.level<=2},r.section.id)}})}),p("footer",{className:"text-center mt-12 text-gray-500",children:[p("p",{children:"Built with HonoX on GitHub Pages"}),p("p",{className:"mt-2",children:["Generated by:"," ",p("a",{href:"https://zenn.dev/tsukuboshi/articles/honox-resume",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 underline",children:"Markdownで書いた職務経歴書を良い感じのWebサイトとPDFに自動変換するツールを作ってみた"})]})]})]})})}const Ga=!0,Ua=Object.freeze(Object.defineProperty({__proto__:null,__importing_islands:Ga,default:Ba},Symbol.toStringTag,{value:"Module"}));var Hn=(e,t,n)=>(r,a)=>{let s=-1;return o(0);async function o(i){if(i<=s)throw new Error("next() called multiple times");s=i;let l,c=!1,h;if(e[i]?(h=e[i][0][0],r.req.routeIndex=i):h=i===e.length&&a||void 0,h)try{l=await h(r,()=>o(i+1))}catch(f){if(f instanceof Error&&t)r.error=f,l=await t(f,r),c=!0;else throw f}else r.finalized===!1&&n&&(l=await n(r));return l&&(r.finalized===!1||c)&&(r.res=l),r}},za=Symbol(),Ka=(e,t)=>new Response(e,{headers:{"Content-Type":t.replace(/^[^;]+/,r=>r.toLowerCase())}}).formData(),Bn=32,Va=1e4,St=e=>"headers"in e,qa=async(e,t=Object.create(null))=>{const{all:n=!1,dot:r=!1}=t,s=(St(e)?e.headers:e.raw.headers).get("Content-Type"),o=s==null?void 0:s.split(";")[0].trim().toLowerCase();return o==="multipart/form-data"||o==="application/x-www-form-urlencoded"?Ja(e,{all:n,dot:r}):{}};async function Ja(e,t){if(!St(e)&&e.bodyCache.formData)return Gn(await e.bodyCache.formData,t);const n=St(e)?e.headers:e.raw.headers,r=await e.arrayBuffer(),a=Ka(r,n.get("Content-Type")||"");St(e)||(e.bodyCache.formData=a);const s=await a;return s?Gn(s,t):{}}function Gn(e,t){const n=Object.create(null),r={count:0};return e.forEach((a,s)=>{t.all||s.endsWith("[]")?Za(n,s,a):n[s]=a}),t.dot&&Object.entries(n).forEach(([a,s])=>{a.includes(".")&&(Xa(n,a,s,r),delete n[a])}),n}var Za=(e,t,n)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]:t.endsWith("[]")?e[t]=[n]:e[t]=n},Xa=(e,t,n,r)=>{if(/(?:^|\.)__proto__\./.test(t))return;let a=e;const s=t.split(".",Bn+2);s.length>Bn+1&&Un(),s.forEach((o,i)=>{i===s.length-1?a[o]=n:((!a[o]||typeof a[o]!="object"||Array.isArray(a[o])||a[o]instanceof File)&&(r.count++>=Va&&Un(),a[o]=Object.create(null)),a=a[o])})},Un=()=>{throw new Error("Nesting limit exceeded")},Dr=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Qa=e=>{const{groups:t,path:n}=Ya(e),r=Dr(n);return eo(r,t)},Ya=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(n,r)=>{const a=`@${r}`;return t.push([a,n]),a}),{groups:t,path:e}},eo=(e,t)=>{for(let n=t.length-1;n>=0;n--){const[r]=t[n];for(let a=e.length-1;a>=0;a--)if(e[a].includes(r)){e[a]=e[a].replace(r,t[n][1]);break}}return e},mt={},to=(e,t)=>{if(e==="*")return"*";const n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){const r=`${e}#${t}`;return mt[r]||(n[2]?mt[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,n[1],new RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],new RegExp(`^${n[2]}$`)]:mt[r]=[e,n[1],!0]),mt[r]}return null},Ir=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,n=>{try{return t(n)}catch{return n}})}},no=e=>Ir(e,decodeURI),Tr=e=>{const t=e.url,n=t.indexOf("/",t.indexOf(":")+4);let r=n;for(;r<t.length;r++){const a=t.charCodeAt(r);if(a===37){const s=t.indexOf("?",r),o=t.indexOf("#",r),i=s===-1?o===-1?void 0:o:o===-1?s:Math.min(s,o),l=t.slice(n,i);return no(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(a===63||a===35)break}return t.slice(n,r)},ro=e=>{const t=Tr(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},me=(e,t,...n)=>(n.length&&(t=me(t,...n)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Or=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),n=[];let r="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))r+="/"+a;else if(/\:/.test(a))if(a.charCodeAt(a.length-1)===63){n.length===0&&r===""?n.push("/"):n.push(r);const s=a.slice(0,-1);r+="/"+s,n.push(r)}else r+="/"+a}),n.filter((a,s,o)=>o.indexOf(a)===s)},on=e=>e.indexOf("%")!==-1?Ir(e,oo):e,Kt=e=>(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),on(e)),_r=(e,t,n)=>{const r=e.indexOf("#",8);r!==-1&&(e=e.slice(0,r));let a;if(!n&&t&&t.indexOf("%")===-1&&t.indexOf("+")===-1){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const l=e.charCodeAt(i+t.length+1);if(l===61){const c=i+t.length+2,h=e.indexOf("&",c);return Kt(e.slice(c,h===-1?void 0:h))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(a=/[%+]/.test(e),!a)return}const s=Object.create(null);a??(a=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const i=e.indexOf("&",o+1);let l=e.indexOf("=",o);l>i&&i!==-1&&(l=-1);let c=e.slice(o+1,l===-1?i===-1?void 0:i:l);if(a&&(c=Kt(c)),o=i,c==="")continue;let h;l===-1?h="":(h=e.slice(l+1,i===-1?void 0:i),a&&(h=Kt(h))),n?(s[c]&&Array.isArray(s[c])||(s[c]=[]),s[c].push(h)):s[c]??(s[c]=h)}return t?s[t]:s},so=_r,ao=(e,t)=>_r(e,t,!0),oo=decodeURIComponent,Ye,H,ee,Lr,Nr,ln,Z,Zn,io=(Zn=class{constructor(e,t="/",n=[[]]){x(this,ee);b(this,"raw");x(this,Ye);x(this,H);b(this,"routeIndex",0);b(this,"path");b(this,"bodyCache",{});x(this,Z,e=>{const{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;for(const a in t)return t[a].then(s=>(a==="json"&&(s=JSON.stringify(s)),new Response(s)[e]()));return t[e]=n[e]()});this.raw=e,this.path=t,w(this,H,n)}param(e){return e?R(this,ee,Lr).call(this,e):R(this,ee,Nr).call(this)}query(e){return so(this.url,e)}queries(e){return ao(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t=Object.create(null);return this.raw.headers.forEach((n,r)=>{t[r]=n}),t}async parseBody(e){return qa(this,e)}json(){return u(this,Z).call(this,"text").then(e=>JSON.parse(e))}text(){return u(this,Z).call(this,"text")}arrayBuffer(){return u(this,Z).call(this,"arrayBuffer")}bytes(){return u(this,Z).call(this,"arrayBuffer").then(e=>new Uint8Array(e))}blob(){return u(this,Z).call(this,"blob")}formData(){return u(this,Z).call(this,"formData")}addValidatedData(e,t){(u(this,Ye)??w(this,Ye,{}))[e]=t}valid(e){var t;return(t=u(this,Ye))==null?void 0:t[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[za](){return u(this,H)}get matchedRoutes(){return u(this,H)[0].map(([[,e]])=>e)}get routePath(){return u(this,H)[0].map(([[,e]])=>e)[this.routeIndex].path}},Ye=new WeakMap,H=new WeakMap,ee=new WeakSet,Lr=function(e){var r;const t=(r=u(this,H)[0][this.routeIndex])==null?void 0:r[1][e],n=R(this,ee,ln).call(this,t);return n&&on(n)},Nr=function(){var n;const e={},t=Object.keys(((n=u(this,H)[0][this.routeIndex])==null?void 0:n[1])??{});for(const r of t){const a=R(this,ee,ln).call(this,u(this,H)[0][this.routeIndex][1][r]);a!==void 0&&(e[r]=on(a))}return e},ln=function(e){return u(this,H)[1]?u(this,H)[1][e]:e},Z=new WeakMap,Zn),lo="text/plain; charset=UTF-8",Vt=(e,t)=>({"Content-Type":e,...t}),Ge=(e,t)=>new Response(e,t),et,tt,X,Ie,Q,M,nt,Te,Oe,Se,rt,st,se,Pe,Xn,co=(Xn=class{constructor(e,t){x(this,se);x(this,et);x(this,tt);b(this,"env",{});x(this,X);b(this,"finalized",!1);b(this,"error");x(this,Ie);x(this,Q);x(this,M);x(this,nt);x(this,Te);x(this,Oe);x(this,Se);x(this,rt);x(this,st);b(this,"render",(...e)=>(u(this,Te)??w(this,Te,t=>this.html(t)),u(this,Te).call(this,...e)));b(this,"setLayout",e=>w(this,nt,e));b(this,"getLayout",()=>u(this,nt));b(this,"setRenderer",e=>{w(this,Te,e)});b(this,"header",(e,t,n)=>{this.finalized&&w(this,M,Ge(u(this,M).body,u(this,M)));const r=u(this,M)?u(this,M).headers:u(this,Se)??w(this,Se,new Headers);t===void 0?r.delete(e):n!=null&&n.append?r.append(e,t):r.set(e,t)});b(this,"status",e=>{w(this,Ie,e)});b(this,"set",(e,t)=>{u(this,X)??w(this,X,new Map),u(this,X).set(e,t)});b(this,"get",e=>u(this,X)?u(this,X).get(e):void 0);b(this,"newResponse",(...e)=>R(this,se,Pe).call(this,...e));b(this,"body",(e,t,n)=>R(this,se,Pe).call(this,e,t,n));b(this,"text",(e,t,n)=>!u(this,Se)&&!u(this,Ie)&&!t&&!n&&!this.finalized?new Response(e):R(this,se,Pe).call(this,e,t,Vt(lo,n)));b(this,"json",(e,t,n)=>R(this,se,Pe).call(this,JSON.stringify(e),t,Vt("application/json",n)));b(this,"html",(e,t,n)=>{const r=a=>R(this,se,Pe).call(this,a,t,Vt("text/html; charset=UTF-8",n));return typeof e=="object"?kt(e,De.Stringify,!1,{}).then(r):r(e)});b(this,"redirect",(e,t)=>{const n=String(e);return this.header("Location",/[^\x00-\xFF]/.test(n)?encodeURI(n):n),this.newResponse(null,t??302)});b(this,"notFound",()=>(u(this,Oe)??w(this,Oe,()=>Ge()),u(this,Oe).call(this,this)));w(this,et,e),t&&(w(this,Q,t.executionCtx),this.env=t.env,w(this,Oe,t.notFoundHandler),w(this,st,t.path),w(this,rt,t.matchResult))}get req(){return u(this,tt)??w(this,tt,new io(u(this,et),u(this,st),u(this,rt))),u(this,tt)}get event(){if(u(this,Q)&&"respondWith"in u(this,Q))return u(this,Q);throw Error("This context has no FetchEvent")}get executionCtx(){if(u(this,Q))return u(this,Q);throw Error("This context has no ExecutionContext")}get res(){return u(this,M)||w(this,M,Ge(null,{headers:u(this,Se)??w(this,Se,new Headers)}))}set res(e){if(u(this,M)&&e){e=Ge(e.body,e);for(const[t,n]of u(this,M).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=u(this,M).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of r)e.headers.append("set-cookie",a)}else e.headers.set(t,n)}w(this,M,e),this.finalized=!0}get var(){return u(this,X)?Object.fromEntries(u(this,X)):{}}},et=new WeakMap,tt=new WeakMap,X=new WeakMap,Ie=new WeakMap,Q=new WeakMap,M=new WeakMap,nt=new WeakMap,Te=new WeakMap,Oe=new WeakMap,Se=new WeakMap,rt=new WeakMap,st=new WeakMap,se=new WeakSet,Pe=function(e,t,n){let r=u(this,M)?new Headers(u(this,M).headers):u(this,Se);if(typeof t=="object"&&t.headers){r??(r=new Headers);for(const[s,o]of new Headers(t.headers))s==="set-cookie"?r.append(s,o):r.set(s,o)}if(n){if(!r){let s=0;for(const o in n)if(++s>1||typeof n[o]!="string"){r=new Headers;break}}if(r)for(const s in n){const o=n[s];if(typeof o=="string")r.set(s,o);else{r.delete(s);for(const i of o)r.append(s,i)}}}const a=typeof t=="number"?t:(t==null?void 0:t.status)??u(this,Ie);return Ge(e,{status:a,headers:r??n})},Xn),G="ALL",uo="all",fo=["get","post","put","delete","options","patch","query"],jr="Can not add a route since the matcher is already built.",Mr=class extends Error{},ho=e=>e.text("404 Not Found",404),zn=(e,t)=>{if("getResponse"in e){const n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text("Internal Server Error",500)},U,O,$r,z,ge,wt,At,_e,po=(_e=class{constructor(t={}){x(this,O);b(this,"get");b(this,"post");b(this,"put");b(this,"delete");b(this,"options");b(this,"patch");b(this,"query");b(this,"all");b(this,"on");b(this,"use");b(this,"router");b(this,"getPath");b(this,"_basePath","/");x(this,U,"/");b(this,"routes",[]);x(this,z,ho);b(this,"errorHandler",zn);b(this,"onError",t=>(this.errorHandler=t,this));b(this,"notFound",t=>(w(this,z,t),this));b(this,"fetch",(t,...n)=>R(this,O,At).call(this,t,n[1],n[0],t.method));b(this,"request",(t,n,r,a)=>t instanceof Request?this.fetch(n?new Request(t,n):t,r,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${me("/",t)}`,n),r,a)));b(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(R(this,O,At).call(this,t.request,t,void 0,t.request.method))})});[...fo,uo].forEach(s=>{this[s]=(o,...i)=>{const l=s.toUpperCase();return typeof o=="string"?w(this,U,o):R(this,O,ge).call(this,l,u(this,U),o),i.forEach(c=>{R(this,O,ge).call(this,l,u(this,U),c)}),this}}),this.on=(s,o,...i)=>{for(const l of[o].flat()){w(this,U,l);for(const c of[s].flat()){const h=c.toUpperCase();for(const f of i)R(this,O,ge).call(this,h,u(this,U),f)}}return this},this.use=(s,...o)=>(typeof s=="string"?w(this,U,s):(w(this,U,"*"),o.unshift(s)),o.forEach(i=>{R(this,O,ge).call(this,G,u(this,U),i)}),this);const{strict:r,...a}=t;Object.assign(this,a),this.getPath=r??!0?t.getPath??Tr:ro}route(t,n){const r=this.basePath(t);return n.routes.map(a=>{var o;let s;n.errorHandler===zn?s=a.handler:(s=async(i,l)=>(await Hn([],n.errorHandler)(i,()=>a.handler(i,l))).res,s[Zt]=a.handler),R(o=r,O,ge).call(o,a.method,a.path,s,a.basePath)}),this}basePath(t){const n=R(this,O,$r).call(this);return n._basePath=me(this._basePath,t),n}mount(t,n,r){let a,s;r&&(typeof r=="function"?s=r:(s=r.optionHandler,r.replaceRequest===!1?a=l=>l:a=r.replaceRequest));const o=s?l=>{const c=s(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};a||(a=(()=>{const l=me(this._basePath,t),c=l==="/"?0:l.length;return h=>{const f=new URL(h.url);return f.pathname=this.getPath(h).slice(c)||"/",new Request(f,h)}})());const i=async(l,c)=>{const h=await n(a(l.req.raw),...o(l));if(h)return h;await c()};return R(this,O,ge).call(this,G,me(t,"*"),i),this}},U=new WeakMap,O=new WeakSet,$r=function(){const t=new _e({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,w(t,z,u(this,z)),t.routes=this.routes,t},z=new WeakMap,ge=function(t,n,r,a){n=me(this._basePath,n);const s={basePath:a!==void 0?me(this._basePath,a):this._basePath,path:n,method:t,handler:r};this.router.add(t,n,[r,s]),this.routes.push(s)},wt=function(t,n){if(t instanceof Error)return this.errorHandler(t,n);throw t},At=function(t,n,r,a){if(a==="HEAD")return(async()=>new Response(null,await R(this,O,At).call(this,t,n,r,"GET")))();const s=this.getPath(t,{env:r}),o=this.router.match(a,s),i=new co(t,{path:s,matchResult:o,env:r,executionCtx:n,notFoundHandler:u(this,z)});if(o[0].length===1){let c;try{c=o[0][0][0][0](i,async()=>{i.res=await u(this,z).call(this,i)})}catch(h){return R(this,O,wt).call(this,h,i)}return c instanceof Promise?c.then(h=>h||(i.finalized?i.res:u(this,z).call(this,i))).catch(h=>R(this,O,wt).call(this,h,i)):c??u(this,z).call(this,i)}const l=Hn(o[0],this.errorHandler,u(this,z));return(async()=>{try{const c=await l(i);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return R(this,O,wt).call(this,c,i)}})()},_e),W=()=>Object.create(null),Wr=[];function mo(e,t){const n=this.buildAllMatchers(),r=(a,s)=>{const o=n[a]||n[G],i=o[2][s];if(i)return i;const l=s.match(o[0]);if(!l)return[[],Wr];const c=l.indexOf("",1);return[o[1][c],l]};return this.match=r,r(e,t)}var Qe="[^/]+",be=".*",ce="(?:|/.*)",ve=Symbol(),Kn=new Set(".\\+*[^]$()");function go(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1?1:e===be||e===ce?t===ce?-1:1:t===be||t===ce?-1:e===Qe?1:t===Qe?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ae,we,K,Ce,vo=(Ce=class{constructor(){x(this,ae);x(this,we);x(this,K,W())}insert(t,n,r,a,s){let o=this;for(let i=0,l=t.length;i<l;i++){const c=t[i],h=c.length===1?c==="*"?i===l-1?["","",be]:["","",Qe]:null:c==="/*"?["","",ce]:c.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let f;if(h){const d=h[1];let m=h[2]||Qe;if(d&&h[2]&&(m===".*"||(m=m.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(m))||m.length===1&&Kn.has(m)))throw ve;if(f=u(o,K)[m],!f){if(m!==be&&m!==ce){for(const g in u(o,K))if((m.length>1||g.length>1)&&g!==be&&g!==ce)throw ve}f=u(o,K)[m]=new Ce}d!==""&&(u(f,we)??w(f,we,a.varIndex++),r.push([d,u(f,we)]))}else if(f=u(o,K)[c],!f){for(const d in u(o,K))if(d.length>1&&d!==be&&d!==ce)throw ve;f=u(o,K)[c]=new Ce}o=f}if(u(o,ae)!==void 0)throw ve;w(o,ae,s?-1:n)}buildRegExpStr(){const n=Object.keys(u(this,K)).sort(go).map(r=>{const a=u(this,K)[r],s=a.buildRegExpStr();return s===""?"":(typeof u(a,we)=="number"?`(${r})@${u(a,we)}`:Kn.has(r)?`\\${r}`:r)+s}).filter(Boolean);return typeof u(this,ae)=="number"&&u(this,ae)!==-1&&n.unshift(`#${u(this,ae)}`),n.length===0?"":n.length===1?n[0]:"(?:"+n.join("|")+")"}},ae=new WeakMap,we=new WeakMap,K=new WeakMap,Ce),at,Le,ot,Qn,Vn=(Qn=class{constructor(){x(this,at,{varIndex:0});x(this,Le,new vo);x(this,ot,0);b(this,"paths",W())}insert(e,t){if(t){u(this,Le).insert(e.split(""),0,[],u(this,at),!0);return}const n=[],r=[];let a=e;for(let o=0;;){let i=!1;if(a=a.replace(/\{[^}]+\}/g,l=>{const c=`@\\${o}`;return r[o]=[c,l],o++,i=!0,c}),!i)break}const s=a.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=r.length-1;o>=0;o--){const[i]=r[o];for(let l=s.length-1;l>=0;l--)if(s[l].indexOf(i)!==-1){s[l]=s[l].replace(i,r[o][1]);break}}u(this,Le).insert(s,u(this,ot),n,u(this,at),!1),this.paths[e]=[yn(this,ot)._++,n]}buildRegExp(){let e=u(this,Le).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,s,o)=>s!==void 0?(n[++t]=Number(s),"$()"):(o!==void 0&&(r[Number(o)]=++t),"")),[new RegExp(`^${e}`),n,r]}},at=new WeakMap,Le=new WeakMap,ot=new WeakMap,Qn),Ct=W();function Fr(e){return Ct[e]??(Ct[e]=new RegExp(`^${e.replace(/\/:[^/{}]+(?:\{\[\^\/]\+})?(?=[/{]|$)|\/?\*$|([.\\+*[^\]$()?{}|])/g,(t,n)=>n?`\\${n}`:t==="/*"?ce:t==="*"?be:`/:${Qe}`)}$`))}function gt(e,t){for(const n of Object.keys(e).sort((r,a)=>a.length-r.length))if(Fr(n).test(t))return[...e[n]]}var Ae,oe,ie,fe,xt,Hr,Yn,yo=(Yn=class{constructor(){x(this,fe);b(this,"name","RegExpRouter");x(this,Ae);x(this,oe);x(this,ie);b(this,"match",mo);w(this,Ae,{[G]:W()}),w(this,oe,{[G]:W()}),w(this,ie,{[G]:new Vn})}add(e,t,n){const r=u(this,Ae),a=u(this,oe);if(!r)throw new Error(jr);if(!r[e]){u(this,ie)[e]=new Vn;for(const i of[r,a]){i[e]=W();for(const l in i[G])i[e][l]=[...i[G][l]],R(this,fe,xt).call(this,e,l)}}t==="/*"&&(t="*");const s=e===G?Object.keys(r):[e];if(/\*$/.test(t)){const i=Fr(t);for(const l of s)r[l][t]||(R(this,fe,xt).call(this,l,t),r[l][t]=gt(r[l],t)||gt(r[G],t)||[]);for(const l of[r,a])for(const c of s)for(const h in l[c])i.test(h)&&l[c][h].push([n,t]);return}const o=Or(t)||[t];for(const i of o)for(const l of s)a[l][i]||(R(this,fe,xt).call(this,l,i),a[l][i]=gt(r[l],i)||gt(r[G],i)||[]),a[l][i].push([n,i])}buildAllMatchers(){const e=W();for(const t of Object.keys(u(this,oe)))e[t]=R(this,fe,Hr).call(this,t);return w(this,Ae,w(this,oe,w(this,ie,void 0))),Ct=W(),e}},Ae=new WeakMap,oe=new WeakMap,ie=new WeakMap,fe=new WeakSet,xt=function(e,t){try{u(this,ie)[e].insert(t,!/\*|\/:/.test(t))}catch(n){throw n===ve?new Mr(t):n}},Hr=function(e){const t=u(this,Ae)[e],n=u(this,oe)[e],r=u(this,ie)[e],a=W(),s=[],[o,i,l]=r.buildRegExp();for(const c of[t,n])for(const h in c){const f=c[h],d=r.paths[h];if(!d){a[h]=[f.map(([m])=>[m,W()]),Wr];continue}s[d[0]]=f.map(([m,g])=>[m,r.paths[g][1].reduceRight((y,[v],A)=>(y[v]=l[d[1][A][1]],y),W())])}return[o,i.map(c=>s[c]),a]},Yn),le,Y,er,bo=(er=class{constructor(e){b(this,"name","SmartRouter");x(this,le,[]);x(this,Y,[]);w(this,le,e.routers)}add(e,t,n){if(!u(this,Y))throw new Error(jr);u(this,Y).push([e,t,n])}match(e,t){if(!u(this,Y))throw new Error("Fatal error");const n=u(this,le),r=u(this,Y),a=n.length;let s=0,o;for(;s<a;s++){const i=n[s];try{for(let l=0,c=r.length;l<c;l++)i.add(...r[l]);o=i.match(e,t)}catch(l){if(l instanceof Mr)continue;throw l}this.match=i.match.bind(i),w(this,le,[i]),w(this,Y,void 0);break}if(s===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(u(this,Y)||u(this,le).length!==1)throw new Error("No active router has been determined yet.");return u(this,le)[0]}},le=new WeakMap,Y=new WeakMap,er),qt=W(),So=0,Ne,B,it,je,L,q,re,Me,wo=(Me=class{constructor(){x(this,q);x(this,Ne,[]);x(this,B,W());x(this,it,[]);x(this,je);x(this,L,qt)}insert(t,n,r){var l;let a=this;const s=Qa(n),o=new Set;let i=0;for(const c of s){const h=s[++i],f=to(c,h)||(h===void 0&&c&&c.indexOf("*")===c.length-1?c:null),d=Array.isArray(f),m=d?f[0]:f||c,g=(l=u(a,B))[m]||(l[m]=new Me);f&&!u(g,je)&&(w(g,je,f),u(a,it).push(g)),a=g,d&&o.add(f[1])}u(a,Ne).push({[t]:{handler:r,possibleKeys:[...o],score:++So}})}search(t,n){var h;const r=[];w(this,L,qt);let s=[this];const o=Dr(n),i=[],l=o.length;let c=null;for(let f=0;f<l;f++){const d=o[f],m=f===l-1,g=[];for(let v=0,A=s.length;v<A;v++){const C=s[v],P=u(C,B)[d];P&&(w(P,L,u(C,L)),m?(u(P,B)["*"]&&R(this,q,re).call(this,r,u(P,B)["*"],t,u(C,L)),R(this,q,re).call(this,r,P,t,u(C,L))):g.push(P));for(const S of u(C,it)){const k=u(S,je),E=u(C,L)===qt?{}:{...u(C,L)};if(typeof k=="string"){(k==="*"||d.startsWith(k.slice(0,-1)))&&(R(this,q,re).call(this,r,S,t,u(C,L)),k==="*"&&(w(S,L,E),g.push(S)));continue}const[,I,N]=k;if(!(!d&&N===!0)){if(N!==!0){if(!c){c=[];let _=n[0]==="/"?1:0;for(let j=0;j<l;j++)c[j]=_,_+=o[j].length+1}const ke=n.slice(c[f]),T=N.exec(ke);if(T){E[I]=T[0],R(this,q,re).call(this,r,S,t,u(C,L),E),T[0].length===ke.length&&u(S,B)["*"]&&R(this,q,re).call(this,r,u(S,B)["*"],t,u(C,L),E);for(const _ in u(S,B)){w(S,L,E);const j=((h=T[0].match(/\//g))==null?void 0:h.length)??0;(i[j]||(i[j]=[])).push(S);break}continue}}(N===!0||N.test(d))&&(E[I]=d,m?(R(this,q,re).call(this,r,S,t,E,u(C,L)),u(S,B)["*"]&&R(this,q,re).call(this,r,u(S,B)["*"],t,E,u(C,L))):(w(S,L,E),g.push(S)))}}}const y=i.shift();s=y?g.concat(y):g}return r[1]&&r.sort((f,d)=>f.score-d.score),[r.map(({handler:f,params:d})=>[f,d])]}},Ne=new WeakMap,B=new WeakMap,it=new WeakMap,je=new WeakMap,L=new WeakMap,q=new WeakSet,re=function(t,n,r,a,s){for(let o=0,i=u(n,Ne).length;o<i;o++){const l=u(n,Ne)[o],c=l[r]||l[G];if(c){c.params=W(),t.push(c);for(let h=0,f=c.possibleKeys.length;h<f;h++){const d=c.possibleKeys[h];c.params[d]=s!=null&&s[d]&&!h?s[d]:a[d]??(s==null?void 0:s[d])}}}},Me),lt,tr,Ao=(tr=class{constructor(){b(this,"name","TrieRouter");x(this,lt,new wo)}add(e,t,n){for(const r of Or(t)||[t])u(this,lt).insert(e,r,n)}match(e,t){return u(this,lt).search(e,t)}},lt=new WeakMap,tr),Et=class extends po{constructor(e={}){super(e),this.router=e.router??new bo({routers:[new yo,new Ao]})}},Co=e=>e;const Br=new Yr,qn=e=>(e=e.replace(/\.tsx?$/g,"").replace(/\.mdx?$/g,"").replace(/^\/?index$/,"/").replace(/\/index$/,"").replace(/\[\.{3}.+\]/,"*").replace(/\((.+?)\)/g,"").replace(/\[(.+?)\]/g,":$1").replace(/\/\//g,"/"),/^\//.test(e)?e:"/"+e),Jt=e=>{const t={};for(const[n,r]of Object.entries(e)){const a=n.split("/"),s=a.pop(),o=a.join("/");t[o]||(t[o]={}),s&&(t[o][s]=r)}for(const[n,r]of Object.entries(t)){const a=Object.entries(r).sort(([s],[o])=>s[0]==="["&&o[0]!=="["?1:s[0]!=="["&&o[0]==="["?-1:s.localeCompare(o));t[n]=Object.fromEntries(a)}return t},xo=e=>Object.keys(e).sort((n,r)=>{const a=n.split("/").length,s=r.split("/").length;return a-s||r.localeCompare(n)}).map(n=>({[n]:e[n]})),Eo=e=>{const t={};for(const r of Object.keys(e)){const a=r.split("/");a.pop();const s=a.join("/");t[s]||(t[s]=[]),t[s].includes(r)||t[s].push(r)}const n=Object.keys(t).sort((r,a)=>a.length-r.length);for(const r of n)for(const a of n)if(a.startsWith(r)&&a!==r){const s=new Set([...t[a],...t[r]]);t[a]=[...s]}return t},Gr="_404.tsx",ko="_error.tsx",Ro=["GET","POST","PUT","DELETE","OPTIONS","PATCH"],Po=e=>{const t=e.root,n=new RegExp(`^${t}`),r=v=>qn(v.replace(n,"")),a=new Et;a.use(async function(A,C){await Br.run(A,()=>C())});const s=e.NOT_FOUND,o=Jt(s),i=e.ERROR,l=Jt(i),c=e.RENDERER,h=Eo(c),f=e.MIDDLEWARE,d=e.ROUTES,m=xo(Jt(d)),g=(v,A)=>{let C=A[v]??[];const P=k=>(C=A[k.join("/")],C||(k.pop(),k.length&&P(k)),C??[]),S=v.split("/");return C=P(S),C.sort((k,E)=>k.split("/").length-E.split("/").length),C},y={};for(const v of m)for(const[A,C]of Object.entries(v)){const P=new Et;let S=!1;const k=Do(A,o);k&&P.use(async(T,_)=>{if(await _(),T.res.status===404){const j=await k(T),V=new Response(j.body,{status:404,headers:j.headers});T.res=V}}),g(A,h).map(T=>{const _=c[T];_[de]&&(S=!0);const V=_.default;V&&P.all("*",V)});const I=Object.keys(f).find(T=>{const _=A.replaceAll("[","\\[").replaceAll("]","\\]").replaceAll("(","\\(").replaceAll(")","\\)");return new RegExp(_+"/_middleware.tsx?").test(T)});if(I){const T=f[I];T.default&&P.use(...T.default)}for(const[T,_]of Object.entries(C)){const j=_[de],V=Co(async function(ne,Zr){ne.set(de,j?!0:S),await Zr()}),te=_.default,he=qn(T);te&&"fetch"in te&&(P.use(V),P.route(he,te));for(const pe of Ro){const ne=_[pe];ne&&(P.on(pe,he,V),P.on(pe,he,...ne))}te&&Array.isArray(te)&&(P.get(he,V),P.get(he,...te)),typeof te=="function"&&(P.get(he,V),P.get(he,async pe=>{const ne=await te(pe);return ne instanceof Response?ne:pe.render(ne,_)}))}const N=To(A,l);N&&(y[A]=N);for(const[T,_]of Object.entries(y))new RegExp(`^${T}`).test(A)&&_&&P.onError(_);let ke=r(A);a.route(ke,P)}for(const v of m.reverse()){const A=Object.entries(v)[0][0],C=new Et;Io(C,A,o);const P=r(A);a.route(P,C)}return a};function Do(e,t){for(const[n,r]of Object.entries(t))if(e===n){const a=r[Gr];if(a)return a.default}}function Io(e,t,n){for(const[r,a]of Object.entries(n))if(t===r){const s=a[Gr];if(s){const o=s.default;s[de]&&e.use("*",(l,c)=>(l.set(de,!0),c())),e.get("*",l=>(l.status(404),o(l)))}}}function To(e,t){for(const[n,r]of Object.entries(t))if(e===n){const a=r[ko];if(a){const s=a.default;if(s)return async(i,l)=>{const c=a[de];return c&&l.set(de,c),l.status(500),s(i,l)}}}}const Oo=e=>Po({root:"/app/routes",NOT_FOUND:Object.assign({"/app/routes/_404.tsx":as}),ERROR:Object.assign({"/app/routes/_error.tsx":is}),RENDERER:Object.assign({"/app/routes/_renderer.tsx":ha}),MIDDLEWARE:Object.assign({}),ROUTES:Object.assign({"/app/routes/index.tsx":Ua})}),_o=({children:e})=>{const t=Br.getStore();if(!t)throw new Error("No context found");return p($e,{children:t.get(de)&&e})},Lo={"_honox-island-C01SjPmP.js":{file:"static/honox-island-C01SjPmP.js",name:"honox-island",imports:["app/client.ts"]},"_index-AjTEzyjf.js":{file:"static/index-AjTEzyjf.js",name:"index"},"app/client.ts":{file:"static/client-Dtl4zQ17.js",name:"client",src:"app/client.ts",isEntry:!0,dynamicImports:["app/islands/CollapsibleSection.tsx","app/islands/DownloadSection.tsx","app/islands/SectionGroup.tsx","node_modules/honox/dist/client/runtime.js","node_modules/honox/dist/client/runtime.js"]},"app/islands/CollapsibleSection.tsx":{file:"static/CollapsibleSection-iW7sUmkX.js",name:"CollapsibleSection",src:"app/islands/CollapsibleSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-C01SjPmP.js","_index-AjTEzyjf.js"]},"app/islands/DownloadSection.tsx":{file:"static/DownloadSection-DEXZdqiT.js",name:"DownloadSection",src:"app/islands/DownloadSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-C01SjPmP.js"]},"app/islands/SectionGroup.tsx":{file:"static/SectionGroup-D_n1RGcr.js",name:"SectionGroup",src:"app/islands/SectionGroup.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-C01SjPmP.js","_index-AjTEzyjf.js"]},"app/style.css":{file:"static/style-Dv8O0o5u.css",src:"app/style.css",isEntry:!0},"node_modules/honox/dist/client/runtime.js":{file:"static/runtime-9fe5ePfL.js",name:"runtime",src:"node_modules/honox/dist/client/runtime.js",isDynamicEntry:!0,imports:["app/client.ts"]}},Ur=Object.freeze(Object.defineProperty({__proto__:null,default:Lo},Symbol.toStringTag,{value:"Module"})),zr=e=>e.endsWith("/")?e:e+"/",No=e=>{const t=e.src;if(e.prod??!0){let n=e.manifest;if(!n){const r=Object.assign({"/dist/.vite/manifest.json":Ur});for(const[,a]of Object.entries(r))if(a.default){n=a.default;break}}if(n){const r=n[t.replace(/^\//,"")];if(r)return p(_o,{children:p("script",{type:"module",async:!!e.async,src:`${zr("/resume/")}${r.file}`,nonce:e.nonce})})}return p($e,{})}else return p("script",{type:"module",async:!!e.async,src:t,nonce:e.nonce})},jo=e=>{let{href:t,prod:n,manifest:r,...a}=e;if(t)if(n??!0){if(!r){const s=Object.assign({"/dist/.vite/manifest.json":Ur});for(const[,o]of Object.entries(s))if(o.default){r=o.default;break}}if(r){const s=r[t.replace(/^\//,"")];if(s)return t.startsWith("/")?p("link",{href:`${zr("/resume/")}${s.file}`,...a}):p("link",{href:s.file,...a})}return p($e,{})}else return p("link",{href:t,...a});return p("link",{...a})},Kr=Oo();rs(Kr);const cn=new Et,Vr=Object.assign({"/app/server.ts":Kr});let qr=!1;for(const[,e]of Object.entries(Vr))e&&(cn.all("*",t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),cn.notFound(t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),qr=!0);if(!qr)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Jr={},Jn=new Set;for(const[e,t]of Object.entries(Vr))for(const[n,r]of Object.entries(t))if(n!=="fetch"){if(Jn.has(n))throw new Error(`Handler "${n}" is defined in multiple entry files. Please ensure each handler (except fetch) is defined only once.`);Jn.add(n),Jr[n]=r}const Wo={...Jr,fetch:cn.fetch};export{Wo as default};
