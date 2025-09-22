const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuContent = document.querySelector(".mobile-menu__content");
const menuLinks = document.querySelectorAll(".mobile-menu a");
const disableBody = () => document.body.classList.add("disable-hover");
const enableBody = () => document.body.classList.remove("disable-hover");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");

  if (mobileMenu.classList.contains("is-open")) {
    disableBody();
    document.body.style.overflow = "hidden";
  } else {
    enableBody();
    document.body.style.overflow = "";
  }
};

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open"); // Закрити меню при кліку на посилання
    document.body.style.overflow = "";
  });
});

document.addEventListener("click", function (e) {
  if (
    !mobileMenu.contains(e.target) &&
    !menuBtnOpen.contains(e.target) &&
    !menuBtnClose.contains(e.target)
  ) {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
    enableBody();
  }
});
