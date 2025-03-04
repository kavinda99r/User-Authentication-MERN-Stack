const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyPaser = require("body-parser")
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyPaser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
