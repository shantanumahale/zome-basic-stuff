function groupBy (array, fn) {
    const map = {};
    array.forEach((item) => {
        const key = `` + fn(item);
        if (!Object.hasOwn(map, key)) {
            map[key] = [];
        }
        map[key].push(item);
    });
    return map;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }

console.log(groupBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n));
// => { '3': [{ n: 3 }, { n: 3 }], '5': { n: 5 } }

console.log(groupBy([], (o) => o)); // => {}

console.log(groupBy([{ n: 1 }, { n: 2 }], (o) => o.m)); // => { undefined: [{ n: 1 }, { n: 2 }] }