const express = require('express');
const validation = require('../middlewares/validation');
const controllerWrapper = require('../utils/controllerWrapper');
const { addOrder } = require('../controllers/orders');
const orderSchema = require('../schemas/orderSchema');

const orderRouter = express.Router();

orderRouter.post('/', validation(orderSchema), controllerWrapper(addOrder));

module.exports = orderRouter;