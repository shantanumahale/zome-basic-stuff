Function.prototype.myBind = function (thisArg, ...argArray) {
    const original = this;
    return function (...args) {
        return original.apply(thisArg, [...argArray, ...args]);
    }
}

const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42