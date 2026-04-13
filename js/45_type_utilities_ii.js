function isArray (value) {
    return Array.isArray(value);
}

function isArrayAlt (value) {
    if (value == null) {
        return false;
    }
    return value.constructor === Array;
}

function isFunction (value) {
    return typeof value === 'function';
}

function isObject (value) {
    if (value == null) {
        return false;
    }
    const type = typeof value;
    return type === 'function' || type === 'object'
}

function isPlainObject (value) {
    if (value === null) return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

function isPlainObjectAlternative (value) {
    if (!isObject(value)) return false;
    if (Object.getPrototypeOf(value) === null) return true;
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}