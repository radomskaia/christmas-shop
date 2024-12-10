import {mediaQuery} from "./utils.js";
const TO_TOP_BUTTON_THRESHOLD = 300;
const toTopBth = document.querySelector(".btn_to-top");

function showToTopButton() {
    if (window.scrollY > TO_TOP_BUTTON_THRESHOLD) {
        toTopBth.style.bottom = "8px";
    } else {
        toTopBth.style.bottom = "-100%";
    }
}

function toggleScrollBtnDisplay(e) {
    if (e.matches) {
        toTopBth.classList.remove("display-none");
    } else {
        toTopBth.classList.add("display-none");
    }
}

export function scrollToTop() {
    toggleScrollBtnDisplay(mediaQuery)
    mediaQuery.addEventListener('change', toggleScrollBtnDisplay)
    window.addEventListener('scroll', showToTopButton);
    toTopBth.addEventListener('click', () => window.scrollTo(0, 0));
}



