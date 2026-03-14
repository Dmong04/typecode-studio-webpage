const menu = document.getElementById('mobile-menu');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', () => {
    menu.classList.remove('-translate-x-full');
    menu.classList.add('translate-x-0');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('translate-x-0');
    menu.classList.add('-translate-x-full');
});
