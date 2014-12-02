require('angular')
var fs = require('fs')

var template = fs.readFileSync(__dirname + '/mn-container.html')

var mnContainerFactory = require('./mn-container-factory')
var mnContainerController = require('./mn-container-controller')

var directiveFn = function () {
  return {
    restrict: 'AE',
    controller: mnContainerController.name,
    template: template,
    scope: {

    }
  }
}

module.exports = angular.module('mn-container', [])
  .factory(mnContainerFactory.name, mnContainerFactory.fn)
  .controller(mnContainerController.name, mnContainerController.fn)
  .directive('mnContainer', directiveFn)
