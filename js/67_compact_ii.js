function compact (obj) {
    if (obj === null || obj === undefined) {
        return false;
    }
    if (typeof obj !== 'object') {
        return !!obj;
    }
    if (Array.isArray(obj)) {
        const res = [];
        obj.forEach((value) => {
            if (compact(value)) res.push(value);
        });
        return res;
    }
    const res = {};
    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (compact(value)) res[key] = value;
    });
    return res;
}

console.log(compact([0, 1, false, 2, '', 3, null])); // => [1, 2, 3]
console.log(compact({ foo: true, bar: null })); // => { foo: true }