var DnaTranscriber = function () {}

DnaTranscriber.prototype.toRna = function (dnaStrand) {
  var dnaStrandArray = dnaStrand.split('')
  for (var i = 0; i < dnaStrandArray.length; i++) {
    if (dnaStrandArray[i] == 'C') dnaStrandArray[i] = 'G'
    else if (dnaStrandArray[i] == 'G') dnaStrandArray[i] = 'C'
    else if (dnaStrandArray[i] == 'T') dnaStrandArray[i] = 'A'
    else if (dnaStrandArray[i] == 'A') dnaStrandArray[i] = 'U'
  } return dnaStrandArray.join('')
}

module.exports = DnaTranscriber
