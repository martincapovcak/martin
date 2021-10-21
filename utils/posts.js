const ora = require('ora');
const fetch = require('node-fetch');
const handleError = require('cli-handle-error');
const {green, yellow} = require('chalk');

const spinner = ora({text: ``});
const apiURL = `https://Awais.dev/api/posts`;

module.exports = async () => {
    try{
        spinner.start(`${yellow(`BLOG`)} fetching..`);
        const res = await fetch(apiURL);
        const data = await res.json();
        spinner.succeed(`${green(`BLOG`)} fetched!`);

        const posts = data.map(post => {
            return {title: post.title.rendered, link: post.link}
        })
        console.log(posts);
    } catch(err){
        handleError(`BLOG FETCH FAILED`, err, true, false);
    }
};