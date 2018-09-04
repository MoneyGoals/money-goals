var express = require('express');
var path = require('path');
var app = express();

console.log(__dirname);
app.use(express.static(path.join(__dirname, '/../')));


app.listen(3000, function() {
  console.log('App listening on port 3000');
});