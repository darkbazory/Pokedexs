import{o as O,a as N,r as j,b as h,c as v,w as J,v as Q,u as _,d as e,F as g,e as b,t as f,f as C,g as S,h as H,i as L,j as X,S as Y,k as Z,l as ee,m as F,n as w,p as D,q as B,s as te,x as se,y as oe,z as ne,A as ae,B as re}from"./vendor.ad8c2583.js";const ce=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(t){if(t.ep)return;t.ep=!0;const l=r(t);fetch(t.href,l)}};ce();var le="/Pokedexs/logo_black.png";const ie={class:"input-group border-3"},de={id:"datalistOptions"},ue=e("i",{class:"fa-solid fa-magnifying-glass"},null,-1),_e=[ue],pe={setup(u){let s=[];O(()=>{N.get("allPokemon.json").then(o=>{for(const d of o.data)s.push(d)}).catch(o=>console.log(o))});const r=j({buscartxt:""});j({text:""});function i(o){for(const d in s)s[d].name===o&&location.replace(`/${s[d].id}`)}function t(o){if(o.keyCode===13){let n=r.buscartxt.toLowerCase();if(n.length>=1&&n!==""){var d=s.some(p=>p.name===n);d&&i(n)}}}function l(){let o=r.buscartxt.toLowerCase();if(o.length>=1&&o!==""){var d=s.some(n=>n.name===o);d&&i(o)}}return(o,d)=>(h(),v("div",ie,[J(e("input",{type:"text",onKeyup:t,"onUpdate:modelValue":d[0]||(d[0]=n=>_(r).buscartxt=n),placeholder:"Buscar...","aria-label":"Search",class:"form-control border-0",id:"buscador",list:"datalistOptions"},null,544),[[Q,_(r).buscartxt]]),e("datalist",de,[(h(!0),v(g,null,b(_(s),n=>(h(),v("option",null,f(n.name),1))),256))]),e("span",{onClick:l,class:"input-group-text border-0",id:"basic-addon1"},_e)]))}};const he={class:"navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded"},me={class:"container-fluid"},ve=e("img",{alt:"Vue logo",src:le,id:"logo"},null,-1),fe=e("h1",null,"Cargando Pokemons...",-1),ge={setup(u){return(s,r)=>{const i=H("router-link"),t=H("router-view");return h(),v(g,null,[e("nav",he,[e("div",me,[C(i,{class:"navbar-brand",to:{name:"Home"}},{default:S(()=>[ve]),_:1}),C(pe)])]),C(t,null,{default:S(({Component:l})=>[l?(h(),L(Y,{key:0},{fallback:S(()=>[fe]),default:S(()=>[(h(),L(X(l)))]),_:2},1024)):Z("",!0)]),_:1})],64)}}},be="modulepreload",T={},ye="/Pokedexs/",xe=function(s,r){return!r||r.length===0?s():Promise.all(r.map(i=>{if(i=`${ye}${i}`,i in T)return;T[i]=!0;const t=i.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${l}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":be,t||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),t)return new Promise((d,n)=>{o.addEventListener("load",d),o.addEventListener("error",n)})})).then(()=>s())};var P=(u,s)=>{const r=u.__vccOpts||u;for(const[i,t]of s)r[i]=t;return r};const ke={class:"card-container"},we={setup(u){O(()=>{t(),l()});let s="https://pokeapi.co/api/v2/pokemon-species?offset=",r=0,i=j([]);function t(){for(let d=0;d<7;d++)N.get(s+r).then(n=>{n.data.results.forEach(p=>{p.id=p.url.split("/").slice(-2,-1).pop(),delete p.url,i.push(p)})}),r+=20}function l(){window.onscroll=()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop-450<=document.documentElement.clientHeight&&N.get(s+r).then(n=>{n.data.results.forEach(p=>{p.id=p.url.split("/").slice(-2,-1).pop(),delete p.url,i.push(p)}),r+=20})}}const o=ee({loader:()=>xe(()=>Promise.resolve().then(function(){return De}),void 0),delay:100});return(d,n)=>(h(),v("div",ke,[(h(!0),v(g,null,b(_(i),p=>(h(),L(_(o),{id:p.id,key:p.id},null,8,["id"]))),128))]))}};var $e=P(we,[["__scopeId","data-v-a0ebf0f0"]]),Ce="/Pokedexs/assets/volume-up.bcec6485.svg";const Pe={class:"card"},Ee=["href"],Ie={class:"card-header"},Se={class:"bg-color"},Ae={class:"card-body"},Ne=["src","alt"],je={class:"cajatipos"},Le=["src"],Oe={props:["id"],async setup(u){let s,r;const i=u;F(n=>({"0ceaaeff":_(o)}));const t=i.id,l=[];var o="";const d=([s,r]=w(()=>fetch("https://pokeapi.co/api/v2/pokemon/"+t).then(n=>n.json()).then(n=>{n.name=n.name.charAt(0).toUpperCase()+n.name.slice(1);for(let p=0;p<n.types.length;p++)l.push("./Tipos/"+n.types[p].type.name+".svg");return n}).catch(n=>console.error(n.message))),s=await s,r(),s);return[s,r]=w(()=>fetch("https://pokeapi.co/api/v2/pokemon-species/"+t).then(n=>n.json()).then(n=>(o="var(--"+n.color.name+")",n))),s=await s,r(),(n,p)=>(h(),v("div",Pe,[e("a",{href:n.$router.resolve({name:"Detalle",params:{id:_(t)}}).href},[e("div",Ie,[e("span",Se,f(_(t)),1),e("h1",null,f(_(d).name),1)]),e("div",Ae,[e("img",{class:"pokemon",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+_(t)+".png",alt:"foto de "+_(d).name},null,8,Ne),e("div",je,[(h(),v(g,null,b(l,$=>e("img",{class:"tipos",key:$.slot,src:$,alt:""},null,8,Le)),64))])])],8,Ee)]))}};var q=P(Oe,[["__scopeId","data-v-0ac33aba"]]),De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const Be=u=>(D("data-v-4b49ec86"),u=u(),B(),u),Ve=Be(()=>e("h1",null,"Cadena evolutiva",-1)),He={class:"cadena container-sm"},Te={props:["urlCadena","id"],async setup(u){let s,r;const i=u;let t=0;const l=[];return[s,r]=w(()=>fetch(i.urlCadena).then(o=>o.json()).then(o=>{t=o.chain.species.url.split("/").slice(-2,-1).pop(),l.push(t),o.chain.evolves_to.length&&(t=o.chain.evolves_to[0].species.url.split("/").slice(-2,-1).pop(),l.push(t),o.chain.evolves_to[0].evolves_to.length&&(t=o.chain.evolves_to[0].evolves_to[0].species.url.split("/").slice(-2,-1).pop(),l.push(t)))}).catch(o=>console.error(o.message))),await s,r(),(o,d)=>(h(),v(g,null,[Ve,e("div",He,[(h(),v(g,null,b(l,n=>C(q,{key:n,id:n},null,8,["id"])),64))])],64))}};var Fe=P(Te,[["__scopeId","data-v-4b49ec86"]]);const y=u=>(D("data-v-175e684a"),u=u(),B(),u),qe={class:"container"},ze={class:"row justify-content-center"},Me={class:"text-capitalize"},Ue=y(()=>e("button",{id:"sound"},[e("img",{src:Ce})],-1)),We={class:"text-capitalize text-white bg-color rounded-3 p-1 no-cursor"},Re={class:"col-12 col-lg-4 mt-3"},Ke={class:"table-responsive ps-5"},Ge={class:"table"},Je=y(()=>e("th",{class:"text-end"},"ID",-1)),Qe={class:"text-start ps-4"},Xe=y(()=>e("th",{class:"text-end"},"Altura",-1)),Ye={class:"text-start ps-4"},Ze=y(()=>e("th",{class:"text-end"},"Peso",-1)),et={class:"text-start ps-4"},tt=y(()=>e("th",{class:"text-end"},"Habilidades",-1)),st={class:"text-start ps-3"},ot=y(()=>e("th",{class:"text-end"},"Tipo",-1)),nt={class:"text-start ps-3"},at=y(()=>e("th",{class:"text-end"},"Forma",-1)),rt={class:"text-start ps-3"},ct={class:"col-12 col-lg-4 justify-content-center"},lt={class:"card border-0"},it={class:"scene"},dt={id:"fron",class:"cardd__face cardd__face--front"},ut={class:"cardd border-0"},_t={class:"card-body"},pt=["src","alt"],ht={id:"ba",class:"cardd__face cardd__face--back"},mt=y(()=>e("div",{class:"fs-3"},"Ataques especiales",-1)),vt={class:"table-responsive"},ft={class:"table"},gt={class:"col-12 col-lg-4 mt-5"},bt={class:"col-4 text-end pe-3"},yt={class:"progress col-8"},xt={props:["id"],async setup(u){let s,r;const i=u;F(a=>({"45e704e8":_(n)}));const t=i.id,l=["Vida","Ataque","Defensa","At.Especial","Def.Especial","Velocidad"],o=[],d=[];var n="",p="";const $=[],U=[],A=[],E=[],I=[],V=[];function W(){var a=document.querySelector(".cardd");a.classList.toggle("is-flipped")}const x=([s,r]=w(()=>fetch("https://pokeapi.co/api/v2/pokemon/"+t).then(a=>a.json()).then(a=>{for(let c=0;c<a.types.length;c++)U.push(a.types[c].type.name);a.stats.forEach(c=>{d.push(c.base_stat)});for(let c=0;c<3;c++)$.push(a.moves[c].move.url);return a}).catch(a=>console.error(a.message))),s=await s,r(),s);for(let a=0;a<3;a++)[s,r]=w(()=>fetch($[a]).then(c=>c.json()).then(c=>{if(c.power==""||c.power==null){I.push(c.name),E.push("-");var m={poderesNombre:I,poderes:E}}else{I.push(c.name),E.push(c.power);var m={poderesNombre:I,poderes:E}}V.push(m)}).catch(c=>console.error(c.message))),s=await s,r();const R=([s,r]=w(()=>fetch("https://pokeapi.co/api/v2/pokemon-species/"+t).then(a=>a.json()).then(a=>{if(n="var(--"+a.color.name+")",p=a.genera[5].genus,a.varieties.length<2)for(let c=0;c<a.varieties.length;c++)A.push(a.varieties[c].pokemon.name);else for(let c=0;c<2;c++)A.push(a.varieties[c].pokemon.name);return a})),s=await s,r(),s),K=(a=>{let c=a[0];for(let m=0;m<a.length;m++)a[m]>c&&(c=a[m]);return c})(d);d.forEach(a=>{o.push("width:"+a/K*100+"%")});const G=()=>{if(document.getElementById("sound").disabled=!0,t<=721)var a=new Audio("./cries/"+t+".mp3");else var a=new Audio("./cries/"+t+".wav");a.play(),setTimeout(()=>{document.getElementById("sound").disabled=!1},1500)};return O(()=>{t<=802?document.getElementById("sound").addEventListener("click",G):document.getElementById("sound").style.display="none"}),(a,c)=>(h(),v("div",qe,[e("div",ze,[e("h1",Me,[te(f(_(x).name)+" ",1),Ue]),e("div",null,[e("span",We,f(_(p)),1)]),e("div",Re,[e("div",Ke,[e("table",Ge,[e("tr",null,[Je,e("td",Qe,f("#"+_(t)),1)]),e("tr",null,[Xe,e("td",Ye,f(_(x).height/10)+"m",1)]),e("tr",null,[Ze,e("td",et,f(_(x).weight/10)+"kg",1)]),e("tr",null,[tt,e("td",st,[(h(!0),v(g,null,b(_(x).abilities,m=>(h(),v("span",{key:_(t),class:"text-white bg-color rounded-3 mx-1 no-cursor"},f(m.ability.name),1))),128))])]),e("tr",null,[ot,e("td",nt,[(h(!0),v(g,null,b(_(x).types,m=>(h(),v("span",{key:_(t),class:se([m.type.name,"text-white px-3 mx-1 rounded-3 text-capitalize"])},f(m.type.name),3))),128))])]),e("tr",null,[at,e("td",rt,[(h(),v(g,null,b(A,m=>e("span",{key:_(t)},f(m),1)),64))])])])])]),e("div",ct,[e("div",lt,[e("div",it,[e("div",{class:"cardd cursor",onClick:W},[e("div",dt,[e("div",ut,[e("div",_t,[e("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+_(t)+".png",alt:"foto de "+_(x).name},null,8,pt)])])]),e("div",ht,[mt,e("div",vt,[e("table",ft,[e("tbody",null,[(h(),v(g,null,b(V,(m,k)=>e("tr",null,[e("td",null,f(m.poderesNombre[k]),1),e("td",null,f(m.poderes[k]),1)])),64))])])])])])])])]),e("div",gt,[(h(),v(g,null,b(d,(m,k)=>e("div",{class:"row",key:k},[e("label",bt,f(l[k]),1),e("div",yt,[e("div",{class:"progress-bar progress-bar-striped progress-bar-animated",id:"prueba",role:"progressbar","aria-valuenow":"45","aria-valuemin":"0","aria-valuemax":"65",style:oe(o[k])},f(m),5)])])),64))]),C(Fe,{urlCadena:_(R).evolution_chain.url,id:_(t)},null,8,["urlCadena","id"])])]))}};var kt=P(xt,[["__scopeId","data-v-175e684a"]]),wt="/Pokedexs/question.gif";const $t={},z=u=>(D("data-v-37a2502e"),u=u(),B(),u),Ct=z(()=>e("img",{src:wt,alt:"Error"},null,-1)),Pt=z(()=>e("h1",null,"\xA1UPS! Ha habido un error",-1)),Et=[Ct,Pt];function It(u,s){return h(),v("div",null,Et)}var St=P($t,[["render",It],["__scopeId","data-v-37a2502e"]]),At="([1-9]|[1-9][0-9]|[1-7][0-9]{2}|8[0-8][0-9]|89[0-8])";const Nt=[{path:"/:pathMatch(.*)*",name:"NotFound",component:St},{path:"/",name:"Home",component:$e},{path:"/:id"+At,name:"Detalle",component:kt,props:!0}],jt=ne({history:ae(),routes:Nt});const M=re(ge);M.use(jt);M.mount("#app");