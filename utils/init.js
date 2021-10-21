const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');
const boxen = require('boxen');

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

    minimal && console.log(boxen(`Martin Capovcak`, {
        padding: 1, 
        margin: 1,
        title: `<·^__)~~ =^..^= ~~(__^·>`, 
        titleAlignment: `center`,
        textAlignment: "center", 
        dimBorder: false,
        borderStyle: `classic`,
    }))

    checkNode('12');
};