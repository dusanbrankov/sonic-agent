// Toggle hamburger menu

const menuButton = document.querySelector(".main-nav__menu-btn");

menuButton.addEventListener("click", function () {
  if (this.getAttribute("aria-expanded") === "false") {
    this.setAttribute("aria-expanded", "true");
  } else {
    this.setAttribute("aria-expanded", "false");
  };
});

// Toggle submenu

const submenuButtons = document.querySelectorAll(".main-nav__dropdown");

submenuButtons.forEach(button => {
  button.addEventListener("click", function () {
    if (this.getAttribute("aria-expanded") === "false") {
      this.setAttribute("aria-expanded", "true");
    } else {
      this.setAttribute("aria-expanded", "false");
    };
  });
});

// Get height of site header and position hamburger menu

const siteHeader = document.querySelector(".site-header");
const height = siteHeader.offsetHeight;
const mainMenu = document.querySelector(".main-nav__menu");

mainMenu.style.top = `${height}px`;