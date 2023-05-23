const Shop = require('../../models/shop');

const getAllShops = async (req, res) => {
  const data = await Shop.find({});
  res.status(200).json({
    data
  });
  // return ['array of shops '];
  
};

module.exports = getAllShops;