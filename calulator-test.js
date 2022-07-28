
it('should calculate the monthly payment correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 6})).toEqual('111.02');
});

it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 10043, years: 8, rate: 5.8})).toEqual('131.00');
});

it("should return a result that is a string type", function() {
  expect(calculateMonthlyPayment({amount: 10043, years: 8, rate: 5.8})).toBeInstanceOf(String);
});
