var express = require('express')
var router = express.Router()
var Transaction = require('../models/transaction')
var Shoe = require('../models/shoe')
var User = require('../models/user')

router.get('/index', function (req, res) {
    res.render('transactions/index', {
    })
  })

module.exports = router
