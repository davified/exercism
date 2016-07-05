var Words = function () {
}

Words.prototype.count = function (input) {
  var words_array = input.trim().toLowerCase().split(/\s+/)
  var sorted_array = words_array.sort()
  var count = {}
  for (i = 0; i < sorted_array.length; i++) {
    if (sorted_array[i] === sorted_array[i-1]) {
      count[sorted_array[i - 1]]++
    } else {
      count[sorted_array[i]] = 1
    }
  }
  return count
}

module.exports = Words

// words.count('hello') = { hello: 1}
