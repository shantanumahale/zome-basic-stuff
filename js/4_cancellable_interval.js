function setCancellableInterval(callback, delay, ...args) {
  const interval = setInterval(callback, delay, ...args);
  return function () {
    clearInterval(interval);
  };
}

let i = 0;
// t = 0:
const cancel = setCancellableInterval(() => {
  i++;
}, 10);

// t = 10: i is 1
// t = 20: i is 2
cancel(); // Called at t = 25
// t = 30: i is still 2 because cancel() was called and the interval callback has stopped running.
