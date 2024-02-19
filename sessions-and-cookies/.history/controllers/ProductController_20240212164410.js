const Product = require("../Model/product");
// const Cart = require("../Model/cart");

exports.enterShop = (req, res) => {
  res.render("shop/index", {
    title: "Shop",
    path: "/",
  });
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find()
      .select("title _id description -imageUrl")
      .populate("userId", "username");
    res.status(200).render("shop/product-list", {
      products,
      title: "Products",
      path: "/products",
    });
  } catch (err) {
    res
      .status(404)
      .render("404", { title: "Something went wrong", path: "/error" });
  }
};

exports.getCart = (req, res) => {
  req.user
    .getCart()
    .then((products) => {
      res.render("shop/cart", {
        title: "Cart",
        path: "/cart",
        products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addToCart = (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((result) => {
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
  req.user
    .getOrders()
    .then((orders) => {
      res.render("shop/orders", { title: "Orders", path: "/orders", orders });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postOrder = (req, res) => {
  req.user.addOrder().then(() => {
    res.redirect("/");
  });
};

exports.getProductDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.render("shop/product-details", {
      title: "Details Page",
      path: "/products",
      product,
    });
  } catch (err) {
    res
      .status(404)
      .render("404", { title: "Something went wrong", path: "/error" });
  }
};

exports.deleteCartItem = (req, res) => {
  const { id } = req.body;

  req.user
    .deleteItemFromCart(id)
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => {
      console.log(err);
    });
};
