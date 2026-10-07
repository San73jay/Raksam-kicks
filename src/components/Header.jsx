import React, { createElement as h } from "react";
import Logo from "./Logo.jsx";
import { CATS, PRODUCTS } from "../data/products.js";
import { go } from "../utils/helpers.js";

// Sale strip + sticky header (logo, search, theme, account, cart) + nav bar.
export default function Header({ scrolled, active, q, setQ, theme, user, onLogin, onSignup, onLogout, count, onCart, nav, setNav, setCat, ordersCount }) {
  return h(React.Fragment, null,
    h("div", { className: "top" }, "Sale is live: extra 10% off with code TREAD10 and free delivery over ₹1,999"),
    h("header", { className: scrolled ? "sc" : "" },
      h("div", { className: "wrap bar" },
        h("button", { className: "logo lg", onClick: () => go("home"), "aria-label": "RakSam Kicks home" }, h(Logo)),
        h("div", { className: "srch", role: "search" }, h("span", { "aria-hidden": true }, "⌕"),
          h("input", { type: "search", placeholder: "Search for shoes, brands and more", value: q, "aria-label": "Search shoes", onChange: (e) => { setQ(e.target.value); if (e.target.value.length === 1) go("shop"); }, onKeyDown: (e) => { if (e.key === "Enter") go("shop"); } })),
        h("div", { className: "acts" },
          h("button", { className: "ib", onClick: theme.toggle, "aria-label": "Change theme, current: " + theme.label[1] }, h("span", { className: "ti" }, theme.label[0]), h("span", { className: "tx" }, theme.label[1])),
          user ? h("div", { className: "dd acct" }, h("button", { className: "ib", "aria-haspopup": true }, "👤", h("span", { className: "tx" }, user.name.split(" ")[0])),
            h("div", { className: "dm" }, h("div", { className: "who" }, user.email), h("button", { onClick: () => go("orders") }, "My orders"), h("button", { onClick: onLogout }, "Log out"))) :
            [h("button", { key: "l", className: "ib", onClick: onLogin }, "👤", h("span", { className: "tx" }, "Login")),
              h("button", { key: "s", className: "ib hm su", onClick: onSignup }, "Sign up")],
          h("button", { className: "ib", onClick: onCart, "aria-label": "Open cart" }, "🛒", h("span", { className: "tx" }, "Cart"), h("span", { className: "badge", key: count }, count)),
          h("button", { className: "ib menu", "aria-label": "Menu", "aria-expanded": nav, onClick: () => setNav(!nav) }, nav ? "✕" : "☰"))),
      h("div", { className: "nbar" + (nav ? " open" : "") }, h("nav", { className: "wrap nav", "aria-label": "Main" },
        [["Home", "home"], ["Shop", "shop"]].map((l) => h("button", { key: l[1], className: "nl", "aria-current": active === l[1], onClick: () => { setNav(false); go(l[1]); } }, l[0])),
        h("div", { className: "dd" }, h("button", { className: "nl", "aria-current": active === "categories", onClick: () => go("categories"), "aria-haspopup": true }, "Categories ▾"),
          h("div", { className: "dm" }, CATS.map((c) => h("button", { key: c, onClick: () => { setCat(c); setNav(false); go("shop"); } }, c, h("small", null, c === "All" ? PRODUCTS.length : PRODUCTS.filter((x) => x.cat === c).length))))),
        [["Orders" + (ordersCount ? " (" + ordersCount + ")" : ""), "orders"], ["About", "about"], ["Contact", "contact"]].map((l) => h("button", { key: l[1], className: "nl", "aria-current": active === l[1], onClick: () => { setNav(false); go(l[1]); } }, l[0]))))));
}
