var MnBoxList = require('../mn-box-list/model')

var MnContent = function () {
  if(!(this instanceof MnContent)) {
    return new MnContent()
  }

  this._boxList = MnBoxList()
}

MnContent.prototype.boxList = function () {
  if(arguments.length) {
    throw new Error('MnContent#boxList has no setter.')
  }

  return this._boxList
}

MnContent.prototype.selected = function () {
  if(arguments.length) {
    throw new Error('MnContent#selected has no setter.')
  }

  return this._boxList.selected()
}

module.exports = MnContent
