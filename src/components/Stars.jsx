import { createElement as h } from "react";

const Stars=({r})=>h("span",{className:"stars","aria-label":r+" out of 5"},"★".repeat(Math.round(r))+"☆".repeat(5-Math.round(r)));

export default Stars;
