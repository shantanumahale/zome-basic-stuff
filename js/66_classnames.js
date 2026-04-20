function validClasses (value) {
    if (typeof value !== 'object' || value === null) {
        if (typeof value === 'string') {
            return value;
        }
        return '';
    }
    if (Array.isArray(value)) {
        const res = [];
        value.forEach((item) => {
            const tempRes = validClasses(item);
            if (tempRes !== '') res.push(tempRes);
        });
        return res.join(' ');
    }
    const res = [];
    Object.keys(value).forEach((key) => {
        if (typeof value[key] === 'boolean' && value[key] === true) {
            res.push(key);
        } else if (typeof value[key] === 'object') {
            res.push(validClasses(value[key]));
        }
    });
    return res.join(' ');
}

function classNames (...args) {
    return validClasses(args);
}

console.log(classNames('foo', 'bar')); // 'foo bar'
console.log(classNames('foo', { bar: true })); // 'foo bar'
console.log(classNames({ 'foo-bar': true })); // 'foo-bar'
console.log(classNames({ 'foo-bar': false })); // ''
console.log(classNames({ foo: true }, { bar: true })); // 'foo bar'
console.log(classNames({ foo: true, bar: true })); // 'foo bar'
console.log(classNames({ foo: true, bar: false, qux: true })); // 'foo qux'
console.log(classNames('a', ['b', { c: true, d: false }])); // 'a b c'
console.log(classNames(
  'foo',
  {
    bar: true,
    duck: false,
  },
  'baz',
  { quux: true },
)); // 'foo bar baz quux'
console.log(classNames(null, false, 'bar', undefined, { baz: null }, '')); // 'bar'