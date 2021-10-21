const chalk = require('chalk');

// color styling
const dim = chalk.dim;
const italic = chalk.italic;
const gitHubColor = chalk.hex(`#6cc644`).bold.inverse;
const linkedInColor = chalk.hex(`#0077b5`).bold.inverse;

const social = `
${gitHubColor(` GitHub `)} ${dim(`https://github.com/martincapovcak`)}
${linkedInColor(` LinkedIn `)} ${dim(`https://www.linkedin.com/in/martin-capovcak-3910b780`)}
`;

const bio = `
${italic(`Self driven full-stack web developer. 
Primarily focused on MERN (MongoDB, Express, React and NodeJS) technologies.
In passion with bee-keeping.`)}
`;

const ad = `Custom CLIs are fun.`;

const blog = `Latest post`;

module.exports = {
    bio,
    social,
    ad,
    blog
};