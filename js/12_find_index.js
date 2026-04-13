function findIndex (array, fn, index = 0) {
    let length = array.length;
    if (index < 0) {
        index = -index > length ? 0 : index + length;
    }
    for (let i=index; i<array.length; i++) {
        if (fn(array[i])) {
            return i;
        }
    }
    return -1;
}


const arr = [1, 2, 3, 4, 5];

// Search for the first value in the array that is greater than 3.
console.log(findIndex(arr, (num) => num > 3)); // => 3

// Start searching from index 4 (inclusive).
console.log(findIndex(arr, (num) => num > 3, 4)); // => 4

// No such element exists.
console.log(findIndex(arr, (num) => num > 10, 3)); // => -1