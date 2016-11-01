var gulp = require('gulp');

var replace_div = require('.')
 
gulp.task('default', function() {
   gulp.src('fixture.md').pipe(replace_div('en')).pipe(gulp.dest('dist'))
});