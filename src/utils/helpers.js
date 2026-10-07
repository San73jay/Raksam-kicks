export const INR = (n) => "\u20B9" + Math.round(n).toLocaleString("en-IN");

// Fake (sample) rating shown on each product, derived from its id.
export const RT = (p) => ({ r: (4.1 + ((p.id * 3) % 8) / 10).toFixed(1), n: 90 + p.id * 47 });

export const DAY = 864e5;
export const fmtD = (t) => new Date(t).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
export const PAYL = { upi: "UPI", card: "Card", cod: "Cash on delivery" };
export const STEPS = ["Placed", "Packed", "Shipped", "Delivered"];

// Height of the sticky header, used to offset smooth scrolling.
export const hdH = () => {
  const x = document.querySelector("header");
  return x ? x.getBoundingClientRect().height : 0;
};

// Smooth-scroll to a section by id.
export const go = (id) => {
  const e = document.getElementById(id);
  if (!e) return;
  window.scrollTo({ top: Math.max(0, e.getBoundingClientRect().top + window.scrollY - hdH() - 8), behavior: "smooth" });
};
