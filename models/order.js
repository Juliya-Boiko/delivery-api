const { Schema, model } = require('mongoose');

const orderSchema = Schema({
  contacts: {
    name: {
      type: String,
      required: [true, 'Name is required field'],
    },
    email: {
      type: String,
      required: [true, 'Email is required field'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required field'],
    },
    address: {
      type: String,
      required: [true, 'Address is required field'],
    },
  },
  items: [{
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
    amount: {
      type: Number,
      required: [true, 'Price is required field'],
    }
  }]
}, { versionKey: false, timestamps: true });

const Order = model('order', orderSchema);

module.exports = Order;