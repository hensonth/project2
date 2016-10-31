var express = require('express')
var router = express.Router()
var passport = require('passport')

var User = require('../models/user')

function authCheck (req, res, next) {
  // if req.isAuthenticated is false, then let it be

  // if it's true, redirect back to profile

  if (req.isAuthenticated()) {
    req.flash('signupMessage', 'You have successfully logged in')
    return res.redirect('/main')
  } else {
    return next()
  }
}
//
// router.get('/signup-ajax', function (req, res) {
//   User.find({}, function (err, allUsers) {
//     console.log(allUsers)
//     res.render('users/index', {
//       allUsers: allUsers
//     })
//   })
// })

router.route('/signup')
      .get(authCheck, function (req, res) {
        User.find({}, function (err, allUsers) {
          res.render('users/index-passport', {
            allUsers: allUsers,
            message: req.flash('signupMessage')
          })
        })
      })

      .post(passport.authenticate('local-signup', {
        successRedirect: '/main',
        failureRedirect: '/signup',
        failureFlash: true
      }))

router.route('/login')
      .get(function (req, res) {
        res.render('users/login', { message: req.flash('loginMessage') })
      })
      .post(passport.authenticate('local-login', {
        successRedirect: '/main',
        failureRedirect: '/users/login',
        failureFlash: true
      }))

router.get('/error', function (req, res) {
  res.render('users/error')
})

router.get('/profile', function (req, res) {
  // res.send(req.user)

  res.render('users/profile', { message: req.flash('loginMessage') })
})

router.get('/logout', function (req, res) {
  req.logout()
  req.flash('loginMessage', 'Logged out successfully')
  res.redirect('/main')
})

module.exports = router
