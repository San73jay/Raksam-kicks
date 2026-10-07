import React, { createElement as h } from "react";
import Pic from "./Pic.jsx";
import { PRODUCTS } from "../data/products.js";
import { INR } from "../utils/helpers.js";

function Cart({items,onClose,onQty,imgs,onCheckout}){
 const total=items.reduce((a,i)=>a+i.price*i.qty,0);
 return h(React.Fragment,null,h("div",{className:"ov",onClick:onClose}),
  h("aside",{className:"dr","aria-label":"Shopping cart"},
   h("div",{className:"row"},h("h2",null,"Your cart"),h("button",{className:"ib",onClick:onClose},"Close")),
   h("div",{className:"items"},items.length===0?h("p",{className:"empty"},"Your cart is empty. Pick a size on any shoe to add it."):
    items.map(i=>h("div",{className:"it",key:i.key},
     h("div",{className:"th"},h(Pic,{src:imgs[i.id]||PRODUCTS.find(x=>x.id===i.id).img,alt:i.name,color:i.color,slot:"p"+i.id})),
     h("div",null,h("b",null,i.name),h("div",null,h("small",null,"Size "+i.size+" · "+INR(i.price))),
      h("div",{className:"qty"},h("button",{"aria-label":"Decrease",onClick:()=>onQty(i.key,-1)},"−"),i.qty,h("button",{"aria-label":"Increase",onClick:()=>onQty(i.key,1)},"+"))),
     h("b",null,INR(i.price*i.qty))))),
   h("div",{className:"tot"},h("span",null,"Total"),h("span",null,INR(total))),
   h("button",{className:"cta",disabled:!items.length,onClick:onCheckout},"Checkout")));
}

export default Cart;
