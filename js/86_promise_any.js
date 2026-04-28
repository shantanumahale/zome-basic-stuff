async function promiseAny (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return reject(new AggregateError([]));
        }
        const errors = new Array(promises.length);
        let pending = promises.length;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                pending -= 1;
                errors[index] = err;
                if (pending === 0) reject(new AggregateError(errors));
            })
        });
    })
}


(async () => {
    const p0 = Promise.resolve(42);
    const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(21);
    }, 100);
    });

    console.log(await promiseAny([p0, p1])); // 42
})();

(async () => {
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

    console.log(await promiseAny([p0, p1])); // 42
})();

(async () => {
    const p0 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(42);
    }, 400);
    });
    const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Err!');
    }, 100);
    });

    try {
    console.log(await promiseAny([p0, p1]));
    } catch (err) {
    console.log(err instanceof AggregateError); // true
    console.log(err.errors); // [ 42, "Err!" ]
}
})();

