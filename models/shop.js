const { Schema, model } = require('mongoose');

const shopSchema = Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   required: [true, '_id is required field'],
  // },
  name: {
    type: String,
    required: [true, 'Name is required field'],
  },
  goods: [{
    _id: {
      type: Schema.Types.ObjectId,
      required: [true, '_id is required field'],
    },
    name: {
      type: String,
      required: [true, 'Name is required field'],
    },
    price: {
    type: String,
    required: [true, 'Price is required field'],
  },
  }]
}, { versionKey: false, timestamps: true });

const Shop = model('shop', shopSchema);

module.exports = Shop;