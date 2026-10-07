import { createElement as h } from "react";
import Pic from "./Pic.jsx";
import Stars from "./Stars.jsx";
import { INR, RT } from "../utils/helpers.js";

function ProductCard({p,onOpen,wish,onWish,src}){
 const rt=RT(p);
 return h("article",{className:"card rv"},
  h("div",{className:"pic",onClick:()=>onOpen(p)},p.tag&&h("span",{className:"tag"},p.tag),
   h(Pic,{src,alt:p.name,color:p.color}),
   h("button",{className:"hrt","aria-pressed":wish,"aria-label":wish?"Remove from wishlist":"Save to wishlist",onClick:e=>{e.stopPropagation();onWish(p.id)}},wish?"♥":"♡")),
  h("div",{className:"info"},
   h("div",null,h("h3",{onClick:()=>onOpen(p)},p.name),h("small",null,p.cat)),
   h("div",{className:"rt"},h(Stars,{r:rt.r}),h("b",null,rt.r),h("small",null,"("+rt.n+")")),
   h("div",{className:"row"},h("span",null,h("span",{className:"price"},INR(p.price)),h("span",{className:"off"},h("s",null,INR(Math.round(p.price*1.3/100)*100)),h("em",null,Math.round((1-p.price/(Math.round(p.price*1.3/100)*100))*100)+"% off"))),
    h("button",{className:"add",onClick:()=>onOpen(p)},"View & buy"))));
}

export default ProductCard;
