const products = [];
const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, data) => {
      const arr = JSON.parse(data);

      arr.push(this);

      fs.writeFile(p, JSON.stringify(arr), () => {
        console.log("vhv");
      });
    });
  }

  static fetchAll() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(
      path.join(path.dirname(require.main.filename), "data", "products.json"),

      (err, data) => {
        console.log(data);
        if (err) {
          console.log(err);
        }
        return JSON.parse(data);
      }
    );
  }
};
