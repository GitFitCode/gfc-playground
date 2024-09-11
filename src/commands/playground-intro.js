import { program } from 'commander';
import chalkAnimation from 'chalk-animation';
import readline from 'readline/promises';

export const runPlaygroundIntro = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

  program
    .name('gfc-playground-cli')
    .description('This GF Command Line Tool will help you get started in GitFitCode')
    .version('0.1.0');

  program
    .command('playground-intro')
    .description('Introduce yourself so you can enter the GitFitCode playground! What are you waiting for?')
    .argument('<string>', 'What is your Discord handle?')
    .option('--n <name>', 'What should we call you?')
    .action(async (userInput, option) => {
      const introMessage = chalkAnimation.rainbow(`Woah there...we have found a new sparring partner ${userInput}`);
      await sleep();
      introMessage.stop();
    });

  async function introMessage() {
    const name = await rl.question('Hi! What do we call you? ');
    await displayWelcomeMessage(name);
  }

  async function displayWelcomeMessage(name) {
    const message = `Welcome to GitFitCode, ${name}! We are glad you are here (=`;
    const welcomeMessage = chalkAnimation.rainbow(message);
    await sleep();
    welcomeMessage.stop();
    rl.close();
    program.outputHelp();
  }

  introMessage();
};