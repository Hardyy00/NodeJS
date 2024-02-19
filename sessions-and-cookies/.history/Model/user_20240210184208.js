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
    if (!this.cart) {
      this.cart = { items: [] };
    }

    const cartProductIndex = this.cart.items.findIndex(
      (item) => item.productId.toString() === product._id.toString()
    );

    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].qty + 1;
      updatedCartItems[cartProductIndex].qty = newQuantity;
    } else {
      updatedCartItems.push({ productId: product._id, qty: newQuantity });
    }

    const updatedCart = {
      items: updatedCartItems,
    };

    console.log(updatedCart);

    const db = getDB();

    return db
      .collection("users")
      .updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  getCart() {
    const db = getDB();
    const productIds = this.cart.items.map((item) => item.productId);

    return db.collection("products").find({ _id: { $in: productIds } });
  }

  static findById(id) {
    const db = getDB();

    return db.collection("users").findOne({ _id: new mongodb.ObjectId(id) });
  }
}

module.exports = User;
