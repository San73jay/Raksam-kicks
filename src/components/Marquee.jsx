import { createElement as h } from "react";
import { MARQUEE } from "../data/content.js";

export default function Marquee() {
  return h("div", { className: "mq", "aria-hidden": true }, h("div", { className: "mqt" }, MARQUEE.concat(MARQUEE).map((t, k) => h("span", { key: k }, t))));
}
