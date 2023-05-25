// const Order = require('../../models/order');

const addOrder = async (req, res) => {
  // const data = await Order.create({ ...req.body });

  res.status(200).json({ 
    data: req.body
   });
};

module.exports = addOrder;