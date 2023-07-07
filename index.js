document.getElementById("exchange-btn").addEventListener("click", function() {
  
    var fromCurrency = document.getElementById("from-currency").value;
    var toCurrency = document.getElementById("to-currency").value;
    var amount = parseFloat(document.getElementById("amount").value);
  
   
    if (isNaN(amount)) {
      alert("Please enter a valid amount.");
      return;
    }
  
   
    var exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    var convertedAmount = amount * exchangeRate;
  
   
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = amount + " " + fromCurrency + " = " + convertedAmount.toFixed(2) + " " + toCurrency;
  });
  
  
  function getExchangeRate(fromCurrency, toCurrency) {
    var rates = {
      "USD": {
        "EUR": 0.85,
        "GBP": 0.72
      },
      "EUR": {
        "USD": 1.18,
        "GBP": 0.85
      },
      "GBP": {
        "USD": 1.38,
        "EUR": 1.18
      }
    };
  
    return rates[fromCurrency][toCurrency];
  }
  