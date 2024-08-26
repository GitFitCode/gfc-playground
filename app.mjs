#!/usr/bin/env node

import { Command } from 'commander';
import chalkAnimation from 'chalk-animation';
import Image from 'ascii-art-image';


const program = new Command(); 

var image = new Image({
  filepath: 'gfc_logo.png',
  alphabet: 'variant4'
});

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

function introMessage() {
  let str = "Welcome to GitFitCode! We are glad you are here (="
  let str2 = "This command line interface tool will help orient you to your learning journey!"
  const rainbow = chalkAnimation.rainbow(str + '\n' + str2);

  // this outputs a ascii image of the gfc logo
 /* image.write(function(err, rendered){
    console.log(rendered);
}) */ 

// this outputs a rainbow welcome message 
    setTimeout(() => {
    rainbow.stop();
    program.outputHelp();
  }, 2000)
}

introMessage();

//program.parse(process.args)
//program.showHelpAfterError('(add --help for additional information)');
