const alert = require('bee-alerts');

module.exports = (isDebug, cli) => {
    if(isDebug){
        alert({type: `warning`,msg:`DEBUGGING INFO ↓`});
        console.log(`input `, cli.input);
        console.log(`flags `, cli.flags);
        console.log();
    } else {
        return;
    }
    
};