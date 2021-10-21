const fetch = require('node-fetch');

const apiURL = `https://api.github.com/users/martincapovcak`;

module.exports = async () => {
    const res = await fetch(apiURL);
    const data = await res.json();
    //console.log(data);
    const pubRepos = data.public_repos;

    console.log(
        `Github public projects: ${pubRepos}
        `
    );
};