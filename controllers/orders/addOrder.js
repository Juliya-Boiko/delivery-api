const Order = require('../../models/order');

const addOrder = async (req, res) => {
  const data = await Order.create({ ...req.body });

  res
    .header('Access-Control-Allow-Origin', '*')
    .header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    .header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept, Origin, X-Requested-With')
    .status(200)
    .json({ data });
};

module.exports = addOrder;