import { useState } from "react";

// Orders are kept in localStorage ("sk-orders") — demo store, no backend.
export default function useOrders(flash) {
  const [orders, setOrders] = useState(() => { try { return JSON.parse(localStorage.getItem("sk-orders")) || []; } catch (e) { return []; } });
  const persist = (n) => { try { localStorage.setItem("sk-orders", JSON.stringify(n)); } catch (e) {} return n; };
  const saveOrder = (o) => setOrders((l) => persist([o, ...l]));
  const cancelOrder = (id) => {
    setOrders((l) => persist(l.map((o) => o.id === id ? { ...o, cancelled: true } : o)));
    flash("Order cancelled");
  };
  return { orders, saveOrder, cancelOrder };
}
