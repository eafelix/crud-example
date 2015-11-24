var express = require('express'),
  bodyParser = require('body-parser'),
  helmet = require('helmet');

var app = express(); // inicializo express

var arr = [{id: 1, name: 'Dart Vader'}]; // Mi base de datos en memoria

app.use(helmet()); // para dar seguridad al server http server creado por express
app.use(bodyParser.json()); // para parsear json, los datos viven dentro de req.body
app.use(bodyParser.urlencoded({ extended: true })); // para parsear forms, los datos viven dentro de req.body
app.use(express.static('public')); // servimos los archivos que estan dentro de public

app.get('/getData', function (req, res) {
  console.log('[x] Llego un pedido a /getData con estos datos: %s', req.body);
  console.log('[x] Respondo al pedido a /getData con: %j', arr);
  res.write(JSON.stringify(arr));
  res.end();
});

app.post('/create', function (req, res) {
  console.log('[x] Llego un pedido a /create con estos datos :%s', req.body);
  arr.push(req.body);
  console.log('[x] Respondo al pedido a /create con: %j', arr);
  res.json(arr); // es lo mismo que res.write(JSON.stringyfy(arr));
});

app.post('/delete', function (req, res) {
  console.log('[x] Llego un pedido a /delete con estos datos: %s', req.body);
  console.dir(arr);

  var data = arr.filter(function (value, index) {
    return req.body.id !== value.id;
  });

  arr = data;

  console.log('[x] Respondo al pedido a /delete con: %j', data);
  res.json(arr); // es lo mismo que res.write(JSON.stringyfy(arr));
});

var server = app.listen(3000, function () {
  var host = server.address().address,
    port = server.address().port;

  var title = 'CRUD app started ',
    msg = 'http://' + host + ':' + port;

  console.log(title + msg);
});
