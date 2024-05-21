// Проверить, является ли заданное число простым. 
// Функция должна принимать число и возвращать true если число простое или false если нет.


const number = 14;
function PrimeNumber(number = null) {
  // Число меньше или равно 1, не простое число
  if (number <= 1) {
    return false;
  }

  // проверяются все доступные корни числа + проверяется корень чтобы не был больше самого числа 
  for (let i = 2; i * i <= number; i++) {
    // если число делится на ещё какое-либо число, то оно не простое
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(PrimeNumber(number)); 