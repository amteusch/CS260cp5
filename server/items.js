const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

//
// Items
//

let id = 0;

const itemSchema = new mongoose.Schema({
  id: Number,
  text: String,
  completed: Boolean,
  book: String,
});

const Item = mongoose.model('Item', itemSchema);

router.get('/:book', async (req, res) => {
  console.log(req.params.book);
  try {
    let items = await Item.find({
      book: req.params.book
    });
    return res.send(items);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  id = id + 1;
  const item = new Item({
    id: id,
    text: req.body.text,
    completed: req.body.completed,
    book: req.body.book
  });
  try {
    await item.save();
    return res.send(item);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.put('/', async (req, res) => {
  try {
    let item = await Item.findOne({
      id: req.body.id
    });
    item.text = req.body.text;
    item.completed = req.body.completed;
    item.book = req.body.book
    await item.save();
    let items = await Item.find();
    return res.send(items);
    //return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  model: Item,
  routes: router,
}