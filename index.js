#!/usr/bin/env node

const alert = require('bee-alerts');
const handleError = require('cli-handle-error');

const init = require('./utils/init.js');
const data = require('./utils/data.js');
const cli = require('./utils/cli.js');
const debug = require('./utils/debug.js');
const stats = require('./utils/stats.js');

const input = cli.input;
const flags = cli.flags;

(async () => {
    init(flags.minimal, flags.clear);

    input.includes(`help`) && cli.showHelp(0);

    flags.bio && console.log(data.bio);

    flags.social && console.log(data.social);

    flags.ad && alert({type: `info`,msg: data.info ,name: `WoHooo`});

    //Stats
    await stats();

    // Debug info if needed.
    debug(flags.debug, cli);

})();