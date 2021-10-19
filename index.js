#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: `Hey, nice to meet you!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
});

console.log(`
Martin Capovcak

Self driven full-stack web developer.
Primarily focused on MERN (MongoDB, Express, React and Node) technologies.
In passion with bee-keeping.

📖 GitHub: https://github.com/martincapovcak

`);