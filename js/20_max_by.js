function maxBy (array, fn) {
    const newArray = array.map((item) => fn(item));
    let max = -Infinity;
    for (let i=0; i<newArray.length; i++) {
        if (newArray[i] === undefined) {
            return undefined;
        }
        max = Math.max(max, newArray[i]);
    }
    return max === NaN ? undefined : max;
}

console.log(maxBy([{ n: 1 }, { n: 2 }], (o) => o.n)); // => { n: 2 }

console.log(maxBy([1, 2], (o) => -o)); // => 1

console.log(maxBy([{ n: 1 }, { n: 2 }], (o) => o.m)); // => undefined