'use strict'

import test from 'ava'

var fs = require('fs')
var a = fs.readFileSync('fixture.md').toString()
var repl = require('./replace_div')
  
test('replace_div.reg() test', t => {
  t.regex(a, repl.reg('zh'), '.zh exist')
  t.regex(a, repl.reg('en'), '.en exist')
})

test('replace_div() test', t => {
  var result = repl(a, 'en')
  t.regex(result, repl.reg('zh'), '.zh exist')
  t.notRegex(result, repl.reg('en'), '.en not exist')
})
