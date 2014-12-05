var MnContainerModel = function (maxWidth, borderThickness, imageUrl, children) {
  if(!(this instanceof MnContainerModel)) {
    return new MnContainerModel(maxWidth, borderThickness, imageUrl, children)
  }

  this._maxWidth = maxWidth
  this._borderThickness = borderThickness
  this._imageUrl = imageUrl
  this._children = children
}

MnContainerModel.prototype.maxWidth = function (value) {
  if(!arguments.length) {
    return this._maxWidth
  }

  this._maxWidth = value
}

MnContainerModel.prototype.borderThickness = function (value) {
  if(!arguments.length) {
    return this._borderThickness
  }

  this._borderThickness = value
}

MnContainerModel.prototype.imageUrl = function (value) {
  if(!arguments.length) {
    return this._imageUrl
  }

  this._imageUrl = value
}

MnContainerModel.prototype.children = function (value) {
  if(!arguments.length) {
    return this._children
  }

  this._children = value
}

module.exports = MnContainerModel
