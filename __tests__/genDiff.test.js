import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff on file1, file2', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const resultString = `{
 - follow:false
   host:hexlet.io
 - proxy:123.234.53.22
 - timeout:50 
 + timeout:20
 + verbose:true
}`;
  expect(genDiff(file1, file2)).toEqual(resultString);
});
