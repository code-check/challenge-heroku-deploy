'use strict';

var
  request = require('request');

function origin (appname) {
  return appname + '.herokuapp.com';
};

module.exports = {
  origin: origin,
}
