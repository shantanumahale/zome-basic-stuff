// Example function with callback as last argument
// The callback has the signature `(err, value) => any`

function promisify (func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            func.call(this, ...args, (err, res) => err ? reject(err) : resolve(res));
        });
    }
}

function foo(url, options, callback) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

(async () => {
    const promisifiedFoo = promisify(foo);
    const data = await promisifiedFoo('example.com', { foo: 1 });
})();

