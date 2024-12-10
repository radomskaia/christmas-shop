import {mediaQuery} from "./utils.js";
const ACTIVE_CLASS = "btn_burger--active";

const burgerButton = document.querySelector(".btn_burger");
const navigation = document.querySelector(".nav");

function switchMobileNav() {
    burgerButton.classList.toggle(ACTIVE_CLASS);

    if (burgerButton.classList.contains(ACTIVE_CLASS)) {
        window.scrollTo(0, 0)
    }
}

function closeMobileNavDesktop(e) {
    if (!e.matches) {
        burgerButton.classList.remove(ACTIVE_CLASS);
    }
}

export function burgerMenu() {
    burgerButton.addEventListener("click", switchMobileNav);
    navigation.addEventListener("click", (e) => {
        if (e.target.classList.contains("link_nav")) {
            switchMobileNav();
        }
    });
    mediaQuery.addEventListener("change", closeMobileNavDesktop)
}
