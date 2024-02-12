const { getDB } = require("../util/database");
const mongodb = require("mongodb");

class User {
  constructor(username, emai, cartl) {
    this.username = username;
    this.email = email;
  }

  save() {
    const db = getDB();

    return db.collection("users").insertOne(this);
  }

  addToCart(product) {}

  static findById(id) {
    const db = getDB();

    return db.collection("users").findOne({ _id: new mongodb.ObjectId(id) });
  }
}

module.exports = User;
