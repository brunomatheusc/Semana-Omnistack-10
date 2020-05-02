const api = require('../services/api');
const Dev = require('../models/Dev');
const parseString = require('../utils/parseString');
const findDev = require('../utils/findDev');

module.exports = {
    async store (req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const response = await api.get(`/users/${github_username}`);
        
            const { name = login, avatar_url, bio } = response.data;
        
            const techsArray = parseString(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
        
            dev = await Dev.create({
                github_username, name, avatar_url, bio, techs: techsArray, location
            });                
        }
    
        return res.json(dev);
    },

    async index(req, res) {
        const devs = await Dev.find();
         
        return res.json(devs);
    },

    async show(req, res) {
        const { github_username } = req.query;

        const dev = findDev(github_username);

        if (!dev || !dev.length) {
            return res.status(400).json({ msg: "Usuário não encontrado" });
        }

        return res.json(dev);
    },

    async update(req, res) {
        return this.store(req, res);
    },

    async destroy(req, res) {
        const { github_username } = req.query;

        await Dev.remove({ github_username });

        return res.json({ msg: "Usuário removido" });
    }
}