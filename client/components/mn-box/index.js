var fs = require('fs')

var moduleName = 'mnBox'
var template = fs.readFileSync(__dirname + '/template.html')
var controller = require('./controller')

var directiveFn = function () {
  return {
    restrict: 'AE',
    controller: controller.name,
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    scope: {
      mnBoxModel: '='
    }
  }
}

module.exports = angular.module(moduleName, [])
  .controller(controller.name, controller.fn)
  .directive(moduleName, directiveFn)
