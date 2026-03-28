# 📦 Inventory System (Search + Database)

## 📌 Overview
This project includes:
- **Part A:** Inventory Search API + React UI  
- **Part B:** Inventory Database + Backend APIs (MVC)

---

# 🔵 Part A — Search Feature

## 🔍 Features
- Search by product name (case-insensitive, partial match)
- Filter by category and price range
- Multiple filters combined (AND logic)
- If no filters → returns all products

## ⚠️ Edge Cases
- Empty search → shows all results  
- Invalid price range → handled in UI  
- No results → shows "No results found"  

---

# 📦 Inventory Management System (Part B)

## 📌 Overview
Backend system to manage suppliers and their inventory using Node.js, Express, and MongoDB with MVC architecture.

---

## 🗄️ Database Schema

### Supplier
- id  
- name  
- city  

### Inventory
- id  
- supplier_id (ref: Supplier)  
- product_name  
- quantity (≥ 0)  
- price (> 0)  

### Relationship
- One Supplier → Many Inventory items  

---

## ⚙️ API Endpoints
- POST /supplier  
- POST /inventory  
- GET /inventory  
- GET /inventory/grouped  

---

  
