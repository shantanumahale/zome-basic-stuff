// Resolved example.
async function promiseAll (promises) {
    return new Promise((resolve, reject) => {
        let unresolved = promises.length;
        let results = new Array(promises.length);
        if (unresolved === 0) {
            resolve(results);
            return;
        }
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((res) => {
                results[index] = res;
                unresolved -= 1;
                if (unresolved === 0) resolve(results);
            })
            .catch(reject);
        })
    });
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

(async () => {
   console.log( await promiseAll([p0, p1, p2])); // [3, 42, 'foo']
})();



