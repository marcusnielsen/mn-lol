var fs = require('fs')
// TODO: Google up info about what makes path work with brfs (fs.readFileSync).
// var path = require('path')

var name = 'mnContainer'
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
    transclude: true,
    scope: {
      maxWidth: '=',
      imageUrl: '='
    }
  }
}

module.exports = angular.module(name, [])
  .factory(factory.name, factory.fn)
  .controller(controller.name, controller.fn)
  .directive(name, directiveFn)
