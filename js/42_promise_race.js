function promiseRace (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return;
        }
        promises.forEach(async (item) => {
            try {
                const result = await item;
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    });
}

const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 400);
});

await promiseRace([p0, p1]); // 42