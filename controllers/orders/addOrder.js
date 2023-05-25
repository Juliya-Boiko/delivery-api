const Order = require('../../models/order');

const addOrder = async (req, res) => {
  const data = await Order.create({ ...req.body });

  res
    .header('Access-Control-Allow-Origin', '*')
    .header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    )
    .status(200)
    .json({ data });
};

module.exports = addOrder;