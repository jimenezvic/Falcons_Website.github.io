const express = require("express");
const router = express.Router();
const Falc = require("../models/falc");

router.get("/", async (req, res) => {
  const allFalcs = await Falc.find({});
  res.json(allFalcs);
  // res.json({message:'hello'})
});

router.get("/:id", async (req, res) => {
  console.log("get request by id a falc", req.params);
  const oneFalc = await Falc.findById(req.params.id);
  res.json(oneFalc);
});

router.post("/", async (req, res) => {
  const newFalc = await Falc.create(req.body);
  res.json(newFalc);
});

module.exports = router;
