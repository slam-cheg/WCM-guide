import { popups } from "./constants";

export function openPopup(cardId) {
    for (let i = 0; popups.length; i++) {
        if (popups[i].id === cardId) {
            popups[i].classList.add("popup_opened");
            popupAddListeners(popups[i]);
            break;
        }
    }
}
export function closePopup(currentPopup) {
    currentPopup.classList.remove("popup_opened");
}

export function closePopupByOverlay(event, currentPopup) {
    if (event.type === "click") {
        if (event.target === event.currentTarget) {
            closePopup(currentPopup);
        }
    }
    removeEventListeners(currentPopup);
}

export function closePopupByEscape(event, currentPopup) {
    if (event.key === "Escape") {
        closePopup(currentPopup);
    }
}

export function popupAddListeners(currentPopup) {
    currentPopup.addEventListener("click", (event) => {
        closePopupByOverlay(event, currentPopup);
    });

    window.addEventListener("keyup", (event) => {
        closePopupByEscape(event, currentPopup);
    });
}

export function removeEventListeners(currentPopup) {
    currentPopup.removeEventListener("click", (event) => {
        closePopupByOverlay(event, currentPopup);
    });
}
