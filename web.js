var express = require('express');
var app = express();
var fs = require('fs');
var buffer = new Buffer(fs.readFile(index.html),"utf-8");
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8", 0, 12));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
