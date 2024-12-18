const mongoose = require("mongoose");
const Expense = require("../models/expenseModel");

// GET all expenses
const getExpenses = async (req, res) => {
  const expenses = await Expense.find({}).sort({ createdAt: -1 });

  res.status(200).json(expenses);
};

// GET a single expense
const getExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such entry" });
  }

  const expense = await Expense.findById(id);

  if (!expense) {
    return res.status(404).json({ error: "No such entry" });
  }
  res.status(200).json(expense);
};

// Create a new expense
const createExpense = async (req, res) => {
  const { title, amount, category, necessity } = req.body;

  // Add doc to db

  try {
    const expense = await Expense.create({
      title,
      amount,
      category,
      necessity,
    });
    res.status(200).json(expense);
  } catch (err) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a new expense
const deleteExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such entry" });
  }

  const expense = await Expense.findOneAndDelete({ _id: id });

  if (!expense) {
    return res.status(400).json({ error: "No such entry" });
  }
  res.status(200).json(expense);
};

// UPDATE a new expense

const updateExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such entry" });
  }

  const expense = await Expense.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!expense) {
    return res.status(400).json({ error: "No such entry" });
  }
  res.status(200).json(expense);
};

module.exports = {
  getExpenses,
  getExpense,
  createExpense,
  deleteExpense,
  updateExpense,
};
