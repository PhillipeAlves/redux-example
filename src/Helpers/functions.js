export const flattenObject = (value) => {
  return Object.entries(value).reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
      value = flattenObject(value);
    }
    acc.push(` ${key}: ${value}`);
    return acc;
  }, []);
};
