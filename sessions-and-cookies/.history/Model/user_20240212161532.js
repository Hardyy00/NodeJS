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
    items: [
      {
        productId: { type: mongoose.Types.ObjectId, required: true },
        qty: { type: Number, required: true },
      },
    ],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
