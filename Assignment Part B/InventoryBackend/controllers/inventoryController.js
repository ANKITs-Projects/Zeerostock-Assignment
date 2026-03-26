const Inventory = require("../models/Inventory");
const Supplier = require("../models/Supplier");


exports.createInventory = async (req, res) => {
  try {
    const { supplier_id, product_name, quantity, price } = req.body

    
    const supplier = await Supplier.findById(supplier_id)
    if (!supplier) {
      return res.status(400).json({ message: "Invalid supplier" })
    }
    const item = new Inventory({
      supplier_id,
      product_name,
      quantity,
      price
    })
    await item.save()
    res.status(201).json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


exports.getInventory = async (req, res) => {
  try {
    const data = await Inventory.find().populate("supplier_id")
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


exports.getGroupedInventory = async (req, res) => {
  try {
    const data = await Inventory.aggregate([
      {
        $group: {
          _id: "$supplier_id",
          totalValue: {
            $sum: { $multiply: ["$quantity", "$price"] }
          },
          items: { $push: "$$ROOT" }
        }
      },
      { $sort: { totalValue: -1 } }
    ]);

    res.json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}