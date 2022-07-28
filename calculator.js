window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


function setupIntialValues() {
  const initialValues = {amount:10000, years:10, rate:6};
  let currentAmount =  document.getElementById("loan-amount");
  let currentYears =  document.getElementById("loan-years");
  let currentRate =  document.getElementById("loan-rate");
  //initial values set from array
  currentAmount.value = initialValues.amount;
  currentYears.value = initialValues.years;
  currentRate.value = initialValues.rate;
  update();
}

function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 100) / 12;
  let n = values.years * 12;
  let monthlyPayment = (values.amount * monthlyRate) / (1 - Math.pow(( 1 + monthlyRate), -n));

  return monthlyPayment.toFixed(2);
}

function updateMonthly(monthly) {
  const currentMonthlyPayment = document.getElementById('monthly-payment');
  currentMonthlyPayment.innerText = monthly;
}
