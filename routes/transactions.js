var express = require('express')
var router = express.Router()
var Transaction = require('../models/transaction')
var Shoe = require('../models/shoe')
var User = require('../models/user')

router.get('/', function (req, res) {
  Transaction.findById(req.params.id, function (err, transaction){
    console.log('hello there')
    res.render('transactions', {
      transaction: transaction
    })
  })
  })

  // router.get('/', function (req, res) {
  //   Shoe.find({}, function (err, allShoes) {
  //     res.render('shoes/index', {
  //       allShoes: allShoes
  //     })
  //   })
  // })

  router.post('/', function (req, res) {
    console.log('posted')
    console.log(req.params.id)
    var newTransaction = new Transaction({
      user_id: req.user.id,
      shoe_id: req.params.id,
    })

    newTransaction.save(function (err, newTransaction) {
      if (err) throw new Error(err)
      res.redirect('/main')
    })
  })


module.exports = router
