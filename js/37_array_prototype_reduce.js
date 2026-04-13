Array.prototype.myReduce = function (fn, start) {
    if (this.length === 0) return 0;
    let res = start;
    for (let i=0; i<this.length; i++) {
        if (Object.hasOwn(this, i)) {
            res = fn(res, this[i]);
        }
        
    }
    return res;
}

console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 0)); // 6
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 4)); // 10