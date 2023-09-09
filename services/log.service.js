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

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgGreen(' Weather in ' + res.name + ' ')}
    ${icon}  ${res.weather[0].description}
    Temperature: ${res.main.temp}°C -> (Feels like ${res.main.feels_like}°C)
    Humidity:  ${res.main.humidity} %
    Wind speed:  ${res.wind.speed} m/s
    Cloudiness:  ${res.clouds.all} %
    Pressure:  ${res.main.pressure} hPa
    `
  );
};

export { printError, printSuccess, printHelp, printWeather };