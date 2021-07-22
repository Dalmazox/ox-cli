#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import path from 'path';
import { program } from 'commander';

clear();

console.log(
  chalk.blue(figlet.textSync('ox-cli', { horizontalLayout: 'full' })),
  '\nType -h for helping command'
);

program
  .version('1.0.0')
  .description('Simple CLI for projects template')
  .parse(process.argv);
