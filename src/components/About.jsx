import { createElement as h } from "react";

export default function About() {
  return h("section", { id: "about", className: "sec" }, h("div", { className: "about" },
    h("div", null, h("h2", null, "About RakSam Kicks"), h("p", null, "We started RakSam Kicks to make good shoes easy to buy. Every pair is tested for comfort, priced fairly and shipped fast, with free returns if the fit is not right.")),
    h("div", { className: "stats" }, [["50k+", "Happy customers"], ["200+", "Shoe styles"], ["30 days", "Free returns"], ["4.8/5", "Average rating"]].map((x) => h("div", { key: x[1], className: "rv" }, h("b", null, x[0]), h("small", null, x[1]))))));
}
