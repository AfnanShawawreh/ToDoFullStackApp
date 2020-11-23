const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 4000;
const router = express.Router();
const env = require("dotenv/config");
const dataRoutes = require("./routes/todo");
app.use(cors());
app.use(bodyParser.json());
app.use("/api", dataRoutes);
app.listen(process.env.PORT || PORT, function () {
  console.log("Serve is running on Port: " + PORT);
});

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.error(err);
    else console.log("Connected to the mongodb");
  }
);
