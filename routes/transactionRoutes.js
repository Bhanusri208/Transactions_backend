const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/addTransaction', transactionController.addTransaction);
router.get('/getTransactions', transactionController.getTransactions);
router.get('/getEachTransaction/:id', transactionController.getTransactionById);
router.put('/updateTransactions/:id', transactionController.updateTransaction);
router.delete('/deleteTransactions/:id', transactionController.deleteTransaction);
router.get('/summary', transactionController.getSummary);

module.exports = router;
