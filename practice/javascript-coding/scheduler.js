class Scheduler {
  constructor (concurrencyLimit) {
    this.limit = concurrencyLimit;
    this.activeCount = 0;
    this.queue = [];
  }

  addTask(taskFn) {
    return new Promise((resolve, reject) => {
      const wrappedTask = () => {
        this.activeCount++;
        taskFn()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.activeCount--;
            this.runNext();
          })
      };
      this.queue.push(wrappedTask);
      this.runNext();
    })
  }

  runNext () {
    if (this.activeCount < this.limit && this.queue.length > 0) {
      const nextTask = this.queue.shift();
      nextTask();
    }
  }
}

const makeMockNetworkCall = (time, id) => {
  return () => new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${id} finished (took ${time}ms)`);
      resolve(`Result ${id}`);
    }, time);
  })
};

const scheduler = new Scheduler(2);

console.log('Starting all tasks...');
scheduler.addTask(makeMockNetworkCall(1000, 'A'));
scheduler.addTask(makeMockNetworkCall(500, 'B'));
scheduler.addTask(makeMockNetworkCall(300, 'C'));
scheduler.addTask(makeMockNetworkCall(400, 'D'));