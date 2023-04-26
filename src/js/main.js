// Toggle mobile menu

const body = document.querySelector('body');
const menuButton = document.querySelector('.main-nav__menu-toggle');
const menuButtonLabel = document.querySelector('.main-nav__menu-toggle-label');
const navItems = document.querySelectorAll('.main-nav__item');

menuButton.addEventListener('click', () => {
    body.classList.toggle('is-active');
    if (body.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false');
        menuButtonLabel.innerHTML = 'Open main menu';
    } else {
        this.setAttribute('aria-expanded', 'true');
        menuButtonLabel.innerHTML = 'Close main menu';
    }
});

// Toggle mobile submenu

const submenuButtons = document.querySelectorAll('.main-nav__submenu-toggle');

submenuButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('main-nav__submenu-toggle--is-active');
    });
});

// Get height of site header

const siteHeader = document.querySelector('.site-header');
const height = siteHeader.offsetHeight;
const navList = document.querySelector('.main-nav__list');

navList.style.top = `${height}px`;