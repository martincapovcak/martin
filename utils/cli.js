const meow = require('meow');

const helpText = `

Usage
    npx martincapo_cli [options] <commands>

Options
    social          Print social contact info
    --no-social     Don't print the social info
    info            Prints the info
    --no-info       Don't print the info
    -d, --debug     Print debug information
    -v, --version   Print CLI version

Commands
    help            Print CLI help informations

Examples
    npx martincapo_cli --no-social

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