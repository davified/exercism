function Isogram(input) {
  this.wordsArray = input.toLowerCase().replace(/-|\s/g,"").split('')
  this.sortedArray = this.wordsArray.sort()
}

Isogram.prototype.isIsogram = function() {
  for (var i = 0; i < this.sortedArray.length; i++) {
    if (this.sortedArray[i] === ' ' || this.sortedArray[i] === '-') this.sortedArray[i] = ''
    if (this.sortedArray[i] === this.sortedArray[i-1]) return false
  } return true
}

module.exports = Isogram
