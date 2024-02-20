const products = [];
const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(_);
  }

  static fetchAll() {
    return products;
  }
};
