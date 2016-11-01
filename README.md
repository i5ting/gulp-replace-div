# gulp-replace-div

## Install

```
$ npm i -S gulp-replace-div
```

## Usages

```
var gulp = require('gulp');

var replace_div = require('gulp-replace-div')
 
gulp.task('default', function() {
   gulp.src('fixture.md').pipe(replace_div('en', '')).pipe(gulp.dest('dist'))
});
```

replace_div参数

- 第一个参数是class，即div的class
- 第二个参数是要替换的字符串，不填写为空字符
