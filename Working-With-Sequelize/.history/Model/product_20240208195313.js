const Cart = require("./cart");

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

  static fetchAll(cb) {}

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

  static deleteProduct(id, cb) {
    this.fetchAll((products) => {
      const product = products.find((item) => item.id === id);
      const reducedArray = products.filter((item) => item.id !== id);
      Cart.deleteProduct(id, product.price); // delete from the cart too if it was present

      fs.writeFile(p, JSON.stringify(reducedArray), (err) => {
        if (err) {
          console.log(err);
        }

        cb();
      });
    });
  }
};
