function two() {
  var isValid; //undefined
}

function one() {
  var isValid = true; // local env
  two(); // new EC
}

var isValid = false;
one();

//two() -- undefined
//one() -- true
//global() -- false

// the variable environment exist within the execution context
// each execution context has its own environment variable

// lexical scope: means where the function is written