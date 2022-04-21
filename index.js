const express = require("express");
const dbConnect = require("./config/dbConnect");
const productRouter = require("./routes/products.router");
const authRouter = require("./routes/auth.router");

const app = express();
app.use(express.json());

app.use("/products", productRouter);
app.use("/auth", authRouter);

const start = async () => {
  await dbConnect();

  app.listen(4000, () => {
    console.log("🚀 server up and running");
  });
};

start();
