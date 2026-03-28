require("dotenv").config({path: './.env'})
const express = require("express")
const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(express.json())

app.use("/supplier", require("./routes/supplierRoutes"))
app.use("/inventory", require("./routes/inventoryRoutes"))

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000")
})