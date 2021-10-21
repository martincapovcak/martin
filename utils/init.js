const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const pkgJSON = require('./../package.json');

module.exports = (minimal, clear) => {
    unhandled();

    !minimal &&
        welcome({
            title: `Martin Capovcak`,
            tagLine: `Hey, nice to meet you!`,
            description: pkgJSON.description,
            version: pkgJSON.version,
            bgColor: `#FADC00`,
            color: `#000000`,
            bold: true,
            clear
        });

    minimal &&
        welcome({
            title: `Martin Capovcak`,
            version: pkgJSON.version,
            bgColor: `#FADC00`,
            clear
        });

    checkNode('12');
};