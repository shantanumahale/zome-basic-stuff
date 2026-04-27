function jsonStringify (object, level = 0) {
    if (Array.isArray(object)) {
        const arrValues = object.map((item) => jsonStringify(item));
        return `[${arrValues.join(',')}]`;
    }
    if (typeof object === 'object' && object !== null) {
        const objectEntries = Object.entries(object).map(
            ([key, value]) => `{"${key}": ${jsonStringify(value)}}`
        );
        return `${objectEntries.join(',')}`
    }
    if (typeof object === 'string') {
        return `"${object}"`;
    }
    return String(object);
}

console.log(jsonStringify({ foo: 'bar' })); // '{"foo":"bar"}'
console.log(jsonStringify({ foo: 'bar', bar: [1, 2, 3] })); // '{"foo":"bar","bar":[1,2,3]}'
console.log(jsonStringify({ foo: true, bar: false })); // '{"foo":true,"bar":false}'
console.log(jsonStringify(null)); // 'null'
console.log(jsonStringify(true)); // 'true'
console.log(jsonStringify(false)); // 'false'
console.log(jsonStringify(1)); // '1'
console.log(jsonStringify('foo')); // '"foo"'