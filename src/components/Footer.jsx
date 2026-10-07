import { createElement as h } from "react";
import Logo from "./Logo.jsx";
import { CATS } from "../data/products.js";
import { FOOTER_HELP } from "../data/content.js";
import { go } from "../utils/helpers.js";

export default function Footer({ setCat, onInfo }) {
  return h("footer", null, h("div", { className: "wrap" },
    h("div", { className: "fg" },
      h("div", null, h("div", { className: "logo" }, h(Logo, { foot: 1 })), h("p", null, "Comfortable, honest footwear for running, work and weekends.")),
      h("div", null, h("h4", null, "Shop"), CATS.slice(1).map((c) => h("a", { key: c, onClick: () => { setCat(c); go("shop"); } }, c))),
      h("div", null, h("h4", null, "Help"), h("a", { onClick: () => go("about") }, "About us"), h("a", { onClick: () => go("contact") }, "Contact"), FOOTER_HELP.map((x) => h("a", { key: x[0], onClick: () => onInfo(x[0]) }, x[1]))),
      h("div", null, h("h4", null, "Get in touch"), h("p", null, "support@raksamkicks.example"), h("p", null, "+91 98XXX XXXXX"), h("p", null, "Mon to Sat, 9am to 7pm"), h("p", null, "12 Market Street, Your City, India"))),
    h("div", { className: "fb" }, h("span", null, "© 2026 RakSam Kicks. All rights reserved."), h("span", null, "Pay with cards, UPI, net banking or cash on delivery"))));
}
