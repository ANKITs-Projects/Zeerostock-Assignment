const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const searchRoute = require("./routes/search");
app.use("/search", searchRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});