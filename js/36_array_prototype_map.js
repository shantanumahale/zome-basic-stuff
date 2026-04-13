Array.prototype.myMap = function (fn, thisArg) {
    const res = [];
    for (let i=0; i<this.length; i++) {
        if (Object.hasOwn(this, i)) {
            const temp = fn.call(thisArg, this[i]);
            res.push(temp);
        }
    }
    return res;
}

console.log([1, 2, 3, 4].myMap((i) => i)); // [1, 2, 3, 4]
console.log([1, 2, 3, 4].myMap((i) => i * i)); // [1, 4, 9, 16]