//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
  if (input) return ("Hello, " + input + "!")
  else return "Hello, World!"
};

module.exports = HelloWorld;


// The `Hello World!` program will greet me, the caller.
//
// If I tell the program my name is Alice, it will greet me by saying "Hello, Alice!".
//
// If I neglect to give it my name, it will greet me by saying "Hello, World!"
