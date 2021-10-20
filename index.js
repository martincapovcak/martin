#!/usr/bin/env node

const alert = require('bee-alerts');
const handleError = require('cli-handle-error');

const init = require('./utils/init.js');
const data = require('./utils/data.js');


(() => {
    init();
    console.log(data.bio);
    console.log(data.social);
    alert({type: `info`,msg: data.info ,name: `WoHooo`});
})();