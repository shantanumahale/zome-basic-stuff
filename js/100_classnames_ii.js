function classNames (...args) {
    const classes = new Set();

    function classNamesImpl(...args) {
        args.forEach((arg) => {
            if (!arg) return;
            const argType = typeof arg;

            if (argType === 'string' || argType === 'number') {
                classes.add(String(arg));
                return;
            }

            if (argType === 'function') {
                const result = arg();
                if (!result) return;
                classes.add(result);
                return;
            }

            if (Array.isArray(arg)) {
                for (const cls of arg) {
                    classNamesImpl(cls);
                }
                return;
            }

            if (argType === 'object') {
                for (const key in arg) {
                    if (Object.hasOwn(arg, key)) {
                        arg[key] ? classes.add(key) : classes.delete(key);
                    }
                }
                return;
            }
        })
    }
    classNamesImpl(args);
    return Array.from(classes).join(' ');
}

console.log(classNames('foo', 'foo')); // 'foo'
console.log(classNames({ foo: true }, { foo: true })); // 'foo'
console.log(classNames({ foo: true, bar: true }, { foo: false })); // 'bar'
console.log(classNames('foo', () => 'bar')); // 'foo bar'
console.log(classNames('foo', () => 'foo')); // 'foo'