function add (a, b) {
  return a + b;
}

function memoize (fn) {
  let memory = new Map();

  return (a, b) => {
    if (memory.has(`${a}_${b}_key`)) {
      return memory.get(`${a}_${b}_key`);
    } else {
      const c = fn(a, b);
      memory.set(`${a}_${b}_key`, c);
      return c;
    }
  };
}

const memoizedSum = memoize(add);

console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 3));
console.log(memoizedSum(1, 2));