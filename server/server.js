require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const expensesRoutes = require("./routes/expenses");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/expenses", expensesRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to the database & listening on port ${process.env.PORT}!`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
