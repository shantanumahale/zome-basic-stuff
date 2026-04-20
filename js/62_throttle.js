function throttle (fn, wait = 0) {
    let shouldThrottle = false;
    return function (...args) {
        if (shouldThrottle) {
            return;
        }
        shouldThrottle = true;
        setTimeout(() => {
            shouldThrottle = false;
        }, wait);
        
        fn.call(this, ...args);
    }
}

let i = 0;
function increment() {
  i++;
  console.log(`[${Date.now()}] 🔢 i incremented to`, i);
}
const throttledIncrement = throttle(increment, 100);

// // t = 0: Call throttledIncrement(). i is now 1.
// throttledIncrement(); // i = 1

// // t = 50: Call throttledIncrement() again.
// //  i is still 1 because 100ms have not passed.
// throttledIncrement(); // i = 1

// // t = 101: Call throttledIncrement() again. i is now 2.
// //  i can be incremented because it has been more than 100ms
// //  since the last throttledIncrement() call at t = 0.
// throttledIncrement(); // i = 2

// t = 0
setTimeout(() => throttledIncrement(), 0);

// t = 50
setTimeout(() => throttledIncrement(), 50);

// t = 101
setTimeout(() => throttledIncrement(), 101);