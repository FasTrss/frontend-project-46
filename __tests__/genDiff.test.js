import { test, expect } from '@jest/globals';
import genDiff, { getAbsolutePath } from '../src/index.js';

test('genDiff on file1, file2', () => {
  const filepath1 = getAbsolutePath('file1.JSON');
  console.log(filepath1);
  const filepath2 = getAbsolutePath('file2.JSON');
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
