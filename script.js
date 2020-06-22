'use strict';

let frame = document.querySelector('#frame').contentWindow;
let button = document.querySelector('button');

button.addEventListener('click', outputNumber);

function outputNumber() {
    let num = prompt('Введите число');
    if (!isNaN(num)) {
        frame.document.querySelector('body').innerText = num;
        if (!document.querySelector('.output')) {
            let div = document.createElement('div');
            div.classList.add('output');
            document.querySelector('body').insertBefore(div, button.nextSibling);
        }
        document.querySelector('.output').innerText = parseInt(frame.document.querySelector('body').innerText) + 1;
    } else
        alert('Произошла ошибка');
}

window.onbeforeunload = function(e) {
    e.returnValue = 'Вы действительно хотите покинуть страницу?';
    return 'Вы действительно хотите покинуть страницу?';
}