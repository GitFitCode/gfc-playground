#!/usr/bin/env node

const { Command } = require('commander');

const program = new Command(); 

program
    .name('gfc-playground-cli')
    .description("GFC' CLI will help you get started in GitFitCode")
    .version('1.0')

program
  .command('playground-intro')
  .description('Introduce yourself so you can enter the GitFitCode playground! What are you waiting for?')
  .argument('<string>', 'whats your discord handle?')
  .option('--n <name>', 'What should we call you?')
  .action((userInput, option) => {
    console.log(`Woah there...we have found a new sparring partner ${userInput}`);
  })

program.parse(process.args)
program.showHelpAfterError('(add --help for additional information)');
