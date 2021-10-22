const ora = require('ora');
const fetch = require('node-fetch');
const handleError = require('cli-handle-error');
const {green, yellow, dim} = require('chalk');
const stripHTML = require('cli-strip-html');

const spinner = ora({text: ``});
const apiURL = `https://Awais.dev/api/posts`;

module.exports = async () => {
    try{
        spinner.start(`${yellow(`BLOG`)} fetching..`);
        const res = await fetch(apiURL);
        const data = await res.json();
        spinner.succeed(`${green(`BLOG`)} fetched!`);

        const posts = data.map(post => {
            return {title: stripHTML(post.title.rendered), link: post.link}
        })
        
        posts.map(({title, link}, index) => {
            console.log(`#${index + 1} ${title}`);
            console.log(dim(link));
            console.log();
        });
        console.log();

    } catch(err){
        handleError(`BLOG FETCH FAILED`, err, true, false);
    }
};