const { response } = require("express");
const express = require("express");
const router = express.Router();
const DataModel = require("../models/Data");

router.post("/add", async (req, res) => {
  const Data = new DataModel({
    todo: req.body.todo,
  });

  Data.save()
    .then((respon) => {
      res.send(respon);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/all", async (req, res) => {
  const Dataa = await DataModel.find();
  try {
    res.send(Dataa);
  } catch (err) {
    res.send(err);
  }
});
router.delete("/all/:id", async (req, res) => {
  const id = req.params.id;

  const deleteTodo = await DataModel.deleteOne({
    _id: id,
  });
  try {
    res.send(deleteTodo);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
