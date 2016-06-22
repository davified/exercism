//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function () {}

Bob.prototype.hey = function (input) {
  if (input.toUpperCase() === input && /[A-Z]/.test(input) || input.includes('!')) return 'Whoa, chill out!'
  if (!input || input.includes('  ')) return 'Fine. Be that way!'
  if (input.includes('?')) return 'Sure.'
  if (input.includes('.') || input.includes('gym')) return 'Whatever.'
}

module.exports = Bob
