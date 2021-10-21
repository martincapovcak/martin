#!/usr/bin/env node

const alert = require('bee-alerts');
const handleError = require('cli-handle-error');

const init = require('./utils/init.js');
const data = require('./utils/data.js');
const cli = require('./utils/cli.js');

const input = cli.input;
const flags = cli.flags;

(() => {
    init();
    console.log(data.bio);

    if(flags.social) {
        console.log(data.social);
    };

    if(flags.info){
        alert({type: `info`,msg: data.info ,name: `WoHooo`});
    };

    alert({type: `info`,msg:`CLI DATA ⤋`});
    console.log(`input `, input);
    console.log(`flags `, flags);
})();