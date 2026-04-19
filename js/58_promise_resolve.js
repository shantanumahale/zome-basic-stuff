function promiseResolve(value) {
    if (value instanceof Promise) {
        return value;
    }
    return new Promise((resolve) => resolve(value));
}

(async () => {
    const p = promiseResolve(42);
    await p; // 42
    console.log(p);

    const original = new Promise((resolve) => resolve(42));
    const cast = promiseResolve(original);
    await cast; // 42
    console.log(cast);

    const resolvedThenable = promiseResolve({
    then(resolve, reject) {
        resolve(42);
    },
    });
    await resolvedThenable; // 42
    console.log(resolvedThenable);
})();