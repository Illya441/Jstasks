// Найти сумму всех чисел в заданном диапазоне. 
// Функция должна принимать 2 параметра, минимальное и максимальное значение диапазона и возвращать в ответе сумму.
// если вдруг пользователь введет или передаст первое число больше чем второе то нужно выдать ошибку

function sumInRange(min = null, max = null) {

    // если первое чило больше второго, выводит ошибку "переставьте числа"
    if (min > max) {
        throw "переставьте числа";
    }

    // i ровно минимальному число и не больше max, проходит все числа в заданом диапазоне 
    for (let i = min; i <= max; i++) {
        // сумирует числа
        sum += i;
    }
    return sum;

}

try {
    let sum = 0;
    console.log(sumInRange(7, 5));
} catch (error) {
    console.log("error:", error);
}

