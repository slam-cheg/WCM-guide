import "./index.css";
import "../components/images.js";

const sidebar = document.querySelector(".sidebar");
const slide = document.querySelector(".section");
const logotype = document.querySelector(".header__logo");
const content = document.querySelector(".content__wrapper");
const cards = document.querySelectorAll(".section-content__card");

fetch("../menu.html")
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        sidebar.innerHTML = html;
    })
    .then(() => {
        const menuContainer = sidebar.querySelector(".menu");
        const menuButtons = menuContainer.querySelectorAll(".menu__item-container");
        sidebar.addEventListener("mouseover", () => {
            menuOpen(menuContainer);
        });
        sidebar.addEventListener("mouseout", () => {
            menuClose(menuContainer);
        });
        setMenuActive(menuButtons);
    });

function setMenuActive(menuButtons) {
    menuButtons.forEach((menuButton) => {
        if (menuButton.id === slide.id) {
            menuButton.classList.add("menu__item-container_active");
        } else {
            menuButton.classList.remove("menu__item_active");
        }
    });
}

function menuOpen(menuContainer) {
    menuContainer.classList.remove("menu_disabled");
}

function menuClose(menuContainer) {
    if (!slide.classList.contains("home-screen")) {
        menuContainer.classList.add("menu_disabled");
    }
}
