const alert = require('bee-alerts');

module.exports = (isDebug, input, flags) => {
    if(isDebug){
        alert({type: `warning`,msg:`DEBUGGING INFO ↓`});
        console.log(`input `, input);
        console.log(`flags `, flags);
        console.log();
    } else {
        return;
    }
    
};