// 'use strict'
//
// import test from 'ava'
//
// test('my test', t => {
//   t.is(3, 3)
// })
  
  
function reg(clz){
  return new RegExp("<div[^>]*class=." + clz + ".[^>]*>([^<]*)<\/div>", 'g')
}

var fs = require('fs')
var a = fs.readFileSync('fixture.md').toString()

// console.log(a)


function repl(t, clz, repl){
  var _repl = ''
  if (repl) {
    _repl = repl
  }
  var _reg = reg(clz)
  var r = t.replace(_reg, _repl)
  console.log(r)  
}

repl(a, 'en')