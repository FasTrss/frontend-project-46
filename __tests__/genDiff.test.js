import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

test('genDiff on file1, file2', () => {
  const resultString = `{
 - follow:false
   host:hexlet.io
 - proxy:123.234.53.22
 - timeout:50 
 + timeout:20
 + verbose:true
}`;
  expect(genDiff('file1.JSON', 'file2.json')).toEqual(resultString);
});
