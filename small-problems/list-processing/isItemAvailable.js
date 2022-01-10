function isItemAvailable(inventoryID, transactionsList) {

  let itemTransactions = transactionsFor(inventoryID, transactionsList);
  let sum = 0;
  itemTransactions.forEach(trans => {
    if (trans['movement'] === 'in') {
      sum += trans['quantity'];
    } else {
      sum -= trans['quantity'];
    }
  });

  return sum > 0;


  function transactionsFor(inventoryID, transactionsList) {
    return transactionsList.filter(history => history['id'] === inventoryID);
  }
}