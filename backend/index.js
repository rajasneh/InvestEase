require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser=require("body-parser")
const cors=require("cors");;

const { PositionsModel } = require("./model/PositionsModel");
const { HoldingsModel } = require("./model/HoldingsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;


app.use(cors());
app.use(bodyParser.json());


app.get("/allHoldings",async (req,res)=>{
  let allHoldings=await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions",async (req,res)=>{
  let allPositions=await PositionsModel.find({});
  res.json(allPositions);
});


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
  // Connect to the MongoDB database
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error: ", err));
});
