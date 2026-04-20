function camelCaseKeys (val) {
    if (typeof val !== 'object' || val === null) {
        return val;
    }
    if (Array.isArray(val)) {
        const res = [];
        val.forEach((item) => {
            res.push(camelCaseKeys(item));
        });
        return res;
    }
    const res = {};
    let keys = Object.keys(val);
    let values = Object.values(val);

    keys = keys.map((key) => {
        if(key.includes('_')) {
            return key.split('_')[0] + key.split('_').slice(1).map((word) => 
                word[0].toUpperCase() + word.slice(1)
            ).join('');
        } else {
            return key;
        }
    });
    keys.forEach((key, index) => {
        res[key] = values[index];
    });
    return res;
}

console.log(camelCaseKeys({ foo_bar: true }));
// { fooBar: true }

console.log(camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } }));
// { fooBar: true, barBaz: { bazQux: '1' } }

console.log(camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }]));
// [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]