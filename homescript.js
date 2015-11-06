'use strict'

$(document).ready(init)
var openM = 0
var openS = 0
function init() {
  $('#clickMessages').click(showM)
  $('#clickSounds').click(showS)
  // $('#uploadFile').click(uploadFile)
}

// function uploadFile {
//   var x = $('#inputFile').val();
//   console.log(x)
// }

function showM() {
  if (openM === 0) {
    for (var i = 0 ;  i < 3 ; i+=1) {
      $('#messageL').show();
      $('#messageL').animate({opacity:1})
      $('#messageL').removeAttr('id')
      }
      openM = 1;
    }
  } 

function showS(){
  for (var i = 0 ;  i < 7 ; i+=1) {
    $('#soundL').show();
    $('#soundL').animate({opacity:1})
    $('#soundL').removeAttr('id')
    }
    openS = 2;
  }

