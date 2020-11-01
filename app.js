const http = require('http');
const fs = require('fs');
var url = require('url');
const express = require('express')
const app = express()
const fileName = "ads.txt";

const readFile = function (file) {
    return fs.readFileSync(file).toString();
};

const file = readFile(fileName);


http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);