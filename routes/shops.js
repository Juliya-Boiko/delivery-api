const express = require('express');
const shopsRouter = express.Router();
const controllerWrapper = require('../utils/controllerWrapper');
const { getAllShops } = require('../controllers/shops');

shopsRouter.get('/shops', controllerWrapper(getAllShops));

module.exports = shopsRouter;