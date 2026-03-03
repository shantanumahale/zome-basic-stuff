// Return an array of all resolved values in the exact order they were passed. Reject immediately if any single promise fails.
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return resolve([]);

    const results = [];
    let count = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        value => {
          results[index] = value;
          count -= 1;
          if (count === 0) {
            resolve(results);
          }
        }
      )
      .catch(
        error => {
          reject(error);
        }
      )
    })
  });
};

// Wait for everything to finish (both success and failure) and return an array of objects describing outcome for each.
Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    if (promises.length === 0) return resolve([]);

    const results = [];
    let count = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        value => {
          results[index] = {
            status: 'fulfilled',
            value: value
          };
        }
      )
      .catch(error => {
        results[index] = {
          status: "rejected",
          reason: error
        }
      })
      .finally(() => {
        count += 1;
        if (count === promises.length) {
          resolve(results);
        }
      })
    });
  })
};

// Return the result (or error) of whichever promise finishes first
Promise.myRace = function(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject);
    })
  })
};

// Return the first promise to successfully fulfill. Only reject if all promises fail.
Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return reject(new AggregateError([], 'All promises were rejected'));
    const errors = [];
    let rejectedCount = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(error => {
          errors[index] = error;
          rejectedCount += 1;
          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, 'All promises were rejected'));
          }
        })
    })
  });
}