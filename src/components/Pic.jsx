import { createElement as h, useEffect, useState } from "react";
import Shoe from "./Shoe.jsx";

function Pic({src,alt,color,slot}){
 const [bad,setBad]=useState(false),[,tick]=useState(0);
 useEffect(()=>{const f=()=>{setBad(false);tick(n=>n+1)};window.addEventListener("sk-photo",f);return()=>window.removeEventListener("sk-photo",f)},[]);
 const u=src;
 return u&&!bad?h("img",{src:u,alt:alt||"Shoe",className:/^data:image\/jpe?g|\.jpe?g($|\?)/i.test(u)?"cov":"",loading:"lazy",onError:()=>setBad(true)}):h(Shoe,{color});
}

export default Pic;
