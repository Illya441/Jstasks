/*  */
function fibanachi(n) {
    // условие чтоб не было в отрицательных числах
    if (n === 0 || n === 1) {
        return n;
    } else {
        // формула фибоначи
        return fibanachi(n - 1) + fibanachi(n - 2);
    }
}

// для вывода всех чисел
function allFibanachiNumbers(n) {
    for (i = 0; i <= n; i++) {
        console.log(fibanachi(i));
    }
}
allFibanachiNumbers(3)