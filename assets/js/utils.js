export const TABLET_WIDTH = 768;
const DELAY_TIME = 150;

export const mediaQuery = window.matchMedia(`(max-width: ${TABLET_WIDTH}px)`);

export const cardCategory = {
  "For Work": "card-work",
  "For Health": "card-health",
  "For Harmony": "card-harmony",
};

export function createDOMElement({
  tagName = "div",
  classList = "",
  textContent = "",
  attributes = {},
} = {}) {
  const element = document.createElement(tagName);
  if (classList.trim()) {
    element.classList.add(...classList.split(" "));
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) =>
      element.setAttribute(key, value),
    );
  }

  return element;
}

export function debounce(callback, delay = DELAY_TIME) {
  let timeoutID;
  return function (...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback(...args), delay);
  };
}
