const Order = require("../Model/Order");
const Product = require("../Model/product");
const mongoose = require("mongoose");
const User = require("../Model/user");
// const Cart = require("../Model/cart");

exports.enterShop = (req, res) => {
  res.render("shop/index", {
    title: "Shop",
    path: "/",
    isAuthenticated: req.session.user != null,
  });
};

exports.getProducts = async (req, res) => {
  try {
    // const products = await Product.find()
    //   .select("imageUrl")
    //   .populate("userId", "username");

    const products = await Product.find();

    res.status(200).render("shop/product-list", {
      products,
      title: "Products",
      path: "/products",
      isAuthenticated: req.session.user != null,
    });
  } catch (err) {
    console.log(err);
    res.status(404).render("404", {
      title: "Something went wrong",
      path: "/error",
      isAuthenticated: req.session.user != null,
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    const pop = await req.session.user.populate("cart.items.productId");

    const products = pop.cart.items;

    res.render("shop/cart", {
      title: "Cart",
      path: "/cart",
      products,
      isAuthenticated: req.session.isLoggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(404).render("404", {
      title: "Could not fetch orders",
      path: "/error",
      isAuthenticated: req.session.user != null,
    });
  }
};

exports.addToCart = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    req.session.user.addToCart(product);
    res.redirect("/products");
  } catch (err) {
    console.log(err);
    res.status(404).render("404", {
      title: "Unexpected Error! Could not add into cart.",
      path: "/error",
      isAuthenticated: req.session.user != null,
    });
  }
};

exports.checkout = (req, res) => {
  res.render("shop/checkout", {
    title: "Checkout",
    path: "/checkout",
    isAuthenticated: req.session.user != null,
  });
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ "user._id": req.session.user._id });
    res.render("shop/orders", {
      title: "Orders",
      path: "/orders",
      orders,
      isAuthenticated: req.session.user != null,
    });
  } catch (err) {
    res.status(404).render("404", {
      title: err.message,
      path: "/error",
      isAuthenticated: req.session.user != null,
    });
  }
};

exports.postOrder = async (req, res) => {
  try {
    const populated = await req.session.user.populate("cart.items.productId");

    const products = populated.cart.items.map((item) => {
      return {
        ...item.productId._doc,
        qty: item.qty,
      };
    });

    const order = {
      items: products,
      user: {
        _id: req.session.user._id,
        username: req.user.username,
      },
    };

    await Order.insertMany(order);
    await User.findByIdAndUpdate(req.session.user._id, {
      // empty the cart
      $set: { cart: { items: [] } },
    });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(404).render("404", {
      title: err.message,
      path: "/error",
      isAuthenticated: req.session.user != null,
    });
  }
};

exports.getProductDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.render("shop/product-details", {
      title: "Details Page",
      path: "/products",
      product,
      isAuthenticated: req.session.user != null,
    });
  } catch (err) {
    res.status(404).render("404", {
      title: "Something went wrong",
      path: "/error",
      isAuthenticated: req.session.user != null,
    });
  }
};

exports.deleteCartItem = async (req, res) => {
  const { id } = req.body;

  try {
    await req.session.user.deleteItemFromCart(id);
    res.redirect("/cart");
  } catch (err) {
    console.log(err);
    res.status(404).render("404", {
      title: "Something went wrong",
      path: "/error",
      isAuthenticated: req.session.user != null,
    });
  }
};
