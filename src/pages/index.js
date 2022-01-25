import "./index.css";
import "../components/images.js";
import { menuItems } from "../components/menu.js";
import { cards, slide, sidebar, menuContainer, menuButtons, logotype, activeClass, deactiveSectionClass, page, content, popups, menuTemplate } from "../components/constants.js";
import { openPopup, closePopup, closePopupByEscape, closePopupByOverlay, popupAddListeners } from "../components/popup.js";

setEventListeners();
setMenuActive(menuButtons);
// renderMenu();

function setEventListeners() {
    sidebar.addEventListener("mouseover", menuOpen);
    sidebar.addEventListener("mouseout", menuClose);
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            openPopup(card.id);
        });
    });
}

function setMenuActive(menuButtons) {
    menuButtons.forEach((menuButton) => {
        if (menuButton.id === slide.id) {
            menuButton.classList.add("menu__item_active");
        } else {
            menuButton.classList.remove("menu__item_active");
        }
    });
}

function menuOpen() {
    menuContainer.classList.remove("menu_disabled");
}

function menuClose() {
    if (!slide.classList.contains("home-screen")) {
        menuContainer.classList.add("menu_disabled");
    }
}

function renderMenu() {
    sidebar.innerHTML = menuItems;
}
