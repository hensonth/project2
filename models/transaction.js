var mongoose = require('mongoose')

var transactionSchema = new mongoose.Schema({
user_id: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User'
},
shoe_id: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Shoe'
},
  size: Number,
  price: Number,
  cost: Number,
  totalPrice: Number
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
