function deepClone (object, seen = new WeakMap()) {
  if (typeof object !== 'object' || object === null) {
    return object;
  }
  if (seen.has(object)) return seen.get(object);

  if (object instanceof Date) return new Date(object.getTime());
  if (object instanceof RegExp) return new RegExp(object.source, object.flags);

  if (object instanceof Map) {
    const clone = new Map();
    seen.set(object, clone);
    object.forEach((value, key) => clone.set(key, deepClone(value, seen)));
    return clone;
  }

  if (object instanceof Set) {
    const clone = new Set();
    seen.set(object, clone);
    object.forEach(value => clone.add(deepClone(value, seen)));
  }

  const clone = new object.constructor();
  seen.set(object, clone);

  Reflect.ownKeys(object).forEach((key) => {
    clone[key] = deepClone(object[key], seen);
  });
  return clone;
}