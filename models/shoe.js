var mongoose = require('mongoose')

var shoeSchema = new mongoose.Schema({
  color: String,
  type: String,
  size: Number,
  price: Number,
  cost: Number,
  supplier: String
})

var Shoe = mongoose.model('Shoe', shoeSchema)

module.exports = Shoe
