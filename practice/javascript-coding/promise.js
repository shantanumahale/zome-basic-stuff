class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.map(callback => callback());
      }
    };

    const reject = reason => {
      this.state = 'rejected';
      this.value = reason;
      this.onRejectedCallbacks.map(callback => callback());
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleCallback = callback => {
        setTimeout(() => {
          try {
            const result = callback(this.value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      };

      if (this.state === 'fulfilled') {
        if (typeof onFulfilled === 'function') {
          handleCallback(onFulfilled);
        } else {
          resolve(this.value);
        }
      } else if (this.state === 'rejected') {
        if (typeof onRejected === 'function') {
          handleCallback(onRejected);
        } else {
          reject(this.value);
        }
      } else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          if (typeof onFulfilled === 'function') handleCallback(onFulfilled);
          else resolve(this.value);
        });

        this.onRejectedCallbacks.push(() => {
          if (typeof onRejected === 'function') handleCallback(onRejected);
          else reject(this.value);
        });
      }
    });
  }
}
