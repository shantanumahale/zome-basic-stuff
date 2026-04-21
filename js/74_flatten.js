function flatten (arr) {
    let res = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            const temp = flatten(element);
            temp.forEach(el => res.push(el));
        } else {
            res.push(element);
        }
    });
    return res;
}

// Single-level arrays are unaffected.
console.log(flatten([1, 2, 3])); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
console.log(flatten([
  [1, 2],
  [3, 4],
])); // [1, 2, 3, 4]

// Flattens recursively.
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]