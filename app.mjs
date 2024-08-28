#!/usr/bin/env node

import { Command } from 'commander';
import chalkAnimation from 'chalk-animation';
import Image from 'ascii-art-image';
import readline from 'readline/promises';


const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
});


const program = new Command(); 

var image = new Image({
  filepath: 'gfc_logo.png',
  alphabet: 'variant4'
});

program
    .name('gfc-playground-cli')
    .description('This GF Command Line Tool will help you get started in GitFitCode')
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

async function introMessage() {

  const name = await rl.question('Hi! What do we call you? ');
  

  // this outputs a rainbow welcome message 

  
//this outputs a ascii image of the gfc logo
image.write(function(err, rendered){

  if (err) { //handles errors

    console.error('error rendering image', err);
  } else { // prints out the image, then a rainbow animation welcome message

    console.log(rendered);
  let str = `Welcome to GitFitCode, ${name}! We are glad you are here (=`;
  const WelcomeMess = chalkAnimation.rainbow(str );

  setTimeout(() => {    // stops the animation after 4 seconds, then displays the help menu
    WelcomeMess.stop();
    rl.close();
    program.outputHelp();
  }, 4000)
  
  }
});
   

}


introMessage();











//program.parse(process.args)
//program.showHelpAfterError('(add --help for additional information)');
