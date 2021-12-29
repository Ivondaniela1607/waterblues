
document.getElementById("btn-menu").addEventListener("click", mostrar_menu)
document.getElementById("back_menu").addEventListener("click", ocultar_menu)

nav = document.getElementById("nav");
back_menu = document.getElementById("back_menu")

function mostrar_menu() {
  nav.style.right = "0px";
  back_menu.style.display = "block";
}

function ocultar_menu() {
  nav.style.right = "-250px";
  back_menu.style.display = "none";
}
