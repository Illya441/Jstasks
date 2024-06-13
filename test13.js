/* Задача 1: Изменение содержимого элемента
Создайте HTML-документ с кнопкой и абзацем. При нажатии на кнопку измените текст абзаца.
 */

// document.getElementById("changeTextButton1").addEventListener('click', function () {
//     document.getElementById("text1").textContent = "change Text";
// });

/* _____________________________________________________________________________________________________________________________________ */
/* Задача 2: Добавление нового элемента
Создайте HTML-документ с кнопкой. При нажатии на кнопку добавьте новый элемент списка в существующий список.
 */

// let itemCounter = 5;
// document.getElementById("addListItem").addEventListener('click', function () {
//     let newElement = document.createElement('li');
//     newElement.textContent=`Item ${itemCounter} `;
//     document.getElementById("list-add").appendChild(newElement);
//     itemCounter++
// });

/* _____________________________________________________________________________________________________________________________________ */
/* Задача 3: Удаление элемента
Создайте HTML-документ с кнопкой и списком. При нажатии на кнопку удалите последний элемент списка.
 */

/* _____________________________________________________________________________________________________________________________________ */
// document.getElementById("removeLastItem").addEventListener('click', function () {
//     let list = document.getElementById("list-remove");
//     if (list.children.length > 0) {
//         list.removeChild(list.lastElementChild);
//     } else {
//         console.log("empty list")
//     }

// });

/* _____________________________________________________________________________________________________________________________________ */
/* Задача 4: Изменение стиля элемента
Создайте HTML-документ с кнопкой и абзацем. При нажатии на кнопку измените цвет текста абзаца.
 */

// document.getElementById("changeTextColor").addEventListener('click', function () {
//     document.getElementById("mainParagraph").style.color = "blue";
// });

/* _____________________________________________________________________________________________________________________________________ */
/* Задача 5: Валидация формы
Создайте HTML-документ с формой. При отправке формы проверьте, чтобы все поля были заполнены, и если нет, покажите сообщение об ошибке. */

// document.getElementById('myForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//     try {
//         if (username.length === 0) {
//             throw "Поле 'username' не заполнено";
//         }
//         if (password.length === 0) {
//             throw "Поле 'password' не заполнено";
//         } else {
//             console.log(`Вот данные:\nUsername:${username}\nPassword:${password}`);
//         }
//     } catch (error) {
//         console.log("error:", error);
//     }

// });
