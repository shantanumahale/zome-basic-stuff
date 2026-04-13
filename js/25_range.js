function range(start, end = undefined, step = 1) {
    let result = [];
    if (end === undefined) {
        end = start;
        start = 0;
    }
    if (end < start && step === 1) {
        step = -1;
    } 
    const length = (end - start) / (step || 1);

    for (let i=0; i<length; i++) {
        result.push(start + i * step);
    }
    return result;
}

console.log(range(4)); // => [0, 1, 2, 3]

console.log(range(-4)); // => [0, -1, -2, -3]

console.log(range(1, 5)); // => [1, 2, 3, 4]

console.log(range(0, 20, 5)); // => [0, 5, 10, 15]

console.log(range(0, -4, -1)); // => [0, -1, -2, -3]

console.log(range(1, 4, 0)); // => [1, 1, 1]

console.log(range(0)); // => []