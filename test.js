// 'use strict'
//
// import test from 'ava'
//
// test('my test', t => {
//   t.is(3, 3)
// })

var fs = require('fs')
var a = fs.readFileSync('fixture.md').toString()

var repl = require('./replace_div')

var result = repl(a, 'en')

console.log(result)