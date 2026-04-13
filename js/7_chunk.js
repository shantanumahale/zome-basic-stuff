function chunk(array, size) {
  if (!Array.isArray(array)) {
    return [];
  }
  const s = size ? size : 1;
  const res = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if (chunk.length === s || i === array.length - 1) {
      res.push(chunk);
      chunk = [];
    }
  }
  return res;
}

console.log(chunk(["a", "b", "c", "d"])); // => [['a'], ['b'], ['c'], ['d']]
console.log(chunk([1, 2, 3, 4], 2)); // => [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4], 3)); // => [[1, 2, 3], [4]]
