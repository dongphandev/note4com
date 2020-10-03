
export const $win = window;

export function isEmpty(value) {
  if (value === null || value === undefined || value.length === 0
    || (Object.keys(value).length === 0 && value.constructor === Object)) {
    return true;
  }

  if (typeof value === 'string') {
    return value.trim() === '';
  }

  return false;
}

export function isNotEmtpy(value) {
  return !isEmpty(value);
}

export function transformData(sources, idName) {
  let data = {};
  let list = [];

  if (isEmpty(sources)) {
    return {
     data, 
     list
    }
  }

  for (var item of sources) {
    let key = item[idName];
    list.push(key);
    data[key] = item;
  }

  return {
    list,
    data
  };
  
}