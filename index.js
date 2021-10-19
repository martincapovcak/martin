#!/usr/bin/env node
const clearConsole = require('clear-any-console');
const pkgJSON = require('./package.json');

//Clears console
clearConsole();

console.log(`
NAME: ${pkgJSON.name}
VERSION: ${pkgJSON.version}
DESCRIPTION: ${pkgJSON.description}
`);

console.log(`
Martin Capovcak

Self driven full-stack web developer.
Primarily focused on MERN (MongoDB, Express, React and Node) technologies.
In passion with bee-keeping.

📖 GitHub: https://github.com/martincapovcak

`);