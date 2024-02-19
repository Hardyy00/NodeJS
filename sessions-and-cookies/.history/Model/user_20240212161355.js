const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  cart: {
    items: [{ productId: mongoose.Types.ObjectId, qty: Number }],
  },
});
