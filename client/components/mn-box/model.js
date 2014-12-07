var MnBoxModel = function (id, parent) {
  if(!(this instanceof MnBoxModel)) {
    return new MnBoxModel(id, parent)
  }

  this._id = id
  this._parent = parent
}

MnBoxModel.prototype.id = function () {
  if(arguments.length) {
    throw new Error('MnBoxModel#id has no setter.')
  }

  return this._id
}

MnBoxModel.prototype.parent = function () {
  if(arguments.length) {
    throw new Error('MnBoxModel#parent has no setter.')
  }

  return this._parent
}

MnBoxModel.prototype.previousBox = function () {
  if(arguments.length) {
    throw new Error('MnBoxModel#previousSibling has no setter.')
  }

  return this.parent().previousBoxById(this.id())
}

MnBoxModel.prototype.nextBox = function () {
  if(arguments.length) {
    throw new Error('MnBoxModel#nextSibling has no setter.')
  }

  return this.parent().nextBoxById(this.id())
}

MnBoxModel.prototype.index = function () {
  if(arguments.length) {
    throw new Error('MnBoxModel#index has no setter.')
  }

  return this.parent().boxIndexById(this.id())
}

MnBoxModel.prototype.delete = function () {
  this.parent().deleteBoxById(this.id())
}

module.exports = MnBoxModel
