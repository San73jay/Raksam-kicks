import { useState } from "react";

export default function useWishlist() {
  const [wish, setWish] = useState(() => { try { return JSON.parse(localStorage.getItem("sk-wish")) || []; } catch (e) { return []; } });
  const toggle = (id) => setWish((w) => {
    const n = w.includes(id) ? w.filter((x) => x !== id) : [...w, id];
    try { localStorage.setItem("sk-wish", JSON.stringify(n)); } catch (e) {}
    return n;
  });
  return { wish, toggle };
}
