import { test, expect } from '@jest/globals';
import genDiff, { __dirname } from '../src/index.js';
import  path  from 'path'


test('genDiff on file1, file2', () => {
    const filepath1 = path.join(__dirname, '..',  '__fixtures__', 'file1.json');
    const filepath2 = path.join(__dirname, '..', '__fixtures__', 'file2.json');
    const check = genDiff(filepath1, filepath2);
    const resultString = `{
 - follow:false
   host:hexlet.io
 - proxy:123.234.53.22
 - timeout:50 
 + timeout:20
 + verbose:true
}`
    expect(check).toEqual(resultString)
})
