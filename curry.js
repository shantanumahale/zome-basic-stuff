function multiplyThree(a, b, c) {
  return a * b * c;
}

function curry(fn) {
  return function curried (...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      }
    }
  }
}

const curriedMultiplyThree = curry(multiplyThree);

console.log(curriedMultiplyThree(4)(5)(6));
console.log(curriedMultiplyThree(4)(5, 6));
console.log(curriedMultiplyThree(4, 5, 6));

const containsFour = curriedMultiplyThree(4);
const containsFourFive = containsFour(5);
console.log(containsFourFive(6));