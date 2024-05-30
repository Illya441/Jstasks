/* ) Создай страничку с выводом кнопки "Показать картинку", 
при нажатии на эту кнопку нужно вывести рандомно одну из 5 картинок. Картинки можешь выбрать любые.
Каждый раз при клике на кнопку - картинка должна меняться рандомно на другую любую из 5. 
Картинки при нажатии не должны повторяться.
использовать библиотеки нельзя, пишем все на чисто js */

// масив с картинками
let imgs = [
    'images/1.jpg',
    'images/2.png',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg'
];

let image = document.getElementById('image');
let imageNumber = document.getElementById('image-number');
let button = document.getElementById('button');

// Массив показанных картинок
let shownImgs = [];

button.onclick = function () {
    if (shownImgs.length === imgs.length) {
        // Сбрасываем массив при заполненинии
        shownImgs = [];
    }

    // массив непоказанных картинок
    let noShowImgs = imgs.filter(img => !shownImgs.includes(img));
    console.log(noShowImgs);

    let randomIndex = Math.floor(Math.random() * noShowImgs.length);

    // Выбор изображения по случайному индексу
    let selectedImage = noShowImgs[randomIndex];

    // Добавление картинки в масив показаных
    shownImgs.push(selectedImage);
    console.log(shownImgs)

    // Обновление источника изображения
    image.src = selectedImage;

};
