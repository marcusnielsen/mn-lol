var _ = require('lodash')

var Box = require('../mn-box/model')

var MnBoxListModel = function () {
  if(!(this instanceof MnBoxListModel)) {
    return new MnBoxListModel()
  }

  this._boxes = []
  this._deletes = 0
}

MnBoxListModel.prototype.lastBoxIndex = function () {
  return this.boxes().length - 1
}

MnBoxListModel.prototype.nextBoxId = function () {
  var boxId = this.lastBoxIndex() >= 0 ? this.boxes()[this.lastBoxIndex()].id() + 1 : 0

  return boxId
}

MnBoxListModel.prototype.boxes = function (value) {
  if(!arguments.length) {
    return this._boxes
  }

  this._boxes = value
}

MnBoxListModel.prototype.deleteBoxById = function (boxId) {
  if(this.boxes().length === 1) {
    throw new Error('Cannot delete last box.')
  }

  _.remove(this.boxes(), function remove(box) {
    return box.id() === boxId
  })

  this.deletes(this.deletes() + 1)
}

MnBoxListModel.prototype.deletes = function (value) {
  if(!arguments.length) {
    return this._deletes
  }

  this._deletes = value
}

MnBoxListModel.prototype.addBox = function (boxId) {
  var box = Box(boxId || this.nextBoxId(), this)
  this.boxes().push(box)
}

MnBoxListModel.prototype.previousBoxById = function (boxId) {
  var boxIndex = _.findIndex(this.boxes(), function (box) {
    return box.id() === boxId
  })

  if(boxIndex === 0) {
    return null
  }

  return this.boxes()[boxIndex - 1]
}

MnBoxListModel.prototype.nextBoxById = function (boxId) {
  var boxIndex = _.findIndex(this.boxes(), function (box) {
    return box.id() === boxId
  })

  if(boxIndex === this.lastBoxIndex()) {
    return null
  }

  return this.boxes()[boxIndex + 1]
}

MnBoxListModel.prototype.boxIndexById = function (boxId) {
  return _.findIndex(this.boxes(), function (box) {
    return box.id() === boxId
  })
}

MnBoxListModel.prototype.selected = function () {
  if(arguments.length) {
    throw new Error('MnBoxListModel#selected has no setter.')
  }

  // TODO: Refactor to something more performant.
  return _.any(this.boxes(), function (box) {
    return box.selected()
  })
}

module.exports = MnBoxListModel
