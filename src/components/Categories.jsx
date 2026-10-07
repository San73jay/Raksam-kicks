import { createElement as h } from "react";
import { CATS, PRODUCTS } from "../data/products.js";
import { go } from "../utils/helpers.js";

export default function Categories({ setCat }) {
  return h("section", { id: "categories", className: "sec" }, h("h2", null, "Shop by category"), h("p", null, "Pick the kind of shoe you need and we will filter the store for you."),
    h("div", { className: "cats" }, CATS.slice(1).map((c) => h("button", { key: c, className: "ct rv", onClick: () => { setCat(c); go("shop"); } }, h("span", null, c), h("small", null, PRODUCTS.filter((p) => p.cat === c).length + " styles")))));
}
