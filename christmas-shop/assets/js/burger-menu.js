import {mediaQuery} from "./utils.js";


const burgerBtn = document.querySelector(".btn_burger");
const nav = document.querySelector(".nav");

function switchMobileNav() {
    burgerBtn.classList.toggle("btn_burger--active");

    if (burgerBtn.classList.contains("btn_burger--active")) {
        window.scrollTo(0, 0)
    }
}

function closeMobileNavDesktop(e) {
    if (!e.matches) {
        burgerBtn.classList.remove("btn_burger--active");
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
