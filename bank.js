//console.log('hello');

//Deposit Part

document.getElementById("deposit-btn").addEventListener('click', function(){
 
 
  const depositField = document.getElementById("deposit-input");
  const depositFieldString = depositField.value;
  //console.log(depositFieldString);
  const newDeposit=parseFloat(depositFieldString);
  
  
  const preDepositField = document.getElementById("deposit-amount");
  const preDepositFieldString = preDepositField.innerText;
  const preDeposit = parseFloat(preDepositFieldString);
  
  const currentDeposit = preDeposit + newDeposit;
  preDepositField.innerText= currentDeposit;
  depositField.value='';
  
  const balanceField = document.getElementById('balance-amount');
  const balanceFieldString = balanceField.innerText;
  const newBalance = parseFloat(balanceFieldString);
  
  const newBalanceTotal = newBalance + newDeposit;
  
  balanceField.innerText= newBalanceTotal;
})



//Withdraw Part

document.getElementById('withdraw-btn').addEventListener('click', function(){
  
  const withdrawField = document.getElementById('withdraw-input');
  const withdrawFieldString = withdrawField.value;
  const newWithdrawTotal = parseFloat(withdrawFieldString);
  
  const preWithdrawInput = document.getElementById('withdraw-amount');
  const preWithdrawInputString = preWithdrawInput.innerText;
  
  const preWithdrawTotal = parseFloat(preWithdrawInputString);
  
  const currentWithdraw = preWithdrawTotal + newWithdrawTotal;
  
  preWithdrawInput.innerText=currentWithdraw;
  
  withdrawField.value='';
  
  const balanceTotal2 = document.getElementById('balance-amount');
  const balanceTotalString2 = balanceTotal2.innerText;
  const newBalanceTotal2 = parseFloat(balanceTotalString2);
  
  const currentBalance2 = newBalanceTotal2 - preWithdrawTotal;
  
  balanceTotal2.innerText = currentBalance2;

})
