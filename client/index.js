require('angular')

var mnBoxList = require('./components/mn-box-list')
var mnBox = require('./components/mn-box')

angular.module('app', [
  mnBoxList.name,
  mnBox.name
])
