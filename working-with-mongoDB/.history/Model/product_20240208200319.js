const Cart = require("./cart");
const db = require("../util/database");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = +price;
  }

  save() {}

  static fetchAll() {
    return db.execute("select * from products");
  }

  static findById(id) {}

  static mutateProduct(id, product) {
    this.fetchAll((products) => {
      const productIndex = products.findIndex((item) => item.id === id);

      products[productIndex] = product;

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static deleteProduct(id) {}
};
