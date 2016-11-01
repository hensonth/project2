var mongoose = require('mongoose')

var transactionSchema = mongoose.Schema({
user_id: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User'
},
shoe_id: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Shoe'
},
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
