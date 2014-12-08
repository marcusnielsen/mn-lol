var fn = function () {
  // TODO: Refactor previous and next.
  var previousBoxId = function () {
    var previousBox = this.mnBoxModel.previousBox()

    if(!previousBox) {
      return '-'
    }

    return previousBox.id()
  }

  var nextBoxId = function () {
    var nextBox = this.mnBoxModel.nextBox()

    if(!nextBox) {
      return '-'
    }

    return nextBox.id()
  }

  var boxType = function () {
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

  var isLastIndex = function () {
    return this.mnBoxModel.index() === this.mnBoxModel.parent().lastBoxIndex() ? true : false
  }

  var deleteBox = function (event) {
    if(event) {
      event.stopPropagation()
      event.preventDefault()
    }

    try {
      this.mnBoxModel.delete()
    }
    catch(e) {
      // TODO: Refactor
      alert(e)
    }
  }

  this.previousBoxId = previousBoxId
  this.nextBoxId = nextBoxId
  this.boxType = boxType
  this.isLastIndex = isLastIndex
  this.deleteBox = deleteBox
}

module.exports = {
  fn: fn,
  name: 'mnBoxController'
}
