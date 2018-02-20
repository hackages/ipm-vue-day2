import {camelCase, isPlainObject, forEach} from 'lodash';

export const getCamelFromArrayOrObject = data => {
  return Array.isArray(data)
    ? data.map(d => camelCaseMapper(d))
    : camelCaseMapper(data);
};

export const camelCaseMapper = data => {
  const camelCaseObject = {};
  forEach(data, (value, key) => {
    if (isPlainObject(value)) {
      value = camelCaseMapper(value);
    }
    camelCaseObject[camelCase(key)] = value;
  });
  return camelCaseObject;
};
