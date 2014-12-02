var MnContainerModel = function (maxWidth, borderThickness, backgroundImageUrl, children) {
  if(!(this instanceof MnContainerModel)) {
    return new MnContainerModel(maxWidth, borderThickness, backgroundImageUrl, children)
  }

  this._maxWidth = maxWidth
  this._borderThickness = borderThickness
  this._backgroundImageUrl = backgroundImageUrl
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

MnContainerModel.prototype.backgroundImageUrl = function (value) {
  if(!arguments.length) {
    return this._backgroundImageUrl
  }

  this._backgroundImageUrl = value
}

MnContainerModel.prototype.children = function (value) {
  if(!arguments.length) {
    return this._children
  }

  this._children = value
}

module.exports = MnContainerModel
