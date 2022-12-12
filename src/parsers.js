import yaml from 'js-yaml';

const getParser = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
      return yaml.load(data);
    case '.yml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown file format - ${format}`);
  }
};

export default getParser;
