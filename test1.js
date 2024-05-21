/* Условие 1
Створити функцію яка буде приймати масив чисел та повертати найбільший та найменший елемент у масиві, 
не використовуючи Math.max та Math.min. */

function findMinMax(nums = []) {

  //Проверка если масив будет пустой 
  if (nums.length === 0) {
    throw "пустой масив";
  }

  // Начальные значения
  let min = nums[0];
  let max = nums[0];

  // цикл сравнения чисел, где находится большое и маленькое число в массиве
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    } else if (nums[i] > max) {
      max = nums[i];
    }
  }

  return { min, max };
}

try {
  const numbers = [10, 6, 2, 19, 12];
  let result = findMinMax(numbers);
  console.log(`array: [${numbers}],\n min: ${result.min},\n max: ${result.max}.`);
} catch (error) {
  console.log("error:", error);
}




