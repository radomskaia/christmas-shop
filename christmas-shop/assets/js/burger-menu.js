import {mediaQuery} from "./utils.js";


const burgerBtn = document.querySelector(".btn_burger");
const nav = document.querySelector(".nav");

function switchMobileNav() {
    burgerBtn.classList.toggle("btn_burger--active");

    if (burgerBtn.classList.contains("btn_burger--active")) {
        document.documentElement.style.overflow = "hidden";
        window.scrollTo(0, 0)

    } else {
        document.documentElement.style.overflow = "";
    }
}

function closeMobileNavDesktop(e) {
    if (!e.matches) {
        burgerBtn.classList.remove("btn_burger--active");
        document.documentElement.style.overflow = "";
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
