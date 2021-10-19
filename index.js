#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');

const log = console.log;

// color styling
const dim = chalk.dim;
const italic = chalk.italic;
const gitHubColor = chalk.hex(`#6cc644`).bold.inverse;
const linkedInColor = chalk.hex(`#0077b5`).bold.inverse;

// alerts
const sym = require('log-symbols');
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword('orange');
const error = chalk.red.bold; 


welcome({
    title: `Martin Capovcak`,
    tagLine: `Hey, nice to meet you!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
});

log(`
${italic(`Self driven full-stack web developer.
Primarily focused on MERN (MongoDB, Express, React and Node) technologies.
In passion with bee-keeping.`)}

${gitHubColor(` GitHub `)} ${dim(`https://github.com/martincapovcak`)}
${linkedInColor(` LinkedIn `)} ${dim(`https://www.linkedin.com/in/martin-capovcak-3910b780`)}
`);


log(`
${sym.success} ${success(` SUCCESS `)} Thanks for checking my CLI.
${sym.info} ${info(` INFO `)} CLIs are lot of fun.
${sym.warning} ${warning(` WARNING `)} Hey, stay safe and healthy!
${sym.error} ${error(` ERROR `)} I'am on vacation. Contact me next week.
`);