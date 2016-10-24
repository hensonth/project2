var express = require('express')
var router = express.Router()

var Shoe = require('../models/shoe')

router.get('/', function (req, res) {
  Shoe.find({}, function (err, allShoes) {
    res.json(allShoes)
  })
})

module.exports = router
