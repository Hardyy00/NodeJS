const { getDB } = require("../util/database");

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDB();

    db.collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

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
    return db.execute("select * from products where products.id = ?", [id]);
  }

  static mutateProduct(id, product) {}

  static deleteProduct(id) {}
};
