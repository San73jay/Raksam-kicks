import React, { createElement as h, useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Banner from "./components/Banner.jsx";
import Categories from "./components/Categories.jsx";
import Shop from "./components/Shop.jsx";
import Orders from "./components/Orders.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Checkout from "./components/Checkout.jsx";
import InfoModal from "./components/InfoModal.jsx";
import AuthModal from "./components/AuthModal.jsx";
import NotFound from "./components/NotFound.jsx";
import useTheme from "./hooks/useTheme.js";
import useToast from "./hooks/useToast.js";
import useCart from "./hooks/useCart.js";
import useOrders from "./hooks/useOrders.js";
import useWishlist from "./hooks/useWishlist.js";
import useAuth from "./hooks/useAuth.js";
import useScrollSpy from "./hooks/useScrollSpy.js";
import useReveal from "./hooks/useReveal.js";
import { PRODUCTS } from "./data/products.js";
import { go } from "./utils/helpers.js";

// App = state + wiring only. Each section of the page is its own component in ./components.
export default function App() {
  const theme = useTheme();
  const { toast, flash } = useToast();
  const { cart, add, qty, reorder, clear, count } = useCart(flash);
  const { orders, saveOrder, cancelOrder } = useOrders(flash);
  const { wish, toggle: tw } = useWishlist();
  const { user, login, logout } = useAuth(flash);
  const { scrolled, active } = useScrollSpy();

  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [auth, setAuth] = useState(null);
  const [detail, setDetail] = useState(null), [chk, setChk] = useState(false), [info, setInfo] = useState(null), [ld, setLd] = useState(true), [nf] = useState(/^#\/./.test(location.hash));
  const [imgs] = useState(() => { try { return JSON.parse(localStorage.getItem("tread-imgs")) || {}; } catch (e) { return {}; } });

  useEffect(() => { const t = setTimeout(() => setLd(false), 700); return () => clearTimeout(t); }, []);

  const list = useMemo(() => {
    let l = PRODUCTS.filter((p) => (cat === "All" || (cat === "Saved" ? wish.includes(p.id) : p.cat === cat)) && p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [cat, q, sort, wish]);

  useReveal([list, ld]);

  if (nf) return h(NotFound);

  return h(React.Fragment, null,
    h(Header, { scrolled, active, q, setQ, theme, user, onLogin: () => setAuth("login"), onSignup: () => setAuth("signup"), onLogout: logout, count, onCart: () => setOpen(true), nav, setNav, setCat, ordersCount: orders.length }),
    h("main", { className: "wrap" },
      h(Hero),
      h(Marquee),
      h(Banner),
      h(Categories, { setCat }),
      h(Shop, { cat, setCat, wish, sort, setSort, loading: ld, list, imgs, onOpen: setDetail, onWish: tw }),
      h(Orders, { orders, imgs, onCancel: cancelOrder, onReorder: (o) => { reorder(o); setOpen(true); }, onShop: () => go("shop") }),
      h(About),
      h(Contact, { onSend: () => flash("Message sent. We will reply soon.") })),
    h(Footer, { setCat, onInfo: setInfo }),
    open && h(Cart, { items: cart, onClose: () => setOpen(false), onQty: qty, imgs, onCheckout: () => { setOpen(false); setChk(true); } }),
    detail && h(ProductDetail, { p: detail, wish: wish.includes(detail.id), onWish: tw, onClose: () => setDetail(null), onAdd: (p, s, q) => { add(p, s, q); setDetail(null); }, onBuy: (p, s, q) => { add(p, s, q); setDetail(null); setChk(true); } }),
    chk && h(Checkout, { items: cart, onClose: () => setChk(false), onPlaced: (o) => { clear(); saveOrder(o); }, onView: () => { setChk(false); setTimeout(() => go("orders"), 50); } }),
    info && h(InfoModal, { id: info, onClose: () => setInfo(null) }),
    auth && h(AuthModal, { mode: auth, setMode: setAuth, onClose: () => setAuth(null), onDone: (u) => { login(u); setAuth(null); } }),
    toast && h("div", { className: "toast", role: "status" }, toast));
}
