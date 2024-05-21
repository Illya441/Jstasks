/* Условие 5
Написать функцию которая принимает строку и проверяет является ли она палиндромом. 
Палиндром это когда строка читается слева-направо и справа-налево одинаково. 
Если строка палиндром функция возвращает true, иначе false. */

// Обычные полиндромы
let string1 = "1234321";
let string2 = "Аргентина манит негра";
// Полиндром с учётом пробелов
let string3 = "34543";
let string4 = "Молоко дели л илед околом"
// Не палиндромы
let string5 = "Лев с волком";
let string6 = "Законы лжи";

let count = 1;

function isPalindrome(str = '') {

    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(`${count++}:${isPalindrome(string1)}`);
console.log(`${count++}:${isPalindrome(string2)}`);
console.log(`${count++}:${isPalindrome(string3)}`);
console.log(`${count++}:${isPalindrome(string4)}`);
console.log(`${count++}:${isPalindrome(string5)}`);
console.log(`${count++}:${isPalindrome(string6)}`);



/* isPalindrome функция
перевод в нижний регистр
Проверяем палиндром, сравнивая строку с её перевернутой версией
split - разбивает на массив символов
reverse - массив переворачивается
join - массив символов собирается обратно в строку */