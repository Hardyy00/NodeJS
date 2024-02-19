const { getDB } = require("../util/database");

module.exports = class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDB();
    console.log(db);

    return db.collection("products").insertOne(this);
  }

  static fetchAll() {}
};
