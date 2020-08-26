// function a() {
//   console.log('hi');
// }

// a.call();
// a.apply();

const wizard = {
  name: 'Merlin',
  health: 50,
  heal(num1, num2) {
    console.log(this.health += num1 + num2)
  }
}

const archer = {
  name: 'Robin Hood',
  health: 30
}

console.log('1', archer)
// wizard.heal.call(archer, 50, 30);
// wizard.heal.apply(archer, [50, 30])
// these concepts are about function borrowing
const healArcher = wizard.heal.bind(archer, 50, 30);
healArcher() // bind allows us to store the function for laster use
console.log('2', archer)