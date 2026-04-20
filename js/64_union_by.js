function unionBy (func, ...arrays) {
    if (arrays.length === 0) return [];
    const result = [];
    const set = new Set();

    arrays.forEach((array) => {
        array.forEach((value) => {
            const res = func(value);
            if (!set.has(res)) {
                result.push(value);
                set.add(res);
            }
        });
    });

    return result;

}

console.log(unionBy((value) => value, [2], [1, 2])); // => [2, 1]

console.log(unionBy(Math.floor, [2.1], [1.2, 2.3])); // => [2.1, 1.2]

console.log(unionBy((o) => o.x, [{ x: 1 }], [{ x: 2 }, { x: 1 }])); // => [{ 'x': 1 }, { 'x': 2 }]

console.log(unionBy((o) => o.m, [])); // => []

console.log(unionBy((o) => o.m, [{ n: 1 }], [{ m: 2 }])); // => [{ n: 1 }, { m: 2 }]