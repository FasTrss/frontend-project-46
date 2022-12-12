import path from 'path';
import fs from 'fs';
import getParser from './parsers.js';
import { getDiff, getFormattedDiff } from './getDiff.js';

export const getData = (filepath) => fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', filepath), 'utf-8');
export const getFormat = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2) => {
  const file1 = getParser(getData(filepath1), getFormat(filepath1));
  const file2 = getParser(getData(filepath2), getFormat(filepath2));
  return getFormattedDiff(getDiff(file1, file2));
};

export default genDiff;
