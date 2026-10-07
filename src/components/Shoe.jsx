import React, { createElement as h } from "react";

const Shoe=({color,w})=>{
 const u="s"+React.useId().replace(/[^a-z0-9]/gi,"");
 const hex=/^#[0-9a-f]{6}$/i.test(color);
 const lum=hex?parseInt(color.slice(1,3),16)*.3+parseInt(color.slice(3,5),16)*.59+parseInt(color.slice(5,7),16)*.11:0;
 const lace=lum>190?"#aeb6c2":"#fff";
 const up="M22 94C20 76 22 58 30 50C38 42 52 40 62 38C70 36 78 28 90 24C96 22 100 26 100 32C104 46 118 54 140 60C170 66 200 70 214 82C222 88 226 92 226 94Z";
 const P=(d,o)=>h("path",Object.assign({d},o));
 const lg=(id,st)=>h("linearGradient",{id:u+id,x1:0,y1:0,x2:0,y2:1},st.map((x,k)=>h("stop",{key:k,offset:x[0],stopColor:x[1],stopOpacity:x[2]})));
 return h("svg",{viewBox:"0 0 240 150",width:w||"100%",role:"img","aria-label":"Shoe"},
  h("defs",null,lg("o",[[0,"#fff",.34],[.45,"#fff",0],[1,"#000",.34]]),lg("m",[[0,"#ffffff",1],[1,"#cdd3db",1]]),
   h("filter",{id:u+"b",x:"-20%",y:"-300%",width:"140%",height:"700%"},h("feGaussianBlur",{stdDeviation:4}))),
  h("ellipse",{cx:122,cy:131,rx:100,ry:7,fill:"#000",opacity:.3,filter:"url(#"+u+"b)"}),
  P("M24 120L210 120C218 120 224 116 227 111C226 120 220 127 208 127L34 127C27 127 22 124 24 120Z",{fill:"#1b2027"}),
  P("M18 104C18 96 24 92 34 92L206 92C224 92 230 102 227 111C225 118 218 122 208 122L34 122C23 122 18 116 18 104Z",{fill:"url(#"+u+"m)"}),
  P("M26 108L216 108",{stroke:"#b9c0ca",strokeWidth:1.5,fill:"none"}),
  P(up,{fill:color}),
  P(up,{fill:"url(#"+u+"o)"}),
  P("M190 70C206 74 220 84 226 94L176 94C180 84 184 76 190 70Z",{fill:"#fff",opacity:.2}),
  P("M22 94C20 76 22 60 30 52L52 44C46 62 46 78 52 94Z",{fill:"#000",opacity:.2}),
  P("M62 90C92 82 132 72 172 80",{stroke:"#fff",strokeWidth:5,strokeLinecap:"round",fill:"none",opacity:.9}),
  P("M96 36C108 52 126 60 150 66L146 74C120 68 100 58 88 44Z",{fill:"#000",opacity:.14}),
  [102,114,126,138,150].map((x,k)=>P("M"+(x+5)+" "+(36+k*6.5)+"L"+(x-4)+" "+(48+k*6.5),{key:k,stroke:lace,strokeWidth:3.2,strokeLinecap:"round",fill:"none"})),
  P("M78 32C82 22 92 18 99 22C102 28 102 36 100 42C92 42 84 38 78 32Z",{fill:"#fff",opacity:.22,stroke:"#000",strokeOpacity:.2}),
  P("M30 50C38 42 52 40 62 38C70 36 78 28 90 24",{stroke:"#fff",strokeOpacity:.4,strokeWidth:3,fill:"none"}),
  P("M24 54C22 46 24 40 28 38L36 40C32 44 30 48 32 54Z",{fill:"#000",opacity:.35}));
};

export default Shoe;
