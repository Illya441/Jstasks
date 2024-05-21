/* Завдання 2. 
Створити функцію яка буде приймати масив
чисел та повертати тільки унікальні елементи масиву. */

function getUniqueElements(nums = []) {

    // Перевірка, якщо масив порожній 
    if (nums.length === 0) {
        throw "пустой масив";
    }

    // Створення нового масиву, в якому відсутні дублікати
    const uniqueArray = [];
    nums.forEach((num) => {

        //для меня проверка, какое значение у числа 
        console.log(`Число ${num} его значение: ${!uniqueArray.includes(num)}`);

        if (!uniqueArray.includes(num)) {

            //через push я добавляю ті елементи які  мають true тобто не мають дублікатів
            uniqueArray.push(num);
        }
    });

    return uniqueArray;
}
try {
    const numbers = [1, 1, 5, 7,];
    const uniqueNumbers = getUniqueElements(numbers);
    console.log(`num = [${numbers}]\n\nUniqueElements: ${uniqueNumbers}`);
} catch (error) {
    console.log("error:", error);
}



/* includes -  перевіряє, чи міститься поточний елемент item у масиві uniqueArray.
Метод includes() повертає true, якщо масив містить елемент, та false, якщо не містить.
"!" перед uniqueArray перевертає includes і він повертає false, 
якщо масив містить елемент, та true, якщо не містить. */


