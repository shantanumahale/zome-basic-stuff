function flatten (object, prefix = "", res = {}) {
  if (typeof object !== 'object' || object === null || object instanceof Date || object instanceof RegExp) {
    res[prefix] = object;
    return res;
  }
  if (Array.isArray(object)) {
    if (object.length === 0) {
      res[prefix] = [];
      return res;
    }
    object.forEach((value, index) => {
      const arrKey = prefix ? `${prefix}[${index}]` : `${index}`;
      flatten(value, arrKey, res);
    });
  } else {
    const keys = Object.keys(object);
    if (keys.length === 0) {
      res[prefix] = {};
      return res;
    }
    keys.forEach((key) => {
      const newKey = prefix ? `${prefix}.${key}` : key;
      flatten(object[key], newKey, res); 
    })
  }
}