const path = require("path");
const fs = require("fs");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");
module.exports = class Cart {
  static addProduct(id) {
    fs.readFile(p, (err, data) => {
        let cart = 
        if(err){


        }
    });
  }
};
