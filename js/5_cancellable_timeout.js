function setCancellableTimeout(callback, delay, ...args) {
  const timeout = setTimeout(callback, delay, ...args);
  return function () {
    clearTimeout(timeout);
  };
}

let i = 0;
// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
}, 100);
// t = 50:
cancel();
// t = 100: i is still 0 because cancel() was called.
