Function.prototype.myApply = function (thisArg, argArray = []) {
    return this.bind(thisArg, ...argArray)();
}

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

console.log(multiplyAge.myApply(mary)); // 21
console.log(multiplyAge.myApply(john, [2])); // 84