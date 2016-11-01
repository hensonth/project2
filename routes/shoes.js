var express = require('express')
var router = express.Router()
var Shoe = require('../models/shoe')


router.get('/', function (req, res) {
  Shoe.find({}, function (err, allShoes) {
    res.render('shoes/index', {
      allShoes: allShoes
    })
  })
})
router.post('/', function (req, res) {

  var newShoe = new Shoe({
    type: req.body.shoe.type,
    color: req.body.shoe.color,
    price: req.body.shoe.price,
    cost: req.body.shoe.cost,
    quantity: req.body.shoe.quantity,
    supplier: req.body.shoe.supplier,
  })

  newShoe.save(function (err, newShoe) {
    if (err) throw new Error(err)
    res.redirect('/shoes')
  })
})

module.exports = router
