import _ from 'lodash';

const spacesCount = 2;

const getString = (currentValue, depth = 1) => {
  const indentSize = depth * spacesCount;
  const currentIndent = ' '.repeat(indentSize + 2);
  const bracketIndent = ' '.repeat(indentSize - spacesCount);

  if (!_.isObject(currentValue)) {
    return `${currentValue}`;
  }

  const lines = Object
    .entries(currentValue)
    .map(([key, val]) => `${currentIndent}${key}: ${getString(val, depth + 2)}`);

  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

const stylish = (data, depth = 1) => {
  const indentSize = depth * spacesCount;
  const currentIndent = ' '.repeat(indentSize);
  const bracketIndent = ' '.repeat(indentSize - spacesCount);

  const lines = data.flatMap((line) => {
    switch (line.type) {
      case 'nested':
        return `${' '.repeat(indentSize + 1)} ${line.key}: ${stylish(line.children, depth + 2)}`;
      case 'added':
        return `${currentIndent}+ ${line.key}: ${getString(line.value2, depth + 2)}`;
      case 'removed':
        return `${currentIndent}- ${line.key}: ${getString(line.value1, depth + 2)}`;
      case 'changed':
        return [
          `${currentIndent}- ${line.key}: ${getString(line.value1, depth + 2)}`,
          `${currentIndent}+ ${line.key}: ${getString(line.value2, depth + 2)}`];
      default:
        return `${currentIndent}  ${line.key}: ${getString(line.value, depth + 2)}`;
    }
  });
  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

export default stylish;
