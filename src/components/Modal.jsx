import { createElement as h, useEffect } from "react";

function Modal({onClose,children,wide,label}){
 useEffect(()=>{const k=e=>{if(e.key==="Escape")onClose()};document.addEventListener("keydown",k);document.body.style.overflow="hidden";return()=>{document.removeEventListener("keydown",k);document.body.style.overflow=""}},[]);
 return h("div",{className:"xm",onClick:e=>{if(e.target===e.currentTarget)onClose()}},h("div",{className:"xd"+(wide?" wide":""),role:"dialog","aria-modal":true,"aria-label":label},h("button",{className:"ib mx","aria-label":"Close",onClick:onClose},"✕"),children));
}

export default Modal;
