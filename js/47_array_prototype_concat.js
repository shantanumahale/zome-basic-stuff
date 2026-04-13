Array.prototype.myConcat = function (...args) {
    let arr = [...this];
    args.forEach((arg) => {
        if (typeof arg === 'number') arr.push(arg);
        else arr = [...arr, ...arg];
    });
    return arr;
}

console.log([1, 2, 3].myConcat([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log([1, 2, 3].myConcat(4, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log([1, 2, 3].myConcat(4, [5, 6])); // [1, 2, 3, 4, 5, 6]