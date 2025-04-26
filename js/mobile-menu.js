const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuContent = document.querySelector(".mobile-menu__content");
const disableBody = () => document.body.classList.add("disable-hover");
const enableBody = () => document.body.classList.remove("disable-hover");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");

  if (mobileMenu.classList.contains("is-open")) {
    disableBody();
  } else {
    enableBody();
  }
};

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

document.addEventListener("click", function (e) {
  // Якщо клік поза меню і кнопками, закриваємо меню
  if (
    !mobileMenu.contains(e.target) &&
    !menuBtnOpen.contains(e.target) &&
    !menuBtnClose.contains(e.target)
  ) {
    mobileMenu.classList.remove("is-open");
    enableBody();
  }
});
