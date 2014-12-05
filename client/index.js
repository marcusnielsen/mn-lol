require('angular')

var mnContainer = require('./components/mn-container')
var mnRow = require('./components/mn-row')
var mnBox = require('./components/mn-box')

angular.module('app', [
  mnContainer.name,
  mnRow.name,
  mnBox.name
])
