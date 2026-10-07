import { createElement as h } from "react";
import HeroSlider from "./HeroSlider.jsx";
import { go } from "../utils/helpers.js";

export default function Hero() {
  return h("section", { id: "home", className: "hero" },
    h("div", null, h("h1", null, "Design & High Quality"),
      h("p", null, "Running, everyday sneakers, boots and casual pairs. Free returns within 30 days."),
      h("button", { className: "cta", onClick: () => go("shop") }, "Shop all shoes")),
    h(HeroSlider));
}
