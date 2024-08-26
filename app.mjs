#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

const program = new Command(); 

program
    .name('gfc-playground-cli')
    .description('GFC CLI will help you get started in GitFitCode')
    .version('0.1.0')

program
  .command('playground-intro')
  .description('Introduce yourself so you can enter the GitFitCode playground! What are you waiting for?')
  .argument('<string>', 'whats your discord handle?')
  .option('--n <name>', 'What should we call you?')
  .action((userInput, option) => {
    const introMess = chalkAnimation.rainbow(`Woah there...we have found a new sparring partner ${userInput}`);
    setTimeout(() => {
      introMess.stop(); 
  }, 4000);
  
 })

program.parse(process.args)
program.showHelpAfterError('(add --help for additional information)');
