const Dev = require('../models/Dev');
const parseString = require('../utils/parseString');

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query;

        const techsArray = parseString(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            }
        });

        return res.json(devs);        
    }
}