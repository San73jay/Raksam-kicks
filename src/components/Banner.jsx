import { createElement as h, useEffect, useRef, useState } from "react";
import Pic from "./Pic.jsx";
import { OFFER_IMGS } from "../data/products.js";
import { SLIDES } from "../data/content.js";

function Banner(){
 const ref=useRef(null),idx=useRef(0),hold=useRef(false);
 const [i,setI]=useState(0);
 const to=k=>{const t=ref.current;if(!t)return;const n=SLIDES.length;k=(k+n)%n;t.scrollTo({left:t.children[k].offsetLeft})};
 const onScroll=()=>{const t=ref.current;if(!t)return;const step=t.children[1].offsetLeft-t.children[0].offsetLeft;
  let k=Math.round(t.scrollLeft/step);if(t.scrollLeft+t.clientWidth>=t.scrollWidth-4)k=SLIDES.length-1;idx.current=k;setI(k)};
 useEffect(()=>{const t=setInterval(()=>{if(!hold.current)to(idx.current+1)},7000);return()=>clearInterval(t)},[]);
 return h("section",{className:"bn","aria-label":"Sale offers",onMouseEnter:()=>{hold.current=true},onMouseLeave:()=>{hold.current=false}},
  h("button",{className:"ar l","aria-label":"Previous offer",onClick:()=>to(idx.current-1)},"‹"),
  h("div",{className:"bt",ref,onScroll},SLIDES.map((S,k)=>h("div",{key:k,className:"bc",style:{background:S.bg}},
   h("small",null,S.tag),h("h2",null,S.t),h("p",null,S.s),
   h("div",{className:"sh"},h(Pic,{src:OFFER_IMGS[k],color:S.c,slot:"o"+(k+1)})),
   h("div",{className:"chips"},S.chips.map(c=>h("span",{key:c},c)))))),
  h("button",{className:"ar r","aria-label":"Next offer",onClick:()=>to(idx.current+1)},"›"),
  h("div",{className:"bd"},SLIDES.map((_,k)=>h("button",{key:k,"aria-label":"Offer "+(k+1),"aria-current":k===i,onClick:()=>to(k)}))));
}

export default Banner;
