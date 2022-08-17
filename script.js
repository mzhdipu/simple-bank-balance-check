

// Deposit
document.getElementById("btn-deposit").addEventListener("click", function () {

    // Deposit input value
    let depositInput = document.getElementById("deposit-input");
    let depositInputValue = parseFloat(depositInput.value);
    depositInput.value = "";

    // Deposit Display value
    let depositAmount = document.getElementById("deposit-amount");
    let depositAmountValue = parseFloat(depositAmount.innerText);

    // Update Deposit Display value
    let totalDepositValue = depositInputValue + depositAmountValue;

    // Display Total Deposit Value
    depositAmount.innerText = totalDepositValue.toFixed(2);

    // Get Current Balance
    let currentBalance = document.getElementById("current-balance");
    let currentBalanceValue = parseFloat(currentBalance.innerText);

    // Update Current Balance Amount [deposit input value + Current value]
    let updateCurrentValue = depositInputValue + currentBalanceValue;

    // Show Balance
    currentBalance.innerText = updateCurrentValue.toFixed(2)
})

// Withdraw
document.getElementById("btn-withdraw").addEventListener("click", function(){

    // Withdraw input value
    let withdrawInput = document.getElementById("withdraw-input");
    let withdrawInputValue = parseFloat(withdrawInput.value);
    withdrawInput.value = "";

    // Display Withdraw value 
    let withdrawAmount = document.getElementById("withdraw-amount");
    let withdrawAmountValue = parseFloat(withdrawAmount.innerText);

    // Update withdraw value 
    let updateWithdrawValue = withdrawInputValue + withdrawAmountValue;

    // Display Withdraw value after updateing value
    withdrawAmount.innerText = updateWithdrawValue.toFixed(2)


    // update current balance
    let currentBalance = document.getElementById("current-balance");
    let currentBalanceValue = parseFloat(currentBalance.innerText);

    // Update Current Balance Amount [current balance - Withdraw input value]
    let updateCurrentValue = currentBalanceValue - withdrawInputValue;

    // Show Balance
    currentBalance.innerText = updateCurrentValue.toFixed(2)
})