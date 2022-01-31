import "./index.css";
import "../components/images.js";

const sidebar = document.querySelector(".sidebar");
const header = document.querySelector(".header");
const slide = document.querySelector(".section");
const logotype = document.querySelector(".header__logo");
const content = document.querySelector(".content__wrapper");
const cards = document.querySelectorAll(".section-content__card");

const getResponse = (res) => {
    return res.text();
};

fetch("header.html")
    .then(getResponse)
    .then((html) => {
        header.innerHTML = html;
    });

fetch("menu.html")
    .then(getResponse)
    .then((html) => {
        sidebar.innerHTML = html;
    })
    .then(() => {
        const menuContainer = sidebar.querySelector(".menu");
        const menuButtons = menuContainer.querySelectorAll(".menu__item-container");
        const menuItems = menuContainer.querySelectorAll(".menu__item");
        sidebar.addEventListener("mouseover", () => {
            menuOpen(menuContainer);
        });
        sidebar.addEventListener("mouseout", () => {
            menuClose(menuContainer);
        });
        setMenuActive(menuButtons);
        menuItems.forEach((item) => {
            if (item.childNodes.length > 3) {
                const subitem = item.querySelector(".menu__subitem-container");
                item.addEventListener("mouseover", () => {
                    openSubmenu(item, subitem);
                });
                item.addEventListener("mouseout", () => {
                    closeSubmenu(item, subitem);
                });
            }
        });
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

function openSubmenu(button, subitem) {
    button.classList.add("menu__item_opened");
    subitem.classList.add("menu__subitem-container_opened");
}

function closeSubmenu(button, subitem) {
    subitem.classList.remove("menu__subitem-container_opened");
    button.classList.remove("menu__item_opened");
}
