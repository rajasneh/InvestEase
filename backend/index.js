require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
console.log(uri);
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
  // Connect to the MongoDB database
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error: ", err));
});
