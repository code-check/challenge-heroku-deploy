'use strict';

var
  request = require('request');

function endpoint (appname, path) {
  return 'https://' + appname + '.herokuapp.com' + (path || '/');
}

function accessIndex (name, callback) {
  var options = {
    uri: endpoint(name),
    method: 'GET',
    json: true,
  };
  request(options, callback);
}

module.exports = {
  accessIndex: accessIndex,
  endpoint: endpoint
}
