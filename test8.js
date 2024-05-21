let blockProperty = {
    color: 'black',
    opacity: 0,
};

function editProperty(object = {}, key = '', value = null) {

    // создаю новый объект с помощью оператора spread копирую свойства из исходного объект
    let newObj = { ...object };

    // устанавливаю значение нового свойства.
    newObj[key] = value;
    return newObj;
}

console.log('blockProperty:', blockProperty);
console.log('editProperty:', editProperty(blockProperty, 'color', 'red'));






















// let blockProperty = {
//     color: 'black',
//     opacity: 0,
// };

// function editProperty(object, key, value) {
//     // Создаем новый объект с помощью оператора spread копирую свойства из исходного объект
//     let newObj = { ...object };
//     // Затем устанавливаю значение нового свойства.
//     newObj[key] = value;

//     return newObj;
// }

// console.log('blockProperty:',blockProperty);
// console.log('editProperty:',editProperty(blockProperty, 'color', 'red'));

