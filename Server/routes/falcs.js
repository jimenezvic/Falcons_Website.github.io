const express = require("express");
const router = express.Router();
const Falc = require("../models/falc");

router.get("/", async (req, res) => {
  try{
  const allFalcs = await Falc.find({});
  res.json(allFalcs);
  // res.json({message:'hello'})
  }catch(error){
    console.error('Error fetching data:' , error);
    res.status(500).json({message:'Failed to fetch data'})
  }
});

router.get("/:id", async (req, res) => {
  console.log("get request by id a falc", req.params);
  const oneFalc = await Falc.findById(req.params.id);
  res.json(oneFalc);
});

router.post("/", async (req, res) => {
  try{
    const newFalc = await Falc.create(req.body);
    res.status(201).json(newFalc);
    res.json(newFalc);

  }catch(error){
    console.error('Error saving data:' , error);
    res.status(500).json({message:'Failed to save data'})
  }
});

module.exports = router;
