'use strict';

$(document).ready(init)
var ref = new Firebase('https://fireinthebasement.firebaseio.com/')
  var $newEmail;
  var $newPassword;

function init() {

  $('#clickCreate').click(newUser)
  $('#loginB').click(loginUser)
  $('.login').animate({opacity:1})
  $('.newUser').animate({opacity:1})  
}

function loginUser() {
  var loginEmail = $('#emailLogin').val();
  var loginPassword = $('#passwordLogin').val();
  $('#emailLogin').val('')
  $('#passwordLogin').val('')

  ref.authWithPassword({
    "email": loginEmail,
    "password": loginPassword,
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $('.login').animate({opacity:0})
        $('.newUser').animate({opacity:0})
        window.location = './userhome.html'
      }
    });

  loginEmail = ''
  loginPassword = ''


}

function newUser() {
  var newEmail = $('#newEmail').val()
  var newPassword = $('#newPassword').val()
  $('#newEmail').val('')
  $('#newPassword').val('')


  ref.createUser({
    email: newEmail,
    password: newPassword
  }, function(error, userData) {
    console.log('p')
    if (error) {
      switch (error.code) {
        case "EMAIL_TAKEN":
          console.log("The new user account cannot be created because the email is already in use.");
          break;
        case "INVALID_EMAIL":
          console.log("The specified email is not a valid email.");
          break;
        default:
          console.log("Error creating user:", error);
      }
    } else {
      $('.login').animate({opacity:0})
      $('.newUser').animate({opacity:0})
    }
  });

}
