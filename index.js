const chalk = require("chalk");
const { stdout } = require("process");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const limit = 3;
let counter = 1;

const randomNumber = Math.round(Math.random() * 10);

console.log(chalk.blue.bgRed.bold("Hello guest"));

const game = () => {
  if (counter <= limit) {
    readline.question(chalk.yellow("Enter yuor number please\n"), (num) => {
      const number = Number(num);
      if (number === randomNumber) {
        console.log(chalk.green("Yuo win!!!!"));
        readline.close();
      }
      if (number < randomNumber) {
        console.log(chalk.red("Yuor number is less< try again!!!!"));
        counter += 1;
        game();
      } else {
        console.log(chalk.red("Yuor number is bigger< try again!!!!"));
        counter += 1;
        game();
      }
    });
  } else {
    console.log(chalk.red("Game over!!!!"));
    readline.close();
  }
};
