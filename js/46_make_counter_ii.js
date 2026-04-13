function makeCounter () {
    let count = 0;
    return {
        get: function () {
            return count;
        },
        increment: function () {
            count = count + 1;
            return count;
        },
        decrement: function () {
            count = count - 1;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        }
    }
}

const counter = makeCounter();
console.log(counter.get()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.get()); // 2
console.log(counter.reset()); // 0
console.log(counter.decrement()); // -1