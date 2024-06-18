/* Задача 6: Переключение видимости элемента
Создайте HTML-документ с кнопкой и абзацем. При нажатии на кнопку переключайте видимость абзаца.
 */
let state = 0;
let statuss = document.getElementById("paragraf")
document.getElementById("hideShowButton").addEventListener("click", function () {
    if (state === 0) {
        statuss.classList.add("hide");
        state = 1;
    } else {
        statuss.classList.remove("hide");
        state = 0;
    }
});

/* Задача 7: Счетчик кликов
Создайте HTML-документ с кнопкой. При каждом нажатии на кнопку увеличивайте счётчик и отображайте его значение.
 */
let counterSum = document.getElementById("counter");
document.getElementById("counterPlus").addEventListener("click", function () {
    let addition = parseInt(counterSum.textContent);
    addition++;
    counterSum.textContent = addition;
});
/* Задача 8: Изменение фона страницы
Создайте HTML-документ с кнопками для изменения фона страницы на разные цвета.
 */
document.getElementById("redButton").addEventListener("click", function () {
    document.body.style.background = "red";
});
document.getElementById("greenButton").addEventListener("click", function () {
    document.body.style.background = "green";
});
document.getElementById("blueButton").addEventListener("click", function () {
    document.body.style.background = "blue";
});
document.getElementById("startColor").addEventListener("click", function () {
    document.body.style.background = "white";
});


/* Задача 9: Динамическое создание таблицы
Создайте HTML-документ с формой для ввода данных в таблицу и кнопкой для добавления новой строки в таблицу.
 */
document.getElementById("addRowButton").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    try {
        if (name && age) {
            let table = document.getElementById("table");
            let row = table.insertRow();

            let nameCell = row.insertCell(0);
            let ageCell = row.insertCell(1);

            nameCell.innerText = name;
            ageCell.innerText = age;

            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
        } else if (name.length === 0) {
            throw "Поле 'name' не заполнено";
        } else if (age.length === 0) {
            throw "Поле 'age' не заполнено";
        }
    } catch (error) {
        console.log("error:", error);
    }
});

/* Задача 10: Изменение изображения
Создайте HTML-документ с несколькими изображениями и 
кнопками для переключения между ними. */
let imageList = [
    'images/1.jpg',
    'images/2.png',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg'
];

let image = document.getElementById('images');
let downButton = document.getElementById('prevButton');
let upButton = document.getElementById('button');
let imageIndex = 0;
let listIndex = imageList.length;
image.src = imageList[imageIndex];

document.getElementById("nextButton").addEventListener("click", function () {
    imageIndex++;
    if (imageIndex >= imageList.length) {
        imageIndex = 0;
    }
    image.src = imageList[imageIndex];
});

document.getElementById("prevButton").addEventListener("click", function () {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = imageList.length - 1;
    }
    image.src = imageList[imageIndex];
});



