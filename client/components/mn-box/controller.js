var fn = function () {
  // TODO: Refactor previous and next.
  this.previousBoxId = function () {
    var previousBox = this.mnBoxModel.previousBox()

    if(!previousBox) {
      return '-'
    }

    return previousBox.id()
  }

  this.nextBoxId = function () {
    var nextBox = this.mnBoxModel.nextBox()

    if(!nextBox) {
      return '-'
    }

    return nextBox.id()
  }
}

module.exports = {
  fn: fn,
  name: 'mnBoxController'
}
