function deepEqual (obj1, obj2) {
  if (obj1 === obj2) return true;

  if (Number.isNaN(obj1) && Number.isNaN(obj2)) return true;

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;

  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;

    for (let i=0; i<obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }

  if (Array.isArray(obj1) || Array.isArray(obj2)) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(obj2, key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}