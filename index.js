var through = require('through2'); 
var gutil = require('gulp-util'); 
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-replace-div';

var replace_div = require('./replace_div')

// Plugin level function(dealing with files)
function gulpReplaceDiv(cls, replace) {
  var _replace = ''
  
	if (!cls) {
		throw new PluginError(PLUGIN_NAME, 'Missing cls!');
	}
  
  if (replace) {
    _replace = replace;
  }
  
  // Creating a stream through which each file will pass
	var stream = through.obj(function(file, enc, callback) {
    var _contents = replace_div(file.contents.toString(), cls, _replace);
    
    file.contents = new Buffer(_contents); // allocate ahead of time
    
    // make sure the file goes through the next gulp plugin and
  	callback(null, file);
    // tell the stream engine that we are done with this file
  });
  
  // returning the file stream
	return stream; 
};

gulpReplaceDiv.replace_div = replace_div;

// Exporting the plugin main function
module.exports = gulpReplaceDiv;