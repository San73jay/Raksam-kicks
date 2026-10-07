import { createElement as h } from "react";

function NotFound(){return h("div",{className:"nf"},h("h1",null,"404"),h("p",null,"This page does not exist."),h("button",{className:"cta",onClick:()=>{location.hash="";location.reload()}},"Back to store"))}

export default NotFound;
