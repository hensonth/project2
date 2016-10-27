$(document).ready(function ($) {
  var $userForm = $('.new-user')
  var $shoeForm = $('.new-shoe')
  $userForm.on('submit', function (e) {
    e.preventDefault()
    var userFormData = $(this).serializeArray()

    alert("hello")

    $.post({
      url: '/users',
      udata: userFormData
    }).done(addUser)
  })

  $shoeForm.on('submit', function (e) {
    e.preventDefault()
    var shoeFormData = $(this).serializeArray()

    $.post({
      url: '/shoes',
      sdata: shoeFormData
    }).done(addShoe)
  })

  function addUser (udata) {
    window.alert('form submitted, new users created')
    $('#all-user-list').append('<li>' + udata.local.name + '<br>' + udata.local.email + '<br>' + udata.local.password + '</li>')
  }

  function addShoe (sdata) {
    window.alert('form submitted, new shoes created')
    $('#all-shoe-list').append('<li>' + sdata.shoe.color + '<br>' + sdata.shoe.type + '<br>' + sdata.shoe.size + '</li>')
  }

// end of JS functions
})
