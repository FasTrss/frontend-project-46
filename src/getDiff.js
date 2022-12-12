import _ from 'lodash';

export const getDiff = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const uniq = _.uniq([...keys1, ...keys2]);
  const sortUniq = _.sortBy(uniq);
  const result = sortUniq.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if ((value1 && value2) && (value1 !== value2)) {
      return {
        type: 'changed',
        key,
        value1,
        value2,
      };
    }
    if (!_.has(file2, key)) {
      return {
        type: 'removed',
        key,
        value: value1,
      };
    }
    if (!_.has(file1, key)) {
      return {
        type: 'added',
        key,
        value: value2,
      };
    }
    return {
      type: 'unchanged',
      key,
      value: value1,
    };
  });
  return result;
};

export const getFormattedDiff = (diffData) => {
  const result = diffData.map((diff) => {
    const typeofDiff = diff.type;
    switch (typeofDiff) {
      case 'changed':
        return ` - ${diff.key}:${diff.value1} \n + ${diff.key}:${diff.value2}`;
      case 'removed':
        return ` - ${diff.key}:${diff.value}`;
      case 'added':
        return ` + ${diff.key}:${diff.value}`;
      case 'unchanged':
        return `   ${diff.key}:${diff.value}`;
      default:
        return null;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};
