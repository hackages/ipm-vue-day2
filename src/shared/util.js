import {camelCase, isPlainObject, forEach} from 'lodash';
export const camelCaseMapper = data => {
  let camelCaseObject;
  if (!Array.isArray(data)) {
    forEach(data, (value, key) => {
      if (isPlainObject(value)) {
        value = camelCaseMapper(value);
      } else if (Array.isArray(value)) {
        value = value.map(d => camelCaseMapper(d));
      }
      camelCaseObject = {...camelCaseObject, [camelCase(key)]: value};
    });
  } else {
    camelCaseObject = data.map(d => camelCaseMapper(d));
  }
  return camelCaseObject;
};
