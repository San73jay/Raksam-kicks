import { createElement as h } from "react";

function Logo({foot}){
 const id="lgm"+(foot?"f":"h");
 return h("span",{className:"lgw"},
  h("svg",{className:"lm",viewBox:"0 0 48 48","aria-hidden":true},
   h("defs",null,h("linearGradient",{id,x1:0,y1:0,x2:1,y2:1},h("stop",{offset:0,style:{stopColor:"var(--lg1,#ff9a3c)"}}),h("stop",{offset:.5,style:{stopColor:"var(--lg2,#ff3b4e)"}}),h("stop",{offset:1,style:{stopColor:"var(--lg3,#a50a1f)"}}))),
   h("path",{d:"M24 2.5L43 12.5V30C43 38 35 43.5 24 46.5C13 43.5 5 38 5 30V12.5Z",fill:"url(#"+id+")",stroke:"rgba(255,255,255,.55)",strokeWidth:1.6,strokeLinejoin:"round"}),
   h("path",{d:"M24 6.5L39.5 14.5V30C39.5 36 33.5 40.2 24 42.8C14.5 40.2 8.5 36 8.5 30V14.5Z",fill:"none",stroke:"rgba(255,255,255,.28)",strokeWidth:1}),
   h("text",{x:24,y:32.5,textAnchor:"middle",fontSize:27,fontWeight:900,fontStyle:"italic",fontFamily:"Archivo,Arial,sans-serif",style:{fill:"var(--lgr,#fff)"}},"R"),
   h("path",{d:"M9.5 37C19 32.5 31 31 40 24.5",stroke:"rgba(0,0,0,.55)",strokeWidth:3.2,strokeLinecap:"round",fill:"none"}),
   h("path",{d:"M36 8.5l1.2 2.6 2.6 1.2-2.6 1.2L36 16.1l-1.2-2.6-2.6-1.2 2.6-1.2z",fill:"#fff"})),
  h("span",{className:"lgt"},h("b",null,"RAKSAM",h("em",null,"KICKS")),h("small",null,"PREMIUM FOOTWEAR")));
}

export default Logo;
