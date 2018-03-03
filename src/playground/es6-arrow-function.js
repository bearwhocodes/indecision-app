// const square = function (x) {
//   return x * x;
// };

// const squareArrow = (x) => {
//   return x * x;
// }

// console.log(squareArrow(8));

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// }

// const getFirstNameExpression = (fullName) => fullName.split(' ')[0];

// console.log(getFirstName('Steve Fenn'));

// console.log(getFirstNameExpression('Steve Fenn'));

const multiplier = {
  numbers: [5,6,7],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());