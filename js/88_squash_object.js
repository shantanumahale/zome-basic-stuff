function squashObject (object, prefix = '', res = {}) {
    if (typeof object !== 'object' || object === null || object === undefined) {
        if (prefix !== '') res[prefix] = object;
        return res;
    }
    if (Array.isArray(object)) {
        object.forEach((item, index) => {
            const arrKey = prefix ? `${prefix}.${index}` : `${index}`;
            squashObject(item, arrKey, res);
        });
        return res;
    }
    Object.keys(object).forEach((key) => {
        const value = object[key];
        const newKey = prefix ? key ? `${prefix}.${key}` : `${prefix}` : `${key}`;
        squashObject(value, newKey, res);
    });
    return res;
}

const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

console.log(squashObject(object)); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

const object2 = {
  a: { b: null, c: undefined },
};
console.log(squashObject(object2)); // { 'a.b': null, 'a.c': undefined }

const object3 = { a: { b: [1, 2, 3], c: ['foo'] } };
console.log(squashObject(object3)); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }

const object4 = {
  foo: {
    '': { '': 1, bar: 2 },
  },
};
console.log(squashObject(object4)); // { foo: 1, 'foo.bar': 2 }