const Cart = require("./cart");
const db = require("../util/database");

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = +price;
  }

  save() {
    return db.execute(
      "insert into products (title, price, imageUrl,description) values(?, ?, ?, ?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static fetchAll() {
    return db.execute("select * from products");
  }

  static findById(id) {
    db.execute("select * from products where");
  }

  static mutateProduct(id, product) {}

  static deleteProduct(id) {}
};
