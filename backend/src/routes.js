const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Rotas de DevController
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/dev', DevController.show);
routes.delete('/dev', DevController.destroy);

// Rotes de SearchController
routes.get('/search', SearchController.index);

module.exports = routes;