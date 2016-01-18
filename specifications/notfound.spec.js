'use strict';

var
  heroku  = require('./heroku'),
  appname = require('../account.json').heroku_appname,
  assert  = require('chai').assert,
  spec    = require('api-first-spec');

var API = spec.define({
  "endpoint": "/api/notfound",
  "method": spec.Method.GET,
  "request": {
    "contentType": spec.ContentType.URLENCODED
  },
  "response": {
    "contentType": spec.ContentType.JSON,
    "data": "any"
  }
});

describe("GET /api/notfound", function () {
  var host = spec.host(heroku.origin(appname));
  it ("should return NotFound", function (done) {
    host.api(API).notFound(done);
  });
});
