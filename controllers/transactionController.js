const Transaction = require('../models/transactionModel');

// Add a new transaction
exports.addTransaction = async (req, res) => {
  try {
    const { type, category, amount, date, description } = req.body;
    const transaction = new Transaction({ type, category, amount, date, description });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: 'Error adding transaction', message: error.message });
  }
};

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching transactions', message: error.message });
  }
};

// Get transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.json(transaction);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching transaction', message: error.message });
  }
};

// Update transaction by ID
exports.updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTransaction) return res.status(404).json({ error: 'Transaction not found' });
    res.json(updatedTransaction);
  } catch (error) {
    res.status(400).json({ error: 'Error updating transaction', message: error.message });
  }
};

// Delete transaction by ID
exports.deleteTransaction = async (req, res) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!deletedTransaction) return res.status(404).json({ error: 'Transaction not found' });
    res.json({ message: 'Transaction deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting transaction', message: error.message });
  }
};

// Get summary of transactions
exports.getSummary = async (req, res) => {
  try {
    const income = await Transaction.aggregate([{ $match: { type: 'income' } }, { $group: { _id: null, total: { $sum: '$amount' } } }]);
    const expense = await Transaction.aggregate([{ $match: { type: 'expense' } }, { $group: { _id: null, total: { $sum: '$amount' } } }]);

    const totalIncome = income.length ? income[0].total : 0;
    const totalExpense = expense.length ? expense[0].total : 0;
    const balance = totalIncome - totalExpense;

    res.json({ totalIncome, totalExpense, balance });
  } catch (error) {
    res.status(400).json({ error: 'Error generating summary', message: error.message });
  }
};
