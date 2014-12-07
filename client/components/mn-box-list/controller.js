var fn = function (mnBoxListFactory) {
  var getColumnWidthByIndex = function (boxIndex) {
    var modVal = boxIndex % 6

    if(modVal <= 2) {
      return 4
    }
    else if(modVal <= 4) {
      return 6
    }
    else {
      return 12
    }
  }

  var getColorValueByItemsCount = function (itemLength) {
    var colorValue = 128 - itemLength

    colorValue = colorValue >= 0 ? colorValue : 0

    return colorValue
  }

  var styleObj = {}
  var getStyle = function () {
    var length = this.boxList.boxes().length

    styleObj.backgroundColor = 'rgb(' +
      getColorValueByItemsCount(length) + ',' +
      getColorValueByItemsCount(length) + ',' +
      getColorValueByItemsCount(length) +
    ')'

    return styleObj
  }

  this.boxList = mnBoxListFactory()
  this.boxList.addBox()
  this.getStyle = getStyle
  this.getColumnWidthByIndex = getColumnWidthByIndex
}

module.exports = {
  name: 'mnContainerController',
  fn: fn
}
