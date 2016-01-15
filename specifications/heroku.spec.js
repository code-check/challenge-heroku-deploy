'use strict';

var
  heroku = require('./heroku'),
  assert = require('chai').assert,
  account = require('../account.json');

describe('Verify Heroku Application', function() {
  it('should hosted', function (done) {
    heroku.accessIndex(account.heroku_appname, function (err, resp, body) {
      assert.equal(resp.statusCode, 200);
      done();
    });
  });
});
