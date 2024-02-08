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
    this.price = +price;
  }

  constructor(id,title,imageUrl,description,price){
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
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

  static findById(id, cb) {
    getProducts((products) => {
      const product = products.find((item) => item.id === id);

      cb(product);
    });
  }

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
};
