function size (collection) {
    if (collection === null) return 0;
    if (Array.isArray(collection) || typeof collection === 'string') {
        return collection.length;
    }
    if (collection instanceof Map || collection instanceof Set) {
        return collection.size;
    }
    if (typeof collection === 'object') {
        return Object.keys(collection).length;
    }
    return 0;
}

// Arrays.
console.log(size([1, 2, 3, 4, 5])); // => 5
// Object.
console.log(size({ a: 1, b: 2 })); // => 2
// Strings.
console.log(size('peanut')); // => 6
// Sets.
console.log(size(new Set([1, 2, 3]))); // => 3
// Maps.
console.log(size(
  new Map([
    [1, 2],
    [3, 4],
  ]),
)); // => 2