function dropWhile (array, fn) {
    return array.filter((item) => {
        if (fn(item) !== true) {
            return item;
        }
    });
}

console.log(dropWhile([1, 2, 3, 4, 5], (value) => value < 3)); // => [3, 4, 5]
console.log(dropWhile([1, 2, 3], (value) => value < 6)); // => []