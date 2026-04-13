function fill (array, value, start = 0, end = array.length) {
    const length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    if (end > length) {
        end = length + 1;
    }
    if (end < 0) {
        end = end + length;
    }
    for (let i=start; i<Math.min(end, length); i++) {
        array[i] = value;
    }
    return array;
}

console.log(fill([1, 2, 3], 'a')); // ['a', 'a', 'a']
console.log(fill([4, 6, 8, 10], '*', 1, 3)); // [4, '*', '*', 10]
console.log(fill([4, 6, 8, 10, 12], '*', -3, -1)); // [4, 6, '*', '*', 12]