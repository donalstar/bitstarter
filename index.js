var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))


var buffer = new Buffer(2000);

var fs = require('fs');

fs.readFile('index.html', function (err, data) {
  if (err) throw err;

  buffer.write(data.toString(), "utf-8")
});

app.get('/', function(request, response) {
  response.send(buffer.toString());
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
