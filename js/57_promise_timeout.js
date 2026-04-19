async function promiseTimeout (promise, duration) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject('Promise Timeout')
        }, duration);
        promise
            .then(resolve)
            .catch(reject)
            .finally(() => {
                clearTimeout(timer);
            });
    });
};

function fakeFetch(latency) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that resolves after `latency`.
    setTimeout(() => {
      resolve('Data successfully fetched!');
    }, latency);
  });
}

(async () => {
    const response = await promiseTimeout(fakeFetch(1000), 2000);
    console.log(response); // Data successfully fetched!
    await promiseTimeout(fakeFetch(5000), 2000);
    // "Promise timeout" thrown.
})();



