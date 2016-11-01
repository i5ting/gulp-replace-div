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

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.1.0 实现可编程调用
- v1.0.0 初始化版本cli,实现kp导出

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
