
// Array.prototype.cache = new Array(10)
// for (var i = 0; i < 10; i++) {
//   Array.prototype.cache[i] = new Array(i)
// }

// Array.prototype.non_alloc_slice = function(a, b){
//   b =  (b > this.length) ? this.length : b
//   var len = b - a
//   var res = this.cache[len]
//   for (var i = 0; i < len; i++) {
//     res[i] = this[a+i]
//   }
//   return res
// }

max_ngram_size = 4

var contains = function(col, v){
  return col.indexOf(v) != -1
}

var get_text = function(url, cb){
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cb(this.responseText)}}
  xmlhttp.open("GET", url, true)
  xmlhttp.send()}

function byteCount(s) {
  return encodeURI(s).split(/%..|./).length - 1;
}

var newline = /[ ]*\n\r?[ \:]*|\.[ ]*/
var wordbreak = /[\,\ \(\[\]\)\{\}\-\:]+/
reserved = ["__c", "__f", "__s"]

var stack_push = function(col, v){
  var l = col.length
  for (var i = 0; i < l-1; i++) {
    col[i] = col[i+1]
  }
  col[l-1] = v
  return col
}

var next_word = function(word, idx, col) {
  if (word == "") {return}
  stack_push(cursor.stack, word.toLowerCase())
  if (cursor.stack[0] == undefined) {return}
  for (var i = max_ngram_size; i > 1; i--) {
    var context = max_ngram_size-i+1
    var tree = trees[context]
    var head = cursor.stack.slice(0, max_ngram_size-i+1).join(" ")
    var tails = cursor.stack.slice(max_ngram_size-i+1, max_ngram_size)
    for (var j = 1; j <= tails.length; j++){
      var tail = tails.slice(0,j).join(" ")
      if (!tree[head]) {
        tree[head] = {__c: 1}
      } else {
        tree[head].__c += 1
      }
      if (!tree[head][tail]) {
        tree[head][tail] = {__c:1}
      } else {
        tree[head][tail].n += 1
      }
    }
  }
}

var score_tree = function(tree, idx, col) {
  var head_total = 0
  var head_count = 0
  var tail_tree_idx = max_ngram_size - idx
  for (var k in tree) {
    head_total += tree[k].__c
    head_count += 1
  }
  for (var k in tree) {
    var head = tree[k]
    head.__f = head.__c / head_total
  }
  for (var k in tree) {
    var head = tree[k]
    for (var j in head){
      if (!contains(reserved, j)){
        tail = head[j]
        tail.__f = tail.__c / head.__c 
        if (trees[tail_tree_idx][j]){
          tail.__s = tail.__f / trees[tail_tree_idx][j].__f
        } else {
          //console.log("sig not compuatble for:",idx, k,":",j)
          tail.__s = 0.0001
        }
      }
    }
  }
}


var parse_source = function(s){
  window.cursor = {stack:new Array(max_ngram_size)}
  window.trees = []
  for (var i = 0; i < max_ngram_size; i++) {
    trees.push({})
  }
  console.log("parse")
  var final = []
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
  final.forEach(next_word)
  trees.forEach(score_tree)
  console.log("done")
  //console.log("tree size: ", (byteCount(JSON.stringify(trees)) / 1000000).toFixed(2), "MB")
  //window.trees = undefined
  final = undefined
  return trees
}

var parse_grams = function(s){
  window.trees = []
  for (var i = 0; i < max_ngram_size; i++) {
    trees.push({})
  }
  var lines = s.split("\n")
  lines.pop()
  for (var l = 0; l < lines.length; l++) {
    var gram = lines[l].split(/ |\t/)
    var count = parseInt(gram.pop())

    for (var i = max_ngram_size; i > 1; i--) {
      var context = max_ngram_size-i+1
      var tree = trees[context]
      var head = gram.slice(0, max_ngram_size-i+1).join(" ")
      var tail = gram[max_ngram_size-i+1]
      if (!tree[head]) {
        tree[head] = {__c: count}
      } else {
        tree[head].__c += count
      }
      if (!tree[head][tail]) {
        tree[head][tail] = {__c:count}
      } else {
        tree[head][tail].n += count
      }
      // skip gram insertion
      var tail = gram[gram.length-1]
      if (!tree[head][tail]) {
        tree[head][tail] = {__c:0.0001}
      } else {
        tree[head][tail].n += 0.0001
      }
    }
  }
  trees.forEach(score_tree)
  return trees
}

var baseline_dict = function(){
  res = {}
  for (var k in trees[1]){
    res[k] = trees[1][k].__c * .0000000000000001
  }
  delete res["."]
  delete res[","]
  delete res["?"]
  delete res["!"]
  return res
}

var weighted_dict = function(dict, weight, key){
  var res = {}
  for (var word in dict){
    if (!contains(reserved, word)){
      res[word] = dict[word][key] * weight
    }
  }
  return res
}

var merge_dict = function(col){
  var res = col[0]
  for (var i in col){
    var dict = col[i]
    for (var word in dict){
      if (res[word]){
        res[word] += dict[word]
      } else {
        res[word] = dict[word]
      }
    }
  }
  return res
}

var frequency_rank = function(words){
  var  results = baseline_dict()
  for (var i = 1; i < max_ngram_size; i++) {
    var tree_idx = i
    var sequence = words.slice(words.length - i, words.length)
    var ngram_size = sequence.length
    var ngram = sequence.join(" ")
    var weight = ((1 * Math.pow(5, ngram_size)) / 10) * Math.pow(1000, i-1)
    if (trees[tree_idx][ngram]) {
      results = merge_dict([results, weighted_dict(trees[tree_idx][ngram], weight, "__f")])
    }
  }
  return results
}

var specificity_rank = function(words){
  var  results = baseline_dict()
  for (var i = 1; i < max_ngram_size; i++) {
    var tree_idx = i
    var sequence = words.slice(words.length - i, words.length)
    var ngram_size = sequence.length
    var ngram = sequence.join(" ")
    var weight = ((1 * Math.pow(5, ngram_size))) * Math.pow(1000, i-1)
    if (trees[tree_idx][ngram]) {
      results = merge_dict([results, weighted_dict(trees[tree_idx][ngram], weight, "__f")])
    }
  }
  return results
}

var dict_to_tuples = function(dict){
  var res = []
  for (var word in dict){
    res.push([word, dict[word]])
  }
  return res
}

var tuple_sort = function(a, b){
  var aa = a[1];
  var bb = b[1];
  res = bb - aa;
  return isNaN(res) ? -1 : res
}

var single_word = function(s){return s[0].split(" ").length == 1}

var query = function(s, trees, max){
  window.trees = trees
  var words = s.split(/ +/)
  var results = merge_dict([frequency_rank(words), specificity_rank(words)])
  var tuples = dict_to_tuples(results)
  tuples.sort(tuple_sort)
  window.trees = undefined
  var res = tuples.slice(0, max)
  return res
}


var suggest = function(s){
  return query(s, 60)
}

//get_text("data/ludacris.txt", parse)
//get_text("data/proverbs", parse)
// get_text("data/kanye.N4", function(s){
//   trees = parse_grams(s);
//   query("", trees, 10);})
//get_text("data/kanye", parse_source)

//parse("The quick red fox jumped over the red dog. Quick fox looked at the dog's quick red rocket.")
//parse("it was the best of times")

//var test = "the quick red fox 4\nquick red fox jumped 3\nred fox jumped over 2\n"

//var trees = parse_grams(test)

//query("", trees, 10)

