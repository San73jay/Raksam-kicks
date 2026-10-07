import { useState } from "react";

export default function useCart(flash) {
  const [cart, setCart] = useState([]);
  const add = (p, size, q = 1) => {
    const key = p.id + "-" + size;
    setCart((c) => c.find((i) => i.key === key) ? c.map((i) => i.key === key ? { ...i, qty: i.qty + q } : i) : [...c, { key, id: p.id, name: p.name, color: p.color, price: p.price, size, qty: q }]);
    flash(p.name + " added to cart");
  };
  const qty = (key, d) => setCart((c) => c.map((i) => i.key === key ? { ...i, qty: i.qty + d } : i).filter((i) => i.qty > 0));
  const reorder = (o) => setCart((c) => o.items.reduce((a, i) => a.find((x) => x.key === i.key) ? a.map((x) => x.key === i.key ? { ...x, qty: x.qty + i.qty } : x) : [...a, { ...i }], c));
  const clear = () => setCart([]);
  const count = cart.reduce((a, i) => a + i.qty, 0);
  return { cart, add, qty, reorder, clear, count };
}
