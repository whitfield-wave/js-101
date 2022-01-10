function transactionsFor(inventoryID, transactionsList) {
  return transactionsList.filter(history => history['id'] === inventoryID);
}