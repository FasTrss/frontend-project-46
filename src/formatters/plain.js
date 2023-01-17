import _ from 'lodash';

const getString = (currentValue) => {
  if (_.isObject(currentValue)) {
    return '[complex value]';
  }
  if (typeof currentValue === 'string') {
    return `'${currentValue}'`;
  }
  if (currentValue === null) {
    return 'null';
  }
  return _.toString(currentValue);
};

const keyPath = (path, item) => (path === '' ? `${item.key}` : `${path}.${item.key}`);

const getPlainData = (data, path = '') => {
  const lines = (acc, item) => {
    const key = keyPath(path, item);
    switch (item.type) {
      case 'nested':
        return [...acc, `${getPlainData(item.children, key)}`];
      case 'added':
        return [...acc, `Property '${key}' was added with value: ${getString(item.value2)}`];
      case 'removed':
        return [...acc, `Property '${key}' was removed`];
      case 'changed':
        return [...acc, `Property '${key}' was updated. From ${getString(item.value1)} to ${getString(item.value2)}`];
      default:
        return acc;
    }
  };
  return data.reduce(lines, []).join('\n');
};

export default getPlainData;
