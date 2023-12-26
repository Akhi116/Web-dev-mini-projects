const calculateAgeBtn = document.querySelector('.js-calculate-btn');
const result = document.querySelector('.js-result');

function calculateAge(){
  const inputDOB = document.querySelector('.js-dob');
  const bdyValue = inputDOB.value;

  if(!bdyValue){
    alert("Please enter the date of birth..!!");
    return;
  }

  const age = calculate(bdyValue);
  result.innerHTML = `You are ${age} ${(age>1) ? 'years' : 'year'} old!!`;
}


function calculate(bdyValue){
  const today = new Date();
  const bdyDate = new Date(bdyValue);

  const yearDiff = today.getFullYear()-bdyDate.getFullYear();
  const monthDiff = today.getMonth()-bdyDate.getMonth();

  if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < bdyDate.getDate())){
    yearDiff--;
  }

  return yearDiff;
}

calculateAgeBtn.addEventListener('click', () => {
  calculateAge();
});