var fs = require('fs')

var name = 'mnBoxList'
var template = fs.readFileSync(__dirname + '/template.html')
var factory = require('./factory')
var controller = require('./controller')

var directiveFn = function () {
  return {
    restrict: 'AE',
    controller: controller.name,
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    scope: {}
  }
}

module.exports = angular.module(name, [])
  .factory(factory.name, factory.fn)
  .controller(controller.name, controller.fn)
  .directive(name, directiveFn)
