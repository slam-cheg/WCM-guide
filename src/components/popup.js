import { popup } from "./constants";

export function openPopup() {
    popupAddListeners();
    popup.classList.add("popup_opened");
}
export function closePopup() {
    popup.classList.remove("popup_opened");
}

export function closePopupByOverlay(event) {
    if (event.type === "click") {
        if (event.target === event.currentTarget) {
            closePopup();
        }
    }
    removeEventListeners();
}

export function closePopupByEscape(event) {
    if (event.key === "Escape") {
        closePopup();
    }
}

export function popupAddListeners() {
    popup.addEventListener("click", (event) => {
        closePopupByOverlay(event);
    });
    window.addEventListener("keyup", (event) => {
        closePopupByEscape(event);
    });
}

export function removeEventListeners() {
    popup.removeEventListener("click", (event) => {
        closePopupByOverlay(event);
    });
}
