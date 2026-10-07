import React, { createElement as h, useEffect, useState } from "react";

function AuthModal({mode,setMode,onClose,onDone}){
 const [f,setF]=useState({name:"",email:"",pw:""});
 const [err,setErr]=useState("");
 const [show,setShow]=useState(false);
 const su=mode==="signup";
 useEffect(()=>{const k=e=>{if(e.key==="Escape")onClose()};window.addEventListener("keydown",k);return()=>window.removeEventListener("keydown",k)},[]);
 const set=k=>e=>{setF({...f,[k]:e.target.value});setErr("")};
 const submit=()=>{
  if(su&&f.name.trim().length<2)return setErr("Please enter your full name.");
  if(!/^\S+@\S+\.\S+$/.test(f.email))return setErr("Enter a valid email address.");
  if(f.pw.length<6)return setErr("Password must be at least 6 characters.");
  let name=f.name.trim();
  if(!su){try{const u=JSON.parse(localStorage.getItem("sk-user"));if(u&&u.email===f.email)name=u.name}catch(e){}if(!name)name=f.email.split("@")[0]}
  onDone({name,email:f.email})};
 return h(React.Fragment,null,h("div",{className:"ov",onClick:onClose}),
  h("div",{className:"md",role:"dialog","aria-modal":true,"aria-label":su?"Sign up":"Log in",onKeyDown:e=>{if(e.key==="Enter")submit()}},
   h("button",{className:"mx","aria-label":"Close",onClick:onClose},"✕"),
   h("h2",null,su?"Create your account":"Welcome back"),
   h("p",{className:"ms"},su?"Join RakSam Kicks for faster checkout and order tracking.":"Log in to see your orders and saved details."),
   h("div",{className:"tabs"},["login","signup"].map(m=>h("button",{key:m,className:"tb","aria-pressed":mode===m,onClick:()=>{setMode(m);setErr("")}},m==="login"?"Log in":"Sign up"))),
   su&&h("input",{placeholder:"Full name",value:f.name,onChange:set("name"),"aria-label":"Full name",autoFocus:true}),
   h("input",{type:"email",placeholder:"Email address",value:f.email,onChange:set("email"),"aria-label":"Email",autoFocus:!su}),
   h("div",{className:"pw"},h("input",{type:show?"text":"password",placeholder:"Password (min 6 characters)",value:f.pw,onChange:set("pw"),"aria-label":"Password"}),h("button",{className:"eye",onClick:()=>setShow(!show)},show?"Hide":"Show")),
   err&&h("div",{className:"er",role:"alert"},err),
   h("button",{className:"cta",onClick:submit},su?"Create account":"Log in"),
   h("small",{className:"ms"},"Demo store: accounts are saved only in your browser.")));
}

export default AuthModal;
