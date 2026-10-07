import { createElement as h } from "react";
import ProductCard from "./ProductCard.jsx";
import { CATS } from "../data/products.js";

// Filter chips + sort + product grid (with skeleton loading and empty state).
export default function Shop({ cat, setCat, wish, sort, setSort, loading, list, imgs, onOpen, onWish }) {
  return h("section", { id: "shop" },
    h("div", { className: "tools" },
      CATS.map((c) => h("button", { key: c, className: "chip", "aria-pressed": cat === c, onClick: () => setCat(c) }, c)),
      h("button", { className: "chip", "aria-pressed": cat === "Saved", onClick: () => setCat("Saved") }, "♥ Saved (" + wish.length + ")"),
      h("div", { className: "sp" },
        h("select", { value: sort, onChange: (e) => setSort(e.target.value), "aria-label": "Sort" },
          h("option", { value: "featured" }, "Featured"), h("option", { value: "low" }, "Price: low to high"), h("option", { value: "high" }, "Price: high to low")))),
    h("div", { className: "grid" }, loading ? [1, 2, 3, 4, 5, 6].map((k) => h("div", { key: k, className: "card sk", "aria-hidden": true })) : list.length ? list.map((p) => h(ProductCard, { key: p.id, p, onOpen, wish: wish.includes(p.id), onWish, src: imgs[p.id] || p.img })) : h("p", { className: "empty" }, "No shoes found here. Try a different name or category, or tap the heart on a shoe to save it.")));
}
