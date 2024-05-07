// 1) Создать функцию sum которая будет работать при таком вызове:
// sum(3)(4) // Output: 7

function sumNumber(a){
    return function(b){
        return a+b;
    }
}
                   // a  b
console.log(sumNumber(3)(4))