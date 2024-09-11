#!/usr/bin/env node

import inquirer from "inquirer";
import { runPlaygroundIntro } from "../src/commands/playground-intro.js";

const commands = {
  "GFC Playground Introduction": runPlaygroundIntro,
};

inquirer
  .prompt([
    {
      type: "list",
      name: "selectedExample",
      message: "Choose an example to run:",
      choices: Object.keys(commands),
    },
  ])
  .then((answers) => {
    const cmdFunction = commands[answers.selectedExample];
    if (cmdFunction) {
      cmdFunction();
    } else {
      console.error("Invalid selection");
    }
  });