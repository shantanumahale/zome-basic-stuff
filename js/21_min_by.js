function minBy (array, fn) {
    const newArray = array.map((item) => fn(item));
    let min = Infinity;
    for (let i=0; i<newArray.length; i++) {
        if (newArray[i] === undefined) {
            return undefined;
        }
        min = Math.min(min, newArray[i]);
    }
    return min === NaN ? undefined : min;
}

console.log(minBy([2, 3, 1, 4], (num) => num)); // => 1

console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.n)); // => { n: 1 }

console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.m)); // => undefined