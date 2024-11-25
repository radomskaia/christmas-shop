import {mediaQuery} from "./utils.js";

const toTopBth = document.querySelector(".btn_to-top");

function showToTopButton() {
    if (window.scrollY > 300) {
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
    mediaQuery.addEventListener('change', toggleScrollBtnDisplay)
    window.addEventListener('scroll', showToTopButton);
    toTopBth.addEventListener('click', () => window.scrollTo(0, 0));
}



