function isEmpty (value) {
    if (value === 'undefined' || value === null) return true;
    if (value instanceof Map || value instanceof Set) return value.size === 0;
    if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
    
    const prototype = Object.getPrototypeOf(value);
    if (prototype === null || prototype === Object.prototype) return Object.keys(value).length === 0;
    return true;
}

console.log(isEmpty(null)); // => true
console.log(isEmpty(true)); // => true
console.log(isEmpty(1)); // => true
console.log(isEmpty([1, 2, 3])); // => false
console.log(isEmpty({ a: 1 })); // => false