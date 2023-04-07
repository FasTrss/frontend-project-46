import path from 'path';
import fs from 'fs';
import getDiff from './getDiff.js';
import getFormattedDiff from './formatters/index.js';
import parseData from './parsers.js';

const getData = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8');
const getExtension = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseData(getData(filepath1), getExtension(filepath1));
  const data2 = parseData(getData(filepath2), getExtension(filepath2));
  return getFormattedDiff(getDiff(data1, data2), format);
};

export default genDiff;
