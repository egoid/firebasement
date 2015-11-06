'use strict';
​
var fs = require('fs');
var uploadName=''

$('document').ready(init)

function init() {
$('#uploadFile').click(upload)
}

  function upload(){
    var $fileName = $('#inputFileName').val()
    fs.writeFile('./files//[$filename/]', $('#inputFile').val() , function(err){
      if(err){
        throw err;
      }
      console.log('uploaded successfully')
    }); 
  }

​