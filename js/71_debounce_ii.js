function debounce (fn, delay = 0) {
    let timeout = null;
    let context = undefined;
    let argsToInvoke = undefined;

    function clearTimer () {
        console.log(`[${Date.now()}] 🧹 clearTimer called`);
        clearTimeout(timeout);
        timeout = null;
    }

    function invoke () {
        if (timeout === null) {
            console.log(`[${Date.now()}] ⚠️ invoke skipped (no timer)`);
            return;
        }
        clearTimer();
        console.log(`[${Date.now()}] 🚀 invoking fn`);
        fn.apply(context, argsToInvoke);
    }

    function debounced (...args) {
        console.log(`[${Date.now()}] 📞 debounced called`);
        clearTimer();
        argsToInvoke = args;
        context = this;
        timeout = setTimeout(() => {
            console.log(`[${Date.now()}] ⏰ timeout fired`);
            invoke();
        }, delay);
    }

    debounced.cancel = clearTimer;
    debounced.flush = invoke;
    return debounced;
} 

let i = 0;
function increment() {
  i++;
  console.log(`[${Date.now()}] 🔢 i =`, i);
}

const debouncedIncrement = debounce(increment, 100);

// t = 0
setTimeout(() => debouncedIncrement(), 0);

// t = 50
setTimeout(() => debouncedIncrement.cancel(), 50);

// t = 151
setTimeout(() => debouncedIncrement.flush(), 151);

// const debouncedIncrement = debounce(increment, 100);

// // t = 0: Call debouncedIncrement().
// debouncedIncrement(); // i = 0

// // t = 50: Cancel the delayed increment.
// debouncedIncrement.cancel();

// // t = 100: increment() was not invoked and i is still 0.

// // t = 151:
// debouncedIncrement.flush(); // i is now 1 because flush causes() the callback to be immediately invoked.

// // t = 200: i is already 1. The callback has been called before
// // and won't be called again.