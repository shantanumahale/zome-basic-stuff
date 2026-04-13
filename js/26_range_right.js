function rangeRight (start, end = undefined, step = 1) {
    const res = [];

    if (end === undefined) {
        end = start;
        start = 0
    }
    if (end < start && step === 1) {
        step = -1;
    }
    const length = (end - start) / (step || 1);
    for (let i=0; i<length; i++) {
        res.unshift(start + i * step);
    }
    return res;
}

console.log(rangeRight(4)); // => [3, 2, 1, 0]

console.log(rangeRight(-4)); // => [-3, -2, -1, 0]

console.log(rangeRight(1, 5)); // => [4, 3, 2, 1]

console.log(rangeRight(0, 20, 5)); // => [15, 10, 5, 0]

console.log(rangeRight(0, -4, -1)); // => [-3, -2, -1, 0]

console.log(rangeRight(1, 4, 0)); // => [1, 1, 1]

console.log(rangeRight(0)); // => []