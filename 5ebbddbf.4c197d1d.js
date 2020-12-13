(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{100:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(99),s=r(101);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(s.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},101:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function s(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return s}))},102:function(e,t,r){"use strict";var n=r(0),s=r.n(n),o=r(13),i=r(101),a=r(8);const u=Object(n.createContext)({collectLink:()=>{}});var c=r(100),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:d,activeClassName:f,"data-noBrokenLinkCheck":m}=e,b=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:v}=Object(c.b)(),h=Object(n.useContext)(u),O=p||d,y=Object(i.a)(O),j=null==O?void 0:O.replace("pathname://",""),g=void 0!==j?(e=>e.startsWith("/"))(w=j)?v(w):w:void 0;var w;const q=Object(n.useRef)(!1),x=r?o.e:o.c,T=a.a.canUseIntersectionObserver;let k;Object(n.useEffect)((()=>(!T&&y&&window.docusaurus.prefetch(g),()=>{T&&k&&k.disconnect()})),[g,T,y]);const L=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,E=!g||!y||L;return g&&y&&!L&&!m&&h.collectLink(g),E?s.a.createElement("a",Object.assign({href:g},!y&&{target:"_blank",rel:"noopener noreferrer"},b)):s.a.createElement(x,Object.assign({},b,{onMouseEnter:()=>{q.current||(window.docusaurus.preload(g),q.current=!0)},innerRef:e=>{var t,r;T&&e&&y&&(t=e,r=()=>{window.docusaurus.prefetch(g)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),r())}))})),k.observe(t))},to:g||""},r&&{activeClassName:f}))}},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return d})),r.d(t,"metadata",(function(){return f})),r.d(t,"rightToc",(function(){return m})),r.d(t,"default",(function(){return v}));var n=r(2),s=r(0),o=r.n(s),i=r(98),a=r(53),u=r.n(a);function c(e){return o.a.createElement("div",{className:a.timeline},e.children)}function l(e){return o.a.createElement("div",{className:u.a.step},o.a.createElement("h2",null,e.title),o.a.createElement("p",null,e.children))}var p=r(102);const d={id:"hiring-process",title:"Le processus d'embauche",slug:"/trouver-un-job/le-processus-d-embauche",keywords:["recrutement d\xe9veloppeur web","recrutement developpeur","tests techniques recrutement","tests techniques"],description:"Les diff\xe9rentes \xe9tapes pour un recrutement de d\xe9veloppeuse ou d\xe9veloppeur web."},f={unversionedId:"find_a_job/hiring-process",id:"find_a_job/hiring-process",isDocsHomePage:!1,title:"Le processus d'embauche",description:"Les diff\xe9rentes \xe9tapes pour un recrutement de d\xe9veloppeuse ou d\xe9veloppeur web.",source:"@site/docs/find_a_job/hiring-process.mdx",slug:"/trouver-un-job/le-processus-d-embauche",permalink:"/ressources/docs/trouver-un-job/le-processus-d-embauche",editUrl:"https://github.com/women-on-rails/ressources/edit/master/website/docs/find_a_job/hiring-process.mdx",version:"current",lastUpdatedAt:1605380271,sidebar:"docs",previous:{title:"Les offres",permalink:"/ressources/docs/trouver-un-job/les-offres"},next:{title:"Les types de tests techniques",permalink:"/ressources/docs/trouver-un-job/les-types-de-tests-techniques"}},m=[],b={rightToc:m};function v({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Voici un petit descriptif du processus courant d'embauche, ",Object(i.b)("a",{href:"https://yangshun.github.io/tech-interview-handbook/interview-formats#formats-of-famous-companies",target:"_blank"},"\xe7a diff\xe8re d'une entreprise \xe0 l'autre"),", mais dans les grandes lignes \xe7a se r\xe9sume \xe0 ces quelques \xe9tapes."),Object(i.b)(c,{mdxType:"Timeline"},Object(i.b)(l,{title:"L'entretien",mdxType:"TimelineStep"},"Qu'il soit t\xe9l\xe9phonique, en visio-conf\xe9rence ou face \xe0 face, c'est la premi\xe8re \xe9tape, l'occasion de faire connaissance avec le premier interlocuteur de la soci\xe9t\xe9. Au del\xe0 du bien connu \"Racontez moi votre parcours\", on pourra aussi te poser des ",Object(i.b)(p.a,{to:"questions-techniques",mdxType:"Link"},"questions techniques"),"."),Object(i.b)(l,{title:"Le ou les tests techniques",mdxType:"TimelineStep"},"La premi\xe8re \xe9tape pass\xe9e, il faudra certainement faire un ou plusieurs tests techniques, mais pas de panique ! On a quelques ressources pour t'aider dans cette t\xe2che qui est une magnifique occasion de s'am\xe9liorer et d'avoir des retours de ce qu'attendent les entreprises\xa0: ",Object(i.b)("br",null),"\u27a1\ufe0f ",Object(i.b)(p.a,{to:"les-types-de-tests-techniques",mdxType:"Link"},"Les diff\xe9rents types de tests techniques"),Object(i.b)("br",null),"\u27a1\ufe0f ",Object(i.b)(p.a,{to:"s-entrainer-aux-tests",mdxType:"Link"},"S'entra\xeener aux tests")),Object(i.b)(l,{title:"La rencontre  avec l'\xe9quipe",mdxType:"TimelineStep"},"Souvent on va te proposer de rencontrer quelqu'un de l'\xe9quipe, soit ta ou ton futur\xb7e manager ou un\xb7e coll\xe8gue. \xc7a va te permettre de voir si le feeling passe et si vous partagez les m\xeames valeurs !"),Object(i.b)(l,{title:"R\xe9f\xe9rences",mdxType:"TimelineStep"},"L'entreprise pourra \xe9ventuellement v\xe9rifier les r\xe9f\xe9rences que tu as inscrites sur ton CV."),Object(i.b)(l,{title:"Ce qui est attendu d'un entretien (technique ou de personnalit\xe9)",mdxType:"TimelineStep"},"Les qualit\xe9s principales qui plaisent en g\xe9n\xe9ral sont la capacit\xe9 \xe0 s'adapter, l'ouverture d'esprit, l'humilit\xe9 (mais savoir aussi se mettre en avant ^^), reconna\xeetre et apprendre de ses erreurs."),Object(i.b)(l,{title:"Apr\xe8s l'entretien",mdxType:"TimelineStep"},"Au bout d'un certain temps, on peut se rappeler \xe0 la m\xe9moire de l'entreprise et remercier la personne qui nous a fait passer le test et qui a pris du temps pour nous expliquer certains concepts, c'est l'occasion de demander des nouvelles de ta candidature. Si tu n'as pas la r\xe9ponse pour le poste \xe0 ce moment-l\xe0, tu pourras alors relancer, g\xe9n\xe9ralement cela donne une image dynamique et motiv\xe9e et cela pourra faire la diff\xe9rence s'ils h\xe9sitaient.")))}v.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),s=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=s.a.createContext({}),l=function(e){var t=s.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},f=s.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?s.a.createElement(m,a(a({ref:t},c),{},{components:r})):s.a.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";var n=r(0),s=r(20);t.a=function(){const e=Object(n.useContext)(s.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);