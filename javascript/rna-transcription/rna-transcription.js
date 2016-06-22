// short solution:
function DnaTranscriber() {
  this.dnaInfo = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }
  this.toRna = function (dna) {
    var dnaArray = dna.split('')
    var _this = this
    var rnaArray = dnaArray.map(function (dna) {
      return _this.dnaInfo[dna]
    })
    return rnaArray.join('')
  }
}

// long solution:
//
// var DnaTranscriber = function () {}
// DnaTranscriber.prototype.toRna = function (dnaStrand) {
//   var dnaStrandArray = dnaStrand.split('')
//   var rnaStrandArray =[]
//   for (var i = 0; i < dnaStrandArray.length; i++) {
//     if (dnaStrandArray[i] === 'C') rnaStrandArray[i] = 'G'
//     else if (dnaStrandArray[i] === 'G') rnaStrandArray[i] = 'C'
//     else if (dnaStrandArray[i] === 'T') rnaStrandArray[i] = 'A'
//     else if (dnaStrandArray[i] === 'A') rnaStrandArray[i] = 'U'
//   } rnaStrand = rnaStrandArray.join('')
//   return rnaStrand
// }



module.exports = DnaTranscriber
