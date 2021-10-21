const meow = require('meow');
const {green, yellow, cyan, dim} = require('chalk');

const helpText = `

Usage
    ${green(`npx martincapo_cli`)} ${yellow(`[--options]`)} ${cyan(`<commands>`)}

Options
    ${yellow(`--bio`)}           Print bio contact info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-bio`)}        Don't print the bio info ${dim(``)}
    ${yellow(`--social`)}        Print social contact info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-social`)}     Don't print the social info ${dim(``)}
    ${yellow(`--ad`)}            Prints the ad info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-ad`)}         Don't print the ad info ${dim(``)}
    ${yellow(`--clear`)}         Clear the console ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-clear`)}      Don't clear the console ${dim(``)}
    ${yellow(`-p`)}, ${yellow(`--posts`)}     Print Awais last 10 blog posts
    ${yellow(`-m`)}, ${yellow(`--minimal`)}   Print minimal info
    ${yellow(`-d`)}, ${yellow(`--debug`)}     Print debug info
    ${yellow(`-v`)}, ${yellow(`--version`)}   Print CLI version

Commands
    
    ${cyan(`help`)}            Print CLI help info

Examples
    ${green(`npx martincapo_cli --no-social`)}
    ${green(`npx martincapo_cli --no-ad`)}
    ${green(`npx martincapo_cli help`)}

`;

const options = {
    inferType: true,
    hardRejection: false,
    flags: {
        minimal: {
            type: `boolean`,
            default: false,
            alias: `m`,
        },
        clear: {
            type: `boolean`,
            default: true,
        },
        bio: {
            type: `boolean`,
            default: true,
        },
        social: {
            type: `boolean`,
            default: true,
        },
        ad: {
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
        posts: {
            type: `boolean`,
            default: false,
            alias: `p`,
        },
    },
};

module.exports = meow(helpText, options);