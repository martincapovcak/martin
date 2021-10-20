#!/usr/bin/env node

const chalk = require('chalk');
const alert = require('bee-alerts');
const init = require('./utils/init.js');

// color styling
const dim = chalk.dim;
const italic = chalk.italic;
const gitHubColor = chalk.hex(`#6cc644`).bold.inverse;
const linkedInColor = chalk.hex(`#0077b5`).bold.inverse;

(() => {
    init();

    console.log(
`${italic(`Self driven full-stack web developer. 
Primarily focused on MERN (MongoDB, Express, React and NodeJS) technologies.
In passion with bee-keeping.`)}

${gitHubColor(` GitHub `)} ${dim(`https://github.com/martincapovcak`)}
${linkedInColor(` LinkedIn `)} ${dim(`https://www.linkedin.com/in/martin-capovcak-3910b780`)}
`);

    alert({type: `info`, msg: `Custom CLIs are fun.`, name: `WoHooo`});
})();