async function mapAsync (arr, asyncfn) {
    return new Promise((resolve, reject) => {
        let results = new Array(arr.length);
        let unresolved = arr.length;

        arr.forEach((item, index) => {
            asyncfn(item)
                .then((res) => {
                    results[index] = res;
                    unresolved -= 1;
                    if (unresolved === 0) {
                        resolve(results);
                    }
                })
                .catch((error) => reject(error));
        });
    });
}

const asyncDouble = (x) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });

(async () => {
    const doubled = await mapAsync([1, 2], asyncDouble);
    console.log(doubled); // [2, 4]
})();
