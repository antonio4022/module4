
var calculateAmountOwed = function () {
    var amount = document.querySelector('#amount').value;
    var tipPercent = document.querySelector('#tip').value;
    var amountNumber = parseInt(amount);
    var tip = parseInt(tipPercent);
    var tipAmount = amountNumber * (tipPercent / 100);
    var finalBill = tipAmount + amountNumber;


    document.getElementById('tipAmount').innerHTML = 'The tip amount is $' + tipAmount.toFixed(2);

    document.getElementById('totalBill').innerHTML = 'The total bill is ' + finalBill.toFixed(2);

}
