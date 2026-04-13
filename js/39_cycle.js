function cycle (...strs) {
    let currIndex = 0;
    return function () {
        let res = strs[currIndex];
        if (currIndex + 1 === strs.length) {
            currIndex = 0;
        } else {
            currIndex = currIndex + 1;
        }
        return res;
    }
}

const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"