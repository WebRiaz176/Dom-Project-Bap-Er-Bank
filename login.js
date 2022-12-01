console.log('hello');

document.getElementById('submit-btn').addEventListener('click', function(){
  //console.log('submit okay');
  
  const emailField = document.getElementById('email-btn');
  const emailInput = emailField.value;
  
  const passwordField = document.getElementById('pass-btn');
  const passwordInput = passwordField.value;
  
  if(emailInput === 'atif@gmail.com' && passwordInput === '1234'){
    window.location.href= 'bank.html';
  }
  else{
    alert('wrong input');
  }
})
