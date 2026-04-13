Array.prototype.myAt = function (index) {
    const len = this.length;
    if (index < -len || index > len) {
        return;
    }
    const i = index < 0 ? index + len : index;
    return this[i];

}

const arr = [42, 79];
console.log(arr.myAt(0)); // 42
console.log(arr.myAt(1)); // 79
console.log(arr.myAt(2)); // undefined

console.log(arr.myAt(-1)); // 79
console.log(arr.myAt(-2)); // 42
console.log(arr.myAt(-3)); // undefined