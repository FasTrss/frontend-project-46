import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff stylish', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const resultString = fs.readFileSync(getFixturePath('stylishResult.txt'), 'utf-8');
  expect(genDiff(file1, file2)).toEqual(resultString);
});

test('genDiff plain', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const resultString = fs.readFileSync(getFixturePath('plainResult.txt'), 'utf-8');
  expect(genDiff(file1, file2, 'plain')).toEqual(resultString);
});
