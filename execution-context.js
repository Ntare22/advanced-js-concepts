function printName() {
  console.log('Jim Ntare')
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

sayMyName()
// when js sees the brackets, it creates an execution context
// global & this are by default always available in the execution context
