async function promiseAllSettled (promises) {
    return new Promise((resolve) => {
        let results = new Array(promises.length);
        let completed = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((res) => {
                results[index] = {
                    status: 'fulfilled',
                    value: res
                }
            }).catch((error) => {
                results[index] = {
                    status: 'rejected',
                    reason: error
                }
            }).finally(() => {
                completed += 1;
                if (completed === promises.length) resolve(results);
            });
        });

    });
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 100);
});

(async () => {
    console.log(await promiseAllSettled([p0, p1, p2]));
    // [
    //   { status: 'fulfilled', value: 3 },
    //   { status: 'fulfilled', value: 42 },
    //   { status: 'rejected', reason: 'foo' },
    // ];
})();

