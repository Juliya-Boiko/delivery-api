// const Order = require('../../models/order');

const addOrder = async (req, res) => {
  // const data = await Order.create({ ...req.body });

  res
    .header("Access-Control-Allow-Origin", "http://localhost:3000")
    .header("Access-Control-Allow-Methods", "GET, POST")
    .header("Access-Control-Allow-Headers", "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization")
    .header("Access-Control-Allow-Credentials", true)
    .status(200)
    .json({
      status: 'success',
      data: req.body
    });
};

module.exports = addOrder;