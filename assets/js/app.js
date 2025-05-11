import { burgerMenu } from "./burger-menu.js";
import { slider } from "./slider.js";
import { timer } from "./timer.js";
import { renderCards } from "./renderCards.js";
import { modal } from "./modal.js";
import { switchCategory } from "./switchCategory.js";
import { scrollToTop } from "./scrollToTop.js";

export function init(page) {
  if (page === "home") {
    slider();
    timer();
  } else {
    switchCategory();
    scrollToTop();
  }

  renderCards("all", page);
  burgerMenu();
  modal();
}
