const products = [];
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProducts = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) {
      cb([]);
    }
    cb(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  save() {
    this.id = new Date().toISOString();
    getProducts((arr) => {
      arr.push(this);

      fs.writeFile(p, JSON.stringify(arr), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProducts(cb);
  }

  static findById(id, ch) {

    getProductsFromFile(products +>)
  }
};
