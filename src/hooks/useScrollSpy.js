import { useEffect, useState } from "react";
import { hdH } from "../utils/helpers.js";

const IDS = ["home", "categories", "shop", "orders", "about", "contact"];

// Tells which section is on screen (for the nav highlight) and whether the page has scrolled.
export default function useScrollSpy() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const f = () => {
      setScrolled(window.scrollY > 10);
      let a = "home";
      const hh = hdH() + 40;
      IDS.forEach((i) => { const e = document.getElementById(i); if (e && e.getBoundingClientRect().top <= hh) a = i; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) a = "contact";
      setActive(a);
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return { scrolled, active };
}
