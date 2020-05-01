const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello omnistack' });
});

routes.post('/users', (req, res) => {
    return res.json({ message: 'Hello omnistack' });
});

module.exports = routes;