// function scope
// vs
// block scope

if (5 > 4) {
  var secret = '12345'
}

console.log(secret);

function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final', i)
}

loop();