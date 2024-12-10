import {mediaQuery} from "./utils.js";
const TO_TOP_BUTTON_THRESHOLD = 300;
const toTopButton = document.querySelector(".btn_to-top");

function showToTopButton() {
    if (window.scrollY > TO_TOP_BUTTON_THRESHOLD) {
        toTopButton.style.bottom = "8px";
    } else {
        toTopButton.style.bottom = "-100%";
    }
}

function toggleScrollBtnDisplay(e) {
    if (e.matches) {
        toTopButton.classList.remove("display-none");
    } else {
        toTopButton.classList.add("display-none");
    }
}

export function scrollToTop() {
    toggleScrollBtnDisplay(mediaQuery)
    mediaQuery.addEventListener('change', toggleScrollBtnDisplay)
    window.addEventListener('scroll', showToTopButton);
    toTopButton.addEventListener('click', () => window.scrollTo(0, 0));
}



