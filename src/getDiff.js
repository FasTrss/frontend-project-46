import _ from 'lodash';

const sortUniq = (file1, file2) => _.sortBy(_.union(_.keys(file1), _.keys(file2)));

const getDiff = (file1, file2) => {
  const result = sortUniq(file1, file2).map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { type: 'nested', key, children: getDiff(value1, value2) };
    }
    if (!_.has(file2, key)) {
      return { type: 'removed', key, value1 };
    }
    if (!_.has(file1, key)) {
      return { type: 'added', key, value2 };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        type: 'changed', key, value1, value2,
      };
    }
    return { type: 'unchanged', key, value1 };
  });
  return result;
};

export default getDiff;
