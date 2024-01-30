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

      const existingProductIndex = cart.products.findIndex(
        (item) => item.id === id
      );

      const existingProduct = cart.products[existingProductIndex];

      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty++;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice += price;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static deleteProduct(id, productPrice, cb) {
    fs.readFile(p, (err, data) => {
      if (err) {
        return;
      }

      const cart = JSON.parse(data);
      const updatedCart = { ...cart };

      const product = updatedCart.products.find((item) => item.id === id);
      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(
        (item) => item.id !== id
      );

      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        if (err) {
          console.log(err);
        }

        cb;
      });
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, data) => {
      if (err) {
        cb(null);
      } else {
        const cart = JSON.parse(data);
        cb(cart);
      }
    });
  }
};
