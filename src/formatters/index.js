import plain from './plain.js';
import stylish from './stylish.js';

const getFormattedDiff = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`Unknown format - ${format}`);
  }
};

export default getFormattedDiff;
