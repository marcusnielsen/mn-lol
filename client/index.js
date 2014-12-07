require('angular')

require('angular-local-storage')

// TODO: Refactor. Module dependencies shouldn't all be in root.
var mnContent = require('./components/mn-content')
var mnBoxList = require('./components/mn-box-list')
var mnBox = require('./components/mn-box')

angular.module('app', [
  'LocalStorageModule',
  mnContent.name,
  mnBoxList.name,
  mnBox.name
])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('app')
      .setStorageCookie()
      .setStorageCookieDomain('')
  })
