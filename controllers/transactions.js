// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  PUBLIC
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
}

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  PUBLIC
exports.addTransaction = (req, res, next) => {
  res.send('POST transaction');
}

// @desc    Delete transactions
// @route   DELETE /api/v1/transactions/:id
// @access  PUBLIC
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transaction');
}
