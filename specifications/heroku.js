'use strict';

var
  request = require('request');

function origin (appname) {
  return 'https://' + appname + '.herokuapp.com';
};

module.exports = {
  origin: origin,
}
