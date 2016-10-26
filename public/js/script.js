$(document).ready(function ($) {
  var $userForm = $('.new-user')

  $userForm.on('submit', function (e) {
    e.preventDefault()
    var userFormData = $(this).serializeArray()

    window.alert('ajax call now')

    $.post({
      url: '/api/users',
      udata: userFormData
    }).done(doSomething)

    .done(function(udata){

    })
  })

  function doSomething (udata) {
    window.alert('form submitted, new users created')
    $('#all-user-list').append('<li>' + udata.local.name + '<br>' + udata.local.email + '<br>' + udata.local.password + '</li>')
  }



// end of JS functions
})
