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
        productId: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        qty: { type: Number, required: true },
      },
    ],
  },
});

userSchema.methods.

const User = mongoose.model("User", userSchema);

module.exports = User;
