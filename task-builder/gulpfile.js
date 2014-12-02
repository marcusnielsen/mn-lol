var gulp = require('gulp')

require('mn-gulp')(gulp, {
  nodemon: {
    start: '../server/index.js',
    source: '../server',
    ext: 'html js'
  },
  browserify: {
    source: '../client/index.js',
    dest: {
      filename: 'bundle.js',
      path: './dist'
    }
  },
  html: {
    source: '../client/index.html',
    dest: './dist/'
  }
})
