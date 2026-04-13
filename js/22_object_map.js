function objectMap (object, fn) {
    Object.keys(object).forEach((key) => {
        object[key] = fn.call(object, object[key])
    });
    return object;
}

const double = (x) => x * 2;
console.log(objectMap({ foo: 1, bar: 2 }, double)); // => { foo: 2, bar: 4}