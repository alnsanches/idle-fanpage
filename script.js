const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navbar');

toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});
