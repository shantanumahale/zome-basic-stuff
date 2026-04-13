function compact(array) {
    return array.filter(Boolean);
}

console.log(compact([0, 1, false, 2, "", 3, null])); // => [1, 2, 3]
console.log(compact(["hello", 123, [], {}, function () {}])); // => ['hello', 123, [], {}, function() {}]
