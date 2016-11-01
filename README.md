# gulp-replace-div

[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/i5ting/gulp-replace-div?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://img.shields.io/npm/v/gulp-replace-div.svg?style=flat-square)](https://www.npmjs.com/package/gulp-replace-div)
[![Build](https://travis-ci.org/i5ting/gulp-replace-div.svg?branch=master)](https://travis-ci.org/i5ting/gulp-replace-div)
[![codecov.io](https://codecov.io/github/i5ting/gulp-replace-div/coverage.svg?branch=master)](https://codecov.io/github/i5ting/gulp-replace-div?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

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
