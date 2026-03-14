const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');

closeMenu.addEventListener('click', () => {
    menu.classList.remove('max-md:w-full');
    menu.classList.add('max-md:w-0');
});

openMenu.addEventListener('click', () => {
    menu.classList.remove('max-md:w-0');
    menu.classList.add('max-md:w-full');
});