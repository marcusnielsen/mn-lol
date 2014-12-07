var box1_1 = {
  type: 'box'
}

var box1_2 = {
  type: 'box'
}

var box1_3 = {
  type: 'box'
}

var box2_1 = {
  type: 'box'
}

var box2_2 = {
  type: 'box'
}

var box3_1 = {
  type: 'box'
}

var row1 = {
  type: 'row',
  children: [
    box1_1,
    box1_2,
    box1_3
  ]
}

var row2 = {
  type: 'row',
  children: [
    box2_1,
    box2_2
  ]
}

var row3 = {
  type: 'row',
  children: [
    box3_1
  ]
}

var container2 = {
  type: 'container',
  maxWidth: 860,
  children: [
    row1,
    row2,
    row3
  ]
}

var container1 = {
  type: 'container',
  maxWidth: 960,
  imageUrl: 'http://assets.worldwildlife.org/photos/2842/images/hero_full/shutterstock_12730534.jpg?1352150501',
  children: [
    container2
  ]
}

var data = container1

var fn = function ($q) {
  var getData = function () {
    var deferredData = $q.defer()

    setTimeout(function onTimeout() {
      resolve(data)
    }, 1000)

    return deferredData.promise
  }

  return {
    getData: getData
  }
}

module.exports = {
  fn: fn,
  name: 'mnContentService'
}
