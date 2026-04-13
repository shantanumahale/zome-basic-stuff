function compose (...args) {
    return function (x) {
        let res = x;
        for (let i=args.length-1; i>=0; i--) {
            if (typeof args[i] === 'function') res = args[i](res);
        }
        return res;
    }
    
}

const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

const composedFn = compose(subtract10, double, add1);
console.log(composedFn(3)); // (3 + 1) * 2 - 10 => -2