function Hamming() {}

Hamming.prototype.compute = function(strand1, strand2) {
  var count = 0
  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.')
  }
  var array1 = strand1.split("")
  var array2 = strand2.split("")

  for (var i = 0; i < array1.length; i++) {
    if (strand1[i] !== array2[i]) {
      count +=1
    }
  } return count
}

module.exports = Hamming
