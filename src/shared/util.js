import {camelCase, isPlainObject, forEach} from 'lodash';
export const camelCaseMapper = data => {
  const camelCaseObject = [];
  forEach(data, (value, key) => {
    if (isPlainObject(value) || Array.isArray(value)) {
      value = camelCaseMapper(value);
    }
    camelCaseObject[camelCase(key)] = value;
  });
  return camelCaseObject;
};
