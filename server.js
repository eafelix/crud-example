var express = require('express'),
  bodyParser = require('body-parser'),
  helmet = require('helmet');

var app = express();

// Mi base de datos en memoria
var arr = [{id: 1, name: 'Dart Vader'}];

app.use(helmet());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/getData', function (req, res) {
  console.log('[x] Llego un pedido a /getData con estos datos: %j', req.body);
  console.log('[x] Respondo al pedido con: %j', arr);
  res.write(arr);
  res.end();
});

app.post('/create', function (req, res) {
  console.log('[x] Llego un pedido a /create con estos datos :%j', req.body);
  arr.push({id: res.body.id, name: req.body.data});
  console.log('[x] Respondo al pedido con: %j', arr);
  res.write(arr);
  res.end();
});

app.post('/delete', function (req, res) {
  console.log('[x] Llego un pedido a /delete con estos datos: %j', req.body);
  var res = arr.filter(function (value, index) {
    if (req.body.id === value.id) {
      return;
    }
  });
  console.log('[x] Respondo al pedido con: %j', arr);
  res.write(arr);
  res.end();
});

var server = app.listen(3000, function () {
  var host = server.address().address,
    port = server.address().port;

  var title = 'CRUD app started ',
    msg = 'http://' + host + ':' + port;

  console.log(title + msg);
});
