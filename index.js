const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);

const connectDB = require("./database/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

/////for auth
const session = require("express-session");
const passport = require("passport");
require("./config/passport");
// 2. Creating an express app
const app = express();
const PORT = 4444;
// configuration dotenv

const cors = require("cors");

app.use(cors());
// configuration dotenv

//connection to db
connectDB();

app.use(express.json());
//[SECTION] BAckend Routes
app.use("/b1/users", userRoutes);
app.use("/b1/products", productRoutes);
app.use("/b1/carts", cartRoutes);
app.use("/b1/orders", orderRoutes);

app.use(
  session({
    secret: "your_secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
// app.use("/b2/users", authRoutes);

// 3. Defining the port
// const PORT = process.env.PORT; // 4444;

//  Starting the server
app.listen(PORT, () => {
  console.log(`Server-app running on port ${PORT}`);
});

module.exports = app;
