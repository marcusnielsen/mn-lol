var fn = function ($scope, mnContainerFactory) {
  var container = mnContainerFactory(960, 10)

  var vm = {
    container: container
  }

  $scope.vm = vm
}

module.exports = {
  name: 'mnContainerController',
  fn: fn
}
