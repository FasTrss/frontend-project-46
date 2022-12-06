import { test, expect } from '@jest/globals';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('genDiff on file1, file2', () => {
  const filepath1 = path.join(__dirname, '..', '__fixtures__', 'file1.JSON');
  console.log(filepath1);
  const filepath2 = path.join(__dirname, '..', '__fixtures__', 'file2.JSON');
  const check = genDiff(filepath1, filepath2);
  const resultString = `{
 - follow:false
   host:hexlet.io
 - proxy:123.234.53.22
 - timeout:50 
 + timeout:20
 + verbose:true
}`;
  expect(check).toEqual(resultString);
});
