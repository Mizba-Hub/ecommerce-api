const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customers");
const productRoutes = require("./routes/products");
const brandRoutes = require("./routes/brands");
const categoryRoutes = require("./routes/categories");
const orderRoutes = require("./routes/order");

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

const DB_CONNECTION_STRING = process.env.DB_URL;

const app = express();
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);

mongoose.connect(DB_CONNECTION_STRING);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Error occured", error);
});

database.once("connected", () => {
  console.log("Database connected");
});

app.listen(PORT, () => {
  console.log("Server is waiting for the request on port:", PORT);
});
