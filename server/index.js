const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const ContactModel = require("./models/Contact");
const ProductModel = require("./models/Product"); // Import Product Model
const productRoutes = require("./routes/productRoutes");
const ReviewModel = require("./models/Review");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes"); // Adjust path as needed
const Order = require('./models/Order'); // Adjust path as necessary


const morgan = require("morgan");
const helmet=require("helmet");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
// Use order routes
app.use("/api/orders", orderRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/user");

// Login API
app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({ status: "Success", userId: user._id }); // Send user ID
        } else {
          res.json({ status: "Error", message: "The password is incorrect" });
        }
      } else {
        res.json({ status: "Error", message: "No record existed" });
      }
    })
    .catch((err) => res.json({ status: "Error", message: err.message }));
});

// Signup API
app.post("/Signup", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Contact API
app.post("/Contact", (req, res) => {
  ContactModel.create(req.body)
    .then((contact) => res.json(contact))
    .catch((err) => res.json(err));
});

// Get All Products
app.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

// Add New Product
app.post("/products", async (req, res) => {
  try {
    const newProduct = await ProductModel.create(req.body);
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }
});

app.post("/addProduct", async (req, res) => {
  try {
    const newProduct = await ProductModel.create(req.body);
    res.json({ message: "Product Added Successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }
});

app.get("/getProducts", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

// Fetch all registered users
app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

// Get All Contact Form Submissions
app.get("/getContacts", async (req, res) => {
  try {
    const contacts = await ContactModel.find(); // Fetch all contacts from DB
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching contacts" });
  }
});

// ✅ GET single product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ POST a new review
app.post("/api/reviews", async (req, res) => {
  try {
    const { productId, text, rating } = req.body;

    if (!productId || !text || !rating) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = new ReviewModel({ productId, text, rating });
    await newReview.save();

    res.json({ message: "Review added successfully!", review: newReview });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ GET reviews for a specific product
app.get("/api/reviews/:productId", async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ productId: req.params.productId });

    if (reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found" });
    }

    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/purchaseProduct", async (req, res) => {
  try {
      const { productId, quantity } = req.body;

      const product = await ProductModel.findById(productId);
      if (!product) {
          return res.status(404).json({ message: "Product not found" });
      }

      if (product.stock < quantity) {
          return res.status(400).json({ message: "Not enough stock available" });
      }

      product.stock -= quantity;
      await product.save();

      res.json({ message: "Purchase successful", updatedStock: product.stock });
  } catch (error) {
      res.status(500).json({ message: "Error processing purchase", error });
  }
});


// Get Orders Route
app.get('/getOrders', async (req, res) => {
  try {
      const orders = await Order.find(); // Assuming 'Order' is the Mongoose model
      res.status(200).json(orders);
  } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving orders');
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
