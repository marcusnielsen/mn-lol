var fn = function ($scope, localStorageService) {
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
    var length = this.mnBoxListModel.boxes().length

    styleObj.backgroundColor = 'rgb(' +
      getColorValueByItemsCount(length) + ',' +
      getColorValueByItemsCount(length) + ',' +
      getColorValueByItemsCount(length) +
    ')'

    return styleObj
  }

  this.getStyle = getStyle
  this.getColumnWidthByIndex = getColumnWidthByIndex

  var savedData = localStorageService.get('boxes')

  if(!savedData) {
    this.mnBoxListModel.addBox()
  }
  else {
    for(var i = 0; i < savedData.length; i++) {
      this.mnBoxListModel.addBox(savedData[i])
    }
  }

  // TODO: Refactor into binding ´this´.
  var that = this

  $scope.$watchCollection(
    function watchCompare() {
      return that.mnBoxListModel.boxes()
    },
    function watchFn(newVal, oldVal) {
      if(newVal !== oldVal) {
        var ids = []

        for(var i = 0; i < that.mnBoxListModel.boxes().length; i++) {
          ids.push(that.mnBoxListModel.boxes()[i].id())
        }

        localStorageService.set('boxes', ids)
      }
    })
}

module.exports = {
  name: 'mnBoxListController',
  fn: fn
}
