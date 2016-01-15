'use strict';
var
  app = require('express')(),
  port = process.env.PORT || 3000,
  parser = require('body-parser');

app.use(parser.json());

app.get('/', function (req, res, next) {
  res.json('PONG');
  return next();
});

app.listen(port, function () {
  console.log('Server running with port', port);
});
