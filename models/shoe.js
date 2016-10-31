var mongoose = require('mongoose')

var shoeSchema = new mongoose.Schema({
  type: String,
  color: String,
  price: Number,
  cost: Number,
  quantity: Number,
  supplier: String,
  time: {
    type: Date,
    default: Date.now
  }
})

  var Shoe = mongoose.model('Shoe', shoeSchema)

  module.exports = Shoe
