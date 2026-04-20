// Example function with callback as the first argument.
// The callback has the signature `(err, value) => any`.
function foo(callback, url, options) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

foo[Symbol.for('util.promisify.custom')] = (url, options) => {
  return new Promise((resolve, reject) => {
    foo(
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      },
      url,
      options,
    );
  });
};

const promisifyCustomSymbol = Symbol.for(`util.promisify.custom`);

function promisify (func) {
    if (func[promisifyCustomSymbol]) {
        return func[promisifyCustomSymbol];
    }

    return function (...args) {
        return new Promise((resolve, reject) => {
            func.call(this, ...args, (err, res) => err ? reject(err) : resolve(res));
        })
    }
}


const promisifiedFoo = foo[Symbol.for('util.promisify.custom')]; // true
const data = await promisifiedFoo('example.com', { foo: 1 });