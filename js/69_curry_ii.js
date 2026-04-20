function curry (fn) {
    return function curried (...args) {
        if (args.length >= fn.length) {
            return fn.call(this, ...args);
        } else {
            return function (...nextArgs) {
                return curried.call(this, ...args, ...nextArgs);
            }
        }
    }
}

function multiplyThree(a, b, c) {
  return a * b * c;
}
const curriedMultiplyThree = curry(multiplyThree);
console.log(curriedMultiplyThree(4)(5)(6)); // 120
console.log(curriedMultiplyThree(4)(5, 6)); // 120
console.log(curriedMultiplyThree(4, 5)(6)); // 120
console.log(curriedMultiplyThree(4, 5, 6)); // 120

const containsFour = curriedMultiplyThree(4);
const containsFourMulFive = containsFour(5);
console.log(containsFourMulFive(6)); // 120