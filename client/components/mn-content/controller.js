var Model = require('./model')

var fn = function () {
  this.mnContentModel = new Model()
}

module.exports = {
  name: 'mnContentController',
  fn: fn
}
