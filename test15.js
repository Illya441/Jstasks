/* 1) Нужно создать квадрат 60 на 60 пикселей и разместить рандомно на странице.
 Каждый раз обновляя страницу он должен быть в рандомном месте. */

/* document.addEventListener("DOMContentLoaded", function () {
    let square = document.getElementById('randomObject');
    
    square.style.left= Math.random() * (window.innerWidth - square.offsetWidth)+'px';
    square.style.top = Math.random() * (window.innerHeight - square.offsetHeight)+'px';
    }); */

/* 2) Добавить обработчик при наведении на квадрат: 
квадрат должен менять рандомно свое положения уходя от курсора. */

document.addEventListener("DOMContentLoaded", function () {
    let square = document.getElementById('randomObject');

    let halfWidth = square.offsetWidth / 2;
    let halfHeight = square.offsetHeight / 2;

    // центрирование квадрата
    square.style.left = `50%`;
    square.style.top = `50%`;
    square.style.transform = `translate(-${halfWidth}px ,-${halfHeight}px)`;

    function moveSquare() {
        square.style.left = Math.random() * (window.innerWidth - square.offsetWidth) + 'px';
        square.style.top = Math.random() * (window.innerHeight - square.offsetHeight) + 'px';
    }
    square.addEventListener('mousemove', moveSquare);
});