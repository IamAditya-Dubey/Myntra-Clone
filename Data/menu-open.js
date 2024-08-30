let menuIcon = document.querySelector(".menu-mobile-icon");
let closeMenuIcon = document.querySelector(".close-menu-button");
let navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
  navBar.classList.add("menu-mobile-icon-active");
  closeMenuIcon.classList.add("close-menu-button-active");
} );

closeMenuIcon.addEventListener("click", () => {
  navBar.classList.remove("menu-mobile-icon-active");
  closeMenuIcon.classList.remove("close-menu-button-active");
});