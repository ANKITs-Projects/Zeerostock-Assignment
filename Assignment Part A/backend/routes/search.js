const express = require("express");
const { inventory } = require("../controller/inventory Controller");

const router = express.Router();

// get route for inventory
router.get("/", inventory);

module.exports = router;