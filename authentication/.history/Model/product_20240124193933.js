const products = [];
const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const path = path.j;
  }

  static fetchAll() {
    return products;
  }
};
