document.addEventListener("DOMContentLoaded", function () {
    // Retrieve transactions from localStorage
    var transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  
    var transactionList = document.getElementById("transactionList");
  
    // Display transactions on the page
    transactions.forEach(function(transaction) {
      var transactionItem = document.createElement("div");
      transactionItem.className = "transaction-item";
      transactionItem.innerHTML = "<strong>Amount:</strong> " + transaction.amount +
                                  " | <strong>Category:</strong> " + transaction.category +
                                  " | <strong>Type:</strong> " + transaction.type;
  
      transactionList.appendChild(transactionItem);
    });
  
    function deleteAllTransactions() {
      // Clear all transactions from localStorage
      localStorage.removeItem("transactions");
  
      // Clear the displayed transactions on the page
      transactionList.innerHTML = "All transactions deleted.";
    }
  });
  