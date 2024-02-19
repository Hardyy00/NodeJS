const Product = require("../Model/product");
// const Cart = require("../Model/cart");

exports.enterShop = (req, res) => {
  res.render("shop/index", {
    title: "Shop",
    path: "/",
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
    });
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .render("404", { title: "Something went wrong", path: "/error" });
  }
};

exports.getCart = async (req, res) => {
  try{
    const products = await req.user.getCart();

  res.render("shop/cart", {
    title: "Cart",
    path: "/cart",
    products,
  });
  }
};

exports.addToCart = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    req.user.addToCart(product);
    res.redirect("/products");
  } catch (err) {
    console.log(err);
    res.status(404).render("404", {
      title: "Unexpected Error! Could not add into cart.",
      path: "/error",
    });
  }
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
