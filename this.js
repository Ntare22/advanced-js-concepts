// 1. Gives methods access to their object
// 2. We can execute the same code for multiple objects

const obj = {
  name: 'Billy',
  sing() {
    console.log('lalala ' + this.name);
  },
  singAgain() {
    console.log(`${this.sing() + '!'}`)
  }
}

obj.singAgain();






function importantPerson() {
  console.log(this.name + '!')
}

const name = 'Sunny';
const obj1 = {
  name: 'Cassy',
  importantPerson: importantPerson
}

const obj2 = {
  name: 'Jacob',
  importantPerson: importantPerson
}
obj2.importantPerson();
console.log(name)