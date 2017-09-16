var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!
var userInterface = fs.readFileSync('./public/index.html');
exports.handleRequest = function (req, res) {

  res.end(userInterface);
};

//serve HTML file

//GET request (return content of a website from file)

//404 if non-existent file

//make a post to server