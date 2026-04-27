function memoize (func) {
    const map = {};
    return function memoized (...args) {
        const key = [...args].join('-');
        if (Object.hasOwn(map, key)) {
            console.log(`Cached Result: ${map[key]}`)
            return map[key];
        }
        const value = func.call(this, ...args);
        map[key] = value;
        console.log(`Stored Result For First: ${map[key]}`)
        return value;
    }
}

function expensiveFunction(n) {
  console.log('Computing...');
  return n * 2;
}

// Create a memoized version of the function.
const memoizedExpensiveFunction = memoize(expensiveFunction);

// First call (computes and caches the result).
console.log(memoizedExpensiveFunction(5)); // Output: Computing... 10

// Second call with the same argument (returns the cached result).
console.log(memoizedExpensiveFunction(5)); // Output: 10

// Third call with a different argument (computes and caches the new result).
console.log(memoizedExpensiveFunction(10)); // Output: Computing... 20

// Fourth call with the same argument as the third call (returns the cached result).
console.log(memoizedExpensiveFunction(10)); // Output: 20