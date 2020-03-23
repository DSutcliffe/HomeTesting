const add = (num1, num2) => {
  return num1 + num2;
}

let myArray = ['Dean', 'Dan', 'Tom', 'Danneh']

let userInput;
let userBalance = 1000;

let booleanValue = true;

const withdrawFunction = (userInput) => { // no brackets around userInput, single params dont need brackets
  return (userBalance -= userInput)
}

// module.exports = add;   // single export
module.exports = {  //multiple function export
  add,
  myArray,
  userInput,
  userBalance,
  booleanValue,
  withdrawFunction
}