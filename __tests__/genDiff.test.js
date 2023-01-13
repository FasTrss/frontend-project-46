import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test.each([
  ['file1.json', 'file2.json', 'stylish', 'stylishResult.txt'],
  ['file1.json', 'file2.json', undefined, 'stylishResult.txt'],
  ['file1.json', 'file2.json', 'plain', 'plainResult.txt'],
  ['file1.json', 'file2.json', 'json', 'jsonResult.txt'],
  ['filepath1.yml', 'filepath2.yml', 'stylish', 'stylishResult.txt'],
  ['filepath1.yml', 'filepath2.yml', 'plain', 'plainResult.txt'],
  ['filepath1.yml', 'filepath2.yml', 'json', 'jsonResult.txt'],
])('testgendiff', (filename1, filename2, format, result) => {
  const file1 = getFixturePath(filename1);
  const file2 = getFixturePath(filename2);
  const resultString = fs.readFileSync(getFixturePath(result), 'utf-8');
  expect(genDiff(file1, file2, format)).toEqual(resultString);
});
