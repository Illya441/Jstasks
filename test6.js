// 2) Усложняем задачу - при проверке не учитываем пробелы. 
// Можно добавить в функцию второй параметр который будет 
// говорить о том нужно ли учитывать пробелы или нет.


// let string = "Молоко делилиледоколом";
let string = "Молоко делилилед околом";
let string2 = "Аргентина манит негра";
let answer = false;

// true без пробела false с пробелом 
function isPalindrome(str = '') {

    str = str.toLowerCase();

    // удаление пробелов 
    if (answer === true) {
        str = str.split(' ').join('');
        console.log("Без пробелов строка:", str);
    }

    let reversedStr = str.split('').reverse().join('');

    // проверка как перевораивается 
    console.log("Перевернутая строка:", reversedStr);
    return str === reversedStr;
}

console.log(isPalindrome(string));
console.log(isPalindrome(string2));

/*     // Проверяем палиндром, сравнивая строку с её перевернутой версией
    // split - разбивает на массив символов
    // reverse - массив переворачивается
    // join - массив символов собирается обратно в строку */