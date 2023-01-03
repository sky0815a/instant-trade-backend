const express = require('express');
const router = express.Router();
const Items = require('../models/Items')



router.get('/', async (req, res) => {
    try {
      res.status(200).json(await Items.find({}))
      console.log(Items)
    } catch (err) {
          next(err);
    }

});

router.post("/", async (req, res) => {
  try {
    res.json(await Items.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.json(await Items.findById(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Items.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await Items.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router