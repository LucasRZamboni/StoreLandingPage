document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu");
  const ulMenu = document.querySelector(".ULmenu");
  const icon = menuButton.querySelector("ion-icon");

  menuButton.addEventListener("click", function () {
    ulMenu.classList.toggle("active");
    if (icon.name === "menu-outline") {
      icon.setAttribute("name", "layers-outline");
    } else {
      icon.setAttribute("name", "menu-outline");
    }
  });
});

