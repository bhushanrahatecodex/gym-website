// BURGER MENU TOGGLE
const burgers = document.querySelectorAll('.burger');
const navs = document.querySelectorAll('.nav-links');

burgers.forEach((burger, index) => {
    burger.addEventListener('click', () => {
        navs[index].classList.toggle('nav-active');
        burger.classList.toggle('toggle'); // optional animation
    });
});
