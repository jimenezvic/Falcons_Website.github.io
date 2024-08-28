const express = require("express");
const router = express.Router();
const Falc = require("../models/falc");

router.get("/", async (req, res) => {
  try {
    const allFalcs = await Falc.find({});
    res.json(allFalcs);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Failed to fetch data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const oneFalc = await Falc.findById(req.params.id);
    if (!oneFalc) {
      return res.status(404).json({ message: "Falc not found" });
    }
    res.json(oneFalc);
  } catch (error) {
    console.error("Error fetching data by ID:", error);
    res.status(500).json({ message: "Failed to fetch data by ID" });
  }
});


router.post("/", async (req, res) => {
  try {
    const newFalc = new Falc(req.body);
    await newFalc.save();
    res.status(201).json(newFalc);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Failed to save data" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedFalc = await Falc.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedFalc) {
      return res.status(404).json({ message: "Falc not found" });
    }
    res.json(updatedFalc);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: "Failed to update data" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedFalc = await Falc.findByIdAndDelete(req.params.id);
    if (!deletedFalc) {
      return res.status(404).json({ message: "Falc not found" });
    }
    res.json({ message: "Falc deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ message: "Failed to delete data" });
  }
});

module.exports = router;
