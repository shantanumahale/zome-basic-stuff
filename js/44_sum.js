function sum (a) {
    return function (b) {
        return b === undefined ? a : sum (a + b);
    }
}

console.log(sum(1)()); // 1
console.log(sum(1)(2)()); // 3
console.log(sum(1)(2)(-3)()); // 0