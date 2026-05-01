function deepOmit (object, keysToOmit) {
    if (typeof object !== 'object' || object === null || object === undefined) return object;
    if (Array.isArray(object)) {
        return object.map((item) => deepOmit(item, keysToOmit))
    }
    let res = {};
    Object.keys(object).filter((key) => !(keysToOmit.includes(key))).forEach((key) => {
        res[key] = deepOmit(object[key], keysToOmit)
    });
    return res;
}

console.log(deepOmit({ a: 1, b: 2, c: 3 }, ['b'])); // { a: 1, c: 3 }
const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: [5, 6],
};
console.log(deepOmit(obj, ['b', 'c', 'e'])); // { a: 1, f: [5, 6] }