var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var qs = require('querystring');
var serveAssets = require('./http-helpers');

// var userInterface = fs.readFile('./public/index.html', function(err,data){
//   if(err) {
//     throw err;
//   } else {
//     data = data;
//     console.log('data---->', qs.parse(data))
//   }
// });


exports.handleRequest = function (req, res) {
  // console.log('----->req', req.method)
  // console.log('----->req url', req.url)
  if(req.method === 'GET' && req.url === '/') {
  //   //serve file
    fs.readFile(__dirname + '/index.html', function(err, data) {
      if(err) {
        console.log('err',err);
      } else {
        res.end(data.toString());
      }
    });



  }
  // res.end(archives.paths.list);
};

//serve HTML file

//GET request (return content of a website from file)

//404 if non-existent file

//make a post to server