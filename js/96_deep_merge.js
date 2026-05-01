function isPlainObject (object) {
    if (object === null) return false;
    const prototype = Object.getPrototypeOf(object);
    return prototype === null || prototype === Object.prototype;
}

function deepMerge (a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        return [...a, ...b];
    }

    if (isPlainObject(a) && isPlainObject(b)) {
        const obj = { ...a };
        for (const key in b) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                obj[key] = deepMerge(a[key], b[key]);
            } else {
                obj[key] = b[key];
            }
        }
        return obj;
    }
    return b;
}

console.log(deepMerge({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
console.log(deepMerge({ a: 1 }, { a: 2 })); // { a: 2 }
console.log(deepMerge({ a: 1, b: [2] }, { b: [3, 4] })); // { a: 1, b: [2, 3, 4] }