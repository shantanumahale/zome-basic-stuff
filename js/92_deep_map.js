function deepMap (object, fn) {
    if (object === null || object === undefined) return object;
    if (typeof object !== 'object') return fn(object);

    if (Array.isArray(object)) {
        return object.map((item) => deepMap(item, fn));
    }
    let res = {};
    Object.keys(object).map((key) => {
        res[key] = deepMap(object[key], fn);
    })
    return res;
}

const double = (x) => x * 2;

console.log(deepMap(2, double)); // 4
console.log(deepMap([1, 2, 3], double)); // [4, 5, 6]
console.log(deepMap({ a: 1, b: 2, c: 3 }, double)); // { a: 2, b: 4, c: 6 }
console.log(deepMap(
  {
    foo: 1,
    bar: [2, 3, 4],
    qux: { a: 5, b: 6 },
  },
  double,
)); // => { foo: 2, bar: [4, 6, 8], qux: { a: 10, b: 12 } }