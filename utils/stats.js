const ora = require(`ora`);
const { yellow, green } = require('chalk');
const fetch = require('node-fetch');
const handleError = require('cli-handle-error');

const spinner = ora({text: ``});
const apiURL = `https://api.github.com/users/martincapovcak`;

module.exports = async () => {

    try{
        spinner.start(`${yellow(`PROJECTS`)} fetching..`);
        const res = await fetch(apiURL);
        const data = await res.json();
        const pubRepos = data.public_repos;
        spinner.succeed(`${green(`PROJECTS`)} fetched!`);
        console.log(
`
My Github public projects: [ ${green(pubRepos)} ]
`
        );

    } catch(err){
        handleError(`API CALL FAILED`, err, false, false);
    }
};