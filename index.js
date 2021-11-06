#!/usr/bin/env node

const alert = require('bee-alerts');

const init = require('./utils/init.js');
const data = require('./utils/data.js');
const cli = require('./utils/cli.js');
const debug = require('./utils/debug.js');
const stats = require('./utils/stats.js');
const posts = require('./utils/posts.js');

const input = cli.input;
const flags = cli.flags;

(async () => {
    // Init and help
    init(flags.minimal, flags.clear);
    input.includes(`help`) && cli.showHelp(0);

    // Print out the info
    flags.ad && alert({type: `info`,msg: data.ad ,name: `WoHooo`});
    flags.bio && console.log(data.bio);
    flags.social && console.log(data.social);
    flags.posts && alert({type: `info`,msg: data.blog ,name: `BLOG`});
    flags.posts && (await posts());

    //Stats
    await stats();

    // Debug info if needed.
    debug(flags.debug, cli);
})();