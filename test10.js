/* 
1) Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, 
которая функция принимает в качестве параметра, с такими условиями:

вывод "fizz" вместо чисел, кратных 3;
вывод "buzz" вместо чисел, кратных 5;
вывод "fizzbuzz" вместо чисел, кратных как 3, так и 5.

Пример:
Fizzbuzz(5)

Результат:
// 1
// 2
// fizz
// 4
// buzz */


function Fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        switch (true) {

            // кратное 3 и 5
            case i % 3 === 0 && i % 5 === 0:
                console.log("Fizzbuzz:", i);
                break;

            // кратное 3
            case i % 3 === 0:
                console.log("Fizz:", i);
                break;

            // кратное 5
            case i % 5 === 0:
                console.log("Buzz:", i);
                break;
                
            // не кратное 3 и 5
            default:
                console.log(i);
                break;
        }
    }
} Fizzbuzz(50);