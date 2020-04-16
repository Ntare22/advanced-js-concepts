console.log('1---------');
// console.log(teddy);
console.log(sing2);
var teddy = 'bear';

// function expression
var sing2 = function() {
  console.log('uuuhh la la la')
}

// function declaration
function sing() {
  console.log('Oh la la la!');
}


var favouriteFood = 'grapes';

var foodThoughts = function() {
  console.log('Original favorite food: ' + favouriteFood);

  var favouriteFood = 'sushi';
  console.log('New favorite food: ' + favouriteFood);
}

foodThoughts();
