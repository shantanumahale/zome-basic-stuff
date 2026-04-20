function conformsTo (object, source) {
    for (const key in source) {
        if (Object.hasOwn(source, key)) {
            if (!(key in object) || !(source[key](object[key]))) {
                return false;
            }
        }
    }
    return true;
}

console.log(conformsTo({ a: 1, b: 2 }, { b: (n) => n > 1 }));
// => true

console.log(conformsTo({ a: 1, b: 2 }, { b: (n) => n > 2 }));
// => false

console.log(conformsTo({}, { b: (n) => n > 1 })); // => false