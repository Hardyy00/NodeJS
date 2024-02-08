const path = require("path");
const fs = require("fs");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");
module.exports = class Cart {
  static addProduct(id, price) {
    fs.readFile(p, (err, data) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(data);
      }

      const existingProduct = cart.products.find((item) => item.id === id);

      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty++;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products];
      }

      cart.totalPrice += price;
    });
  }
};