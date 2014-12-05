var MnRowModel = function (children) {
  if(!(this instanceof MnRowModel)) {
    return new MnRowModel(children)
  }

  this._children = children
}

MnRowModel.prototype.children = function (value) {
  if(!arguments.length) {
    return this._children
  }

  this._children = value
}
