# IZZA — Women's Footwear Store

A fully responsive, multi-page e-commerce front-end for a women's shoe store, built as a front-end web development portfolio project.

**🔗 Live Demo:** _add your GitHub Pages link here once enabled — see steps below_

---

## Overview

IZZA is a mock e-commerce storefront featuring a full shopping experience — product browsing, filtering, search, a quick-view modal, a shopping bag, and a checkout flow — built entirely with **HTML, CSS, and vanilla JavaScript** (no frameworks, no build tools).

## Features

- 🛍️ **Multi-page storefront** — Home, Shop (catalogue), Product Detail, and Cart/Checkout
- 🔍 **Search** — live search on the shop page + a global search modal in the navbar
- 🎯 **Filtering & sorting** — by category, heel height, and price
- 👗 **34 products** across Heels, Flats, Sneakers, Sandals, and Boots
- ⭐ **Product ratings**, wishlist (heart) saving, and "Bestseller"/"New" tags
- 👁️ **Quick View modal** — preview and add a product to the bag without leaving the page
- 🛒 **Persistent shopping bag** (via `localStorage`) that carries across every page
- 📱 **Fully responsive** — mobile, tablet, and desktop layouts
- 🇵🇰 **Pakistani sizing** — UK and EU size equivalents shown together
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard-friendly controls

## Tech Stack

- HTML5 & CSS3 (custom design system, no CSS framework overrides beyond Bootstrap utilities)
- [Bootstrap 5.3](https://getbootstrap.com/) — layout grid, offcanvas cart, modals, accordion
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- Vanilla JavaScript (ES6) — no frameworks, no build step
- Google Fonts — Fraunces (display) & Manrope (body)

## Project Structure

```
izza-store/
├── index.html      # Homepage — hero, categories, lookbook, bestsellers, FAQ
├── shop.html        # Full catalogue with search, filters & sorting
├── product.html      # Dynamic product detail page (?id=<product-id>)
├── cart.html        # Bag review & checkout flow
├── style.css       # Shared styles for all pages
├── script.js        # Shared product data + cart/wishlist/UI logic
└── images/
    └── products/      # Drop your own product photos here (see README.txt inside)
```

All pages share a single `style.css` and `script.js` — no duplicated code.

## Running Locally

No build step or dependencies required. Just open `index.html` in any modern browser, or serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Swapping in Real Product Photos

Product data (name, price, images, description, etc.) lives in one place — the `PRODUCTS` array at the top of `script.js`. Replace any image URL with a local path like `images/products/p1-1.jpg` and drop your photo into that folder.

## Author

Built as a front-end web development portfolio project.
