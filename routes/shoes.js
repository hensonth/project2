var express = require('express')
var router = express.Router()

var Shoe = require('../models/shoe')

router.get('/', function (req, res) {
  Shoe.find({}, function (err, allShoes) {
    console.log(allShoes)
    res.render('shoes/index', {
      allShoes: allShoes
    })
  })
})

module.exports = router
