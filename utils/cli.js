const meow = require('meow');
const {green, yellow, cyan, bold, dim} = require('chalk');

const helpText = `

Usage
    ${green(`npx martincapo_cli`)} ${yellow(`[--options]`)} ${cyan(`<commands>`)}

Options
    ${yellow(`--social`)}        ${dim(`Print social contact info`)}
    ${yellow(`--no-social`)}     ${dim(`Don't print the social info`)}
    ${yellow(`--info`)}          ${dim(`Prints the info`)}
    ${yellow(`--no-info`)}       ${dim(`Don't print the info`)}
    ${yellow(`-d`)}, ${yellow(`--debug`)}     ${dim(`Print debug information`)}
    ${yellow(`-v`)}, ${yellow(`--version`)}   ${dim(`Print CLI version`)}

Commands
    
    ${cyan(`help`)}            ${dim(`Print CLI help informations`)}

Examples
    ${green(`npx martincapo_cli --no-social`)}
    ${green(`npx martincapo_cli --no-info`)}
    ${green(`npx martincapo_cli help`)}

`;

const options = {
    flags: {
        social: {
            type: `boolean`,
            default: true,
        },
        info: {
            type: `boolean`,
            default: true,
        },
        debug: {
            type: `boolean`,
            default: false,
            alias: `d`,
        },
        version: {
            type: `boolean`,
            default: false,
            alias: `v`,
        },
    },
};

module.exports = meow(helpText, options);