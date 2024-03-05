function toggleDrawer() {
    let nav = document.getElementById("nav");
    let burgerMenu = document.querySelector(".burger-menu");
    nav.classList.toggle('opened');
    burgerMenu.classList.toggle('clicked');
}
