function intersectionWith (fn, ...arrays) {
    if (arrays.length === 0) return [];
    let res = arrays[0];
    res = res.filter((value) => arrays.slice(1).every((array) => array.some((otherValue) => fn(value, otherValue))));
    return res;
}

const arr1 = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
];
const arr2 = [
  { y: 2, x: 1 },
  { x: 3, y: 4 },
];

const result = intersectionWith(
  (a, b) => a.x === b.x && a.y === b.y,
  arr1,
  arr2,
); // => [{ x: 1, y: 2 }]
console.log(result);