const express = require('express');
const shopsRouter = express.Router();
const { getAllShops } = require('../controllers/shops');

shopsRouter.get('/', getAllShops);

module.exports = shopsRouter;