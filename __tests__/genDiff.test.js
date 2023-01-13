import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff stylish on JSON files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const resultString = fs.readFileSync(getFixturePath('stylishResult.txt'), 'utf-8');
  expect(genDiff(file1, file2)).toEqual(resultString);
});

test('genDiff plain on YAML files', () => {
  const file1 = getFixturePath('filepath1.yml');
  const file2 = getFixturePath('filepath2.yml');
  const resultString = fs.readFileSync(getFixturePath('plainResult.txt'), 'utf-8');
  expect(genDiff(file1, file2, 'plain')).toEqual(resultString);
});

test('genDiff json', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const resultString = fs.readFileSync(getFixturePath('jsonResult.txt'), 'utf-8');
  expect(genDiff(file1, file2, 'json')).toEqual(resultString);
});
