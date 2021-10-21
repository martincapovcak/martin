const meow = require('meow');

const helpText = `

Usage
    npx martincapo_cli [options]

Options
    social          Shows the social contact info
    --no-social     Don't show the social info
    info            Shows the info
    --no-info       Don't show the info

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
    },
};

module.exports = meow(helpText, options);