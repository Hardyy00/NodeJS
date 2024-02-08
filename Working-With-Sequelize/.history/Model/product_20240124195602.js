const products = [];
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    fs.readFile(p, (err, data) => {
      const arr = JSON.parse(data);

      arr.push(this);

      fs.writeFile(p, JSON.stringify(arr), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll() {
    fs.readFile(p, (err, data) => {
      let products = [];

      if (!err) {
        products = JSON.parse(data);
      }
      return products;
    });
  }
};
