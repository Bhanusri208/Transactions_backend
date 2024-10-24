const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ['income', 'expense'] },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
