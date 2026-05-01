function deepEqual (a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;

    if (typeof a !== 'object' || typeof b !== 'object') return false;

    const aIsArray = Array.isArray(a);
    const bIsArray = Array.isArray(b);
    if (aIsArray !== bIsArray) return false;

    if (aIsArray) {
        if (a.length !== b.length) return false;
        for (let i=0; i<a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }
        return true;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA) {
        if (!Object.hasOwn(b, key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
}

console.log(deepEqual('foo', 'foo')); // true
console.log(deepEqual({ id: 1 }, { id: 1 })); // true
console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqual([{ id: '1' }], [{ id: '2' }])); // false