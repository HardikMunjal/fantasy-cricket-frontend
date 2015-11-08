var express = require('express');
var app = express();
var router = express.Router();

app.set('view engine', 'jade');
app.use(router);
require('./routes')(router);

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});