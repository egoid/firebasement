'use strict';

var http = require('http');
 var fs = require('fs');

var server = http.createServer(function(req, res){
  var url = req.url.split('?');
  console.log(url)
  console.log(__dirname + req.files)
  // var route = url

  // fs.readFile(req.files.displayImage.path, function(err,data){

  //  var newPath = __dirname + '/uploads/';
  //  fs.writeFile(newPath , data , function(err){
  //     res.redirect('back');
  //  })
  // })

 res.end();
  
}).listen(3000);