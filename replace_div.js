function reg(clz){
  return new RegExp("<div[^>]*class=." + clz + ".[^>]*>([^<]*)<\/div>", 'g')
}

function replace_div(t, clz, repl){
  var _repl = ''
  
  if (repl) {
    _repl = repl
  }
  
  var _reg = reg(clz)

  return t.replace(_reg, _repl)
}

module.exports = replace_div;