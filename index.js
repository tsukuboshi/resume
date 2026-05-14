var yr=Object.defineProperty;var Qt=e=>{throw TypeError(e)};var Sr=(e,t,n)=>t in e?yr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var y=(e,t,n)=>Sr(e,typeof t!="symbol"?t+"":t,n),wt=(e,t,n)=>t.has(e)||Qt("Cannot "+n);var u=(e,t,n)=>(wt(e,t,"read from private field"),n?n.call(e):t.get(e)),E=(e,t,n)=>t.has(e)?Qt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),C=(e,t,n,r)=>(wt(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),k=(e,t,n)=>(wt(e,t,"access private method"),n);var Yt=(e,t,n,r)=>({set _(s){C(e,t,s,n)},get _(){return u(e,t,r)}});import{AsyncLocalStorage as wr}from"node:async_hooks";function Ar(){const{process:e,Deno:t}=globalThis;return!(typeof(t==null?void 0:t.noColor)=="boolean"?t.noColor:e!==void 0?"NO_COLOR"in(e==null?void 0:e.env):!1)}var Lt="__COMPOSED_HANDLER",Rn=e=>e.length>1,On=e=>e[Lt]?On(e[Lt]):e,Cr=e=>e.name||(Rn(e)?"[middleware]":"[handler]"),Er=e=>e.routes.map(({path:t,method:n,handler:r})=>{const s=On(r);return{path:t,method:n,name:Cr(s),isMiddleware:Rn(s)}}),xr=(e,t)=>{const n=Ar(),r={};let s=0,o=0;Er(e).filter(({isMiddleware:a})=>!a).map(a=>{const i=`${a.method}-${a.path}`;if((r[i]||(r[i]=[])).push(a),!(r[i].length>1))return s=Math.max(s,a.method.length),o=Math.max(o,a.path.length),{method:a.method,path:a.path,routes:r[i]}}).forEach(a=>{if(!a)return;const{method:i,path:l,routes:c}=a,d=n?`\x1B[32m${i}\x1B[0m`:i;console.log(`${d} ${" ".repeat(s-i.length)} ${l}`)})};const kr=e=>(e.status(404),e.render("404 Not Found")),Rr=Object.freeze(Object.defineProperty({__proto__:null,default:kr},Symbol.toStringTag,{value:"Module"})),Or=(e,t)=>"getResponse"in e?e.getResponse():(console.error(e.message),t.status(500),t.render("Internal Server Error")),Dr=Object.freeze(Object.defineProperty({__proto__:null,default:Or},Symbol.toStringTag,{value:"Module"}));var Dn={Stringify:1},B=(e,t)=>{const n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},jr=/[&<>'"]/,jn=async(e,t)=>{let n="";t||(t=[]);const r=await Promise.all(e);for(let s=r.length-1;n+=r[s],s--,!(s<0);s--){let o=r[s];typeof o=="object"&&t.push(...o.callbacks||[]);const a=o.isEscaped;if(o=await(typeof o=="object"?o.toString():o),typeof o=="object"&&t.push(...o.callbacks||[]),o.isEscaped??a)n+=o;else{const i=[n];ie(o,i),n=i[0]}}return B(n,t)},ie=(e,t)=>{const n=e.search(jr);if(n===-1){t[0]+=e;return}let r,s,o=0;for(s=n;s<e.length;s++){switch(e.charCodeAt(s)){case 34:r="&quot;";break;case 39:r="&#39;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t[0]+=e.substring(o,s)+r,o=s+1}t[0]+=e.substring(o,s)},In=e=>{const t=e.callbacks;if(!(t!=null&&t.length))return e;const n=[e],r={};return t.forEach(s=>s({phase:Dn.Stringify,buffer:n,context:r})),n[0]},Pn=async(e,t,n,r,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(s?s[0]+=e:s=[e],Promise.all(o.map(i=>i({phase:t,buffer:s,context:r}))).then(i=>Promise.all(i.filter(Boolean).map(l=>Pn(l,t,!1,r,s))).then(()=>s[0]))):Promise.resolve(e)},Ir=(e,...t)=>{const n=[""];for(let r=0,s=e.length-1;r<s;r++){n[0]+=e[r];const o=Array.isArray(t[r])?t[r].flat(1/0):[t[r]];for(let a=0,i=o.length;a<i;a++){const l=o[a];if(typeof l=="string")ie(l,n);else if(typeof l=="number")n[0]+=l;else{if(typeof l=="boolean"||l===null||l===void 0)continue;if(typeof l=="object"&&l.isEscaped)if(l.callbacks)n.unshift("",l);else{const c=l.toString();c instanceof Promise?n.unshift("",c):n[0]+=c}else l instanceof Promise?n.unshift("",l):ie(l.toString(),n)}}}return n[0]+=e.at(-1),n.length===1?"callbacks"in n?B(In(B(n[0],n.callbacks))):B(n[0]):jn(n,n.callbacks)},zt=Symbol("RENDERER"),_t=Symbol("ERROR_HANDLER"),D=Symbol("STASH"),Tn=Symbol("INTERNAL"),Pr=Symbol("MEMO"),mt=Symbol("PERMALINK"),en=e=>(e[Tn]=!0,e),Ln=e=>({value:t,children:n})=>{if(!n)return;const r={children:[{tag:en(()=>{e.push(t)}),props:{}}]};Array.isArray(n)?r.children.push(...n.flat()):r.children.push(n),r.children.push({tag:en(()=>{e.pop()}),props:{}});const s={tag:"",props:r,type:""};return s[_t]=o=>{throw e.pop(),o},s},_n=e=>{const t=[e],n=Ln(t);return n.values=t,n.Provider=n,Ie.push(n),n},Ie=[],St=e=>{const t=[e],n=r=>{t.push(r.value);let s;try{s=r.children?(Array.isArray(r.children)?new Wn("",{},r.children):r.children).toString():""}catch(o){throw t.pop(),o}return s instanceof Promise?s.finally(()=>t.pop()).then(o=>B(o,o.callbacks)):(t.pop(),B(s))};return n.values=t,n.Provider=n,n[zt]=Ln(t),Ie.push(n),n},be=e=>e.values.at(-1),at={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Nt={},it="data-precedence",Qe=e=>Array.isArray(e)?e:[e],tn=new WeakMap,nn=(e,t,n,r)=>({buffer:s,context:o})=>{if(!s)return;const a=tn.get(o)||{};tn.set(o,a);const i=a[e]||(a[e]=[]);let l=!1;const c=at[e];if(c.length>0){e:for(const[,d]of i)for(const f of c)if(((d==null?void 0:d[f])??null)===(n==null?void 0:n[f])){l=!0;break e}}if(l?s[0]=s[0].replaceAll(t,""):c.length>0?i.push([t,n,r]):i.unshift([t,n,r]),s[0].indexOf("</head>")!==-1){let d;if(r===void 0)d=i.map(([f])=>f);else{const f=[];d=i.map(([h,,g])=>{let v=f.indexOf(g);return v===-1&&(f.push(g),v=f.length-1),[h,v]}).sort((h,g)=>h[1]-g[1]).map(([h])=>h)}d.forEach(f=>{s[0]=s[0].replaceAll(f,"")}),s[0]=s[0].replace(/(?=<\/head>)/,d.join(""))}},Ye=(e,t,n)=>B(new K(e,n,Qe(t??[])).toString()),et=(e,t,n,r)=>{if("itemProp"in n)return Ye(e,t,n);let{precedence:s,blocking:o,...a}=n;s=r?s??"":void 0,r&&(a[it]=s);const i=new K(e,a,Qe(t||[])).toString();return i instanceof Promise?i.then(l=>B(i,[...l.callbacks||[],nn(e,l,a,s)])):B(i,[nn(e,i,a,s)])},Tr=({children:e,...t})=>{const n=Ut();if(n){const r=be(n);if(r==="svg"||r==="head")return new K("title",t,Qe(e??[]))}return et("title",e,t,!1)},Lr=({children:e,...t})=>{const n=Ut();return["src","async"].some(r=>!t[r])||n&&be(n)==="head"?Ye("script",e,t):et("script",e,t,!1)},_r=({children:e,...t})=>["href","precedence"].every(n=>n in t)?(t["data-href"]=t.href,delete t.href,et("style",e,t,!0)):Ye("style",e,t),Nr=({children:e,...t})=>["onLoad","onError"].some(n=>n in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?Ye("link",e,t):et("link",e,t,"precedence"in t),$r=({children:e,...t})=>{const n=Ut();return n&&be(n)==="head"?Ye("meta",e,t):et("meta",e,t,!1)},Nn=(e,{children:t,...n})=>new K(e,n,Qe(t??[])),Mr=e=>(typeof e.action=="function"&&(e.action=mt in e.action?e.action[mt]:void 0),Nn("form",e)),$n=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=mt in t.formAction?t.formAction[mt]:void 0),Nn(e,t)),Wr=e=>$n("input",e),Fr=e=>$n("button",e);const At=Object.freeze(Object.defineProperty({__proto__:null,button:Fr,form:Mr,input:Wr,link:Nr,meta:$r,script:Lr,style:_r,title:Tr},Symbol.toStringTag,{value:"Module"}));var Hr=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),gt=e=>Hr.get(e)||e,Mn=(e,t)=>{for(const[n,r]of Object.entries(e)){const s=n[0]==="-"||!/[A-Z]/.test(n)?n:n.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`);t(s,r==null?null:typeof r=="number"?s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${r}`:`${r}px`:r)}},Ge=void 0,Ut=()=>Ge,Br=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,Gr=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],zr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Kt=(e,t)=>{for(let n=0,r=e.length;n<r;n++){const s=e[n];if(typeof s=="string")ie(s,t);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof K?s.toStringToBuffer(t):typeof s=="number"||s.isEscaped?t[0]+=s:s instanceof Promise?t.unshift("",s):Kt(s,t)}}},K=class{constructor(e,t,n){y(this,"tag");y(this,"props");y(this,"key");y(this,"children");y(this,"isEscaped",!0);y(this,"localContexts");this.tag=e,this.props=t,this.children=n}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var t,n;const e=[""];(t=this.localContexts)==null||t.forEach(([r,s])=>{r.values.push(s)});try{this.toStringToBuffer(e)}finally{(n=this.localContexts)==null||n.forEach(([r])=>{r.values.pop()})}return e.length===1?"callbacks"in e?In(B(e[0],e.callbacks)).toString():e[0]:jn(e,e.callbacks)}toStringToBuffer(e){const t=this.tag,n=this.props;let{children:r}=this;e[0]+=`<${t}`;const s=Ge&&be(Ge)==="svg"?o=>Br(gt(o)):o=>gt(o);for(let[o,a]of Object.entries(n))if(o=s(o),o!=="children"){if(o==="style"&&typeof a=="object"){let i="";Mn(a,(l,c)=>{c!=null&&(i+=`${i?";":""}${l}:${c}`)}),e[0]+=' style="',ie(i,e),e[0]+='"'}else if(typeof a=="string")e[0]+=` ${o}="`,ie(a,e),e[0]+='"';else if(a!=null)if(typeof a=="number"||a.isEscaped)e[0]+=` ${o}="${a}"`;else if(typeof a=="boolean"&&zr.includes(o))a&&(e[0]+=` ${o}=""`);else if(o==="dangerouslySetInnerHTML"){if(r.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r=[B(a.__html)]}else if(a instanceof Promise)e[0]+=` ${o}="`,e.unshift('"',a);else if(typeof a=="function"){if(!o.startsWith("on")&&o!=="ref")throw new Error(`Invalid prop '${o}' of type 'function' supplied to '${t}'.`)}else e[0]+=` ${o}="`,ie(a.toString(),e),e[0]+='"'}if(Gr.includes(t)&&r.length===0){e[0]+="/>";return}e[0]+=">",Kt(r,e),e[0]+=`</${t}>`}},Ct=class extends K{toStringToBuffer(e){const{children:t}=this,n={...this.props};t.length&&(n.children=t.length===1?t[0]:t);const r=this.tag.call(null,n);if(!(typeof r=="boolean"||r==null))if(r instanceof Promise)if(Ie.length===0)e.unshift("",r);else{const s=Ie.map(o=>[o,o.values.at(-1)]);e.unshift("",r.then(o=>(o instanceof K&&(o.localContexts=s),o)))}else r instanceof K?r.toStringToBuffer(e):typeof r=="number"||r.isEscaped?(e[0]+=r,r.callbacks&&(e.callbacks||(e.callbacks=[]),e.callbacks.push(...r.callbacks))):ie(r,e)}},Wn=class extends K{toStringToBuffer(e){Kt(this.children,e)}},$t=(e,t,...n)=>{t??(t={}),n.length&&(t.children=n.length===1?n[0]:n);const r=t.key;delete t.key;const s=lt(e,t,n);return s.key=r,s},rn=!1,lt=(e,t,n)=>{if(!rn){for(const r in Nt)At[r][zt]=Nt[r];rn=!0}return typeof e=="function"?new Ct(e,t,n):At[e]?new Ct(At[e],t,n):e==="svg"||e==="head"?(Ge||(Ge=St("")),new K(e,t,[new Ct(Ge,{value:e},n)])):new K(e,t,n)},Pe=({children:e})=>new Wn("",{children:e},Array.isArray(e)?e:e?[e]:[]),Ur=e=>!!(e&&typeof e=="object"&&"tag"in e&&"props"in e);function p(e,t,n){let r;if(!t||!("children"in t))r=lt(e,t,[]);else{const s=t.children;r=Array.isArray(s)?lt(e,t,s):lt(e,t,[s])}return r.key=n,r}var ze="_hp",Kr={Change:"Input",DoubleClick:"DblClick"},qr={svg:"2000/svg",math:"1998/Math/MathML"},Te=[],Mt=new WeakMap,Le=void 0,Vr=()=>Le,V=e=>"t"in e,Et={onClick:["click",!1]},sn=e=>{if(!e.startsWith("on"))return;if(Et[e])return Et[e];const t=e.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(t){const[,n,r]=t;return Et[e]=[(Kr[n]||n).toLowerCase(),!!r]}},on=(e,t)=>Le&&e instanceof SVGElement&&/[A-Z]/.test(t)&&(t in e.style||t.match(/^(?:o|pai|str|u|ve)/))?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,Jr=(e,t,n)=>{var r;t||(t={});for(let s in t){const o=t[s];if(s!=="children"&&(!n||n[s]!==o)){s=gt(s);const a=sn(s);if(a){if((n==null?void 0:n[s])!==o&&(n&&e.removeEventListener(a[0],n[s],a[1]),o!=null)){if(typeof o!="function")throw new Error(`Event handler for "${s}" is not a function`);e.addEventListener(a[0],o,a[1])}}else if(s==="dangerouslySetInnerHTML"&&o)e.innerHTML=o.__html;else if(s==="ref"){let i;typeof o=="function"?i=o(e)||(()=>o(null)):o&&"current"in o&&(o.current=e,i=()=>o.current=null),Mt.set(e,i)}else if(s==="style"){const i=e.style;typeof o=="string"?i.cssText=o:(i.cssText="",o!=null&&Mn(o,i.setProperty.bind(i)))}else{if(s==="value"){const l=e.nodeName;if(l==="INPUT"||l==="TEXTAREA"||l==="SELECT"){if(e.value=o==null||o===!1?null:o,l==="TEXTAREA"){e.textContent=o;continue}else if(l==="SELECT"){e.selectedIndex===-1&&(e.selectedIndex=0);continue}}}else(s==="checked"&&e.nodeName==="INPUT"||s==="selected"&&e.nodeName==="OPTION")&&(e[s]=o);const i=on(e,s);o==null||o===!1?e.removeAttribute(i):o===!0?e.setAttribute(i,""):typeof o=="string"||typeof o=="number"?e.setAttribute(i,o):e.setAttribute(i,o.toString())}}}if(n)for(let s in n){const o=n[s];if(s!=="children"&&!(s in t)){s=gt(s);const a=sn(s);a?e.removeEventListener(a[0],o,a[1]):s==="ref"?(r=Mt.get(e))==null||r():e.removeAttribute(on(e,s))}}},Zr=(e,t)=>{t[D][0]=0,Te.push([e,t]);const n=t.tag[zt]||t.tag,r=n.defaultProps?{...n.defaultProps,...t.props}:t.props;try{return[n.call(null,r)]}finally{Te.pop()}},Fn=(e,t,n,r,s)=>{var o,a;(o=e.vR)!=null&&o.length&&(r.push(...e.vR),delete e.vR),typeof e.tag=="function"&&((a=e[D][1][Fe])==null||a.forEach(i=>s.push(i))),e.vC.forEach(i=>{var l;if(V(i))n.push(i);else if(typeof i.tag=="function"||i.tag===""){i.c=t;const c=n.length;if(Fn(i,t,n,r,s),i.s){for(let d=c;d<n.length;d++)n[d].s=!0;i.s=!1}}else n.push(i),(l=i.vR)!=null&&l.length&&(r.push(...i.vR),delete i.vR)})},Xr=e=>{var t;for(;e&&(e.tag===ze||!e.e);)e=e.tag===ze||!((t=e.vC)!=null&&t[0])?e.nN:e.vC[0];return e==null?void 0:e.e},Hn=e=>{var t,n,r,s,o,a;V(e)||((n=(t=e[D])==null?void 0:t[1][Fe])==null||n.forEach(i=>{var l;return(l=i[2])==null?void 0:l.call(i)}),(r=Mt.get(e.e))==null||r(),e.p===2&&((s=e.vC)==null||s.forEach(i=>i.p=2)),(o=e.vC)==null||o.forEach(Hn)),e.p||((a=e.e)==null||a.remove(),delete e.e),typeof e.tag=="function"&&(Me.delete(e),ct.delete(e),delete e[D][3],e.a=!0)},Bn=(e,t,n)=>{e.c=t,Gn(e,t,n)},an=(e,t)=>{if(t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n}},ln=Symbol(),Gn=(e,t,n)=>{var c;const r=[],s=[],o=[];Fn(e,t,r,s,o),s.forEach(Hn);const a=n?void 0:t.childNodes;let i,l=null;if(n)i=-1;else if(!a.length)i=0;else{const d=an(a,Xr(e.nN));d!==void 0?(l=a[d],i=d):i=an(a,(c=r.find(f=>f.tag!==ze&&f.e))==null?void 0:c.e)??-1,i===-1&&(n=!0)}for(let d=0,f=r.length;d<f;d++,i++){const h=r[d];let g;if(h.s&&h.e)g=h.e,h.s=!1;else{const v=n||!h.e;V(h)?(h.e&&h.d&&(h.e.textContent=h.t),h.d=!1,g=h.e||(h.e=document.createTextNode(h.t))):(g=h.e||(h.e=h.n?document.createElementNS(h.n,h.tag):document.createElement(h.tag)),Jr(g,h.props,h.pP),Gn(h,g,v))}h.tag===ze?i--:n?g.parentNode||t.appendChild(g):a[i]!==g&&a[i-1]!==g&&(a[i+1]===g?t.appendChild(a[i]):t.insertBefore(g,l||a[i]||null))}if(e.pP&&(e.pP=void 0),o.length){const d=[],f=[];o.forEach(([,h,,g,v])=>{h&&d.push(h),g&&f.push(g),v==null||v()}),d.forEach(h=>h()),f.length&&requestAnimationFrame(()=>{f.forEach(h=>h())})}},Qr=(e,t)=>!!(e&&e.length===t.length&&e.every((n,r)=>n[1]===t[r][1])),ct=new WeakMap,Wt=(e,t,n)=>{var o,a,i,l,c,d;const r=!n&&t.pC;n&&(t.pC||(t.pC=t.vC));let s;try{n||(n=typeof t.tag=="function"?Zr(e,t):Qe(t.props.children)),((o=n[0])==null?void 0:o.tag)===""&&n[0][_t]&&(s=n[0][_t],e[5].push([e,s,t]));const f=r?[...t.pC]:t.vC?[...t.vC]:void 0,h=[];let g;for(let v=0;v<n.length;v++){if(Array.isArray(n[v])){n.splice(v,1,...n[v].flat(1/0)),v--;continue}let b=Yr(n[v]);if(b){typeof b.tag=="function"&&!b.tag[Tn]&&(Ie.length>0&&(b[D][2]=Ie.map(w=>[w,w.values.at(-1)])),(a=e[5])!=null&&a.length&&(b[D][3]=e[5].at(-1)));let S;if(f&&f.length){const w=f.findIndex(V(b)?m=>V(m):b.key!==void 0?m=>m.key===b.key&&m.tag===b.tag:m=>m.tag===b.tag);w!==-1&&(S=f[w],f.splice(w,1))}if(S)if(V(b))S.t!==b.t&&(S.t=b.t,S.d=!0),b=S;else{const w=S.pP=S.props;if(S.props=b.props,S.f||(S.f=b.f||t.f),typeof b.tag=="function"){const m=S[D][2];S[D][2]=b[D][2]||[],S[D][3]=b[D][3],!S.f&&((S.o||S)===b.o||(l=(i=S.tag)[Pr])!=null&&l.call(i,w,S.props))&&Qr(m,S[D][2])&&(S.s=!0)}b=S}else if(!V(b)&&Le){const w=be(Le);w&&(b.n=w)}if(!V(b)&&!b.s&&(Wt(e,b),delete b.f),h.push(b),g&&!g.s&&!b.s)for(let w=g;w&&!V(w);w=(c=w.vC)==null?void 0:c.at(-1))w.nN=b;g=b}}t.vR=r?[...t.vC,...f||[]]:f||[],t.vC=h,r&&delete t.pC}catch(f){if(t.f=!0,f===ln){if(s)return;throw f}const[h,g,v]=((d=t[D])==null?void 0:d[3])||[];if(g){const b=()=>ut([0,!1,e[2]],v),S=ct.get(v)||[];S.push(b),ct.set(v,S);const w=g(f,()=>{const m=ct.get(v);if(m){const A=m.indexOf(b);if(A!==-1)return m.splice(A,1),b()}});if(w){if(e[0]===1)e[1]=!0;else if(Wt(e,v,[w]),(g.length===1||e!==h)&&v.c){Bn(v,v.c,!1);return}throw ln}}throw f}finally{s&&e[5].pop()}},Yr=e=>{if(!(e==null||typeof e=="boolean")){if(typeof e=="string"||typeof e=="number")return{t:e.toString(),d:!0};if("vR"in e&&(e={tag:e.tag,props:e.props,key:e.key,f:e.f,type:e.tag,ref:e.props.ref,o:e.o||e}),typeof e.tag=="function")e[D]=[0,[]];else{const t=qr[e.tag];t&&(Le||(Le=_n("")),e.props.children=[{tag:Le,props:{value:e.n=`http://www.w3.org/${t}`,children:e.props.children}}])}return e}},cn=(e,t)=>{var n,r;(n=t[D][2])==null||n.forEach(([s,o])=>{s.values.push(o)});try{Wt(e,t,void 0)}catch{return}if(t.a){delete t.a;return}(r=t[D][2])==null||r.forEach(([s])=>{s.values.pop()}),(e[0]!==1||!e[1])&&Bn(t,t.c,!1)},Me=new WeakMap,un=[],ut=async(e,t)=>{e[5]||(e[5]=[]);const n=Me.get(t);n&&n[0](void 0);let r;const s=new Promise(o=>r=o);if(Me.set(t,[r,()=>{e[2]?e[2](e,t,o=>{cn(o,t)}).then(()=>r(t)):(cn(e,t),r(t))}]),un.length)un.at(-1).add(t);else{await Promise.resolve();const o=Me.get(t);o&&(Me.delete(t),o[1]())}return s},es=(e,t,n)=>({tag:ze,props:{children:e},key:n,e:t,p:1}),xt=0,Fe=1,kt=2,Rt=3,Ot=new WeakMap,qt=(e,t)=>!e||!t||e.length!==t.length||t.some((n,r)=>n!==e[r]),ts=void 0,dn=[],Ue=e=>{var a;const t=()=>typeof e=="function"?e():e,n=Te.at(-1);if(!n)return[t(),()=>{}];const[,r]=n,s=(a=r[D][1])[xt]||(a[xt]=[]),o=r[D][0]++;return s[o]||(s[o]=[t(),i=>{const l=ts,c=s[o];if(typeof i=="function"&&(i=i(c[0])),!Object.is(i,c[0]))if(c[0]=i,dn.length){const[d,f]=dn.at(-1);Promise.all([d===3?r:ut([d,!1,l],r),f]).then(([h])=>{if(!h||!(d===2||d===3))return;const g=h.vC;requestAnimationFrame(()=>{setTimeout(()=>{g===h.vC&&ut([d===3?1:0,!1,l],h)})})})}else ut([0,!1,l],r)}])},ns=(e,t,n)=>{var c;const r=Te.at(-1);if(!r)return;const[,s]=r,o=(c=s[D][1])[Fe]||(c[Fe]=[]),a=s[D][0]++,[i,,l]=o[a]||(o[a]=[]);if(qt(i,n)){l&&l();const d=()=>{f[e]=void 0,f[2]=t()},f=[n,void 0,void 0,void 0,void 0];f[e]=d,o[a]=f}},fn=(e,t)=>ns(3,e,t),Vt=(e,t)=>{var i;const n=Te.at(-1);if(!n)return e;const[,r]=n,s=(i=r[D][1])[kt]||(i[kt]=[]),o=r[D][0]++,a=s[o];return qt(a==null?void 0:a[1],t)?s[o]=[e,t]:e=s[o][0],e},rs=e=>{const t=Ot.get(e);if(t){if(t.length===2)throw t[1];return t[0]}throw e.then(n=>Ot.set(e,[n]),n=>Ot.set(e,[void 0,n])),e},ss=(e,t)=>{var i;const n=Te.at(-1);if(!n)return e();const[,r]=n,s=(i=r[D][1])[Rt]||(i[Rt]=[]),o=r[D][0]++,a=s[o];return qt(a==null?void 0:a[1],t)&&(s[o]=[e(),t]),s[o][0]},os=_n({pending:!1,data:null,method:null,action:null}),hn=new Set,as=e=>{hn.add(e),e.finally(()=>hn.delete(e))},Jt=(e,t)=>ss(()=>n=>{let r;e&&(typeof e=="function"?r=e(n)||(()=>{e(null)}):e&&"current"in e&&(e.current=n,r=()=>{e.current=null}));const s=t(n);return()=>{s==null||s(),r==null||r()}},[e]),ye=Object.create(null),st=Object.create(null),tt=(e,t,n,r,s)=>{if(t!=null&&t.itemProp)return{tag:e,props:t,type:e,ref:t.ref};const o=document.head;let{onLoad:a,onError:i,precedence:l,blocking:c,...d}=t,f=null,h=!1;const g=at[e];let v;if(g.length>0){const m=o.querySelectorAll(e);e:for(const A of m)for(const x of at[e])if(A.getAttribute(x)===t[x]){f=A;break e}if(!f){const A=g.reduce((x,R)=>t[R]===void 0?x:`${x}-${R}-${t[R]}`,e);h=!st[A],f=st[A]||(st[A]=(()=>{const x=document.createElement(e);for(const R of g)t[R]!==void 0&&x.setAttribute(R,t[R]),t.rel&&x.setAttribute("rel",t.rel);return x})())}}else v=o.querySelectorAll(e);l=r?l??"":void 0,r&&(d[it]=l);const b=Vt(m=>{if(g.length>0){let A=!1;for(const x of o.querySelectorAll(e)){if(A&&x.getAttribute(it)!==l){o.insertBefore(m,x);return}x.getAttribute(it)===l&&(A=!0)}o.appendChild(m)}else if(v){let A=!1;for(const x of v)if(x===m){A=!0;break}A||o.insertBefore(m,o.contains(v[0])?v[0]:o.querySelector(e)),v=void 0}},[l]),S=Jt(t.ref,m=>{var R;const A=g[0];if(n===2&&(m.innerHTML=""),(h||v)&&b(m),!i&&!a)return;let x=ye[R=m.getAttribute(A)]||(ye[R]=new Promise((q,$)=>{m.addEventListener("load",q),m.addEventListener("error",$)}));a&&(x=x.then(a)),i&&(x=x.catch(i)),x.catch(()=>{})});if(s&&c==="render"){const m=at[e][0];if(t[m]){const A=t[m],x=ye[A]||(ye[A]=new Promise((R,q)=>{b(f),f.addEventListener("load",R),f.addEventListener("error",q)}));rs(x)}}const w={tag:e,type:e,props:{...d,ref:S},ref:S};return w.p=n,f&&(w.e=f),es(w,o)},is=e=>{const t=Vr(),n=t&&be(t);return n!=null&&n.endsWith("svg")?{tag:"title",props:e,type:"title",ref:e.ref}:tt("title",e,void 0,!1,!1)},ls=e=>!e||["src","async"].some(t=>!e[t])?{tag:"script",props:e,type:"script",ref:e.ref}:tt("script",e,1,!1,!0),cs=e=>!e||!["href","precedence"].every(t=>t in e)?{tag:"style",props:e,type:"style",ref:e.ref}:(e["data-href"]=e.href,delete e.href,tt("style",e,2,!0,!0)),us=e=>!e||["onLoad","onError"].some(t=>t in e)||e.rel==="stylesheet"&&(!("precedence"in e)||"disabled"in e)?{tag:"link",props:e,type:"link",ref:e.ref}:tt("link",e,1,"precedence"in e,!0),ds=e=>tt("meta",e,void 0,!1,!1),zn=Symbol(),fs=e=>{const{action:t,...n}=e;typeof t!="function"&&(n.action=t);const[r,s]=Ue([null,!1]),o=Vt(async c=>{const d=c.isTrusted?t:c.detail[zn];if(typeof d!="function")return;c.preventDefault();const f=new FormData(c.target);s([f,!0]);const h=d(f);h instanceof Promise&&(as(h),await h),s([null,!0])},[]),a=Jt(e.ref,c=>(c.addEventListener("submit",o),()=>{c.removeEventListener("submit",o)})),[i,l]=r;return r[1]=!1,{tag:os,props:{value:{pending:i!==null,data:i,method:i?"post":null,action:i?t:null},children:{tag:"form",props:{...n,ref:a},type:"form",ref:a}},f:l}},Un=(e,{formAction:t,...n})=>{if(typeof t=="function"){const r=Vt(s=>{s.preventDefault(),s.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[zn]:t}}))},[]);n.ref=Jt(n.ref,s=>(s.addEventListener("click",r),()=>{s.removeEventListener("click",r)}))}return{tag:e,props:n,type:e,ref:n.ref}},hs=e=>Un("input",e),ps=e=>Un("button",e);Object.assign(Nt,{title:is,script:ls,style:cs,link:us,meta:ds,form:fs,input:hs,button:ps});St(null);new TextEncoder;var ms=St(null),gs=(e,t,n,r)=>(s,o)=>{const a="<!DOCTYPE html>",i=n?$t(c=>n(c,e),{Layout:t,...o},s):s,l=Ir`${B(a)}${$t(ms.Provider,{value:e},i)}`;return e.html(l)},vs=(e,t)=>function(r,s){const o=r.getLayout()??Pe;return e&&r.setLayout(a=>e({...a,Layout:o},r)),r.setRenderer(gs(r,o,e)),s()};const bs=vs(({children:e})=>p("html",{lang:"en",children:[p("head",{children:[p("meta",{charset:"utf-8"}),p("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),p("link",{href:"/favicon.ico",rel:"icon"}),p(zo,{href:"/app/style.css",rel:"stylesheet"}),p(Go,{src:"/app/client.ts",async:!0})]}),p("body",{children:e})]})),ys=Object.freeze(Object.defineProperty({__proto__:null,default:bs},Symbol.toStringTag,{value:"Module"})),Ss="component-name",ws="component-export",As="data-serialized-props",Cs="data-hono-template",le="__importing_islands",Ft=Symbol(),Ht=Symbol(),Dt=St({[Ft]:!1,[Ht]:!1}),Kn=e=>Array.isArray(e)?e.some(Kn):typeof e=="object"&&Ur(e),Zt=({componentName:e,componentExport:t,Component:n,props:r})=>{const s={},o={};for(const i in r){const l=r[i];Kn(l)?s[i]=l:o[i]=l}const a=be(Dt);return a[Ht]||!a[Ft]?p("honox-island",{[Ss]:e,[ws]:t||void 0,[As]:JSON.stringify(o),children:[p(Dt.Provider,{value:{...a,[Ft]:!0},children:p(n,{...r})}),Object.entries(s).map(([i,l])=>$t("template",{[Cs]:i,key:i},p(Dt.Provider,{value:{...a,[Ht]:!0},children:l})))]}):p(n,{...r})},qn=({title:e,level:t,className:n})=>{const s=`${(o=>{switch(o){case 2:return"text-2xl font-bold text-gray-800";case 3:return"text-xl font-semibold text-blue-900";case 4:return"text-lg font-semibold text-gray-800";default:return"text-3xl font-bold text-gray-900"}})(t)} ${n||""}`;return p("h2",{className:s,dangerouslySetInnerHTML:{__html:e}})},Es=({title:e,level:t,isOpen:n,onClick:r})=>p("button",{type:"button",onClick:r,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${n?"rotate-90":""}`,children:"▶"}),p(qn,{title:e,level:t})]});function Vn(e){return[/github\.com\/[^/]+\/[^/]+/,/qiita\.com\/[^/]+\/items/,/qiita\.com\/tags/,/zenn\.dev\/[^/]+\/articles/,/zenn\.dev\/[^/]+\/books/,/zenn\.dev\/topics/,/dev\.classmethod\.jp\/articles/,/speakerdeck\.com\/[^/]+\/[^/]+/,/x\.com\/[^/]+\/status/,/x\.com\/search/,/docswell\.com\/slide/].some(r=>r.test(e))?!1:[/https?:\/\/dev\.classmethod\.jp\/author\/[a-zA-Z0-9_-]+$/,/https?:\/\/github\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/zenn\.dev\/[a-zA-Z0-9_-]+$/,/https?:\/\/speakerdeck\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/x\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/qiita\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/www\.docswell\.com\/user\/[a-zA-Z0-9_-]+$/].some(r=>r.test(e))}function xs(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n=t.exec(e);for(;n!==null;){const r=n[2];if(Vn(r))return!0;n=t.exec(e)}return!1}function ks(e,t){if(!xs(e))return e;const n={"dev.classmethod.jp":{name:"DevelopersIO",logo:"amazonaws",color:"orange",usernameRegex:/dev\.classmethod\.jp\/author\/([^/\s)]+)/},"github.com":{name:"GitHub",logo:"github",color:"black",usernameRegex:/github\.com\/([^/\s)]+)/},"zenn.dev":{name:"Zenn",logo:"zenn",color:"blue",usernameRegex:/zenn\.dev\/([^/\s)]+)/},"speakerdeck.com":{name:"Speaker--Deck",logo:"speakerdeck",color:"green",usernameRegex:/speakerdeck\.com\/([^/\s)]+)/},"x.com":{name:"X",logo:"x",color:"black",usernameRegex:/x\.com\/([^/\s)]+)/},"qiita.com":{name:"Qiita",logo:"qiita",color:"brightgreen",usernameRegex:/qiita\.com\/([^/\s)]+)/},"www.docswell.com":{name:"Docswell",logo:"readthedocs",color:"blue",usernameRegex:/www\.docswell\.com\/user\/([^/\s)]+)/}};let r=e;return Object.entries(n).forEach(([s,o])=>{const a=new RegExp(`\\[([^\\]]+)\\]\\(https?://${s.replace(/\./g,"\\.")}[^\\)]*\\)`,"g");r=r.replace(a,i=>{try{const l=i.match(/\[([^\]]+)\]\(([^)]+)\)/);if(!l)return i;const c=l[2];if(!Vn(c))return i;const d=i.match(o.usernameRegex),f=d?d[1]:"";if(f){const h=encodeURIComponent(`${o.name}-@${f}`),g=encodeURIComponent(o.logo),v=encodeURIComponent(o.color),b=`https://img.shields.io/badge/${h}-${v}?style=flat&logo=${g}`;return`<a href="${c}" target="_blank" rel="noopener"><img src="${b}" alt="${o.name}" /></a>`}else{const h=encodeURIComponent(o.name),g=encodeURIComponent(o.logo),v=encodeURIComponent(o.color),b=`https://img.shields.io/badge/${h}-${v}?style=flat&logo=${g}`;return`<a href="${c}" target="_blank" rel="noopener"><img src="${b}" alt="${o.name}" /></a>`}}catch(l){return console.warn("Error converting account link:",l),i}})}),r}const Rs="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-200 transition-colors duration-200",jt=/^\d+\.\s/;function Os(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function pn(e,t){return`<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">${t}</span><span>${We(e)}</span></li>`}function Jn(e){return e.replace(/\*\*([^*]+)\*\*/g,'<strong class="font-bold">$1</strong>').replace(new RegExp("(?<!\\*)\\*([^*]+)\\*(?!\\*)","g"),'<em class="italic">$1</em>').replace(/`([^`]+)`/g,`<code class="${Rs}">$1</code>`)}function We(e){return Jn(e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'))}function Ds(e){var s;const t=e.trim().split(`
`);let n="",r=0;for(;r<t.length;){const o=t[r].trim();if(o==="---"){n+='<hr class="my-6 border-t border-gray-200">',r++;continue}if(o.startsWith("```")){let a="";for(r++;r<t.length;){const l=t[r];if(l.trim()==="```"||l.trim().startsWith("```"))break;a+=`${l}
`,r++}const i=Os(a.trim());n+=`<div class="my-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"><pre class="p-4 overflow-x-auto bg-gray-50"><code class="text-sm text-gray-800 font-mono leading-6 whitespace-pre-wrap">${i}</code></pre></div>`,r<t.length&&r++;continue}if(o.startsWith("> ")){let a="";for(;r<t.length&&t[r].trim().startsWith("> ");)a+=`${t[r].trim().substring(2)} `,r++;n+=`<blockquote class="my-4 pl-4 border-l-4 border-blue-500 bg-blue-50 py-3 pr-4 rounded-r-lg"><p class="text-gray-700 italic">${We(a.trim())}</p></blockquote>`;continue}if(jt.test(o)){let a=1;for(;r<t.length&&jt.test(t[r].trim());){const i=t[r].trim().replace(jt,"");n+=pn(i,`${a}.`),a++,r++}continue}if(o.startsWith("- ")){const a=o.substring(2);n+=pn(a,"•"),r++;continue}if(o.includes("|")&&((s=t[r+1])!=null&&s.includes("---"))){const a=o.split("|").map(i=>i.trim()).filter(i=>i);if(t[r+1].includes("---")){for(n+='<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>',a.forEach(i=>{n+=`<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${We(i)}</th>`}),n+='</tr></thead><tbody class="divide-y divide-gray-200">',r+=2;r<t.length&&t[r].trim().includes("|");){const i=t[r].trim().split("|").map(l=>l.trim()).filter(l=>l);i.length>0&&(n+='<tr class="hover:bg-gray-50">',i.forEach(l=>{n+=`<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${We(l)}</td>`}),n+="</tr>"),r++}n+="</tbody></table></div>";continue}}o?n+=`${We(o)}<br>`:n+="<br>",r++}return n}function js(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:speakerdeck\.com\/player\/|www\.docswell\.com\/slide\/[^/]+\/embed?)[^)]+)\)/g;return e.replace(t,(n,r,s)=>{let o=r,a="";return s.includes("speakerdeck.com")?(o=r.replace(/\s*\\?\s*-\s*Speaker\s*Deck\s*$/i,""),a="speakerdeck-iframe"):s.includes("docswell.com")&&(o=r.replace(/\s*\|\s*ドクセル\s*$/i,""),a="docswell-iframe"),`<iframe class="${a}" frameborder="0" src="${s}" title="${o}" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`})}function Is(e){const t=/- \[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^)]+)\)/g,n=/\[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^)]+)\)/g,r="width: 100%; height: auto; aspect-ratio: 560 / 315; border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;";let s=e.replace(t,(o,a,i)=>`<iframe style="${r}" src="${i}" title="${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);return s=s.replace(n,(o,a,i)=>`<iframe style="${r}" src="${i}" title="${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`),s}function Ps(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:dev\.classmethod\.jp\/articles\/[^)]+|qiita\.com\/[^/]+\/items\/[^)]+|zenn\.dev\/[^/]+\/articles\/[^)]+))\)/g;return e.replace(t,(n,r,s)=>`<iframe class="hatenablogcard" style="width:100%;height:155px;" title="${r}" src="https://hatenablog-parts.com/embed?url=${encodeURIComponent(s)}" width="300" height="150" frameborder="0" scrolling="no"></iframe>`)}function _e(e,t){if(!e.trim())return"";let n=Is(e);return n=js(n),n=Ps(n),n=ks(n),n=Ds(n),Jn(n)}function Ts(e){const t=e.split(`
`),n=[];let r=null,s=0;for(const o of t){const a=o.match(/^(#+)\s+(.+)/);if(a){r&&n.push(r);const i=a[1].length;let l=a[2];l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'),r={title:l,content:"",level:i,id:`section-${++s}`}}else r?r.content+=`${o}
`:n.length===0&&(r={title:"",content:`${o}
`,level:0,id:"intro"})}return r&&n.push(r),n}const Ls=function({title:e,content:t,level:n,defaultOpen:r=!1}){const[s,o]=Ue(r);return n!==4?p("div",{className:"mb-6",children:[p(qn,{title:e,level:n,className:"mb-4"}),p("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:_e(t)}})]}):p("div",{className:"mb-6 border border-gray-200 rounded-lg",children:[p(Es,{title:e,level:n,isOpen:s,onClick:()=>o(!s)}),s&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:_e(t)}})})]})},_s=function(e){return p(Zt,{componentName:"/app/islands/CollapsibleSection.tsx",Component:Ls,props:e})},Ns=()=>p("svg",{className:"animate-spin h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[p("title",{children:"Loading"}),p("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),$s=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:[p("title",{children:"Markdown"}),p("path",{d:"M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"})]}),Ms=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:[p("title",{children:"PDF"}),p("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})]}),mn=({type:e,isLoading:t,onClick:n})=>{const r=e==="pdf";return p("button",{type:"button",onClick:n,disabled:t,className:`flex items-center justify-center gap-2 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-colors duration-200 w-[280px] ${r?"bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300":"bg-slate-500 hover:bg-slate-600 disabled:bg-slate-300"}`,children:t?p(Pe,{children:[p(Ns,{}),p("span",{children:"ダウンロード中..."})]}):p(Pe,{children:[r?p(Ms,{}):p($s,{}),p("span",{children:r?"PDFをダウンロード":"Markdownをダウンロード"})]})})},Ws=function(){const[e,t]=Ue(null),n=async r=>{t(r);try{const s=r==="markdown"?"README.md":"README.pdf",o=`/resume/${s}`,a=document.createElement("a");a.href=o,a.download=s,document.body.appendChild(a),a.click(),document.body.removeChild(a)}catch(s){console.error("Download failed:",s)}finally{t(null)}};return p("div",{className:"flex flex-col sm:flex-row gap-3 items-center justify-center mb-8",children:[p(mn,{type:"markdown",isLoading:e==="markdown",onClick:()=>n("markdown")}),p(mn,{type:"pdf",isLoading:e==="pdf",onClick:()=>n("pdf")})]})},Fs=function(e){return p(Zt,{componentName:"/app/islands/DownloadSection.tsx",Component:Ws,props:e})},Hs=({allOpen:e,onClick:t})=>p("button",{type:"button",onClick:t,className:`px-3 py-1 text-sm rounded-md transition-colors flex items-center gap-2 ${e?"bg-red-100 hover:bg-red-200 text-red-700":"bg-blue-100 hover:bg-blue-200 text-blue-700"}`,children:[p("span",{className:"text-xs",children:e?"全て閉じる":"全て開く"}),p("span",{className:`transform transition-transform ${e?"rotate-180":""}`,children:"▼"})]}),Bs=e=>{const[t,n]=Ue({}),[r,s]=Ue(!1);return fn(()=>{const i={};e.forEach(l=>{i[l.id]=!1}),n(i)},[e]),fn(()=>{const i=Object.values(t).filter(Boolean).length;s(i===e.length&&e.length>0)},[t,e.length]),{toggleStates:t,allOpen:r,handleToggle:i=>{n(l=>({...l,[i]:!l[i]}))},handleBulkToggle:()=>{const i=!r,l={};e.forEach(c=>{l[c.id]=i}),n(l),s(i)}}},Gs=({title:e,hasSubsections:t,allOpen:n,onBulkToggle:r})=>p("div",{className:"flex items-center justify-between mb-4",children:[p("h3",{className:"text-xl font-semibold text-blue-900",dangerouslySetInnerHTML:{__html:e}}),t&&p(Hs,{allOpen:n,onClick:r})]}),zs=({subsection:e,isOpen:t,onToggle:n})=>p("div",{className:"mb-4 border border-gray-200 rounded-lg",children:[p("button",{type:"button",onClick:n,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${t?"rotate-90":""}`,children:"▶"}),p("span",{className:"text-lg font-semibold text-gray-800",dangerouslySetInnerHTML:{__html:e.title}})]}),t&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:_e(e.content,e.title)}})})]}),Us=function({section:e,subsections:t}){const{toggleStates:n,allOpen:r,handleToggle:s,handleBulkToggle:o}=Bs(t);return p("div",{className:"mb-8",children:[p(Gs,{title:e.title,hasSubsections:t.length>0,allOpen:r,onBulkToggle:o}),e.content.trim()&&p("div",{className:"prose max-w-none mb-6",dangerouslySetInnerHTML:{__html:_e(e.content,e.title)}}),t.map(a=>p(zs,{subsection:a,isOpen:n[a.id]||!1,onToggle:()=>s(a.id)},a.id))]})},Ks=function(e){return p(Zt,{componentName:"/app/islands/SectionGroup.tsx",Component:Us,props:e})},qs=`## 基本情報

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
`;function Vs(){const e=Ts(qs),n=(r=>{const s=[];let o=null,a=[];return r.forEach(i=>{!i.title&&i.level===0?s.push({type:"intro",section:i}):i.level===1||i.level===2?(o&&(s.push({type:"h3-group",section:o,subsections:a}),o=null,a=[]),s.push({type:"regular",section:i})):i.level===3?(o&&s.push({type:"h3-group",section:o,subsections:a}),o=i,a=[]):i.level===4&&o?a.push(i):(o&&(s.push({type:"h3-group",section:o,subsections:a}),o=null,a=[]),s.push({type:"regular",section:i}))}),o&&s.push({type:"h3-group",section:o,subsections:a}),s})(e);return p("div",{className:"min-h-screen bg-gray-50",children:p("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[p("header",{className:"text-center mb-12",children:[p("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"職務経歴書"}),p(Fs,{})]}),p("main",{className:"bg-white rounded-lg shadow-lg p-8",children:n.map((r,s)=>{if(r.type==="intro")return p("div",{className:"mb-8",dangerouslySetInnerHTML:{__html:`<p class="mb-4">${_e(r.section.content)}</p>`}},r.section.id);if(r.type==="h3-group")return p(Ks,{section:r.section,subsections:r.subsections||[]},r.section.id);{const o=_e(r.section.content);return p(_s,{title:r.section.title,content:o,level:r.section.level,defaultOpen:r.section.level<=2},r.section.id)}})}),p("footer",{className:"text-center mt-12 text-gray-500",children:[p("p",{children:"Built with HonoX on GitHub Pages"}),p("p",{className:"mt-2",children:["Generated by:"," ",p("a",{href:"https://zenn.dev/tsukuboshi/articles/honox-resume",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 underline",children:"Markdownで書いた職務経歴書を良い感じのWebサイトとPDFに自動変換するツールを作ってみた"})]})]})]})})}const Js=!0,Zs=Object.freeze(Object.defineProperty({__proto__:null,__importing_islands:Js,default:Vs},Symbol.toStringTag,{value:"Module"}));var gn=(e,t,n)=>(r,s)=>{let o=-1;return a(0);async function a(i){if(i<=o)throw new Error("next() called multiple times");o=i;let l,c=!1,d;if(e[i]?(d=e[i][0][0],r.req.routeIndex=i):d=i===e.length&&s||void 0,d)try{l=await d(r,()=>a(i+1))}catch(f){if(f instanceof Error&&t)r.error=f,l=await t(f,r),c=!0;else throw f}else r.finalized===!1&&n&&(l=await n(r));return l&&(r.finalized===!1||c)&&(r.res=l),r}},Xs=Symbol(),Qs=async(e,t=Object.create(null))=>{const{all:n=!1,dot:r=!1}=t,o=(e instanceof tr?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?Ys(e,{all:n,dot:r}):{}};async function Ys(e,t){const n=await e.formData();return n?eo(n,t):{}}function eo(e,t){const n=Object.create(null);return e.forEach((r,s)=>{t.all||s.endsWith("[]")?to(n,s,r):n[s]=r}),t.dot&&Object.entries(n).forEach(([r,s])=>{r.includes(".")&&(no(n,r,s),delete n[r])}),n}var to=(e,t,n)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]:t.endsWith("[]")?e[t]=[n]:e[t]=n},no=(e,t,n)=>{let r=e;const s=t.split(".");s.forEach((o,a)=>{a===s.length-1?r[o]=n:((!r[o]||typeof r[o]!="object"||Array.isArray(r[o])||r[o]instanceof File)&&(r[o]=Object.create(null)),r=r[o])})},Zn=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},ro=e=>{const{groups:t,path:n}=so(e),r=Zn(n);return oo(r,t)},so=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(n,r)=>{const s=`@${r}`;return t.push([s,n]),s}),{groups:t,path:e}},oo=(e,t)=>{for(let n=t.length-1;n>=0;n--){const[r]=t[n];for(let s=e.length-1;s>=0;s--)if(e[s].includes(r)){e[s]=e[s].replace(r,t[n][1]);break}}return e},ot={},ao=(e,t)=>{if(e==="*")return"*";const n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){const r=`${e}#${t}`;return ot[r]||(n[2]?ot[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,n[1],new RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],new RegExp(`^${n[2]}$`)]:ot[r]=[e,n[1],!0]),ot[r]}return null},Xt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,n=>{try{return t(n)}catch{return n}})}},io=e=>Xt(e,decodeURI),Xn=e=>{const t=e.url,n=t.indexOf("/",t.indexOf(":")+4);let r=n;for(;r<t.length;r++){const s=t.charCodeAt(r);if(s===37){const o=t.indexOf("?",r),a=t.indexOf("#",r),i=o===-1?a===-1?void 0:a:a===-1?o:Math.min(o,a),l=t.slice(n,i);return io(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(s===63||s===35)break}return t.slice(n,r)},lo=e=>{const t=Xn(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},we=(e,t,...n)=>(n.length&&(t=we(t,...n)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Qn=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),n=[];let r="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))r+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){n.length===0&&r===""?n.push("/"):n.push(r);const o=s.replace("?","");r+="/"+o,n.push(r)}else r+="/"+s}),n.filter((s,o,a)=>a.indexOf(s)===o)},It=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Xt(e,er):e):e,Yn=(e,t,n)=>{let r;if(!n&&t&&!/[%+]/.test(t)){let a=e.indexOf("?",8);if(a===-1)return;for(e.startsWith(t,a+1)||(a=e.indexOf(`&${t}`,a+1));a!==-1;){const i=e.charCodeAt(a+t.length+1);if(i===61){const l=a+t.length+2,c=e.indexOf("&",l);return It(e.slice(l,c===-1?void 0:c))}else if(i==38||isNaN(i))return"";a=e.indexOf(`&${t}`,a+1)}if(r=/[%+]/.test(e),!r)return}const s={};r??(r=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const a=e.indexOf("&",o+1);let i=e.indexOf("=",o);i>a&&a!==-1&&(i=-1);let l=e.slice(o+1,i===-1?a===-1?void 0:a:i);if(r&&(l=It(l)),o=a,l==="")continue;let c;i===-1?c="":(c=e.slice(i+1,a===-1?void 0:a),r&&(c=It(c))),n?(s[l]&&Array.isArray(s[l])||(s[l]=[]),s[l].push(c)):s[l]??(s[l]=c)}return t?s[t]:s},co=Yn,uo=(e,t)=>Yn(e,t,!0),er=decodeURIComponent,vn=e=>Xt(e,er),Ee,H,Y,nr,rr,Bt,te,wn,tr=(wn=class{constructor(e,t="/",n=[[]]){E(this,Y);y(this,"raw");E(this,Ee);E(this,H);y(this,"routeIndex",0);y(this,"path");y(this,"bodyCache",{});E(this,te,e=>{const{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;const s=Object.keys(t)[0];return s?t[s].then(o=>(s==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=n[e]()});this.raw=e,this.path=t,C(this,H,n),C(this,Ee,{})}param(e){return e?k(this,Y,nr).call(this,e):k(this,Y,rr).call(this)}query(e){return co(this.url,e)}queries(e){return uo(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((n,r)=>{t[r]=n}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Qs(this,e))}json(){return u(this,te).call(this,"text").then(e=>JSON.parse(e))}text(){return u(this,te).call(this,"text")}arrayBuffer(){return u(this,te).call(this,"arrayBuffer")}blob(){return u(this,te).call(this,"blob")}formData(){return u(this,te).call(this,"formData")}addValidatedData(e,t){u(this,Ee)[e]=t}valid(e){return u(this,Ee)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Xs](){return u(this,H)}get matchedRoutes(){return u(this,H)[0].map(([[,e]])=>e)}get routePath(){return u(this,H)[0].map(([[,e]])=>e)[this.routeIndex].path}},Ee=new WeakMap,H=new WeakMap,Y=new WeakSet,nr=function(e){const t=u(this,H)[0][this.routeIndex][1][e],n=k(this,Y,Bt).call(this,t);return n&&/\%/.test(n)?vn(n):n},rr=function(){const e={},t=Object.keys(u(this,H)[0][this.routeIndex][1]);for(const n of t){const r=k(this,Y,Bt).call(this,u(this,H)[0][this.routeIndex][1][n]);r!==void 0&&(e[n]=/\%/.test(r)?vn(r):r)}return e},Bt=function(e){return u(this,H)[1]?u(this,H)[1][e]:e},te=new WeakMap,wn),fo="text/plain; charset=UTF-8",Pt=(e,t)=>({"Content-Type":e,...t}),Ne=(e,t)=>new Response(e,t),Ke,qe,J,xe,Z,N,Ve,ke,Re,fe,Je,Ze,ne,Ae,An,ho=(An=class{constructor(e,t){E(this,ne);E(this,Ke);E(this,qe);y(this,"env",{});E(this,J);y(this,"finalized",!1);y(this,"error");E(this,xe);E(this,Z);E(this,N);E(this,Ve);E(this,ke);E(this,Re);E(this,fe);E(this,Je);E(this,Ze);y(this,"render",(...e)=>(u(this,ke)??C(this,ke,t=>this.html(t)),u(this,ke).call(this,...e)));y(this,"setLayout",e=>C(this,Ve,e));y(this,"getLayout",()=>u(this,Ve));y(this,"setRenderer",e=>{C(this,ke,e)});y(this,"header",(e,t,n)=>{this.finalized&&C(this,N,Ne(u(this,N).body,u(this,N)));const r=u(this,N)?u(this,N).headers:u(this,fe)??C(this,fe,new Headers);t===void 0?r.delete(e):n!=null&&n.append?r.append(e,t):r.set(e,t)});y(this,"status",e=>{C(this,xe,e)});y(this,"set",(e,t)=>{u(this,J)??C(this,J,new Map),u(this,J).set(e,t)});y(this,"get",e=>u(this,J)?u(this,J).get(e):void 0);y(this,"newResponse",(...e)=>k(this,ne,Ae).call(this,...e));y(this,"body",(e,t,n)=>k(this,ne,Ae).call(this,e,t,n));y(this,"text",(e,t,n)=>!u(this,fe)&&!u(this,xe)&&!t&&!n&&!this.finalized?new Response(e):k(this,ne,Ae).call(this,e,t,Pt(fo,n)));y(this,"json",(e,t,n)=>k(this,ne,Ae).call(this,JSON.stringify(e),t,Pt("application/json",n)));y(this,"html",(e,t,n)=>{const r=s=>k(this,ne,Ae).call(this,s,t,Pt("text/html; charset=UTF-8",n));return typeof e=="object"?Pn(e,Dn.Stringify,!1,{}).then(r):r(e)});y(this,"redirect",(e,t)=>{const n=String(e);return this.header("Location",/[^\x00-\xFF]/.test(n)?encodeURI(n):n),this.newResponse(null,t??302)});y(this,"notFound",()=>(u(this,Re)??C(this,Re,()=>Ne()),u(this,Re).call(this,this)));C(this,Ke,e),t&&(C(this,Z,t.executionCtx),this.env=t.env,C(this,Re,t.notFoundHandler),C(this,Ze,t.path),C(this,Je,t.matchResult))}get req(){return u(this,qe)??C(this,qe,new tr(u(this,Ke),u(this,Ze),u(this,Je))),u(this,qe)}get event(){if(u(this,Z)&&"respondWith"in u(this,Z))return u(this,Z);throw Error("This context has no FetchEvent")}get executionCtx(){if(u(this,Z))return u(this,Z);throw Error("This context has no ExecutionContext")}get res(){return u(this,N)||C(this,N,Ne(null,{headers:u(this,fe)??C(this,fe,new Headers)}))}set res(e){if(u(this,N)&&e){e=Ne(e.body,e);for(const[t,n]of u(this,N).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=u(this,N).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of r)e.headers.append("set-cookie",s)}else e.headers.set(t,n)}C(this,N,e),this.finalized=!0}get var(){return u(this,J)?Object.fromEntries(u(this,J)):{}}},Ke=new WeakMap,qe=new WeakMap,J=new WeakMap,xe=new WeakMap,Z=new WeakMap,N=new WeakMap,Ve=new WeakMap,ke=new WeakMap,Re=new WeakMap,fe=new WeakMap,Je=new WeakMap,Ze=new WeakMap,ne=new WeakSet,Ae=function(e,t,n){const r=u(this,N)?new Headers(u(this,N).headers):u(this,fe)??new Headers;if(typeof t=="object"&&"headers"in t){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[a,i]of o)a.toLowerCase()==="set-cookie"?r.append(a,i):r.set(a,i)}if(n)for(const[o,a]of Object.entries(n))if(typeof a=="string")r.set(o,a);else{r.delete(o);for(const i of a)r.append(o,i)}const s=typeof t=="number"?t:(t==null?void 0:t.status)??u(this,xe);return Ne(e,{status:s,headers:r})},An),I="ALL",po="all",mo=["get","post","put","delete","options","patch"],sr="Can not add a route since the matcher is already built.",or=class extends Error{},go=e=>e.text("404 Not Found",404),bn=(e,t)=>{if("getResponse"in e){const n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text("Internal Server Error",500)},G,P,ar,z,ue,dt,ft,Oe,vo=(Oe=class{constructor(t={}){E(this,P);y(this,"get");y(this,"post");y(this,"put");y(this,"delete");y(this,"options");y(this,"patch");y(this,"all");y(this,"on");y(this,"use");y(this,"router");y(this,"getPath");y(this,"_basePath","/");E(this,G,"/");y(this,"routes",[]);E(this,z,go);y(this,"errorHandler",bn);y(this,"onError",t=>(this.errorHandler=t,this));y(this,"notFound",t=>(C(this,z,t),this));y(this,"fetch",(t,...n)=>k(this,P,ft).call(this,t,n[1],n[0],t.method));y(this,"request",(t,n,r,s)=>t instanceof Request?this.fetch(n?new Request(t,n):t,r,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${we("/",t)}`,n),r,s)));y(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(k(this,P,ft).call(this,t.request,t,void 0,t.request.method))})});[...mo,po].forEach(o=>{this[o]=(a,...i)=>(typeof a=="string"?C(this,G,a):k(this,P,ue).call(this,o,u(this,G),a),i.forEach(l=>{k(this,P,ue).call(this,o,u(this,G),l)}),this)}),this.on=(o,a,...i)=>{for(const l of[a].flat()){C(this,G,l);for(const c of[o].flat())i.map(d=>{k(this,P,ue).call(this,c.toUpperCase(),u(this,G),d)})}return this},this.use=(o,...a)=>(typeof o=="string"?C(this,G,o):(C(this,G,"*"),a.unshift(o)),a.forEach(i=>{k(this,P,ue).call(this,I,u(this,G),i)}),this);const{strict:r,...s}=t;Object.assign(this,s),this.getPath=r??!0?t.getPath??Xn:lo}route(t,n){const r=this.basePath(t);return n.routes.map(s=>{var a;let o;n.errorHandler===bn?o=s.handler:(o=async(i,l)=>(await gn([],n.errorHandler)(i,()=>s.handler(i,l))).res,o[Lt]=s.handler),k(a=r,P,ue).call(a,s.method,s.path,o)}),this}basePath(t){const n=k(this,P,ar).call(this);return n._basePath=we(this._basePath,t),n}mount(t,n,r){let s,o;r&&(typeof r=="function"?o=r:(o=r.optionHandler,r.replaceRequest===!1?s=l=>l:s=r.replaceRequest));const a=o?l=>{const c=o(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};s||(s=(()=>{const l=we(this._basePath,t),c=l==="/"?0:l.length;return d=>{const f=new URL(d.url);return f.pathname=f.pathname.slice(c)||"/",new Request(f,d)}})());const i=async(l,c)=>{const d=await n(s(l.req.raw),...a(l));if(d)return d;await c()};return k(this,P,ue).call(this,I,we(t,"*"),i),this}},G=new WeakMap,P=new WeakSet,ar=function(){const t=new Oe({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,C(t,z,u(this,z)),t.routes=this.routes,t},z=new WeakMap,ue=function(t,n,r){t=t.toUpperCase(),n=we(this._basePath,n);const s={basePath:this._basePath,path:n,method:t,handler:r};this.router.add(t,n,[r,s]),this.routes.push(s)},dt=function(t,n){if(t instanceof Error)return this.errorHandler(t,n);throw t},ft=function(t,n,r,s){if(s==="HEAD")return(async()=>new Response(null,await k(this,P,ft).call(this,t,n,r,"GET")))();const o=this.getPath(t,{env:r}),a=this.router.match(s,o),i=new ho(t,{path:o,matchResult:a,env:r,executionCtx:n,notFoundHandler:u(this,z)});if(a[0].length===1){let c;try{c=a[0][0][0][0](i,async()=>{i.res=await u(this,z).call(this,i)})}catch(d){return k(this,P,dt).call(this,d,i)}return c instanceof Promise?c.then(d=>d||(i.finalized?i.res:u(this,z).call(this,i))).catch(d=>k(this,P,dt).call(this,d,i)):c??u(this,z).call(this,i)}const l=gn(a[0],this.errorHandler,u(this,z));return(async()=>{try{const c=await l(i);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return k(this,P,dt).call(this,c,i)}})()},Oe),ir=[];function bo(e,t){const n=this.buildAllMatchers(),r=(s,o)=>{const a=n[s]||n[I],i=a[2][o];if(i)return i;const l=o.match(a[0]);if(!l)return[[],ir];const c=l.indexOf("",1);return[a[1][c],l]};return this.match=r,r(e,t)}var vt="[^/]+",He=".*",Be="(?:|/.*)",Ce=Symbol(),yo=new Set(".\\+*[^]$()");function So(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===He||e===Be?1:t===He||t===Be?-1:e===vt?1:t===vt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var he,pe,U,ve,wo=(ve=class{constructor(){E(this,he);E(this,pe);E(this,U,Object.create(null))}insert(t,n,r,s,o){if(t.length===0){if(u(this,he)!==void 0)throw Ce;if(o)return;C(this,he,n);return}const[a,...i]=t,l=a==="*"?i.length===0?["","",He]:["","",vt]:a==="/*"?["","",Be]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(l){const d=l[1];let f=l[2]||vt;if(d&&l[2]&&(f===".*"||(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f))))throw Ce;if(c=u(this,U)[f],!c){if(Object.keys(u(this,U)).some(h=>h!==He&&h!==Be))throw Ce;if(o)return;c=u(this,U)[f]=new ve,d!==""&&C(c,pe,s.varIndex++)}!o&&d!==""&&r.push([d,u(c,pe)])}else if(c=u(this,U)[a],!c){if(Object.keys(u(this,U)).some(d=>d.length>1&&d!==He&&d!==Be))throw Ce;if(o)return;c=u(this,U)[a]=new ve}c.insert(i,n,r,s,o)}buildRegExpStr(){const n=Object.keys(u(this,U)).sort(So).map(r=>{const s=u(this,U)[r];return(typeof u(s,pe)=="number"?`(${r})@${u(s,pe)}`:yo.has(r)?`\\${r}`:r)+s.buildRegExpStr()});return typeof u(this,he)=="number"&&n.unshift(`#${u(this,he)}`),n.length===0?"":n.length===1?n[0]:"(?:"+n.join("|")+")"}},he=new WeakMap,pe=new WeakMap,U=new WeakMap,ve),bt,Xe,Cn,Ao=(Cn=class{constructor(){E(this,bt,{varIndex:0});E(this,Xe,new wo)}insert(e,t,n){const r=[],s=[];for(let a=0;;){let i=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const c=`@\\${a}`;return s[a]=[c,l],a++,i=!0,c}),!i)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=s.length-1;a>=0;a--){const[i]=s[a];for(let l=o.length-1;l>=0;l--)if(o[l].indexOf(i)!==-1){o[l]=o[l].replace(i,s[a][1]);break}}return u(this,Xe).insert(o,t,r,u(this,bt),n),r}buildRegExp(){let e=u(this,Xe).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,o,a)=>o!==void 0?(n[++t]=Number(o),"$()"):(a!==void 0&&(r[Number(a)]=++t),"")),[new RegExp(`^${e}`),n,r]}},bt=new WeakMap,Xe=new WeakMap,Cn),Co=[/^$/,[],Object.create(null)],ht=Object.create(null);function lr(e){return ht[e]??(ht[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,n)=>n?`\\${n}`:"(?:|/.*)")}$`))}function Eo(){ht=Object.create(null)}function xo(e){var c;const t=new Ao,n=[];if(e.length===0)return Co;const r=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,f],[h,g])=>d?1:h?-1:f.length-g.length),s=Object.create(null);for(let d=0,f=-1,h=r.length;d<h;d++){const[g,v,b]=r[d];g?s[v]=[b.map(([w])=>[w,Object.create(null)]),ir]:f++;let S;try{S=t.insert(v,f,g)}catch(w){throw w===Ce?new or(v):w}g||(n[f]=b.map(([w,m])=>{const A=Object.create(null);for(m-=1;m>=0;m--){const[x,R]=S[m];A[x]=R}return[w,A]}))}const[o,a,i]=t.buildRegExp();for(let d=0,f=n.length;d<f;d++)for(let h=0,g=n[d].length;h<g;h++){const v=(c=n[d][h])==null?void 0:c[1];if(!v)continue;const b=Object.keys(v);for(let S=0,w=b.length;S<w;S++)v[b[S]]=i[v[b[S]]]}const l=[];for(const d in a)l[d]=n[a[d]];return[o,l,s]}function Se(e,t){if(e){for(const n of Object.keys(e).sort((r,s)=>s.length-r.length))if(lr(n).test(t))return[...e[n]]}}var re,se,yt,cr,En,ko=(En=class{constructor(){E(this,yt);y(this,"name","RegExpRouter");E(this,re);E(this,se);y(this,"match",bo);C(this,re,{[I]:Object.create(null)}),C(this,se,{[I]:Object.create(null)})}add(e,t,n){var i;const r=u(this,re),s=u(this,se);if(!r||!s)throw new Error(sr);r[e]||[r,s].forEach(l=>{l[e]=Object.create(null),Object.keys(l[I]).forEach(c=>{l[e][c]=[...l[I][c]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=lr(t);e===I?Object.keys(r).forEach(c=>{var d;(d=r[c])[t]||(d[t]=Se(r[c],t)||Se(r[I],t)||[])}):(i=r[e])[t]||(i[t]=Se(r[e],t)||Se(r[I],t)||[]),Object.keys(r).forEach(c=>{(e===I||e===c)&&Object.keys(r[c]).forEach(d=>{l.test(d)&&r[c][d].push([n,o])})}),Object.keys(s).forEach(c=>{(e===I||e===c)&&Object.keys(s[c]).forEach(d=>l.test(d)&&s[c][d].push([n,o]))});return}const a=Qn(t)||[t];for(let l=0,c=a.length;l<c;l++){const d=a[l];Object.keys(s).forEach(f=>{var h;(e===I||e===f)&&((h=s[f])[d]||(h[d]=[...Se(r[f],d)||Se(r[I],d)||[]]),s[f][d].push([n,o-c+l+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(u(this,se)).concat(Object.keys(u(this,re))).forEach(t=>{e[t]||(e[t]=k(this,yt,cr).call(this,t))}),C(this,re,C(this,se,void 0)),Eo(),e}},re=new WeakMap,se=new WeakMap,yt=new WeakSet,cr=function(e){const t=[];let n=e===I;return[u(this,re),u(this,se)].forEach(r=>{const s=r[e]?Object.keys(r[e]).map(o=>[o,r[e][o]]):[];s.length!==0?(n||(n=!0),t.push(...s)):e!==I&&t.push(...Object.keys(r[I]).map(o=>[o,r[I][o]]))}),n?xo(t):null},En),oe,X,xn,Ro=(xn=class{constructor(e){y(this,"name","SmartRouter");E(this,oe,[]);E(this,X,[]);C(this,oe,e.routers)}add(e,t,n){if(!u(this,X))throw new Error(sr);u(this,X).push([e,t,n])}match(e,t){if(!u(this,X))throw new Error("Fatal error");const n=u(this,oe),r=u(this,X),s=n.length;let o=0,a;for(;o<s;o++){const i=n[o];try{for(let l=0,c=r.length;l<c;l++)i.add(...r[l]);a=i.match(e,t)}catch(l){if(l instanceof or)continue;throw l}this.match=i.match.bind(i),C(this,oe,[i]),C(this,X,void 0);break}if(o===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(u(this,X)||u(this,oe).length!==1)throw new Error("No active router has been determined yet.");return u(this,oe)[0]}},oe=new WeakMap,X=new WeakMap,xn),$e=Object.create(null),Oo=e=>{for(const t in e)return!0;return!1},ae,L,me,De,T,Q,de,je,Do=(je=class{constructor(t,n,r){E(this,Q);E(this,ae);E(this,L);E(this,me);E(this,De,0);E(this,T,$e);if(C(this,L,r||Object.create(null)),C(this,ae,[]),t&&n){const s=Object.create(null);s[t]={handler:n,possibleKeys:[],score:0},C(this,ae,[s])}C(this,me,[])}insert(t,n,r){C(this,De,++Yt(this,De)._);let s=this;const o=ro(n),a=[];for(let i=0,l=o.length;i<l;i++){const c=o[i],d=o[i+1],f=ao(c,d),h=Array.isArray(f)?f[0]:c;if(h in u(s,L)){s=u(s,L)[h],f&&a.push(f[1]);continue}u(s,L)[h]=new je,f&&(u(s,me).push(f),a.push(f[1])),s=u(s,L)[h]}return u(s,ae).push({[t]:{handler:r,possibleKeys:a.filter((i,l,c)=>c.indexOf(i)===l),score:u(this,De)}}),s}search(t,n){var d;const r=[];C(this,T,$e);let o=[this];const a=Zn(n),i=[],l=a.length;let c=null;for(let f=0;f<l;f++){const h=a[f],g=f===l-1,v=[];for(let S=0,w=o.length;S<w;S++){const m=o[S],A=u(m,L)[h];A&&(C(A,T,u(m,T)),g?(u(A,L)["*"]&&k(this,Q,de).call(this,r,u(A,L)["*"],t,u(m,T)),k(this,Q,de).call(this,r,A,t,u(m,T))):v.push(A));for(let x=0,R=u(m,me).length;x<R;x++){const q=u(m,me)[x],$=u(m,T)===$e?{}:{...u(m,T)};if(q==="*"){const M=u(m,L)["*"];M&&(k(this,Q,de).call(this,r,M,t,u(m,T)),C(M,T,$),v.push(M));continue}const[nt,rt,j]=q;if(!h&&!(j instanceof RegExp))continue;const O=u(m,L)[nt];if(j instanceof RegExp){if(c===null){c=new Array(l);let _=n[0]==="/"?1:0;for(let F=0;F<l;F++)c[F]=_,_+=a[F].length+1}const M=n.substring(c[f]),W=j.exec(M);if(W){if($[rt]=W[0],k(this,Q,de).call(this,r,O,t,u(m,T),$),Oo(u(O,L))){C(O,T,$);const _=((d=W[0].match(/\//))==null?void 0:d.length)??0;(i[_]||(i[_]=[])).push(O)}continue}}(j===!0||j.test(h))&&($[rt]=h,g?(k(this,Q,de).call(this,r,O,t,$,u(m,T)),u(O,L)["*"]&&k(this,Q,de).call(this,r,u(O,L)["*"],t,$,u(m,T))):(C(O,T,$),v.push(O)))}}const b=i.shift();o=b?v.concat(b):v}return r.length>1&&r.sort((f,h)=>f.score-h.score),[r.map(({handler:f,params:h})=>[f,h])]}},ae=new WeakMap,L=new WeakMap,me=new WeakMap,De=new WeakMap,T=new WeakMap,Q=new WeakSet,de=function(t,n,r,s,o){for(let a=0,i=u(n,ae).length;a<i;a++){const l=u(n,ae)[a],c=l[r]||l[I],d={};if(c!==void 0&&(c.params=Object.create(null),t.push(c),s!==$e||o&&o!==$e))for(let f=0,h=c.possibleKeys.length;f<h;f++){const g=c.possibleKeys[f],v=d[c.score];c.params[g]=o!=null&&o[g]&&!v?o[g]:s[g]??(o==null?void 0:o[g]),d[c.score]=!0}}},je),ge,kn,jo=(kn=class{constructor(){y(this,"name","TrieRouter");E(this,ge);C(this,ge,new Do)}add(e,t,n){const r=Qn(t);if(r){for(let s=0,o=r.length;s<o;s++)u(this,ge).insert(e,r[s],n);return}u(this,ge).insert(e,t,n)}match(e,t){return u(this,ge).search(e,t)}},ge=new WeakMap,kn),pt=class extends vo{constructor(e={}){super(e),this.router=e.router??new Ro({routers:[new ko,new jo]})}},Io=e=>e;const ur=new wr,yn=e=>(e=e.replace(/\.tsx?$/g,"").replace(/\.mdx?$/g,"").replace(/^\/?index$/,"/").replace(/\/index$/,"").replace(/\[\.{3}.+\]/,"*").replace(/\((.+?)\)/g,"").replace(/\[(.+?)\]/g,":$1").replace(/\/\//g,"/"),/^\//.test(e)?e:"/"+e),Tt=e=>{const t={};for(const[n,r]of Object.entries(e)){const s=n.split("/"),o=s.pop(),a=s.join("/");t[a]||(t[a]={}),o&&(t[a][o]=r)}for(const[n,r]of Object.entries(t)){const s=Object.entries(r).sort(([o],[a])=>o[0]==="["&&a[0]!=="["?1:o[0]!=="["&&a[0]==="["?-1:o.localeCompare(a));t[n]=Object.fromEntries(s)}return t},Po=e=>Object.keys(e).sort((n,r)=>{const s=n.split("/").length,o=r.split("/").length;return s-o||r.localeCompare(n)}).map(n=>({[n]:e[n]})),To=e=>{const t={};for(const r of Object.keys(e)){const s=r.split("/");s.pop();const o=s.join("/");t[o]||(t[o]=[]),t[o].includes(r)||t[o].push(r)}const n=Object.keys(t).sort((r,s)=>s.length-r.length);for(const r of n)for(const s of n)if(s.startsWith(r)&&s!==r){const o=new Set([...t[s],...t[r]]);t[s]=[...o]}return t},dr="_404.tsx",Lo="_error.tsx",_o=["GET","POST","PUT","DELETE","OPTIONS","PATCH"],No=e=>{const t=e.root,n=new RegExp(`^${t}`),r=S=>yn(S.replace(n,"")),s=new pt;s.use(async function(w,m){await ur.run(w,()=>m())});const o=e.NOT_FOUND,a=Tt(o),i=e.ERROR,l=Tt(i),c=e.RENDERER,d=To(c),f=e.MIDDLEWARE,h=e.ROUTES,g=Po(Tt(h)),v=(S,w)=>{let m=w[S]??[];const A=R=>(m=w[R.join("/")],m||(R.pop(),R.length&&A(R)),m??[]),x=S.split("/");return m=A(x),m.sort((R,q)=>R.split("/").length-q.split("/").length),m},b={};for(const S of g)for(const[w,m]of Object.entries(S)){const A=new pt;let x=!1;const R=$o(w,a);R&&A.use(async(j,O)=>{if(await O(),j.res.status===404){const M=await R(j),W=new Response(M.body,{status:404,headers:M.headers});j.res=W}}),v(w,d).map(j=>{const O=c[j];O[le]&&(x=!0);const W=O.default;W&&A.all("*",W)});const $=Object.keys(f).find(j=>{const O=w.replaceAll("[","\\[").replaceAll("]","\\]").replaceAll("(","\\(").replaceAll(")","\\)");return new RegExp(O+"/_middleware.tsx?").test(j)});if($){const j=f[$];j.default&&A.use(...j.default)}for(const[j,O]of Object.entries(m)){const M=O[le],W=Io(async function(ee,br){ee.set(le,M?!0:x),await br()}),_=O.default,F=yn(j);_&&"fetch"in _&&(A.use(W),A.route(F,_));for(const ce of _o){const ee=O[ce];ee&&(A.on(ce,F,W),A.on(ce,F,...ee))}_&&Array.isArray(_)&&(A.get(F,W),A.get(F,..._)),typeof _=="function"&&(A.get(F,W),A.get(F,async ce=>{const ee=await _(ce);return ee instanceof Response?ee:ce.render(ee,O)}))}const nt=Wo(w,l);nt&&(b[w]=nt);for(const[j,O]of Object.entries(b))new RegExp(`^${j}`).test(w)&&O&&A.onError(O);let rt=r(w);s.route(rt,A)}for(const S of g.reverse()){const w=Object.entries(S)[0][0],m=new pt;Mo(m,w,a);const A=r(w);s.route(A,m)}return s};function $o(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[dr];if(s)return s.default}}function Mo(e,t,n){for(const[r,s]of Object.entries(n))if(t===r){const o=s[dr];if(o){const a=o.default;o[le]&&e.use("*",(l,c)=>(l.set(le,!0),c())),e.get("*",l=>(l.status(404),a(l)))}}}function Wo(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[Lo];if(s){const o=s.default;if(o)return async(i,l)=>{const c=s[le];return c&&l.set(le,c),l.status(500),o(i,l)}}}}const Fo=e=>No({root:"/app/routes",NOT_FOUND:Object.assign({"/app/routes/_404.tsx":Rr}),ERROR:Object.assign({"/app/routes/_error.tsx":Dr}),RENDERER:Object.assign({"/app/routes/_renderer.tsx":ys}),MIDDLEWARE:Object.assign({}),ROUTES:Object.assign({"/app/routes/index.tsx":Zs})}),Ho=({children:e})=>{const t=ur.getStore();if(!t)throw new Error("No context found");return p(Pe,{children:t.get(le)&&e})},Bo={"_honox-island-Cqs43tJT.js":{file:"static/honox-island-Cqs43tJT.js",name:"honox-island",imports:["app/client.ts"]},"_index-AjTEzyjf.js":{file:"static/index-AjTEzyjf.js",name:"index"},"app/client.ts":{file:"static/client-BgRM9V2f.js",name:"client",src:"app/client.ts",isEntry:!0,dynamicImports:["app/islands/CollapsibleSection.tsx","app/islands/DownloadSection.tsx","app/islands/SectionGroup.tsx","node_modules/honox/dist/client/runtime.js","node_modules/honox/dist/client/runtime.js"]},"app/islands/CollapsibleSection.tsx":{file:"static/CollapsibleSection-C_wVRWrl.js",name:"CollapsibleSection",src:"app/islands/CollapsibleSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-Cqs43tJT.js","_index-AjTEzyjf.js"]},"app/islands/DownloadSection.tsx":{file:"static/DownloadSection-Bk_UL97r.js",name:"DownloadSection",src:"app/islands/DownloadSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-Cqs43tJT.js"]},"app/islands/SectionGroup.tsx":{file:"static/SectionGroup-CQLFZ2Np.js",name:"SectionGroup",src:"app/islands/SectionGroup.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-Cqs43tJT.js","_index-AjTEzyjf.js"]},"app/style.css":{file:"static/style-Dv8O0o5u.css",src:"app/style.css",isEntry:!0},"node_modules/honox/dist/client/runtime.js":{file:"static/runtime-sNLA5usC.js",name:"runtime",src:"node_modules/honox/dist/client/runtime.js",isDynamicEntry:!0,imports:["app/client.ts"]}},fr=Object.freeze(Object.defineProperty({__proto__:null,default:Bo},Symbol.toStringTag,{value:"Module"})),hr=e=>e.endsWith("/")?e:e+"/",Go=e=>{const t=e.src;if(e.prod??!0){let n=e.manifest;if(!n){const r=Object.assign({"/dist/.vite/manifest.json":fr});for(const[,s]of Object.entries(r))if(s.default){n=s.default;break}}if(n){const r=n[t.replace(/^\//,"")];if(r)return p(Ho,{children:p("script",{type:"module",async:!!e.async,src:`${hr("/resume/")}${r.file}`,nonce:e.nonce})})}return p(Pe,{})}else return p("script",{type:"module",async:!!e.async,src:t,nonce:e.nonce})},zo=e=>{let{href:t,prod:n,manifest:r,...s}=e;if(t)if(n??!0){if(!r){const o=Object.assign({"/dist/.vite/manifest.json":fr});for(const[,a]of Object.entries(o))if(a.default){r=a.default;break}}if(r){const o=r[t.replace(/^\//,"")];if(o)return t.startsWith("/")?p("link",{href:`${hr("/resume/")}${o.file}`,...s}):p("link",{href:o.file,...s})}return p(Pe,{})}else return p("link",{href:t,...s});return p("link",{...s})},pr=Fo();xr(pr);const Gt=new pt,mr=Object.assign({"/app/server.ts":pr});let gr=!1;for(const[,e]of Object.entries(mr))e&&(Gt.all("*",t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),Gt.notFound(t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),gr=!0);if(!gr)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const vr={},Sn=new Set;for(const[e,t]of Object.entries(mr))for(const[n,r]of Object.entries(t))if(n!=="fetch"){if(Sn.has(n))throw new Error(`Handler "${n}" is defined in multiple entry files. Please ensure each handler (except fetch) is defined only once.`);Sn.add(n),vr[n]=r}const qo={...vr,fetch:Gt.fetch};export{qo as default};
