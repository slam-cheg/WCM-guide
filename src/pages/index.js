import "./index.css";
import "../components/images.js";

const sidebar = document.querySelector(".sidebar");
const menuContainer = sidebar.querySelector(".menu");
const menuButtons = document.querySelectorAll(".menu__item");
const slides = document.querySelectorAll(".section");
const logotype = document.querySelector(".header__logo");
const activeClass = "menu__item_active";
const deactiveSectionClass = "content_disabled";
const page = document.querySelector(".page");
const content = document.querySelector(".content__wrapper");
const sectionsArray = []; // Массив зависимости между секицями и пунктами меню(зависимость создается автоматически)

checkDOMElements();
function checkDOMElements() {
    slides.forEach((section) => {
        sectionsArray.push({ name: `${section.classList[1]}`, section: section });
    });
    for (let i = 0; i < sectionsArray.length; i++) {
        if (sectionsArray[i].name === "home-screen") {
            continue;
        } else {
            sectionsArray[i].button = menuButtons[i - 1];
        }
    }
    setEventListeners();
}

function setEventListeners() {
    sidebar.addEventListener("mouseover", menuOpen);
    logotype.addEventListener("click", disableSlides);
    sectionsArray.forEach((obj) => {
        if (obj.button !== undefined) {
            obj.button.addEventListener("click", () => {
                changeSlides(obj);
            });
        }
    });
}

function menuOpen() {
    menuContainer.classList.remove("menu_disabled");
}

function menuClose() {
    menuContainer.classList.add("menu_disabled");
}

function changeSlides(obj) {
    content.classList.add("content_resized");
    sidebar.classList.add("sidebar_disabled");
    sidebar.addEventListener("mouseout", menuClose);
    const btn = obj.button;
    const sect = obj.section;

    if (!btn.classList.contains(activeClass)) {
        menuButtons.forEach((btn) => {
            btn.classList.remove(activeClass);
        });
        btn.classList.add(activeClass);

        slides.forEach((obj) => {
            obj.classList.add(deactiveSectionClass);
        });
        sect.classList.remove(deactiveSectionClass);
        page.classList.add("page__light");
    } else {
        disableSlides();
    }
}

function disableSlides() {
    menuButtons.forEach((btn) => {
        btn.classList.remove(activeClass);
    });
    slides.forEach((slide) => {
        slide.classList.add(deactiveSectionClass);
    });
    slides[0].classList.remove(deactiveSectionClass);
    page.classList.remove("page__light");
    sidebar.classList.remove("sidebar_disabled");
    sidebar.removeEventListener("mouseout", menuClose);
    content.classList.remove("content_resized");
    menuOpen();
}
