function findLastIndex (array, fn, from = array.length) {
    const length = array.length;
    if (from > length) {
        from = length + 1;
    }
    if (from < 0) {
        from = from + length;
    }
    for (let i=from; i>=0; i--) {
        if (fn(array[i])) {
            return i;
        }
    }
    return -1;
}


const arr = [5, 4, 3, 2, 1];

// Search for the last value in the array that is greater than 3 and return the index.
console.log(findLastIndex(arr, (num) => num > 3)); // => 1

// Start searching from index 3 (inclusive).
console.log(findLastIndex(arr, (num) => num > 1, 3)); // => 3

// Start searching from index 3 (inclusive).
console.log(findLastIndex(arr, (num) => num < 1, 3)); // => -1