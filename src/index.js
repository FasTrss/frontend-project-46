import path from 'path';
import fs from 'fs';
import getParser from './parsers.js';
import getDiff from './getDiff.js';
import getFormattedDiff from './formatters/index.js';

export const getData = (filepath) => fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', filepath), 'utf-8');
export const getExtension = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = getParser(getData(filepath1), getExtension(filepath1));
  const file2 = getParser(getData(filepath2), getExtension(filepath2));
  return getFormattedDiff(getDiff(file1, file2), format);
};

export default genDiff;
