#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');

const log = console.log;

const dim = chalk.dim;
const italic = chalk.italic;
const gitHubColor = chalk.hex(`#6cc644`).bold.inverse;
const linkedInColor = chalk.hex(`#0077b5`).bold.inverse;


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