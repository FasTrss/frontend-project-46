import _ from 'lodash';
import path from 'path';
import fs from 'fs';

export const getData = (filepath) => fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', filepath), 'utf-8');
export const getFormat = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2) => {
  const data = genDiffData(filepath1, filepath2);
  return getFormattedDiff(data);
};

console.log(getData('file1.json'));

export default genDiff;
