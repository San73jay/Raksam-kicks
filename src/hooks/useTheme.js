import { useEffect, useState } from "react";

const LABELS = { light: ["☀", "Light"], dark: ["☾", "Dark"], blue: ["◆", "Blue"], black: ["●", "Black"] };
const ORDER = ["light", "dark", "blue", "black"];

// Theme (light / dark / blue / black) saved in localStorage and applied as data-theme on <html>.
export default function useTheme() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem("tread-theme"); } catch (e) { return null; } });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  }, [theme]);
  const dark = theme ? theme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  const cur = theme || (dark ? "dark" : "light");
  const toggle = () => {
    const n = ORDER[(ORDER.indexOf(cur) + 1) % 4];
    setTheme(n);
    try { localStorage.setItem("tread-theme", n); } catch (e) {}
  };
  return { cur, label: LABELS[cur], toggle };
}
