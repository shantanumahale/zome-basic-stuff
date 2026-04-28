function createResumableInterval (callback, delay, ...args) {
    let interval = null;
    let running = false;

    const run = () => callback(...args);

    return {
        start: function () {
            if (running) return;
            running = true;
            run();
            interval = setInterval(run, delay);
        },
        pause: function () {
            if (!running) return;
            clearInterval(interval);
            running = false;
            interval = null;
        },
        stop: function () {
            clearInterval(interval);
            running = false;
            interval = null;
        }
    }
}

let i = 0;
const interval = createResumableInterval(() => {
  i++;
  console.log(`callback executed -> i = ${i}`);
}, 10);

console.log('t=0 -> interval created, i =', i);

setTimeout(() => {
  interval.start();
  console.log('t=10 -> start() called, i =', i);
}, 10);

setTimeout(() => {
  interval.pause();
  console.log('t=25 -> pause() called, i =', i);
}, 25);

setTimeout(() => {
  console.log('t=30 -> while paused, i =', i);
}, 30);

setTimeout(() => {
  interval.start();
  console.log('t=35 -> start() called again, i =', i);
}, 35);

setTimeout(() => {
  interval.stop();
  console.log('t=50 -> stop() called, i =', i);
}, 50);

setTimeout(() => {
  console.log('final -> i should stay at 4:', i);
}, 70);
