console.log("query")

max_ngram_size = 4

var get_text = function(url, cb){
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cb(this.responseText)}}
  xmlhttp.open("GET", url, true)
  xmlhttp.send()}

var newline = /[ ]*\n\r?[ ]*|\.[ ]*/
var wordbreak = /[\,\ \(\[\]\)\{\}\-]+/

cursor = {stack:new Array(max_ngram_size)}

tree = {}


var stack_push = function(col, v){
  var l = col.length
  for (var i = 0; i < l-1; i++) {
    col[i] = col[i+1]
  }
  col[l-1] = v
  return col
}

var next_word = function(word, idx, col) {
  stack_push(cursor.stack, word)
  for (var i = max_ngram_size; i > 0; i--) {
    var ngram = cursor.stack.slice(max_ngram_size-i, max_ngram_size)
    // our stack will start with undefined values in the beginning
    if (ngram[0] != undefined){
      // tree insertion
      var len = ngram.length
      var lense = tree
      for (var j = 0; j < len; j++) {
        var word = ngram[j]
        if (lense[word] == undefined) {
          var m = {}
          lense[word] = m
        }
        lense = lense[word]
        if (j == len-1) {
          try {
            if (lense["__c"]) {
              lense["__c"] += 1
            } else {
              lense["__c"] = 1
            }
          }  catch (e) {
            console.log("?", word, e)
          }

        }
      }
    }
  }
}

var parse = function(s){
  window.final = []
  var lines = s.split(newline)
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i]
    if (line != "") {
      var words = line.split(wordbreak)
      for (var j = 0; j < words.length; j++) {
        final.push(words[j])
      }
    }
  }
  //console.log(lines)
  //console.log(lines)
  //console.log(final)
  final.forEach(next_word)
  console.log("done")
}

get_text("data/ludacris.txt", parse)

//parse("The quick red fox jumped over the red dog. Quick fox looked at the dog's quick red rocket.")