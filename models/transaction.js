var mongoose = require('mongoose')

var transactionSchema = new mongoose.Schema({
// User ID
// Shoe ID
// Size
// Quantity
  size: Number,
  price: Number,
  cost: Number,
  totalPrice: Number
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
