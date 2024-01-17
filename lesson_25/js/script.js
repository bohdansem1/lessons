"use strict";

// Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body;
// console.log(bodyElement);

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
function listCreator(liNum){  
  let newObjectUl = document.createElement('ul'); //оголошую нову змінну якій присвоюю новий елемент а саме список
  for(let i=0; i < liNum; ++i){ //роблю перебір від 0 до liNum щоб мати точну кількість повторень
    let newObjectLi = document.createElement('li'); //під час кожної ітерації створюється новий елемент списку
    newObjectUl.append(newObjectLi); // новий елемент списку додається всередині елементу ul вкінець при кожній ітерації
  }
  bodyElement.prepend(newObjectUl); //створений і наповнений елементами списку ul додаємо в body, всередину на початок
  console.log(bodyElement);
}
//за замовчення відбуватиметься 1 вивід якщо аргументів не буде вказано, якщо буде вказано к-кість аргументів, то виведеться потрібна к-кість айтемів
listCreator(3);

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.
bodyElement.classList.add('loaded');
if(bodyElement.classList.contains('loaded')){
  bodyElement.style.color = `green`;
}



// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
const items = document.querySelectorAll('.item');
items.forEach((item, counter) => {
  item.classList.add('active');
  item.innerHTML = `Елемент №${counter + 1}`;
});


// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки
const btn = document.querySelector('.button');
function scrollToBlock() {
	btn.scrollIntoView({
	block: "center",
	inline: "nearest",
	behavior: "smooth"
});}
scrollToBlock();

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector('.link');
link.dataset.linkColor = "100";
let linkAtrrValue = parseFloat(link.getAttribute('data-link-color'));
// console.log(linkAtrrValue);
if(linkAtrrValue < 200){
  link.style.color = `red`;
} else {
  link.style.color = `yellow`;
}
