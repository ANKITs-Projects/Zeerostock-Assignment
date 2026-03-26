const express = require("express");
const router = express.Router();
const products = require("../data/products.json");

router.get("/", (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let result = [...products];

  if (q) {
    q = q.toLowerCase();
    result = result.filter(item =>
      item.title.toLowerCase().includes(q)
    );
  }

  if (category) {
    result = result.filter(item =>
      item.category === category
    );
  }

  if (minPrice) {
    result = result.filter(item =>
      item.price >= Number(minPrice)
    );
  }

  if (maxPrice) {
    result = result.filter(item =>
      item.price <= Number(maxPrice)
    );
  }

  res.json(result);
});

module.exports = router;