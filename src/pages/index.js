import "./index.css";
import logo from "../images/logo.png";
import homescreen from "../images/homescreen.jpg";

const menuButtons = document.querySelectorAll(".menu__item");

menuButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        changeButtonState(btn);
    });
});

function changeButtonState(btn) {
    const activeClass = "menu__item_active";
    if (!btn.classList.contains(activeClass)) {
        menuButtons.forEach((btn) => {
            btn.classList.remove(activeClass);
        });
        btn.classList.add(activeClass);
    } else {
        btn.classList.remove(activeClass);
    }
}
