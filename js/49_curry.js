function curry (fn) {
    return function curried (...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...thisArgs) {
                return curried (...args, ...thisArgs);
            }
        }
    }
}

function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(3)(4)); // 7

const alreadyAddedThree = curriedAdd(3);
console.log(alreadyAddedThree(4)); // 7