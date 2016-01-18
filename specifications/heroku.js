'use strict';

var
  request = require('request');

function origin (appname) {
  return 'https://' + appname + '.herokuapp.com';
};

function endpoint (appname, path) {
  return 'https://' + appname + '.herokuapp.com' + (path || '/');
}

module.exports = {
  origin: origin,
  endpoint: endpoint
}
