// Завдання 1. Створити функцію яка буде приймати масив чисел та повертати найбільший та найменший елемент у масиві, не використовуючи Math.max та Math.min.

//Масив

const numbers = [10,6,2,19,12];
// const numbers = [];

function findMinMax(num) {
  //Проверка если масив будет пустой 
  if (num.length === 0) {
    return { min: undefined, max: undefined };
  }
// Начальные значения
  let min = num[0];
  let max = num[0];
// цикл сравнения чисел, где находится большое и маленькое число в массиве
  for (let i = 1; i < num.length; i++) {
      if (num[i] < min) {
          min = num[i];
      } else if (num[i] > max) {
          max = num[i];
      }
  }
  return { min, max };
}
const result = findMinMax(numbers);
console.log(`array: [${numbers}],\n min: ${result.min},\n max: ${result.max}`);


