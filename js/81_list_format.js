function listFormat (arr, config = {}) {
    arr = arr.filter((item) => !!item);
    if (arr.length === 0) return '';
    
    let length = Object.hasOwn(config, 'length') ? config.length : arr.length;
    let unique = Object.hasOwn(config, 'unique') ? config.unique : false;
    let sorted = Object.hasOwn(config, 'sorted') ? config.sorted : false;

    if (unique) arr = Array.from(new Set(arr));
    if (sorted) arr = arr.sort();

    let finalStr = '';

    if (arr.length === 1) return arr[0];

    if (arr.length > length) {
        finalStr += (arr.slice(0, length).join(', ') + ` and ${arr.length - length} others`);
    } else {
        finalStr += (arr.slice(0, arr.length - 1).join(', ') + ` and ${arr[arr.length - 1]}`);
    }
    return finalStr;
}

console.log(listFormat([])); // ''

console.log(listFormat(['Bob'])); // 'Bob'
console.log(listFormat(['Bob', 'Alice'])); // 'Bob and Alice'

console.log(listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']));
// 'Bob, Ben, Tim, Jane and John'

console.log(listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
})); // 'Bob, Ben, Tim and 2 others'

console.log(listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 4,
})); // 'Bob, Ben, Tim, Jane and 1 other'

console.log(listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  sorted: true,
})); // 'Ben, Bob, Jane and 2 others'

console.log(listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
  length: 3,
  unique: true,
})); // 'Bob, Ben, Tim and 2 others'

console.log(listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  unique: true,
})); // 'Bob, Ben, Tim and 2 others'

console.log(listFormat(['Bob', 'Ben', '', '', 'John'])); // 'Bob, Ben and John'
