// Завдання 2. Створити функцію яка буде приймати масив чисел та повертати тільки унікальні елементи масиву.
// const numbers = [10, 25, 3, 8, 5, 25, 3, 2, 7, 8, 10];
const numbers = [];

function getUniqueElements(num) {
    // Перевірка, якщо масив порожній 
    if (num.length === 0) {
        return undefined;
    }

    // Створення нового масиву, в якому відсутні дублікати
    const uniqueArray = [];
    num.forEach((item) => {
      //для меня проверка, какое значение у числа 
        console.log(`Число ${item} его значение: ${!uniqueArray.includes(item)}`);
        // includes -  перевіряє, чи міститься поточний елемент item у масиві uniqueArray. Метод includes() повертає true, якщо масив містить елемент, та false, якщо не містить.

        //"!" перед uniqueArray перевертає includes і він повертає false, якщо масив містить елемент, та true, якщо не містить.
        if (!uniqueArray.includes(item)) {
            //через push я добавляю ті елементи які  мають true тобто не мають дублікатів
            uniqueArray.push(item);
        }
    });

    return uniqueArray;
}

const uniqueNumbers = getUniqueElements(numbers);
console.log(`num = [${numbers}]\n\nUniqueElements: ${uniqueNumbers}`);




