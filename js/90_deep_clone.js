function deepClone (object) {
    if (typeof object !== 'object' || object === null) return object;
    if (Array.isArray(object)) {
        let res = [];
        object.forEach((value) => {
            res.push(deepClone(value));
        });
        return res;
    }
    let res = {};
    Object.keys(object).forEach((key, index) => {
        res[key] = deepClone(object[key]);
    });
    return res;
}

const obj1 = { user: { role: 'admin' } };
const clonedObj1 = deepClone(obj1);
console.log(clonedObj1);

clonedObj1.user.role = 'guest'; // Change the cloned user's role to 'guest'.
console.log(clonedObj1.user.role); // 'guest'
console.log(obj1.user.role); // Should still be 'admin'.

const obj2 = { foo: [{ bar: 'baz' }] };
const clonedObj2 = deepClone(obj2);
console.log(clonedObj2);

obj2.foo[0].bar = 'bax'; // Modify the original object.
console.log(obj2.foo[0].bar); // 'bax'
console.log(clonedObj2.foo[0].bar); // Should still be 'baz'.