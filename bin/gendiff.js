import { program } from 'commander';

program
  .option('-V, --version,', 'output the version number')
  .option('-h, --help', 'display help for command')
  .description('Compares two configuration files and shows a difference.');

  export default program;