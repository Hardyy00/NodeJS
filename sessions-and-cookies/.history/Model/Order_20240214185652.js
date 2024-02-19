const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [],
  user: {
    _id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
