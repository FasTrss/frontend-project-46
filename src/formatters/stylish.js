import _ from 'lodash';

const spacesCount = 2;
const currentIndentforString = (indentSize) => ' '.repeat(indentSize + spacesCount);
const currentIndent = (indentSize) => ' '.repeat(indentSize);
const bracketIndent = (indentSize) => ' '.repeat(indentSize - spacesCount);

const getString = (currentValue, depth = 1) => {
  const indentSize = depth * spacesCount;
  if (!_.isObject(currentValue)) {
    return `${currentValue}`;
  }

  const lines = Object
    .entries(currentValue)
    .map(([key, val]) => `${currentIndentforString(indentSize)}${key}: ${getString(val, depth + 2)}`);

  return [
    '{',
    ...lines,
    `${bracketIndent(indentSize)}}`,
  ].join('\n');
};

const getStylishData = (data, depth = 1) => {
  const indentSize = depth * spacesCount;
  const lines = data.flatMap((line) => {
    switch (line.type) {
      case 'nested':
        return `${' '.repeat(indentSize + 1)} ${line.key}: ${getStylishData(line.children, depth + 2)}`;
      case 'added':
        return `${currentIndent(indentSize)}+ ${line.key}: ${getString(line.value2, depth + 2)}`;
      case 'removed':
        return `${currentIndent(indentSize)}- ${line.key}: ${getString(line.value1, depth + 2)}`;
      case 'changed':
        return [
          `${currentIndent(indentSize)}- ${line.key}: ${getString(line.value1, depth + 2)}`,
          `${currentIndent(indentSize)}+ ${line.key}: ${getString(line.value2, depth + 2)}`];
      case 'unchanged':
        return `${currentIndent(indentSize)}  ${line.key}: ${getString(line.value1, depth + 2)}`;
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
