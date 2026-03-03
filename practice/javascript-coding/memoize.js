function add (a, b) {
  return a + b;
}

function memoize (fn, { commutative = false } = {}) {
  let memory = new Map();

  return (...args) => {
    const keyArgs = commutative ? [...args].sort() : args;
    const key = JSON.stringify(keyArgs);
    if (memory.has(key)) {
      return memory.get(key);
    } else {
      const result = fn(...args);
      memory.set(key, result);
      return result;
    }
  };
}

const memoizedSum = memoize(add);

console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 3));
console.log(memoizedSum(1, 2));