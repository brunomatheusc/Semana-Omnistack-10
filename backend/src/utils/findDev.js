const Dev = require('../models/Dev');

module.exports = async function findDev(github_username) {
    return await Dev.find({ github_username });
}