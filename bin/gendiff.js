#!/usr/bin/env node
import { Help, program } from 'commander';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.');

  program.parse();
  
  const options = program.opts();
  const help = options.help;
  console.log(help);

export default program;