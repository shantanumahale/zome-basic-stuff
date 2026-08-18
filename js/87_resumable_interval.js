export default function createResumableInterval (callback, delay, ...args) {
  let running = false;
  let timeout = null;
  let remaining = delay;
  let lastStartTime = null;

  const run = () => {
    callback(...args);
    if (running) {
      remaining = delay;
      lastStartTime = Date.now();
      timeout = setTimeout(run, delay);
    }
  }

  return {
    start: function () {
      if (running) return;
      runinng = true;
      timeout = setTimeout(() => {
        run();
      }, remaining);
    },
    pause: function () {
      if (!running) return;
      clearTimeout(timeout);
      const elapsed = (Date.now() - lastStartTime);
      remaining = Math.max(0, remaining - elapsed);
      running = false;
      timeout = null;
    },
    stop: function () {
      clearTimeout(timeout);
      running = false;
      timeout = null;
      remaining = delay;
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
