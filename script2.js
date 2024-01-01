function addTransaction() {
    var amount = document.getElementById("amount").value;
    var category = document.getElementById("category").value;
    var type = document.querySelector('input[name="type"]:checked').value;
  
    // Create a transaction object
    var transaction = { amount: amount, category: category, type: type };
  
    // Retrieve existing transactions from localStorage or initialize an empty array
    var transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  
    // Add the new transaction to the array
    transactions.push(transaction);
  
    // Store the updated array back to localStorage
    localStorage.setItem("transactions", JSON.stringify(transactions));
  
    // Redirect to the transactions.html page
    window.location.href = "transactions.html";
  }
  