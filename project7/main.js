
var calculateAmountOwed = function () {
    var amount = document.querySelector('#amount').value;
    var tip = document.querySelector('#tip').value;
    var bill = document.querySelector('#owedAmount').value;

    var tipAmount = amount * (tip / 100);
    var finalBill = tipAmount + amount;
    return document.getElementById('bill') = finalBill;
}
