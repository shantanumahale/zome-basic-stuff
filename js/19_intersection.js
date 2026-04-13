function intersection (...arrays) {
    if (arrays.length <= 0) {
        return [];
    }
    const set = new Set(arrays[0]);
    for (let i=1; i<arrays.length; i++) {
        set.forEach((item) => {
            if (!arrays[i].includes(item)) {
                set.delete(item);
            }
        });
    }
    return Array.from(set);
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

console.log(intersection(arr1, arr2, arr3)); // => [3]