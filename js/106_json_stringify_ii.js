function isCyclic (input) {
    const seen = new Set();
    
    function dfsHelper (value) {
        if (typeof value !== 'object' || value === null) return false;
        seen.add(value);
        return Object.values(value).some((value) => seen.has(value) || dfsHelper(value));
    }
    return dfsHelper(input);
}

const QUOTE_ESCAPE = /"/g;

function jsonStringify (value) {
    if (isCyclic(value)) throw new TypeError('Converting circular structure to JSON');
    if (typeof value === 'bigint') throw new TypeError('Do not know how to serialize BigInt');
    if (value === null) return 'null';
    const type = typeof value;
    if (type === 'number') {
        if (Number.isNaN(value) || !Number.isFinite(value)) return 'null';
        return String(value);
    }
    if (type === 'boolean') return String(value);
    if (type === 'function' || type === 'undefined' || type === 'symbol') return undefined;
    if (type === 'string') return `"${value.replace(QUOTE_ESCAPE, '\\"')}"`;
    if (typeof value.toJSON === 'function') return jsonStringify(value.toJSON());

    if (Array.isArray(value)) {
        const arrayValues = value.map((item) => jsonStringify(item));
        return `[${arrayValues.join(',')}]`;
    }
    const objectEntries = Object.entries(value).map(([key, value]) => {
        const shouldIgnoreEntry = typeof key === 'symbol' || value === undefined || typeof value === 'function' || typeof value === 'symbol';
        if (shouldIgnoreEntry) return;
        return `"${key}": ${jsonStringify(value)}`;
    }).filter((value) => value !== undefined);

    return `{${objectEntries.join(',')}}`
}

console.log(jsonStringify({ foo: 'bar' })); // '{"foo":"bar"}'
console.log(jsonStringify({ foo: 'bar', bar: [1, 2, 3] })); // '{"foo":"bar",bar:[1,2,3]}'
console.log(jsonStringify()); // undefined
console.log(jsonStringify(undefined)); // undefined
console.log(jsonStringify(null)); // 'null'
console.log(jsonStringify(true)); // 'true'
console.log(jsonStringify(false)); // 'false'
console.log(jsonStringify(1)); // '1'
console.log(jsonStringify(Infinity)); // 'null'
console.log(jsonStringify(NaN)); // 'null'
console.log(jsonStringify('foo')); // '"foo"'
console.log(jsonStringify('"foo"') === '"\\"foo\\""'); // Double quotes present in the original input are escaped using backslashes
console.log(jsonStringify(Symbol('foo'))); // undefined
console.log(jsonStringify(() => {})); // undefined
console.log(jsonStringify(['foo', 'bar'])); // '["foo","bar"]'
console.log(jsonStringify(/foo/)); // '{}'
console.log(jsonStringify(new Map())); // '{}'
console.log(jsonStringify(new Set())); // '{}'