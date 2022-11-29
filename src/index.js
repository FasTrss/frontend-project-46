import _ from 'lodash';
import path from 'path';
import fs from 'fs';

const genDiffData = (filepath1, filepath2) => {
   const obj1 = getObject(filepath1);
   const obj2 = getObject(filepath2);
   const keys1 = Object.keys(obj1);
   const keys2 = Object.keys(obj2);
   const uniq = _.uniq([...keys1, ...keys2]);
   const sortUniq = _.sortBy(uniq);
   const result = sortUniq.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if ((value1 && value2) && (value1 !== value2)) {
        return {
            type: 'changed',
            key,
            value1,
            value2
        }
    }
    if (!_.has(obj2, key)) {
        return {
            type: 'removed',
            key,
            value: value1
        }
    }
    if (!_.has(obj1, key)) {
        return {
            type: 'added',
            key,
            value: value2
        }
    } else {
        return {
            type: 'unchanged',
            key,
            value: value1
        }
    }
   });
    return result;
};

const getFormattedDiff = (diffData) => {
    const result = diffData.map((diff) => {
        const typeofDiff = diff.type;
        switch (typeofDiff) {
            case 'changed': 
                return ` - ${diff.key}:${diff.value1} \n + ${diff.key}:${diff.value2}`;
            case 'removed':
                return ` - ${diff.key}:${diff.value}`;
            case 'added': 
                return ` + ${diff.key}:${diff.value}`;
            case 'unchanged':
                return `   ${diff.key}:${diff.value}`;
            default: 
                return null;
        }
    });
    return `{\n${result.join('\n')}\n}`;
}

const genDiff = (filepath1, filepath2) => {
    const data = genDiffData(filepath1, filepath2);
    return getFormattedDiff(data);
}

// eslint-disable-next-line no-undef
const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
const getObject = (filepath) => JSON.parse(readFile(filepath));

export default genDiff;