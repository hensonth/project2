var express = require('express')
var router = express.Router()
var Shoe = require('../models/shoe')

router.get('/', function (req, res) {
  Shoe.find({}, function (err, allShoes) {
    res.render('main/index', {
      allShoes: allShoes
    })
  })
})

router.get('/:id', function(req, res){
  Shoe.findById(req.params.id, function(err, shoe){
console.log(shoe)
    res.render('main/indivShoe', {
      shoe : shoe
    })
  })
})

module.exports = router
