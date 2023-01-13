import path from 'path';
import fs from 'fs';
import getParser from './src/parsers.js';
import getDiff from './src/getDiff.js';
import getFormattedDiff from './src/formatters/index.js';

export const getData = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8');
export const getExtension = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = getParser(getData(filepath1), getExtension(filepath1));
  const file2 = getParser(getData(filepath2), getExtension(filepath2));
  return getFormattedDiff(getDiff(file1, file2), format);
};

export default genDiff;
