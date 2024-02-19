const { getDB } = require("../util/database");
const mongoDB = require("mongodb");

module.exports = class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDB();
    return db.collection("products").insertOne(this);
  }

  static fetchAll() {
    const db = getDB();

    return db.collection("products").find().toArray();
  }

  static findById(_id) {
    const db = getDB();

    console.log(_id);

    return db
      .collection("products")
      .find({ _id: new mongoDB.ObjectId(_id) })
      .next();
  }
};
