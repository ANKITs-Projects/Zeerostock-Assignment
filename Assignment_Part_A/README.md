# 📦 Inventory Search Application (Part A)

## 📌 Overview

This project implements a **search & filter functionality for inventory items** where users can filter products based on multiple criteria such as name, category, and price range.

### 🛠 Tech Stack

* **Frontend:** React
* **Backend:** Node.js + Express
* **Data Source:** Static JSON file

---

## 🔍 Search Logic

### 1. Case-Insensitive Search

The product name search (`q`) is implemented using:

```js
item.title.toLowerCase().includes(q.toLowerCase())
```

This ensures:

* `"shirt"` matches `"Shirt"`
* `"SSD"` matches `"ssd"`

👉 Improves usability by removing case sensitivity.

---

### 2. Partial Matching

Search uses `.includes()` instead of exact matching.

Example:

* Searching `"lap"` → matches `"Laptop"`

👉 Makes search flexible and user-friendly.

---

### 3. Combined Filters (AND Logic)

All filters are applied together:

```
q + category + minPrice + maxPrice
```

👉 Only items matching **all conditions** are returned.

Example:

* Search: `"shirt"`
* Category: `"men's clothing"`
* Price: `10 - 50`

✔ Only matching products are shown.

---

### 4. Optional Filters

Each filter is optional and applied only if provided:

```js
if (q) { ... }
if (category) { ... }
if (minPrice) { ... }
if (maxPrice) { ... }
```

👉 Supports flexible combinations:

* Only search
* Only category
* Only price
* Or all together

---

### 5. No Filters Behavior

If no query parameters are provided:

```
GET /search
```

👉 The API returns **all products**

Frontend ensures this by calling API on initial load.

---

### 6. React State Management

Filters are managed using React state:

```js
const [filters, setFilters] = useState({
  q: "",
  category: "",
  minPrice: "",
  maxPrice: ""
});
```

👉 Keeps UI and backend data in sync.

---

### 7. Initial Data Load

On page load, all products are fetched:

```js
useEffect(() => {
  fetchData();
}, []);
```

👉 Displays full inventory by default.

---

### 8. Edge Cases Handled

#### ✅ Empty Search

* Returns all or filtered results

#### ✅ Invalid Price Range

* Example: `minPrice > maxPrice`
* Handled with frontend validation

#### ✅ No Results Found

* Displays:

```
No results found
```

---

## ⚡ Performance Improvements

###  Debouncing

Currently, API is called on every input change.

👉 Improvement:

* Add delay (300–500ms)

```js
setTimeout(() => {
  fetchData();
}, 300);
```

✔ Reduces unnecessary API calls
✔ Improves performance

---


##  Error Handling

- Managed using React state:
```js
const [error, setError] = useState("");

---


## 🚀 Performance Improvement for Large Datasets

### Optimization: Pagination / Lazy Loading

When working with large datasets, rendering all records at once can slow down the application and affect user experience. To improve performance, implement pagination or lazy loading.

### Approach

- Fetch data in smaller chunks instead of loading everything at once
- Use query parameters like `page` and `limit` in API requests
- Load more data only when needed (button click or scroll)


## 🚀 Summary

This project demonstrates:

* Case-insensitive and partial search
* Combined filtering logic
* Clean backend API design
* Handling of real-world edge cases


