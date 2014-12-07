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

  this.boxType = function () {
    var modVal = this.mnBoxModel.index() % 4

    if(modVal === 2) {
      return 'danger'
    }
    else if(modVal === 3) {
      return 'success'
    }
    else if(modVal === 0) {
      return 'info'
    }

    return 'default'
  }

  this.isLastIndex = function () {
    return this.mnBoxModel.index() === this.mnBoxModel.parent().lastBoxIndex() ? true : false
  }
}

module.exports = {
  fn: fn,
  name: 'mnBoxController'
}
