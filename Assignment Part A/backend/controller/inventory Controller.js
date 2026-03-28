const products = require("../data/products.json")

  const inventory = (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let result = [...products];

  if (q) {
    q = q.toLowerCase();
    result = result.filter(item =>
      item.title.toLowerCase().includes(q)
    );
  }

  if (category) {
    category = category.toLowerCase();
    result = result.filter(item =>
      item.category.toLowerCase() === category
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

  res.status(200).json({
    success : true,
    message : "Get Result Successfully!",
    data : result
  })
}

module.exports  = {inventory}