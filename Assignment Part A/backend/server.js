const express = require("express");
const cors = require("cors");
const searchRoute = require("./routes/search");

// Creating express app
const app = express();

// Use cors middleware for access
app.use(cors());

// use routes for search
app.use("/search", searchRoute);

const PORT = 5000;
// creating server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});