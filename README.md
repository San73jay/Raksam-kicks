# RakSam Kicks

Shoe store built with Vite + React (component based).

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # creates /dist
```

## Where things live
```
public/images/      product photos (k1.jpg ... k18.jpg)
src/data/           products.js (PRODUCTS, CATS, SIZES), content.js (banners, info text)
src/components/     one file per UI piece (Header, Hero, Shop, ProductCard, Cart, Checkout, ...)
src/hooks/          state logic (useCart, useOrders, useWishlist, useAuth, useTheme, ...)
src/utils/          helpers (INR price format, scroll helper, order constants)
src/styles/         index.css (all styles + the 4 themes)
src/App.jsx         wires the hooks and components together
```

## Add a new shoe
1. Put the photo in `public/images/` (for example `k19.jpg`).
2. Add it in `src/data/products.js` to `IMG`, then add one object to `PRODUCTS`.

## Deploy on Netlify
Connect the GitHub repo. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
