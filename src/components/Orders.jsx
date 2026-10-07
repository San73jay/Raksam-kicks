import { createElement as h } from "react";
import Pic from "./Pic.jsx";
import { PRODUCTS } from "../data/products.js";
import { DAY, INR, PAYL, STEPS, fmtD } from "../utils/helpers.js";

function Orders({orders,imgs,onCancel,onReorder,onShop}){
 return h("section",{id:"orders",className:"sec"},h("h2",null,"My orders"),
  h("p",null,orders.length?"Track your orders or buy your favourites again.":"Your placed orders show up here with their delivery status."),
  orders.length===0?h("div",{className:"oe"},h("p",null,"No orders yet. Pick a pair and your order will appear here."),h("button",{className:"cta",onClick:onShop},"Shop all shoes")):
  h("div",{className:"ol"},orders.map(o=>{
   const d=(Date.now()-o.ts)/DAY,s=d>=4?3:d>=2?2:d>=1?1:0;
   return h("article",{className:"oc",key:o.id},
    h("div",{className:"oh"},h("div",null,h("b",null,"Order "+o.id),h("small",null,"Placed on "+fmtD(o.ts))),
     h("span",{className:"os"+(o.cancelled?" x":s===3?" d":"")},o.cancelled?"Cancelled":STEPS[s])),
    h("div",{className:"oi"},o.items.map(i=>h("div",{className:"oit",key:i.key},
     h("div",{className:"th"},h(Pic,{src:imgs[i.id]||(PRODUCTS.find(x=>x.id===i.id)||{}).img,alt:i.name,color:i.color})),
     h("div",null,h("b",null,i.name),h("small",null,"UK "+i.size+" · Qty "+i.qty)),
     h("b",null,INR(i.price*i.qty))))),
    !o.cancelled&&h("ol",{className:"trk","aria-label":"Order progress"},STEPS.map((t,k)=>h("li",{key:t,className:k<=s?"on":""},t))),
    h("div",{className:"of"},
     h("div",null,h("b",null,"Total "+INR(o.tot)+" · "+PAYL[o.pay]),h("small",null,"Deliver to: "+o.addr),
      !o.cancelled&&h("small",null,s===3?"Delivered":"Expected by "+fmtD(o.ts+5*DAY))),
     h("div",{className:"ob"},h("button",{className:"ib",onClick:()=>onReorder(o)},"Buy again"),
      !o.cancelled&&s===0&&h("button",{className:"ib",onClick:()=>onCancel(o.id)},"Cancel order"))))})));
}

export default Orders;
