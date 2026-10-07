import { createElement as h, useEffect, useRef, useState } from "react";
import Pic from "./Pic.jsx";
import { IMG } from "../data/products.js";
import { HERO_COLORS } from "../data/content.js";

function HeroSlider(){
 const E=[IMG.k1,IMG.k4,IMG.k14,IMG.k15,IMG.k9],n=5;
 const [imgs,setImgs]=useState(E);
 const [i,setI]=useState(0);
 const hold=useRef(false),x0=useRef(null);
 useEffect(()=>{try{localStorage.setItem("tread-hero",JSON.stringify(imgs))}catch(e){}},[imgs]);
 useEffect(()=>{const t=setInterval(()=>{if(!hold.current)setI(v=>(v+1)%n)},6000);return()=>clearInterval(t)},[]);
 return h("div",{className:"hsl",onMouseEnter:()=>{hold.current=true},onMouseLeave:()=>{hold.current=false},
  onTouchStart:e=>{x0.current=e.touches[0].clientX},
  onTouchEnd:e=>{if(x0.current==null)return;const d=e.changedTouches[0].clientX-x0.current;if(Math.abs(d)>40)setI(v=>(v+(d<0?1:n-1))%n);x0.current=null}},
  h("div",{className:"sltr",style:{transform:"translateX(-"+i*100+"%)"}},imgs.map((d,k)=>h("div",{key:k,className:"sl"+(k===i?" on":"")},
   h("div",{className:"sd"},h(Pic,{src:d,slot:"h"+(k+1),alt:"Featured shoe "+(k+1),color:HERO_COLORS[k]}))))),
  h("div",{className:"sdots"},imgs.map((_,k)=>h("button",{key:k,"aria-label":"Slide "+(k+1),"aria-current":k===i,onClick:()=>setI(k)}))));
}

export default HeroSlider;
