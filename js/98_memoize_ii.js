function memoize (fn) {
    const map = {};
    return function (...args) {
        const key = args.join('#');
        if (Object.hasOwn(map, key)) {
            console.log('Returning Cached Value: ')
            return map[key];
        } else {
            console.log('Computing & Storing: ')
            const res = fn.apply(this, args);
            map[key] = res;
            return res;
        }
    }
}

function expensiveMul(a, b) {
  return a * b;
}

// Create a memoized version of the function.
const memoizedExpensiveMul = memoize(expensiveMul);

// First call (computes and caches the result).
console.log(memoizedExpensiveMul(3, 7)); // Output: Computing... 21

// Second call with the same argument (returns the cached result).
console.log(memoizedExpensiveMul(3, 7)); // Output: 21

// Third call with a different argument (computes and caches the new result).
console.log(memoizedExpensiveMul(5, 8)); // Output: Computing... 40

// Fourth call with the same argument as the third call (returns the cached result).
console.log(memoizedExpensiveMul(5, 8)); // Output: 40