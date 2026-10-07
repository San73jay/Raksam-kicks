import { createElement as h, useState } from "react";
import Modal from "./Modal.jsx";
import Pic from "./Pic.jsx";
import Stars from "./Stars.jsx";
import { DESC, REV, SIZES } from "../data/products.js";
import { INR, RT } from "../utils/helpers.js";

function ProductDetail({p,onClose,onAdd,onBuy,wish,onWish}){
 const [s,setS]=useState(null),[q,setQ]=useState(1),rt=RT(p),mrp=Math.round(p.price*1.3/100)*100;
 return h(Modal,{onClose,wide:1,label:p.name},
  h("div",{className:"pd"},
   h("div",{className:"pic pdp"},p.tag&&h("span",{className:"tag"},p.tag),h(Pic,{src:p.img,alt:p.name,color:p.color})),
   h("div",{className:"pdi"},h("small",null,p.cat),h("h2",null,p.name),
    h("div",{className:"rt"},h(Stars,{r:rt.r}),h("b",null,rt.r),h("small",null,"("+rt.n+" reviews)")),
    h("p",null,DESC[p.cat]),
    h("div",{className:"pr"},h("span",{className:"price"},INR(p.price)),h("s",null,INR(mrp)),h("em",null,Math.round((1-p.price/mrp)*100)+"% off")),
    h("ul",{className:"ship"},h("li",null,"Delivery in 3 to 5 working days"),h("li",null,"Cash on delivery available"),h("li",null,"30-day free returns")),
    h("b",null,"Select size (UK)"),
    h("div",{className:"sizes"},SIZES.map(z=>h("button",{key:z,className:"sz","aria-pressed":s===z,onClick:()=>setS(z)},z))),
    h("div",{className:"qty"},h("button",{"aria-label":"Decrease",onClick:()=>setQ(Math.max(1,q-1))},"−"),q,h("button",{"aria-label":"Increase",onClick:()=>setQ(q+1)},"+")),
    h("div",{className:"pbt"},h("button",{className:"add",disabled:!s,onClick:()=>onAdd(p,s,q)},s?"Add to cart":"Pick a size"),h("button",{className:"cta",disabled:!s,onClick:()=>onBuy(p,s,q)},"Buy now"),
     h("button",{className:"ib hrt2","aria-pressed":wish,"aria-label":"Save to wishlist",onClick:()=>onWish(p.id)},wish?"♥":"♡")))),
  h("div",{className:"rvw"},h("h3",null,"Customer reviews (sample)"),REV.map(r=>h("div",{key:r[0]},h("b",null,r[0]+" "),h(Stars,{r:r[1]}),h("p",null,r[2])))));
}

export default ProductDetail;
