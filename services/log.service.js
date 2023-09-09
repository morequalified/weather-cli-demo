import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed('Error:') + ' ' + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen('Success:') + ' ' + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan('Help ')}
    Without arguments: show weather
    -s [City]: show weather for city
    -h: show help
    -t [Token]: save token
    `
  );
};

export { printError, printSuccess, printHelp };