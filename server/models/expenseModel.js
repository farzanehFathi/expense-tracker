const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema(
  {
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    necessity: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("expense", expenseSchema);
