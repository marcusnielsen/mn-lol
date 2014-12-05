var fn = function (mnContainerFactory) {
  this.style = {
    maxWidth: this.maxWidth + 'px',
    backgroundColor: 'grey'
  }

  if(this.imageUrl) {
    this.style.backgroundImage = 'url("' + this.imageUrl + '")'
  }
}

module.exports = {
  name: 'mnContainerController',
  fn: fn
}
