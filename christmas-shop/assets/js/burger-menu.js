import {mediaQuery} from "./utils.js";
const ACTIVE_CLASS = "btn_burger--active";

const burgerBtn = document.querySelector(".btn_burger");
const nav = document.querySelector(".nav");

function switchMobileNav() {
    burgerBtn.classList.toggle(ACTIVE_CLASS);

    if (burgerBtn.classList.contains(ACTIVE_CLASS)) {
        window.scrollTo(0, 0)
    }
}

function closeMobileNavDesktop(e) {
    if (!e.matches) {
        burgerBtn.classList.remove(ACTIVE_CLASS);
    }
}

export function burgerMenu() {
    burgerBtn.addEventListener("click", switchMobileNav);
    nav.addEventListener("click", (e) => {
        if (e.target.classList.contains("link_nav")) {
            switchMobileNav();
        }
    });
    mediaQuery.addEventListener("change", closeMobileNavDesktop)
}
