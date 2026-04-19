function intersectionBy (fn, ...arrays) {
    if(arrays.length === 0) return [];
    const mappedArrays = arrays.map((array) => array.map(fn));
    let intersectedValues = mappedArrays[0].filter((value) => {
        return mappedArrays.every((mappedArray) => mappedArray.includes(value));
    });
    intersectedValues = intersectedValues.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    return intersectedValues.map((value) => {
        const index = mappedArrays[0].indexOf(value);
        return arrays[0][index];
    })
}

// Get the intersection based on the floor value of each number
const result = intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]); // => [2.4]

// Get the intersection based on the lowercase value of each string
const result2 = intersectionBy(
  (str) => str.toLowerCase(),
  ['apple', 'banana', 'ORANGE', 'orange'],
  ['Apple', 'Banana', 'Orange'],
);

console.log(result);
console.log(result2);
// => ['apple', 'banana', 'ORANGE']