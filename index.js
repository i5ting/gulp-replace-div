var through = require('through2')
var gutil = require('gulp-util')
var PluginError = gutil.PluginError

// Consts
const PLUGIN_NAME = 'gulp-replace-div'
var replaceDiv = require('./replace_div')

function gulpReplaceDiv (cls, replace) {
  var _replace = ''

  if (!cls) {
    throw new PluginError(PLUGIN_NAME, 'Missing cls!')
  }

  if (replace) {
    _replace = replace
  }

  // Creating a stream through which each file will pass
  var stream = through.obj(function (file, enc, callback) {
    var _contents = replaceDiv(file.contents.toString(), cls, _replace)

    file.contents = new Buffer(_contents)

    // make sure the file goes through the next gulp plugin and
    callback(null, file)
  })

  return stream
}

gulpReplaceDiv.replaceDiv = replaceDiv

// Exporting the plugin main function
module.exports = gulpReplaceDiv
