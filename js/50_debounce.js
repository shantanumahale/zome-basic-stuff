function debounce (fn, wait = 0) {
    let timeout = null;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    }
}

let i = 0;
function increment() {
  i++;
  console.log("🔥 increment executed at", Date.now() - start, "ms");
}
const debouncedIncrement = debounce(increment, 100);

const start = Date.now();

console.log("t=0 call");
debouncedIncrement();

setTimeout(() => {
  console.log("t=50 call");
  debouncedIncrement();
}, 50);

setTimeout(() => {
  console.log("t=100 check i =", i);
}, 100);

setTimeout(() => {
  console.log("t=160 check i =", i);
}, 160);