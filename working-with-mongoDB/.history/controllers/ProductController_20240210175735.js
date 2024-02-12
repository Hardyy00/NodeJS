const Product = require("../Model/product");
// const Cart = require("../Model/cart");

exports.enterShop = (req, res) => {
  res.render("shop/index", {
    title: "Shop",
    path: "/",
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("shop/product-list", {
        products,
        title: "Products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCart = (req, res) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const arr = [];

      for (let prod of cart.products) {
        const val = products.find((item) => item.id === prod.id);
        arr.push({ productData: val, qty: prod.qty });
      }

      console.log(arr);

      res.render("shop/cart", {
        title: "Cart",
        path: "/cart",
        products: arr,
      });
    });
  });
};

exports.addToCart = (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then(() => {
      res.redirect("/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.checkout = (req, res) => {
  res.render("shop/checkout", {
    title: "Checkout",
    path: "/checkout",
  });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", { title: "Orders", path: "/orders" });
};

exports.getProductDetails = (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then((product) => {
      res.render("shop/product-details", {
        title: "Details Page",
        path: "/products",
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteCartItem = (req, res) => {
  const { id } = req.body;
  console.log(id);

  Product.findById(id, (prod) => {
    Cart.deleteProduct(id, prod.price, () => {
      res.redirect("/cart");
    });
  });
};