const express = require("express");
const {
  getExpenses,
  getExpense,
  createExpense,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseController");

const router = express.Router();

// GET all expenses
router.get("/", getExpenses);

// GET a single expense
router.get("/:id", getExpense);

// POST a new expense
router.post("/", createExpense);

// DELETE a new expense
router.delete("/:id", deleteExpense);

// UPDATE a new expense
router.patch("/:id", updateExpense);

module.exports = router;
