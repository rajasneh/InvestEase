const { Schema, model } = require("mongoose");
const HoldingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: String,
  net: String,
  day: String,
});

module.exports = { HoldingSchema };
