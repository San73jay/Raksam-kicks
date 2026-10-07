import { createElement as h, useState } from "react";
import Modal from "./Modal.jsx";
import { INR } from "../utils/helpers.js";

function Checkout({items,onClose,onPlaced,onView}){
 const [f,setF]=useState({name:"",phone:"",email:"",addr:"",city:"",pin:"",state:""}),[pay,setPay]=useState("upi"),[code,setCode]=useState(""),[er,setEr]=useState({}),[ord,setOrd]=useState(null);
 const sub=items.reduce((a,i)=>a+i.price*i.qty,0),disc=code.trim().toUpperCase()==="TREAD10"?Math.round(sub*.1):0,ship=sub-disc>=1999?0:99,tot=sub-disc+ship;
 const set=k=>e=>setF({...f,[k]:e.target.value});
 const place=()=>{const e={};
  if(f.name.trim().length<2)e.name="Enter your full name";
  if(!/^[6-9]\d{9}$/.test(f.phone))e.phone="Enter a valid 10-digit mobile number";
  if(!/^\S+@\S+\.\S+$/.test(f.email))e.email="Enter a valid email";
  if(f.addr.trim().length<8)e.addr="Enter your full address";
  if(!f.city.trim())e.city="Enter your city";
  if(!/^\d{6}$/.test(f.pin))e.pin="Enter a 6-digit pincode";
  if(!f.state.trim())e.state="Enter your state";
  setEr(e);if(Object.keys(e).length)return;
  const o={id:"RK"+Date.now().toString().slice(-8),ts:Date.now(),items:items.map(i=>({key:i.key,id:i.id,name:i.name,color:i.color,price:i.price,size:i.size,qty:i.qty})),sub,disc,ship,tot,pay,name:f.name.trim(),addr:[f.addr.trim(),f.city.trim(),f.state.trim()].join(", ")+" - "+f.pin};setOrd(o);onPlaced(o);};
 if(ord)return h(Modal,{onClose,label:"Order placed"},h("div",{className:"ok"},h("div",{className:"okc"},"✓"),h("h2",null,"Order placed!"),h("p",null,"Thank you, "+ord.name.split(" ")[0]+". Your order number is "+ord.id+"."),h("p",null,"Total "+INR(ord.tot)+" · "+({upi:"UPI",card:"Card",cod:"Cash on delivery"})[ord.pay]),h("small",null,"Demo store: no real payment was taken and no order was sent."),h("button",{className:"cta",onClick:onView},"View my orders"),h("button",{className:"ib",onClick:onClose},"Continue shopping")));
 const fld=(k,l,t)=>h("label",{className:"fl"},l,h("input",{type:t||"text",value:f[k],onChange:set(k),"aria-invalid":!!er[k]}),er[k]&&h("em",{className:"er"},er[k]));
 return h(Modal,{onClose,wide:1,label:"Checkout"},h("h2",null,"Checkout"),
  h("div",{className:"ck"},
   h("div",null,h("h3",null,"Delivery details"),h("div",{className:"fg2"},fld("name","Full name"),fld("phone","Mobile number","tel"),fld("email","Email","email"),fld("addr","Address"),fld("city","City"),fld("pin","Pincode"),fld("state","State")),
    h("h3",null,"Payment"),[["upi","UPI (GPay, PhonePe, Paytm)"],["card","Credit or debit card"],["cod","Cash on delivery"]].map(x=>h("label",{key:x[0],className:"rd"},h("input",{type:"radio",name:"pay",checked:pay===x[0],onChange:()=>setPay(x[0])}),x[1]))),
   h("aside",{className:"sum"},h("h3",null,"Order summary"),items.map(i=>h("div",{key:i.key,className:"sr"},h("span",null,i.name+" · UK "+i.size+" × "+i.qty),h("b",null,INR(i.price*i.qty)))),
    h("div",{className:"cd"},h("input",{placeholder:"Discount code (try TREAD10)",value:code,onChange:e=>setCode(e.target.value),"aria-label":"Discount code"})),
    h("div",{className:"sr"},h("span",null,"Subtotal"),h("span",null,INR(sub))),
    disc>0&&h("div",{className:"sr"},h("span",null,"TREAD10 (10% off)"),h("span",null,"−"+INR(disc))),
    h("div",{className:"sr"},h("span",null,"Delivery"),h("span",null,ship?INR(ship):"Free")),
    h("div",{className:"sr tt"},h("b",null,"Total"),h("b",null,INR(tot))),
    h("button",{className:"cta",onClick:place},"Place order"),h("small",null,"Demo checkout: no real payment is taken."))));
}

export default Checkout;
