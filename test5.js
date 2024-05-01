var string1 = "A man a plan a canal Panama";
var string2 = "картошка в поле";

function isPalindrome(str) {
    // перевод в нижний регистр и удаление всех сибволов, кроме чисел от 0-9 и букв: украиского,русского и английского алфавита 
    str = str.toLowerCase().replace(/[^a-zа-яёіїє0-9]/g, '');
    
    // Проверяем палиндром, сравнивая строку с её перевернутой версией
    // split - разбивает на массив символов
    // reverse - массив переворачивается
    // join - массив символов собирается обратно в строку
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(string1)); 
console.log(isPalindrome(string2)); 