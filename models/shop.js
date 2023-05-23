const { Schema, model } = require('mongoose');

const shopSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set password for user'],
  },
  // email: {
  //   type: String,
  //   required: [true, 'Email is required'],
  //   unique: true,
  // },
  // subscription: {
  //   type: String,
  //   enum: ["starter", "pro", "business"],
  //   default: "starter"
  // },
  // token: {
  //   type: String,
  //   default: null,
  // }
}, { versionKey: false, timestamps: true });

const Shop = model('shop', shopSchema);

module.exports = Shop;