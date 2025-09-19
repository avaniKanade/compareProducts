# Product Comparison App

A responsive React app that lets users compare up to three products side-by-side.  
**All tasks and bonus features have been implemented except keyboard accessibility.**

---

## ✅ Features Implemented

### Product List
- Displays a grid of 6+ products.
- Each product shows:
  - Name
  - Brand
  - Image
  - Price
  - 3 key features (e.g., memory, display, camera).
- **Add to Compare** button for each product.

### Add to Compare
- Users can select up to 3 products to compare.
- “Compare” view only appears when at least 2 products are selected.

### Comparison View
- Shows a side-by-side table of selected products.
- All main attributes (brand, price, memory, display size, camera MP) are compared.
- **Differences are visually highlighted** with colored backgrounds.
- Product images are displayed for easy comparison.

### Clear/Remove Options
- Users can:
  - Remove any single item from the comparison (Remove button per product).
  - Clear the entire compare list (Close Comparison).

### Technology Used
- **React** with functional components and hooks.
- Uses HTML5, CSS3 (Bootstrap for styling).
- Fully **responsive** (mobile & desktop layouts).
- Uses only static data—no backend/API.

---

## 🚀 Bonus Features (Implemented)
- [x] **localStorage:** Compared products persist on reload.
- [x] **Search/Filter Bar:** Filter the product list by keyword.
- [x] **Light/Dark Mode Toggle:** Switch between light and dark themes.

---

## 🚧 Not Implemented
- **Keyboard accessibility for product selection flow** is not implemented.

---

## 📦 How to Run

```bash
npm install
npm start
