// Product images live in /public/images. Add a new photo there and point to it here.
export const IMG = {
  k1: "/images/k1.jpg", k2: "/images/k2.jpg", k3: "/images/k3.jpg", k4: "/images/k4.jpg",
  k5: "/images/k5.jpg", k6: "/images/k6.jpg", k7: "/images/k7.jpg", k9: "/images/k9.jpg",
  k10: "/images/k10.jpg", k11: "/images/k11.jpg", k12: "/images/k12.jpg", k13: "/images/k13.jpg",
  k14: "/images/k14.jpg", k15: "/images/k15.jpg", k16: "/images/k16.jpg", k17: "/images/k17.jpg",
  k18: "/images/k18.jpg",
};

export const OFFER_IMGS = [IMG.k5, IMG.k12, IMG.k7, IMG.k1, IMG.k2];

export const PRODUCTS = [
  { id: 1, img: IMG.k6, name: "Ridge Runner", cat: "Running", price: 4999, color: "#2f5bff", tag: "New" },
  { id: 2, img: IMG.k3, name: "Street Low", cat: "Sneakers", price: 3499, color: "#e4572e", tag: "" },
  { id: 3, img: IMG.k12, name: "Summit Boot", cat: "Boots", price: 6999, color: "#7a5c3e", tag: "Bestseller" },
  { id: 4, img: IMG.k5, name: "Pacer Light", cat: "Running", price: 4499, color: "#17a673", tag: "" },
  { id: 5, img: IMG.k7, name: "Court Classic", cat: "Sneakers", price: 2999, color: "#8b8f98", tag: "Sale" },
  { id: 6, img: IMG.k13, name: "Trail Walker", cat: "Sneakers", price: 5999, color: "#c58a1a", tag: "" },
  { id: 7, img: IMG.k10, name: "Dash Pro", cat: "Running", price: 5499, color: "#d63384", tag: "New" },
  { id: 8, img: IMG.k11, name: "Daily Slip", cat: "Casual", price: 2499, color: "#3a4a63", tag: "" },
  { id: 9, img: IMG.k2, name: "Harbor Walk", cat: "Casual", price: 3999, color: "#5b3a29", tag: "" },
  { id: 10, img: IMG.k16, name: "Tan Zip Boot", cat: "Boots", price: 5499, color: "#b9792c", tag: "New" },
  { id: 11, img: IMG.k17, name: "Cloud Court", cat: "Sneakers", price: 3299, color: "#e9e9ee", tag: "" },
  { id: 12, img: IMG.k18, name: "Canvas Low", cat: "Casual", price: 4299, color: "#b8742a", tag: "New" },
];

export const CATS = ["All", "Running", "Sneakers", "Boots", "Casual"];
export const SIZES = [6, 7, 8, 9, 10, 11];

export const DESC = {
  Running: "Lightweight cushioning and a breathable upper for daily runs and long distances.",
  Sneakers: "Clean everyday design with a durable sole and all-day comfort.",
  Boots: "Premium leather build with a grippy sole for rough streets and cold days.",
  Casual: "Easy to wear, soft inside and ready for weekends, work and travel.",
};

export const REV = [
  ["Aman S.", 5, "Fits true to size and very comfortable."],
  ["Neha K.", 4, "Looks great and delivery was quick."],
  ["Rohit P.", 5, "Good quality for the price."],
];
