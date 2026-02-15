var br=Object.defineProperty;var Xt=e=>{throw TypeError(e)};var yr=(e,t,n)=>t in e?br(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var S=(e,t,n)=>yr(e,typeof t!="symbol"?t+"":t,n),St=(e,t,n)=>t.has(e)||Xt("Cannot "+n);var u=(e,t,n)=>(St(e,t,"read from private field"),n?n.call(e):t.get(e)),x=(e,t,n)=>t.has(e)?Xt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),A=(e,t,n,r)=>(St(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),R=(e,t,n)=>(St(e,t,"access private method"),n);var Qt=(e,t,n,r)=>({set _(s){A(e,t,s,n)},get _(){return u(e,t,r)}});import{AsyncLocalStorage as Sr}from"node:async_hooks";function wr(){const{process:e,Deno:t}=globalThis;return!(typeof(t==null?void 0:t.noColor)=="boolean"?t.noColor:e!==void 0?"NO_COLOR"in(e==null?void 0:e.env):!1)}var Lt="__COMPOSED_HANDLER",kn=e=>e.length>1,Rn=e=>e[Lt]?Rn(e[Lt]):e,Ar=e=>e.name||(kn(e)?"[middleware]":"[handler]"),Cr=e=>e.routes.map(({path:t,method:n,handler:r})=>{const s=Rn(r);return{path:t,method:n,name:Ar(s),isMiddleware:kn(s)}}),xr=(e,t)=>{const n=wr(),r={};let s=0,o=0;Cr(e).filter(({isMiddleware:a})=>!a).map(a=>{const i=`${a.method}-${a.path}`;if((r[i]||(r[i]=[])).push(a),!(r[i].length>1))return s=Math.max(s,a.method.length),o=Math.max(o,a.path.length),{method:a.method,path:a.path,routes:r[i]}}).forEach(a=>{if(!a)return;const{method:i,path:l,routes:c}=a,d=n?`\x1B[32m${i}\x1B[0m`:i;console.log(`${d} ${" ".repeat(s-i.length)} ${l}`)})};const Er=e=>(e.status(404),e.render("404 Not Found")),kr=Object.freeze(Object.defineProperty({__proto__:null,default:Er},Symbol.toStringTag,{value:"Module"})),Rr=(e,t)=>"getResponse"in e?e.getResponse():(console.error(e.message),t.status(500),t.render("Internal Server Error")),Or=Object.freeze(Object.defineProperty({__proto__:null,default:Rr},Symbol.toStringTag,{value:"Module"}));var On={Stringify:1},M=(e,t)=>{const n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},Dr=/[&<>'"]/,Dn=async(e,t)=>{let n="";t||(t=[]);const r=await Promise.all(e);for(let s=r.length-1;n+=r[s],s--,!(s<0);s--){let o=r[s];typeof o=="object"&&t.push(...o.callbacks||[]);const a=o.isEscaped;if(o=await(typeof o=="object"?o.toString():o),typeof o=="object"&&t.push(...o.callbacks||[]),o.isEscaped??a)n+=o;else{const i=[n];ie(o,i),n=i[0]}}return M(n,t)},ie=(e,t)=>{const n=e.search(Dr);if(n===-1){t[0]+=e;return}let r,s,o=0;for(s=n;s<e.length;s++){switch(e.charCodeAt(s)){case 34:r="&quot;";break;case 39:r="&#39;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t[0]+=e.substring(o,s)+r,o=s+1}t[0]+=e.substring(o,s)},Pn=e=>{const t=e.callbacks;if(!(t!=null&&t.length))return e;const n=[e],r={};return t.forEach(s=>s({phase:On.Stringify,buffer:n,context:r})),n[0]},In=async(e,t,n,r,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(s?s[0]+=e:s=[e],Promise.all(o.map(i=>i({phase:t,buffer:s,context:r}))).then(i=>Promise.all(i.filter(Boolean).map(l=>In(l,t,!1,r,s))).then(()=>s[0]))):Promise.resolve(e)},Pr=(e,...t)=>{const n=[""];for(let r=0,s=e.length-1;r<s;r++){n[0]+=e[r];const o=Array.isArray(t[r])?t[r].flat(1/0):[t[r]];for(let a=0,i=o.length;a<i;a++){const l=o[a];if(typeof l=="string")ie(l,n);else if(typeof l=="number")n[0]+=l;else{if(typeof l=="boolean"||l===null||l===void 0)continue;if(typeof l=="object"&&l.isEscaped)if(l.callbacks)n.unshift("",l);else{const c=l.toString();c instanceof Promise?n.unshift("",c):n[0]+=c}else l instanceof Promise?n.unshift("",l):ie(l.toString(),n)}}}return n[0]+=e.at(-1),n.length===1?"callbacks"in n?M(Pn(M(n[0],n.callbacks))):M(n[0]):Dn(n,n.callbacks)},Gt=Symbol("RENDERER"),Tt=Symbol("ERROR_HANDLER"),O=Symbol("STASH"),jn=Symbol("INTERNAL"),Ir=Symbol("MEMO"),pt=Symbol("PERMALINK"),Yt=e=>(e[jn]=!0,e),Ln=e=>({value:t,children:n})=>{if(!n)return;const r={children:[{tag:Yt(()=>{e.push(t)}),props:{}}]};Array.isArray(n)?r.children.push(...n.flat()):r.children.push(n),r.children.push({tag:Yt(()=>{e.pop()}),props:{}});const s={tag:"",props:r,type:""};return s[Tt]=o=>{throw e.pop(),o},s},Tn=e=>{const t=[e],n=Ln(t);return n.values=t,n.Provider=n,Le.push(n),n},Le=[],yt=e=>{const t=[e],n=r=>{t.push(r.value);let s;try{s=r.children?(Array.isArray(r.children)?new $n("",{},r.children):r.children).toString():""}catch(o){throw t.pop(),o}return s instanceof Promise?s.finally(()=>t.pop()).then(o=>M(o,o.callbacks)):(t.pop(),M(s))};return n.values=t,n.Provider=n,n[Gt]=Ln(t),Le.push(n),n},Se=e=>e.values.at(-1),ot={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Nt={},at="data-precedence",Ye=e=>Array.isArray(e)?e:[e],en=new WeakMap,tn=(e,t,n,r)=>({buffer:s,context:o})=>{if(!s)return;const a=en.get(o)||{};en.set(o,a);const i=a[e]||(a[e]=[]);let l=!1;const c=ot[e];if(c.length>0){e:for(const[,d]of i)for(const f of c)if(((d==null?void 0:d[f])??null)===(n==null?void 0:n[f])){l=!0;break e}}if(l?s[0]=s[0].replaceAll(t,""):c.length>0?i.push([t,n,r]):i.unshift([t,n,r]),s[0].indexOf("</head>")!==-1){let d;if(r===void 0)d=i.map(([f])=>f);else{const f=[];d=i.map(([h,,m])=>{let b=f.indexOf(m);return b===-1&&(f.push(m),b=f.length-1),[h,b]}).sort((h,m)=>h[1]-m[1]).map(([h])=>h)}d.forEach(f=>{s[0]=s[0].replaceAll(f,"")}),s[0]=s[0].replace(/(?=<\/head>)/,d.join(""))}},et=(e,t,n)=>M(new B(e,n,Ye(t??[])).toString()),tt=(e,t,n,r)=>{if("itemProp"in n)return et(e,t,n);let{precedence:s,blocking:o,...a}=n;s=r?s??"":void 0,r&&(a[at]=s);const i=new B(e,a,Ye(t||[])).toString();return i instanceof Promise?i.then(l=>M(i,[...l.callbacks||[],tn(e,l,a,s)])):M(i,[tn(e,i,a,s)])},jr=({children:e,...t})=>{const n=zt();if(n){const r=Se(n);if(r==="svg"||r==="head")return new B("title",t,Ye(e??[]))}return tt("title",e,t,!1)},Lr=({children:e,...t})=>{const n=zt();return["src","async"].some(r=>!t[r])||n&&Se(n)==="head"?et("script",e,t):tt("script",e,t,!1)},Tr=({children:e,...t})=>["href","precedence"].every(n=>n in t)?(t["data-href"]=t.href,delete t.href,tt("style",e,t,!0)):et("style",e,t),Nr=({children:e,...t})=>["onLoad","onError"].some(n=>n in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?et("link",e,t):tt("link",e,t,"precedence"in t),_r=({children:e,...t})=>{const n=zt();return n&&Se(n)==="head"?et("meta",e,t):tt("meta",e,t,!1)},Nn=(e,{children:t,...n})=>new B(e,n,Ye(t??[])),Mr=e=>(typeof e.action=="function"&&(e.action=pt in e.action?e.action[pt]:void 0),Nn("form",e)),_n=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=pt in t.formAction?t.formAction[pt]:void 0),Nn(e,t)),$r=e=>_n("input",e),Wr=e=>_n("button",e);const wt=Object.freeze(Object.defineProperty({__proto__:null,button:Wr,form:Mr,input:$r,link:Nr,meta:_r,script:Lr,style:Tr,title:jr},Symbol.toStringTag,{value:"Module"}));var Fr=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),mt=e=>Fr.get(e)||e,Mn=(e,t)=>{for(const[n,r]of Object.entries(e)){const s=n[0]==="-"||!/[A-Z]/.test(n)?n:n.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`);t(s,r==null?null:typeof r=="number"?s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${r}`:`${r}px`:r)}},ze=void 0,zt=()=>ze,Hr=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,Br=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],Gr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Ut=(e,t)=>{for(let n=0,r=e.length;n<r;n++){const s=e[n];if(typeof s=="string")ie(s,t);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof B?s.toStringToBuffer(t):typeof s=="number"||s.isEscaped?t[0]+=s:s instanceof Promise?t.unshift("",s):Ut(s,t)}}},B=class{constructor(e,t,n){S(this,"tag");S(this,"props");S(this,"key");S(this,"children");S(this,"isEscaped",!0);S(this,"localContexts");this.tag=e,this.props=t,this.children=n}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var t,n;const e=[""];(t=this.localContexts)==null||t.forEach(([r,s])=>{r.values.push(s)});try{this.toStringToBuffer(e)}finally{(n=this.localContexts)==null||n.forEach(([r])=>{r.values.pop()})}return e.length===1?"callbacks"in e?Pn(M(e[0],e.callbacks)).toString():e[0]:Dn(e,e.callbacks)}toStringToBuffer(e){const t=this.tag,n=this.props;let{children:r}=this;e[0]+=`<${t}`;const s=ze&&Se(ze)==="svg"?o=>Hr(mt(o)):o=>mt(o);for(let[o,a]of Object.entries(n))if(o=s(o),o!=="children"){if(o==="style"&&typeof a=="object"){let i="";Mn(a,(l,c)=>{c!=null&&(i+=`${i?";":""}${l}:${c}`)}),e[0]+=' style="',ie(i,e),e[0]+='"'}else if(typeof a=="string")e[0]+=` ${o}="`,ie(a,e),e[0]+='"';else if(a!=null)if(typeof a=="number"||a.isEscaped)e[0]+=` ${o}="${a}"`;else if(typeof a=="boolean"&&Gr.includes(o))a&&(e[0]+=` ${o}=""`);else if(o==="dangerouslySetInnerHTML"){if(r.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r=[M(a.__html)]}else if(a instanceof Promise)e[0]+=` ${o}="`,e.unshift('"',a);else if(typeof a=="function"){if(!o.startsWith("on")&&o!=="ref")throw new Error(`Invalid prop '${o}' of type 'function' supplied to '${t}'.`)}else e[0]+=` ${o}="`,ie(a.toString(),e),e[0]+='"'}if(Br.includes(t)&&r.length===0){e[0]+="/>";return}e[0]+=">",Ut(r,e),e[0]+=`</${t}>`}},At=class extends B{toStringToBuffer(e){const{children:t}=this,n={...this.props};t.length&&(n.children=t.length===1?t[0]:t);const r=this.tag.call(null,n);if(!(typeof r=="boolean"||r==null))if(r instanceof Promise)if(Le.length===0)e.unshift("",r);else{const s=Le.map(o=>[o,o.values.at(-1)]);e.unshift("",r.then(o=>(o instanceof B&&(o.localContexts=s),o)))}else r instanceof B?r.toStringToBuffer(e):typeof r=="number"||r.isEscaped?(e[0]+=r,r.callbacks&&(e.callbacks||(e.callbacks=[]),e.callbacks.push(...r.callbacks))):ie(r,e)}},$n=class extends B{toStringToBuffer(e){Ut(this.children,e)}},_t=(e,t,...n)=>{t??(t={}),n.length&&(t.children=n.length===1?n[0]:n);const r=t.key;delete t.key;const s=it(e,t,n);return s.key=r,s},nn=!1,it=(e,t,n)=>{if(!nn){for(const r in Nt)wt[r][Gt]=Nt[r];nn=!0}return typeof e=="function"?new At(e,t,n):wt[e]?new At(wt[e],t,n):e==="svg"||e==="head"?(ze||(ze=yt("")),new B(e,t,[new At(ze,{value:e},n)])):new B(e,t,n)},Te=({children:e})=>new $n("",{children:e},Array.isArray(e)?e:e?[e]:[]),zr=e=>!!(e&&typeof e=="object"&&"tag"in e&&"props"in e);function p(e,t,n){let r;if(!t||!("children"in t))r=it(e,t,[]);else{const s=t.children;r=Array.isArray(s)?it(e,t,s):it(e,t,[s])}return r.key=n,r}var Ue="_hp",Ur={Change:"Input",DoubleClick:"DblClick"},Kr={svg:"2000/svg",math:"1998/Math/MathML"},Ne=[],Mt=new WeakMap,_e=void 0,qr=()=>_e,U=e=>"t"in e,Ct={onClick:["click",!1]},rn=e=>{if(!e.startsWith("on"))return;if(Ct[e])return Ct[e];const t=e.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(t){const[,n,r]=t;return Ct[e]=[(Ur[n]||n).toLowerCase(),!!r]}},sn=(e,t)=>_e&&e instanceof SVGElement&&/[A-Z]/.test(t)&&(t in e.style||t.match(/^(?:o|pai|str|u|ve)/))?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,Vr=(e,t,n)=>{var r;t||(t={});for(let s in t){const o=t[s];if(s!=="children"&&(!n||n[s]!==o)){s=mt(s);const a=rn(s);if(a){if((n==null?void 0:n[s])!==o&&(n&&e.removeEventListener(a[0],n[s],a[1]),o!=null)){if(typeof o!="function")throw new Error(`Event handler for "${s}" is not a function`);e.addEventListener(a[0],o,a[1])}}else if(s==="dangerouslySetInnerHTML"&&o)e.innerHTML=o.__html;else if(s==="ref"){let i;typeof o=="function"?i=o(e)||(()=>o(null)):o&&"current"in o&&(o.current=e,i=()=>o.current=null),Mt.set(e,i)}else if(s==="style"){const i=e.style;typeof o=="string"?i.cssText=o:(i.cssText="",o!=null&&Mn(o,i.setProperty.bind(i)))}else{if(s==="value"){const l=e.nodeName;if(l==="INPUT"||l==="TEXTAREA"||l==="SELECT"){if(e.value=o==null||o===!1?null:o,l==="TEXTAREA"){e.textContent=o;continue}else if(l==="SELECT"){e.selectedIndex===-1&&(e.selectedIndex=0);continue}}}else(s==="checked"&&e.nodeName==="INPUT"||s==="selected"&&e.nodeName==="OPTION")&&(e[s]=o);const i=sn(e,s);o==null||o===!1?e.removeAttribute(i):o===!0?e.setAttribute(i,""):typeof o=="string"||typeof o=="number"?e.setAttribute(i,o):e.setAttribute(i,o.toString())}}}if(n)for(let s in n){const o=n[s];if(s!=="children"&&!(s in t)){s=mt(s);const a=rn(s);a?e.removeEventListener(a[0],o,a[1]):s==="ref"?(r=Mt.get(e))==null||r():e.removeAttribute(sn(e,s))}}},Jr=(e,t)=>{t[O][0]=0,Ne.push([e,t]);const n=t.tag[Gt]||t.tag,r=n.defaultProps?{...n.defaultProps,...t.props}:t.props;try{return[n.call(null,r)]}finally{Ne.pop()}},Wn=(e,t,n,r,s)=>{var o,a;(o=e.vR)!=null&&o.length&&(r.push(...e.vR),delete e.vR),typeof e.tag=="function"&&((a=e[O][1][He])==null||a.forEach(i=>s.push(i))),e.vC.forEach(i=>{var l;if(U(i))n.push(i);else if(typeof i.tag=="function"||i.tag===""){i.c=t;const c=n.length;if(Wn(i,t,n,r,s),i.s){for(let d=c;d<n.length;d++)n[d].s=!0;i.s=!1}}else n.push(i),(l=i.vR)!=null&&l.length&&(r.push(...i.vR),delete i.vR)})},Zr=e=>{var t;for(;e&&(e.tag===Ue||!e.e);)e=e.tag===Ue||!((t=e.vC)!=null&&t[0])?e.nN:e.vC[0];return e==null?void 0:e.e},Fn=e=>{var t,n,r,s,o,a;U(e)||((n=(t=e[O])==null?void 0:t[1][He])==null||n.forEach(i=>{var l;return(l=i[2])==null?void 0:l.call(i)}),(r=Mt.get(e.e))==null||r(),e.p===2&&((s=e.vC)==null||s.forEach(i=>i.p=2)),(o=e.vC)==null||o.forEach(Fn)),e.p||((a=e.e)==null||a.remove(),delete e.e),typeof e.tag=="function"&&(We.delete(e),lt.delete(e),delete e[O][3],e.a=!0)},Hn=(e,t,n)=>{e.c=t,Bn(e,t,n)},on=(e,t)=>{if(t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n}},an=Symbol(),Bn=(e,t,n)=>{var c;const r=[],s=[],o=[];Wn(e,t,r,s,o),s.forEach(Fn);const a=n?void 0:t.childNodes;let i,l=null;if(n)i=-1;else if(!a.length)i=0;else{const d=on(a,Zr(e.nN));d!==void 0?(l=a[d],i=d):i=on(a,(c=r.find(f=>f.tag!==Ue&&f.e))==null?void 0:c.e)??-1,i===-1&&(n=!0)}for(let d=0,f=r.length;d<f;d++,i++){const h=r[d];let m;if(h.s&&h.e)m=h.e,h.s=!1;else{const b=n||!h.e;U(h)?(h.e&&h.d&&(h.e.textContent=h.t),h.d=!1,m=h.e||(h.e=document.createTextNode(h.t))):(m=h.e||(h.e=h.n?document.createElementNS(h.n,h.tag):document.createElement(h.tag)),Vr(m,h.props,h.pP),Bn(h,m,b))}h.tag===Ue?i--:n?m.parentNode||t.appendChild(m):a[i]!==m&&a[i-1]!==m&&(a[i+1]===m?t.appendChild(a[i]):t.insertBefore(m,l||a[i]||null))}if(e.pP&&(e.pP=void 0),o.length){const d=[],f=[];o.forEach(([,h,,m,b])=>{h&&d.push(h),m&&f.push(m),b==null||b()}),d.forEach(h=>h()),f.length&&requestAnimationFrame(()=>{f.forEach(h=>h())})}},Xr=(e,t)=>!!(e&&e.length===t.length&&e.every((n,r)=>n[1]===t[r][1])),lt=new WeakMap,$t=(e,t,n)=>{var o,a,i,l,c,d;const r=!n&&t.pC;n&&(t.pC||(t.pC=t.vC));let s;try{n||(n=typeof t.tag=="function"?Jr(e,t):Ye(t.props.children)),((o=n[0])==null?void 0:o.tag)===""&&n[0][Tt]&&(s=n[0][Tt],e[5].push([e,s,t]));const f=r?[...t.pC]:t.vC?[...t.vC]:void 0,h=[];let m;for(let b=0;b<n.length;b++){Array.isArray(n[b])&&n.splice(b,1,...n[b].flat());let y=Qr(n[b]);if(y){typeof y.tag=="function"&&!y.tag[jn]&&(Le.length>0&&(y[O][2]=Le.map(v=>[v,v.values.at(-1)])),(a=e[5])!=null&&a.length&&(y[O][3]=e[5].at(-1)));let g;if(f&&f.length){const v=f.findIndex(U(y)?w=>U(w):y.key!==void 0?w=>w.key===y.key&&w.tag===y.tag:w=>w.tag===y.tag);v!==-1&&(g=f[v],f.splice(v,1))}if(g)if(U(y))g.t!==y.t&&(g.t=y.t,g.d=!0),y=g;else{const v=g.pP=g.props;if(g.props=y.props,g.f||(g.f=y.f||t.f),typeof y.tag=="function"){const w=g[O][2];g[O][2]=y[O][2]||[],g[O][3]=y[O][3],!g.f&&((g.o||g)===y.o||(l=(i=g.tag)[Ir])!=null&&l.call(i,v,g.props))&&Xr(w,g[O][2])&&(g.s=!0)}y=g}else if(!U(y)&&_e){const v=Se(_e);v&&(y.n=v)}if(!U(y)&&!y.s&&($t(e,y),delete y.f),h.push(y),m&&!m.s&&!y.s)for(let v=m;v&&!U(v);v=(c=v.vC)==null?void 0:c.at(-1))v.nN=y;m=y}}t.vR=r?[...t.vC,...f||[]]:f||[],t.vC=h,r&&delete t.pC}catch(f){if(t.f=!0,f===an){if(s)return;throw f}const[h,m,b]=((d=t[O])==null?void 0:d[3])||[];if(m){const y=()=>ct([0,!1,e[2]],b),g=lt.get(b)||[];g.push(y),lt.set(b,g);const v=m(f,()=>{const w=lt.get(b);if(w){const C=w.indexOf(y);if(C!==-1)return w.splice(C,1),y()}});if(v){if(e[0]===1)e[1]=!0;else if($t(e,b,[v]),(m.length===1||e!==h)&&b.c){Hn(b,b.c,!1);return}throw an}}throw f}finally{s&&e[5].pop()}},Qr=e=>{if(!(e==null||typeof e=="boolean")){if(typeof e=="string"||typeof e=="number")return{t:e.toString(),d:!0};if("vR"in e&&(e={tag:e.tag,props:e.props,key:e.key,f:e.f,type:e.tag,ref:e.props.ref,o:e.o||e}),typeof e.tag=="function")e[O]=[0,[]];else{const t=Kr[e.tag];t&&(_e||(_e=Tn("")),e.props.children=[{tag:_e,props:{value:e.n=`http://www.w3.org/${t}`,children:e.props.children}}])}return e}},ln=(e,t)=>{var n,r;(n=t[O][2])==null||n.forEach(([s,o])=>{s.values.push(o)});try{$t(e,t,void 0)}catch{return}if(t.a){delete t.a;return}(r=t[O][2])==null||r.forEach(([s])=>{s.values.pop()}),(e[0]!==1||!e[1])&&Hn(t,t.c,!1)},We=new WeakMap,cn=[],ct=async(e,t)=>{e[5]||(e[5]=[]);const n=We.get(t);n&&n[0](void 0);let r;const s=new Promise(o=>r=o);if(We.set(t,[r,()=>{e[2]?e[2](e,t,o=>{ln(o,t)}).then(()=>r(t)):(ln(e,t),r(t))}]),cn.length)cn.at(-1).add(t);else{await Promise.resolve();const o=We.get(t);o&&(We.delete(t),o[1]())}return s},Yr=(e,t,n)=>({tag:Ue,props:{children:e},key:n,e:t,p:1}),xt=0,He=1,Et=2,kt=3,Rt=new WeakMap,Kt=(e,t)=>!e||!t||e.length!==t.length||t.some((n,r)=>n!==e[r]),es=void 0,un=[],Ke=e=>{var a;const t=()=>typeof e=="function"?e():e,n=Ne.at(-1);if(!n)return[t(),()=>{}];const[,r]=n,s=(a=r[O][1])[xt]||(a[xt]=[]),o=r[O][0]++;return s[o]||(s[o]=[t(),i=>{const l=es,c=s[o];if(typeof i=="function"&&(i=i(c[0])),!Object.is(i,c[0]))if(c[0]=i,un.length){const[d,f]=un.at(-1);Promise.all([d===3?r:ct([d,!1,l],r),f]).then(([h])=>{if(!h||!(d===2||d===3))return;const m=h.vC;requestAnimationFrame(()=>{setTimeout(()=>{m===h.vC&&ct([d===3?1:0,!1,l],h)})})})}else ct([0,!1,l],r)}])},ts=(e,t,n)=>{var c;const r=Ne.at(-1);if(!r)return;const[,s]=r,o=(c=s[O][1])[He]||(c[He]=[]),a=s[O][0]++,[i,,l]=o[a]||(o[a]=[]);if(Kt(i,n)){l&&l();const d=()=>{f[e]=void 0,f[2]=t()},f=[n,void 0,void 0,void 0,void 0];f[e]=d,o[a]=f}},dn=(e,t)=>ts(3,e,t),qt=(e,t)=>{var i;const n=Ne.at(-1);if(!n)return e;const[,r]=n,s=(i=r[O][1])[Et]||(i[Et]=[]),o=r[O][0]++,a=s[o];return Kt(a==null?void 0:a[1],t)?s[o]=[e,t]:e=s[o][0],e},ns=e=>{const t=Rt.get(e);if(t){if(t.length===2)throw t[1];return t[0]}throw e.then(n=>Rt.set(e,[n]),n=>Rt.set(e,[void 0,n])),e},rs=(e,t)=>{var i;const n=Ne.at(-1);if(!n)return e();const[,r]=n,s=(i=r[O][1])[kt]||(i[kt]=[]),o=r[O][0]++,a=s[o];return Kt(a==null?void 0:a[1],t)&&(s[o]=[e(),t]),s[o][0]},ss=Tn({pending:!1,data:null,method:null,action:null}),fn=new Set,os=e=>{fn.add(e),e.finally(()=>fn.delete(e))},Vt=(e,t)=>rs(()=>n=>{let r;e&&(typeof e=="function"?r=e(n)||(()=>{e(null)}):e&&"current"in e&&(e.current=n,r=()=>{e.current=null}));const s=t(n);return()=>{s==null||s(),r==null||r()}},[e]),we=Object.create(null),rt=Object.create(null),nt=(e,t,n,r,s)=>{if(t!=null&&t.itemProp)return{tag:e,props:t,type:e,ref:t.ref};const o=document.head;let{onLoad:a,onError:i,precedence:l,blocking:c,...d}=t,f=null,h=!1;const m=ot[e];let b;if(m.length>0){const w=o.querySelectorAll(e);e:for(const C of w)for(const E of ot[e])if(C.getAttribute(E)===t[E]){f=C;break e}if(!f){const C=m.reduce((E,k)=>t[k]===void 0?E:`${E}-${k}-${t[k]}`,e);h=!rt[C],f=rt[C]||(rt[C]=(()=>{const E=document.createElement(e);for(const k of m)t[k]!==void 0&&E.setAttribute(k,t[k]),t.rel&&E.setAttribute("rel",t.rel);return E})())}}else b=o.querySelectorAll(e);l=r?l??"":void 0,r&&(d[at]=l);const y=qt(w=>{if(m.length>0){let C=!1;for(const E of o.querySelectorAll(e)){if(C&&E.getAttribute(at)!==l){o.insertBefore(w,E);return}E.getAttribute(at)===l&&(C=!0)}o.appendChild(w)}else if(b){let C=!1;for(const E of b)if(E===w){C=!0;break}C||o.insertBefore(w,o.contains(b[0])?b[0]:o.querySelector(e)),b=void 0}},[l]),g=Vt(t.ref,w=>{var k;const C=m[0];if(n===2&&(w.innerHTML=""),(h||b)&&y(w),!i&&!a)return;let E=we[k=w.getAttribute(C)]||(we[k]=new Promise((X,ce)=>{w.addEventListener("load",X),w.addEventListener("error",ce)}));a&&(E=E.then(a)),i&&(E=E.catch(i)),E.catch(()=>{})});if(s&&c==="render"){const w=ot[e][0];if(t[w]){const C=t[w],E=we[C]||(we[C]=new Promise((k,X)=>{y(f),f.addEventListener("load",k),f.addEventListener("error",X)}));ns(E)}}const v={tag:e,type:e,props:{...d,ref:g},ref:g};return v.p=n,f&&(v.e=f),Yr(v,o)},as=e=>{const t=qr(),n=t&&Se(t);return n!=null&&n.endsWith("svg")?{tag:"title",props:e,type:"title",ref:e.ref}:nt("title",e,void 0,!1,!1)},is=e=>!e||["src","async"].some(t=>!e[t])?{tag:"script",props:e,type:"script",ref:e.ref}:nt("script",e,1,!1,!0),ls=e=>!e||!["href","precedence"].every(t=>t in e)?{tag:"style",props:e,type:"style",ref:e.ref}:(e["data-href"]=e.href,delete e.href,nt("style",e,2,!0,!0)),cs=e=>!e||["onLoad","onError"].some(t=>t in e)||e.rel==="stylesheet"&&(!("precedence"in e)||"disabled"in e)?{tag:"link",props:e,type:"link",ref:e.ref}:nt("link",e,1,"precedence"in e,!0),us=e=>nt("meta",e,void 0,!1,!1),Gn=Symbol(),ds=e=>{const{action:t,...n}=e;typeof t!="function"&&(n.action=t);const[r,s]=Ke([null,!1]),o=qt(async c=>{const d=c.isTrusted?t:c.detail[Gn];if(typeof d!="function")return;c.preventDefault();const f=new FormData(c.target);s([f,!0]);const h=d(f);h instanceof Promise&&(os(h),await h),s([null,!0])},[]),a=Vt(e.ref,c=>(c.addEventListener("submit",o),()=>{c.removeEventListener("submit",o)})),[i,l]=r;return r[1]=!1,{tag:ss,props:{value:{pending:i!==null,data:i,method:i?"post":null,action:i?t:null},children:{tag:"form",props:{...n,ref:a},type:"form",ref:a}},f:l}},zn=(e,{formAction:t,...n})=>{if(typeof t=="function"){const r=qt(s=>{s.preventDefault(),s.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[Gn]:t}}))},[]);n.ref=Vt(n.ref,s=>(s.addEventListener("click",r),()=>{s.removeEventListener("click",r)}))}return{tag:e,props:n,type:e,ref:n.ref}},fs=e=>zn("input",e),hs=e=>zn("button",e);Object.assign(Nt,{title:as,script:is,style:ls,link:cs,meta:us,form:ds,input:fs,button:hs});yt(null);new TextEncoder;var ps=yt(null),ms=(e,t,n,r)=>(s,o)=>{const a="<!DOCTYPE html>",i=n?_t(c=>n(c,e),{Layout:t,...o},s):s,l=Pr`${M(a)}${_t(ps.Provider,{value:e},i)}`;return e.html(l)},gs=(e,t)=>function(r,s){const o=r.getLayout()??Te;return e&&r.setLayout(a=>e({...a,Layout:o},r)),r.setRenderer(ms(r,o,e)),s()};const vs=gs(({children:e})=>p("html",{lang:"en",children:[p("head",{children:[p("meta",{charset:"utf-8"}),p("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),p("link",{href:"/favicon.ico",rel:"icon"}),p(Bo,{href:"/app/style.css",rel:"stylesheet"}),p(Ho,{src:"/app/client.ts",async:!0})]}),p("body",{children:e})]})),bs=Object.freeze(Object.defineProperty({__proto__:null,default:vs},Symbol.toStringTag,{value:"Module"}));function Un(e){return[/github\.com\/[^\/]+\/[^\/]+/,/qiita\.com\/[^\/]+\/items/,/qiita\.com\/tags/,/zenn\.dev\/[^\/]+\/articles/,/zenn\.dev\/[^\/]+\/books/,/zenn\.dev\/topics/,/dev\.classmethod\.jp\/articles/,/speakerdeck\.com\/[^\/]+\/[^\/]+/,/x\.com\/[^\/]+\/status/,/x\.com\/search/,/docswell\.com\/slide/].some(r=>r.test(e))?!1:[/https?:\/\/dev\.classmethod\.jp\/author\/[a-zA-Z0-9_-]+$/,/https?:\/\/github\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/zenn\.dev\/[a-zA-Z0-9_-]+$/,/https?:\/\/speakerdeck\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/x\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/qiita\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/www\.docswell\.com\/user\/[a-zA-Z0-9_-]+$/].some(r=>r.test(e))}function ys(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n;for(;(n=t.exec(e))!==null;){const r=n[2];if(Un(r))return!0}return!1}function Ss(e,t){if(!ys(e))return e;const n={"dev.classmethod.jp":{name:"DevelopersIO",logo:"amazonaws",color:"orange",usernameRegex:/dev\.classmethod\.jp\/author\/([^\/\s\)]+)/},"github.com":{name:"GitHub",logo:"github",color:"black",usernameRegex:/github\.com\/([^\/\s\)]+)/},"zenn.dev":{name:"Zenn",logo:"zenn",color:"blue",usernameRegex:/zenn\.dev\/([^\/\s\)]+)/},"speakerdeck.com":{name:"Speaker--Deck",logo:"speakerdeck",color:"green",usernameRegex:/speakerdeck\.com\/([^\/\s\)]+)/},"x.com":{name:"X",logo:"x",color:"black",usernameRegex:/x\.com\/([^\/\s\)]+)/},"qiita.com":{name:"Qiita",logo:"qiita",color:"brightgreen",usernameRegex:/qiita\.com\/([^\/\s\)]+)/},"www.docswell.com":{name:"Docswell",logo:"readthedocs",color:"blue",usernameRegex:/www\.docswell\.com\/user\/([^\/\s\)]+)/}};let r=e;return Object.entries(n).forEach(([s,o])=>{const a=new RegExp(`\\[([^\\]]+)\\]\\(https?://${s.replace(/\./g,"\\.")}[^\\)]*\\)`,"g");r=r.replace(a,i=>{try{const l=i.match(/\[([^\]]+)\]\(([^)]+)\)/);if(!l)return i;const c=l[2];if(!Un(c))return i;const d=i.match(o.usernameRegex),f=d?d[1]:"";if(f){const h=encodeURIComponent(`${o.name}-@${f}`),m=encodeURIComponent(o.logo),b=encodeURIComponent(o.color),y=`https://img.shields.io/badge/${h}-${b}?style=flat&logo=${m}`;return`<a href="${c}" target="_blank" rel="noopener"><img src="${y}" alt="${o.name}" /></a>`}else{const h=encodeURIComponent(o.name),m=encodeURIComponent(o.logo),b=encodeURIComponent(o.color),y=`https://img.shields.io/badge/${h}-${b}?style=flat&logo=${m}`;return`<a href="${c}" target="_blank" rel="noopener"><img src="${y}" alt="${o.name}" /></a>`}}catch(l){return console.warn("Error converting account link:",l),i}})}),r}const ws="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-200 transition-colors duration-200",Ot=/^\d+\.\s/;function As(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function hn(e,t){return`<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">${t}</span><span>${Fe(e)}</span></li>`}function Kn(e){return e.replace(/\*\*([^*]+)\*\*/g,'<strong class="font-bold">$1</strong>').replace(new RegExp("(?<!\\*)\\*([^*]+)\\*(?!\\*)","g"),'<em class="italic">$1</em>').replace(/`([^`]+)`/g,`<code class="${ws}">$1</code>`)}function Fe(e){return Kn(e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'))}function Cs(e){var s;const t=e.trim().split(`
`);let n="",r=0;for(;r<t.length;){const o=t[r].trim();if(o==="---"){n+='<hr class="my-6 border-t border-gray-200">',r++;continue}if(o.startsWith("```")){let a="";for(r++;r<t.length;){const l=t[r];if(l.trim()==="```"||l.trim().startsWith("```"))break;a+=l+`
`,r++}const i=As(a.trim());n+=`<div class="my-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"><pre class="p-4 overflow-x-auto bg-gray-50"><code class="text-sm text-gray-800 font-mono leading-6 whitespace-pre-wrap">${i}</code></pre></div>`,r<t.length&&r++;continue}if(o.startsWith("> ")){let a="";for(;r<t.length&&t[r].trim().startsWith("> ");)a+=t[r].trim().substring(2)+" ",r++;n+=`<blockquote class="my-4 pl-4 border-l-4 border-blue-500 bg-blue-50 py-3 pr-4 rounded-r-lg"><p class="text-gray-700 italic">${Fe(a.trim())}</p></blockquote>`;continue}if(Ot.test(o)){let a=1;for(;r<t.length&&Ot.test(t[r].trim());){const i=t[r].trim().replace(Ot,"");n+=hn(i,`${a}.`),a++,r++}continue}if(o.startsWith("- ")){const a=o.substring(2);n+=hn(a,"•"),r++;continue}if(o.includes("|")&&((s=t[r+1])!=null&&s.includes("---"))){const a=o.split("|").map(i=>i.trim()).filter(i=>i);if(t[r+1].includes("---")){for(n+='<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>',a.forEach(i=>{n+=`<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${Fe(i)}</th>`}),n+='</tr></thead><tbody class="divide-y divide-gray-200">',r+=2;r<t.length&&t[r].trim().includes("|");){const i=t[r].trim().split("|").map(l=>l.trim()).filter(l=>l);i.length>0&&(n+='<tr class="hover:bg-gray-50">',i.forEach(l=>{n+=`<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${Fe(l)}</td>`}),n+="</tr>"),r++}n+="</tbody></table></div>";continue}}o?n+=Fe(o)+"<br>":n+="<br>",r++}return n}function xs(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:speakerdeck\.com\/player\/|www\.docswell\.com\/slide\/[^/]+\/embed?)[^)]+)\)/g;return e.replace(t,(n,r,s)=>{let o=r,a="";return s.includes("speakerdeck.com")?(o=r.replace(/\s*\\?\s*-\s*Speaker\s*Deck\s*$/i,""),a="speakerdeck-iframe"):s.includes("docswell.com")&&(o=r.replace(/\s*\|\s*ドクセル\s*$/i,""),a="docswell-iframe"),`<iframe class="${a}" frameborder="0" src="${s}" title="${o}" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`})}function Es(e){const t=/- \[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,n=/\[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,r="width: 100%; height: auto; aspect-ratio: 560 / 315; border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;";let s=e.replace(t,(o,a,i)=>`<iframe style="${r}" src="${i}" title="${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);return s=s.replace(n,(o,a,i)=>`<iframe style="${r}" src="${i}" title="${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`),s}function ks(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:dev\.classmethod\.jp\/articles\/[^)]+|qiita\.com\/[^\/]+\/items\/[^)]+|zenn\.dev\/[^\/]+\/articles\/[^)]+))\)/g;return e.replace(t,(n,r,s)=>`<iframe class="hatenablogcard" style="width:100%;height:155px;" title="${r}" src="https://hatenablog-parts.com/embed?url=${encodeURIComponent(s)}" width="300" height="150" frameborder="0" scrolling="no"></iframe>`)}function Me(e,t){if(!e.trim())return"";let n=Es(e);return n=xs(n),n=ks(n),n=Ss(n),n=Cs(n),Kn(n)}function Rs(e){const t=e.split(`
`),n=[];let r=null,s=0;for(const o of t){const a=o.match(/^(#+)\s+(.+)/);if(a){r&&n.push(r);const i=a[1].length;let l=a[2];l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'),r={title:l,content:"",level:i,id:`section-${++s}`}}else r?r.content+=o+`
`:n.length===0&&(r={title:"",content:o+`
`,level:0,id:"intro"})}return r&&n.push(r),n}const Os="component-name",Ds="component-export",Ps="data-serialized-props",Is="data-hono-template",le="__importing_islands",Wt=Symbol(),Ft=Symbol(),Dt=yt({[Wt]:!1,[Ft]:!1}),qn=e=>Array.isArray(e)?e.some(qn):typeof e=="object"&&zr(e),Jt=({componentName:e,componentExport:t,Component:n,props:r})=>{const s={},o={};for(const i in r){const l=r[i];qn(l)?s[i]=l:o[i]=l}const a=Se(Dt);return a[Ft]||!a[Wt]?p("honox-island",{[Os]:e,[Ds]:t||void 0,[Ps]:JSON.stringify(o),children:[p(Dt.Provider,{value:{...a,[Wt]:!0},children:p(n,{...r})}),Object.entries(s).map(([i,l])=>_t("template",{[Is]:i,key:i},p(Dt.Provider,{value:{...a,[Ft]:!0},children:l})))]}):p(n,{...r})},Vn=({title:e,level:t,className:n})=>{const s=`${(o=>{switch(o){case 2:return"text-2xl font-bold text-gray-800";case 3:return"text-xl font-semibold text-blue-900";case 4:return"text-lg font-semibold text-gray-800";default:return"text-3xl font-bold text-gray-900"}})(t)} ${n||""}`;return p("h2",{className:s,dangerouslySetInnerHTML:{__html:e}})},js=({title:e,level:t,isOpen:n,onClick:r})=>p("button",{onClick:r,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${n?"rotate-90":""}`,children:"▶"}),p(Vn,{title:e,level:t})]}),Ls=function({title:e,content:t,level:n,defaultOpen:r=!1}){const[s,o]=Ke(r);return n!==4?p("div",{className:"mb-6",children:[p(Vn,{title:e,level:n,className:"mb-4"}),p("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:Me(t)}})]}):p("div",{className:"mb-6 border border-gray-200 rounded-lg",children:[p(js,{title:e,level:n,isOpen:s,onClick:()=>o(!s)}),s&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:Me(t)}})})]})},Ts=function(e){return p(Jt,{componentName:"/app/islands/CollapsibleSection.tsx",Component:Ls,props:e})},Ns=e=>{const[t,n]=Ke({}),[r,s]=Ke(!1);return dn(()=>{const i={};e.forEach(l=>{i[l.id]=!1}),n(i)},[e]),dn(()=>{const i=Object.values(t).filter(Boolean).length;s(i===e.length&&e.length>0)},[t,e.length]),{toggleStates:t,allOpen:r,handleToggle:i=>{n(l=>({...l,[i]:!l[i]}))},handleBulkToggle:()=>{const i=!r,l={};e.forEach(c=>{l[c.id]=i}),n(l),s(i)}}},_s=({allOpen:e,onClick:t})=>p("button",{onClick:t,className:`px-3 py-1 text-sm rounded-md transition-colors flex items-center gap-2 ${e?"bg-red-100 hover:bg-red-200 text-red-700":"bg-blue-100 hover:bg-blue-200 text-blue-700"}`,children:[p("span",{className:"text-xs",children:e?"全て閉じる":"全て開く"}),p("span",{className:`transform transition-transform ${e?"rotate-180":""}`,children:"▼"})]}),Ms=({title:e,hasSubsections:t,allOpen:n,onBulkToggle:r})=>p("div",{className:"flex items-center justify-between mb-4",children:[p("h3",{className:"text-xl font-semibold text-blue-900",dangerouslySetInnerHTML:{__html:e}}),t&&p(_s,{allOpen:n,onClick:r})]}),$s=({subsection:e,isOpen:t,onToggle:n})=>p("div",{className:"mb-4 border border-gray-200 rounded-lg",children:[p("button",{onClick:n,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${t?"rotate-90":""}`,children:"▶"}),p("span",{className:"text-lg font-semibold text-gray-800",dangerouslySetInnerHTML:{__html:e.title}})]}),t&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:Me(e.content,e.title)}})})]}),Ws=function({section:e,subsections:t}){const{toggleStates:n,allOpen:r,handleToggle:s,handleBulkToggle:o}=Ns(t);return p("div",{className:"mb-8",children:[p(Ms,{title:e.title,hasSubsections:t.length>0,allOpen:r,onBulkToggle:o}),e.content.trim()&&p("div",{className:"prose max-w-none mb-6",dangerouslySetInnerHTML:{__html:Me(e.content,e.title)}}),t.map(a=>p($s,{subsection:a,isOpen:n[a.id]||!1,onToggle:()=>s(a.id)},a.id))]})},Fs=function(e){return p(Jt,{componentName:"/app/islands/SectionGroup.tsx",Component:Ws,props:e})},Hs=()=>p("svg",{className:"animate-spin h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[p("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),Bs=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:p("path",{d:"M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"})}),Gs=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:p("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})}),pn=({type:e,isLoading:t,onClick:n})=>{const r=e==="pdf";return p("button",{onClick:n,disabled:t,className:`flex items-center justify-center gap-2 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-colors duration-200 w-[280px] ${r?"bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300":"bg-slate-500 hover:bg-slate-600 disabled:bg-slate-300"}`,children:t?p(Te,{children:[p(Hs,{}),p("span",{children:"ダウンロード中..."})]}):p(Te,{children:[r?p(Gs,{}):p(Bs,{}),p("span",{children:r?"PDFをダウンロード":"Markdownをダウンロード"})]})})},zs=function(){const[e,t]=Ke(null),n=async r=>{t(r);try{const s=r==="markdown"?"README.md":"README.pdf",o=`/resume/${s}`,a=document.createElement("a");a.href=o,a.download=s,document.body.appendChild(a),a.click(),document.body.removeChild(a)}catch(s){console.error("Download failed:",s)}finally{t(null)}};return p("div",{className:"flex flex-col sm:flex-row gap-3 items-center justify-center mb-8",children:[p(pn,{type:"markdown",isLoading:e==="markdown",onClick:()=>n("markdown")}),p(pn,{type:"pdf",isLoading:e==="pdf",onClick:()=>n("pdf")})]})},Us=function(e){return p(Jt,{componentName:"/app/islands/DownloadSection.tsx",Component:zs,props:e})},Ks=`## 基本情報

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
`;function qs(){const e=Rs(Ks),n=(r=>{const s=[];let o=null,a=[];return r.forEach(i=>{!i.title&&i.level===0?s.push({type:"intro",section:i}):i.level===1||i.level===2?(o&&(s.push({type:"h3-group",section:o,subsections:a}),o=null,a=[]),s.push({type:"regular",section:i})):i.level===3?(o&&s.push({type:"h3-group",section:o,subsections:a}),o=i,a=[]):i.level===4&&o?a.push(i):(o&&(s.push({type:"h3-group",section:o,subsections:a}),o=null,a=[]),s.push({type:"regular",section:i}))}),o&&s.push({type:"h3-group",section:o,subsections:a}),s})(e);return p("div",{className:"min-h-screen bg-gray-50",children:p("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[p("header",{className:"text-center mb-12",children:[p("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"職務経歴書"}),p(Us,{})]}),p("main",{className:"bg-white rounded-lg shadow-lg p-8",children:n.map((r,s)=>{if(r.type==="intro")return p("div",{className:"mb-8",dangerouslySetInnerHTML:{__html:`<p class="mb-4">${Me(r.section.content)}</p>`}},r.section.id);if(r.type==="h3-group")return p(Fs,{section:r.section,subsections:r.subsections||[]},r.section.id);{const o=Me(r.section.content);return p(Ts,{title:r.section.title,content:o,level:r.section.level,defaultOpen:r.section.level<=2},r.section.id)}})}),p("footer",{className:"text-center mt-12 text-gray-500",children:[p("p",{children:"Built with HonoX on GitHub Pages"}),p("p",{className:"mt-2",children:["Generated by:"," ",p("a",{href:"https://zenn.dev/tsukuboshi/articles/honox-resume",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 underline",children:"Markdownで書いた職務経歴書を良い感じのWebサイトとPDFに自動変換するツールを作ってみた"})]})]})]})})}const Vs=!0,Js=Object.freeze(Object.defineProperty({__proto__:null,__importing_islands:Vs,default:qs},Symbol.toStringTag,{value:"Module"}));var mn=(e,t,n)=>(r,s)=>{let o=-1;return a(0);async function a(i){if(i<=o)throw new Error("next() called multiple times");o=i;let l,c=!1,d;if(e[i]?(d=e[i][0][0],r.req.routeIndex=i):d=i===e.length&&s||void 0,d)try{l=await d(r,()=>a(i+1))}catch(f){if(f instanceof Error&&t)r.error=f,l=await t(f,r),c=!0;else throw f}else r.finalized===!1&&n&&(l=await n(r));return l&&(r.finalized===!1||c)&&(r.res=l),r}},Zs=Symbol(),Xs=async(e,t=Object.create(null))=>{const{all:n=!1,dot:r=!1}=t,o=(e instanceof er?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?Qs(e,{all:n,dot:r}):{}};async function Qs(e,t){const n=await e.formData();return n?Ys(n,t):{}}function Ys(e,t){const n=Object.create(null);return e.forEach((r,s)=>{t.all||s.endsWith("[]")?eo(n,s,r):n[s]=r}),t.dot&&Object.entries(n).forEach(([r,s])=>{r.includes(".")&&(to(n,r,s),delete n[r])}),n}var eo=(e,t,n)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]:t.endsWith("[]")?e[t]=[n]:e[t]=n},to=(e,t,n)=>{let r=e;const s=t.split(".");s.forEach((o,a)=>{a===s.length-1?r[o]=n:((!r[o]||typeof r[o]!="object"||Array.isArray(r[o])||r[o]instanceof File)&&(r[o]=Object.create(null)),r=r[o])})},Jn=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},no=e=>{const{groups:t,path:n}=ro(e),r=Jn(n);return so(r,t)},ro=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(n,r)=>{const s=`@${r}`;return t.push([s,n]),s}),{groups:t,path:e}},so=(e,t)=>{for(let n=t.length-1;n>=0;n--){const[r]=t[n];for(let s=e.length-1;s>=0;s--)if(e[s].includes(r)){e[s]=e[s].replace(r,t[n][1]);break}}return e},st={},oo=(e,t)=>{if(e==="*")return"*";const n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){const r=`${e}#${t}`;return st[r]||(n[2]?st[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,n[1],new RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],new RegExp(`^${n[2]}$`)]:st[r]=[e,n[1],!0]),st[r]}return null},Zt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,n=>{try{return t(n)}catch{return n}})}},ao=e=>Zt(e,decodeURI),Zn=e=>{const t=e.url,n=t.indexOf("/",t.indexOf(":")+4);let r=n;for(;r<t.length;r++){const s=t.charCodeAt(r);if(s===37){const o=t.indexOf("?",r),a=t.indexOf("#",r),i=o===-1?a===-1?void 0:a:a===-1?o:Math.min(o,a),l=t.slice(n,i);return ao(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(s===63||s===35)break}return t.slice(n,r)},io=e=>{const t=Zn(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Ce=(e,t,...n)=>(n.length&&(t=Ce(t,...n)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Xn=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),n=[];let r="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))r+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){n.length===0&&r===""?n.push("/"):n.push(r);const o=s.replace("?","");r+="/"+o,n.push(r)}else r+="/"+s}),n.filter((s,o,a)=>a.indexOf(s)===o)},Pt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Zt(e,Yn):e):e,Qn=(e,t,n)=>{let r;if(!n&&t&&!/[%+]/.test(t)){let a=e.indexOf("?",8);if(a===-1)return;for(e.startsWith(t,a+1)||(a=e.indexOf(`&${t}`,a+1));a!==-1;){const i=e.charCodeAt(a+t.length+1);if(i===61){const l=a+t.length+2,c=e.indexOf("&",l);return Pt(e.slice(l,c===-1?void 0:c))}else if(i==38||isNaN(i))return"";a=e.indexOf(`&${t}`,a+1)}if(r=/[%+]/.test(e),!r)return}const s={};r??(r=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const a=e.indexOf("&",o+1);let i=e.indexOf("=",o);i>a&&a!==-1&&(i=-1);let l=e.slice(o+1,i===-1?a===-1?void 0:a:i);if(r&&(l=Pt(l)),o=a,l==="")continue;let c;i===-1?c="":(c=e.slice(i+1,a===-1?void 0:a),r&&(c=Pt(c))),n?(s[l]&&Array.isArray(s[l])||(s[l]=[]),s[l].push(c)):s[l]??(s[l]=c)}return t?s[t]:s},lo=Qn,co=(e,t)=>Qn(e,t,!0),Yn=decodeURIComponent,gn=e=>Zt(e,Yn),ke,_,Z,tr,nr,Ht,te,Sn,er=(Sn=class{constructor(e,t="/",n=[[]]){x(this,Z);S(this,"raw");x(this,ke);x(this,_);S(this,"routeIndex",0);S(this,"path");S(this,"bodyCache",{});x(this,te,e=>{const{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;const s=Object.keys(t)[0];return s?t[s].then(o=>(s==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=n[e]()});this.raw=e,this.path=t,A(this,_,n),A(this,ke,{})}param(e){return e?R(this,Z,tr).call(this,e):R(this,Z,nr).call(this)}query(e){return lo(this.url,e)}queries(e){return co(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((n,r)=>{t[r]=n}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Xs(this,e))}json(){return u(this,te).call(this,"text").then(e=>JSON.parse(e))}text(){return u(this,te).call(this,"text")}arrayBuffer(){return u(this,te).call(this,"arrayBuffer")}blob(){return u(this,te).call(this,"blob")}formData(){return u(this,te).call(this,"formData")}addValidatedData(e,t){u(this,ke)[e]=t}valid(e){return u(this,ke)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Zs](){return u(this,_)}get matchedRoutes(){return u(this,_)[0].map(([[,e]])=>e)}get routePath(){return u(this,_)[0].map(([[,e]])=>e)[this.routeIndex].path}},ke=new WeakMap,_=new WeakMap,Z=new WeakSet,tr=function(e){const t=u(this,_)[0][this.routeIndex][1][e],n=R(this,Z,Ht).call(this,t);return n&&/\%/.test(n)?gn(n):n},nr=function(){const e={},t=Object.keys(u(this,_)[0][this.routeIndex][1]);for(const n of t){const r=R(this,Z,Ht).call(this,u(this,_)[0][this.routeIndex][1][n]);r!==void 0&&(e[n]=/\%/.test(r)?gn(r):r)}return e},Ht=function(e){return u(this,_)[1]?u(this,_)[1][e]:e},te=new WeakMap,Sn),uo="text/plain; charset=UTF-8",It=(e,t)=>({"Content-Type":e,...t}),qe,Ve,K,Re,q,N,Je,Oe,De,pe,Ze,Xe,ne,xe,wn,fo=(wn=class{constructor(e,t){x(this,ne);x(this,qe);x(this,Ve);S(this,"env",{});x(this,K);S(this,"finalized",!1);S(this,"error");x(this,Re);x(this,q);x(this,N);x(this,Je);x(this,Oe);x(this,De);x(this,pe);x(this,Ze);x(this,Xe);S(this,"render",(...e)=>(u(this,Oe)??A(this,Oe,t=>this.html(t)),u(this,Oe).call(this,...e)));S(this,"setLayout",e=>A(this,Je,e));S(this,"getLayout",()=>u(this,Je));S(this,"setRenderer",e=>{A(this,Oe,e)});S(this,"header",(e,t,n)=>{this.finalized&&A(this,N,new Response(u(this,N).body,u(this,N)));const r=u(this,N)?u(this,N).headers:u(this,pe)??A(this,pe,new Headers);t===void 0?r.delete(e):n!=null&&n.append?r.append(e,t):r.set(e,t)});S(this,"status",e=>{A(this,Re,e)});S(this,"set",(e,t)=>{u(this,K)??A(this,K,new Map),u(this,K).set(e,t)});S(this,"get",e=>u(this,K)?u(this,K).get(e):void 0);S(this,"newResponse",(...e)=>R(this,ne,xe).call(this,...e));S(this,"body",(e,t,n)=>R(this,ne,xe).call(this,e,t,n));S(this,"text",(e,t,n)=>!u(this,pe)&&!u(this,Re)&&!t&&!n&&!this.finalized?new Response(e):R(this,ne,xe).call(this,e,t,It(uo,n)));S(this,"json",(e,t,n)=>R(this,ne,xe).call(this,JSON.stringify(e),t,It("application/json",n)));S(this,"html",(e,t,n)=>{const r=s=>R(this,ne,xe).call(this,s,t,It("text/html; charset=UTF-8",n));return typeof e=="object"?In(e,On.Stringify,!1,{}).then(r):r(e)});S(this,"redirect",(e,t)=>{const n=String(e);return this.header("Location",/[^\x00-\xFF]/.test(n)?encodeURI(n):n),this.newResponse(null,t??302)});S(this,"notFound",()=>(u(this,De)??A(this,De,()=>new Response),u(this,De).call(this,this)));A(this,qe,e),t&&(A(this,q,t.executionCtx),this.env=t.env,A(this,De,t.notFoundHandler),A(this,Xe,t.path),A(this,Ze,t.matchResult))}get req(){return u(this,Ve)??A(this,Ve,new er(u(this,qe),u(this,Xe),u(this,Ze))),u(this,Ve)}get event(){if(u(this,q)&&"respondWith"in u(this,q))return u(this,q);throw Error("This context has no FetchEvent")}get executionCtx(){if(u(this,q))return u(this,q);throw Error("This context has no ExecutionContext")}get res(){return u(this,N)||A(this,N,new Response(null,{headers:u(this,pe)??A(this,pe,new Headers)}))}set res(e){if(u(this,N)&&e){e=new Response(e.body,e);for(const[t,n]of u(this,N).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=u(this,N).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of r)e.headers.append("set-cookie",s)}else e.headers.set(t,n)}A(this,N,e),this.finalized=!0}get var(){return u(this,K)?Object.fromEntries(u(this,K)):{}}},qe=new WeakMap,Ve=new WeakMap,K=new WeakMap,Re=new WeakMap,q=new WeakMap,N=new WeakMap,Je=new WeakMap,Oe=new WeakMap,De=new WeakMap,pe=new WeakMap,Ze=new WeakMap,Xe=new WeakMap,ne=new WeakSet,xe=function(e,t,n){const r=u(this,N)?new Headers(u(this,N).headers):u(this,pe)??new Headers;if(typeof t=="object"&&"headers"in t){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[a,i]of o)a.toLowerCase()==="set-cookie"?r.append(a,i):r.set(a,i)}if(n)for(const[o,a]of Object.entries(n))if(typeof a=="string")r.set(o,a);else{r.delete(o);for(const i of a)r.append(o,i)}const s=typeof t=="number"?t:(t==null?void 0:t.status)??u(this,Re);return new Response(e,{status:s,headers:r})},wn),P="ALL",ho="all",po=["get","post","put","delete","options","patch"],rr="Can not add a route since the matcher is already built.",sr=class extends Error{},mo=e=>e.text("404 Not Found",404),vn=(e,t)=>{if("getResponse"in e){const n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text("Internal Server Error",500)},W,I,or,F,fe,ut,dt,Pe,go=(Pe=class{constructor(t={}){x(this,I);S(this,"get");S(this,"post");S(this,"put");S(this,"delete");S(this,"options");S(this,"patch");S(this,"all");S(this,"on");S(this,"use");S(this,"router");S(this,"getPath");S(this,"_basePath","/");x(this,W,"/");S(this,"routes",[]);x(this,F,mo);S(this,"errorHandler",vn);S(this,"onError",t=>(this.errorHandler=t,this));S(this,"notFound",t=>(A(this,F,t),this));S(this,"fetch",(t,...n)=>R(this,I,dt).call(this,t,n[1],n[0],t.method));S(this,"request",(t,n,r,s)=>t instanceof Request?this.fetch(n?new Request(t,n):t,r,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Ce("/",t)}`,n),r,s)));S(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(R(this,I,dt).call(this,t.request,t,void 0,t.request.method))})});[...po,ho].forEach(o=>{this[o]=(a,...i)=>(typeof a=="string"?A(this,W,a):R(this,I,fe).call(this,o,u(this,W),a),i.forEach(l=>{R(this,I,fe).call(this,o,u(this,W),l)}),this)}),this.on=(o,a,...i)=>{for(const l of[a].flat()){A(this,W,l);for(const c of[o].flat())i.map(d=>{R(this,I,fe).call(this,c.toUpperCase(),u(this,W),d)})}return this},this.use=(o,...a)=>(typeof o=="string"?A(this,W,o):(A(this,W,"*"),a.unshift(o)),a.forEach(i=>{R(this,I,fe).call(this,P,u(this,W),i)}),this);const{strict:r,...s}=t;Object.assign(this,s),this.getPath=r??!0?t.getPath??Zn:io}route(t,n){const r=this.basePath(t);return n.routes.map(s=>{var a;let o;n.errorHandler===vn?o=s.handler:(o=async(i,l)=>(await mn([],n.errorHandler)(i,()=>s.handler(i,l))).res,o[Lt]=s.handler),R(a=r,I,fe).call(a,s.method,s.path,o)}),this}basePath(t){const n=R(this,I,or).call(this);return n._basePath=Ce(this._basePath,t),n}mount(t,n,r){let s,o;r&&(typeof r=="function"?o=r:(o=r.optionHandler,r.replaceRequest===!1?s=l=>l:s=r.replaceRequest));const a=o?l=>{const c=o(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};s||(s=(()=>{const l=Ce(this._basePath,t),c=l==="/"?0:l.length;return d=>{const f=new URL(d.url);return f.pathname=f.pathname.slice(c)||"/",new Request(f,d)}})());const i=async(l,c)=>{const d=await n(s(l.req.raw),...a(l));if(d)return d;await c()};return R(this,I,fe).call(this,P,Ce(t,"*"),i),this}},W=new WeakMap,I=new WeakSet,or=function(){const t=new Pe({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,A(t,F,u(this,F)),t.routes=this.routes,t},F=new WeakMap,fe=function(t,n,r){t=t.toUpperCase(),n=Ce(this._basePath,n);const s={basePath:this._basePath,path:n,method:t,handler:r};this.router.add(t,n,[r,s]),this.routes.push(s)},ut=function(t,n){if(t instanceof Error)return this.errorHandler(t,n);throw t},dt=function(t,n,r,s){if(s==="HEAD")return(async()=>new Response(null,await R(this,I,dt).call(this,t,n,r,"GET")))();const o=this.getPath(t,{env:r}),a=this.router.match(s,o),i=new fo(t,{path:o,matchResult:a,env:r,executionCtx:n,notFoundHandler:u(this,F)});if(a[0].length===1){let c;try{c=a[0][0][0][0](i,async()=>{i.res=await u(this,F).call(this,i)})}catch(d){return R(this,I,ut).call(this,d,i)}return c instanceof Promise?c.then(d=>d||(i.finalized?i.res:u(this,F).call(this,i))).catch(d=>R(this,I,ut).call(this,d,i)):c??u(this,F).call(this,i)}const l=mn(a[0],this.errorHandler,u(this,F));return(async()=>{try{const c=await l(i);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return R(this,I,ut).call(this,c,i)}})()},Pe),ar=[];function vo(e,t){const n=this.buildAllMatchers(),r=(s,o)=>{const a=n[s]||n[P],i=a[2][o];if(i)return i;const l=o.match(a[0]);if(!l)return[[],ar];const c=l.indexOf("",1);return[a[1][c],l]};return this.match=r,r(e,t)}var gt="[^/]+",Be=".*",Ge="(?:|/.*)",Ee=Symbol(),bo=new Set(".\\+*[^]$()");function yo(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Be||e===Ge?1:t===Be||t===Ge?-1:e===gt?1:t===gt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var me,ge,H,ye,So=(ye=class{constructor(){x(this,me);x(this,ge);x(this,H,Object.create(null))}insert(t,n,r,s,o){if(t.length===0){if(u(this,me)!==void 0)throw Ee;if(o)return;A(this,me,n);return}const[a,...i]=t,l=a==="*"?i.length===0?["","",Be]:["","",gt]:a==="/*"?["","",Ge]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(l){const d=l[1];let f=l[2]||gt;if(d&&l[2]&&(f===".*"||(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f))))throw Ee;if(c=u(this,H)[f],!c){if(Object.keys(u(this,H)).some(h=>h!==Be&&h!==Ge))throw Ee;if(o)return;c=u(this,H)[f]=new ye,d!==""&&A(c,ge,s.varIndex++)}!o&&d!==""&&r.push([d,u(c,ge)])}else if(c=u(this,H)[a],!c){if(Object.keys(u(this,H)).some(d=>d.length>1&&d!==Be&&d!==Ge))throw Ee;if(o)return;c=u(this,H)[a]=new ye}c.insert(i,n,r,s,o)}buildRegExpStr(){const n=Object.keys(u(this,H)).sort(yo).map(r=>{const s=u(this,H)[r];return(typeof u(s,ge)=="number"?`(${r})@${u(s,ge)}`:bo.has(r)?`\\${r}`:r)+s.buildRegExpStr()});return typeof u(this,me)=="number"&&n.unshift(`#${u(this,me)}`),n.length===0?"":n.length===1?n[0]:"(?:"+n.join("|")+")"}},me=new WeakMap,ge=new WeakMap,H=new WeakMap,ye),vt,Qe,An,wo=(An=class{constructor(){x(this,vt,{varIndex:0});x(this,Qe,new So)}insert(e,t,n){const r=[],s=[];for(let a=0;;){let i=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const c=`@\\${a}`;return s[a]=[c,l],a++,i=!0,c}),!i)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=s.length-1;a>=0;a--){const[i]=s[a];for(let l=o.length-1;l>=0;l--)if(o[l].indexOf(i)!==-1){o[l]=o[l].replace(i,s[a][1]);break}}return u(this,Qe).insert(o,t,r,u(this,vt),n),r}buildRegExp(){let e=u(this,Qe).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,o,a)=>o!==void 0?(n[++t]=Number(o),"$()"):(a!==void 0&&(r[Number(a)]=++t),"")),[new RegExp(`^${e}`),n,r]}},vt=new WeakMap,Qe=new WeakMap,An),Ao=[/^$/,[],Object.create(null)],ft=Object.create(null);function ir(e){return ft[e]??(ft[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,n)=>n?`\\${n}`:"(?:|/.*)")}$`))}function Co(){ft=Object.create(null)}function xo(e){var c;const t=new wo,n=[];if(e.length===0)return Ao;const r=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,f],[h,m])=>d?1:h?-1:f.length-m.length),s=Object.create(null);for(let d=0,f=-1,h=r.length;d<h;d++){const[m,b,y]=r[d];m?s[b]=[y.map(([v])=>[v,Object.create(null)]),ar]:f++;let g;try{g=t.insert(b,f,m)}catch(v){throw v===Ee?new sr(b):v}m||(n[f]=y.map(([v,w])=>{const C=Object.create(null);for(w-=1;w>=0;w--){const[E,k]=g[w];C[E]=k}return[v,C]}))}const[o,a,i]=t.buildRegExp();for(let d=0,f=n.length;d<f;d++)for(let h=0,m=n[d].length;h<m;h++){const b=(c=n[d][h])==null?void 0:c[1];if(!b)continue;const y=Object.keys(b);for(let g=0,v=y.length;g<v;g++)b[y[g]]=i[b[y[g]]]}const l=[];for(const d in a)l[d]=n[a[d]];return[o,l,s]}function Ae(e,t){if(e){for(const n of Object.keys(e).sort((r,s)=>s.length-r.length))if(ir(n).test(t))return[...e[n]]}}var re,se,bt,lr,Cn,Eo=(Cn=class{constructor(){x(this,bt);S(this,"name","RegExpRouter");x(this,re);x(this,se);S(this,"match",vo);A(this,re,{[P]:Object.create(null)}),A(this,se,{[P]:Object.create(null)})}add(e,t,n){var i;const r=u(this,re),s=u(this,se);if(!r||!s)throw new Error(rr);r[e]||[r,s].forEach(l=>{l[e]=Object.create(null),Object.keys(l[P]).forEach(c=>{l[e][c]=[...l[P][c]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=ir(t);e===P?Object.keys(r).forEach(c=>{var d;(d=r[c])[t]||(d[t]=Ae(r[c],t)||Ae(r[P],t)||[])}):(i=r[e])[t]||(i[t]=Ae(r[e],t)||Ae(r[P],t)||[]),Object.keys(r).forEach(c=>{(e===P||e===c)&&Object.keys(r[c]).forEach(d=>{l.test(d)&&r[c][d].push([n,o])})}),Object.keys(s).forEach(c=>{(e===P||e===c)&&Object.keys(s[c]).forEach(d=>l.test(d)&&s[c][d].push([n,o]))});return}const a=Xn(t)||[t];for(let l=0,c=a.length;l<c;l++){const d=a[l];Object.keys(s).forEach(f=>{var h;(e===P||e===f)&&((h=s[f])[d]||(h[d]=[...Ae(r[f],d)||Ae(r[P],d)||[]]),s[f][d].push([n,o-c+l+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(u(this,se)).concat(Object.keys(u(this,re))).forEach(t=>{e[t]||(e[t]=R(this,bt,lr).call(this,t))}),A(this,re,A(this,se,void 0)),Co(),e}},re=new WeakMap,se=new WeakMap,bt=new WeakSet,lr=function(e){const t=[];let n=e===P;return[u(this,re),u(this,se)].forEach(r=>{const s=r[e]?Object.keys(r[e]).map(o=>[o,r[e][o]]):[];s.length!==0?(n||(n=!0),t.push(...s)):e!==P&&t.push(...Object.keys(r[P]).map(o=>[o,r[P][o]]))}),n?xo(t):null},Cn),oe,V,xn,ko=(xn=class{constructor(e){S(this,"name","SmartRouter");x(this,oe,[]);x(this,V,[]);A(this,oe,e.routers)}add(e,t,n){if(!u(this,V))throw new Error(rr);u(this,V).push([e,t,n])}match(e,t){if(!u(this,V))throw new Error("Fatal error");const n=u(this,oe),r=u(this,V),s=n.length;let o=0,a;for(;o<s;o++){const i=n[o];try{for(let l=0,c=r.length;l<c;l++)i.add(...r[l]);a=i.match(e,t)}catch(l){if(l instanceof sr)continue;throw l}this.match=i.match.bind(i),A(this,oe,[i]),A(this,V,void 0);break}if(o===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(u(this,V)||u(this,oe).length!==1)throw new Error("No active router has been determined yet.");return u(this,oe)[0]}},oe=new WeakMap,V=new WeakMap,xn),$e=Object.create(null),ae,T,ve,Ie,j,J,he,je,Ro=(je=class{constructor(t,n,r){x(this,J);x(this,ae);x(this,T);x(this,ve);x(this,Ie,0);x(this,j,$e);if(A(this,T,r||Object.create(null)),A(this,ae,[]),t&&n){const s=Object.create(null);s[t]={handler:n,possibleKeys:[],score:0},A(this,ae,[s])}A(this,ve,[])}insert(t,n,r){A(this,Ie,++Qt(this,Ie)._);let s=this;const o=no(n),a=[];for(let i=0,l=o.length;i<l;i++){const c=o[i],d=o[i+1],f=oo(c,d),h=Array.isArray(f)?f[0]:c;if(h in u(s,T)){s=u(s,T)[h],f&&a.push(f[1]);continue}u(s,T)[h]=new je,f&&(u(s,ve).push(f),a.push(f[1])),s=u(s,T)[h]}return u(s,ae).push({[t]:{handler:r,possibleKeys:a.filter((i,l,c)=>c.indexOf(i)===l),score:u(this,Ie)}}),s}search(t,n){var l;const r=[];A(this,j,$e);let o=[this];const a=Jn(n),i=[];for(let c=0,d=a.length;c<d;c++){const f=a[c],h=c===d-1,m=[];for(let b=0,y=o.length;b<y;b++){const g=o[b],v=u(g,T)[f];v&&(A(v,j,u(g,j)),h?(u(v,T)["*"]&&r.push(...R(this,J,he).call(this,u(v,T)["*"],t,u(g,j))),r.push(...R(this,J,he).call(this,v,t,u(g,j)))):m.push(v));for(let w=0,C=u(g,ve).length;w<C;w++){const E=u(g,ve)[w],k=u(g,j)===$e?{}:{...u(g,j)};if(E==="*"){const D=u(g,T)["*"];D&&(r.push(...R(this,J,he).call(this,D,t,u(g,j))),A(D,j,k),m.push(D));continue}const[X,ce,Q]=E;if(!f&&!(Q instanceof RegExp))continue;const $=u(g,T)[X],L=a.slice(c).join("/");if(Q instanceof RegExp){const D=Q.exec(L);if(D){if(k[ce]=D[0],r.push(...R(this,J,he).call(this,$,t,u(g,j),k)),Object.keys(u($,T)).length){A($,j,k);const G=((l=D[0].match(/\//))==null?void 0:l.length)??0;(i[G]||(i[G]=[])).push($)}continue}}(Q===!0||Q.test(f))&&(k[ce]=f,h?(r.push(...R(this,J,he).call(this,$,t,k,u(g,j))),u($,T)["*"]&&r.push(...R(this,J,he).call(this,u($,T)["*"],t,k,u(g,j)))):(A($,j,k),m.push($)))}}o=m.concat(i.shift()??[])}return r.length>1&&r.sort((c,d)=>c.score-d.score),[r.map(({handler:c,params:d})=>[c,d])]}},ae=new WeakMap,T=new WeakMap,ve=new WeakMap,Ie=new WeakMap,j=new WeakMap,J=new WeakSet,he=function(t,n,r,s){const o=[];for(let a=0,i=u(t,ae).length;a<i;a++){const l=u(t,ae)[a],c=l[n]||l[P],d={};if(c!==void 0&&(c.params=Object.create(null),o.push(c),r!==$e||s&&s!==$e))for(let f=0,h=c.possibleKeys.length;f<h;f++){const m=c.possibleKeys[f],b=d[c.score];c.params[m]=s!=null&&s[m]&&!b?s[m]:r[m]??(s==null?void 0:s[m]),d[c.score]=!0}}return o},je),be,En,Oo=(En=class{constructor(){S(this,"name","TrieRouter");x(this,be);A(this,be,new Ro)}add(e,t,n){const r=Xn(t);if(r){for(let s=0,o=r.length;s<o;s++)u(this,be).insert(e,r[s],n);return}u(this,be).insert(e,t,n)}match(e,t){return u(this,be).search(e,t)}},be=new WeakMap,En),ht=class extends go{constructor(e={}){super(e),this.router=e.router??new ko({routers:[new Eo,new Oo]})}},Do=e=>e;const cr=new Sr,bn=e=>(e=e.replace(/\.tsx?$/g,"").replace(/\.mdx?$/g,"").replace(/^\/?index$/,"/").replace(/\/index$/,"").replace(/\[\.{3}.+\]/,"*").replace(/\((.+?)\)/g,"").replace(/\[(.+?)\]/g,":$1").replace(/\/\//g,"/"),/^\//.test(e)?e:"/"+e),jt=e=>{const t={};for(const[n,r]of Object.entries(e)){const s=n.split("/"),o=s.pop(),a=s.join("/");t[a]||(t[a]={}),o&&(t[a][o]=r)}for(const[n,r]of Object.entries(t)){const s=Object.entries(r).sort(([o],[a])=>o[0]==="["&&a[0]!=="["?1:o[0]!=="["&&a[0]==="["?-1:o.localeCompare(a));t[n]=Object.fromEntries(s)}return t},Po=e=>Object.keys(e).sort((n,r)=>{const s=n.split("/").length,o=r.split("/").length;return s-o||r.localeCompare(n)}).map(n=>({[n]:e[n]})),Io=e=>{const t={};for(const r of Object.keys(e)){const s=r.split("/");s.pop();const o=s.join("/");t[o]||(t[o]=[]),t[o].includes(r)||t[o].push(r)}const n=Object.keys(t).sort((r,s)=>s.length-r.length);for(const r of n)for(const s of n)if(s.startsWith(r)&&s!==r){const o=new Set([...t[s],...t[r]]);t[s]=[...o]}return t},ur="_404.tsx",jo="_error.tsx",Lo=["GET","POST","PUT","DELETE","OPTIONS","PATCH"],To=e=>{const t=e.root,n=new RegExp(`^${t}`),r=g=>bn(g.replace(n,"")),s=new ht;s.use(async function(v,w){await cr.run(v,()=>w())});const o=e.NOT_FOUND,a=jt(o),i=e.ERROR,l=jt(i),c=e.RENDERER,d=Io(c),f=e.MIDDLEWARE,h=e.ROUTES,m=Po(jt(h)),b=(g,v)=>{let w=v[g]??[];const C=k=>(w=v[k.join("/")],w||(k.pop(),k.length&&C(k)),w??[]),E=g.split("/");return w=C(E),w.sort((k,X)=>k.split("/").length-X.split("/").length),w},y={};for(const g of m)for(const[v,w]of Object.entries(g)){const C=new ht;let E=!1;const k=No(v,a);k&&C.use(async(L,D)=>{if(await D(),L.res.status===404){const G=await k(L),z=new Response(G.body,{status:404,headers:G.headers});L.res=z}}),b(v,d).map(L=>{const D=c[L];D[le]&&(E=!0);const z=D.default;z&&C.all("*",z)});const ce=Object.keys(f).find(L=>{const D=v.replaceAll("[","\\[").replaceAll("]","\\]").replaceAll("(","\\(").replaceAll(")","\\)");return new RegExp(D+"/_middleware.tsx?").test(L)});if(ce){const L=f[ce];L.default&&C.use(...L.default)}for(const[L,D]of Object.entries(w)){const G=D[le],z=Do(async function(ee,vr){ee.set(le,G?!0:E),await vr()}),Y=D.default,ue=bn(L);Y&&"fetch"in Y&&(C.use(z),C.route(ue,Y));for(const de of Lo){const ee=D[de];ee&&(C.on(de,ue,z),C.on(de,ue,...ee))}Y&&Array.isArray(Y)&&(C.get(ue,z),C.get(ue,...Y)),typeof Y=="function"&&(C.get(ue,z),C.get(ue,async de=>{const ee=await Y(de);return ee instanceof Response?ee:de.render(ee,D)}))}const Q=Mo(v,l);Q&&(y[v]=Q);for(const[L,D]of Object.entries(y))new RegExp(`^${L}`).test(v)&&D&&C.onError(D);let $=r(v);s.route($,C)}for(const g of m.reverse()){const v=Object.entries(g)[0][0],w=new ht;_o(w,v,a);const C=r(v);s.route(C,w)}return s};function No(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[ur];if(s)return s.default}}function _o(e,t,n){for(const[r,s]of Object.entries(n))if(t===r){const o=s[ur];if(o){const a=o.default;o[le]&&e.use("*",(l,c)=>(l.set(le,!0),c())),e.get("*",l=>(l.status(404),a(l)))}}}function Mo(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[jo];if(s){const o=s.default;if(o)return async(i,l)=>{const c=s[le];return c&&l.set(le,c),l.status(500),o(i,l)}}}}const $o=e=>To({root:"/app/routes",NOT_FOUND:Object.assign({"/app/routes/_404.tsx":kr}),ERROR:Object.assign({"/app/routes/_error.tsx":Or}),RENDERER:Object.assign({"/app/routes/_renderer.tsx":bs}),MIDDLEWARE:Object.assign({}),ROUTES:Object.assign({"/app/routes/index.tsx":Js})}),Wo=({children:e})=>{const t=cr.getStore();if(!t)throw new Error("No context found");return p(Te,{children:t.get(le)&&e})},Fo={"_honox-island-BP7OvDzh.js":{file:"static/honox-island-BP7OvDzh.js",name:"honox-island",imports:["app/client.ts"]},"_index-BJLlL6Rz.js":{file:"static/index-BJLlL6Rz.js",name:"index"},"app/client.ts":{file:"static/client-p9RmP_KV.js",name:"client",src:"app/client.ts",isEntry:!0,dynamicImports:["app/islands/CollapsibleSection.tsx","app/islands/DownloadSection.tsx","app/islands/SectionGroup.tsx","node_modules/honox/dist/client/runtime.js","node_modules/honox/dist/client/runtime.js"]},"app/islands/CollapsibleSection.tsx":{file:"static/CollapsibleSection-iBJshZqB.js",name:"CollapsibleSection",src:"app/islands/CollapsibleSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-BP7OvDzh.js","_index-BJLlL6Rz.js"]},"app/islands/DownloadSection.tsx":{file:"static/DownloadSection-B6AE7-6u.js",name:"DownloadSection",src:"app/islands/DownloadSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-BP7OvDzh.js"]},"app/islands/SectionGroup.tsx":{file:"static/SectionGroup-DOdYg3PM.js",name:"SectionGroup",src:"app/islands/SectionGroup.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-BP7OvDzh.js","_index-BJLlL6Rz.js"]},"app/style.css":{file:"static/style-Dv8O0o5u.css",src:"app/style.css",isEntry:!0},"node_modules/honox/dist/client/runtime.js":{file:"static/runtime-eII7yKqr.js",name:"runtime",src:"node_modules/honox/dist/client/runtime.js",isDynamicEntry:!0,imports:["app/client.ts"]}},dr=Object.freeze(Object.defineProperty({__proto__:null,default:Fo},Symbol.toStringTag,{value:"Module"})),fr=e=>e.endsWith("/")?e:e+"/",Ho=e=>{const t=e.src;if(e.prod??!0){let n=e.manifest;if(!n){const r=Object.assign({"/dist/.vite/manifest.json":dr});for(const[,s]of Object.entries(r))if(s.default){n=s.default;break}}if(n){const r=n[t.replace(/^\//,"")];if(r)return p(Wo,{children:p("script",{type:"module",async:!!e.async,src:`${fr("/resume/")}${r.file}`,nonce:e.nonce})})}return p(Te,{})}else return p("script",{type:"module",async:!!e.async,src:t,nonce:e.nonce})},Bo=e=>{let{href:t,prod:n,manifest:r,...s}=e;if(t)if(n??!0){if(!r){const o=Object.assign({"/dist/.vite/manifest.json":dr});for(const[,a]of Object.entries(o))if(a.default){r=a.default;break}}if(r){const o=r[t.replace(/^\//,"")];if(o)return t.startsWith("/")?p("link",{href:`${fr("/resume/")}${o.file}`,...s}):p("link",{href:o.file,...s})}return p(Te,{})}else return p("link",{href:t,...s});return p("link",{...s})},hr=$o();xr(hr);const Bt=new ht,pr=Object.assign({"/app/server.ts":hr});let mr=!1;for(const[,e]of Object.entries(pr))e&&(Bt.all("*",t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),Bt.notFound(t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),mr=!0);if(!mr)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const gr={},yn=new Set;for(const[e,t]of Object.entries(pr))for(const[n,r]of Object.entries(t))if(n!=="fetch"){if(yn.has(n))throw new Error(`Handler "${n}" is defined in multiple entry files. Please ensure each handler (except fetch) is defined only once.`);yn.add(n),gr[n]=r}const Uo={...gr,fetch:Bt.fetch};export{Uo as default};
