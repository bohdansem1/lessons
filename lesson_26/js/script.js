"use strict";

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener("click", linkAction);
    function linkAction() {
      item.classList.toggle('active')
    }
  });

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.
window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
  const bodyElement = document.querySelector('body');
  bodyElement.classList.add('loaded');
}


// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');
headerElement.addEventListener("mouseenter", addColor);
headerElement.addEventListener("mouseleave", removeColor);
function addColor(e){
  footerElement.classList.add('footer-red');
}
function removeColor(e){
  footerElement.classList.remove('footer-red');
}


// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

  let options = {  //Об'єкт спостерігач і його налаштування
    root: null,
    rootMargin: "0px",
    threshold: 1.0, //відсоток появи об'єкту у в'юпорті 0.3 це 30% від розміру елементу який відслідковуєтьсяб 1 це 100%
  };
      let timerElement = document.querySelector('span.item'); 
      let timerLength = parseFloat(timerElement.dataset.timerLength); 
      let timerInterval = parseFloat(timerElement.dataset.timerInterval); 
      let target = document.querySelector("#timer");


      let timer;
      let isTimerRunning = true; 

      let callback = function (entries, observer) {
      entries.forEach((entry) => {
      let i = 1;

      if (entry.isIntersecting && isTimerRunning) {
        timer = setInterval(() => {
          observer.unobserve(entry.target);
          timerElement.innerHTML = `${i}`;
          if (i === timerLength){
            clearInterval(timer)
            isTimerRunning = false;
            
          } else{
            ++i;
           
          }
        }, timerInterval);
      }  
    })
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(target);

