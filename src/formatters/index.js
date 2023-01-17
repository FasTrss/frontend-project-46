import getPlainData from './plain.js';
import getStylishData from './stylish.js';

const getFormattedDiff = (data, format) => {
  switch (format) {
    case 'stylish':
      return getStylishData(data);
    case 'plain':
      return getPlainData(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Unknown format - ${format}`);
  }
};

export default getFormattedDiff;
