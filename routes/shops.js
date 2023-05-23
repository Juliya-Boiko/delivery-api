const express = require('express');
const shopsRouter = express.Router();
// // const { controllerWrapper } = require('../helpers');
// // const { validation } = require('../middlewares');
// // const { newsSchema } = require('../schemas/news');
// // const { getAllNews, addNewNews } = require('../controllers/news');
const { getAllShops } = require('../controllers/shops');

shopsRouter.get('/', getAllShops);

module.exports = shopsRouter;