import _ from 'lodash';

const spacesCount = 4;
const currentIndent = (indentSize) => ' '.repeat(indentSize);
const bracketIndent = (indentSize) => ' '.repeat(indentSize - 2);

const getString = (currentValue, depth = 1) => {
  const indentSize = depth * spacesCount;
  if (!_.isPlainObject(currentValue)) {
    return `${currentValue}`;
  }

  const lines = Object
    .entries(currentValue)
    .map(([key, val]) => `${currentIndent(indentSize)}${key}: ${getString(val, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${bracketIndent(indentSize - 2)}}`,
  ].join('\n');
};

const getStylishData = (data, depth = 1) => {
  const indentSize = depth * spacesCount - 2;
  const lines = data.flatMap((line) => {
    switch (line.type) {
      case 'nested':
        return `${currentIndent(indentSize)}  ${line.key}: ${getStylishData(line.children, depth + 1)}`;
      case 'added':
        return `${currentIndent(indentSize)}+ ${line.key}: ${getString(line.value2, depth + 1)}`;
      case 'removed':
        return `${currentIndent(indentSize)}- ${line.key}: ${getString(line.value1, depth + 1)}`;
      case 'changed':
        return [
          `${currentIndent(indentSize)}- ${line.key}: ${getString(line.value1, depth + 1)}`,
          `${currentIndent(indentSize)}+ ${line.key}: ${getString(line.value2, depth + 1)}`];
      case 'unchanged':
        return `${currentIndent(indentSize)}  ${line.key}: ${getString(line.value1, depth + 1)}`;
      default:
        throw new Error(`Unknown type of data - ${line.type}`);
    }
  });
  return [
    '{',
    ...lines,
    `${bracketIndent(indentSize)}}`,
  ].join('\n');
};

export default getStylishData;
