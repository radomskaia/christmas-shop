import {mediaQuery} from "./utils.js";

const TO_TOP_BUTTON_THRESHOLD = 300;
const toTopButton = document.querySelector(".btn_to-top");

function showToTopButton() {
    toTopButton.classList.toggle('btn_to-top--visible', window.scrollY > TO_TOP_BUTTON_THRESHOLD);
}

function toggleScrollBtnDisplay(e) {
    const shouldDisplay = e.matches;
    toTopButton.classList.toggle("display-none", !shouldDisplay);
}

export function scrollToTop() {
    toggleScrollBtnDisplay(mediaQuery)
    mediaQuery.addEventListener('change', toggleScrollBtnDisplay)
    window.addEventListener('scroll', showToTopButton);
    toTopButton.addEventListener('click', () => window.scrollTo(0, 0));
}
