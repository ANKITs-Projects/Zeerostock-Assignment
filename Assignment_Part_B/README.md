# 📦 Inventory Management System (Part B)

## 📌 Overview
This module implements a backend system for managing suppliers and their inventory. It includes database design, API development, and aggregation queries.

---

## 🗄️ Database Schema

### Supplier Collection
- id → Unique identifier  
- name → Supplier name  
- city → Supplier location  

### Inventory Collection
- id → Unique identifier  
- supplier_id → Reference to Supplier  
- product_name → Name of product  
- quantity → Available stock (≥ 0)  
- price → Product price (> 0)  

### Relationship
- One Supplier → Many Inventory items  
- Implemented using ObjectId reference (`supplier_id`)  

---

## ⚙️ API Endpoints

### Create Supplier
POST /supplier

### Create Inventory
POST /inventory

### Get All Inventory
GET /inventory

### Grouped Inventory
GET /inventory/grouped

Returns inventory grouped by supplier and sorted by total value (quantity × price)

---

## 🧠 Business Rules
- Inventory must belong to a valid supplier  
- Quantity must be ≥ 0  
- Price must be > 0  

---

## 🗃️ Why NoSQL (MongoDB)
- Flexible schema design  
- Easy relationship handling using ObjectId  
- Suitable for scalable applications  

---
  