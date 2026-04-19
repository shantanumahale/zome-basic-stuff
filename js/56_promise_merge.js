function isPlainObject (value) {
    if (value === null) return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

function mergeResult (value1, value2) {
    try {
        if (typeof value1 === 'number' && typeof value2 === 'number') return value1 + value2;
        if (typeof value1 === 'string' && typeof value2 === 'string') return value1.concat(value2);
        if (Array.isArray(value1) || Array.isArray(value2)) return [...value1, ...value2];
        if (isPlainObject(value1) && isPlainObject(value2)) {
            return {...value1, ...value2}
        }
        throw 'Unsupported data types';
    } catch {
        throw 'Unsupported data types';
    }
}

async function promiseMerge (...promises) {
    const results = await Promise.all(promises);
    return results.slice(1).reduce(mergeResult, results[0]);
}

(async () => {
    const mergeNumbers = await promiseMerge(Promise.resolve(1), Promise.resolve(2)); // 3
    const mergeStrings = await promiseMerge(Promise.resolve('abc'), Promise.resolve('def')); // 'abcdef'
    const mergeArrays = await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
    const mergeObjects = await promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve({ bar: 2 })); // { foo: 1, bar: 2}

    let unsupportedTypeError;
    try {
        await promiseMerge(Promise.resolve(1), Promise.resolve([]));
    } catch (error) {
        unsupportedTypeError = error; // Rejected with 'Unsupported data types'
    }

    let rejectedPromiseError;
    try {
        await promiseMerge(Promise.reject(1), Promise.resolve(2));
    } catch (error) {
        rejectedPromiseError = error; // Rejected with 1
    }

    console.log(mergeNumbers);
    console.log(mergeStrings);
    console.log(mergeArrays);
    console.log(mergeObjects);
    console.log(unsupportedTypeError);
    console.log(rejectedPromiseError);
})();
