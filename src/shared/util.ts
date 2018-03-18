import {camelCase, isPlainObject, forEach} from 'lodash';
export const camelCaseMapper = data => {
  let camelCaseObject;
  if (isPlainObject(data)) {
    forEach(data, (value, key) => {
      value = camelCaseMapper(value);
      camelCaseObject = {...camelCaseObject, [camelCase(key)]: value};
    });
  } else if (Array.isArray(data)) {
    camelCaseObject = data.map(d => camelCaseMapper(d));
  } else {
    camelCaseObject = data;
  }
  return camelCaseObject;
};

export const delay = <T>(time) => {
  return (x: T): Promise<T> => {
    return new Promise(res => {
      setTimeout(() => res(x), time);
    });
  };
};
