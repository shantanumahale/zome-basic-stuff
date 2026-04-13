Array.prototype.square = function () {
  return this.map((el) => el * el);
};

console.log([-2].square()); // [4]
console.log([1, 2, 3, 4].square()); // [1, 4, 9, 16]
