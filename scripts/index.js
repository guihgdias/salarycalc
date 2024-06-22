let calcSalaryButton = document.querySelector('#calcSalary');
let showSalaryLabel = document.querySelector('.showSalary');

function returnInputValues() {
  let salaryPerHour = document.querySelector('#salaryPerHour').value;
  let hoursWorked = document.querySelector('#hoursWorked').value;

  let salary = salaryPerHour * hoursWorked;

  showSalaryLabel.innerHTML = salary.toFixed(2);

  return console.log(salary);
}

calcSalaryButton.addEventListener('click', returnInputValues);