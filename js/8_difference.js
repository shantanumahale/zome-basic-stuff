function difference (array, values) {
    const set = new Set(array);
    values.forEach((value) => {
        if (set.has(value)) {
            set.delete(value);
        }
    });
    const res = [];
    set.forEach((value) => {
        if (value) {
            res.push(value);
        }
    });
    return res;
}

console.log(difference([1, 2, 3], [2, 3])); // => [1]
console.log(difference([1, 2, 3, 4], [2, 3, 1])); // => [4]
console.log(difference([1, 2, 3], [2, 3, 1, 4])); // => []
console.log(difference([1, , 3], [1])); // => [3]