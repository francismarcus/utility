export const deepFreeze = <T extends any>(obj: T): Readonly<T> => {
  if (typeof obj !== 'object') {
    return obj;
  }

  if (Object.isFrozen(obj)) {
    return obj;
  }

  for (let key of Object.getOwnPropertyNames(obj)) {
    if (Array.isArray(obj) && key === 'length') continue;

    obj[key] =
      obj[key] && typeof obj[key] === 'object'
        ? deepFreeze(obj[key])
        : obj[key];
  }
  return Object.freeze(obj);
};
