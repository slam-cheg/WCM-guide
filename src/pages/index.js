import "./index.css";
import logo from "../images/logo.png";
import homescreen from "../images/homescreen.jpg";
import firstscreen from "../images/firstscreen.jpg";
import Reporting from "../images/Reporting.jpg";

const menuButtons = document.querySelectorAll(".menu__item");
const slides = document.querySelectorAll(".section");
const logotype = document.querySelector(".header__logo");
const activeClass = "menu__item_active";
const deactiveSectionClass = "content__disabled";
const page = document.querySelector(".page");

const sections = [
    {
        name: "default",
        section: slides[0],
    },
    {
        name: "first-screen",
        button: menuButtons[0],
        section: slides[1],
    },
    {
        name: "second-screen",
        button: menuButtons[1],
        section: slides[2],
    },
];

logotype.addEventListener("click", disableSlides);
sections.forEach((obj) => {
    if (obj.button !== undefined) {
        obj.button.addEventListener("click", () => {
            changeSlides(obj);
        });
    }
});

function changeSlides(obj) {
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
}
