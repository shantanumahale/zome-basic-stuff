Array.prototype.myFilter = function (fn, thisArg) {
    const res = [];
    const newArray = this.map((item) => fn.call(thisArg, item));
    newArray.forEach((item, index) => {
        if (item && Object.hasOwn(this, index)) {
            res.push(this[index]);
        }
    })
    return res;
}

console.log([1, 2, 3, 4].myFilter((value) => value % 2 == 0)); // [2, 4]
console.log([1, 2, 3, 4].myFilter((value) => value < 3)); // [1, 2]