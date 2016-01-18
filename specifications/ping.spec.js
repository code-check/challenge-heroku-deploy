'use strict';

var
  heroku  = require('./heroku'),
  appname = require('../account.json').heroku_appname,
  assert  = require('chai').assert,
  spec    = require('api-first-spec');

var API = spec.define({
  "endpoint": "/api/ping",
  "method": spec.Method.GET,
  "request": {
    "contentType": spec.ContentType.URLENCODED
  },
  "response": {
    "contentType": spec.ContentType.JSON,
    "data": "any"
  }
});

describe("GET /api/ping", function () {
  var host = spec.host(heroku.origin(appname));
  it ("should success and return pong", function (done) {
    host.api(API).success(function (body) {
      assert.equal(body, "PONG");
      done();
    });
  });
});
