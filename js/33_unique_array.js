function uniqueArray (array) {
    return Array.from(new Set(array));
}

console.log(uniqueArray([1, 2, 3])); // [1, 2, 3]
console.log(uniqueArray([1, 1, 2])); // [1, 2]
console.log(uniqueArray([2, 1, 2])); // [2, 1]