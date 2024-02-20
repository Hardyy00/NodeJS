const { getDB } = require("../util/database");
const mongodb = require("mongodb");

class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart; // {items : [],totalPrice :  }t
    this._id = id;
  }

  save() {
    const db = getDB();

    return db.collection("users").insertOne(this);
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(
    //   (item) => item._id === product._id
    // );

    const updatedCart = {
      items: [{ ...product, qty: 1 }],
    };

    const db = getDB();
  }

  static findById(id) {
    const db = getDB();

    return db.collection("users").findOne({ _id: new mongodb.ObjectId(id) });
  }
}

module.exports = User;
