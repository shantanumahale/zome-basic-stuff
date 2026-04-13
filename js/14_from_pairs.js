function fromPairs (pairs) {
    return Object.fromEntries(pairs);
}

const pairs = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];

console.log(fromPairs(pairs)); // => { a: 1, b: 2, c: 3 }